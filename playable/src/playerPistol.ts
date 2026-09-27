/**
 * Player TT-33: semi-automatic hitscan pistol.
 *
 * Pure rules only (no Three.js, no DOM), so the combat loop is deterministic and unit
 * testable. `Mission` owns a `PistolState` and calls into this module; `CaveWorld` turns
 * the result into feel (muzzle flash, recoil, shake, sound, hit marker).
 *
 * Loop per trigger pull:
 *   1. `canFire` gate: semi-auto cooldown, reload in progress, empty magazine.
 *   2. `hitscan`: one ray from the centre of the screen (camera position along the camera
 *      forward vector), tested against every live target's hit volumes (head sphere +
 *      body capsule), nearest hit wins, walls in between block it.
 *   3. `takeDamage(target, amount)` on whatever was hit.
 *
 * Real-world anchors: the TT-33 carries 8 rounds of 7.62×25 mm in a single-stack box
 * magazine; a trained shooter manages roughly 3–5 aimed shots a second; a fast magazine
 * change is closer to a second. Pistol bullets lose almost all their energy within
 * ~1–2 m of water, so a submerged shot barely reaches past arm's length.
 */

import { SURVIVAL } from './survivalConfig';

export type Vec3={x:number;y:number;z:number};

/**
 * Player→enemy magnetism (hitscan only). Readable near-miss assist when moving —
 * angular cone pull is primary; modest radius rim is secondary. Never aimbot /
 * half-screen snaps. LOS / walls stay honest.
 *
 * Radius scale = 1 + restBonus … 1 + sprintBonus (speed-lerped).
 * Cone = restAngleDeg … sprintAngleDeg (speed-lerped, hard-capped).
 */
export const HITBOX_ASSIST={
 /** Horizontal speed (m/s) that reaches the sprint ceiling (matches WALK_SPRINT). */
 sprintSpeed:3.4,
 /**
  * Soft radius rim at rest (+8%). Secondary sticky edge — angular pull does the
  * readable work; keep this small so standing ADS stays honest.
  */
 restBonus:.08,
 /**
  * Soft radius rim at full sprint (+12%). Not cartoon-fat; cone assist carries feel.
  */
 sprintBonus:.12,
 /** Max aim pull toward nearest live guard at rest (degrees). Hairline only. */
 restAngleDeg:.4,
 /** Max aim pull at full sprint (degrees). Readable strafe scrapes; under hard cap. */
 sprintAngleDeg:2.0,
 /** Absolute ceiling on cone assist (degrees) — never half-screen snaps. */
 angleHardCapDeg:2.5,
 /**
  * At full sprint, multiply pre-hitscan wear scatter by (1 − this). Rest = 1.
  * Keeps magnetism from being eaten by barrel spread while moving; wear/jam stay.
  */
 movingScatterDamp:.25,
} as const;

const DEG=Math.PI/180;

/**
 * Map horizontal ground speed → enemy hitbox scale for player weapon hitscan.
 * Rest → 1.08; sprint (≥ sprintSpeed) → 1.12. Deterministic, allocation-free.
 */
export function playerVelocityMultiplier(horizontalSpeed:number):number{
 if(!(horizontalSpeed>0))return 1+HITBOX_ASSIST.restBonus;
 if(horizontalSpeed>=HITBOX_ASSIST.sprintSpeed)return 1+HITBOX_ASSIST.sprintBonus;
 const t=horizontalSpeed/HITBOX_ASSIST.sprintSpeed;
 return 1+HITBOX_ASSIST.restBonus+(HITBOX_ASSIST.sprintBonus-HITBOX_ASSIST.restBonus)*t;
}
/** Alias used by design docs / call sites that prefer the scale noun. */
export const HitboxScale=playerVelocityMultiplier;

/**
 * Max angular magnetism (radians) for the current horizontal speed.
 * Lerps restAngleDeg → sprintAngleDeg, then clamps to angleHardCapDeg.
 */
