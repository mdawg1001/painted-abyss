/**
 * First-person human gait model.
 *
 * The player has no visible body, but everything the camera and ears get comes
 * from a phase-driven human gait rather than a sine "bob":
 *
 * - Speed sets cadence and stride length (step frequency ∝ v^0.39 when walking,
 *   ~165–180 steps/min when running). Stride phase advances at cadence/2.
 * - Each leg follows normative sagittal joint curves (hip, knee, ankle) keyed
 *   to the gait cycle: heel strike 0 %, loading response ~10 %, midstance ~30 %,
 *   terminal stance ~50 %, toe-off ~60 % (walk) / ~35 % (run), swing to 100 %.
 * - Pelvis: vertical excursion twice per stride (walk: lowest at heel strike,
 *   highest at midstance — inverted pendulum; run: lowest at midstance — spring),
 *   lateral sway once per stride toward the stance leg, transverse rotation
 *   ±4° (swing side forward), obliquity ~±5° (swing side drops).
 * - Thorax counter-rotates against the pelvis; arms swing opposite to legs.
 * - Head: carried on the trunk but gaze-stabilised, so the camera sees only a
 *   small residual nod/roll/yaw rather than the full trunk motion.
 * - Forward speed dips at midstance and peaks through double support.
 * - Starting and stopping obey human acceleration limits; stopping finishes
 *   the current step and settles on both feet.
 * - Heel strikes and toe-offs are emitted as events for footstep audio.
 *
 * Angles are degrees in joint curves and radians everywhere else.
 * Phase φ ∈ [0,1): left heel strike at 0, right heel strike at 0.5.
 */

export type Foot='left'|'right';
export type GaitEvent={kind:'heel-strike'|'toe-off';foot:Foot;speed:number;run:number};

/** Human body proportions (m) for a ~1.78 m adult. */
export const BODY={
 height:1.78,
 eyeAboveFloor:1.66,
 thigh:.44,shank:.43,ankleHeight:.08,
 /** Hip joint height standing (thigh + shank + ankle). */
 hipHeight:.95,
 /** Half the distance between hip joints (m). */
 pelvisHalfWidth:.09,
};

/** Human locomotion speed envelope (m/s). */
export const GAIT_SPEED={
 walk:1.55,      // brisk comfortable walk
 walkBack:.85,   // backward walking is slower and shorter-stepped
 walkSide:.95,   // side-stepping
 run:3.4,        // steady run / jog
 /** Walk→run transition band (Froude ≈ 0.5 at ~2 m/s). */
 runBlendStart:1.95,runBlendEnd:2.45,
};

/**
 * Share of the body's head motion passed to the first-person camera (0..1).
 * The gait model itself stays at full human amplitude; only what the camera
 * shows is scaled. 0.3 = 70 % less camera shake than the raw head path.
 */
export const WALK_CAMERA_MOTION=.3;

/** Acceleration limits (m/s²): gait initiation reaches walking speed in ~2 steps. */
export const GAIT_ACCEL={walkUp:1.4,walkDown:2.4,runUp:3.2,runDown:4.2};

const clamp=(x:number,a:number,b:number)=>Math.max(a,Math.min(b,x));
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
const smooth=(e0:number,e1:number,x:number)=>{const t=clamp((x-e0)/(e1-e0),0,1);return t*t*(3-2*t);};
const TAU=Math.PI*2;
const DEG=Math.PI/180;

/** Steps per second at a walking speed (fit: 0.8 m/s→1.5 Hz, 1.4 m/s→1.87 Hz, 2.0 m/s→2.15 Hz). */
export function walkStepFrequency(v:number){return 1.638*Math.pow(Math.max(.15,v),.394);}
/** Steps per second when running (~165 steps/min at 3 m/s, rising slowly with speed). */
export function runStepFrequency(v:number){return 2.45+.09*Math.max(0,v);}
/** 0 = walking, 1 = running, blended across the transition band. */
export function runWeight(v:number){return smooth(GAIT_SPEED.runBlendStart,GAIT_SPEED.runBlendEnd,v);}
export function stepFrequency(v:number){const r=runWeight(v);return lerp(walkStepFrequency(v),runStepFrequency(v),r);}
/** Step length (m) = speed ÷ step frequency. */
export function stepLength(v:number){return v/stepFrequency(v);}

/**
 * Periodic cubic (Catmull-Rom) through keyframes [phase 0..1, value], wrapping at 1.
 * Keeps joint curves smooth with continuous velocity, like real joint traces.
 */
