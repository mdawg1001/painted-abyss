import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,cells,tile,fits,distance,world,FLOOR_Y,SURFACE_Y,AIR_MAIN_MAX,EXIT,RELIC,
 breathZone,breathHatchSpawn,breathTankMounts,breathFootprint,nextBreathTankIndex,
 riseBreathWater,canWalkBreath,inBreathCorridor,breathingFreeAir,effectiveDepth,gasDrainRateAt,
 BREATH_WATER_START,BREATH_WALK_WATER,BREATH_RESPAWN_LITRES,BREATH_ROW_HATCH,BREATH_ROW_FAR,BREATH_COLS,
 WALK_EYE_Y,WALK_SPEED,WALK_SPRINT,
} from '../src/simulation';

test('breath corridor is attached to the cave and does not replace it',()=>{
 assert.ok(cells.has('11,3'),'entrance chamber stays');
 assert.ok(cells.has('11,30'),'bone alcove stays');
 assert.ok(cells.has('19,3'),'exit shaft cell stays');
 assert.ok(cells.has(`${BREATH_COLS[0]},${BREATH_ROW_HATCH}`));
 assert.ok(cells.has(`${BREATH_COLS[1]},${BREATH_ROW_FAR}`));
 // Joined to the entrance along the shared edge (corridor row 0 meets cave row 1).
 assert.ok(cells.has(`${BREATH_COLS[0]},1`));
 assert.ok(cells.has(`${BREATH_COLS[1]},0`));
 const hatch=breathHatchSpawn();
 assert.equal(breathZone(tile(hatch).col,tile(hatch).row),'hatch');
 assert.ok(fits(hatch,.48));
 assert.ok(hatch.y>FLOOR_Y&&hatch.y<SURFACE_Y);
 const far=world(BREATH_COLS[0],BREATH_ROW_FAR);
 assert.ok(distance(hatch,far)>24,'spawn is not near the far end');
 assert.equal(breathZone(far.x?tile(far).col:0,tile(far).row),'far');
});

test('first life is dry enough to walk and water rises only as corridor state',()=>{
 const m=new Mission(true);
 assert.equal(m.breathWaterY,BREATH_WATER_START);
 assert.ok(BREATH_WATER_START<FLOOR_Y,'water starts below the walk floor');
 assert.ok(canWalkBreath(m.position,m.breathWaterY));
 assert.equal(m.air,AIR_MAIN_MAX);
 assert.equal(m.position.y,WALK_EYE_Y);
 const before=m.breathWaterY;
 m.position={...EXIT};
 m.update(1,false);
 assert.ok(m.breathWaterY>before,'flood clock runs while you are in the cave');
 assert.ok(m.breathWaterY<BREATH_WALK_WATER);
 assert.equal(inBreathCorridor(m.position),false);
 assert.equal(canWalkBreath(m.position,m.breathWaterY),false,'cave water column is not the corridor');
 const capped=riseBreathWater(SURFACE_Y-.01,10);
 assert.equal(capped,SURFACE_Y);
});

test('wall tank mounts stay in the middle and move on death',()=>{
 const mounts=breathTankMounts();
 assert.ok(mounts.length>=3);
 const zones=new Set(mounts.map(t=>breathZone(t.col,t.row)));
 assert.deepEqual([...zones],['middle']);
 for(const t of mounts){
  assert.equal(breathZone(tile(t).col,tile(t).row),'middle');
  assert.notEqual(breathZone(t.col,t.row),'hatch');
  assert.notEqual(breathZone(t.col,t.row),'far');
 }
 const m=new Mission(true);
 const startIndex=m.breathTankIndex;
 const waterMark=2.4;
 m.breathWaterY=waterMark;
 m.update(2,false);
 const risen=m.breathWaterY;
 assert.ok(risen>waterMark);
 m.air=.01;m.bailout=0;
 m.update(.05,false);
 assert.equal(m.outcome,'lost','drowning still ends the life inside update');
 const kept=m.breathWaterY;
 m.respawnAtHatch();
 assert.equal(m.outcome,'playing');
 assert.equal(m.breathWaterY,kept,'water stays where it was');
 assert.notEqual(m.breathTankIndex,startIndex);
 assert.equal(m.breathTankIndex,nextBreathTankIndex(startIndex));
 assert.equal(m.position.x,breathHatchSpawn().x);
 assert.equal(m.position.z,breathHatchSpawn().z);
 assert.equal(m.air,BREATH_RESPAWN_LITRES);
 assert.ok(m.air<AIR_MAIN_MAX);
 assert.equal(m.breathDeaths,1);
 const again=m.breathTankIndex;
 m.respawnAtHatch();
 assert.notEqual(m.breathTankIndex,again);
 assert.equal(m.breathWaterY,kept);
 // Filling the cylinder requires standing at the current mount.
 const tank=breathTankMounts()[m.breathTankIndex];
 m.position={x:tank.x,y:WALK_EYE_Y,z:tank.z};
 assert.equal(m.nearBreathTank(),true);
 m.interact();
 assert.equal(m.air,AIR_MAIN_MAX);
 assert.match(m.notice,/Wall tank/);
 // A fresh dive (menu restart) is dry again and back on the first mount.
 const fresh=new Mission(true);
 assert.equal(fresh.breathWaterY,BREATH_WATER_START);
 assert.equal(fresh.breathTankIndex,0);
 assert.equal(fresh.air,AIR_MAIN_MAX);
 assert.equal(fresh.position.z,breathHatchSpawn().z);
});

