import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,emptyStash,readStash,EXIT,skinnerGoal,type Pickup} from '../src/simulation';
import {GOLD,UPGRADE,goldBcdShare,goldSinkAccel,goldWalkFactor,goldThrustFactor,goldNetWeightN,BCD_LIFT_KG,GOLD_DENSITY,readBankedGold,writeBankedGold,modLevel,nextUpgradeTarget,isAlmostShort,almostUpgradeLine,bankAlmostSuffix,skinnerPullCopy,ALMOST_UPGRADE,noMods} from '../src/gold';
import {PISTOL} from '../src/playerPistol';
import {GRAVITY,WATER_DENSITY,itemFloats} from '../src/propPhysics';

const CX=breathFootprint().cx;
const PLAYER={x:CX,y:WALK_EYE_Y,z:24};
function setup(){
 const m=new Mission(true);isolateGuards(m,-1);m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99;
 m.position={...PLAYER};m.pickups=[];m.stash=emptyStash();m.bankedGold=0;
 return m;
}
const at=(m:Mission,dx=0):Pickup['position']=>({x:m.position.x+dx,y:FLOOR_Y,z:m.position.z});

test('gold physics: 19.3× water, sinks, and a BCD’s worth of gold cancels the BCD',()=>{
 assert.ok(!itemFloats('gold'));
 assert.ok(Math.abs(goldNetWeightN(1000)-GRAVITY*(1-WATER_DENSITY/GOLD_DENSITY))<1e-9,'Archimedes: weight minus displaced water');
 const bcdWorth=BCD_LIFT_KG*1000/(1-WATER_DENSITY/GOLD_DENSITY);
 assert.ok(Math.abs(goldBcdShare(bcdWorth)-1)<1e-9);
 assert.ok(Math.abs(goldSinkAccel(bcdWorth,4.1)-4.1)<1e-9,'a full jacket only just holds it');
 assert.equal(goldWalkFactor(0),1);
 assert.ok(goldWalkFactor(10000)<.82&&goldWalkFactor(10000)>.78,'~0.8 at 10 kg');
 assert.ok(goldWalkFactor(20000)<goldWalkFactor(10000));
 assert.ok(goldThrustFactor(10000)<1);
});

test('no free kilobars on the floor — gold comes from kills and extract',()=>{
 assert.equal(GOLD.barsPerDive,0);
 assert.equal(GOLD.hoardBars,0);
 assert.ok(GOLD.extractBars[0]>=1);
 const m=new Mission(true);
 assert.equal(m.pickups.filter(p=>p.item==='gold').length,0,'scatterGold plants nothing');
});

test('a paying kill drops coins that you scoop by walking over; bars need E',()=>{
 const m=setup();
 // Force a field bucket (unit 0.90) so the kill is on the paying side of the VR schedule.
 let n=0;m.lootRand=()=>{n+=1;return n===1?.90:.5;};
 const g=m.guards[0];m.activateGuard(g,{x:CX,z:PLAYER.z-2},0,'assault');
 while(g.hp>0)m.guardTakeDamage(g,50);
 const coins=m.pickups.find(p=>p.item==='gold')!;
 assert.ok(coins.amount!>0&&coins.amount!<GOLD.barGrams,'pocket coins, not a kilobar');
 coins.position=at(m,.3);
 m.update(1/60);
 assert.equal(m.gold,coins.amount,'scooped');
 m.pickups=[{id:900,item:'gold',amount:1000,position:at(m,.3)}];
 m.update(1/60);
 assert.equal(m.pickups.length,1,'a bar is a choice, not a vacuum');
 m.interact();
 assert.equal(m.gold,coins.amount!+1000);
 assert.ok(m.loadWalkFactor()<1,'and now you are slower');
});

test('opening the stash saves pocket gold into the shop balance (no drag)',()=>{
 writeBankedGold(0);
 const m=setup();m.gold=2600;
 m.position={x:-4.85+1.2,y:WALK_EYE_Y,z:31.55};
 m.inventory=[null,null,null,null,null];m.selected=0;
 m.interact();
 assert.ok(m.stashOpen);
 assert.equal(m.gold,0);assert.equal(m.bankedGold,2600);
 assert.equal(m.goldEvent?.kind,'bank');
 assert.equal(m.lastHaulBanked,2600);
 if(globalThis.localStorage)assert.equal(readBankedGold(),2600);
});

