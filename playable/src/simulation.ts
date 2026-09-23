// Shared, deterministic gameplay rules. Rendering and input live in CaveWorld.
import { steerToward, faceStanding, yawToward, wrapAngle, GUARD_STEER_WALK, GUARD_STEER_RUN } from './guardSteering';
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
/** Seconds before another stab can apply damage. */
export const KNIFE_COOLDOWN=.55;
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
/** Metres the bunker leak raises the waterline each second (corridor and cave share it). Head-height in about two minutes. */
export const BREATH_RISE_MPS=0.016;
/** Standing eye height on the dry corridor floor. */
export const WALK_EYE_Y=FLOOR_Y+1.6;
export const WALK_SPEED=2.35;
export const WALK_SPRINT=3.55;
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
export const GUARD_GUN_RANGE=12;
export const GUARD_GUN_DAMAGE=30;
export const GUARD_GUN_COOLDOWN=1.35;
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
 gun:{name:'Gun',short:'Gun',description:'Carry it in the hand. It does not fire for you. If the corridor guard kills you, he will take it and shoot.',hint:'Carry · death drops it'},
 bottle:{name:'Spare air bottle',short:'Bottle',description:`R · Add ${SPARE_BOTTLE_LITRES} L to the main cylinder (consumed). The corridor guard will drink it as his air if he takes it from your corpse.`,hint:'R use · consumed'},
 coat:{name:'Coat',short:'Coat',description:'Carry it. It does not soften guardian bites. If the corridor guard takes it from your corpse, his strikes hurt less.',hint:'Carry · death drops it'},
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
export function riseBreathWater(waterY:number,dt:number){return Math.min(SURFACE_Y,waterY+BREATH_RISE_MPS*Math.max(0,dt));}
/** Open corridor cells only — the Soviet guard never enters the cave grid. */
export function breathCell(col:number,row:number){return breathZone(col,row)!=='';}
/** Corridor centerline X — guard patrol stays on this axis (no lateral weave). */
export function guardPatrolAxisX():number{
 return (world(BREATH_COLS[0],0).x+world(BREATH_COLS[1],0).x)/2;
}
/** Standing spawn for the corridor guard (middle stretch, clear of hatch gear). */
export function guardSpawnPoint():Point{
 const p=world(BREATH_COLS[0],-4);
 return {x:guardPatrolAxisX(),y:WALK_EYE_Y,z:p.z};
}
/**
 * Straight out-and-back along corridor Z on the centerline.
 * Two posts only — no column zigzag, diagonal jitter, or mid-stride turns.
 */
export function guardPatrolPoints():Point[]{
 const x=guardPatrolAxisX();
 const south=world(BREATH_COLS[0],-6);
 const north=world(BREATH_COLS[0],-2);
 return [
  {x,y:WALK_EYE_Y,z:south.z},
  {x,y:WALK_EYE_Y,z:north.z},
 ];
}
/**
 * BFS along breath-corridor cells only.
 * Returns cell centers toward `b`, or [] if unreachable / not in the corridor.
 */