test('every new life spawns at the hatch, never the far end or the old random set',()=>{
 const hatch=breathHatchSpawn();
 const farZ=world(BREATH_COLS[0],BREATH_ROW_FAR).z;
 for(let n=0;n<12;n++){
  const m=new Mission(true);
  assert.equal(m.position.x,hatch.x);
  assert.equal(m.position.z,hatch.z);
  assert.ok(Math.abs(m.position.z-farZ)>20);
  assert.equal(breathZone(tile(m.position).col,tile(m.position).row),'hatch');
 }
 const foot=breathFootprint();
 assert.ok(foot.width>=8&&foot.depth>30);
 assert.ok(hatch.x>foot.minX&&hatch.x<foot.maxX);
 assert.ok(hatch.z<foot.maxZ&&hatch.z>foot.minZ);
 assert.ok(distance(hatch,EXIT)>20);
 assert.ok(distance(hatch,RELIC)>40);
});

test('dry corridor walk: free air, zero depth, no tank burn; flood forces swim',()=>{
 const m=new Mission(true);
 assert.ok(canWalkBreath(m.position,m.breathWaterY));
 assert.ok(breathingFreeAir(m.position,m.breathWaterY));
 assert.equal(effectiveDepth(m.position,m.breathWaterY),0);
 assert.equal(gasDrainRateAt(m.position,m.breathWaterY,false,false),0);
 assert.equal(gasDrainRateAt(m.position,m.breathWaterY,true,false),0);
 const air0=m.air;
 m.buoyancy=.8;m.buoyancyTrim=.3;
 m.update(2,true);
 assert.equal(m.air,air0,'open-circuit air does not burn while walking dry');
 assert.equal(m.buoyancy,0,'BCD clears on foot');
 assert.equal(m.buoyancyTrim,0);
 assert.ok(canWalkBreath(m.position,m.breathWaterY));
 // Flood past eye height — leave the floor.
 m.breathWaterY=BREATH_WALK_WATER+.05;
 assert.equal(canWalkBreath(m.position,m.breathWaterY),false);
 // Still head-above until the eye is pushed under the waterline.
 assert.ok(breathingFreeAir(m.position,m.breathWaterY)||m.position.y<=m.breathWaterY+.12);
 // Dive into the corridor water — tank burns again.
 m.position={...m.position,y:m.breathWaterY-.4};
 assert.equal(breathingFreeAir(m.position,m.breathWaterY),false);
 assert.ok(effectiveDepth(m.position,m.breathWaterY)>.3);
 assert.ok(gasDrainRateAt(m.position,m.breathWaterY,false,false)>0);
 // Cave always swims and burns.
 m.position={...EXIT};
 assert.equal(canWalkBreath(m.position,m.breathWaterY),false);
 assert.equal(breathingFreeAir(m.position,m.breathWaterY),false);
 assert.ok(effectiveDepth(m.position,m.breathWaterY)>0);
 assert.ok(gasDrainRateAt(m.position,m.breathWaterY,false,false)>0);
});

test('walk sprint uses WALK_SPRINT and walk cruise uses WALK_SPEED',()=>{
 assert.ok(WALK_SPRINT>WALK_SPEED);
 assert.ok(WALK_SPEED>1.5);
 assert.ok(WALK_SPRINT<5);
});
