"use strict";
// D10 isolated research test. Simulates event interleavings of naive check-then-award and optimistic compare-and-swap.
// No Firebase SDK/network, no real Google SSV verification, no mutable LogMate product state.
function schedules(n) {
  const workers = Array.from({length:n},(_,i)=>"w"+i);
  const out=[],phase=Array(n).fill(0);
  function dfs(seq) {
    if(seq.length===2*n){out.push(seq);return;}
    for(let i=0;i<n;i++) {
      if(phase[i]===2)continue;
      const event=workers[i]+"."+(phase[i]===0?"read":"commit");
      phase[i]++;
      dfs([...seq,event]);
      phase[i]--;
    }
  }
  dfs([]);
  return out;
}
function simulate(order, workers, mode="cas", attempts={"A":{uid:"pilot",amount:4}}) {
  const s={version:0,paid:0,fulfilled:new Map(),transactions:new Map(),audit:new Set(),retries:0,commitOps:0};
  const reads=new Map();
  function validate(w) {
    const a=attempts[w.attempt];
    if(!a)throw Error("UNKNOWN_ATTEMPT");
    if(a.uid!==w.uid)throw Error("WRONG_UID");
    if(a.amount!==w.amount)throw Error("OFFER_MISMATCH");
    if(w.kind==="ssv"&&!w.verified)throw Error("UNVERIFIED_SSV");
    if(w.kind==="comp"&&!w.approved)throw Error("UNAPPROVED_COMPENSATION");
    if(w.kind!=="ssv"&&w.kind!=="comp")throw Error("UNKNOWN_KIND");
    if(w.kind==="ssv"&&s.transactions.has(w.tx)&&s.transactions.get(w.tx)!==w.attempt)throw Error("TRANSACTION_REUSE");
  }
  for(const item of order){
    const [name,op]=item.split(".");
    const w=workers[name];
    if(op==="read"){
      reads.set(name,{version:s.version,already:s.fulfilled.has(w.attempt)});
      continue;
    }
    if(op!=="commit"||!reads.has(name))throw Error("INVALID_ORDER");
    validate(w);
    let prior=reads.get(name);
    if(mode==="cas"&&prior.version!==s.version){
      prior={version:s.version,already:s.fulfilled.has(w.attempt)};
      s.retries++;
    }
    // A naive read-then-credit does not recheck after a concurrent read.
    if(!prior.already){
      s.paid+=w.amount;
      s.fulfilled.set(w.attempt,{uid:w.uid,amount:w.amount});
      s.version++;
    }
    if(w.kind==="ssv"){
      if(!s.transactions.has(w.tx)){s.transactions.set(w.tx,w.attempt);s.version++;}
      s.audit.add("ssv:"+w.tx);
    } else s.audit.add("comp:"+w.attempt+":"+w.id);
    s.commitOps++;
  }
  return {paid:s.paid,fulfilled:s.fulfilled.size,retries:s.retries,transactions:s.transactions.size,audit:s.audit.size};
}
function run(){
  const w2={w0:{kind:"ssv",attempt:"A",uid:"pilot",amount:4,verified:true,tx:"tx1",id:"S1"},w1:{kind:"comp",attempt:"A",uid:"pilot",amount:4,approved:true,id:"C1"}};
  const w3={...w2,w2:{kind:"ssv",attempt:"A",uid:"pilot",amount:4,verified:true,tx:"tx1",id:"S1_REDELIVER"}};
  const two=schedules(2),three=schedules(3);
  const naiveTwo=two.map(x=>simulate(x,w2,"naive")),casTwo=two.map(x=>simulate(x,w2,"cas"));
  const naiveThree=three.map(x=>simulate(x,w3,"naive")),casThree=three.map(x=>simulate(x,w3,"cas"));
  const rejected=(workers,attempts,fragment)=>{
    try{simulate(["w0.read","w0.commit"],workers,"cas",attempts);return false;}
    catch(e){return String(e).includes(fragment);}
  };
  const tests=[
    {name:"6 interleavings: CAS 1 grant",pass:casTwo.length===6&&casTwo.every(x=>x.paid===4&&x.fulfilled===1)},
    {name:"90 interleavings: CAS 1 grant",pass:casThree.length===90&&casThree.every(x=>x.paid===4&&x.fulfilled===1)},
    {name:"naive check-then-grant sometimes double awards",pass:naiveTwo.some(x=>x.paid===8)},
    {name:"naive 3 workers sometimes >1 grant",pass:naiveThree.some(x=>x.paid>4)},
    {name:"CAS conflict retried",pass:casTwo.some(x=>x.retries>0)},
    {name:"SSV and compensation audit events both retained",pass:casTwo.every(x=>x.audit===2&&x.transactions===1)},
    {name:"same transaction redelivery idempotent",pass:casThree.every(x=>x.transactions===1)},
    {name:"unknown attempt rejected",pass:rejected({w0:{...w2.w0,attempt:"missing"}},{"A":{uid:"pilot",amount:4}},"UNKNOWN_ATTEMPT")},
    {name:"cross-UID claim rejected",pass:rejected({w0:{...w2.w0,uid:"other"}},{"A":{uid:"pilot",amount:4}},"WRONG_UID")},
    {name:"offer mismatch rejected",pass:rejected({w0:{...w2.w0,amount:7}},{"A":{uid:"pilot",amount:4}},"OFFER_MISMATCH")},
    {name:"unsigned/invalid callback rejected",pass:rejected({w0:{...w2.w0,verified:false}},{"A":{uid:"pilot",amount:4}},"UNVERIFIED_SSV")},
    {name:"unapproved comp rejected",pass:rejected({w0:{...w2.w1,approved:false}},{"A":{uid:"pilot",amount:4}},"UNAPPROVED_COMPENSATION")},
  ];
  const twoDiff={"A":{uid:"pilot",amount:4},"B":{uid:"pilot",amount:4}};
  const workersDiff={w0:w2.w0,w1:{...w2.w0,attempt:"B",tx:"tx2",id:"S2"}};
  const twoResults=two.map(order=>simulate(order,workersDiff,"cas",twoDiff));
  tests.push({name:"different attempt grants 2",pass:twoResults.every(x=>x.paid===8&&x.fulfilled===2)});
  const colliding={w0:w2.w0,w1:{...w2.w0,attempt:"B",tx:"tx1",id:"S2"}};
  const collisionPass=two.every(order=>{
    try{simulate(order,colliding,"cas",twoDiff);return false;}catch(e){return String(e).includes("TRANSACTION_REUSE");}
  });
  tests.push({name:"same signed transaction across attempts quarantined",pass:collisionPass});
  const failures=tests.filter(x=>!x.pass);
  return {status:failures.length?"FAIL":"PASS",assertions:tests.length,passed:tests.length-failures.length,schedules2:two.length,schedules3:three.length,naiveFail2:naiveTwo.filter(x=>x.paid>4).length,naiveFail3:naiveThree.filter(x=>x.paid>4).length,casErrors2:casTwo.filter(x=>x.paid!==4).length,casErrors3:casThree.filter(x=>x.paid!==4).length,failures,scope:"abstract deterministic CAS scheduling, not Firebase Emulator or production runtime"};
}
const result=run();
console.log(JSON.stringify(result,null,2));
if(result.status!=="PASS") throw Error("Scenario failure");
