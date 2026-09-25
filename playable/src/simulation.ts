// Shared, deterministic gameplay rules. Rendering and input live in CaveWorld.
import { steerToward, faceStanding, yawToward, wrapAngle, turnToward, forwardOf, GUARD_STEER_WALK, GUARD_STEER_RUN } from './guardSteering';
import { VALVE_CLOSE_RAD, VALVE_REACH, VALVE_STAND, WHEEL_CENTRE, leakFlowFraction } from './valve';
export type Point={x:number;y:number;z:number};
export type Item='stone'|'wood'|'flare'|'air'|'bandage'|'relic'|'knife'|'gun'|'bottle'|'coat';
export type Pickup={id:number;item:Item;position:Point};
export type PredatorState='patrol'|'alert'|'chase'|'search'|'damaged'|'dead';
/** Corridor Soviet guard FSM (Phase 3). Separate from the cave ichthyosaur. */
export type GuardState='patrol'|'alert'|'chase'|'search';
export type StabResult='hit'|'miss'|'cooldown'|'blocked';
export type ChestKind='military'|'plastic'|'suitcase';
/** Which torn map region a chest yields. */
export type MapFragmentId='west'|'east'|'deep';
export type Chest={id:number;kind:ChestKind;position:Point;yaw:number;open:boolean;fragment:MapFragmentId};
export const CELL=4;
/** Guardian bite reach (m). Knife must stay shorter so stabbing means mutual danger. */
export const BITE_RANGE=3.2;
/** Forward melee stab reach (m) — inside bite range. */
export const KNIFE_RANGE=2.2;
/** Half-angle of the stab cone (radians) ≈ 50°. */
export const KNIFE_CONE=.87;
export const PREDATOR_HP_MAX=100;
/** Chunk damage per connected stab. Three hits leave ≤15% HP (break-off); fourth kills. */
export const KNIFE_DAMAGE=30;
/** Remaining HP at which a living guardian breaks off the chase (85% damage taken). */
export const PREDATOR_BREAK_HP=PREDATOR_HP_MAX*.15;
/** Seconds between stabs. Short enough that rapid clicks land as rapid stabs. */
export const KNIFE_COOLDOWN=.26;
/** Brief AI interrupt after a wound. */
export const PREDATOR_FLINCH=.42;
/** Playable water column: floor → surface (ceiling of `fits`). World Y is metres. */
export const FLOOR_Y=.65;
export const SURFACE_Y=7.1;
export const START:Point={x:0,y:3,z:-12};
export const RELIC:Point={x:0,y:2,z:-112};
export const EXIT:Point={x:32,y:3,z:-12};
/**
 * Breath corridor — one addition south of the entrance chamber.
 * Hatch (spawn) at the south end, marked far end where it meets the cave.
 * Water rises in these cells only and is not part of the cave column.
 */
export const BREATH_COLS:[number,number]=[10,11];
export const BREATH_ROW_HATCH=-8;
export const BREATH_ROW_FAR=0;
/** One-cell buffer so the hatch and the far end never host the tank. */
export const BREATH_HATCH_ROWS=1;
export const BREATH_FAR_ROWS=1;
/** Metres the bunker leak raises the waterline each second with the leak valve fully open (corridor and cave share it). Head-height in about two minutes. */
export const BREATH_RISE_MPS=0.016;
/** Standing eye height on the dry corridor floor. */
export const WALK_EYE_Y=FLOOR_Y+1.6;
/** Brisk human walk and steady run (m/s). The gait model in gait.ts owns the details. */
export const WALK_SPEED=1.55;
export const WALK_SPRINT=3.4;
/** Litres on the cylinder after a death — enough to search, not to skip the tank. */
export const BREATH_RESPAWN_LITRES=28;
/** Spare bottle in the corridor. Used with R; death can take it before that. */
export const SPARE_BOTTLE_LITRES=40;
/**
 * Walk while corridor water is still below the eyes.
 * Above this the player leaves the floor and uses the swim stack.
 */
export const BREATH_WALK_WATER=WALK_EYE_Y-.05;
/**
 * First spawn only (menu restart resets). Five percent of the walk→swim flood height
 * so the corridor starts nearly dry and you walk / run for a long stretch.
 */
export const BREATH_WATER_FILL_START=.05;
export const BREATH_WATER_START=BREATH_WALK_WATER*BREATH_WATER_FILL_START;
/** Head clears the corridor waterline — free air, no tank drain. */
export const BREATH_AIR_MARGIN=.12;
/** Phase 3 Soviet guard — melee reach on dry corridor floor. */
export const GUARD_MELEE_RANGE=1.85;
export const GUARD_MELEE_DAMAGE=22;
/** When the guard wears the stolen coat, his strike damage is multiplied by this. */
export const GUARD_COAT_DAMAGE_MULT=.55;
/** TT-33 engagement range in the bunker murk (m). */
export const GUARD_GUN_RANGE=22;
export const GUARD_GUN_DAMAGE=30;
/** Aimed semi-automatic cadence (s between shots, before jitter). */
export const GUARD_GUN_COOLDOWN=.75;
/** TT-33 box magazine and a practised reload. */
export const GUARD_MAGAZINE=8;
export const GUARD_RELOAD_SECONDS=2.2;
/** Time from spotting you to the first shot: turn, raise, aim (s). Human visual reaction ≈ 0.25–0.35 s. */
export const GUARD_DRAW_SECONDS=.35;
/** He only fires once the muzzle is within this of you (radians, ~10°). */
export const GUARD_AIM_TOLERANCE=10*Math.PI/180;
/**
 * Chance a shot hits: steady close shots almost always land, long ones in the dark
 * often miss, a running target is much harder, and the first snap shot is rushed.
 */
export function guardHitChance(distance:number,targetSpeed:number,firstShot:boolean,shooterSpeed=0){
 const base=Math.max(.3,Math.min(.95,.98-.03*Math.max(0,distance-2)));
 const moving=targetSpeed>2.4?.28:targetSpeed>.6?.12:0;
 // Firing on the move costs him accuracy too (a steady shuffle, not a sprint).
 const shuffle=GUARD_MOVING_FIRE_PENALTY*Math.min(1.5,Math.max(0,shooterSpeed));
 return Math.max(.08,Math.min(.95,base-moving-shuffle-(firstShot?.15:0)));
}
/** Hit-chance lost per m/s of his own footwork while firing. */
export const GUARD_MOVING_FIRE_PENALTY=.09;
/**
 * Combat footwork while he shoots (AAA human-enemy practice: TLOU / F.E.A.R. / Halo
 * enemies keep repositioning between firing positions instead of freezing).
 * Speeds are a crouched combat walk, not a run; legs last about 1–2 s.
 */
export const GUARD_STRAFE={
 speedMin:.5,speedMax:1.05,
 /** Faster shuffle while reloading or dodging a charge. */
 evade:1.45,
 legMin:.9,legMax:2.2,
 /** Back off inside this range, press forward beyond `far` (m). */
 near:3.4,far:8.5,
 accel:3.2,
} as const;
export const GUARD_MELEE_COOLDOWN=1.55;
/** Bottle fuel the guard drinks as “his air” while chasing. */
export const GUARD_BOTTLE_AIR=SPARE_BOTTLE_LITRES;
export const GUARD_SPEED={patrol:1.2,alert:.65,chase:2.15,chaseTired:1.25,search:1.45} as const;
/** How close a corpse drop must be for him to claim gun / bottle / coat. */
export const GUARD_LOOT_RANGE=1.6;
/** Guard shoulder radius for wall clearance (m). */
export const GUARD_BODY_RADIUS=.42;
/** Seconds the guard stands at each patrol post before turning about. */
export const GUARD_PATROL_PAUSE=2.4;
/** Chase stops this far from the target: inside melee reach, outside body contact (m). */
export const GUARD_CHASE_STANDOFF=1.15;
/** Half arc of the look-around at the end of a search (radians, ~52°). */
export const GUARD_SCAN_ARC=.9;
/** How many Soviet guards walk the bunker at once. */
export const GUARD_COUNT=5;
/** Adjacent beats share this fraction of their waypoints (~one room of overlap). */
export const GUARD_PATROL_OVERLAP=.25;
/**
 * Cloth dyes — same cut, five colours so they read as a squad, not clones.
 * Olive, khaki, steel-blue, brown, field-teal.
 */
export const GUARD_OUTFIT_COLORS=[0x4a5a3a,0x8b6b32,0x3d5a6c,0x6a3c28,0x2f5d4a] as const;
const TAU_GUARD=Math.PI*2;
/** Floor-sitting interactables — each chest hides one map fragment. */
export const CHEST_LABEL:Record<ChestKind,string>={
 military:'military crate',
 plastic:'plastic crate',
 suitcase:'vintage suitcase',
};
export const MAP_FRAGMENT_LABEL:Record<MapFragmentId,string>={
 west:'west cavern',
 east:'east shelf',
 deep:'bone alcove',
};
export const MAP_FRAGMENT_ORDER:MapFragmentId[]=['west','east','deep'];
/** Lidless crates show the scrap immediately; E grabs it instead of opening a lid. */
export function chestHasLid(kind:ChestKind){return kind!=='plastic';}

/** HUD line for the chest currently in reach. */
export function chestInteractPrompt(chest:Chest,taken:boolean){
 const label=CHEST_LABEL[chest.kind];
 if(!chestHasLid(chest.kind))return taken?`The ${label} is empty`:'E · Grab chart scrap';
 if(!chest.open)return `E · Open ${label}`;
 return taken?`The ${label} is empty`:'E · Take chart scrap';
}

export function createDiveChests():Chest[]{
 return [
  // West shelf — west cavern fragment.
  {id:1,kind:'military',position:{x:-22,y:FLOOR_Y,z:-52},yaw:.35,open:false,fragment:'west'},
  // East shelf — east approach / exit arm fragment.
  {id:2,kind:'plastic',position:{x:20,y:FLOOR_Y,z:-60},yaw:-.9,open:false,fragment:'east'},
  // Near bone alcove — deep north fragment.
  {id:3,kind:'suitcase',position:{x:12,y:FLOOR_Y,z:-104},yaw:2.4,open:false,fragment:'deep'},
 ];
}
/** Metres below the surface plane. Shared by HUD, gas, buoyancy, and torch. */
export function hydrostaticDepth(y:number){return Math.max(0,SURFACE_Y-y);}
/** Ambient pressure in atmospheres (≈ 1 + depth_m/10). */
export function ata(y:number){return 1+hydrostaticDepth(y)/10;}

/** Surface air consumption at cruise (L/min). Sprint/panic multiply via effort. */
export const SAC_CRUISE_LPM=18;
/**
 * Free-gas main tank in litres.
 * 100 L ≈ 5.6 min of surface cruise at 18 L/min SAC (drain still scales with ATA × effort).
 */
export const AIR_MAIN_LITRES=100;
/** Separate pony / bailout pool in litres. */
export const AIR_BAILOUT_LITRES=9;
/** @deprecated Prefer AIR_MAIN_LITRES — kept as an alias for older call sites. */
export const AIR_MAIN_MAX=AIR_MAIN_LITRES;
/** @deprecated Prefer AIR_BAILOUT_LITRES. */
export const AIR_BAILOUT_MAX=AIR_BAILOUT_LITRES;
export const AIR_EFFORT_CRUISE=1;
/** Sprint RMV — hard kick burns gas fast so Shift is a real choice. */
export const AIR_EFFORT_SPRINT=2.2;
/** Bite / panic RMV spike. */
export const AIR_EFFORT_PANIC=2.9;
/** Seconds of elevated RMV after a guardian bite. */
export const AIR_PANIC_SECONDS=3;
export function gasEffort(sprinting=false,panic=false){
 if(panic)return AIR_EFFORT_PANIC;
 if(sprinting)return AIR_EFFORT_SPRINT;
 return AIR_EFFORT_CRUISE;
}
/** Litres consumed per wall-clock second (SAC/60 × ATA × effort). */
export function gasDrainRate(depthY:number,sprinting=false,panic=false){
 return (SAC_CRUISE_LPM/60)*ata(depthY)*gasEffort(sprinting,panic);
}
/** Tank burn for the current pose. Zero while the head is above the bunker waterline. */
export function gasDrainRateAt(p:Point,waterY:number,sprinting=false,panic=false){
 if(breathingFreeAir(p,waterY))return 0;
 // Depth is measured from the rising bunker waterline everywhere (corridor and cave).
 const depth=effectiveDepth(p,waterY);
 return (SAC_CRUISE_LPM/60)*(1+depth/10)*gasEffort(sprinting,panic);
}

