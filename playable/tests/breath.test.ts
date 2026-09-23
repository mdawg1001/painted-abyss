import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,cells,tile,fits,distance,world,FLOOR_Y,SURFACE_Y,AIR_MAIN_MAX,EXIT,RELIC,
 breathZone,breathHatchSpawn,breathTankMounts,breathFootprint,nextBreathTankIndex,
 riseBreathWater,floodFraction,canWalk,BREATH_RISE_MPS,canWalkBreath,inBreathCorridor,breathingFreeAir,effectiveDepth,gasDrainRateAt,
 BREATH_WATER_START,BREATH_WATER_FILL_START,BREATH_WALK_WATER,BREATH_RESPAWN_LITRES,BREATH_ROW_HATCH,BREATH_ROW_FAR,BREATH_COLS,
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
 assert.equal(BREATH_WATER_FILL_START,.05);
 assert.ok(Math.abs(BREATH_WATER_START-BREATH_WALK_WATER*BREATH_WATER_FILL_START)<1e-9,'first spawn is 5% of the swim flood line');
 assert.ok(BREATH_WATER_START<BREATH_WALK_WATER);
 assert.ok(BREATH_WATER_START<FLOOR_Y,'5% still sits under the walk floor so you start dry');
 assert.ok(canWalkBreath(m.position,m.breathWaterY));
 assert.equal(m.air,AIR_MAIN_MAX);
 assert.equal(m.position.y,WALK_EYE_Y);
 const before=m.breathWaterY;
 m.position={...EXIT};
 m.update(1,false);
 assert.ok(m.breathWaterY>before,'flood clock runs while you are in the cave');
 assert.ok(m.breathWaterY<BREATH_WALK_WATER);
 assert.equal(inBreathCorridor(m.position),false);
 assert.equal(canWalkBreath(m.position,m.breathWaterY),false,'the guard\'s corridor rule is unchanged');
 assert.equal(canWalk(m.position,m.breathWaterY),true,'the player walks the dry cave floor');
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
 // The cave shares the same leak-driven waterline: head above it is free air…
 m.position={...EXIT,y:m.breathWaterY+1};
 assert.equal(inBreathCorridor(m.position),false);
 assert.equal(breathingFreeAir(m.position,m.breathWaterY),true);
 assert.equal(effectiveDepth(m.position,m.breathWaterY),0);
 assert.equal(gasDrainRateAt(m.position,m.breathWaterY,false,false),0);
 // …and under it the tank burns with depth below the flood plane.
 m.position={...EXIT,y:m.breathWaterY-1};
 assert.equal(breathingFreeAir(m.position,m.breathWaterY),false);
 assert.ok(Math.abs(effectiveDepth(m.position,m.breathWaterY)-1)<1e-9);
 assert.ok(gasDrainRateAt(m.position,m.breathWaterY,false,false)>0);
});

test('walk sprint uses WALK_SPRINT and walk cruise uses WALK_SPEED',()=>{
 assert.ok(WALK_SPRINT>WALK_SPEED);
 assert.ok(WALK_SPEED>1.5);
 assert.ok(WALK_SPRINT<5);
});

test('the leak floods the whole bunker from nearly dry: no cave water at spawn',()=>{
 const m=new Mission(true);
 // Spawn: water sits below the floor everywhere, so every head position in the cave is in free air.
 assert.ok(m.breathWaterY<FLOOR_Y,'bunker starts dry');
 assert.equal(floodFraction(m.breathWaterY),0);
 for(const y of [FLOOR_Y+.3,3,SURFACE_Y-.2]){
  const p={...EXIT,y};
  assert.equal(breathingFreeAir(p,m.breathWaterY),true,`cave air at y=${y}`);
  assert.equal(gasDrainRateAt(p,m.breathWaterY,true,false),0,'no tank burn in dry cave air');
 }
 // The leak raises one shared waterline at BREATH_RISE_MPS until the ceiling.
 m.position={...EXIT,y:6.8};
 const w0=m.breathWaterY;
 for(let i=0;i<60*10;i++)m.update(1/60,false);
 assert.ok(Math.abs(m.breathWaterY-(w0+BREATH_RISE_MPS*10))<1e-6,'rises at the leak rate');
 for(let i=0;i<60*30;i++)m.update(1/60,false);
 assert.ok(m.breathWaterY>FLOOR_Y&&floodFraction(m.breathWaterY)>0,'water is over the floor within ~40 s');
 assert.equal(riseBreathWater(SURFACE_Y-.01,60),SURFACE_Y,'fills to the ceiling and stops');
 assert.equal(floodFraction(SURFACE_Y),1);
 // Head-height in the cave (standing eye) floods in roughly two to three minutes.
 const toHead=(WALK_EYE_Y-BREATH_WATER_START)/BREATH_RISE_MPS;
 assert.ok(toHead>100&&toHead<200,`head height after ${toHead.toFixed(0)} s`);
});
