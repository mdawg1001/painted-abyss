/**
 * Survival firefight systems: reinforcement doors, patrol posts, smoke, supply caches,
 * weapon damage and the pacing director. Rules only (no Three.js); `Mission` owns the
 * state and calls in. Every tunable lives in `survivalConfig.ts`.
 *
 * This module imports the simulation's geometry helpers but only uses them inside
 * functions (never at module load), so the two files can reference each other.
 */
import { SURVIVAL, SURVIVAL_DOORS, SURVIVAL_CACHES, type GuardRole, type DoorSide } from './survivalConfig';
import { world, fits, visible, isOpen, distance, FLOOR_Y, SURFACE_Y, WALK_EYE_Y, type Point } from './simulation';

export type XZ={x:number;z:number};

// ── Weapon damage ───────────────────────────────────────────────────────────────
/** Range falloff multiplier for the TT-33: 1 up close, easing to `falloffMin` at `falloffEnd`. */
export function pistolFalloff(d:number){
 const p=SURVIVAL.pistol;
 const t=Math.max(0,Math.min(1,(d-p.falloffStart)/(p.falloffEnd-p.falloffStart)));
 return 1-(1-p.falloffMin)*t*t*(3-2*t);
}
/** One round's damage to a guard: head or body, range falloff, the target's helmet multiplier. */
export function pistolDamage(d:number,headshot:boolean,headMult=1){
 const p=SURVIVAL.pistol;
 return Math.round((headshot?p.headDamage*headMult:p.bodyDamage)*pistolFalloff(d));
}

// ── Doors (reinforcement entries) ──────────────────────────────────────────────
export type Door={name:string;index:number;
 /** Point on the wall face where the bulkhead is drawn. */
 door:XZ;
 /** Where a guard steps in (inside the room, clear of the wall). */
 spawn:XZ;
 /** Yaw facing into the room (0 = +Z). */
 yaw:number;side:DoorSide};
let doorCache:Door[]|null=null;
export function survivalDoors():Door[]{
 if(doorCache)return doorCache;
 const out:Door[]=[];
 SURVIVAL_DOORS.forEach((d,index)=>{
  const c=world(d.col,d.row);
  // Grid → world: col +1 is +x, row +1 is −z.
  const n=d.side==='W'?{x:-1,z:0}:d.side==='E'?{x:1,z:0}:d.side==='N'?{x:0,z:-1}:{x:0,z:1};
  const door={x:c.x+n.x*2,z:c.z+n.z*2};
  let spawn={x:c.x+n.x*.6,z:c.z+n.z*.6};
  if(!fits({x:spawn.x,y:WALK_EYE_Y,z:spawn.z},.5))spawn={x:c.x,z:c.z};
  out.push({name:d.name,index,door,spawn,yaw:Math.atan2(-n.x,-n.z),side:d.side});
 });
 doorCache=out;
 return out;
}

// ── Patrol posts across room interiors ─────────────────────────────────────────
let postCache:XZ[]|null=null;
/**
 * Stops spread over the usable floor of every room, kept `postClearance` off walls and
 * cover, and at least 3.5 m from each other. Guards walk between these instead of
 * tracing the wall, so they cross rooms through the middle.
 */
export function patrolPosts():XZ[]{
 if(postCache)return postCache;
 const cand:XZ[]=[];
 for(let x=-40;x<=48;x+=2)for(let z=36;z>=-124;z-=2){
  const p={x,y:WALK_EYE_Y,z};
  if(fits(p,SURVIVAL.postClearance))cand.push({x,z});
 }
 const out:XZ[]=[];
 for(const c of cand)if(out.every(o=>Math.hypot(o.x-c.x,o.z-c.z)>=3.5))out.push(c);
 postCache=out;
 return out;
}
/** Nearest walkable point to `p` for a body of radius r (spiral search), or null. */
export function nearestFree(p:XZ,r=.5,max=6):XZ|null{
 if(fits({x:p.x,y:WALK_EYE_Y,z:p.z},r))return {x:p.x,z:p.z};
 for(let rad=.5;rad<=max;rad+=.5)for(let a=0;a<16;a++){
  const q={x:p.x+Math.cos(a/16*Math.PI*2)*rad,z:p.z+Math.sin(a/16*Math.PI*2)*rad};
  if(fits({x:q.x,y:WALK_EYE_Y,z:q.z},r))return q;
 }
 return null;
}