/** Kick thrust (m/s²) — terminal speed ≈ sqrt(thrust / SWIM_DRAG_K). */
export const SWIM_THRUST_CRUISE=8.7;
export const SWIM_THRUST_SPRINT=22.05;
/** Quadratic drag coefficient; cruise ≈2.2 m/s, sprint ≈3.5 m/s with thrusts above. */
export const SWIM_DRAG_K=1.8;
/**
 * Vertical accel at full BCD (|buoyancy| = 1).
 * Tuned so holding Space reaches a gentle float (~1.5 m/s) — not arcade ±2.8 vy.
 */
export const SWIM_BUOYANCY_ACCEL=4.1;
/** How fast Space/Q fills buoyancy toward ±1 (1/s exponential approach). Slow on purpose. */
export const BCD_FILL_RATE=.95;
/** Hands-off return of buoyancy toward the trim target (1/s). Snappy so release actually stops you. */
export const BCD_TRIM_RATE=2.4;
/** Snap to trim when this close — exponential asymptote otherwise leaves eternal micro-thrust. */
export const BCD_NEUTRAL_EPS=.04;
/** Extra vertical linear damp (1/s) when BCD is neutral and you are not finning up/down. */
export const BCD_SETTLE_DAMP=3.2;
/** Max player-set idle bias (|buoyancyTrim|). Full ±1 remains momentary Space/Q only. */
export const BCD_TRIM_BIAS_MAX=.45;
/** How fast [ ] nudge the locked trim bias (1/s). */
export const BCD_TRIM_ADJUST_RATE=.9;
/**
 * Look-pitch finning only contributes this fraction of kick thrust on Y.
 * Horizontal kick stays full; vertical climb is mostly a BCD skill.
 */
export const SWIM_KICK_VERTICAL_SCALE=.25;
/** Predator band sits between player cruise and sprint; rage exceeds chase, damaged limps. */
export const PREDATOR_SPEED={chase:2.7,rage:3.35,patrol:1.3,alert:.5,damaged:.85} as const;
export type Vec3={x:number;y:number;z:number};
/**
 * Space/Q BCD input (−1..+1). Idle drifts toward `trimTarget` (default neutral 0).
 * Never sets velocity directly — CaveWorld applies buoyancy as vertical accel.
 * Idle snaps onto the trim target so residual BCD does not cause eternal rise/sink.
 */
export function updateBuoyancy(buoyancy:number,bcdInput:number,dt:number,trimTarget=0){
 const b=Math.max(-1,Math.min(1,bcdInput));
 const trim=Math.max(-1,Math.min(1,trimTarget));
 if(Math.abs(b)>.01){
  const target=Math.sign(b);
  return buoyancy+(target-buoyancy)*(1-Math.exp(-BCD_FILL_RATE*dt));
 }
 const next=buoyancy+(trim-buoyancy)*(1-Math.exp(-BCD_TRIM_RATE*dt));
 return Math.abs(next-trim)<BCD_NEUTRAL_EPS?trim:next;
}
/**
 * Player-set idle bias: hold ] / [ toward ±BCD_TRIM_BIAS_MAX.
 * Release Space/Q and buoyancy settles onto this bias (non-zero = slow rise/sink).
 */
export function updateBuoyancyTrim(trim:number,adjustInput:number,dt:number){
 const a=Math.max(-1,Math.min(1,adjustInput));
 if(Math.abs(a)<.01)return Math.max(-BCD_TRIM_BIAS_MAX,Math.min(BCD_TRIM_BIAS_MAX,trim));
 const target=Math.sign(a)*BCD_TRIM_BIAS_MAX;
 const next=trim+(target-trim)*(1-Math.exp(-BCD_TRIM_ADJUST_RATE*dt));
 return Math.max(-BCD_TRIM_BIAS_MAX,Math.min(BCD_TRIM_BIAS_MAX,next));
}
/**
 * Force-based swim step: look/strafe kick + BCD buoyancy − k|v|v.
 * `kick` is WASD (look-forward may include a small Y); Space/Q must not be baked into kick.
 */
export function stepSwimVelocity(velocity:Vec3,kick:Vec3,buoyancy:number,sprint:boolean,dt:number){
 const thrust=sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE;
 const kLen=Math.hypot(kick.x,kick.y,kick.z);
 // Ignore deadzone residual so LEVEL trim truly stops vertical BCD thrust.
 const buoy=Math.abs(buoyancy)<BCD_NEUTRAL_EPS?0:buoyancy;
 let ax=0,ay=buoy*SWIM_BUOYANCY_ACCEL,az=0;
 if(kLen>1e-6){
  const s=thrust/kLen;
  ax=kick.x*s;
  // Scale Y after normalize so pure look-up is a weak fin climb, not full thrust.
  ay+=kick.y*s*SWIM_KICK_VERTICAL_SCALE;
  az=kick.z*s;
 }
 // Neutral trim + no vertical fin: bleed leftover rise/sink so release actually stops you.
 // Non-zero player bias keeps a gentle float/sink — that is intentional.
 if(Math.abs(buoyancy)<BCD_NEUTRAL_EPS&&Math.abs(kick.y)<1e-3)ay+=-velocity.y*BCD_SETTLE_DAMP;
 const speed=Math.hypot(velocity.x,velocity.y,velocity.z);
 const drag=-SWIM_DRAG_K*speed;
 ax+=velocity.x*drag;ay+=velocity.y*drag;az+=velocity.z*drag;
 velocity.x+=ax*dt;velocity.y+=ay*dt;velocity.z+=az*dt;
}
/** Steady vertical speed under constant full BCD with no kick (analytic). */
export function terminalBuoyancySpeed(){
 return Math.sqrt(SWIM_BUOYANCY_ACCEL/SWIM_DRAG_K);
}
/** Steady horizontal speed under constant thrust with zero buoyancy (analytic). */
export function terminalSwimSpeed(sprint=false){
 return Math.sqrt((sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE)/SWIM_DRAG_K);
}

export const ITEMS:Record<Item,{name:string;short:string;description:string;hint:string}>={
 knife:{name:'Diving knife',short:'Knife',description:'Click · Close-range stab. Durable — not consumed.',hint:'Click to stab · durable'},
 stone:{name:'Limestone',short:'Stone',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 wood:{name:'Driftwood',short:'Wood',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 flare:{name:'Signal flare',short:'Flare',description:'R · Deploy a 12-second distraction at your position.',hint:'R use · consumed'},
 air:{name:'Pony bottle',short:'Pony',description:`R · Arm a separate bailout cylinder (~${AIR_BAILOUT_LITRES} L). Drains after the main tank.`,hint:'R arm bailout · consumed'},
 bandage:{name:'Sealant kit',short:'Sealant',description:'R · Repair 45 suit integrity (consumed).',hint:'R use · consumed'},
 relic:{name:'Ammonite relic',short:'Relic',description:'Cannot use here — carry to the extraction pool.',hint:'Carry to extract · do not drop'},
 gun:{name:'Gun',short:'Gun',description:'Carry it in the hand. It does not fire for you. If a corridor guard kills you, he will take it and shoot.',hint:'Carry · death drops it'},
 bottle:{name:'Spare air bottle',short:'Bottle',description:`R · Add ${SPARE_BOTTLE_LITRES} L to the main cylinder (consumed). A corridor guard will drink it as his air if he takes it from your corpse.`,hint:'R use · consumed'},
 coat:{name:'Coat',short:'Coat',description:'Carry it. It does not soften guardian bites. If a corridor guard takes it from your corpse, his strikes hurt less.',hint:'Carry · death drops it'},
};
/**
 * Inventory items that occupy the FPS hand instead of the dive torch.
 * The torch is not a slot item — it is the default held prop whenever the
 * selected slot is not one of these (knife today; other hand-props later).
 */
export function occupiesFpsHand(item:Item|null):boolean{
 return item==='knife'||item==='gun';
}
/** Corridor floor gear. Not on the hatch. */
export function corridorGearPickups():Pickup[]{
 const spots:{item:Item;x:number;z:number}[]=[
  {item:'gun',x:-3.2,z:22},
  {item:'bottle',x:-.5,z:14},
  {item:'coat',x:-2.6,z:8},
 ];
 return spots.map((s,i)=>({id:3+i,item:s.item,position:{x:s.x,y:FLOOR_Y,z:s.z}}));
}
/** True when the selected slot should show the dive torch (and may shine). */
export function holdingTorchItem(item:Item|null):boolean{
 return !occupiesFpsHand(item);
}
/** SpotLight, volume beam, and lens emissive only while holding the torch and F is on. */
export function torchShouldShine(torchFlag:boolean, selectedItem:Item|null):boolean{
 return !!torchFlag&&holdingTorchItem(selectedItem);
}
export const cells=new Set<string>();
const rect=(a:number,b:number,c:number,d:number)=>{for(let col=a;col<=b;col++)for(let row=c;row<=d;row++)cells.add(`${col},${row}`);};
rect(8,14,1,5);rect(10,12,5,11);rect(4,18,11,24);rect(10,12,24,26);rect(8,14,26,30);
for(let c=9;c<=12;c++)for(let r=15;r<=20;r++)cells.delete(`${c},${r}`);
// A single-cell fissure separates the predator's cavern from the extraction pool.
rect(19,19,4,20);rect(18,19,20,21);rect(17,21,1,4);
// South corridor joined to the entrance (row 1). Does not replace any cave cell.
for(const col of BREATH_COLS)for(let row=BREATH_ROW_HATCH;row<=BREATH_ROW_FAR;row++)cells.add(`${col},${row}`);
export const world=(col:number,row:number):Point=>({x:(col-11)*CELL,y:3,z:-row*CELL});
export const tile=(p:Point)=>({col:Math.round(p.x/CELL)+11,row:Math.round(-p.z/CELL)});
export const distance=(a:Point,b:Point)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
export function isOpen(x:number,z:number){return cells.has(`${Math.round(x/CELL)+11},${Math.round(-z/CELL)}`);}
export function fits(p:Point,r=.48){
 if(p.y<FLOOR_Y||p.y>SURFACE_Y)return false;
 for(let a=0;a<8;a++)if(!isOpen(p.x+Math.cos(a*Math.PI/4)*r,p.z+Math.sin(a*Math.PI/4)*r))return false;
 return isOpen(p.x,p.z);
}
export function moveBody(p:Point,dx:number,dy:number,dz:number,r=.48){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dy,dz)/.25));
 for(let n=0;n<steps;n++)for(const [axis,delta] of [['x',dx],['y',dy],['z',dz]] as const){const next={...p,[axis]:p[axis]+delta/steps};if(fits(next,r))p[axis]=next[axis];}
}
export function visible(a:Point,b:Point){const n=Math.ceil(distance(a,b)/.4);for(let i=0;i<=n;i++){const t=n?i/n:0;if(!isOpen(a.x+(b.x-a.x)*t,a.z+(b.z-a.z)*t))return false;}return true;}
function predatorCell(col:number,row:number){return col>=4&&col<=18&&row>=12&&row<=28&&cells.has(`${col},${row}`);}
/** Minimum diver↔guardian spawn separation each dive (metres). */
export const SPAWN_SEPARATION=32;
/**
 * Curated open-floor corners across distinct map regions (not a tight entrance cluster).
 * Each dive picks one at random so starts feel far apart: entrance, corridor, shelves,
 * exit arm, mid cavern, deep south, far north / bone alcove.
 */
export const PLAYER_SPAWN_CELLS:[number,number][]=[
 // Entrance chamber
 [11,3],[8,2],[14,5],
 // Approach corridor
 [11,8],
 // West + east hunting shelves
 [4,13],[4,22],[18,13],[18,22],
 // Mid-cavern mouth (around the central pillar void)
 [7,12],[15,12],
 // Extraction / exit arm
 [19,4],[20,2],
 // Deep south corners + cavern mouth
 [4,24],[18,24],[11,24],
 // Far north / bone alcove
 [8,28],[14,28],[11,30],
];
/**
 * Curated hunting-cavern corners / chambers (inside `predatorCell` bounds).
 * Each dive picks one at random so the guardian is not always at the same tile.
 */