function cyclic(keys:[number,number][]){
 const k=keys.slice().sort((a,b)=>a[0]-b[0]);
 return(phase:number)=>{
  const p=((phase%1)+1)%1;
  let i=k.length-1;
  for(let j=0;j<k.length;j++)if(k[j][0]<=p)i=j;
  const n=k.length;
  const at=(idx:number)=>{const m=((idx%n)+n)%n;const wrap=Math.floor(idx/n);return[k[m][0]+wrap,k[m][1]] as const;};
  const p0=at(i-1),p1=at(i),p2=at(i+1),p3=at(i+2);
  const span=p2[0]-p1[0];
  const t=span>0?(p-p1[0]+(p<p1[0]?1:0))/span:0;
  const m1=(p2[1]-p0[1])/((p2[0]-p0[0])||1)*span;
  const m2=(p3[1]-p1[1])/((p3[0]-p1[0])||1)*span;
  const t2=t*t,t3=t2*t;
  return(2*t3-3*t2+1)*p1[1]+(t3-2*t2+t)*m1+(-2*t3+3*t2)*p2[1]+(t3-t2)*m2;
 };
}

/**
 * Normative walking joint angles (degrees; + = flexion / dorsiflexion) over one
 * cycle of the same leg, from standard clinical gait tables
 * (initial contact 0 %, loading response 10 %, midstance 30 %, terminal stance 45–50 %,
 * pre-swing 60 %, initial swing 73 %, mid swing 87 %).
 */
const WALK_HIP=cyclic([[0,20],[.1,15],[.3,0],[.5,-12],[.6,-10],[.73,8],[.87,28],[.95,24]]);
const WALK_KNEE=cyclic([[0,2],[.12,17],[.3,6],[.42,3],[.6,36],[.72,60],[.87,28],[.97,3]]);
const WALK_ANKLE=cyclic([[0,0],[.08,-5],[.3,5],[.46,10],[.62,-18],[.73,-8],[.87,0],[.97,0]]);
/** Running joint angles (foot strike 0 %, midstance 15 %, toe-off 35 %, swing to 100 %). */
const RUN_HIP=cyclic([[0,34],[.15,16],[.35,-10],[.52,12],[.75,48],[.9,40]]);
const RUN_KNEE=cyclic([[0,20],[.15,42],[.35,18],[.55,92],[.72,100],[.9,45]]);
const RUN_ANKLE=cyclic([[0,5],[.15,20],[.35,-22],[.55,-6],[.75,4],[.9,6]]);

/** Toe-off phase within a leg's own cycle: walking 0.60 (60 % stance), running ~0.35. */
export function toeOffPhase(run:number){return lerp(.6,.35,run);}

export type LegPose={
 /** Joint angles (radians): + hip flexion, + knee flexion, + ankle dorsiflexion. */
 hip:number;knee:number;ankle:number;
 /** True while the foot is on the ground. */
 stance:boolean;
 /** Position within this leg's own cycle, 0 = its heel strike. */
 phase:number;
 /** Toe height above the floor (m): clearance during swing. */
 footLift:number;
};

export type GaitPose={
 /** Pelvis offsets from the neutral standing hip (m), in body frame (x right, y up, z forward). */
 pelvis:{x:number;y:number;z:number;rotation:number;obliquity:number;tilt:number};
 /** Thorax yaw (counter-rotation) and shoulder flexion per arm (radians, + = forward). */
 thoraxYaw:number;shoulderLeft:number;shoulderRight:number;elbowLeft:number;elbowRight:number;
 left:LegPose;right:LegPose;
 /**
  * Camera offsets relative to the resting eye (body frame, metres / radians).
  * These are what the player feels: the head rides the pelvis and trunk,
  * but gaze stabilisation cancels most rotation.
  */
 head:{x:number;y:number;z:number;pitch:number;roll:number;yaw:number};
};

function legPose(phase:number,run:number):LegPose{
 const hip=lerp(WALK_HIP(phase),RUN_HIP(phase),run)*DEG;
 const knee=Math.max(0,lerp(WALK_KNEE(phase),RUN_KNEE(phase),run))*DEG;
 const ankle=lerp(WALK_ANKLE(phase),RUN_ANKLE(phase),run)*DEG;
 const off=toeOffPhase(run);
 const stance=phase<off;
 // Swing foot clearance: from leg geometry, how far the foot rises above a straight leg's reach.
 const thighA=hip,shankA=hip-knee;
 const reach=BODY.thigh*Math.cos(thighA)+BODY.shank*Math.cos(shankA);
 const straight=BODY.thigh+BODY.shank;
 const footLift=stance?0:Math.max(0,straight-reach)*(1-.35*Math.cos(TAU*(phase-off)/(1-off)))*.55;
 return{hip,knee,ankle,stance,phase,footLift};
}

