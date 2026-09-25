import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,distance,tile,world,AIR_MAIN_MAX,PREDATOR_HP_MAX,
 breathZone,breathHatchSpawn,inBreathCorridor,corridorGearPickups,
 occupiesFpsHand,torchShouldShine,SPARE_BOTTLE_LITRES,BREATH_RESPAWN_LITRES,
 WALK_EYE_Y,nextBreathTankIndex,isolateGuards,
PREDATOR_SWIM_DEPTH,FLOOR_Y,
} from '../src/simulation';

test('gun, spare bottle, and coat lie in the corridor and not at the hatch',()=>{
 const gear=corridorGearPickups();
 assert.deepEqual(gear.map(p=>p.item),['gun','bottle','coat']);
 assert.deepEqual(gear.map(p=>p.id),[3,4,5]);
 const hatch=breathHatchSpawn();
 for(const p of gear){
  assert.equal(breathZone(tile(p.position).col,tile(p.position).row),'middle');
  assert.notEqual(breathZone(tile(p.position).col,tile(p.position).row),'hatch');
  assert.ok(inBreathCorridor(p.position));
  assert.ok(distance(p.position,hatch)>6,`${p.item} is clear of the hatch`);
 }
 const m=new Mission(true);
 assert.equal(m.nextId,6);
 assert.deepEqual(m.inventory,['knife','gun','flare','bandage','air'],'the survival kit: knife, pistol, flare, sealant, pony');
 for(const item of ['gun','bottle','coat'] as const){
  assert.equal(m.pickups.filter(p=>p.item===item).length,1);
 }
 assert.equal(m.pickups[0].item,'relic');
});

test('death drops whatever is carried at the corpse; each life starts with the pistol and knife',()=>{
 const m=new Mission(true);
 const worldGear=m.pickups.filter(p=>p.item==='gun'||p.item==='bottle'||p.item==='coat').map(p=>p.id);
 const corpse={x:-2,y:WALK_EYE_Y,z:16};
 m.position={...corpse};
 m.inventory=['gun','bottle','coat','knife','relic'];
 m.selected=2;
 const water=1.7;
 m.breathWaterY=water;
 const tank=m.breathTankIndex;
 const before=m.pickups.length;
 m.respawnAtHatch();
 assert.deepEqual(m.inventory,['knife','gun',null,null,null]);
 assert.equal(m.selected,1,'pistol in hand');
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
 for(const p of dropped){
  assert.ok(distance({...p.position,y:corpse.y},corpse)<1.2);
  assert.ok(Math.abs(p.position.z-breathHatchSpawn().z)>8,'corpse stays off the hatch');
 }
 for(const id of worldGear)assert.ok(m.pickups.some(p=>p.id===id),'untaken corridor gear stays');
 const hatch=breathHatchSpawn();
 const empty=new Mission(true);
 empty.inventory=[null,null,null,null,null];
 empty.position={...hatch};
 const n=empty.pickups.length;
 empty.respawnAtHatch();
 assert.equal(empty.pickups.length,n);
 assert.deepEqual(empty.inventory,['knife','gun',null,null,null]);
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
