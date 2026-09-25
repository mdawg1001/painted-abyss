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
 GUARD_BOTTLE_AIR,GUARD_LOOT_RANGE,SPARE_BOTTLE_LITRES,GUARD_SPEED,GUARD_AIM_TOLERANCE,GUARD_GUN_RANGE,
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

test('five coloured guards share overlapping beats of the perimeter',()=>{
 const m=new Mission(true);
 const route=guardPerimeterRoute();
 const n=route.length;
 assert.equal(m.guards.length,GUARD_COUNT);
 assert.equal(GUARD_COUNT,5);
 assert.equal(GUARD_OUTFIT_COLORS.length,5);
 assert.equal(new Set(GUARD_OUTFIT_COLORS).size,5,'five distinct dyes');
 assert.equal(new Set(m.guards.map(g=>g.outfit)).size,GUARD_COUNT);
 assert.equal(new Set(m.guards.map(g=>g.spawnIndex)).size,GUARD_COUNT,'not stacked on one stop');
 const sets=m.guards.map((g,i)=>{
  const beat=guardBeat(i,n);
  assert.equal(g.beatStart,beat.start);
  assert.equal(g.beatLen,beat.len);
  const idx=beatIndices(beat.start,beat.len,n);
  assert.ok(idx.includes(g.spawnIndex),`guard ${i} spawns on his beat`);
  return new Set(idx);
 });
 for(let i=0;i<GUARD_COUNT;i++){
  const a=sets[i],b=sets[(i+1)%GUARD_COUNT];
  let share=0;for(const x of a)if(b.has(x))share++;
  const frac=share/a.size;
  assert.ok(frac>=.15&&frac<=.4,`adjacent overlap ${frac.toFixed(2)} (want ~${GUARD_PATROL_OVERLAP})`);
  for(let j=i+1;j<GUARD_COUNT;j++){
   assert.ok(distance(m.guards[i].position,m.guards[j].position)>1,`guards ${i}/${j} not overlapping`);
  }
 }
});

test('guard starts each life somewhere new on the perimeter, away from the player',()=>{
 let seq=0;const rand=()=>{seq=(seq*9301+49297)%233280;return seq/233280;};
 const m=new Mission(true);m.rand=rand;m.spawnGuard();
 const route=guardPerimeterRoute();
 const n=route.length;
 const starts:number[]=[m.guard.spawnIndex];
 for(let life=0;life<12;life++){
  m.outcome='lost';m.respawnAtHatch();
  const i=m.guard.spawnIndex;starts.push(i);
  const beat=guardBeat(0,n);
  const onBeat=beatIndices(beat.start,beat.len,n);
  assert.ok(onBeat.includes(i),'stays on his own beat');
  assert.notEqual(i,starts[starts.length-2],'never the same start twice running');
  assert.ok(Math.hypot(route[i].x-m.position.x,route[i].z-m.position.z)>=30,'spawns well away from the hatch');
  assert.deepEqual({x:m.guard.position.x,z:m.guard.position.z},{x:route[i].x,z:route[i].z});
  assert.equal(m.guard.state,'patrol');
  const step=beatStep(i,beat.start,beat.len,n,1);
  assert.equal(m.guard.waypoint,step.wp,'heads on to the next stop on his beat');
  assert.equal(m.guard.beatDir,step.dir);
 }
 assert.ok(new Set(starts).size>=6,`varied starts (${new Set(starts).size} distinct)`);
 assert.equal(pickGuardSpawn(()=>0,breathHatchSpawn(),-1)>=0,true);
});