test('extract with the relic auto-banks pocket gold and pays the extract bar jackpot',()=>{
 writeBankedGold(0);
 const m=setup();
 m.gold=1800;m.bankedGold=200;
 // Deterministic extract bar roll: first lootRand call → 2 bars (lo + floor(0*(hi-lo+1))).
 m.lootRand=()=>0;
 m.inventory=['relic',null,null,null,null];m.selected=0;
 m.position={x:EXIT.x,y:WALK_EYE_Y,z:EXIT.z};
 m.interact();
 assert.equal(m.outcome,'won');
 assert.equal(m.gold,0,'pockets cleared on extract');
 assert.equal(m.lastHaulBanked,1800);
 assert.equal(m.lastExtractBars,GOLD.extractBars[0]);
 assert.equal(m.bankedGold,200+1800+GOLD.extractBars[0]*GOLD.barGrams);
 assert.match(m.reason,/Saved/i);
 assert.match(m.reason,/Extract bonus/i);
 assert.match(m.reason,/Gold:/i);
 if(globalThis.localStorage)assert.equal(readBankedGold(),m.bankedGold);
});

test('dive-again banks leftover pocket gold before a fresh mission',()=>{
 writeBankedGold(100);
 const m=setup();m.gold=750;m.bankedGold=100;
 assert.equal(m.bankCarriedGold(),750);
 assert.equal(m.gold,0);
 assert.equal(m.bankedGold,850);
 assert.equal(m.lastHaulBanked,750);
 // Without localStorage the vault is process-local; with it, a fresh mission must reload the haul.
 if(globalThis.localStorage){
  assert.equal(readBankedGold(),850);
  const again=new Mission(true);
  assert.equal(again.bankedGold,850);
  assert.equal(again.gold,0);
 }
});

test('workbench: upgrades cost banked gold, live on the rifle, and stop at level 3',()=>{
 const m=setup();m.stashOpen=true;m.bankedGold=UPGRADE.cost[0]+UPGRADE.cost[1]+UPGRADE.cost[2]+UPGRADE.cost[0]-1;
 m.inventory=['gun',null,null,null,null];m.selected=0;
 assert.ok(m.buyUpgrade('mag'));assert.ok(m.buyUpgrade('mag'));assert.ok(m.buyUpgrade('mag'));
 assert.equal(m.gunMods.mag,3);
 assert.equal(m.pistol.maxMag,PISTOL.magazine+12,'drum magazine');
 assert.ok(!m.buyUpgrade('mag'),'maxed');
 assert.ok(!m.buyUpgrade('barrel'),'one gram short');
 assert.equal(m.bankedGold,UPGRADE.cost[0]-1);
 m.stashOpen=false;m.bankedGold=1e6;
 assert.ok(!m.buyUpgrade('barrel'),'only at the stash');
 m.stashOpen=true;m.inventory=[null,null,null,null,null];
 assert.ok(!m.buyUpgrade('barrel'),'needs a rifle in hand');
});

test('upgrades make the rifle hit harder and jam less',()=>{
 const m=setup();m.inventory=['gun',null,null,null,null];m.selected=0;
 const g=m.guards[0];m.activateGuard(g,{x:CX,z:PLAYER.z-4},Math.PI,'assault');
 const shoot=()=>{const before=g.hp;m.pistol.mag=5;m.pistol.cool=0;m.pistol.reload=0;m.firePistol({...m.position,y:FLOOR_Y+1.3},{x:0,y:0,z:-1});return before-g.hp;};
 const plain=shoot();g.hp=g.maxHp;
 m.equipRifle(m.gunCond,{barrel:3,action:0,mag:0});
 const tuned=shoot();
 assert.ok(plain>0&&tuned>plain*1.2,`${plain} → ${tuned}`);
});