export const PREDATOR_SPAWN_CELLS:[number,number][]=[
 [16,19],[6,19],[16,22],[6,22],[6,13],[16,13],
 [4,16],[18,16],[4,22],[18,22],[11,24],[8,28],[14,28],
];
function spawnCellOpen(col:number,row:number){return cells.has(`${col},${row}`);}
/** Valid open-water diver starts from `PLAYER_SPAWN_CELLS` (falls back to classic START). */
export function playerSpawnCandidates():Point[]{
 const out:Point[]=[];
 for(const [col,row] of PLAYER_SPAWN_CELLS){
  if(!spawnCellOpen(col,row))continue;
  const p=world(col,row);
  if(fits(p,.48))out.push(p);
 }
 return out.length?out:[{...START}];
}
/** Pick a navigable diver spawn for a new dive. */
export function randomPlayerSpawn(rand:()=>number=Math.random):Point{
 const picks=playerSpawnCandidates();
 return {...picks[Math.floor(rand()*picks.length)!]};
}
/** Valid open-water spawn points derived from `PREDATOR_SPAWN_CELLS` (falls back to classic east mid). */
export function predatorSpawnCandidates(awayFrom:Point=START):Point[]{
 const out:Point[]=[];
 for(const [col,row] of PREDATOR_SPAWN_CELLS){
  if(!predatorCell(col,row))continue;
  const p=world(col,row);
  if(fits(p,1.3)&&distance(p,awayFrom)>SPAWN_SEPARATION)out.push(p);
 }
 return out.length?out:[world(16,19)];
}
/** Pick a navigable predator spawn for a new dive, kept clear of the diver start. */
export function randomPredatorSpawn(rand:()=>number=Math.random,awayFrom:Point=START):Point{
 const picks=predatorSpawnCandidates(awayFrom);
 return {...picks[Math.floor(rand()*picks.length)!]};
}
export type BreathZone='hatch'|'middle'|'far'|'';
/** Hatch, open middle, or marked far end. Empty string means this cell is not the corridor. */
export function breathZone(col:number,row:number):BreathZone{
 if((col!==BREATH_COLS[0]&&col!==BREATH_COLS[1])||row<BREATH_ROW_HATCH||row>BREATH_ROW_FAR)return '';
 if(row<=BREATH_ROW_HATCH+BREATH_HATCH_ROWS)return 'hatch';
 if(row>=BREATH_ROW_FAR-BREATH_FAR_ROWS)return 'far';
 return 'middle';
}
export function inBreathCorridor(p:Point){const t=tile(p);return breathZone(t.col,t.row)!=='';}
/**
 * Dry or wading on the corridor floor. False in the cave (always swim)
 * and false once corridor water reaches eye height.
 */
export function canWalkBreath(p:Point,waterY:number){return inBreathCorridor(p)&&waterY<BREATH_WALK_WATER;}
/**
 * The player walks on any open bunker floor (corridor or cave) while the flood is
 * below the walk line; deeper than that he has to swim.
 */
export function canWalk(p:Point,waterY:number){return waterY<BREATH_WALK_WATER&&isOpen(p.x,p.z);}
/**
 * Head above the bunker flood — free air, no tank drain, air-side fog.
 * The whole bunker (corridor and cave) shares one leak-driven waterline.
 */
export function breathingFreeAir(p:Point,waterY:number){
 return p.y>waterY+BREATH_AIR_MARGIN;
}
/** Metres of water above the eye, measured from the bunker flood plane. 0 in free air. */
export function effectiveDepth(p:Point,waterY:number){
 if(breathingFreeAir(p,waterY))return 0;
 return Math.max(0,waterY-p.y);
}
/** Flood fill 0..1 from the bunker floor to the ceiling plane (HUD gauge). */
export function floodFraction(waterY:number){
 return Math.max(0,Math.min(1,(waterY-FLOOR_Y)/(SURFACE_Y-FLOOR_Y)));
}
/** Equivalent SURFACE_Y-based height for systems tuned to the old full column (torch murk). */
export function floodColumnY(p:Point,waterY:number){
 return breathingFreeAir(p,waterY)?SURFACE_Y:SURFACE_Y-effectiveDepth(p,waterY);
}
/** `flow` is the fraction of full leak flow still getting past the valve (1 = open, 0 = sealed). */
export function riseBreathWater(waterY:number,dt:number,flow=1){return Math.min(SURFACE_Y,waterY+BREATH_RISE_MPS*Math.max(0,flow)*Math.max(0,dt));}
/** Open corridor cells only — the Soviet guard never enters the cave grid. */
export function breathCell(col:number,row:number){return breathZone(col,row)!=='';}
export type GuardWaypoint={x:number;z:number;
 /** corner = a turn in the wall; inspect = a stop partway along a long wall. */
 kind:'corner'|'inspect';
 /** Seconds he stands here looking around. */
 pause:number};
/** How far the guard's patrol line keeps off the walls (m). Leaves room for rock and fittings. */
export const GUARD_WALL_CLEARANCE=1.3;
/** Longest stretch he walks before stopping to look around (m). */
export const GUARD_INSPECT_SPACING=16;
export const GUARD_CORNER_PAUSE=3.4;
export const GUARD_INSPECT_PAUSE=2.4;
/** How far the look-out survey reaches (m). */
const LOOKOUT_RANGE=28;
/** Clear floor distance along one bearing from `p` (m), stopping at the first wall. */
export function clearDistance(p:{x:number;z:number},yaw:number,max=LOOKOUT_RANGE){
 const sx=Math.sin(yaw),sz=Math.cos(yaw);
 for(let d=.25;d<=max;d+=.25)if(!isOpen(p.x+sx*d,p.z+sz*d))return d-.25;
 return max;
}
/**
 * Where a sentry standing at `p` should look: out into the room, not at the wall.
 * Surveys 72 bearings, smooths them over ±15°, and takes the bearing with the
 * longest open view. The sweep arc is the span around it that still looks into
 * open floor (at least 45 % of the best view, never under 3 m), capped at ±75°.
 */
/**
 * Next heading to aim for when turning from `from` to `to` on the spot: go round
 * whichever way keeps his eyes on open floor, so a sentry turning at a corner
 * swings his view across the room rather than across the wall beside him.
 */
export function turnThroughRoom(p:{x:number;z:number},from:number,to:number){
 const d=wrapAngle(to-from);
 if(Math.abs(d)<.05)return to;
 const ways=[d,d>0?d-Math.PI*2:d+Math.PI*2];
 let best=ways[0],bestScore=-1;
 for(const w of ways){
  let worst=Infinity;const steps=Math.max(2,Math.ceil(Math.abs(w)/.17));
  for(let k=1;k<steps;k++)worst=Math.min(worst,clearDistance(p,from+w*k/steps,8));
  if(worst>bestScore+.25||(Math.abs(worst-bestScore)<=.25&&Math.abs(w)<Math.abs(best))){bestScore=worst;best=w;}
 }
 // Lead the turn by at most ~50° so the rate-limited pivot keeps to the chosen side.
 const lead=Math.sign(best)*Math.min(Math.abs(best),.9);
 return wrapAngle(from+lead);
}
export function guardLookout(p:{x:number;z:number}){
 const n=72,dist:number[]=[];
 for(let i=0;i<n;i++)dist.push(clearDistance(p,i/n*Math.PI*2));
 const smooth=dist.map((_,i)=>{let s=0;for(let k=-3;k<=3;k++)s+=dist[(i+k+n)%n];return s/7;});
 let best=0;for(let i=1;i<n;i++)if(smooth[i]>smooth[best])best=i;
 const keep=(i:number)=>dist[(i+n)%n]>=Math.max(3,.45*dist[best]);
 let lo=0,hi=0;const cap=Math.round(75/360*n);
 while(lo<cap&&keep(best-lo-1))lo++;
 while(hi<cap&&keep(best+hi+1))hi++;
 // Centre the sweep on the open span so both ends look into the room.
 const centre=best+(hi-lo)/2;
 // A second open view well away from the first (the other way down a corridor, or
 // across to another doorway) gets a look too.
 let alt=-1;for(let i=0;i<n;i++){const sep=Math.min(Math.abs(i-best),n-Math.abs(i-best));if(sep>=n/4&&smooth[i]>=Math.max(6,.5*smooth[best])&&(alt<0||smooth[i]>smooth[alt]))alt=i;}
 return{yaw:wrapAngle(centre/n*Math.PI*2),arc:(lo+hi)/2/n*Math.PI*2,view:dist[best],alt:alt<0?null:wrapAngle(alt/n*Math.PI*2)};
}
/** Half-angle of the guard's field of view (radians, ~65°). */
export const GUARD_FOV_HALF=65*Math.PI/180;
let guardRouteCache:GuardWaypoint[]|null=null;
/**
 * Perimeter patrol for the whole bunker: the outer boundary of every open cell
 * (corridor, cave chambers, fissure and exit pool), pulled in off the walls,
 * walked as one closed loop. The central rock pillar is a hole, so the loop goes
 * round the outside of the building, not the pillar.
 */
