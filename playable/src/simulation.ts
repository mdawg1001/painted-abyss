// Shared, deterministic gameplay rules. Rendering and input live in CaveWorld.
export type Point={x:number;y:number;z:number};
export type Item='stone'|'wood'|'flare'|'air'|'bandage'|'relic';
export type Pickup={id:number;item:Item;position:Point};
export type PredatorState='patrol'|'alert'|'chase'|'search';
export const CELL=4;
/** Playable water column: floor → surface (ceiling of `fits`). World Y is metres. */
export const FLOOR_Y=.65;
export const SURFACE_Y=7.1;
export const START:Point={x:0,y:3,z:-12};
export const RELIC:Point={x:0,y:2,z:-112};
export const EXIT:Point={x:32,y:3,z:-12};
/** Metres below the surface plane. Shared by HUD, gas, buoyancy, and torch. */
export function hydrostaticDepth(y:number){return Math.max(0,SURFACE_Y-y);}
/** Ambient pressure in atmospheres (≈ 1 + depth_m/10). */
export function ata(y:number){return 1+hydrostaticDepth(y)/10;}

/** Kick thrust (m/s²) — terminal speed ≈ sqrt(thrust / SWIM_DRAG_K). */
export const SWIM_THRUST_CRUISE=4.05;
export const SWIM_THRUST_SPRINT=8.7;
/** Quadratic drag coefficient; cruise ≈1.5 m/s, sprint ≈2.2 m/s with thrusts above. */
export const SWIM_DRAG_K=1.8;
/** Vertical accel at full BCD (|buoyancy| = 1). */
export const SWIM_BUOYANCY_ACCEL=2.8;
/** How fast Space/Q fills buoyancy toward ±1 (1/s exponential approach). */
export const BCD_FILL_RATE=1.35;
/** Hands-off return of buoyancy toward neutral (1/s). */
export const BCD_TRIM_RATE=.55;
/** Predator band sits between player cruise and sprint. */
export const PREDATOR_SPEED={chase:1.75,patrol:.9,alert:.35} as const;

export type Vec3={x:number;y:number;z:number};
/** Space/Q BCD input (−1..+1). Idle trims toward neutral. */
export function updateBuoyancy(buoyancy:number,bcdInput:number,dt:number){
 const b=Math.max(-1,Math.min(1,bcdInput));
 if(Math.abs(b)>.01){
  const target=Math.sign(b);
  return buoyancy+(target-buoyancy)*(1-Math.exp(-BCD_FILL_RATE*dt));
 }
 return buoyancy*Math.exp(-BCD_TRIM_RATE*dt);
}
/**
 * Force-based swim step: look/strafe kick thrust + buoyancy − k|v|v.
 * `kick` is WASD (and look-forward Y from pitch); Space/Q must not be baked into kick.
 */
export function stepSwimVelocity(velocity:Vec3,kick:Vec3,buoyancy:number,sprint:boolean,dt:number){
 const thrust=sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE;
 const kLen=Math.hypot(kick.x,kick.y,kick.z);
 let ax=0,ay=buoyancy*SWIM_BUOYANCY_ACCEL,az=0;
 if(kLen>1e-6){const s=thrust/kLen;ax=kick.x*s;ay+=kick.y*s;az=kick.z*s;}
 const speed=Math.hypot(velocity.x,velocity.y,velocity.z);
 const drag=-SWIM_DRAG_K*speed;
 ax+=velocity.x*drag;ay+=velocity.y*drag;az+=velocity.z*drag;
 velocity.x+=ax*dt;velocity.y+=ay*dt;velocity.z+=az*dt;
}
/** Steady horizontal speed under constant thrust with zero buoyancy (analytic). */
export function terminalSwimSpeed(sprint=false){
 return Math.sqrt((sprint?SWIM_THRUST_SPRINT:SWIM_THRUST_CRUISE)/SWIM_DRAG_K);
}