test('die with an upgraded rifle and gold: both lie on the corpse; a killer guard takes them and gives them back when he dies',()=>{
 const m=setup();
 m.inventory=['gun',null,null,null,null];m.selected=0;m.equipRifle(.85,{barrel:2,action:1,mag:0});m.gold=3000;
 const corpse={...m.position};
 m.dropCarriedAt(corpse);
 const rifle=m.pickups.find(p=>p.item==='gun')!,gold=m.pickups.find(p=>p.item==='gold')!;
 assert.equal(modLevel(rifle.mods),3);assert.equal(gold.amount,3000);assert.equal(m.gold,0);
 const g=m.guards[0];m.activateGuard(g,{x:corpse.x,z:corpse.z+1},0,'assault');
 m.lootGuardIndex=0;m.claimGuardLoot(corpse);
 assert.ok(!m.pickups.some(p=>p.item==='gun'||p.item==='gold'),'he took both');
 while(g.hp>0)m.guardTakeDamage(g,50);
 const back=m.pickups.find(p=>p.item==='gun')!;
 assert.deepEqual(back.mods,{barrel:2,action:1,mag:0},'your rifle, exactly as you lost it');
 assert.ok(m.pickups.filter(p=>p.item==='gold').reduce((s,p)=>s+(p.amount??0),0)>=3000,'and your gold');
});

test('banked rifles keep their upgrades through the stash',()=>{
 const m=setup();
 m.inventory=['gun',null,null,null,null];m.selected=0;m.equipRifle(.77,{barrel:1,action:0,mag:2});
 const slot=m.stashSlotFor('gun');
 assert.deepEqual(slot,{kind:'item',item:'gun',cond:.77,mods:{barrel:1,action:0,mag:2}});
 if(globalThis.localStorage){m.stash[0]=slot;const {writeStash}=require('../src/stash');writeStash(m.stash);assert.deepEqual((readStash()[0] as {mods?:unknown}).mods,{barrel:1,action:0,mag:2});}
});

test('B ditches all your gold at your feet',()=>{
 const m=setup();m.gold=4200;
 assert.ok(m.ditchGold());
 assert.equal(m.gold,0);
 assert.equal(m.pickups.find(p=>p.item==='gold')?.amount,4200);
 assert.ok(!m.ditchGold());
});


test('almost-upgrade band: short ≤35% of cost or ≤250 g; ready at 0',()=>{
 assert.ok(isAlmostShort(140,400),'140 of 400 is almost (35%)');
 assert.ok(isAlmostShort(250,900),'absolute 250 g cap on mid tier');
 assert.ok(!isAlmostShort(316,900),'316 > 250 and > 35% of 900');
 assert.ok(!isAlmostShort(0,400),'ready is not almost');
 const mods=noMods();
 const far=nextUpgradeTarget(mods,0,true)!;
 assert.equal(far.track,'barrel');
 assert.equal(far.cost,UPGRADE.cost[0]);
 assert.ok(!far.almost&&!far.ready);
 const near=nextUpgradeTarget(mods,UPGRADE.cost[0]-140,true)!;
 assert.ok(near.almost&&!near.ready);
 assert.equal(near.short,140);
 const ready=nextUpgradeTarget(mods,UPGRADE.cost[0],true)!;
 assert.ok(ready.ready&&!ready.almost);
 assert.match(almostUpgradeLine(mods,UPGRADE.cost[0]-140,true)!,/short of/i);
 assert.match(bankAlmostSuffix(mods,UPGRADE.cost[0],true),/BUY .* NOW/);
 assert.equal(nextUpgradeTarget(mods,1e9,false),null);
 assert.ok(ALMOST_UPGRADE.frac===.35&&ALMOST_UPGRADE.grams===250);
 const shout=skinnerPullCopy(mods,UPGRADE.cost[0]-50,true)!;
 assert.equal(shout.kind,'almost');
 assert.match(shout.center,/ONLY .* MORE UNTIL UPGRADE/i);
 assert.equal(shout.side,'UPGRADE NOW');
 const readyShout=skinnerPullCopy(mods,UPGRADE.cost[0],true)!;
 assert.equal(readyShout.kind,'ready');
 assert.match(readyShout.center,/READY/i);
 assert.equal(readyShout.side,'UPGRADE NOW');
 assert.equal(skinnerPullCopy(mods,0,true),null);
});

test('skinnerGoal points BUY when vault is almost or ready for an upgrade',()=>{
 const m=setup();
 m.inventory=['gun',null,null,null,null];
 m.bankedGold=UPGRADE.cost[0]-100;
 m.gold=0;
 assert.equal(skinnerGoal(m).label,'BUY');
 m.bankedGold=UPGRADE.cost[0];
 assert.equal(skinnerGoal(m).label,'BUY');
 m.gold=50;
 assert.equal(skinnerGoal(m).label,'SAVE GOLD','carrying gold still goes to the hatch first');
});