// ── Bullet impacts on the bunker ───────────────────────────────────────────────
/** Where a ray first meets rock, cover, floor or ceiling (for sparks and dust), within `max`. */
export function rayWallPoint(o:Point,dir:Point,max=45):Point|null{
 const l=Math.hypot(dir.x,dir.y,dir.z)||1;
 const d={x:dir.x/l,y:dir.y/l,z:dir.z/l};
 for(let t=.2;t<=max;t+=.2){
  const p={x:o.x+d.x*t,y:o.y+d.y*t,z:o.z+d.z*t};
  if(!isOpen(p.x,p.z)||p.y<=FLOOR_Y||p.y>=SURFACE_Y)return{x:o.x+d.x*(t-.15),y:Math.max(FLOOR_Y+.03,Math.min(SURFACE_Y-.03,o.y+d.y*(t-.15))),z:o.z+d.z*(t-.15)};
 }
 return null;
}

// ── Smoke ──────────────────────────────────────────────────────────────────────
export type SmokeCloud={id:number;x:number;z:number;born:number;
 /** Thrown by the player (true) or a guard. */
 player:boolean};
export type SmokeGrenade={id:number;from:Point;to:Point;thrownAt:number;player:boolean};
/** 0..1 density of a cloud at mission time `now` (grows, holds, thins). */
export function smokeDensity(c:SmokeCloud,now:number){
 const s=SURVIVAL.smoke,t=now-c.born;
 if(t<0)return 0;
 if(t<s.grow)return t/s.grow;
 if(t<s.grow+s.hold)return 1;
 return Math.max(0,1-(t-s.grow-s.hold)/s.fade);
}
export function smokeRadius(c:SmokeCloud,now:number){
 const s=SURVIVAL.smoke,t=Math.max(0,now-c.born);
 return s.radius*(.45+.55*Math.min(1,t/s.grow));
}
export function smokeAlive(c:SmokeCloud,now:number){
 const s=SURVIVAL.smoke;
 return now-c.born<s.grow+s.hold+s.fade;
}
/** How deep in smoke a point is, 0..1 (the densest cloud wins). */
export function smokeAt(clouds:SmokeCloud[],p:XZ,now:number){
 let best=0;
 for(const c of clouds){
  const dens=smokeDensity(c,now);if(dens<=0)continue;
  const r=smokeRadius(c,now),d=Math.hypot(p.x-c.x,p.z-c.z);
  if(d<r)best=Math.max(best,dens*(1-.35*(d/r)));
 }
 return best;
}
/**
 * Does smoke block the sight line a→b? A line that passes through the thick part of a
 * cloud is blocked unless the two are practically touching.
 */
export function smokeBlocks(clouds:SmokeCloud[],a:XZ,b:XZ,now:number){
 const s=SURVIVAL.smoke;
 const len=Math.hypot(b.x-a.x,b.z-a.z);
 if(len<=s.pointBlank)return false;
 for(const c of clouds){
  const dens=smokeDensity(c,now);if(dens<s.blockDensity)continue;
  const r=smokeRadius(c,now)*Math.min(1,dens+.25);
  const t=Math.max(0,Math.min(1,((c.x-a.x)*(b.x-a.x)+(c.z-a.z)*(b.z-a.z))/(len*len)));
  const px=a.x+(b.x-a.x)*t,pz=a.z+(b.z-a.z)*t;
  if(Math.hypot(c.x-px,c.z-pz)<r)return true;
 }
 return false;
}
/** Where a grenade thrown from `from` along `yaw` lands: up to `throwRange`, short of a wall. */
export function smokeLanding(from:Point,dirX:number,dirZ:number,range:number=SURVIVAL.smoke.throwRange):Point{
 const l=Math.hypot(dirX,dirZ)||1;const ux=dirX/l,uz=dirZ/l;
 let reach=range;
 for(let t=.25;t<=range;t+=.25)if(!isOpen(from.x+ux*t,from.z+uz*t)){reach=Math.max(.5,t-.6);break;}
 return{x:from.x+ux*reach,y:FLOOR_Y,z:from.z+uz*reach};
}

// ── Supplies ───────────────────────────────────────────────────────────────────
export type SupplyKind='ammo'|'medkit'|'smoke';
export type SupplyCache={id:number;kind:SupplyKind;x:number;z:number;stocked:boolean};
export function makeCaches():SupplyCache[]{
 return SURVIVAL_CACHES.map((c,i)=>({id:i,kind:c.kind,x:c.x,z:c.z,stocked:true}));
}

// ── Director ───────────────────────────────────────────────────────────────────
export type DirectorPhase='intro'|'build'|'peak'|'lull'|'final';
export type Cue={kind:'door'|'smoke'|'final'|'lull';x:number;z:number;at:number;label:string};
export type PendingArrival={door:number;role:GuardRole;at:number};