test('patrol walks one overlapping beat: straight between stops, ping-pongs, looks around',()=>{
 const m=alone(new Mission(true));
 m.breathWaterY=FLOOR_Y-.1;
 m.position={...FAR};
 const route=guardPerimeterRoute();
 const n=route.length;
 const beat=guardBeat(0,n);
 const onBeat=new Set(beatIndices(beat.start,beat.len,n));
 const dt=1/20;
 let visited=0,prevWp=m.guard.waypoint,scanTurn=0,prev={...m.guard.position},prevH=m.guard.heading;
 let maxDev=0,sawReverse=false;
 for(let i=0;i<Math.round(8*60/dt);i++){
  m.breathWaterY=FLOOR_Y-.1; // hold the leak back so he can walk his beat
  m.update(dt,false);
  const g=m.guard;
  assert.equal(g.state,'patrol');
  assert.ok(onBeat.has(g.waypoint),'stays on his beat');
  if(g.beatDir===-1)sawReverse=true;
  assert.ok(fits({x:g.position.x,y:3,z:g.position.z},GUARD_BODY_RADIUS),'stays inside the building');
  const mv=Math.hypot(g.position.x-prev.x,g.position.z-prev.z);
  if(mv>1e-5){
   const along=((g.position.x-prev.x)*Math.sin(g.heading)+(g.position.z-prev.z)*Math.cos(g.heading))/mv;
   assert.ok(along>.995,'moves the way he faces');
   // Straight: stays on the line from the previous beat stop to the next.
   const opp=g.beatDir===1?-1:1;
   const a=route[beatStep(g.waypoint,g.beatStart,g.beatLen,n,opp as 1|-1).wp],b=route[g.waypoint];
   const L=Math.hypot(b.x-a.x,b.z-a.z)||1;
   maxDev=Math.max(maxDev,Math.abs(((g.position.x-a.x)*(b.z-a.z)-(g.position.z-a.z)*(b.x-a.x))/L));
  }else if(g.pause>0)scanTurn+=Math.abs(wrapAngle(g.heading-prevH));
  if(g.waypoint!==prevWp){visited++;prevWp=g.waypoint;}
  prev={...g.position};prevH=g.heading;
 }
 assert.ok(visited>=beat.len,`covers the beat (${visited} stops of ${beat.len})`);
 assert.ok(sawReverse,'turns about at the end of his beat instead of cutting across');
 assert.ok(maxDev<.05,`straight lines between stops (max ${maxDev.toFixed(3)} m off)`);
 assert.ok(scanTurn>beat.len,'sweeps his gaze at the stops');
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
 assert.equal(setup(0,8),'alert','torch-lit player in front at 8 m');
 assert.equal(setup(0,-8),'patrol','same player behind him goes unseen');
 assert.equal(setup(0,-1.8),'alert','close enough to sense from behind');
 assert.equal(setup(0,-8,{sprint:true}),'alert','running footsteps behind him');
 assert.equal(setup(0,12,{torch:false}),'patrol','dark and far is safe');
 assert.ok(GUARD_FOV_HALF>1&&GUARD_FOV_HALF<1.3);
});

