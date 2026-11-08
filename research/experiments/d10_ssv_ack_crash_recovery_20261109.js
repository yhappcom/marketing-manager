"use strict";
// D10 standalone research-only fault-injection model, 2026-11-09.
// Models ideal atomic commit vs unsafe early ACK and split receipt/grant storage.
// Does not execute Firebase, AdMob, Google signing, or product code.
function dbInit(){return {attempts:{A:{uid:"pilot",offer:"v1",amount:4},B:{uid:"another",offer:"v1",amount:4}},receipts:{},fulfillments:{},balances:{pilot:0,another:0},deleted:{}};}
function cloneDb(db){return JSON.parse(JSON.stringify(db));}
function receipt(kind,attempt="A",id="T1",uid="pilot"){return {kind,attempt,id,uid,amount:4,signatureVerified:kind==="ssv",approved:kind==="comp"};}
function apply(db,ev,fault="ok"){
  const a=db.attempts[ev.attempt];
  if(!a||a.uid!==ev.uid||a.amount!==ev.amount)return "REJECT_BINDING";
  if(db.deleted[ev.uid])return "REJECT_DELETED";
  if(ev.kind==="ssv"&&!ev.signatureVerified)return "REJECT_UNSIGNED";
  if(ev.kind==="comp"&&!ev.approved)return "REJECT_UNAPPROVED";
  const key=(ev.kind==="ssv"?"SSV:":"COMP:")+ev.id;
  const old=db.receipts[key];
  if(old&&(old.attempt!==ev.attempt||old.uid!==ev.uid||old.amount!==ev.amount))return "REJECT_REPLAY_CROSS_BIND";
  if(fault==="before")return "RETRY_NO_COMMIT";
  const next=cloneDb(db);
  if(!old)next.receipts[key]={attempt:ev.attempt,uid:ev.uid,amount:ev.amount};
  if(!next.fulfillments[ev.attempt]){
    next.fulfillments[ev.attempt]={uid:ev.uid,amount:ev.amount};
    next.balances[ev.uid]=(next.balances[ev.uid]||0)+ev.amount;
  }
  Object.assign(db,next);
  return fault==="after"?"ACK_LOST_AFTER_COMMIT":"ACK_200";
}
function unsafePreAck(db,ev){return "ACK_200";}
function unsafeReceiptSplit(db,ev){
  const key="SSV:"+ev.id;
  if(db.receipts[key])return "ACK_200";
  db.receipts[key]={uid:ev.uid,attempt:ev.attempt,amount:ev.amount};
  return "CRASH_AFTER_RECEIPT_BEFORE_FULFILLMENT";
}
function runTests(){
const tests=[];
function test(name,check){let ok=false,error;try{ok=!!check();}catch(e){error=String(e);}tests.push({name,pass:ok,error});}
test("precommit failure leaves no receipt or balance",()=>{const d=dbInit(),x=apply(d,receipt("ssv"),"before");return x==="RETRY_NO_COMMIT"&&d.balances.pilot===0&&Object.keys(d.receipts).length===0;});
test("retry after precommit failure gives one",()=>{const d=dbInit(),e=receipt("ssv");apply(d,e,"before");return apply(d,e)==="ACK_200"&&d.balances.pilot===4&&Object.keys(d.fulfillments).length===1;});
test("commit then ACK loss persists grant",()=>{const d=dbInit(),e=receipt("ssv");return apply(d,e,"after")==="ACK_LOST_AFTER_COMMIT"&&d.balances.pilot===4;});
test("late ACK retry does not double",()=>{const d=dbInit(),e=receipt("ssv");apply(d,e,"after");return apply(d,e)==="ACK_200"&&d.balances.pilot===4&&Object.keys(d.receipts).length===1;});
test("compensation then SSV fulfills once",()=>{const d=dbInit();apply(d,receipt("comp","A","C1"));apply(d,receipt("ssv","A","T1"));return d.balances.pilot===4&&Object.keys(d.receipts).length===2&&Object.keys(d.fulfillments).length===1;});
test("SSV then compensation fulfills once",()=>{const d=dbInit();apply(d,receipt("ssv","A","T1"));apply(d,receipt("comp","A","C1"));return d.balances.pilot===4&&Object.keys(d.receipts).length===2;});
test("wrong UID rejected",()=>{const d=dbInit();return apply(d,{...receipt("ssv"),uid:"another"})==="REJECT_BINDING"&&d.balances.pilot===0;});
test("wrong reward amount rejected",()=>{const d=dbInit();return apply(d,{...receipt("ssv"),amount:7})==="REJECT_BINDING";});
test("unsigned SSV rejected",()=>{const d=dbInit();return apply(d,{...receipt("ssv"),signatureVerified:false})==="REJECT_UNSIGNED";});
test("unapproved compensation rejected",()=>{const d=dbInit();return apply(d,{...receipt("comp"),approved:false})==="REJECT_UNAPPROVED";});
test("global provider transaction ID cannot change UID",()=>{const d=dbInit();apply(d,receipt("ssv","A","T1","pilot"));return apply(d,receipt("ssv","B","T1","another"))==="REJECT_REPLAY_CROSS_BIND"&&d.balances.another===0;});
test("different verified UID can earn separate reward",()=>{const d=dbInit();apply(d,receipt("ssv","A","T1","pilot"));apply(d,receipt("ssv","B","T2","another"));return d.balances.pilot===4&&d.balances.another===4;});
test("deleted UID cannot receive a new grant",()=>{const d=dbInit();d.deleted.pilot=true;return apply(d,receipt("ssv"))==="REJECT_DELETED"&&d.balances.pilot===0;});
test("invalid signature cannot write receipt",()=>{const d=dbInit();apply(d,{...receipt("ssv"),signatureVerified:false});return Object.keys(d.receipts).length===0;});
test("unsafe 200 before commit can lose reward",()=>{const d=dbInit();return unsafePreAck(d,receipt("ssv"))==="ACK_200"&&d.balances.pilot===0;});
test("split receipt-before-grant crash can strand grant",()=>{const d=dbInit(),e=receipt("ssv");return unsafeReceiptSplit(d,e).startsWith("CRASH")&&unsafeReceiptSplit(d,e)==="ACK_200"&&d.balances.pilot===0;});
let sequences=0,violations=0,committedSequences=0,missingAfterCommit=0;
const events=[["ssv","before"],["ssv","after"],["ssv","ok"],["comp","before"],["comp","after"],["comp","ok"]];
for(let a=0;a<6;a++)for(let b=0;b<6;b++)for(let c=0;c<6;c++)for(let d=0;d<6;d++){
 const x=dbInit();let committed=false;
 for(const i of [a,b,c,d]){
   const [kind,fault]=events[i];
   const e=kind==="ssv"?receipt("ssv","A","T1"):receipt("comp","A","C1");
   const response=apply(x,e,fault);
   if(response==="ACK_200"||response==="ACK_LOST_AFTER_COMMIT")committed=true;
 }
 sequences++;
 const count=Object.keys(x.fulfillments).length;
 const receipts=Object.keys(x.receipts).length;
 if(count>1||x.balances.pilot!==count*4||receipts>2||(receipts>0&&count!==1))violations++;
 if(committed){committedSequences++;if(x.balances.pilot!==4)missingAfterCommit++;}
}
test("1296 crash/retry sequences preserve atomic invariant",()=>sequences===1296&&violations===0);
test("1280 committed sequences retain exactly one award",()=>committedSequences===1280&&missingAfterCommit===0);
return {status:tests.every(x=>x.pass)?"PASS":"FAIL",checks:tests.length,pass:tests.filter(x=>x.pass).length,sequences,committedSequences,violations,missingAfterCommit,failures:tests.filter(x=>!x.pass),scope:"Deterministic pure JS fault model; no actual Firestore or Google-signed callbacks"};
}
const summary=runTests();
console.log(JSON.stringify(summary,null,2));
if(summary.status!=="PASS")process.exitCode=1;