export function playerAssistAngle(horizontalSpeed:number):number{
 const rest=HITBOX_ASSIST.restAngleDeg*DEG;
 const sprint=HITBOX_ASSIST.sprintAngleDeg*DEG;
 const cap=HITBOX_ASSIST.angleHardCapDeg*DEG;
 let ang:number;
 if(!(horizontalSpeed>0))ang=rest;
 else if(horizontalSpeed>=HITBOX_ASSIST.sprintSpeed)ang=sprint;
 else{
  const t=horizontalSpeed/HITBOX_ASSIST.sprintSpeed;
  ang=rest+(sprint-rest)*t;
 }
 return ang>cap?cap:ang;
}

/**
 * Pre-hitscan wear-scatter scale: 1 at rest → (1 − movingScatterDamp) at sprint.
 * Does not touch jam chance or condition systems — only how wide the barrel throws.
 */
export function movingScatterScale(horizontalSpeed:number):number{
 const damp=HITBOX_ASSIST.movingScatterDamp;
 if(!(damp>0)||!(horizontalSpeed>0))return 1;
 if(horizontalSpeed>=HITBOX_ASSIST.sprintSpeed)return 1-damp;
 return 1-damp*(horizontalSpeed/HITBOX_ASSIST.sprintSpeed);
}

/** Scale a base head/body radius for player hitscan only. Does not affect wall/LOS tests. */
export function dynamicTargetRadius(baseRadius:number,scale:number):number{
 return baseRadius*scale;
}

/** Tunables. `magazine` is the adjustable maximum ammo per magazine. */
export const PISTOL={
 /** Rounds per magazine (TT-33: 8). */
 magazine:SURVIVAL.pistol.magazine,
 /** Spare rounds carried at the start of a life, and the most spare rounds you can carry. */
 startReserve:SURVIVAL.pistol.startReserve,
 reserveMax:SURVIVAL.pistol.reserveMax,
 /** Semi-automatic: the fastest one trigger pull can follow the last (s). */
 fireInterval:.18,
 /** Magazine change (s). Snappy so empty mags do not stall a shootout. */
 reloadSeconds:.9,
 /** Effective range in air, and in water (m). */
 range:45,
 rangeUnderwater:1.6,
 /** Close-range damage per hit (range falloff and helmets: `pistolDamage` in survival.ts). */
 bodyDamage:SURVIVAL.pistol.bodyDamage,
 headDamage:SURVIVAL.pistol.headDamage,
 /** View kick per shot (rad) and the share of it that recovers by itself. */
 recoilPitch:.032,
 recoilYaw:.008,
 recoilRecover:.72,
} as const;

export type PistolState={
 /** Rounds in the magazine now. */
 mag:number;
 /** Adjustable magazine capacity. */
 maxMag:number;
 /** Spare rounds. */
 reserve:number;
 /** Seconds until the trigger can break again. */
 cool:number;
 /** Seconds left on a reload in progress (0 = not reloading). */
 reload:number;
 /** Shots fired (renderers watch this to trigger flash / recoil once per shot). */
 shots:number;
};

export function makePistol(maxMag:number=PISTOL.magazine,reserve:number=PISTOL.startReserve):PistolState{
 return{mag:maxMag,maxMag,reserve,cool:0,reload:0,shots:0};
}

/** Advance timers; completes a reload when its time is up. */
export function tickPistol(p:PistolState,dt:number){
 p.cool=Math.max(0,p.cool-dt);
 if(p.reload>0){
  p.reload=Math.max(0,p.reload-dt);
  if(p.reload===0){
   const take=Math.min(p.maxMag-p.mag,p.reserve);
   p.mag+=take;p.reserve-=take;
  }
 }
}

/** Start a magazine change if it would add rounds. Returns true when it started. */
export function startReload(p:PistolState){
 if(p.reload>0||p.mag>=p.maxMag||p.reserve<=0)return false;
 p.reload=PISTOL.reloadSeconds;
 return true;
}

export type TriggerGate='ready'|'cooldown'|'reloading'|'empty';
export function canFire(p:PistolState):TriggerGate{
 if(p.reload>0)return 'reloading';
 if(p.cool>0)return 'cooldown';
 if(p.mag<=0)return 'empty';
 return 'ready';
}

