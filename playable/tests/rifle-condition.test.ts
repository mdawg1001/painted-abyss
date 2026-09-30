import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,readStash,emptyStash,writeStash} from '../src/simulation';
import {SURVIVAL} from '../src/survivalConfig';
import {RIFLE,jamChance,spreadSigma,rollDropCondition,rollDropRounds,rifleGrade,rifleIsPrize,lootStream,scatter} from '../src/rifleCondition';
import {PISTOL} from '../src/playerPistol';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};
function setup(role:'assault'|'officer'|'rusher'|'heavy'='assault'){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;m.lootRand=lootStream(7);
 const g=m.guards[0];m.activateGuard(g,{x:CX,z:PLAYER.z-2},0,role);
 m.position={...PLAYER};m.pickups=[];
 return{m,g};
}
const kill=(m:Mission,g:Mission['guards'][number])=>{while(g.hp>0)m.guardTakeDamage(g,40);};

test('every guard drop is worse than your maintained rifle; only the officer drops a prize',()=>{
 const r=lootStream(1);
 for(const role of Object.keys(RIFLE.dropBands) as (keyof typeof RIFLE.dropBands)[])for(let i=0;i<500;i++){
  const c=rollDropCondition(role,r);
  assert.ok(c<RIFLE.kitCond,`${role} ${c}`);
  assert.equal(rifleIsPrize(c),role==='officer',`${role} ${c.toFixed(2)} prize=${rifleIsPrize(c)}`);
 }
 for(let i=0;i<500;i++){const n=rollDropRounds(PISTOL.magazine,r);assert.ok(n>=1&&n<PISTOL.magazine,'partly spent, never full');}
});

test('a maintained rifle never jams or scatters; worn rifles do both, worse the more worn',()=>{
 assert.equal(jamChance(RIFLE.kitCond),0);assert.equal(spreadSigma(RIFLE.kitCond),0);
 assert.ok(jamChance(.4)>jamChance(.75)&&jamChance(.75)>0);
 assert.ok(spreadSigma(.4)>spreadSigma(.75)&&spreadSigma(.75)>0);
 assert.equal(rifleGrade(RIFLE.kitCond),'Service');assert.equal(rifleGrade(.75),"Officer's");assert.equal(rifleGrade(.4),'Worn');
 const d={x:0,y:0,z:-1},r=lootStream(3);
 let sum=0;for(let i=0;i<2000;i++){const o=scatter(d,.02,r);sum+=Math.acos(Math.min(1,-o.z));}
 assert.ok(Math.abs(sum/2000-.02*Math.sqrt(Math.PI/2))<.003,'scatter angle matches its sigma (Rayleigh mean)');
});

test('a paying kill drops a worn rifle with a partial magazine; officer prize rolls are called out',()=>{
 // Field bucket for assault (unit ~0.965); prize bucket for officer (unit ~0.980).
 let an=0;const a=setup('assault');a.m.lootRand=()=>{an+=1;return an===1?.965:.5;};
 kill(a.m,a.g);
 const gun=a.m.pickups.find(p=>p.item==='gun')!;
 assert.ok(gun.cond!==undefined&&gun.cond<RIFLE.keepCond);
 assert.equal(a.m.prizeDrop,null);
 let on=0;const o=setup('officer');o.m.lootRand=()=>{on+=1;return on===1?.980:.5;};
 kill(o.m,o.g);
 const prize=o.m.pickups.find(p=>p.item==='gun')!;
 assert.ok(rifleIsPrize(prize.cond!));
 assert.equal(o.m.prizeDrop?.id,prize.id);
});

test('empty-handed, you take his rifle and inherit its wear; a stoppage blocks fire until R',()=>{
 let n=0;const {m,g}=setup();m.lootRand=()=>{n+=1;return n===1?.92:.5;}; // scrap bucket
 kill(m,g);
 m.inventory=[null,null,null,null,null];m.selected=0;
 const gun=m.pickups.find(p=>p.item==='gun')!;
 m.pickups=m.pickups.filter(p=>p===gun);gun.position={...m.position,y:FLOOR_Y};
 m.interact();
 assert.equal(m.inventory[0],'gun');
 assert.equal(m.gunCond,gun.cond);
 m.pistol.mag=5;m.pistol.cool=0;m.pistol.reload=0;
 m.rand=()=>0; // force the worst luck: the next pull jams
 assert.equal(m.firePistol(m.position,{x:0,y:0,z:-1}),'jammed');
 assert.equal(m.pistol.mag,5,'the round is still in there');
 m.pistol.cool=0;
 assert.equal(m.firePistol(m.position,{x:0,y:0,z:-1}),'jammed','dead trigger until cleared');
 assert.ok(m.reloadPistol());assert.equal(m.jammed,false);
 assert.ok(m.pistol.cool>=RIFLE.clearSeconds-1e-9,'clearing costs a moment');
});

test('with a rifle in hand: E strips a worse one, trades up to a better one',()=>{
 const {m}=setup();
 m.inventory=['gun',null,null,null,null];m.selected=0;m.gunCond=.45;m.pistol.reserve=0;
 m.pickups=[{id:900,item:'gun',cond:.4,rounds:5,position:{...m.position,y:FLOOR_Y}}];
 m.interact();
 assert.equal(m.gunCond,.45,'kept yours');assert.equal(m.pistol.reserve,5,'stripped his rounds');
 m.pickups=[{id:901,item:'gun',cond:.76,rounds:4,position:{...m.position,y:FLOOR_Y}}];
 m.interact();
 assert.equal(m.gunCond,.76,'traded up');
 const left=m.pickups.find(p=>p.item==='gun')!;
 assert.equal(left.cond,.45,'your old rifle lies where you stood, wear and all');
});

test('walking over a prize rifle strips its rounds but leaves the rifle; junk is left as scrap',()=>{
 const {m}=setup();
 m.inventory=['gun',null,null,null,null];m.selected=0;m.pistol.reserve=0;
 const at={...m.position,y:FLOOR_Y};
 m.pickups=[{id:910,item:'gun',cond:.75,rounds:5,position:{...at}},{id:911,item:'gun',cond:.4,rounds:5,position:{...at,x:at.x+.2}}];
 m.update(1/60);
 assert.equal(m.pistol.reserve,10);
 assert.deepEqual(m.pickups.filter(p=>p.item==='gun').map(p=>p.id),[910]);
});

test('banking a rifle keeps its condition across death and a page reload',()=>{
 writeStash(emptyStash());
 const {m}=setup();
 m.stash=emptyStash();
 m.inventory=['gun',null,null,null,null];m.selected=0;m.gunCond=.77;
 const slot=m.stashSlotFor('gun');
 assert.deepEqual(slot,{kind:'item',item:'gun',cond:.77});
 m.stash[0]=slot;writeStash(m.stash);
 const again=readStash();
 if(globalThis.localStorage)assert.equal((again[0] as {cond?:number}).cond,.77);
 // Dying drops the rifle you carried with its own wear.
 m.dropCarriedAt({...m.position});
 assert.equal(m.pickups.find(p=>p.item==='gun')?.cond,.77);
 assert.ok(SURVIVAL);
});
