import {GOLD} from '../src/gold';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,distance,world,AIR_MAIN_MAX,PREDATOR_HP_MAX,
 breathHatchSpawn,corridorGearPickups,
 occupiesFpsHand,torchShouldShine,SPARE_BOTTLE_LITRES,BREATH_RESPAWN_LITRES,
 WALK_EYE_Y,nextBreathTankIndex,isolateGuards,
PREDATOR_SWIM_DEPTH,FLOOR_Y,
} from '../src/simulation';

test('corridor floor is empty — no free gun / bottle / coat pellets',()=>{
 const gear=corridorGearPickups();
 assert.deepEqual(gear,[]);
 const m=new Mission(true);
 // Relic only; free floor bars and corridor charity are gone.
 assert.equal(m.nextId,2);
 assert.equal(m.pickups.filter(p=>p.item==='gold').length,0);
 assert.deepEqual(m.inventory,['knife','gun','flare','bandage','air'],'the survival kit: knife, pistol, flare, sealant, pony');
 for(const item of ['gun','bottle','coat'] as const){
  assert.equal(m.pickups.filter(p=>p.item===item).length,0,`no free floor ${item}`);
 }
 assert.equal(m.pickups[0].item,'relic');
 assert.equal(m.pickups.filter(p=>p.item==='flare').length,0,'no mystery mid-air flare orb in the cavern');
});

test('death drops carried gear at the corpse; wake with diving knife only',()=>{
 const m=new Mission(true);
 const corpse={x:-2,y:WALK_EYE_Y,z:16};
 m.position={...corpse};
 m.inventory=['gun','bottle','coat','knife','relic'];
 m.selected=2;
 m.pistol.mag=5;m.pistol.reserve=12;
 const water=1.7;
 m.breathWaterY=water;
 const tank=m.breathTankIndex;
 const before=m.pickups.length;
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,['knife',null,null,null,null],'knife guaranteed; no full kit');
 assert.equal(m.selected,0);
 assert.ok(m.inventory.includes('knife'));
 assert.ok(!m.inventory.includes('gun'),'gun stays on the corpse / stash path');
 assert.equal(m.pistol.mag,0);
 assert.equal(m.pistol.reserve,0);
 assert.equal(m.pending,null);
 assert.equal(m.outcome,'playing');
 assert.equal(m.position.x,breathHatchSpawn().x);
 assert.equal(m.position.z,breathHatchSpawn().z);
 assert.equal(m.breathWaterY,water);
 assert.equal(m.breathTankIndex,nextBreathTankIndex(tank));
 assert.equal(m.air,BREATH_RESPAWN_LITRES);
 assert.equal(m.pickups.length,before+5);
 const dropped=m.pickups.slice(before);
 assert.deepEqual(dropped.map(p=>p.item),['gun','bottle','coat','knife','relic']);
 const droppedGun=dropped.find(p=>p.item==='gun');
 assert.equal(droppedGun?.rounds,17,'pocket mag+reserve ride on the corpse pistol');
 for(const p of dropped){
  assert.ok(distance({...p.position,y:corpse.y},corpse)<1.2);
  assert.equal(p.position.y,FLOOR_Y,'corpse loot sits on the floor, not floating at eye height');
  assert.ok(Math.abs(p.position.z-breathHatchSpawn().z)>8,'corpse stays off the hatch');
 }
 const hatch=breathHatchSpawn();
 const empty=new Mission(true);
 empty.inventory=[null,null,null,null,null];
 empty.ensureKnife();
 assert.deepEqual(empty.inventory,['knife',null,null,null,null],'first spawn / missing knife is restored');
 empty.inventory=[null,null,null,null,null];
 empty.position={...hatch};
 const n=empty.pickups.length;
 empty.respawnAtHatch();
 assert.equal(empty.pickups.length,n,'empty hands drop nothing');
 assert.deepEqual(empty.inventory,['knife',null,null,null,null],'respawn still grants knife');
});

test('spare bottle fills the main cylinder and is consumed; gun and coat do not act',()=>{
 const m=new Mission(true);
 m.inventory=['bottle','gun','coat',null,null];
 m.selected=0;
 m.air=20;
 m.use();
 assert.equal(m.air,20+SPARE_BOTTLE_LITRES);
 assert.equal(m.inventory[0],null);
 assert.equal(m.feedbackKind,'ok');
 m.inventory[0]='bottle';
 m.air=AIR_MAIN_MAX-10;
 m.use();
 assert.equal(m.air,AIR_MAIN_MAX);
 assert.equal(m.inventory[0],null);
 m.inventory[0]='bottle';
 m.air=AIR_MAIN_MAX;
 m.use();
 assert.equal(m.air,AIR_MAIN_MAX);
 assert.equal(m.inventory[0],'bottle');
 assert.equal(m.feedbackKind,'blocked');
 const hp=m.predator.hp;
 m.select(1);
 m.use();
 assert.equal(m.inventory[1],'gun');
 assert.equal(m.predator.hp,hp);
 assert.equal(m.feedbackKind,'blocked');
 assert.equal(occupiesFpsHand('gun'),true);
 assert.equal(torchShouldShine(true,'gun'),false);
 m.select(2);
 m.use();
 assert.equal(m.inventory[2],'coat');
 assert.equal(m.feedbackKind,'blocked');
});

test('the coat does not reduce a guardian bite',()=>{
 const bare=new Mission(true);bare.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;
 isolateGuards(bare);
 bare.position=world(16,19);
 bare.predator.position={...bare.position};
 bare.predator.state='chase';
 bare.predator.bite=0;
 bare.update(.05);
 assert.equal(bare.health,75);
 const coated=new Mission(true);coated.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;
 isolateGuards(coated);
 coated.inventory=['coat','knife','wood','flare','air'];
 coated.selected=0;
 coated.position=world(16,19);
 coated.predator.position={...coated.position};
 coated.predator.state='chase';
 coated.predator.bite=0;
 coated.update(.05);
 assert.equal(coated.health,75);
 assert.equal(coated.inventory[0],'coat');
 assert.equal(coated.predator.hp,PREDATOR_HP_MAX);
});