/** Spend one round and start the semi-auto cooldown. Call only when `canFire` is 'ready'. */
export function spendRound(p:PistolState){
 p.mag-=1;p.cool=PISTOL.fireInterval;p.shots+=1;
}

/** Anything with health. `takeDamage` is the one entry point for all damage. */
export type Damageable={hp:number;maxHp:number};

/** Apply damage; returns whether this hit killed the target. Dead targets take no more. */
export function takeDamage(target:Damageable,amount:number){
 if(target.hp<=0)return{killed:false,dealt:0};
 const dealt=Math.min(target.hp,Math.max(0,amount));
 target.hp-=dealt;
 return{killed:target.hp<=0,dealt};
}

/**
 * Hit volumes of a standing soldier, from his foot position. Sized for the Quaternius
 * soldier at 1.9 m: a big helmeted head and a torso-plus-legs capsule.
 */
export type HitVolumes={
 head:{center:Vec3;radius:number};
 body:{base:Vec3;height:number;radius:number};
};
export function soldierHitVolumes(foot:Vec3):HitVolumes{
 return{
  head:{center:{x:foot.x,y:foot.y+1.64,z:foot.z},radius:.25},
  body:{base:{x:foot.x,y:foot.y,z:foot.z},height:1.4,radius:.3},
 };
}

/** Ray–sphere: nearest t ≥ 0 along a unit `dir`, or null. */
export function raySphere(o:Vec3,dir:Vec3,c:Vec3,r:number){
 const ox=o.x-c.x,oy=o.y-c.y,oz=o.z-c.z;
 const b=ox*dir.x+oy*dir.y+oz*dir.z;
 const cc=ox*ox+oy*oy+oz*oz-r*r;
 const disc=b*b-cc;
 if(disc<0)return null;
 const s=Math.sqrt(disc);
 const t0=-b-s,t1=-b+s;
 if(t0>=0)return t0;
 if(t1>=0)return 0; // origin inside
 return null;
}

/** Ray against a vertical capsule (cylinder plus hemispherical ends): nearest t or null. */
export function rayVerticalCapsule(o:Vec3,dir:Vec3,base:Vec3,height:number,r:number){
 const y0=base.y+r,y1=base.y+height-r;
 let best:number|null=null;
 const keep=(t:number|null)=>{if(t!==null&&(best===null||t<best))best=t;};
 // Infinite cylinder around x/z, clipped to the straight section.
 const ox=o.x-base.x,oz=o.z-base.z;
 const a=dir.x*dir.x+dir.z*dir.z;
 if(a>1e-12){
  const b=ox*dir.x+oz*dir.z;
  const c=ox*ox+oz*oz-r*r;
  const disc=b*b-a*c;
  if(disc>=0){
   const s=Math.sqrt(disc);
   for(const t of [(-b-s)/a,(-b+s)/a]){
    if(t<0)continue;
    const y=o.y+dir.y*t;
    if(y>=y0&&y<=y1){keep(t);break;}
   }
  }
 }
 keep(raySphere(o,dir,{x:base.x,y:y0,z:base.z},r));
 keep(raySphere(o,dir,{x:base.x,y:y1,z:base.z},r));
 return best;
}

export type HitscanTarget={id:number;foot:Vec3};
export type HitscanHit={id:number;distance:number;point:Vec3;headshot:boolean};

/** Rotate unit vector `from` toward unit `to` by `angleRad` (clamped to the gap). */
export function rotateToward(from:Vec3,to:Vec3,angleRad:number):Vec3{
 if(!(angleRad>0))return{x:from.x,y:from.y,z:from.z};
 const dot=from.x*to.x+from.y*to.y+from.z*to.z;
 const cos=dot<-1?-1:dot>1?1:dot;
 const gap=Math.acos(cos);
 if(!(gap>1e-8))return{x:from.x,y:from.y,z:from.z};
 const t=angleRad>=gap?1:angleRad/gap;
 // Slerp: sin((1-t)Ω)/sinΩ * from + sin(tΩ)/sinΩ * to
 const sinGap=Math.sin(gap);
 const a=Math.sin((1-t)*gap)/sinGap;
 const b=Math.sin(t*gap)/sinGap;
 const x=from.x*a+to.x*b,y=from.y*a+to.y*b,z=from.z*a+to.z*b;
 const len=Math.hypot(x,y,z)||1;
 return{x:x/len,y:y/len,z:z/len};
}

