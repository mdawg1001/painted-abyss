/**
 * Stage-one kill loot: variable-ratio category + magnitude on the kill operant.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,isMainGuard} from '../src/simulation';
import {
 KILL_LOOT,KILL_LOOT_BUCKETS,selectKillLootBucket,rollKillLoot,type KillLootBucket,
} from '../src/killLoot';
import {RIFLE,lootStream,rifleIsPrize} from '../src/rifleCondition';
import {PISTOL} from '../src/playerPistol';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};

/** First call picks the bucket; later calls fill magnitude rolls. */
function scriptedLoot(bucketUnit:number,fill=0.5){
 let n=0;
 return()=>{n+=1;return n===1?bucketUnit:fill;};
}

function setup(role:'assault'|'officer'|'rusher'|'heavy'='assault',lootRand:()=>number=lootStream(1)){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;
 m.lootRand=lootRand;
 const g=m.guards[0];m.activateGuard(g,{x:CX,z:PLAYER.z-2},0,role);
 m.position={...PLAYER};m.pickups=[];
 return{m,g};
}
const kill=(m:Mission,g:Mission['guards'][number])=>{while(g.hp>0)m.guardTakeDamage(g,50);};

test('bucket weights sum to 100 and cover the full unit interval',()=>{
 const sum=KILL_LOOT_BUCKETS.reduce((s,b)=>s+KILL_LOOT.weights[b],0);
 assert.equal(sum,100);
 assert.equal(selectKillLootBucket(0),'dry');
 assert.equal(selectKillLootBucket(0.199),'dry');
 assert.equal(selectKillLootBucket(0.20),'ammo');
 assert.equal(selectKillLootBucket(0.45),'ammo');
 assert.equal(selectKillLootBucket(0.46),'scrap');
 assert.equal(selectKillLootBucket(0.70),'field');
 assert.equal(selectKillLootBucket(0.88),'prize');
 assert.equal(selectKillLootBucket(0.96),'jackpot');
 assert.equal(selectKillLootBucket(0.999),'jackpot');
});

test('rollKillLoot: dry pays nothing; ammo is gun-only; jackpot is fat gold + gun',()=>{
 const dry=rollKillLoot('assault',PISTOL.magazine,scriptedLoot(0.0));
 assert.equal(dry.bucket,'dry');
 assert.equal(dry.dropGun,false);
 assert.equal(dry.dropGold,false);

 const ammo=rollKillLoot('assault',PISTOL.magazine,scriptedLoot(0.25));
 assert.equal(ammo.bucket,'ammo');
 assert.equal(ammo.dropGun,true);
 assert.equal(ammo.dropGold,false);
 assert.ok(ammo.cond<=KILL_LOOT.ammoCondCap);
 assert.ok(ammo.rounds>=1&&ammo.rounds<PISTOL.magazine);

 const jack=rollKillLoot('assault',PISTOL.magazine,scriptedLoot(0.99));
 assert.equal(jack.bucket,'jackpot');
 assert.equal(jack.dropGun,true);
 assert.equal(jack.dropGold,true);
 assert.ok(jack.goldGrams>=KILL_LOOT.jackpotGold[0]&&jack.goldGrams<=KILL_LOOT.jackpotGold[1]);
 assert.ok(jack.cond<RIFLE.kitCond);
});

test('long-run bucket frequencies track the weight table',()=>{
 const r=lootStream(42);
 const counts:Record<KillLootBucket,number>={dry:0,ammo:0,scrap:0,field:0,prize:0,jackpot:0};
 const N=20_000;
 for(let i=0;i<N;i++)counts[selectKillLootBucket(r())]++;
 for(const b of KILL_LOOT_BUCKETS){
  const got=counts[b]/N,want=KILL_LOOT.weights[b]/100;
  assert.ok(Math.abs(got-want)<0.02,`${b}: got ${got.toFixed(3)} want ${want}`);
 }
});

test('a dry kill leaves no gun and no coins; officer key still drops',()=>{
 const {m,g}=setup('officer',scriptedLoot(0.0));
 assert.ok(isMainGuard(g));
 kill(m,g);
 assert.equal(m.pickups.some(p=>p.item==='gun'),false,'dry: no rifle');
 assert.equal(m.pickups.some(p=>p.item==='gold'),false,'dry: no coins');
 assert.ok(m.pickups.some(p=>p.item==='sovietKey'),'Soviet key is outside the schedule');
});

test('ammo kill drops a strip-frame with rounds and no gold',()=>{
 const {m,g}=setup('assault',scriptedLoot(0.25));
 kill(m,g);
 const gun=m.pickups.find(p=>p.item==='gun');
 assert.ok(gun);
 assert.ok((gun!.rounds??0)>=1);
 assert.ok((gun!.cond??1)<=KILL_LOOT.ammoCondCap);
 assert.equal(m.pickups.some(p=>p.item==='gold'),false);
});

test('field / prize / jackpot kills pay gun + gold in their bands',()=>{
 const field=setup('assault',scriptedLoot(0.75));
 kill(field.m,field.g);
 const fg=field.m.pickups.find(p=>p.item==='gun')!;
 const fcoin=field.m.pickups.find(p=>p.item==='gold')!;
 assert.ok(fg&&fcoin);
 assert.ok(fg.cond!<RIFLE.keepCond,'field is not a keep prize');
 assert.ok(fcoin.amount!>=KILL_LOOT.fieldGold[0]&&fcoin.amount!<=KILL_LOOT.fieldGold[1]);

 const prize=setup('officer',scriptedLoot(0.90));
 kill(prize.m,prize.g);
 const pg=prize.m.pickups.find(p=>p.item==='gun')!;
 assert.ok(rifleIsPrize(pg.cond!));
 assert.equal(prize.m.prizeDrop?.id,pg.id);
 assert.ok(prize.m.pickups.some(p=>p.item==='sovietKey'));

 const jack=setup('assault',scriptedLoot(0.99));
 kill(jack.m,jack.g);
 const jcoin=jack.m.pickups.find(p=>p.item==='gold')!;
 assert.ok(jcoin.amount!>=KILL_LOOT.jackpotGold[0]);
});

test('stolen corpse rifle and gold always return even on a dry roll',()=>{
 const {m,g}=setup('assault',scriptedLoot(0.0));
 g.loot={cond:.85,mods:{barrel:2,action:1,mag:0}};
 g.gold=3000;
 kill(m,g);
 const back=m.pickups.find(p=>p.item==='gun')!;
 assert.equal(back.cond,.85);
 assert.deepEqual(back.mods,{barrel:2,action:1,mag:0});
 assert.equal(m.pickups.find(p=>p.item==='gold')?.amount,3000);
});