test('after losing the player he rejoins his beat at the nearest stop',()=>{
 const m=alone(new Mission(true));m.breathWaterY=FLOOR_Y-.1;m.position={...FAR};
 m.guard.position={x:10,y:WALK_EYE_Y,z:-60};
 m.guard.state='search';m.guard.timer=8.1;m.guard.arrived=true;
 m.update(.05,false);
 assert.equal(m.guard.state,'patrol');
 const route=guardPerimeterRoute(),w=route[m.guard.waypoint];
 const want=nearestBeatStop({x:10,z:-60},m.guard.beatStart,m.guard.beatLen);
 assert.equal(m.guard.waypoint,want);
 assert.ok(Math.abs(Math.hypot(w.x-10,w.z+60)-Math.hypot(route[want].x-10,route[want].z+60))<1e-9);
 const nav=guardNavTarget(m.guard.position,w);
 assert.ok(guardClearLine(m.guard.position,nav),'a walkable way back');
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

test('guard melee kills, claims corpse gear, and uses gun / bottle / coat',()=>{
 const m=alone(new Mission(true));
 // Clear corridor floor gear so only corpse drops are claimable nearby.
 m.pickups=m.pickups.filter(p=>p.item!=='gun'&&p.item!=='bottle'&&p.item!=='coat');
 m.inventory=['gun','bottle','coat',null,null];
 m.guard.position={...CORRIDOR};
 m.position={...m.guard.position};
 m.position.z+=GUARD_MELEE_RANGE*.4;
 m.guard.state='chase';
 m.guard.lastKnown={...m.position};
 m.guard.meleeCool=0;
 m.guard.gun=false;m.guard.bottle=false;m.guard.coat=false;
 m.health=GUARD_MELEE_DAMAGE; // one strike kills
 m.update(.05,false);
 assert.equal(m.outcome,'lost');
 assert.equal(m.killedByGuard,true);
 m.respawnAtHatch();
 isolateGuards(m,0);
 assert.equal(m.guard.gun,true);
 assert.equal(m.guard.bottle,true);
 assert.equal(m.guard.coat,true);
 assert.equal(m.guard.air,GUARD_BOTTLE_AIR);
 assert.equal(GUARD_BOTTLE_AIR,SPARE_BOTTLE_LITRES);
 assert.ok(!m.pickups.some(p=>p.item==='gun'&&distance(p.position,m.guard.position)<GUARD_LOOT_RANGE));
 // Coat softens his next melee after respawn.
 m.guard.position={...CORRIDOR};
 m.position={...m.guard.position};
 m.position.z+=.5;
 m.guard.state='chase';
 m.guard.meleeCool=0;
 m.guard.shootCool=9; // force melee path
 const before=m.health;
 m.update(.05,false);
 const expected=Math.round(GUARD_MELEE_DAMAGE*GUARD_COAT_DAMAGE_MULT);
 assert.equal(before-m.health,expected);
 // Gun shoots for GUARD_GUN_DAMAGE (coat-softened) when out of melee.
 m.health=100;
 m.guard.meleeCool=9;
 m.guard.shootCool=0;
 m.position={...m.guard.position};
 m.position.z+=6;
 m.guard.state='chase';
 m.guard.heading=0;m.guard.aim=1;m.lastPlayerPos={...m.position};
 m.rand=()=>0; // every shot lands
 m.guard.lastKnown={...m.position};
 // Ensure LOS along open corridor
 assert.ok(visible(m.guard.position,m.position));
 const hp=m.health;
 m.update(.05,false);
 assert.equal(hp-m.health,Math.round(GUARD_GUN_DAMAGE*GUARD_COAT_DAMAGE_MULT));
});

test('player coat still does not reduce a guardian bite',()=>{
 const coated=alone(new Mission(true));
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

test('spotting you, he draws and fires almost at once, and keeps his feet moving while he shoots',()=>{
 const m=alone(new Mission(true));m.breathWaterY=FLOOR_Y-.1;m.rand=()=>.99; // every shot misses: keep the player alive
 m.guard.position={...CORRIDOR};m.guard.heading=0;m.guard.state='patrol';m.guard.pause=5;
 m.position={x:CORRIDOR.x,y:WALK_EYE_Y,z:CORRIDOR.z+10};m.torch=true;
 const dt=1/60;let t=0,firstShotAt=-1;const shotTimes:number[]=[];let moved=0;let prev={...m.guard.position};
 let stillFrames=0,frames=0,worstAim=0;
 for(let i=0;i<60*14;i++){
  const shotsBefore=m.guard.shots;
  m.update(dt,false);t+=dt;
  if(m.guard.shots>shotTimes.length){shotTimes.push(t);if(firstShotAt<0)firstShotAt=t;}
  if(m.guard.shots>shotsBefore){
   const to=Math.atan2(m.position.x-m.guard.position.x,m.position.z-m.guard.position.z);
   worstAim=Math.max(worstAim,Math.abs(wrapAngle(to-m.guard.heading)));
  }
  if(firstShotAt>0){
   const step=Math.hypot(m.guard.position.x-prev.x,m.guard.position.z-prev.z);
   moved+=step;frames++;if(step<1e-4)stillFrames++;
  }
  prev={...m.guard.position};
 }
 assert.ok(firstShotAt>0&&firstShotAt<.8,`first shot ${firstShotAt.toFixed(2)} s after he sees you`);
 assert.ok(moved>3,`keeps repositioning while shooting (moved ${moved.toFixed(2)} m)`);
 assert.ok(stillFrames/frames<.15,`rarely frozen (${(100*stillFrames/frames).toFixed(0)} % of frames)`);
 assert.ok(worstAim<=GUARD_AIM_TOLERANCE+1e-6,'chest and muzzle stay on you for every shot');
 const d=Math.hypot(m.position.x-m.guard.position.x,m.position.z-m.guard.position.z);
 assert.ok(d>2&&d<GUARD_GUN_RANGE,'footwork keeps him at a fighting distance');
 // Semi-automatic cadence, then a reload after the 8-round magazine.
 const gaps=shotTimes.slice(1).map((s,i)=>s-shotTimes[i]);
 for(const g of gaps.slice(0,GUARD_MAGAZINE-1))assert.ok(g>=GUARD_GUN_COOLDOWN*.85-.02&&g<=GUARD_GUN_COOLDOWN*1.15+.05,`gap ${g.toFixed(2)}`);
 assert.ok(gaps[GUARD_MAGAZINE-1]>=GUARD_RELOAD_SECONDS,'reloads after eight rounds');
 assert.ok(shotTimes.length>GUARD_MAGAZINE,'keeps firing after reloading');
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

test('at every stop he looks out into the room, never at the wall',()=>{
 const m=alone(new Mission(true));m.breathWaterY=FLOOR_Y-.1;m.position={...FAR};
 const route=guardPerimeterRoute();
 const n=route.length;
 const beat=guardBeat(0,n);
 const beatStops=beatIndices(beat.start,beat.len,n).filter(i=>route[i].pause>0);
 const dt=1/20;let checked=0,worst=Infinity,stopsSeen=new Set<number>();
 for(let i=0;i<Math.round(8*60/dt);i++){
  m.breathWaterY=FLOOR_Y-.1;
  m.update(dt,false);
  const g=m.guard;
  if(g.state!=='patrol'||g.pause<=0)continue;
  stopsSeen.add(g.waypoint);
  // Once he has had time to turn round, every glance has open floor in front of it.
  if(g.scanTime<g.scanTurn+.35)continue;
  const view=clearDistance(g.position,g.heading);
  worst=Math.min(worst,view);checked++;
 }
 assert.ok(stopsSeen.size>=beatStops.length-1,`visited the beat stops (${stopsSeen.size} of ${beatStops.length})`);
 assert.ok(checked>200);
 assert.ok(worst>=2.5,`closest wall he stared at was ${worst.toFixed(2)} m away`);
 // The best view at each stop is a real view down the room.
 for(const i of beatStops)assert.ok(guardLookout(route[i]).view>=8,'faces a long view');
});