/** Pure pacing state. `Mission` feeds it the world each tick and applies what it asks for. */
export class Director{
 enabled=true;
 phase:DirectorPhase='intro';
 phaseAt=0;
 /** Build/peak cycles completed (each one raises the targets). */
 cycle=0;
 nextArrival=0;
 pending:PendingArrival[]=[];
 cues:Cue[]=[];
 lastDoors:number[]=[];
 /** Damage you took, with times, for the mercy rule. */
 hurt:{at:number;amount:number}[]=[];
 guardSmokeReady=8;
 arrivals=0;
 reset(now=0){
  this.phase='intro';this.phaseAt=now;this.cycle=0;this.nextArrival=now;
  this.pending=[];this.cues=[];this.lastDoors=[];this.hurt=[];this.guardSmokeReady=now+8;this.arrivals=0;
 }
 /** How many guards the director wants hunting you now. */
 target(){
  const d=SURVIVAL.director,e=this.cycle*d.escalation;
  switch(this.phase){
   case 'intro':return 0;
   case 'build':return Math.min(SURVIVAL.maxGuards,d.buildTarget+e);
   case 'peak':return Math.min(SURVIVAL.maxGuards,d.peakTarget+e);
   case 'lull':return 0;
   case 'final':return d.finalTarget;
  }
 }
 interval():[number,number]{
  const d=SURVIVAL.director;
  return this.phase==='final'?d.finalInterval:this.phase==='peak'?d.peakInterval:d.buildInterval;
 }
 recentDamage(now:number){
  const w=SURVIVAL.director.mercyWindow;
  this.hurt=this.hurt.filter(h=>now-h.at<=w);
  return this.hurt.reduce((a,h)=>a+h.amount,0);
 }
 /**
  * Advance the phase clock. `contact` = any guard has engaged you; `relic` = you carry the
  * objective. Returns true on a phase change (for cues).
  */
 advance(now:number,contact:boolean,relic:boolean):DirectorPhase|null{
  const d=SURVIVAL.director,t=now-this.phaseAt;
  const go=(p:DirectorPhase)=>{this.phase=p;this.phaseAt=now;return p;};
  if(relic&&this.phase!=='final'){this.nextArrival=Math.min(this.nextArrival,now+1.5);return go('final');}
  if(this.phase==='intro'&&contact){this.nextArrival=now+3;return go('build');}
  if(this.phase==='build'&&t>=d.buildSeconds)return go('peak');
  if(this.phase==='peak'&&t>=d.peakSeconds)return go('lull');
  if(this.phase==='lull'&&t>=d.lullSeconds){this.cycle++;this.nextArrival=now+1;return go('build');}
  return null;
 }
 /** Weighted role pick; heavies capped. */
 pickRole(rand:()=>number,heavies:number):GuardRole{
  const d=SURVIVAL.director;
  const maxHeavy=this.phase==='final'?d.maxHeavyFinal:d.maxHeavy;
  const w={...d.roleWeights};
  if(heavies>=maxHeavy||this.cycle===0&&this.phase==='build')w.heavy=0;
  const total=Object.values(w).reduce((a,b)=>a+b,0);
  let r=rand()*total;
  for(const k of Object.keys(w) as GuardRole[]){r-=w[k];if(r<=0)return k;}
  return 'assault';
 }
 /**
  * Choose a door for the next arrival: far enough, out of your sight (or very far), never
  * close behind you, and preferably not the last doors used, so pressure comes from
  * several directions. `facing` is your view yaw (0 = +Z).
  */
 pickDoor(player:Point,facing:number,rand:()=>number,busy:(i:number)=>boolean):number{
  const d=SURVIVAL.director;
  const doors=survivalDoors();
  const scored:{i:number;w:number}[]=[];
  for(const door of doors){
   const i=door.index;
   if(busy(i))continue;
   const sp={x:door.spawn.x,y:WALK_EYE_Y,z:door.spawn.z};
   const dist=distance(sp,player);
   if(dist<d.spawnMinDistance)continue;
   const seen=visible(sp,player);
   if(seen&&dist<d.spawnVisibleOk)continue;
   const bearing=Math.atan2(sp.x-player.x,sp.z-player.z);
   const off=Math.abs(Math.atan2(Math.sin(bearing-facing),Math.cos(bearing-facing)));
   if(off>Math.PI-d.behindArc/2&&dist<d.behindSafeDistance)continue;
   // Prefer 18–45 m (close enough to matter), and fresh directions.
   let w=dist<45?1.4:dist<70?.8:.3;
   if(this.lastDoors.includes(i))w*=.25;
   scored.push({i,w});
  }
  if(!scored.length)return -1;
  const total=scored.reduce((a,s)=>a+s.w,0);
  let r=rand()*total;
  for(const s of scored){r-=s.w;if(r<=0)return s.i;}
  return scored[scored.length-1].i;
 }
}
