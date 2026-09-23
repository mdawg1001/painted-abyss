/**
 * Corridor guard steering: a small kinematic character controller.
 *
 * Rules that keep the soldier readable as a human walker:
 * - He only ever travels along the way he is facing. No backwards moonwalk,
 *   no crab-walk sideways, no diagonal drift that the body does not point at.
 * - Heading changes at a capped, human turn rate. Large turns are done
 *   standing (a pivot), never as a wide running circle.
 * - Speed eases in and out with acceleration limits and an arrival curve,
 *   so he stops on his mark instead of overshooting and orbiting it.
 *
 * Yaw convention (matches the Quaternius rig, which faces local +Z):
 * yaw 0 faces world +Z, yaw π/2 faces world +X. `root.rotation.y = yaw`.
 */

export type Vec2={x:number;z:number};

export type SteeringBody={
 position:{x:number;z:number};
 /** Facing yaw in radians (0 = +Z). */
 heading:number;
 /** Current ground speed along the heading, m/s, never negative. */
 speed:number;
 /** Signed yaw rate from the last step, rad/s (drives pivot foot shuffling). */
 turnRate:number;
};

export type SteeringParams={
 /** Top speed wanted for this state, m/s. */
 maxSpeed:number;
 /** Speed gain limit while speeding up, m/s². */
 accel:number;
 /** Speed loss limit while slowing, m/s². */
 decel:number;
 /** Max yaw rate while walking/running, rad/s. */
 turnRateMoving:number;
 /** Max yaw rate while pivoting on the spot, rad/s. */
 turnRateStanding:number;
 /** Stop this far short of the goal (standoff), metres. */
 stopDistance:number;
 /** Beyond this heading error he stops and pivots before walking, radians. */
 pivotAngle:number;
};

/** Human reference numbers. A relaxed 180° about turn takes roughly one second. */
export const GUARD_STEER_WALK:Omit<SteeringParams,'maxSpeed'|'stopDistance'>={
 accel:1.6,decel:2.6,
 turnRateMoving:1.9,
 turnRateStanding:3.3,
 pivotAngle:.75,
};
export const GUARD_STEER_RUN:Omit<SteeringParams,'maxSpeed'|'stopDistance'>={
 accel:3.4,decel:4.2,
 turnRateMoving:2.8,
 turnRateStanding:4.6,
 pivotAngle:.95,
};

export const TAU=Math.PI*2;
/** Wrap to (−π, π]. */
export function wrapAngle(a:number){
 a=(a+Math.PI)%TAU;
 if(a<0)a+=TAU;
 return a-Math.PI;
}
/** Yaw that faces from `a` toward `b` (0 = +Z). */
export function yawToward(a:Vec2,b:Vec2){return Math.atan2(b.x-a.x,b.z-a.z);}
/** Unit forward for a yaw. */
export function forwardOf(yaw:number):Vec2{return {x:Math.sin(yaw),z:Math.cos(yaw)};}

/** Rotate `heading` toward `target` by at most `maxStep`, landing exactly on it when close. */
export function turnToward(heading:number,target:number,maxStep:number){
 const err=wrapAngle(target-heading);
 if(Math.abs(err)<=maxStep)return target;
 return wrapAngle(heading+Math.sign(err)*maxStep);
}

/**
 * Pure facing-only update (standing still): decelerate to zero, pivot to `yaw`.
 * Returns true once facing is settled.
 */
export function faceStanding(body:SteeringBody,yaw:number,p:Pick<SteeringParams,'decel'|'turnRateStanding'|'turnRateMoving'>,dt:number,canMove:(x:number,z:number)=>boolean){
 const before=body.heading;
 body.speed=Math.max(0,body.speed-p.decel*dt);
 // Bleed off residual momentum along the current facing.
 if(body.speed>0){
  const f=forwardOf(body.heading);
  const nx=body.position.x+f.x*body.speed*dt,nz=body.position.z+f.z*body.speed*dt;
  if(canMove(nx,nz)){body.position.x=nx;body.position.z=nz;}else body.speed=0;
 }
 const rate=body.speed>.25?p.turnRateMoving:p.turnRateStanding;
 body.heading=turnToward(body.heading,yaw,rate*dt);
 body.turnRate=dt>0?wrapAngle(body.heading-before)/dt:0;
 return Math.abs(wrapAngle(yaw-body.heading))<1e-3&&body.speed===0;
}

/**
 * Steer toward `goal`, moving only along the facing direction.
 * Returns the remaining distance to the goal after the step.
 */
export function steerToward(body:SteeringBody,goal:Vec2,p:SteeringParams,dt:number,canMove:(x:number,z:number)=>boolean){
 const before=body.heading;
 const dx=goal.x-body.position.x,dz=goal.z-body.position.z;
 const dist=Math.hypot(dx,dz);
 const remaining=Math.max(0,dist-p.stopDistance);
 const desiredYaw=dist>1e-4?Math.atan2(dx,dz):body.heading;
 const err=Math.abs(wrapAngle(desiredYaw-body.heading));

 // Turn: a moving body arcs gently; a slow body pivots quickly on the spot.
 const moving=body.speed>.25;
 const rate=moving?p.turnRateMoving:p.turnRateStanding;
 if(dist>1e-3)body.heading=turnToward(body.heading,desiredYaw,rate*dt);
 const errAfter=Math.abs(wrapAngle(desiredYaw-body.heading));

 // Target speed: zero while pivoting through a big angle, cosine falloff for small ones,
 // and an arrival curve v = √(2·a·d) so he brakes onto his mark without overshoot.
 let want=0;
 if(remaining>1e-3&&errAfter<p.pivotAngle){
  const align=Math.max(0,Math.cos(errAfter));
  want=Math.min(p.maxSpeed*align*align,Math.sqrt(2*p.decel*remaining));
 }
 // A standing guard who still has a big turn ahead does not creep forward.
 if(err>p.pivotAngle&&!moving)want=0;
 if(want>body.speed)body.speed=Math.min(want,body.speed+p.accel*dt);
 else body.speed=Math.max(want,body.speed-p.decel*dt);

 // Never step past the stop point.
 const step=Math.min(body.speed*dt,remaining);
 if(step>0){
  const f=forwardOf(body.heading);
  const nx=body.position.x+f.x*step,nz=body.position.z+f.z*step;
  if(canMove(nx,nz)){
   body.position.x=nx;body.position.z=nz;
   // Report the speed actually travelled so stride rate matches ground motion.
   if(dt>0&&step<body.speed*dt)body.speed=step/dt;
  }else body.speed=0;
 }else body.speed=0;
 body.turnRate=dt>0?wrapAngle(body.heading-before)/dt:0;
 return Math.max(0,Math.hypot(goal.x-body.position.x,goal.z-body.position.z)-p.stopDistance);
}
