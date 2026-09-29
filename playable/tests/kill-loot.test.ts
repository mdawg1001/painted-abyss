/**
 * Kill loot VR schedule: category + magnitude, near-miss cues, soft pity.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,isMainGuard} from '../src/simulation';
import {
 KILL_LOOT,KILL_LOOT_BUCKETS,KILL_LOOT_HUD_LABEL,selectKillLootBucket,rollKillLoot,killLootCueFor,
 killLootWeights,isEmptyKillLoot,killJackpotGoldBand,killLootHudLabel,killLootFeedback,
 type KillLootBucket,type KillLootCue,
} from '../src/killLoot';
import {GOLD} from '../src/gold';
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
 const [jLo,jHi]=killJackpotGoldBand();
 assert.ok(jack.goldGrams>=jLo&&jack.goldGrams<=jHi);
 assert.equal(jack.goldGrams%GOLD.barGrams,0,'jackpot is whole kilobars');
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
 assert.equal(m.killLootEvent?.kind,'dry','dry gets its own classical cue');
});

test('dry assault kill pulses blocked — no win juice on empty pockets',()=>{
 const {m,g}=setup('assault',scriptedLoot(0.0));
 kill(m,g);
 assert.equal(m.killLootEvent?.kind,'dry');
 assert.equal(m.feedbackKind,'blocked');
 assert.equal(m.pickups.some(p=>p.item==='gun'||p.item==='gold'),false);
});

test('HUD flash fires on every kill result including empty',()=>{
 // Labels + feedback cover the classical cue set; Mission stamps seq/at for the HUD.
 assert.equal(killLootHudLabel('dry'),'EMPTY');
 assert.equal(killLootFeedback('dry'),'blocked');
 assert.ok(KILL_LOOT.hudFlashSeconds>0&&KILL_LOOT.hudFlashSeconds<=1);
 const kinds:KillLootCue[]=['dry','ammo','scrap','near_miss','field','prize','jackpot'];
 for(const k of kinds){
  assert.ok(KILL_LOOT_HUD_LABEL[k].length>=4,`${k} has a readable HUD label`);
  assert.equal(killLootHudLabel(k),KILL_LOOT_HUD_LABEL[k]);
 }
 const dry=setup('assault',scriptedLoot(0.0));
 const pulse0=dry.m.feedbackPulse;
 kill(dry.m,dry.g);
 assert.equal(dry.m.killLootEvent?.kind,'dry');
 assert.ok((dry.m.killLootEvent?.seq??0)>=1);
 assert.equal(dry.m.killLootEvent?.at,dry.m.elapsed);
 assert.ok(dry.m.feedbackPulse>pulse0,'dry still bumps the HUD pulse');
 assert.equal(dry.m.feedbackKind,'blocked');

 const ammo=setup('assault',scriptedLoot(0.25));
 kill(ammo.m,ammo.g);
 assert.equal(ammo.m.killLootEvent?.kind,'ammo');
 assert.equal(ammo.m.feedbackKind,'ok','paying cue pulses ok');

 const jack=setup('assault',scriptedLoot(0.99));
 kill(jack.m,jack.g);
 assert.equal(jack.m.killLootEvent?.kind,'jackpot');
 assert.equal(jack.m.feedbackKind,'ok');
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
 assert.ok(jcoin.amount!>=killJackpotGoldBand()[0]);
 assert.ok(jcoin.amount!>=GOLD.barGrams,'kill jackpot is a floor bar (needs E)');
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
 assert.equal(m.killLootEvent,null,'stolen recovery skips schedule theater');
});

test('near-miss scrap: almost-prize cond, scrap gold, near_miss cue (never a keep)',()=>{
 // Scrap bucket (0.50), then force near-miss (0.10 < 0.35), then magnitude fills.
 let n=0;
 const rand=()=>{
  n+=1;
  if(n===1)return 0.50; // scrap
  if(n===2)return 0.10; // nearMissChance hit
  return 0.5;
 };
 const roll=rollKillLoot('assault',PISTOL.magazine,rand);
 assert.equal(roll.bucket,'scrap');
 assert.equal(roll.nearMiss,true);
 assert.equal(killLootCueFor(roll),'near_miss');
 assert.ok(roll.cond>=KILL_LOOT.nearMissCond[0]&&roll.cond<=KILL_LOOT.nearMissCond[1]);
 assert.ok(roll.cond<RIFLE.keepCond,'near-miss is never a prize keep');
 assert.ok(roll.goldGrams>=KILL_LOOT.scrapGold[0]&&roll.goldGrams<=KILL_LOOT.scrapGold[1],'LDW: scrap purse');

 n=0;
 const {m,g}=setup('assault',()=>{
  n+=1;
  if(n===1)return 0.50;
  if(n===2)return 0.10;
  return 0.5;
 });
 kill(m,g);
 const gun=m.pickups.find(p=>p.item==='gun')!;
 assert.equal(gun.nearMiss,true);
 assert.ok(gun.cond!<RIFLE.keepCond);
 assert.equal(m.killLootEvent?.kind,'near_miss');
 assert.match(m.notice,/almost a keeper/i);
});

test('paying buckets emit matching classical cues; dry ≠ prize',()=>{
 const ammo=setup('assault',scriptedLoot(0.25));
 kill(ammo.m,ammo.g);
 assert.equal(ammo.m.killLootEvent?.kind,'ammo');

 const field=setup('assault',scriptedLoot(0.75));
 kill(field.m,field.g);
 assert.equal(field.m.killLootEvent?.kind,'field');

 const prize=setup('officer',scriptedLoot(0.90));
 kill(prize.m,prize.g);
 assert.equal(prize.m.killLootEvent?.kind,'prize');

 const jack=setup('assault',scriptedLoot(0.99));
 kill(jack.m,jack.g);
 assert.equal(jack.m.killLootEvent?.kind,'jackpot');
});

test('soft pity: empty streak peels dry/ammo weight into scrap/field',()=>{
 const base=killLootWeights(0);
 assert.deepEqual(base,KILL_LOOT.weights);
 assert.equal(isEmptyKillLoot('dry'),true);
 assert.equal(isEmptyKillLoot('ammo'),true);
 assert.equal(isEmptyKillLoot('scrap'),false);

 const armed=killLootWeights(KILL_LOOT.pityAfter);
 assert.ok(armed.dry<base.dry,'dry gets rarer');
 assert.ok(armed.scrap+armed.field>base.scrap+base.field,'paying buckets grow');
 assert.equal(
  KILL_LOOT_BUCKETS.reduce((s,b)=>s+armed[b],0),
  100,
  'weights still sum to 100',
 );

 const maxed=killLootWeights(KILL_LOOT.pityAfter+10);
 assert.equal(maxed.dry,0,'dry can be squeezed out at the cap');
 assert.ok(maxed.ammo<base.ammo);
 // Same unit that was dry with no pity lands on a paying bucket when maxed.
 assert.equal(selectKillLootBucket(0.10,0),'dry');
 assert.ok(!isEmptyKillLoot(selectKillLootBucket(0.10,KILL_LOOT.pityAfter+10)));
});

test('Mission counts empty kills and clears the drought on a real drop',()=>{
 const m=setup('assault',scriptedLoot(0.0)).m;
 // Reuse one mission: kill several guards dry, then one field.
 for(let i=0;i<KILL_LOOT.pityAfter;i++){
  const g=m.guards[i]??m.guards[0];
  if(!g.active)m.activateGuard(g,{x:CX,z:PLAYER.z-2-i},0,'assault');
  g.hp=g.maxHp;g.gun=true;g.loot=undefined;g.gold=0;
  m.lootRand=scriptedLoot(0.0);
  kill(m,g);
 }
 assert.equal(m.killLootEmptyStreak,KILL_LOOT.pityAfter);

 const payer=m.guards[KILL_LOOT.pityAfter]??m.guards[0];
 if(!payer.active)m.activateGuard(payer,{x:CX,z:PLAYER.z-8},0,'assault');
 payer.hp=payer.maxHp;payer.gun=true;payer.loot=undefined;payer.gold=0;
 m.lootRand=scriptedLoot(0.75);
 kill(m,payer);
 assert.equal(m.killLootEmptyStreak,0,'paying kill clears the drought');
 assert.equal(m.killLootEvent?.kind,'field');
});
