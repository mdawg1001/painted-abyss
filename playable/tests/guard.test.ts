import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 Mission,distance,tile,world,visible,FLOOR_Y,WALK_EYE_Y,
 breathZone,breathHatchSpawn,inBreathCorridor,canWalkBreath,BREATH_WALK_WATER,
 guardPerimeterRoute,guardClearLine,guardNavTarget,pickGuardSpawn,fits,cells,breathFootprint,
 guardBeat,beatIndices,beatStep,nearestBeatStop,isolateGuards,
 GUARD_COUNT,GUARD_PATROL_OVERLAP,GUARD_OUTFIT_COLORS,
 GUARD_MAGAZINE,GUARD_RELOAD_SECONDS,GUARD_GUN_COOLDOWN,guardHitChance,guardLookout,clearDistance,
 GUARD_WALL_CLEARANCE,GUARD_INSPECT_SPACING,GUARD_CORNER_PAUSE,GUARD_BODY_RADIUS,GUARD_FOV_HALF,createDiveChests,
 GUARD_MELEE_RANGE,GUARD_MELEE_DAMAGE,GUARD_COAT_DAMAGE_MULT,GUARD_GUN_DAMAGE,
 GUARD_BOTTLE_AIR,GUARD_LOOT_RANGE,SPARE_BOTTLE_LITRES,GUARD_SPEED,GUARD_AIM_TOLERANCE,GUARD_GUN_RANGE,GUARD_HORDE,
PREDATOR_SWIM_DEPTH,
} from '../src/simulation';
import {
 SOVIET_GUARD_SOURCE,SOVIET_GUARD_AUTHOR,SOVIET_GUARD_LICENSE,SOVIET_GUARD_GLB,SOVIET_GUARD_HEIGHT,
} from '../src/sovietGuardAsset';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {wrapAngle} from '../src/guardSteering';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Soviet guard asset is credited and the glb is present',()=>{
 assert.match(SOVIET_GUARD_SOURCE,/quaternius\.com/);
 assert.equal(SOVIET_GUARD_AUTHOR,'Quaternius');
 assert.match(SOVIET_GUARD_LICENSE,/CC0/);
 assert.equal(SOVIET_GUARD_GLB,'/assets/soviet-uniform/quaternius_soldier_male.glb');
 assert.ok(SOVIET_GUARD_HEIGHT>=1.85&&SOVIET_GUARD_HEIGHT<=2.0);
 const glb=path.join(root,'public/assets/soviet-uniform/quaternius_soldier_male.glb');
 assert.ok(fs.existsSync(glb),'glb must ship under public/assets');
 const buf=fs.readFileSync(glb);
 assert.equal(buf.toString('ascii',0,4),'glTF');
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Quaternius/);
 assert.match(notice,/Soldier_Male/);
 assert.match(notice,/CC0/);
});

/** Corridor centre, used where a test needs the guard somewhere known. */
const CORRIDOR={x:breathFootprint().cx,y:WALK_EYE_Y,z:16};
const FAR={x:500,y:WALK_EYE_Y,z:500}; // outside the building: nothing can see it
const alone=(m:Mission,keep=0)=>{isolateGuards(m,keep);return m;}

test('perimeter route: one closed loop round the whole building, off the walls',()=>{
 const r=guardPerimeterRoute();
 assert.ok(r.length>30);
 for(let i=0;i<r.length;i++){
  const a=r[i],b=r[(i+1)%r.length];
  assert.ok(guardClearLine(a,b,GUARD_BODY_RADIUS),`segment ${i} is walkable`);
  assert.ok(fits({x:a.x,y:3,z:a.z},GUARD_WALL_CLEARANCE-.1),`stop ${i} keeps ~${GUARD_WALL_CLEARANCE} m off the walls`);
  assert.ok(Math.hypot(b.x-a.x,b.z-a.z)<=GUARD_INSPECT_SPACING+1e-6,'never walks far without stopping to look');
 }
 // Covers every region: breath corridor, main cavern, relic chamber, fissure and exit pool.
 const has=(f:(w:{x:number;z:number})=>boolean)=>r.some(f);
 assert.ok(has(w=>w.z>20),'corridor');
 assert.ok(has(w=>w.z<-100),'relic chamber');
 assert.ok(has(w=>w.x>30&&w.z<-20&&w.z>-80),'fissure');
 assert.ok(has(w=>w.x>35&&w.z>-18),'exit pool');
 // Goes round the outside, not round the central pillar hole.
 assert.ok(!r.some(w=>w.x>-9&&w.x<9&&w.z<-58&&w.z>-82),'no stops hugging the pillar');
 // Every corner is a look-around stop.
 assert.ok(r.filter(w=>w.kind==='corner').every(w=>w.pause===GUARD_CORNER_PAUSE));
 // Keeps clear of the crates and suitcase.
 for(const c of createDiveChests())for(let i=0;i<r.length;i++){
  const a=r[i],b=r[(i+1)%r.length],abx=b.x-a.x,abz=b.z-a.z,l2=abx*abx+abz*abz||1;
  const t=Math.max(0,Math.min(1,((c.position.x-a.x)*abx+(c.position.z-a.z)*abz)/l2));
  assert.ok(Math.hypot(c.position.x-a.x-abx*t,c.position.z-a.z-abz*t)>1.2,`${c.kind} clearance`);
 }
});