export const ITEMS:Record<Item,{name:string;short:string;description:string;hint:string}>={
 stone:{name:'Limestone',short:'Stone',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 wood:{name:'Driftwood',short:'Wood',description:'Salvage only — cannot use. Safe to swap for the relic.',hint:'Salvage · G drop · swap for relic'},
 flare:{name:'Signal flare',short:'Flare',description:'R · Deploy a 12-second distraction at your position.',hint:'R use · consumed'},
 air:{name:'Air reserve',short:'Air',description:'R · Restore up to 60 seconds of air (consumed).',hint:'R use · consumed'},
 bandage:{name:'Sealant kit',short:'Sealant',description:'R · Repair 45 suit integrity (consumed).',hint:'R use · consumed'},
 relic:{name:'Ammonite relic',short:'Relic',description:'Cannot use here — carry to the extraction pool.',hint:'Carry to extract · do not drop'},
};
export const cells=new Set<string>();
const rect=(a:number,b:number,c:number,d:number)=>{for(let col=a;col<=b;col++)for(let row=c;row<=d;row++)cells.add(`${col},${row}`);};
rect(8,14,1,5);rect(10,12,5,11);rect(4,18,11,24);rect(10,12,24,26);rect(8,14,26,30);
for(let c=9;c<=12;c++)for(let r=15;r<=20;r++)cells.delete(`${c},${r}`);
// A single-cell fissure separates the predator's cavern from the extraction pool.
rect(19,19,4,20);rect(18,19,20,21);rect(17,21,1,4);
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
 position={...START};health=100;air=240;elapsed=0;stamina=100;torch=true;
 /** BCD trim −1 (sink) .. 0 (neutral) .. +1 (float). Driven by Space/Q, not kick speed. */
 buoyancy=0;
 inventory:(Item|null)[]=['stone','wood','flare','air','bandage'];selected=0;
 pickups:Pickup[]=[{id:1,item:'relic',position:{...RELIC}},{id:2,item:'flare',position:{x:-20,y:2,z:-56}}];nextId=3;
 pending:number|null=null;outcome:'playing'|'won'|'lost'='playing';reason='';
 /** First-play inventory guidance only; repeating select/use text is intentionally silent. */
 tipsSeen=false;notice='';noticeUntil=0;feedbackKind:FeedbackKind='';feedbackPulse=0;
 predator={position:world(16,19),state:'patrol' as PredatorState,timer:0,lost:0,lastKnown:world(16,19),waypoint:0,bite:0,heading:0};
 decoy:{position:Point;until:number}|null=null;
 patrol=[world(16,22),world(6,22),world(6,13),world(16,13)];
 constructor(tipsSeen=false){
  this.tipsSeen=tipsSeen;
  if(!tipsSeen){
   this.notice='1–5 select a slot · R uses it · usable items are consumed.';
   this.noticeUntil=8;this.feedbackKind='select';
  }
 }
 get hasRelic(){return this.inventory.includes('relic');}
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
 interact(){
  if(this.outcome!=='playing')return;
  if(distance(this.position,EXIT)<4){if(this.hasRelic){this.outcome='won';this.reason='Relic secured. You made it back to the light.';}else this.say('Extraction needs the ammonite relic. Follow the turquoise markers.','blocked');return;}
  const pickup=this.pending===null?this.nearest():this.pickups.find(p=>p.id===this.pending);
  if(!pickup||distance(pickup.position,this.position)>3.2||!visible(this.position,pickup.position)){this.pending=null;return;}
  let slot=this.inventory.indexOf(null);
  if(slot<0&&this.pending===null){this.pending=pickup.id;this.say('All five slots are full. Choose 1–5, then E to swap.','blocked');return;}
  if(slot<0)slot=this.selected;
  const old=this.inventory[slot];this.inventory[slot]=pickup.item;this.selected=slot;
  this.pickups=this.pickups.filter(p=>p.id!==pickup.id);if(old)this.pickups.push({id:this.nextId++,item:old,position:{...this.position,y:Math.max(1,this.position.y-.4)}});
  this.pending=null;this.say(pickup.item==='relic'?'Relic recovered! Follow the amber markers to extraction.':`${ITEMS[pickup.item].name} collected.`,'ok');
  if(pickup.item==='relic'){this.predator.state='alert';this.predator.timer=0;this.predator.lastKnown={...this.position};}
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
  if(item==='air'){
   if(this.air>=240){this.pulse('blocked');return;}
   this.air=Math.min(240,this.air+60);this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='bandage'){
   if(this.health>=100){this.pulse('blocked');return;}
   this.health=Math.min(100,this.health+45);this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  if(item==='flare'){
   this.decoy={position:{...this.position},until:this.elapsed+12};this.predator.state='search';this.predator.timer=0;this.predator.lastKnown={...this.position};
   this.inventory[this.selected]=null;this.pending=null;this.pulse('ok');return;
  }
  this.pulse('blocked');
 }
 update(dt:number,sprinting=false){
  if(this.outcome!=='playing')return;dt=Math.min(dt,.05);this.elapsed+=dt;this.air=Math.max(0,this.air-dt);this.stamina=Math.max(0,Math.min(100,this.stamina+(sprinting?-18:17)*dt));
  if(this.air<=0){this.outcome='lost';this.reason='Your air ran out. Use the reserve earlier or take a shorter route.';return;}
  if(this.pending!==null&&!this.pickups.some(p=>p.id===this.pending&&distance(p.position,this.position)<3.2))this.pending=null;
  const p=this.predator;const d=distance(p.position,this.position);const canSee=visible(p.position,this.position);
  const sense=canSee&&(d<4.5||d<(this.torch?16:sprinting?13:8));
  const safe=!predatorCell(tile(this.position).col,tile(this.position).row);
  p.timer+=dt;p.bite=Math.max(0,p.bite-dt);
  if(this.decoy&&this.elapsed>=this.decoy.until)this.decoy=null;
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
  const dx=target.x-p.position.x,dz=target.z-p.position.z,len=Math.hypot(dx,dz),speed=p.state==='chase'?PREDATOR_SPEED.chase:p.state==='alert'?PREDATOR_SPEED.alert:PREDATOR_SPEED.patrol;
  if(len>.05){p.heading=Math.atan2(-dz,dx);moveBody(p.position,dx/len*Math.min(len,speed*dt),0,dz/len*Math.min(len,speed*dt),1.3);}
  p.position.y+=((p.state==='chase'?Math.max(1.2,Math.min(6.2,this.position.y)):3)-p.position.y)*Math.min(1,dt*2);
  if(p.state==='chase'&&!safe&&canSee&&distance(p.position,this.position)<3.2&&p.bite<=0){this.health=Math.max(0,this.health-25);p.bite=1.7;this.say('Suit breached! Sprint to cover or deploy a flare.');if(this.health<=0){this.outcome='lost';this.reason='The guardian caught you. Break sight around the central pillar; the narrow exit passage is safe.';}}
 }
}
