// D10 standalone, synthetic reward-ledger projector.
// Scope: research model only. NO LogMate app/backend/SDK, no real SSV signature verification.
// Run: node research/experiments/d10_reward_ledger_synthetic_20261108.js
"use strict";
const U = "pilot", V = "another";
const attempt = (id,n=4,uid=U) => ({kind:"attempt",id,uid,n});
const ssv = (id,attemptId,n=4,uid=U,valid=true) => ({kind:"ssv",id,uid,attemptId,n,valid});
const comp = (id,attemptId,n=4,uid=U,approved=true) => ({kind:"comp",id,uid,attemptId,n,approved});
const earned = (id,attemptId,uid=U) => ({kind:"earned",id,uid,attemptId});
const create = (id,rec,uid=U,bill=true,recordKind="Flight") => ({kind:"create",id,uid,rec,bill,recordKind});
const alias = (id,x,y,uid=U,confirmed=true) => ({kind:"alias",id,uid,x,y,confirmed});
const del = (id,rec,uid=U) => ({kind:"delete",id,uid,rec});
function project(input,uid=U,baseline=0){
  const ids=new Map();
  for(const e of input){
    const key=(e.kind==="ssv" ? "global-ssv:" : e.kind==="attempt" ? "global-attempt:" : e.kind==="comp" ? "global-comp:" : e.kind+":"+e.uid+":")+e.id;
    const val=JSON.stringify(e);
    if(ids.has(key)){if(ids.get(key).val!==val)throw Error("CONFLICT_"+key);continue;}
    ids.set(key,{val,e});
  }
  const ev=[...ids.values()].map(x=>x.e);
  const at=new Map(ev.filter(e=>e.kind==="attempt").map(e=>[e.id,e]));
  const valid=new Map(),recover=new Map();
  for(const e of ev.filter(e=>e.kind==="ssv"&&e.valid)){
    const a=at.get(e.attemptId);
    if(!a||a.uid!==e.uid||a.n!==e.n)throw Error("SSV_ATTEMPT_MISMATCH");
    if(valid.has(a.id)&&valid.get(a.id).id!==e.id)throw Error("MULTI_TRANSACTION_ONE_ATTEMPT");
    valid.set(a.id,e);
  }
  for(const e of ev.filter(e=>e.kind==="comp"&&e.approved)){
    const a=at.get(e.attemptId);
    if(!a||a.uid!==e.uid||a.n!==e.n)throw Error("COMP_ATTEMPT_MISMATCH");
    if(recover.has(a.id))throw Error("MULTI_COMP_ONE_ATTEMPT");
    recover.set(a.id,e);
  }
  const paid=[...at.values()].filter(a=>a.uid===uid&&(valid.has(a.id)||recover.has(a.id)));
  const overlap=paid.filter(a=>valid.has(a.id)&&recover.has(a.id)).length;
  const creates=ev.filter(e=>e.kind==="create"&&e.uid===uid);
  const byRecord=new Map();
  for(const e of creates){
    if(byRecord.has(e.rec)&&byRecord.get(e.rec).id!==e.id)throw Error("SECOND_CREATE_SAME_RECORD");
    byRecord.set(e.rec,e);
  }
  const parent=new Map([...byRecord.keys()].map(x=>[x,x]));
  const find=x=>{
    if(!parent.has(x))throw Error("UNKNOWN_ALIAS_RECORD");
    while(parent.get(x)!==x)x=parent.get(x);
    return x;
  };
  for(const e of ev.filter(e=>e.kind==="alias"&&e.uid===uid&&e.confirmed)){
    const x=find(e.x), y=find(e.y);
    if(x!==y){
      if(byRecord.get(e.x).recordKind!==byRecord.get(e.y).recordKind)throw Error("ALIAS_KIND_MISMATCH");
      parent.set(x>y?x:y,x>y?y:x);
    }
  }
  const billed=new Set(creates.filter(e=>e.bill&&e.recordKind==="Flight").map(e=>find(e.rec)));
  const grant=paid.reduce((sum,a)=>sum+a.n,0);
  return {credits:baseline+grant-billed.size,fulfilled:paid.length,overlap,charged:billed.size,records:creates.length,pending:ev.filter(e=>e.kind==="earned"&&e.uid===uid&&!valid.has(e.attemptId)&&!recover.has(e.attemptId)).length};
}
const tests=[
 ["verified SSV",()=>{const x=project([attempt("A"),ssv("T","A")]);return x.credits===4&&x.fulfilled===1}],
 ["same transaction replay",()=>{const e=ssv("T","A");return project([attempt("A"),e,e,e]).credits===4}],
 ["client callback only is pending",()=>{const x=project([attempt("A"),earned("E","A")]);return x.credits===0&&x.pending===1}],
 ["publisher recovery without SSV",()=>project([attempt("A"),earned("E","A"),comp("C","A")]).credits===4],
 ["late SSV after recovery no double credit",()=>{const x=project([attempt("A"),comp("C","A"),ssv("T","A")]);return x.credits===4&&x.overlap===1}],
 ["late recovery after SSV no double credit",()=>{const x=project([attempt("A"),ssv("T","A"),comp("C","A")]);return x.credits===4&&x.overlap===1}],
 ["compensation replay",()=>{const e=comp("C","A");return project([attempt("A"),e,e]).credits===4}],
 ["two different compensations rejected",()=>throws(()=>project([attempt("A"),comp("C1","A"),comp("C2","A")]),"MULTI_COMP")],
 ["two transactions one attempt rejected",()=>throws(()=>project([attempt("A"),ssv("T1","A"),ssv("T2","A")]),"MULTI_TRANSACTION")],
 ["offer quantity mismatch rejected",()=>throws(()=>project([attempt("A",4),ssv("T","A",99)]),"SSV_ATTEMPT_MISMATCH")],
 ["wrong UID nonce rejected",()=>throws(()=>project([attempt("A",4,U),ssv("T","A",4,V)]),"SSV_ATTEMPT_MISMATCH")],
 ["unverified SSV not credited",()=>project([attempt("A"),ssv("T","A",4,U,false)]).credits===0],
 ["global transaction collision rejected",()=>throws(()=>project([attempt("A",4,U),attempt("B",4,V),ssv("T","A",4,U),ssv("T","B",4,V)]),"CONFLICT_global-ssv")],
 ["independent attempts separate",()=>project([attempt("A"),attempt("B"),ssv("T1","A"),ssv("T2","B")]).credits===8],
 ["backup replay dedup",()=>{const e=ssv("T","A");const x=create("op1","r1");return project([attempt("A"),e,e,x,x]).credits===3}],
 ["delete does not refund automatically",()=>project([create("op1","r1"),del("d1","r1")]).credits===-1],
 ["confirmed record alias bills one",()=>project([create("op1","r1"),create("op2","r2"),alias("a","r1","r2")]).credits===-1],
 ["unconfirmed alias keeps both",()=>project([create("op1","r1"),create("op2","r2"),alias("a","r1","r2",U,false)]).credits===-2],
 ["offline last-credit overdraft",()=>project([create("op1","r1"),create("op2","r2")],U,1).credits===-1],
 ["1000 import exempt scenario",()=>project(Array.from({length:1000},(_,i)=>create("i"+i,"R"+i,U,false))).credits===0],
 ["1000 import charged scenario",()=>project(Array.from({length:1000},(_,i)=>create("i"+i,"R"+i,U,true))).credits===-1000],
 ["same record second CREATE rejected",()=>throws(()=>project([create("op1","r1"),create("op2","r1")]),"SECOND_CREATE")],
 ["cross-owner isolation",()=>project([attempt("A",4,U),ssv("T","A",4,U),create("op","r1",V)],U).credits===4],
 ["cross-record-kind alias rejected",()=>throws(()=>project([create("f","F"),create("s","S",U,true,"Simulator"),alias("a","F","S")]),"ALIAS_KIND")],
 ["same CREATE repeated no double charge",()=>{const x=create("op","r1");return project([x,x,x]).charged===1}],
 ["all 120 arrival permutations equal",()=>{const e=[attempt("A"),earned("E","A"),comp("C","A"),ssv("T","A"),create("op","r1")];const expected=JSON.stringify(project(e));return permutations(e).every(p=>JSON.stringify(project(p))===expected)}]
];
function throws(fn,fragment){try{fn();return false;}catch(e){return String(e).includes(fragment);}}
function permutations(arr){if(arr.length<=1)return [arr];const result=[];for(let i=0;i<arr.length;i++){for(const tail of permutations(arr.filter((_,j)=>j!==i)))result.push([arr[i],...tail]);}return result;}
const failed=tests.map(([name,fn])=>({name,pass:fn()})).filter(x=>!x.pass);
console.log(JSON.stringify({status:failed.length?"FAIL":"PASS",passed:tests.length-failed.length,total:tests.length,failed,scope:"synthetic in-memory only; verified SSV is an injected boolean; NO provider signature/real device/Firebase test"},null,2));
if(failed.length)process.exitCode=1;