export function guardPerimeterRoute():GuardWaypoint[]{
 if(guardRouteCache)return guardRouteCache;
 // 1. Directed boundary edges in grid space (u = col, v = row), interior on the left.
 type V={u:number;v:number};
 const key=(p:V)=>`${p.u},${p.v}`;
 const out=new Map<string,V[]>();
 const add=(a:V,b:V)=>{const k=key(a);if(!out.has(k))out.set(k,[]);out.get(k)!.push(b);};
 for(const c of cells){
  const [u,v]=c.split(',').map(Number);
  const has=(du:number,dv:number)=>cells.has(`${u+du},${v+dv}`);
  if(!has(0,-1))add({u:u-.5,v:v-.5},{u:u+.5,v:v-.5});
  if(!has(1,0))add({u:u+.5,v:v-.5},{u:u+.5,v:v+.5});
  if(!has(0,1))add({u:u+.5,v:v+.5},{u:u-.5,v:v+.5});
  if(!has(-1,0))add({u:u-.5,v:v+.5},{u:u-.5,v:v-.5});
 }
 // 2. Chain edges into loops (a pinch vertex takes the sharpest left turn so rooms stay separate).
 const used=new Set<string>();
 const loops:V[][]=[];
 for(const [k,list] of out)for(const first of list){
  const ek=k+'>'+key(first);if(used.has(ek))continue;
  const start=(()=>{const [u,v]=k.split(',').map(Number);return{u,v};})();
  const loop:V[]=[start];let prev=start,cur=first;used.add(ek);
  while(key(cur)!==key(start)){
   loop.push(cur);
   const nexts=(out.get(key(cur))||[]).filter(n=>!used.has(key(cur)+'>'+key(n)));
   const din={u:cur.u-prev.u,v:cur.v-prev.v};
   nexts.sort((a,b)=>{
    const turn=(n:V)=>{const d={u:n.u-cur.u,v:n.v-cur.v};return Math.atan2(din.u*d.v-din.v*d.u,din.u*d.u+din.v*d.v);};
    return turn(b)-turn(a);
   });
   const nx=nexts[0];if(!nx)break;
   used.add(key(cur)+'>'+key(nx));prev=cur;cur=nx;
  }
  loops.push(loop);
 }
 // 3. The outer wall is the loop enclosing the most area (holes wind the other way).
 const area=(l:V[])=>l.reduce((a,p,i)=>{const q=l[(i+1)%l.length];return a+p.u*q.v-q.u*p.v;},0)/2;
 const outer=loops.reduce((best,l)=>area(l)>area(best)?l:best,loops[0]);
 // 4. Drop collinear points, then offset every corner inward along both wall normals.
 const corners=outer.filter((p,i)=>{const a=outer[(i-1+outer.length)%outer.length],b=outer[(i+1)%outer.length];return (p.u-a.u)*(b.v-p.v)-(p.v-a.v)*(b.u-p.u)!==0;});
 const m=GUARD_WALL_CLEARANCE/CELL;
 const pts=corners.map((p,i)=>{
  const a=corners[(i-1+corners.length)%corners.length],b=corners[(i+1)%corners.length];
  const d1={u:Math.sign(p.u-a.u),v:Math.sign(p.v-a.v)},d2={u:Math.sign(b.u-p.u),v:Math.sign(b.v-p.v)};
  // Left normal of a direction (u,v) is (−v,u): interior side.
  const g={u:p.u+m*(-d1.v-d2.v),v:p.v+m*(d1.u+d2.u)};
  const w=world(g.u,g.v);return{x:w.x,z:w.z};
 });
 // 5. Stops: every corner, plus inspection stops along long walls.
 const route:GuardWaypoint[]=[];
 for(let i=0;i<pts.length;i++){
  const a=pts[i],b=pts[(i+1)%pts.length];
  route.push({x:a.x,z:a.z,kind:'corner',pause:GUARD_CORNER_PAUSE});
  const len=Math.hypot(b.x-a.x,b.z-a.z),n=Math.floor(len/GUARD_INSPECT_SPACING);
  for(let k=1;k<=n;k++){
   const t=k/(n+1);
   route.push({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t,kind:'inspect',pause:GUARD_INSPECT_PAUSE});
  }
 }
 // 6. Step round floor props (crates, suitcase) that sit near a wall.
 const props=createDiveChests().map(c=>({x:c.position.x,z:c.position.z,r:1.25}));
 for(const o of props){
  const segDist=(a:{x:number;z:number},b:{x:number;z:number})=>{
   const abx=b.x-a.x,abz=b.z-a.z,l2=abx*abx+abz*abz||1;
   const t=Math.max(0,Math.min(1,((o.x-a.x)*abx+(o.z-a.z)*abz)/l2));
   return Math.hypot(o.x-a.x-abx*t,o.z-a.z-abz*t);
  };
  // A prop tucked into a corner: cut the corner on the room side, far enough back
  // that both new legs and the diagonal keep clear of it.
  for(let i=0;i<route.length;i++){
   const w=route[i];if(w.kind!=='corner'||Math.hypot(w.x-o.x,w.z-o.z)>o.r+2)continue;
   const pv=route[(i-1+route.length)%route.length],nx=route[(i+1)%route.length];
   const lp=Math.hypot(pv.x-w.x,pv.z-w.z),ln=Math.hypot(nx.x-w.x,nx.z-w.z);
   for(let k=1;k<Math.min(lp,ln)-.3;k+=.25){
    const p1={x:w.x+(pv.x-w.x)/lp*k,z:w.z+(pv.z-w.z)/lp*k},p2={x:w.x+(nx.x-w.x)/ln*k,z:w.z+(nx.z-w.z)/ln*k};
    if(segDist(pv,p1)>=o.r&&segDist(p1,p2)>=o.r&&segDist(p2,nx)>=o.r&&guardClearLine(p1,p2,GUARD_BODY_RADIUS)){
     route.splice(i,1,{...p1,kind:'corner',pause:w.pause},{...p2,kind:'inspect',pause:0});
     i++;break;
    }
   }
  }
  for(let i=0;i<route.length;i++){
   const a=route[i],b=route[(i+1)%route.length];
   const abx=b.x-a.x,abz=b.z-a.z,l2=abx*abx+abz*abz||1;
   const t=Math.max(0,Math.min(1,((o.x-a.x)*abx+(o.z-a.z)*abz)/l2));
   const cx=a.x+abx*t,cz=a.z+abz*t,dd=Math.hypot(o.x-cx,o.z-cz);
   if(dd>=o.r)continue;
   const len=Math.sqrt(l2),nx=-abz/len,nz=abx/len,ux=abx/len,uz=abz/len;
   const sd=(cx-o.x)*nx+(cz-o.z)*nz;
   // Pass on whichever side leaves the most room to the wall.
   let pick:{x:number;z:number}[]|null=null,room=0;
   for(const side of [1,-1]){
    const shift=side*(o.r+.05)-sd;
    for(const along of [o.r*1.6,o.r]){
     const pts=[{x:cx-ux*along+nx*shift,z:cz-uz*along+nz*shift},{x:cx+ux*along+nx*shift,z:cz+uz*along+nz*shift}];
     const r=[1.3,1.1,.9,.7,.5].find(rr=>pts.every(q=>fits({x:q.x,y:3,z:q.z},rr)))??0;
     if(r>room){room=r;pick=pts;}
    }
   }
   if(!pick)continue;
   const [before,after]=pick;
   route.splice(i+1,0,{...before,kind:'inspect',pause:0},{...after,kind:'inspect',pause:0});
   i+=2;
  }
 }
 guardRouteCache=route;
 return route;
}
/** Every point along a→b leaves room for a body of radius r inside open cells. */
export function guardClearLine(a:{x:number;z:number},b:{x:number;z:number},r=GUARD_BODY_RADIUS){
 const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.25));
 for(let i=0;i<=n;i++){const t=i/n;if(!fits({x:a.x+(b.x-a.x)*t,y:3,z:a.z+(b.z-a.z)*t},r))return false;}
 return true;
}
/**
 * Where the guard should head next to reach `to` anywhere in the bunker:
 * a breadth-first route over open cells, pulled tight so he walks the longest
 * straight line he can actually fit along (no zigzag between cell centres).
 */
export function guardNavTarget(from:{x:number;z:number},to:{x:number;z:number}):{x:number;z:number;final:boolean}{
 if(guardClearLine(from,to))return{x:to.x,z:to.z,final:true};
 const a=tile({x:from.x,y:0,z:from.z}),b=tile({x:to.x,y:0,z:to.z});
 const start=`${a.col},${a.row}`,end=`${b.col},${b.row}`;
 const parents=new Map<string,string|null>([[start,null]]),queue=[start];
 for(let i=0;i<queue.length&&!parents.has(end);i++){
  const [c,r]=queue[i].split(',').map(Number);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(cells.has(k)&&!parents.has(k)){parents.set(k,queue[i]);queue.push(k);}}
 }
 if(!parents.has(end))return{x:from.x,z:from.z,final:true};
 const path:{x:number;z:number}[]=[];
 for(let k:string|null=end;k&&k!==start;k=parents.get(k)??null){const [c,r]=k.split(',').map(Number);const w=world(c,r);path.unshift({x:w.x,z:w.z});}
 path.push({x:to.x,z:to.z});
 for(let i=path.length-1;i>=0;i--)if(guardClearLine(from,path[i]))return{...path[i],final:i===path.length-1};
 return{...path[0],final:path.length===1};
}
/**
 * Pick where a guard starts a life: a random stop on the perimeter (or `allowed`
 * beat), well away from the player and never the same stop as last time.
 */
export function pickGuardSpawn(rand:()=>number,avoid:Point,previous=-1,minDistance=30,allowed?:number[]){
 const route=guardPerimeterRoute();
 const idxs=allowed&&allowed.length?allowed:route.map((_,i)=>i);
 const farEnough=idxs.filter(i=>i!==previous&&route[i].pause>0&&Math.hypot(route[i].x-avoid.x,route[i].z-avoid.z)>=minDistance);
 const pool=farEnough.length?farEnough:idxs.filter(i=>i!==previous&&route[i].pause>0);
 const pickFrom=pool.length?pool:idxs.filter(i=>i!==previous);
 const list=pickFrom.length?pickFrom:idxs;
 return list[Math.min(list.length-1,Math.floor(rand()*list.length))];
}
/** One overlapping arc of the perimeter that a single guard walks. */
export function guardBeat(index:number,n=guardPerimeterRoute().length){
 const stride=n/GUARD_COUNT;
 const len=Math.max(4,Math.round(stride/(1-GUARD_PATROL_OVERLAP)));
 const start=((Math.round(index*stride)%n)+n)%n;
 return{start,len};
}
export function beatIndices(start:number,len:number,n:number){
 return Array.from({length:len},(_,k)=>(start+k)%n);
}
export function beatNext(wp:number,start:number,len:number,n:number){
 const rel=((wp-start)%n+n)%n;
 return(start+(rel+1)%len)%n;
}
/** Step along a beat and reverse at the ends so he does not cut across the bunker. */
export function beatStep(wp:number,start:number,len:number,n:number,dir:1|-1){
 if(len<=1)return{wp:start,dir};
 const rel=((wp-start)%n+n)%n;
 let r=rel+dir,d=dir;
 if(r>=len){d=-1;r=Math.max(0,len-2);}
 if(r<0){d=1;r=Math.min(len-1,1);}
 return{wp:(start+r)%n,dir:d as 1|-1};
}
export function nearestBeatStop(from:{x:number;z:number},start:number,len:number){
 const route=guardPerimeterRoute(),n=route.length;
 let best=start,bd=Infinity;
 for(const i of beatIndices(start,len,n)){
  const d=Math.hypot(route[i].x-from.x,route[i].z-from.z);
  if(d<bd){bd=d;best=i;}
 }
 return best;
}
export type BreathTankMount={x:number;y:number;z:number;yaw:number;row:number;col:number};
/**
 * Wall mounts along the middle of the corridor only.
 * Alternating walls so a respawn is a different place, never the hatch or the far end.
 */
export function breathTankMounts():BreathTankMount[]{
 const rows:number[]=[];
 for(let row=BREATH_ROW_HATCH+BREATH_HATCH_ROWS+1;row<=BREATH_ROW_FAR-BREATH_FAR_ROWS-1;row++)rows.push(row);
 return rows.map((row,i)=>{
  const west=i%2===0;
  const col=west?BREATH_COLS[0]:BREATH_COLS[1];
  const p=world(col,row);
  return {x:west?p.x-1.7:p.x+1.7,y:1.55,z:p.z,yaw:west?Math.PI/2:-Math.PI/2,row,col};
 });
}
export function nextBreathTankIndex(current:number,count=breathTankMounts().length){
 if(count<=1)return 0;
 return (current+1)%count;
}
/** Always the hatch. Replaces random diver spawn for this phase. */
export function breathHatchSpawn():Point{
 const a=world(BREATH_COLS[0],BREATH_ROW_HATCH);
 const b=world(BREATH_COLS[1],BREATH_ROW_HATCH);
 return {x:(a.x+b.x)/2,y:WALK_EYE_Y,z:(a.z+b.z)/2};
}
export type BreathFootprint={minX:number;maxX:number;minZ:number;maxZ:number;width:number;depth:number;cx:number;cz:number};
/** Axis-aligned footprint of the corridor water (not the cave). Constant for the life of the map. */
let breathFootprintCache:BreathFootprint|null=null;
export function breathFootprint():BreathFootprint{
 if(breathFootprintCache)return breathFootprintCache;
 const minX=world(BREATH_COLS[0],0).x-CELL/2;
 const maxX=world(BREATH_COLS[1],0).x+CELL/2;
 const maxZ=world(BREATH_COLS[0],BREATH_ROW_HATCH).z+CELL/2;
 const minZ=world(BREATH_COLS[0],BREATH_ROW_FAR).z-CELL/2;
 breathFootprintCache={minX,maxX,minZ,maxZ,width:maxX-minX,depth:maxZ-minZ,cx:(minX+maxX)/2,cz:(minZ+maxZ)/2};
 return breathFootprintCache;
}
export function pathBetween(a:Point,b:Point){
 const from=tile(a),to=tile(b),start=`${from.col},${from.row}`,end=`${to.col},${to.row}`;
 if(!predatorCell(to.col,to.row))return [];
 const queue=[start],parents=new Map<string,string|null>([[start,null]]);
 for(let i=0;i<queue.length;i++){const key=queue[i];if(key===end)break;const [c,r]=key.split(',').map(Number);for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const k=`${c+dc},${r+dr}`;if(predatorCell(c+dc,r+dr)&&!parents.has(k)){parents.set(k,key);queue.push(k);}}}
 if(!parents.has(end))return [];const path:Point[]=[];let key:string|null=end;
 while(key&&key!==start){const [c,r]=key.split(',').map(Number);path.unshift(world(c,r));key=parents.get(key)!;}return path;
}
/** Radians per pointer/wheel unit; also scales arrow-key and unlocked look-stick via the same path. */
export const LOOK_SENSITIVITY=.003;
export const lookDelta=(yaw:number,pitch:number,dx:number,dy:number)=>({yaw:yaw-dx*LOOK_SENSITIVITY,pitch:Math.max(-1.4,Math.min(1.4,pitch-dy*LOOK_SENSITIVITY))});
/** Frame-rate-independent multiplier for unlocked continuous yaw (paired with lookDelta). */
export const FREE_LOOK_RATE=1.45;
export type Rgb={r:number;g:number;b:number};
export type TorchModulation={
 intensity:number;distance:number;decay:number;beamOpacity:number;particle:number;
 /** Direct-path lamp tint (SpotLight / wall wash). */
 r:number;g:number;b:number;
 /** Backscatter haze tint (volumetric beam). Teal-biased vs direct. */
 beamR:number;beamG:number;beamB:number;
 /** Beer–Lambert coefficients (1/m). Direct ≠ backscatter (Sea-thru). */
 betaDirect:Rgb;betaBackscatter:Rgb;
};
/** Mid-swim, level-look render baseline (soft SpotLight · 0.1.17). */
export const TORCH_BASELINE={intensity:85,distance:34,decay:1.15,beamOpacity:.09} as const;
/**
 * Coastal-cave water betas (1/m), clear → murky. Red dies first on the direct path;
 * backscatter leans cyan-teal (Sea-thru β^D ≠ β^B; Jerlov coastal murk order of magnitude).
 */