/**
 * Angular magnetism: if the aim ray misses the nearest live guard's honest body by at
 * most `maxAngleRad`, pull the ray just onto the body surface (skin scrape — not a
 * centre-mass snap). Returns a unit direction. No candidate in cone → normalized aim.
 *
 * Dual-hitscan SCRAPE: fire the honest ray on the pre-magnetism direction, the assisted
 * ray on this result (+ modest radius scale).
 */
export function magnetizeAim(
 origin:Vec3,dir:Vec3,targets:HitscanTarget[],maxAngleRad:number,maxRange:number=PISTOL.range,
):Vec3{
 const len=Math.hypot(dir.x,dir.y,dir.z)||1;
 const d={x:dir.x/len,y:dir.y/len,z:dir.z/len};
 if(!(maxAngleRad>0)||targets.length===0)return d;

 let bestMissBy=Infinity;
 let bestTo:Vec3|null=null;

 for(const t of targets){
  const v=soldierHitVolumes(t.foot);
  // Torso aim point — magnetism is body-biased so headshots stay skill shots.
  const cx=v.body.base.x,cy=v.body.base.y+v.body.height*.55,cz=v.body.base.z;
  const tx=cx-origin.x,ty=cy-origin.y,tz=cz-origin.z;
  const dist=Math.hypot(tx,ty,tz);
  if(!(dist>0.05)||dist>maxRange)continue;
  const inv=1/dist;
  const to={x:tx*inv,y:ty*inv,z:tz*inv};
  const cos=d.x*to.x+d.y*to.y+d.z*to.z;
  const ang=Math.acos(cos<-1?-1:cos>1?1:cos);
  // Honest body half-angle; ray inside this cone already hits without assist.
  const half=Math.atan(v.body.radius/dist);
  const missBy=ang-half;
  if(!(missBy>1e-5)||missBy>maxAngleRad)continue;
  if(missBy<bestMissBy){bestMissBy=missBy;bestTo=to;}
 }
 if(!bestTo)return d;
 // Pull exactly onto the surface — enough for SCRAPE, not a free centre hit.
 return rotateToward(d,bestTo,bestMissBy);
}

/**
 * One bullet. `dir` is the camera forward (normalised here). Returns the nearest target
 * whose head or body the ray meets within `range` and with no wall in between
 * (`clear(a,b)` answers line of sight), or null.
 *
 * `hitboxScale` expands head/body radii for player→enemy magnetism only (default 1 =
 * honest volumes). Wall / LOS checks still use the true impact point on the expanded
 * volume — a hit that would clip rock is rejected the same as an unassisted shot.
 */
export function hitscan(
 origin:Vec3,dir:Vec3,targets:HitscanTarget[],range:number,
 clear:(a:Vec3,b:Vec3)=>boolean,hitboxScale=1,
):HitscanHit|null{
 const len=Math.hypot(dir.x,dir.y,dir.z)||1;
 const d={x:dir.x/len,y:dir.y/len,z:dir.z/len};
 const scale=hitboxScale>0?hitboxScale:1;
 let best:HitscanHit|null=null;
 for(const t of targets){
  const v=soldierHitVolumes(t.foot);
  const headR=dynamicTargetRadius(v.head.radius,scale);
  const bodyR=dynamicTargetRadius(v.body.radius,scale);
  const th=raySphere(origin,d,v.head.center,headR);
  const tb=rayVerticalCapsule(origin,d,v.body.base,v.body.height,bodyR);
  let dist:number|null=null,head=false;
  if(th!==null&&(tb===null||th<=tb+.05)){dist=th;head=true;}
  else if(tb!==null)dist=tb;
  if(dist===null||dist>range)continue;
  if(best&&dist>=best.distance)continue;
  const point={x:origin.x+d.x*dist,y:origin.y+d.y*dist,z:origin.z+d.z*dist};
  if(!clear(origin,point))continue;
  best={id:t.id,distance:dist,point,headshot:head};
 }
 return best;
}