/**
 * Full-body pose at stride phase φ for ground speed v (m/s).
 * φ = 0 left heel strike, 0.5 right heel strike.
 */
export function gaitPose(phase:number,v:number,movingAmount=1):GaitPose{
 const run=runWeight(v);
 const a=clamp(movingAmount,0,1);
 const p=((phase%1)+1)%1;
 const left=legPose(p,run),right=legPose((p+.5)%1,run);
 // Vertical: walking amplitude grows with speed (≈2.7 cm @0.7 m/s → ≈4.8 cm @1.6 m/s peak-to-peak);
 // running: spring-mass ≈ 6–8 cm, lowest at midstance.
 const walkAmp=clamp(.012+.022*v,.02,.055);
 const runAmp=clamp(.055+.006*v,.06,.085);
 const amp=lerp(walkAmp,runAmp,run)*a;
 // Walk: min at heel strike (φ = 0, .5), max at midstance (φ ≈ .25, .75).
 // Run: min at midstance of each stance (φ ≈ .15, .65), max during flight (spring-mass).
 const walkY=-.5*walkAmp*Math.cos(2*TAU*p);
 const runY=-.5*runAmp*Math.cos(2*TAU*(p-.15));
 const y=lerp(walkY,runY,run)*a-(amp*.5); // settle lower overall while moving (knees soft)
 // Lateral sway toward the stance leg once per stride (±2 cm brisk walk, less when running).
 const sway=lerp(clamp(.035-.009*v,.012,.03),.01,run)*a;
 const x=-sway*Math.sin(TAU*(p+.12)); // left stance (early cycle) shifts body left (−x)
 // Fore-aft: CoM runs ahead of the mean in double support, behind at midstance (tiny).
 const z=.008*a*Math.cos(2*TAU*p)*(1-run);
 // Pelvis transverse rotation ±4° (swing side forward), obliquity ±5° (swing side drops), tilt ±1.5°.
 const rotAmp=lerp(4,6,run)*DEG*a,oblAmp=lerp(5,6,run)*DEG*a;
 const rotation=rotAmp*Math.cos(TAU*p);            // +: left hip forward at left heel strike
 // + = right side lower. Left stance (φ 0–0.5) lets the swinging right side drop.
 const obliquity=oblAmp*Math.sin(TAU*p);
 const tilt=(10+lerp(1.5,4,run)*Math.cos(2*TAU*(p-.05))*a)*DEG;
 // Thorax counter-rotates against the pelvis; arms swing opposite to their leg.
 const thoraxYaw=-lerp(.55,.9,run)*rotation;
 const armAmp=lerp(Math.max(4,8*v/1.5),24,run)*DEG*a; // ≈8° brisk walk, ≈24° run (Pontzer et al. 2009)
 const shoulderLeft=-armAmp*Math.cos(TAU*p);
 const shoulderRight=armAmp*Math.cos(TAU*p);
 const elbowBase=lerp(15,85,run)*DEG;
 const elbowLeft=elbowBase+Math.max(0,shoulderLeft)*.6;
 const elbowRight=elbowBase+Math.max(0,shoulderRight)*.6;
 // Head: rides the pelvis vertically (neck damps a little) with gaze stabilisation
 // cancelling most pitch/roll/yaw; residual nod leads heel strike, residual roll follows sway.
 const head={
  x:x*.8,
  y:y*.92,
  z:z,
  pitch:-lerp(.35,1.1,run)*DEG*a*Math.cos(2*TAU*(p-.06)),
  roll:-lerp(.45,.8,run)*DEG*a*Math.sin(TAU*(p+.12)),
  yaw:.12*(rotation+thoraxYaw),
 };
 return{pelvis:{x,y,z,rotation,obliquity,tilt},thoraxYaw,shoulderLeft,shoulderRight,elbowLeft,elbowRight,left,right,head};
}

/**
 * Stateful gait: owns stride phase and the human speed controller.
 * Feed it the player's wished local velocity each frame.
 */
export class Gait{
 /** Stride phase, 0 = left heel strike. */
 phase=0;
 /** Current ground speed (m/s) along `dir`. */
 speed=0;
 /** Smoothed "how much we are walking" 0..1 (drives amplitudes in and out). */
 moving=0;
 /** Travel direction in body frame (unit x = right, z = forward). */
 dir={x:0,z:1};
 /** Settling onto both feet after the last step. */
 private settling=false;

