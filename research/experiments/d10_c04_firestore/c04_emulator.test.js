"use strict";
// Research-only. Firebase Emulator + synthetic users. Not LogMate or genuine Google SSV.
const assert=require("node:assert/strict");
const {randomUUID}=require("node:crypto");
const PROJECT="demo-logmate-c04";
function guard(){
  if(process.env.GCLOUD_PROJECT!==PROJECT ||
     !/^(localhost|127\.0\.0\.1|\[::1\]):8080$/.test(process.env.FIRESTORE_EMULATOR_HOST||""))
    throw Error("SAFETY_STOP: demo-logmate-c04 and local Firestore Emulator :8080 required");
}
if(process.argv.includes("--guard-probe")){
  let stopped=false;try{guard();}catch(e){stopped=/SAFETY_STOP/.test(String(e));}
  assert.ok(stopped,"unsafe environment must be denied");
  console.log(JSON.stringify({guard:"PASS",network:false}));
  process.exit(0);
}
guard(); // Crucially before creating an SDK or connecting to any database.
const {Firestore,FieldValue}=require("@google-cloud/firestore");
const clients=Array.from({length:3},()=>new Firestore({projectId:PROJECT}));
const root="d10C04Research/"+randomUUID().replaceAll("-","");
const outcomes=[];
function refs(db,c){
  const p=root+"/cases/"+c;
  return {
    account:uid=>db.doc(p+"/accounts/"+uid),
    attempt:id=>db.doc(p+"/attempts/"+id),
    receipt:id=>db.doc(p+"/receipts/"+id),
    fulfillment:id=>db.doc(p+"/fulfillments/"+id),
    receipts:()=>db.collection(p+"/receipts"),
    fulfillments:()=>db.collection(p+"/fulfillments")
  };
}
async function seed(c,items){
  const r=refs(clients[0],c),b=clients[0].batch(),uids=new Set();
  for(const item of items){
    if(!uids.has(item.uid)){b.set(r.account(item.uid),{uid:item.uid,active:true,epoch:1,balance:0});uids.add(item.uid);}
    b.set(r.attempt(item.id),{uid:item.uid,epoch:1,offer:"offer-v1",amount:4});
  }
  await b.commit();
}
function event(kind,id,tx,uid="syntheticA"){
  return {kind,id,tx,uid,offer:"offer-v1",amount:4,
    signatureVerified:kind==="ssv",approved:kind==="comp"};
}
async function settle(db,c,e,abort=false){
  if(e.kind==="ssv"&&!e.signatureVerified)throw Error("REJECT_UNVERIFIED_FIXTURE");
  if(e.kind==="comp"&&!e.approved)throw Error("REJECT_UNAPPROVED_COMP");
  if(!["ssv","comp"].includes(e.kind))throw Error("REJECT_KIND");
  const r=refs(db,c),owner=r.account(e.uid),att=r.attempt(e.id);
  const receipt=r.receipt((e.kind==="ssv"?"google-":"publisher-")+e.tx);
  const fulfillment=r.fulfillment(e.id);
  return db.runTransaction(async t=>{
    // Read every document first; transaction callbacks must be side-effect free.
    const [o,a,rec,f]=await Promise.all([t.get(owner),t.get(att),t.get(receipt),t.get(fulfillment)]);
    if(!o.exists||!a.exists)throw Error("REJECT_MISSING_OWNER");
    const od=o.data(),ad=a.data();
    if(!od.active||od.epoch!==ad.epoch)throw Error("REJECT_INACTIVE_OWNER");
    if(od.uid!==e.uid||ad.uid!==e.uid||ad.offer!==e.offer||ad.amount!==e.amount)
      throw Error("REJECT_BINDING");
    if(rec.exists){
      const d=rec.data();
      if(d.uid!==e.uid||d.attempt!==e.id||d.amount!==e.amount)
        throw Error("REJECT_GLOBAL_PROVIDER_TX_REUSE");
    }
    if(f.exists && (f.data().uid!==e.uid||f.data().amount!==e.amount))
      throw Error("REJECT_FULFILLMENT_CONFLICT");
    if(abort)throw Error("INJECTED_PRECOMMIT");
    if(!rec.exists)t.create(receipt,{uid:e.uid,attempt:e.id,kind:e.kind,amount:e.amount});
    if(!f.exists){
      t.create(fulfillment,{uid:e.uid,attempt:e.id,amount:e.amount});
      t.update(owner,{balance:FieldValue.increment(e.amount)});
    }
    return {newGrant:!f.exists};
  },{maxAttempts:8});
}
async function retry(fn){
  for(let i=0;i<3;i++){
    try{return await fn();}
    catch(e){if(i<2&&[4,10,14].includes(e.code))continue;throw e;}
  }
}
async function state(c,uid="syntheticA"){
  const r=refs(clients[0],c);
  const [a,recs,fs]=await Promise.all([r.account(uid).get(),r.receipts().get(),r.fulfillments().get()]);
  return [a.data().balance,recs.size,fs.size];
}
async function scenario(name,body){await body(name);outcomes.push(name);}
async function main(){
  await scenario("ssv_comp_duplicate_concurrent",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"}]);
    await Promise.all([
      retry(()=>settle(clients[0],c,event("ssv","A","T1"))),
      retry(()=>settle(clients[1],c,event("comp","A","C1"))),
      retry(()=>settle(clients[2],c,event("ssv","A","T1")))
    ]);
    assert.deepEqual(await state(c),[4,2,1]);
  });
  await scenario("comp_before_late_ssv",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"}]);
    await settle(clients[0],c,event("comp","A","C1"));
    await settle(clients[1],c,event("ssv","A","T1"));
    assert.deepEqual(await state(c),[4,2,1]);
  });
  await scenario("committed_but_ack_lost",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"}]);
    await settle(clients[0],c,event("ssv","A","T1"));
    // Simulate losing the response *after* commit by discarding it; not network fault injection.
    await settle(clients[1],c,event("ssv","A","T1"));
    assert.deepEqual(await state(c),[4,1,1]);
  });
  await scenario("crash_before_commit",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"}]);
    await assert.rejects(settle(clients[0],c,event("ssv","A","T1"),true),/INJECTED_PRECOMMIT/);
    assert.deepEqual(await state(c),[0,0,0]);
    await settle(clients[1],c,event("ssv","A","T1"));
    assert.deepEqual(await state(c),[4,1,1]);
  });
  await scenario("provider_tx_cross_owner",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"},{uid:"syntheticB",id:"B"}]);
    await settle(clients[0],c,event("ssv","A","T1","syntheticA"));
    await assert.rejects(settle(clients[1],c,event("ssv","B","T1","syntheticB")),
      /REJECT_GLOBAL_PROVIDER_TX_REUSE/);
    assert.deepEqual(await state(c,"syntheticB"),[0,1,1]);
  });
  await scenario("deleted_owner_and_invalid_signature",async c=>{
    await seed(c,[{uid:"syntheticA",id:"A"}]);
    await assert.rejects(settle(clients[0],c,{...event("ssv","A","T1"),signatureVerified:false}),
      /REJECT_UNVERIFIED_FIXTURE/);
    await refs(clients[0],c).account("syntheticA").update({active:false});
    await assert.rejects(settle(clients[1],c,event("ssv","A","T1")),/REJECT_INACTIVE_OWNER/);
    assert.deepEqual(await state(c),[0,0,0]);
  });
  console.log(JSON.stringify({status:"PASS",cases:outcomes,project:PROJECT,runRoot:root,
    limitations:"Emulator only if executed; no Google signature verification or real HTTP; 3 SDK clients in one process"},null,2));
}
main().catch(e=>{console.error(JSON.stringify({status:"FAIL",error:e.message,completed:outcomes}));process.exitCode=1;})
 .finally(async()=>Promise.all(clients.map(c=>c.terminate())));