const BETA_CLEAR_D:Rgb={r:.18,g:.11,b:.08};
const BETA_MURK_D:Rgb={r:.62,g:.38,b:.28};
const BETA_CLEAR_B:Rgb={r:.06,g:.08,b:.1};
const BETA_MURK_B:Rgb={r:.2,g:.3,b:.4};
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const lerpRgb=(a:Rgb,b:Rgb,t:number):Rgb=>({r:lerp(a.r,b.r,t),g:lerp(a.g,b.g,t),b:lerp(a.b,b.b,t)});
const meanRgb=(c:Rgb)=>(c.r+c.g+c.b)/3;
/** Effective murk 0..1 from swim height and look pitch (Three.js YXZ: +pitch looks down). */
export function torchMurk(depthY:number,pitch:number){
 const column=SURFACE_Y-FLOOR_Y;
 const clarity=Math.max(0,Math.min(1,1-hydrostaticDepth(depthY)/column));
 const aimUp=Math.max(-1,Math.min(1,-pitch/1.4));
 const floorBias=Math.max(0,-aimUp);
 const ceilingBias=Math.max(0,aimUp);
 const murkEff=Math.max(0,Math.min(1,(1-clarity)+floorBias*.22-ceilingBias*.12));
 return{clarity,aimUp,floorBias,ceilingBias,murkEff};
}
/** Direct + backscatter betas for the current murk (shared by SpotLight and volume beam). */
export function torchBetas(murkEff:number){
 return{
  direct:lerpRgb(BETA_CLEAR_D,BETA_MURK_D,murkEff),
  backscatter:lerpRgb(BETA_CLEAR_B,BETA_MURK_B,murkEff),
 };
}
/** Range (m) where direct transmission drops to ~5%. */
export function beerLambertRange(beta:Rgb,transmission=.05){
 return -Math.log(transmission)/Math.max(1e-4,meanRgb(beta));
}
/** Channel transmission through path length z (Beer–Lambert). */
export function beerLambertTransmit(beta:Rgb,z:number):Rgb{
 return{r:Math.exp(-beta.r*z),g:Math.exp(-beta.g*z),b:Math.exp(-beta.b*z)};
}
/**
 * Shared underwater torch response: one murk model drives SpotLight (direct) and
 * volumetric beam (backscatter). Outputs are absolute render params calibrated to
 * TORCH_BASELINE at mid swim / level look (y=3, pitch=0).
 */
export function torchModulation(depthY:number,pitch:number):TorchModulation{
 const {clarity,aimUp,floorBias,ceilingBias,murkEff}=torchMurk(depthY,pitch);
 const {direct:betaDirect,backscatter:betaBackscatter}=torchBetas(murkEff);
 const mid=torchMurk(3,0);
 const midBetas=torchBetas(mid.murkEff);
 const rangeM=beerLambertRange(betaDirect)*(1+aimUp*.1-floorBias*.06);
 const midRange=beerLambertRange(midBetas.direct);
 // Cap clear-water stretch so cave chambers stay dive-torch scale (~tens of metres).
 const distance=Math.min(52,TORCH_BASELINE.distance*(rangeM/midRange));
 const near=beerLambertTransmit(betaDirect,.8);
 const midNear=beerLambertTransmit(midBetas.direct,.8);
 const nearEnergy=(near.r+near.g+near.b)/3;
 const midEnergy=(midNear.r+midNear.g+midNear.b)/3;
 // Floor-aim / murk also pulls peak intensity down (shared with β^D); mid-normalized.
 const murkDim=(1-murkEff*.18)/(1-mid.murkEff*.18);
 const intensity=TORCH_BASELINE.intensity*(nearEnergy/midEnergy)*(1+aimUp*.16)*murkDim;
 const decay=TORCH_BASELINE.decay+.55*(meanRgb(betaDirect)-meanRgb(midBetas.direct));
 const tintPath=Math.min(distance*.35,8);
 const tint=beerLambertTransmit(betaDirect,tintPath);
 const tintMax=Math.max(tint.r,tint.g,tint.b,1e-4);
 // Relative spectral transmit, then murk pulls toward muddy amber (keeps deep.b < shallow.b).
 let r=tint.r/tintMax,g=tint.g/tintMax,b=tint.b/tintMax;
 r=lerp(r,.62,murkEff*.5);g=lerp(g,.55,murkEff*.35);b=lerp(b,.4,murkEff*.55);
 r=Math.max(0,Math.min(1,r));g=Math.max(0,Math.min(1,g));b=Math.max(0,Math.min(1,b));
 const beamLen=Math.min(12,distance*.55);
 const midBeamLen=Math.min(12,TORCH_BASELINE.distance*.55);
 const scatter=1-Math.exp(-meanRgb(betaBackscatter)*beamLen);
 const midScatter=1-Math.exp(-meanRgb(midBetas.backscatter)*midBeamLen);
 const clarityFactor=.72+clarity*.45;
 const midClarityFactor=.72+mid.clarity*.45;
 const beamOpacity=Math.max(.004,TORCH_BASELINE.beamOpacity*(scatter/Math.max(1e-4,midScatter))*(clarityFactor/midClarityFactor)*(1+aimUp*.22));
 const haze=beerLambertTransmit(betaBackscatter,beamLen*.4);
 const hazeMax=Math.max(haze.r,haze.g,haze.b,1e-4);
 const beamR=Math.max(0,Math.min(1,.42+.35*(1-haze.r/hazeMax)+ceilingBias*.04));
 const beamG=Math.max(0,Math.min(1,.55+.3*(1-haze.g/hazeMax)));
 const beamB=Math.max(0,Math.min(1,.48+.42*(haze.b/hazeMax)+ceilingBias*.08-floorBias*.12));
 const particle=Math.max(0,Math.min(1,.35+clarity*.55+aimUp*.12));
 return{intensity,distance,decay,beamOpacity,particle,r,g,b,beamR,beamG,beamB,betaDirect,betaBackscatter};
}

/**
 * Soft look-stick yaw when pointer lock is unavailable.
 * A center dead zone keeps fine aiming calm; offset past that ramps continuous
 * 360° turn while the pointer stays inside the canvas (no need to press the OS edge).
 */
export function edgeTurn(clientX:number,left:number,width:number){
 if(width<=0)return 0;
 const x=Math.max(0,Math.min(1,(clientX-left)/width));
 const fromCenter=(x-.5)*2;
 const dead=.2;
 const abs=Math.abs(fromCenter);
 if(abs<=dead)return 0;
 const t=(abs-dead)/(1-dead);
 return Math.sign(fromCenter)*t*t;
}
export type FeedbackKind='select'|'ok'|'blocked'|'';
export const INVENTORY_TIPS_KEY='painted-abyss.inventoryTipsSeen';
export function readInventoryTipsSeen(){
 try{return globalThis.localStorage?.getItem(INVENTORY_TIPS_KEY)==='1';}catch{return false;}
}
export function writeInventoryTipsSeen(){
 try{globalThis.localStorage?.setItem(INVENTORY_TIPS_KEY,'1');}catch{/* private mode */}
}
export type Guard={
 position:Point;
 state:GuardState;
 timer:number;lost:number;lastKnown:Point;waypoint:number;spawnIndex:number;
 heading:number;speed:number;turnRate:number;pause:number;
 arrived:boolean;scanBase:number;scanTime:number;scanArc:number;scanTurn:number;
 scanAlt:number|null;lastState:GuardState;
 meleeCool:number;shootCool:number;
 ammo:number;reload:number;firstShot:boolean;
 shots:number;lastShotHit:boolean;aim:number;
 gun:boolean;bottle:boolean;coat:boolean;air:number;
 beatStart:number;beatLen:number;beatDir:1|-1;outfit:number;
 /** Ground velocity (m/s, world). Equals speed along heading except in the firing stance, where he strafes. */
 vx:number;vz:number;
 /** Combat footwork: strafe side (+1 his left, −1 his right), time left on this leg, its speed and radial drift. */
 strafeDir:1|-1;legTime:number;legSpeed:number;legRadial:number;
};
export function makeGuard(outfit=0):Guard{
 const beat=guardBeat(outfit);
 return{
  position:{x:0,y:WALK_EYE_Y,z:0},
  state:'patrol',
  timer:0,lost:0,lastKnown:{x:0,y:WALK_EYE_Y,z:0},waypoint:0,spawnIndex:-1,
  heading:0,speed:0,turnRate:0,pause:0,
  arrived:false,scanBase:0,scanTime:0,scanArc:GUARD_SCAN_ARC,scanTurn:0,
  scanAlt:null,lastState:'patrol',
  meleeCool:0,shootCool:0,
  ammo:GUARD_MAGAZINE,reload:0,firstShot:true,
  shots:0,lastShotHit:false,aim:0,
  gun:true,bottle:false,coat:false,air:0,
  beatStart:beat.start,beatLen:beat.len,beatDir:1,outfit,
  vx:0,vz:0,strafeDir:outfit%2?1:-1,legTime:0,legSpeed:0,legRadial:0,
 };
}
/**
 * Park sentries off the map so tests that are not about them stay quiet.
 * `keep` is the squad index to leave in play, or −1 to park them all.
 */