export function pathBreath(a:Point,b:Point){
 const from=tile(a),to=tile(b),start=`${from.col},${from.row}`,end=`${to.col},${to.row}`;
 if(!breathCell(to.col,to.row))return [];
 const queue=[start],parents=new Map<string,string|null>([[start,null]]);
 for(let i=0;i<queue.length;i++){
  const key=queue[i];if(key===end)break;
  const [c,r]=key.split(',').map(Number);
  for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){
   const nc=c+dc,nr=r+dr,k=`${nc},${nr}`;
   if(breathCell(nc,nr)&&!parents.has(k)){parents.set(k,key);queue.push(k);}
  }
 }
 if(!parents.has(end))return [];
 const path:Point[]=[];let key:string|null=end;
 while(key&&key!==start){
  const [c,r]=key.split(',').map(Number);
  const w=world(c,r);
  path.unshift({x:w.x,y:WALK_EYE_Y,z:w.z});
  key=parents.get(key)!;
 }
 return path;
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
 export class Mission {
 position={...breathHatchSpawn()};health=100;air=AIR_MAIN_MAX;bailout=0;elapsed=0;stamina=100;torch=true;
 /** Bunker waterline (metres), shared by corridor and cave. The leak raises it over time; it is kept across death. */
 breathWaterY=BREATH_WATER_START;
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
  * Phase 3 Soviet corridor guard. Walks dry breath-corridor floor only.
  * On kill he claims dropped gun / bottle / coat and uses them.
  */
 guard={
  position:guardSpawnPoint(),
  state:'patrol' as GuardState,
  timer:0,lost:0,lastKnown:guardSpawnPoint(),waypoint:0,
  /** Facing yaw, radians: 0 faces world +Z, π/2 faces +X. The mesh uses it as rotation.y. */
  heading:0,
  /** Ground speed along the heading (m/s). Drives stride rate; never negative. */
  speed:0,
  /** Signed yaw rate last tick (rad/s). Drives on-the-spot turning footwork. */
  turnRate:0,
  /** Seconds left standing at a patrol post. */
  pause:0,
  /** Search reached the last sighting and is scanning. */
  arrived:false,scanBase:0,scanTime:0,
  lastState:'patrol' as GuardState,
  meleeCool:0,shootCool:0,
  gun:false,bottle:false,coat:false,
  /** Remaining “air” from a stolen spare bottle. */
  air:0,
 };
 /** Set when the corridor guard deals the killing blow — triggers corpse loot claim. */
 killedByGuard=false;
 /** Latest combat cue for audio / camera (cleared by the renderer when consumed). */
 combatCue:''|'stab-hit'|'stab-miss'|'flinch'|'break'|'kill'|'guard-shot'|'guard-melee'='';
 decoy:{position:Point;until:number}|null=null;
 patrol=[world(16,22),world(6,22),world(6,13),world(16,13)];
 guardPatrol=guardPatrolPoints();
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
  const gSpawn=guardSpawnPoint();
  this.guard.position={...gSpawn};
  this.guard.lastKnown={...gSpawn};
  this.guard.waypoint=0;
  this.killedByGuard=false;
  if(!tipsSeen){
   this.notice='The bunker is leaking. The water is rising. WASD walk · Shift run · 1–5 select · click stabs.';
   this.noticeUntil=9;this.feedbackKind='select';
  }
 }
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
  this.say('You wake at the hatch with empty hands. What you carried is on the corpse. The water stayed. The air tank has moved.','blocked');
 }
 /**
  * After a guard kill, pull gun / bottle / coat lying on the corpse into his kit.
  * Untaken corridor gear farther away stays on the floor.
  */
 claimGuardLoot(corpse:Point){
  const keep:Pickup[]=[];
  for(const p of this.pickups){
   const near=distance(p.position,corpse)<=GUARD_LOOT_RANGE;
   if(near&&p.item==='gun'){this.guard.gun=true;continue;}
   if(near&&p.item==='bottle'){
    this.guard.bottle=true;
    this.guard.air=Math.max(this.guard.air,GUARD_BOTTLE_AIR);
    continue;
   }
   if(near&&p.item==='coat'){this.guard.coat=true;continue;}
   keep.push(p);
  }
  this.pickups=keep;
  if(this.guard.gun||this.guard.bottle||this.guard.coat){
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
  this.breathWaterY=riseBreathWater(this.breathWaterY,dt);
  const panic=this.elapsed<this.gasPanicUntil;
  const onFoot=canWalkBreath(this.position,this.breathWaterY);
  // Dry corridor: no BCD — trim stays neutral until the flood forces a swim.
  if(onFoot){this.buoyancy=0;this.buoyancyTrim=0;}
  let need=gasDrainRateAt(this.position,this.breathWaterY,sprinting,panic)*dt;
  if(this.air>=need){this.air-=need;need=0;}
  else{need-=this.air;this.air=0;this.bailout=Math.max(0,this.bailout-need);need=0;}
  this.stamina=Math.max(0,Math.min(100,this.stamina+(sprinting?-18:17)*dt));
  if(this.air<=0&&this.bailout<=0){this.outcome='lost';this.reason='Your air ran out. Arm the pony earlier or climb and calm your kick.';return;}
  if(this.pending!==null&&!this.pickups.some(p=>p.id===this.pending&&distance(p.position,this.position)<3.2))this.pending=null;
  // Corridor guard runs even while the cave guardian is dead / flinching.
  this.updateGuard(dt,sprinting);
  if(this.outcome!=='playing')return;
  this.updatePredator(dt,sprinting);
 }
 /**
  * Phase 3 Soviet guard: patrol / chase on dry breath-corridor floor only.
  * Stops where water is too deep. No see-through-walls (uses `visible`).
  * Stolen gun shoots; stolen bottle fuels his chase; stolen coat softens his damage.
  */
 private updateGuard(dt:number,sprinting:boolean){
  const g=this.guard;
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
  const playerInCorridor=inBreathCorridor(this.position);
  const sense=canSee&&playerInCorridor&&(d<5||d<(this.torch?14:sprinting?11:7));
  // FSM
  if(g.state==='patrol'&&sense){g.state='alert';g.timer=0;g.lastKnown={...this.position};}
  else if(g.state==='alert'){
   if(sense)g.lastKnown={...this.position};
   if(g.timer>1.1){g.state=sense?'chase':'search';g.timer=0;g.lost=0;}
  }else if(g.state==='chase'){
   if(sense){g.lastKnown={...this.position};g.lost=0;}else g.lost+=dt;
   if(g.lost>2.8){g.state='search';g.timer=0;}
  }else if(g.state==='search'){
   if(sense){g.state='chase';g.timer=0;g.lost=0;}
   else if(g.timer>8){g.state='patrol';g.timer=0;}
  }
  this.steerGuard(dt);

  // Combat — only with LOS (no wall shots / stabs).
  if(canSee&&g.gun&&d<=GUARD_GUN_RANGE&&d>GUARD_MELEE_RANGE*.85&&g.shootCool<=0&&(g.state==='chase'||g.state==='alert')){
   let dmg=GUARD_GUN_DAMAGE;
   if(g.coat)dmg=Math.round(dmg*GUARD_COAT_DAMAGE_MULT);
   this.health=Math.max(0,this.health-dmg);
   g.shootCool=GUARD_GUN_COOLDOWN;
   this.gasPanicUntil=this.elapsed+AIR_PANIC_SECONDS;
   this.combatCue='guard-shot';
   this.say(g.coat?'Coat-muffled shot!':'The guard fires!');
   if(this.health<=0){
    this.killedByGuard=true;
    this.outcome='lost';
    this.reason='The corridor guard shot you. He will take what you dropped.';
   }
   return;
  }
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
    this.outcome='lost';
    this.reason='The corridor guard finished you. He takes your dropped gear.';
   }
  }
 }
 /**
  * Corridor guard locomotion. Every state moves him only along his facing
  * (see `guardSteering.ts`): patrol is a straight out-and-back on the centre
  * line with a stop, a pause and an on-the-spot about-turn at each post;
  * alert halts and turns to the noise; chase closes in a straight line and
  * stops at arm's length; search walks to the last sighting and scans.
  */
 private steerGuard(dt:number){
  const g=this.guard;
  if(g.lastState!==g.state){g.lastState=g.state;g.arrived=false;g.scanTime=0;}
  const water=this.breathWaterY;
  const r=GUARD_BODY_RADIUS;
  const fp=breathFootprint();
  const canMove=(x:number,z:number)=>x>=fp.minX+r&&x<=fp.maxX-r&&z>=fp.minZ+r&&z<=fp.maxZ-r&&canWalkBreath({x,y:WALK_EYE_Y,z},water);
  const clampGoal=(p:{x:number;z:number})=>({
   x:Math.min(fp.maxX-r-.05,Math.max(fp.minX+r+.05,p.x)),
   z:Math.min(fp.maxZ-r-.05,Math.max(fp.minZ+r+.05,p.z)),
  });
  const dry=canWalkBreath(g.position,water);
  const tired=!g.bottle||g.air<=0;
  if(!dry){
   // Flooded past the knees of the rule: hold footing, keep eyes on the goal.
   faceStanding(g,g.heading,GUARD_STEER_WALK,dt,()=>false);
  }else if(g.state==='patrol'){
   const axis=guardPatrolAxisX();
   const post=this.guardPatrol[g.waypoint];
   if(g.pause>0){
    // Stand at the post. When the pause ends, pick the next post; the turn follows.
    faceStanding(g,g.heading,GUARD_STEER_WALK,dt,canMove);
    g.pause=Math.max(0,g.pause-dt);
    if(g.pause===0)g.waypoint=(g.waypoint+1)%this.guardPatrol.length;
   }else{
    const left=steerToward(g,{x:axis,z:post.z},{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.patrol,stopDistance:0,pivotAngle:1e-3},dt,canMove);
    if(left<.02&&g.speed===0)g.pause=GUARD_PATROL_PAUSE;
   }
   // Patrol legs run exactly on the centre line.
   g.position.x=axis;
  }else if(g.state==='alert'){
   // Freeze, then square up to where the noise came from.
   faceStanding(g,yawToward(g.position,g.lastKnown),GUARD_STEER_WALK,dt,canMove);
  }else if(g.state==='chase'){
   const params=tired
    ?{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.chaseTired,stopDistance:GUARD_CHASE_STANDOFF}
    :{...GUARD_STEER_RUN,maxSpeed:GUARD_SPEED.chase,stopDistance:GUARD_CHASE_STANDOFF};
   const left=steerToward(g,clampGoal(g.lastKnown),params,dt,canMove);
   // At arm's length keep squared up to the target rather than circling it.
   if(left<.02&&g.speed===0)faceStanding(g,yawToward(g.position,g.lastKnown),params,dt,canMove);
  }else{
   // Search: walk to the last sighting, then scan left and right from there.
   if(!g.arrived){
    const left=steerToward(g,clampGoal(g.lastKnown),{...GUARD_STEER_WALK,maxSpeed:GUARD_SPEED.search,stopDistance:.3},dt,canMove);
    if(left<.02&&g.speed===0){g.arrived=true;g.scanBase=g.heading;g.scanTime=0;}
   }else{
    g.scanTime+=dt;
    faceStanding(g,wrapAngle(g.scanBase+Math.sin(g.scanTime*.7)*GUARD_SCAN_ARC),GUARD_STEER_WALK,dt,canMove);
   }
  }
  g.position.y=WALK_EYE_Y;
 }
 private updatePredator(dt:number,sprinting:boolean){
  const p=this.predator;const d=distance(p.position,this.position);const canSee=visible(p.position,this.position);
  const sense=canSee&&(d<4.5||d<(this.torch?16:sprinting?13:8));
  const safe=!predatorCell(tile(this.position).col,tile(this.position).row);
  p.timer+=dt;p.bite=Math.max(0,p.bite-dt);p.flinch=Math.max(0,p.flinch-dt);p.stabCool=Math.max(0,p.stabCool-dt);

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