 /** Max speed for a wished direction in the body frame (forward / back / side). */
 static maxSpeed(localX:number,localZ:number,run:boolean){
  const len=Math.hypot(localX,localZ);
  if(len<1e-6)return 0;
  const fx=localX/len,fz=localZ/len;
  const forward=Math.max(0,fz),back=Math.max(0,-fz),side=Math.abs(fx);
  // Running is only possible forward-ish; backward/sideways stay a walk.
  const fwd=run?GAIT_SPEED.run:GAIT_SPEED.walk;
  const w=forward*forward,b=back*back,s=side*side;
  return (w*fwd+b*GAIT_SPEED.walkBack+s*(run&&forward>.7?GAIT_SPEED.walk:GAIT_SPEED.walkSide))/(w+b+s);
 }

 /**
  * Advance one frame.
  * @param wishX,wishZ  desired direction in body frame (x right, z forward), 0..1 magnitude
  * @param run          shift held and able to run
  * @param dt           seconds
  * @param drag         0..1 speed multiplier from wading depth (1 = dry)
  * @returns events that happened this frame (heel strikes / toe-offs)
  */
 step(wishX:number,wishZ:number,run:boolean,dt:number,drag=1):GaitEvent[]{
  const events:GaitEvent[]=[];
  const wishLen=Math.min(1,Math.hypot(wishX,wishZ));
  const target=Gait.maxSpeed(wishX,wishZ,run)*wishLen*clamp(drag,.2,1);
  if(wishLen>1e-3){
   // Heading changes are gradual: people curve into a new direction over a step.
   const tx=wishX/Math.hypot(wishX,wishZ),tz=wishZ/Math.hypot(wishX,wishZ);
   const k=this.speed<.3?1:1-Math.exp(-dt*9);
   const nx=lerp(this.dir.x,tx,k),nz=lerp(this.dir.z,tz,k);
   const nl=Math.hypot(nx,nz)||1;this.dir={x:nx/nl,z:nz/nl};
  }
  const r=runWeight(Math.max(this.speed,target));
  const up=lerp(GAIT_ACCEL.walkUp,GAIT_ACCEL.runUp,r),down=lerp(GAIT_ACCEL.walkDown,GAIT_ACCEL.runDown,r);
  if(target>this.speed)this.speed=Math.min(target,this.speed+up*dt);
  else this.speed=Math.max(target,this.speed-down*dt);
  // Moving amount eases in over the first step and out over the last.
  const wantMove=this.speed>.05||target>.05?1:0;
  this.moving+=(wantMove-this.moving)*(1-Math.exp(-dt*(wantMove?5:4)));
  // Phase advance: cadence from current speed; when stopping, finish the step
  // at a slow cadence and settle into double support (φ = 0 or 0.5).
  const prev=this.phase;
  if(this.speed>.05){
   this.settling=false;
   this.phase+=stepFrequency(this.speed)*.5*dt;
  }else{
   const toNext=(Math.ceil(this.phase*2-1e-6)/2)-this.phase;
   if(toNext>1e-4){this.settling=true;this.phase+=Math.min(toNext,stepFrequency(.6)*.5*dt);}
   else this.settling=false;
  }
  // Emit gait events crossed this frame.
  const off=toeOffPhase(runWeight(this.speed));
  const marks:[number,GaitEvent['kind'],Foot][]=[[0,'heel-strike','left'],[.5,'heel-strike','right'],[off,'toe-off','left'],[(off+.5)%1,'toe-off','right']];
  if(this.phase>prev){
   for(const [m,kind,foot] of marks){
    for(let cyc=Math.floor(prev);cyc<=Math.floor(this.phase);cyc++){
     const at=cyc+m;
     if(at>prev&&at<=this.phase+1e-9)events.push({kind,foot,speed:this.speed,run:runWeight(this.speed)});
    }
   }
  }
  if(this.phase>=1)this.phase-=Math.floor(this.phase);
  return events;
 }

 /**
  * Forward-speed modulation within the stride (inverted pendulum): speed dips at
  * midstance and peaks through double support, ≈ ±5 % walking, ±3 % running.
  */
 instantaneousSpeed(){
  const r=runWeight(this.speed);
  const k=lerp(.05,.03,r);
  const shift=lerp(0,.15,r);
  return this.speed*(1+k*this.moving*Math.cos(2*TAU*(this.phase-shift)));
 }

 pose(){return gaitPose(this.phase,this.speed,this.moving);}

 /** Snap to standing (spawn / respawn / mode switch). */
 reset(){this.phase=0;this.speed=0;this.moving=0;this.settling=false;}
}

/**
 * Wading drag from water depth over the floor (m): ankle-deep barely slows you,
 * knee-deep (~0.5 m) ≈ 0.7×, thigh-deep (~0.8 m) ≈ 0.5×, waist-deep ≈ 0.35×.
 */
export function wadingDrag(depthOverFloor:number){
 const d=Math.max(0,depthOverFloor);
 return clamp(1-.95*Math.pow(d/1.1,1.15)*.72,.3,1);
}