test('guard sees what is in front of him, hears running, and feels someone right beside him',()=>{
 const setup=(dx:number,dz:number,opts:{torch?:boolean;sprint?:boolean}={})=>{
  const m=alone(new Mission(true));m.breathWaterY=FLOOR_Y-.1;
  m.guard.position={...CORRIDOR};m.guard.heading=0; // facing +Z (toward the hatch)
  m.guard.state='patrol';m.guard.pause=5;m.guard.speed=0;
  m.position={x:CORRIDOR.x+dx,y:WALK_EYE_Y,z:CORRIDOR.z+dz};
  m.torch=opts.torch??true;
  m.update(.05,!!opts.sprint);
  return m.guard.state;
 };
 const engaged=(s:string)=>s==='alert'||s==='chase';
 assert.ok(engaged(setup(0,8)),'torch-lit player in front at 8 m');
 assert.equal(setup(0,-8),'patrol','same player behind him goes unseen');
 assert.ok(engaged(setup(0,-1.8)),'close enough to sense from behind');
 assert.ok(engaged(setup(0,-8,{sprint:true})),'running footsteps behind him');
 assert.equal(setup(0,12,{torch:false}),'patrol','dark and far is safe');
 assert.ok(GUARD_FOV_HALF>1&&GUARD_FOV_HALF<1.3);
});

test('guard walks dry floor and stops where water is too deep',()=>{
 const m=alone(new Mission(true));
 m.guard.position={...CORRIDOR};
 m.guard.gun=false; // unarmed: this checks how he moves, not how he shoots
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 m.breathWaterY=BREATH_WALK_WATER+.2;
 assert.equal(canWalkBreath(m.guard.position,m.breathWaterY),false);
 const before={...m.guard.position};
 m.update(.05,false);
 assert.ok(distance(m.guard.position,before)<.05,'does not wade into deep water');
 // With dry water he can close distance along the corridor.
 m.breathWaterY=FLOOR_Y-.1;
 m.position={x:m.guard.position.x,y:WALK_EYE_Y,z:m.guard.position.z+6};
 m.guard.state='chase';m.guard.gun=false;
 m.guard.lastKnown={...m.position};
 m.guard.meleeCool=9;
 m.guard.shootCool=9;
 const startZ=m.guard.position.z;
 for(let i=0;i<40;i++)m.update(.05,false);
 assert.ok(Math.abs(m.guard.position.z-startZ)>.4||distance(m.guard.position,m.position)<distance({...m.guard.position,z:startZ},m.position));
 assert.ok(canWalkBreath(m.guard.position,m.breathWaterY));
});

test('guard cannot see through walls',()=>{
 const m=alone(new Mission(true));
 // Put guard in corridor and player behind the central pillar void (classic LOS break).
 m.guard.position={...CORRIDOR};
 m.position=world(11,17); // inside deleted pillar cells region-ish — use known blocked pair
 // Use two points with a solid between them: hatch vs deep cave shelf with wall.
 m.position={x:20,y:3,z:-60};
 assert.equal(visible(m.guard.position,m.position),false);
 m.guard.state='patrol';
 m.guard.timer=0;
 m.update(.2,false);
 assert.equal(m.guard.state,'patrol','no alert without LOS');
});

test('player coat still does not reduce a guardian bite',()=>{
 const coated=alone(new Mission(true));coated.breathWaterY=FLOOR_Y+PREDATOR_SWIM_DEPTH+.3;
 coated.inventory=['coat','knife','wood','flare','air'];
 coated.selected=0;
 coated.position=world(16,19);
 coated.predator.position={...coated.position};
 coated.predator.state='chase';
 coated.predator.bite=0;
 // Keep the remaining sentry away so only the ichthyosaur hits.
 coated.guard.position={...breathHatchSpawn()};
 coated.guard.meleeCool=99;
 coated.guard.shootCool=99;
 coated.update(.05);
 assert.equal(coated.health,75);
});

test('no line of sight, no shot; hit chance falls with range and a moving target',()=>{
 const m=alone(new Mission(true));m.breathWaterY=FLOOR_Y-.1;m.rand=()=>0;
 m.guard.position={...CORRIDOR};m.guard.state='chase';m.guard.aim=1;
 m.position={x:20,y:3,z:-60}; // through rock
 for(let i=0;i<60;i++)m.update(1/60,false);
 assert.equal(m.guard.shots,0);
 assert.ok(guardHitChance(3,0,false)>.9);
 assert.ok(guardHitChance(20,0,false)<guardHitChance(6,0,false));
 assert.ok(guardHitChance(8,3.4,false)<guardHitChance(8,0,false)-.2,'running is hard to hit');
 assert.ok(guardHitChance(8,0,true)<guardHitChance(8,0,false),'the snap shot is rushed');
});

