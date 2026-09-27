import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,FLOOR_Y,WALK_EYE_Y,breathFootprint,emptyStash,readStash,type Pickup} from '../src/simulation';
import {GOLD,UPGRADE,goldBcdShare,goldSinkAccel,goldWalkFactor,goldThrustFactor,goldNetWeightN,BCD_LIFT_KG,GOLD_DENSITY,readBankedGold,writeBankedGold,modLevel} from '../src/gold';
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

test('each dive hides its kilobars somewhere new, plus the hoard round the relic',()=>{
 const a=new Mission(true),b=new Mission(true);
 const bars=(m:Mission)=>m.pickups.filter(p=>p.item==='gold').map(p=>`${p.position.x.toFixed(1)},${p.position.z.toFixed(1)}`).sort().join('|');
 assert.equal(a.pickups.filter(p=>p.item==='gold').length,GOLD.barsPerDive+GOLD.hoardBars);
 assert.notEqual(bars(a),bars(b));
});

test('a kill drops coins that you scoop by walking over; bars need E',()=>{
 const m=setup();
 const g=m.guards[0];m.activateGuard(g,{x:CX,z:PLAYER.z-2},0,'assault');
 while(g.hp>0)m.guardTakeDamage(g,50);
 const coins=m.pickups.find(p=>p.item==='gold')!;
 assert.ok(coins.amount!>=GOLD.guardCoins[0]&&coins.amount!<=GOLD.guardCoins[1]);
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

test('opening the stash banks every gram; the vault survives a reload',()=>{
 writeBankedGold(0);
 const m=setup();m.gold=2600;
 m.position={x:-4.85+1.2,y:WALK_EYE_Y,z:31.55};
 m.inventory=[null,null,null,null,null];m.selected=0;
 m.interact();
 assert.ok(m.stashOpen);
 assert.equal(m.gold,0);assert.equal(m.bankedGold,2600);
 assert.equal(m.goldEvent?.kind,'bank');
 if(globalThis.localStorage)assert.equal(readBankedGold(),2600);
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