export function isolateGuards(m:{guards:Guard[]},keep=-1){
 for(let i=0;i<m.guards.length;i++){
  if(i===keep)continue;
  const g=m.guards[i];
  g.position={x:500,y:WALK_EYE_Y,z:500};
  g.lastKnown={...g.position};
  g.state='patrol';g.pause=1e9;g.speed=0;g.turnRate=0;
  g.meleeCool=1e9;g.shootCool=1e9;g.gun=false;
 }
}
 export class Mission {
 position={...breathHatchSpawn()};health=100;air=AIR_MAIN_MAX;bailout=0;elapsed=0;stamina=100;torch=true;
 /** Bunker waterline (metres), shared by corridor and cave. The leak raises it over time; it is kept across death. */
 breathWaterY=BREATH_WATER_START;
 /** Radians the leak valve's handwheel has been wound clockwise from fully open. Kept across death, like the water. */
 valveTurned=0;
 /** Index into `breathTankMounts`. Moves on each death. */
 breathTankIndex=0;
 breathDeaths=0;
 /** BCD trim −1 (sink) .. 0 (neutral) .. +1 (float). Driven by Space/Q, not kick speed. */
 buoyancy=0;
 /** Idle drift target for buoyancy (−1..+1). Player sets with [ ] / X; Space/Q are momentary. */
 buoyancyTrim=0;
 /** Elevated gas effort until this mission elapsed time (bite / panic). */
 gasPanicUntil=0;
 inventory:(Item|null)[]=['knife','wood','flare','air','bandage'];selected=0;
 pickups:Pickup[]=[{id:1,item:'relic',position:{...RELIC}},{id:2,item:'flare',position:{x:-20,y:2,z:-56}},...corridorGearPickups()];nextId=6;
 chests:Chest[]=createDiveChests();
 /** Collected cave-chart scraps (taken from the crates). */
 mapFragments:MapFragmentId[]=[];
 /** Dive HUD chart overlay (Tab). */
 mapOpen=false;
 pending:number|null=null;outcome:'playing'|'won'|'lost'='playing';reason='';
 /** First-play inventory guidance only; repeating select/use text is intentionally silent. */
 tipsSeen=false;notice='';noticeUntil=0;feedbackKind:FeedbackKind='';feedbackPulse=0;
 predator={
  position:world(16,19),state:'patrol' as PredatorState,timer:0,lost:0,lastKnown:world(16,19),waypoint:0,bite:0,heading:0,
  hp:PREDATOR_HP_MAX,raged:false,flinch:0,stabCool:0,
 };
 /**
  * Five Soviet guards. Same AI; each walks an overlapping beat of the perimeter
  * in a different cloth colour. `guard` is the first (kept for existing tests).
  */
 guards:Guard[]=Array.from({length:GUARD_COUNT},(_,i)=>makeGuard(i));
 get guard(){return this.guards[0];}
 set guard(g:Guard){this.guards[0]=g;}
 /** Set when a corridor guard deals the killing blow — triggers corpse loot claim. */
 killedByGuard=false;
 /** Which squad member claimed the kill (index into `guards`). */
 lootGuardIndex=0;
 /** Latest combat cue for audio / camera (cleared by the renderer when consumed). */
 combatCue:''|'stab-hit'|'stab-miss'|'flinch'|'break'|'kill'|'guard-shot'|'guard-miss'|'guard-melee'='';
 decoy:{position:Point;until:number}|null=null;
 patrol=[world(16,22),world(6,22),world(6,13),world(16,13)];
 /** Player position last tick, for the guard's read on how fast you are moving. */
 lastPlayerPos:Point|null=null;
 /** Random source for spawns (swappable in tests). */
 rand:()=>number=Math.random;
 constructor(tipsSeen=false){
  this.tipsSeen=tipsSeen;
  const player=breathHatchSpawn();
  this.position={...player};
  const spawn=randomPredatorSpawn(Math.random,player);
  this.predator.position={...spawn};
  this.predator.lastKnown={...spawn};
  let best=0,bestD=Infinity;
  for(let i=0;i<this.patrol.length;i++){
   const d=distance(spawn,this.patrol[i]);
   if(d<bestD){bestD=d;best=i;}
  }
  this.predator.waypoint=best;
  this.spawnGuards();
  this.killedByGuard=false;
  if(!tipsSeen){
   this.notice='The bunker is leaking. The water is rising. WASD walk · Shift run · 1–5 select · click stabs.';
   this.noticeUntil=9;this.feedbackKind='select';
  }
 }
 /**
  * Place each guard on his overlapping perimeter beat, away from the player
  * and different from his last start. Keeps any gear he looted.
  */
 spawnGuards(){
  const route=guardPerimeterRoute();
  const n=route.length;
  const taken=new Set<number>();
  this.guards.forEach((g,outfit)=>{
   const beat=guardBeat(outfit,n);
   g.beatStart=beat.start;g.beatLen=beat.len;g.outfit=outfit;
   const onBeat=beatIndices(beat.start,beat.len,n);
   const free=onBeat.filter(i=>!taken.has(i));
   const i=pickGuardSpawn(this.rand,this.position,g.spawnIndex,30,free.length?free:onBeat);
   taken.add(i);
   const at=route[i],step=beatStep(i,beat.start,beat.len,n,1),next=route[step.wp];
   g.spawnIndex=i;g.waypoint=step.wp;g.beatDir=step.dir;
   g.position={x:at.x,y:WALK_EYE_Y,z:at.z};g.lastKnown={...g.position};
   g.heading=Math.atan2(next.x-at.x,next.z-at.z);
   g.state='patrol';g.lastState='patrol';g.timer=0;g.lost=0;
   g.speed=0;g.turnRate=0;g.pause=0;g.arrived=false;g.scanBase=g.heading;g.scanTime=0;
   g.meleeCool=0;g.shootCool=0;g.ammo=GUARD_MAGAZINE;g.reload=0;g.firstShot=true;g.aim=0;
   g.gun=true;
  });
 }
 /** Tests / older call sites still say `spawnGuard()`. */
 spawnGuard(){this.spawnGuards();}
 get hasRelic(){return this.inventory.includes('relic');}
 get mapComplete(){return MAP_FRAGMENT_ORDER.every(id=>this.mapFragments.includes(id));}
 get mapFragmentCount(){return this.mapFragments.length;}
 hasMapFragment(id:MapFragmentId){return this.mapFragments.includes(id);}
 toggleMap(){
  if(this.outcome!=='playing')return false;
  this.mapOpen=!this.mapOpen;
  return true;
 }
 collectMapFragment(id:MapFragmentId){
  if(this.mapFragments.includes(id))return false;
  this.mapFragments=[...this.mapFragments,id];
  return true;
 }
 /** Fraction of the full leak still flowing past the gate (round-port gate valve). */
 get leakFlow(){return leakFlowFraction(this.valveTurned);}
 get valveSealed(){return this.valveTurned>=VALVE_CLOSE_RAD-1e-6;}
 /** Never been moved: the first turn has to break the stem free. */
 get valveStuck(){return this.valveTurned<=0;}
 /** Standing (or hovering) square to the leak valve's handwheel, within arm's reach of the stand point. */
 atValve(){
  if(this.outcome!=='playing')return false;
  const d=Math.hypot(this.position.x-VALVE_STAND.x,this.position.z-VALVE_STAND.z);
  return d<VALVE_REACH&&Math.abs(this.position.y-WHEEL_CENTRE.y)<1.4&&this.position.z>WHEEL_CENTRE.z;
 }
 nearValve(){return this.atValve()&&!this.valveSealed;}
 /** Wind the wheel toward closed. Returns the radians actually applied (stops at the seat). */
 turnValve(rad:number){
  if(rad<=0||this.valveSealed)return 0;
  const before=this.valveTurned;
  this.valveTurned=Math.min(VALVE_CLOSE_RAD,before+rad);
  if(this.valveSealed&&before<VALVE_CLOSE_RAD)this.say('The gate seats with a clunk. The leak has stopped. The water stays where it is.','ok');
  return this.valveTurned-before;
 }
 say(message:string,kind:FeedbackKind=''){this.notice=message;this.noticeUntil=this.elapsed+4.5;this.feedbackKind=kind;this.feedbackPulse++;}
 /** Slot chrome without center text — used after the one-time first-play tip. */
 pulse(kind:FeedbackKind=''){this.feedbackKind=kind;this.feedbackPulse++;}
 select(slot:number){
  if(this.outcome!=='playing'||slot<0||slot>4)return false;
  if(this.selected===slot)return false;
  this.selected=slot;
  this.pulse(this.inventory[slot]?'select':'blocked');
  return true;
 }
 nearest(){return this.pickups.filter(p=>distance(p.position,this.position)<3.2&&visible(this.position,p.position)).sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position))[0];}
 /** Closest chest within reach with line of sight (opened or closed). */
 nearestChest(){
  return this.chests
   .filter(c=>distance(c.position,this.position)<3.4&&visible(this.position,{...c.position,y:c.position.y+.4}))
   .sort((a,b)=>distance(a.position,this.position)-distance(b.position,this.position))[0];
 }
 nearBreathTank(){
  const t=breathTankMounts()[this.breathTankIndex];
  if(!t)return false;
  return distance(this.position,t)<3.2;
 }
 /**
  * Leave every carried item in a ring at `where` (the corpse), then empty the hands.
  * World pickups that were never taken stay where they are.
  */
 dropCarriedAt(where:Point){
  const carried=this.inventory.filter((item):item is Item=>item!==null);
  const n=carried.length;
  for(let i=0;i<n;i++){
   const a=(i/n)*Math.PI*2;
   this.pickups.push({
    id:this.nextId++,
    item:carried[i],
    position:{x:where.x+Math.cos(a)*.55,y:Math.max(1,where.y-.4),z:where.z+Math.sin(a)*.55},
   });
  }
  this.inventory=[null,null,null,null,null];
  this.selected=0;
  this.pending=null;
 }
 /**
  * Death in the playable returns here: hatch, empty hands, short air, same water, tank on the next mount.
  * Whatever was carried stays on the corpse. Outcome stays `lost` inside `update` so a fresh mission is still a full reset.
  * If the Soviet guard killed you, he claims gun / bottle / coat from that corpse and will use them.
  */
 respawnAtHatch(){
  const corpse={...this.position};
  this.dropCarriedAt(corpse);
  if(this.killedByGuard){
   this.claimGuardLoot(corpse);
   this.killedByGuard=false;
  }
  const water=this.breathWaterY;
  this.breathTankIndex=nextBreathTankIndex(this.breathTankIndex);
  this.breathWaterY=water;
  this.breathDeaths+=1;
  this.position={...breathHatchSpawn()};
  this.health=100;
  this.air=BREATH_RESPAWN_LITRES;
  this.bailout=0;
  this.buoyancy=0;
  this.buoyancyTrim=0;
  this.stamina=100;
  this.gasPanicUntil=0;
  this.outcome='playing';
  this.reason='';
  this.pending=null;
  this.spawnGuards();
  this.say('You wake at the hatch with empty hands. What you carried is on the corpse. The water stayed. The air tank has moved.','blocked');
 }
 /**
  * After a guard kill, pull gun / bottle / coat lying on the corpse into his kit.
  * Untaken corridor gear farther away stays on the floor.
  */
 claimGuardLoot(corpse:Point){
  const g=this.guards[this.lootGuardIndex]??this.guard;
  const keep:Pickup[]=[];
  for(const p of this.pickups){
   const near=distance(p.position,corpse)<=GUARD_LOOT_RANGE;
   if(near&&p.item==='gun'){g.gun=true;continue;}
   if(near&&p.item==='bottle'){
    g.bottle=true;
    g.air=Math.max(g.air,GUARD_BOTTLE_AIR);
    continue;
   }
   if(near&&p.item==='coat'){g.coat=true;continue;}
   keep.push(p);
  }
  this.pickups=keep;
  if(g.gun||g.bottle||g.coat){
   this.say('The guard took what you dropped.','blocked');
  }
 }
 private takeChestScrap(chest:Chest){
  const got=this.collectMapFragment(chest.fragment);
  if(!got)return;
  const n=this.mapFragmentCount;
  const label=MAP_FRAGMENT_LABEL[chest.fragment];
  if(this.mapComplete)this.say(`Map complete — ${label} fitted. Tab opens the chart; exits are marked.`,'ok');
  else this.say(`Map fragment (${n}/3): ${label}. Tab reviews the chart.`,'ok');
 }
 interact(){
  if(this.outcome!=='playing')return;
  if(this.nearBreathTank()){
   if(this.air>=AIR_MAIN_MAX-.01){this.say('The wall tank hisses. Your cylinder is already full.','blocked');return;}
   this.air=AIR_MAIN_MAX;
   this.say('Wall tank. Main cylinder filled.','ok');
   return;
  }
  if(distance(this.position,EXIT)<4){if(this.hasRelic){this.outcome='won';this.reason='Relic secured. You made it back to the light.';}else this.say('Extraction needs the ammonite relic. Follow the turquoise markers.','blocked');return;}
  const chest=this.pending===null?this.nearestChest():undefined;
  const pickup=this.pending===null?this.nearest():this.pickups.find(p=>p.id===this.pending);
  const chestCloser=!!chest&&(!pickup||distance(chest.position,this.position)<=distance(pickup.position,this.position)+.15);
  // Open-top plastic crate: one E grabs the scrap that is already visible.
  if(chestCloser&&chest&&!chestHasLid(chest.kind)){
   if(!this.hasMapFragment(chest.fragment)){this.takeChestScrap(chest);return;}
   if(!pickup){this.say(`The ${CHEST_LABEL[chest.kind]} is empty.`,'blocked');return;}
  }
  // Prefer a closed chest when it is at least as close as the nearest pickup.
  if(chestCloser&&chest&&!chest.open){
   // First E only opens — the chart scrap stays visible inside until taken.
   chest.open=true;
   this.say(`Opened the ${CHEST_LABEL[chest.kind]}. A chart scrap rests inside.`,'ok');
   return;
  }
  // Second E: take the physical scroll from an open crate.
  if(chestCloser&&chest?.open&&!this.hasMapFragment(chest.fragment)){
   this.takeChestScrap(chest);
   return;
  }
  if(chest?.open&&!pickup){this.say(`The ${CHEST_LABEL[chest.kind]} is empty.`,'blocked');return;}
  if(!pickup||distance(pickup.position,this.position)>3.2||!visible(this.position,pickup.position)){this.pending=null;return;}
  let slot=this.inventory.indexOf(null);
  if(slot<0&&this.pending===null){this.pending=pickup.id;this.say('All five slots are full. Choose 1–5, then E to swap.','blocked');return;}
  if(slot<0)slot=this.selected;
  const old=this.inventory[slot];this.inventory[slot]=pickup.item;this.selected=slot;
  this.pickups=this.pickups.filter(p=>p.id!==pickup.id);if(old)this.pickups.push({id:this.nextId++,item:old,position:{...this.position,y:Math.max(1,this.position.y-.4)}});
  this.pending=null;this.say(pickup.item==='relic'?'Relic recovered! Follow the amber markers to extraction.':`${ITEMS[pickup.item].name} collected.`,'ok');
  if(pickup.item==='relic'&&this.predator.state!=='dead'&&this.predator.state!=='damaged'){
   this.predator.state='alert';this.predator.timer=0;this.predator.lastKnown={...this.position};
  }
 }
 drop(){
  const item=this.inventory[this.selected];
  if(!item){this.pulse('blocked');return;}
  this.pickups.push({id:this.nextId++,item,position:{...this.position,y:Math.max(1,this.position.y-.4)}});
  this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');
 }
 use(){
  const item=this.inventory[this.selected];
  if(!item){this.pulse('blocked');return;}
  if(item==='knife'){this.pulse('blocked');return;}
  if(item==='air'){
   if(this.bailout>=AIR_BAILOUT_MAX){this.pulse('blocked');return;}
   this.bailout=AIR_BAILOUT_MAX;this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='bandage'){
   if(this.health>=100){this.pulse('blocked');return;}
   this.health=Math.min(100,this.health+45);this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='flare'){
   this.decoy={position:{...this.position},until:this.elapsed+12};
   if(this.predator.state!=='dead'&&this.predator.state!=='damaged'){
    this.predator.state='search';this.predator.timer=0;this.predator.lastKnown={...this.position};
   }
   this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='bottle'){
   if(this.air>=AIR_MAIN_MAX-.01){this.pulse('blocked');return;}
   this.air=Math.min(AIR_MAIN_MAX,this.air+SPARE_BOTTLE_LITRES);
   this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  // Gun does not fire. Coat does not change damage. Both are only carried, then lost.
  if(item==='gun'||item==='coat'){this.pulse('blocked');return;}
  this.pulse('blocked');
 }
 /**
  * Mouse-click stab while the diving knife is selected.
  * `look` is a unit-ish camera forward vector in world space (XZ matter most).
  */
 stab(look:Point):StabResult{
  if(this.outcome!=='playing')return 'blocked';
  if(this.inventory[this.selected]!=='knife')return 'blocked';
  const p=this.predator;
  if(p.stabCool>0)return 'cooldown';
  p.stabCool=KNIFE_COOLDOWN;
  if(p.state==='dead'){this.combatCue='stab-miss';this.pulse('blocked');return 'miss';}
  const to={x:p.position.x-this.position.x,y:p.position.y-this.position.y,z:p.position.z-this.position.z};
  const dist=Math.hypot(to.x,to.y,to.z);
  const lookLen=Math.hypot(look.x,look.y,look.z)||1;
  const lx=look.x/lookLen,ly=look.y/lookLen,lz=look.z/lookLen;
  const toward=dist>1e-6?(to.x*lx+to.y*ly+to.z*lz)/dist:0;
  const inCone=toward>=Math.cos(KNIFE_CONE);
  const canReach=dist<=KNIFE_RANGE&&inCone&&visible(this.position,p.position);
  if(!canReach){this.combatCue='stab-miss';this.pulse('blocked');return 'miss';}
  p.hp=Math.max(0,p.hp-KNIFE_DAMAGE);
  p.flinch=PREDATOR_FLINCH;
  p.bite=Math.max(p.bite,.35);
  if(p.hp<=0){
   p.state='dead';p.timer=0;p.raged=false;p.flinch=0;p.bite=999;
   this.combatCue='kill';
   this.say('Guardian down.','ok');
   return 'hit';
  }
  if(p.hp<=PREDATOR_BREAK_HP){
   p.state='damaged';p.timer=0;p.raged=false;p.lost=0;
   this.combatCue='break';
   this.say('It breaks off — wounded and slow.','ok');
   return 'hit';
  }
  // Wound below break threshold: rage harder and commit to chase.
  p.raged=true;
  if(p.state!=='chase'){p.state='chase';p.timer=0;p.lost=0;}
  p.lastKnown={...this.position};
  this.combatCue='stab-hit';
  if(!this.tipsSeen||this.noticeUntil<=this.elapsed)this.say('It bleeds — and rages.','ok');
  return 'hit';
 }
 update(dt:number,sprinting=false){
  if(this.outcome!=='playing')return;dt=Math.min(dt,.05);this.elapsed+=dt;
  // Knife recovery is the diver's arm, not the guardian: it runs whatever state the guardian is in.
  this.predator.stabCool=Math.max(0,this.predator.stabCool-dt);
  this.breathWaterY=riseBreathWater(this.breathWaterY,dt,this.leakFlow);
  const panic=this.elapsed<this.gasPanicUntil;
  const onFoot=canWalk(this.position,this.breathWaterY);
  // Dry corridor: no BCD — trim stays neutral until the flood forces a swim.
  if(onFoot){this.buoyancy=0;this.buoyancyTrim=0;}
  let need=gasDrainRateAt(this.position,this.breathWaterY,sprinting,panic)*dt;
  if(this.air>=need){this.air-=need;need=0;}
  else{need-=this.air;this.air=0;this.bailout=Math.max(0,this.bailout-need);need=0;}
  // Legs last far longer than a finning sprint: ~12 s of hard running vs ~5.5 s of sprint kicking.
  this.stamina=Math.max(0,Math.min(100,this.stamina+(sprinting?(onFoot?-8:-18):17)*dt));
  if(this.air<=0&&this.bailout<=0){this.outcome='lost';this.reason='Your air ran out. Arm the pony earlier or climb and calm your kick.';return;}
  if(this.pending!==null&&!this.pickups.some(p=>p.id===this.pending&&distance(p.position,this.position)<3.2))this.pending=null;
  // Corridor guards run even while the cave guardian is dead / flinching.
  const playerSpeed=this.lastPlayerPos&&dt>0?Math.hypot(this.position.x-this.lastPlayerPos.x,this.position.z-this.lastPlayerPos.z)/dt:0;
  for(const g of this.guards){
   this.updateGuard(dt,sprinting,g,playerSpeed);
   if(this.outcome!=='playing')return;
  }
  this.lastPlayerPos={...this.position};
  this.updatePredator(dt,sprinting);
 }
 /**
  * One Soviet guard: patrol / chase on dry bunker floor.
  * Stops where water is too deep. No see-through-walls (uses `visible`).
  * Stolen gun shoots; stolen bottle fuels his chase; stolen coat softens his damage.
  */
 private updateGuard(dt:number,sprinting:boolean,g:Guard,playerSpeed:number){
  g.timer+=dt;
  g.meleeCool=Math.max(0,g.meleeCool-dt);
  g.shootCool=Math.max(0,g.shootCool-dt);
  // Bottle is his air — burns while chasing / searching.
  if(g.bottle&&g.air>0&&(g.state==='chase'||g.state==='search')){
   g.air=Math.max(0,g.air-dt*2.4);
   if(g.air<=0)g.bottle=false;
  }
  const d=distance(g.position,this.position);
  const canSee=visible(g.position,this.position);
  // He sees what is in front of him (a lit torch from further), hears running, and
  // notices anyone right beside him whichever way he faces.
  const toward=Math.atan2(this.position.x-g.position.x,this.position.z-g.position.z);
  const inView=Math.abs(wrapAngle(toward-g.heading))<=GUARD_FOV_HALF;
  const sense=canSee&&(d<2.5||(inView&&d<(this.torch?16:9))||(sprinting&&d<11));
  // Once he has you, he keeps you while he can see you at all.
  const tracking=canSee&&d<GUARD_GUN_RANGE+8;
  const engaged=g.state==='alert'||g.state==='chase';
  // FSM: spotting you goes straight to drawing and firing — no hesitation.
  if(g.state==='patrol'&&sense){g.state='alert';g.timer=0;g.lastKnown={...this.position};g.firstShot=true;}
  else if(g.state==='alert'){
   if(sense||tracking)g.lastKnown={...this.position};
   if(g.timer>=GUARD_DRAW_SECONDS){g.state=(sense||tracking)?'chase':'search';g.timer=0;g.lost=0;}
  }else if(g.state==='chase'){
   if(tracking){g.lastKnown={...this.position};g.lost=0;}else g.lost+=dt;
   if(g.lost>2.8){g.state='search';g.timer=0;}
  }else if(g.state==='search'){
   if(sense){g.state='alert';g.timer=GUARD_DRAW_SECONDS*.5;g.lost=0;}
   else if(g.timer>8){
    // Give up and rejoin his own beat at the nearest stop.
    g.state='patrol';g.timer=0;g.pause=0;
    g.waypoint=nearestBeatStop(g.position,g.beatStart,g.beatLen);
   }
  }
  this.steerGuard(dt,g,playerSpeed);

  // Pistol raise: up while engaged, down otherwise (~0.25 s either way).
  g.aim=Math.max(0,Math.min(1,g.aim+(engaged||g.state==='chase'?1:-1)*dt/.25));
  // Reload when the magazine runs dry.
  if(g.reload>0){g.reload=Math.max(0,g.reload-dt);if(g.reload===0)g.ammo=GUARD_MAGAZINE;}
  // Combat — only with LOS (no wall shots / stabs).
  if(canSee&&d<GUARD_MELEE_RANGE&&g.meleeCool<=0&&(g.state==='chase'||g.state==='alert'||g.state==='search')){
   let dmg=GUARD_MELEE_DAMAGE;
   if(g.coat)dmg=Math.round(dmg*GUARD_COAT_DAMAGE_MULT);
   this.health=Math.max(0,this.health-dmg);
   g.meleeCool=GUARD_MELEE_COOLDOWN;
   this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
   this.combatCue='guard-melee';
   this.say(g.coat?'Heavy coat — the blow is softer.':'The guard strikes!');
   if(this.health<=0){
    this.killedByGuard=true;
    this.lootGuardIndex=this.guards.indexOf(g);
    this.outcome='lost';
    this.reason='The guard finished you. He takes your dropped gear.';
   }
   return;
  }
  if(g.state==='chase'&&this.guardHasShot(g)&&g.shootCool<=0){
   const aimErr=Math.abs(wrapAngle(Math.atan2(this.position.x-g.position.x,this.position.z-g.position.z)-g.heading));
   if(aimErr<=GUARD_AIM_TOLERANCE&&g.aim>=.99){
    const hit=this.rand()<guardHitChance(d,playerSpeed,g.firstShot,g.speed);
    g.firstShot=false;
    g.shots+=1;g.lastShotHit=hit;g.ammo-=1;
    g.shootCool=GUARD_GUN_COOLDOWN*(.85+.3*this.rand());
    if(g.ammo<=0){g.reload=GUARD_RELOAD_SECONDS;}
    this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
    if(!hit){this.combatCue='guard-miss';this.say('Shots! Get out of his line of fire.','blocked');return;}
    let dmg=GUARD_GUN_DAMAGE;
    if(g.coat)dmg=Math.round(dmg*GUARD_COAT_DAMAGE_MULT);
    this.health=Math.max(0,this.health-dmg);
    this.combatCue='guard-shot';
    this.say(g.coat?'Hit — the coat took some of it.':'You are hit!');
    if(this.health<=0){
     this.killedByGuard=true;
     this.lootGuardIndex=this.guards.indexOf(g);
     this.outcome='lost';
     this.reason='The guard shot you. He will take what you dropped.';
    }
    return;
   }
  }
 }
 /** Armed, clear line, in range, outside arm's reach: he holds a firing stance (and reloads there). */
 guardInFiringStance(g:Guard=this.guard){
  const d=distance(g.position,this.position);
  return g.gun&&d<=GUARD_GUN_RANGE&&d>GUARD_MELEE_RANGE*.85&&visible(g.position,this.position);
 }
 /** In a firing stance with a round ready. */
 guardHasShot(g:Guard=this.guard){
  return this.guardInFiringStance(g)&&g.reload===0&&g.ammo>0;
 }
 /** Begin a look-around here: face the most open view into the room and sweep across it. */
 private startLookout(g:Guard,pause:number){
  const l=guardLookout(g.position);
  const turn=Math.abs(wrapAngle(l.yaw-g.heading));
  g.pause=pause;g.scanTime=0;g.scanBase=l.yaw;g.scanArc=Math.max(.35,l.arc);g.scanAlt=l.alt;
  // Budget the turn the long way round too, since he turns through the room, not the wall.
  g.scanTurn=Math.max(turn,Math.PI*2-turn)/GUARD_STEER_WALK.turnRateStanding*.6;
 }
 private steerGuard(dt:number,g:Guard,playerSpeed=0){
  if(g.lastState!==g.state){g.lastState=g.state;g.arrived=false;g.scanTime=0;}
  const water=this.breathWaterY;
  const dry=water<BREATH_WALK_WATER;
  const canMove=(x:number,z:number)=>dry&&fits({x,y:3,z},GUARD_BODY_RADIUS);
  const tired=!g.bottle||g.air<=0;
  const n=guardPerimeterRoute().length;
  const nextWp=()=>{const s=beatStep(g.waypoint,g.beatStart,g.beatLen,n,g.beatDir);g.waypoint=s.wp;g.beatDir=s.dir;};
  if(!dry){
   // Flooded past the walk line: he holds his ground and keeps watching.
   faceStanding(g,g.heading,GUARD_STEER_WALK,dt,()=>false);
  }else if(g.state==='patrol'){
   const route=guardPerimeterRoute();
   const wp=route[g.waypoint%route.length];
   if(g.pause>0){
    // Inspect: turn to face out into the room, then sweep it left, right and back to centre.
    g.scanTime+=dt;
    const sweep=Math.max(.1,wp.pause-g.scanTurn);
    const t=Math.max(0,Math.min(1,(g.scanTime-g.scanTurn)/sweep));
    // With a second open view he sweeps the first for 60 % of the stop, then checks the other.
    const second=g.scanAlt!==null&&t>.6;
    const look=second?g.scanAlt!:wrapAngle(g.scanBase+g.scanArc*Math.sin(TAU_GUARD*Math.min(1,t/(g.scanAlt!==null?.6:1))));
    faceStanding(g,turnThroughRoom(g.position,g.heading,look),GUARD_STEER_WALK,dt,canMove);
    g.pause=Math.max(0,g.pause-dt);
    if(g.pause===0)nextWp();
   }else{
    const nav=guardNavTarget(g.position,wp);
    const left=steerToward(g,nav,{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.patrol,stopDistance:0,pivotAngle:1e-3},dt,canMove);
    if(nav.final&&left<.02&&g.speed===0){
     if(wp.pause>0){this.startLookout(g,wp.pause);}
     else nextWp(); // detour point round a prop: keep walking
    }
   }
  }else if(g.state==='alert'){
   // Freeze, then square up to where the noise came from.
   faceStanding(g,yawToward(g.position,g.lastKnown),GUARD_STEER_WALK,dt,canMove);
  }else if(g.state==='chase'&&this.guardInFiringStance(g)){
   // Firing stance: square up on you and keep his feet moving while he shoots.
   this.combatFootwork(dt,g,canMove,playerSpeed);
   g.position.y=WALK_EYE_Y;
   return;
  }else if(g.state==='chase'){
   const params=tired
    ?{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.chaseTired}
    :{...GUARD_STEER_RUN,maxSpeed:GUARD_SPEED.chase};
   const nav=guardNavTarget(g.position,g.lastKnown);
   const left=steerToward(g,nav,{...params,stopDistance:nav.final?GUARD_CHASE_STANDOFF:0},dt,canMove);
   // At arm's length keep squared up to the target rather than circling it.
   if(nav.final&&left<.02&&g.speed===0)faceStanding(g,yawToward(g.position,g.lastKnown),params,dt,canMove);
  }else{
   // Search: walk to the last sighting, then scan left and right from there.
   if(!g.arrived){
    const nav=guardNavTarget(g.position,g.lastKnown);
    const left=steerToward(g,nav,{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.search,stopDistance:nav.final?.3:0},dt,canMove);
    if(nav.final&&left<.02&&g.speed===0){g.arrived=true;this.startLookout(g,0);}
   }else{
    g.scanTime+=dt;
    faceStanding(g,wrapAngle(g.scanBase+Math.sin(Math.max(0,g.scanTime-g.scanTurn)*.7)*g.scanArc),GUARD_STEER_WALK,dt,canMove);
   }
  }
  g.position.y=WALK_EYE_Y;
  // Outside the firing stance he only ever travels along his facing.
  g.vx=Math.sin(g.heading)*g.speed;g.vz=Math.cos(g.heading)*g.speed;
  g.legTime=0;
 }
 /**
  * Shooting on the move. Chest and muzzle stay on you (heading turns at a standing
  * pivot rate) while the legs strafe side to side in short, unpredictable legs, give
  * ground when you close in, and press forward when you are far. He never walks out
  * of his own line of fire or into a wall: a blocked leg flips direction.
  */
 private combatFootwork(dt:number,g:Guard,canMove:(x:number,z:number)=>boolean,playerSpeed:number){
  const before=g.heading;
  const face=yawToward(g.position,this.position);
  g.heading=turnToward(g.heading,face,GUARD_STEER_RUN.turnRateStanding*dt);
  g.turnRate=dt>0?wrapAngle(g.heading-before)/dt:0;
  const d=distance(g.position,this.position);
  const reloading=g.reload>0;
  // You charging him: a sidestep-and-give-ground dodge (F.E.A.R.'s DodgeShuffle).
  const charged=playerSpeed>2.4&&d<6.5;
  const f=forwardOf(face);
  // Unit vector to his left (he faces +Z at yaw 0, so left is +X).
  const lx=f.z,lz=-f.x;
  // Is there room for a real step (≈1 m) on that side, still with a line on you?
  const room=(dir:number)=>{
   const px=g.position.x+lx*dir*1.1,pz=g.position.z+lz*dir*1.1;
   return canMove(px,pz)&&visible({x:px,y:g.position.y,z:pz},this.position);
  };
  g.legTime-=dt;
  if(g.legTime<=0){
   if(this.rand()<.7)g.strafeDir=g.strafeDir===1?-1:1;
   // Pick the side that has room, so he crosses the lane instead of jittering at a wall.
   if(!room(g.strafeDir)&&room(-g.strafeDir))g.strafeDir=g.strafeDir===1?-1:1;
   g.legTime=GUARD_STRAFE.legMin+(GUARD_STRAFE.legMax-GUARD_STRAFE.legMin)*this.rand();
   g.legSpeed=GUARD_STRAFE.speedMin+(GUARD_STRAFE.speedMax-GUARD_STRAFE.speedMin)*this.rand();
   g.legRadial=(this.rand()-.45)*.4;
   // Boxed in on both sides: work the range instead (step in or out).
   if(!room(1)&&!room(-1)){g.legSpeed=.15;g.legRadial=this.rand()<.5?-.6:.5;}
  }
  const side=(reloading||charged?GUARD_STRAFE.evade:g.legSpeed)*g.strafeDir;
  let radial=g.legRadial;
  if(d<GUARD_STRAFE.near||charged)radial=-.7;
  else if(d>GUARD_STRAFE.far&&!reloading)radial=.55;
  let wx=lx*side+f.x*radial,wz=lz*side+f.z*radial;
  const want=Math.hypot(wx,wz);
  if(want>GUARD_STRAFE.evade){wx*=GUARD_STRAFE.evade/want;wz*=GUARD_STRAFE.evade/want;}
  // Ease velocity toward the wish (feet cannot reverse instantly).
  const ex=wx-g.vx,ez=wz-g.vz,e=Math.hypot(ex,ez),cap=GUARD_STRAFE.accel*dt;
  if(e>cap){g.vx+=ex/e*cap;g.vz+=ez/e*cap;}else{g.vx=wx;g.vz=wz;}
  const nx=g.position.x+g.vx*dt,nz=g.position.z+g.vz*dt;
  const next={x:nx,y:g.position.y,z:nz};
  if(canMove(nx,nz)&&visible(next,this.position)){
   g.position.x=nx;g.position.z=nz;
  }else{
   // Wall, prop or lost sight line: plant and step the other way.
   g.strafeDir=g.strafeDir===1?-1:1;
   g.legTime=GUARD_STRAFE.legMin+.5;
   g.legRadial=-g.legRadial;
   g.vx*=.2;g.vz*=.2;
  }
  g.speed=Math.hypot(g.vx,g.vz);
 }
 private updatePredator(dt:number,sprinting:boolean){
  const p=this.predator;const d=distance(p.position,this.position);const canSee=visible(p.position,this.position);
  const sense=canSee&&(d<4.5||d<(this.torch?16:sprinting?13:8));
  const safe=!predatorCell(tile(this.position).col,tile(this.position).row);
  p.timer+=dt;p.bite=Math.max(0,p.bite-dt);p.flinch=Math.max(0,p.flinch-dt);

  // Dead: leave the FSM, stop biting, sink toward the cave floor.
  if(p.state==='dead'){
   p.bite=999;
   p.position.y+=(FLOOR_Y+.55-p.position.y)*Math.min(1,dt*1.1);
   return;
  }

  if(this.decoy&&this.elapsed>=this.decoy.until)this.decoy=null;

  // Damaged: limp-patrol; still dangerous up close but slow and no rage chase.
  if(p.state==='damaged'){
   if(p.flinch>0)return;
   if(this.decoy&&d>4.5){p.lastKnown={...this.decoy.position};}
   else if(sense&&!safe)p.lastKnown={...this.position};
   const goal=p.lastKnown;
   const path=pathBetween(p.position,goal);const target=path[0]||(visible(p.position,goal)&&predatorCell(tile(goal).col,tile(goal).row)?goal:p.position);
   const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz),speed=PREDATOR_SPEED.damaged;
   if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
   p.position.y+=(Math.max(1.2,Math.min(6.2,this.position.y))-p.position.y)*Math.min(1,dt*1.2);
   if(!safe&&canSee&&distance(p.position,this.position)<BITE_RANGE&&p.bite<=0){
    this.health=Math.max(0,this.health-18);p.bite=2.2;this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
    this.say('Wounded jaws still catch you — get clear.');
    if(this.health<=0){this.outcome='lost';this.reason='The wounded guardian still finished you. Break sight or finish it with the knife.';}
   }
   return;
  }

  if(p.flinch>0){
   // Flinch interrupt: freeze locomotion / bites briefly after a wound.
   return;
  }

  if(this.decoy&&d>4.5){p.state='search';p.timer=0;p.lastKnown={...this.decoy.position};}
  else if(p.state==='patrol'&&sense&&!safe){p.state='alert';p.timer=0;p.lastKnown={...this.position};}
  else if(p.state==='alert'){
   if(sense&&!safe)p.lastKnown={...this.position};
   if(p.timer>1.6){p.state=sense&&!safe?'chase':'search';p.timer=0;p.lost=0;}
  }else if(p.state==='chase'){
   if(sense&&!safe){p.lastKnown={...this.position};p.lost=0;}else p.lost+=dt;
   if(p.lost>2.5){p.state='search';p.timer=0;}
  }else if(p.state==='search'){
   if(sense&&!safe){p.state='chase';p.timer=0;p.lost=0;}else if(p.timer>7){p.state='patrol';p.timer=0;}
  }
  const goal=p.state==='patrol'?this.patrol[p.waypoint]:p.lastKnown;
  if(p.state==='patrol'&&distance(p.position,goal)<1.1)p.waypoint=(p.waypoint+1)%this.patrol.length;
  const path=pathBetween(p.position,goal);const target=path[0]||(visible(p.position,goal)&&predatorCell(tile(goal).col,tile(goal).row)?goal:p.position);
  const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz);
  const speed=p.state==='chase'?(p.raged?PREDATOR_SPEED.rage:PREDATOR_SPEED.chase):p.state==='alert'?PREDATOR_SPEED.alert:PREDATOR_SPEED.patrol;
  if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
  p.position.y+=((p.state==='chase'?Math.max(1.2,Math.min(6.2,this.position.y)):3)-p.position.y)*Math.min(1,dt*2);
  if(p.state==='chase'&&!safe&&canSee&&distance(p.position,this.position)<BITE_RANGE&&p.bite<=0){
   this.health=Math.max(0,this.health-25);p.bite=1.7;this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
   this.say('Suit breached! Sprint to cover or deploy a flare.');
   if(this.health<=0){this.outcome='lost';this.reason='The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe.';}
  }
 }
}
