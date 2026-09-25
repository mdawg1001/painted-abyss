/**
 * Leak valve on the hidden DOOM pipe riser.
 *
 * Pure data + maths (no DOM, no renderer) so the simulation, the renderer and the
 * tests all agree on where the wheel is, how far it has to turn, how much water
 * still comes through, and exactly where the diver's hands are at any instant of
 * a hand-over-hand turn.
 *
 * Frames used below:
 *  - Model space: the Sketchfab glTF (Y up, wheel facing +Z, bracket at -Z).
 *  - World space: the cave. The riser stands on the south wall (z = -98) with
 *    the wheel facing +Z into the room, so the player faces -Z to turn it.
 *  - Clock angle φ: position on the rim as the player sees it, measured
 *    clockwise from 12 o'clock. Closing the valve turns the wheel clockwise
 *    (right-hand thread: "righty-tighty").
 */
/** Must equal simulation.FLOOR_Y (asserted in tests). Kept local so simulation can import this module without a cycle. */
const FLOOR_Y=.65;

/* ─────────────────────────── Geometry ─────────────────────────── */

/** Source-model measurements (Sketchfab glTF units). */
export const MODEL={
 minY:-.314,
 height:29.878,
 backZ:-2.552,
 /** Wheel hub / spin axis and rim mid-plane (the `valveWheel` node origin). */
 hub:{x:0,y:11.43,z:7.79},
 /** Rim centreline radius (rim band spans r 1.10–1.37). */
 rimR:1.235,
 /** Half-thickness of the rim band — the "handle" radius the fingers wrap. */
 rimTubeR:.14,
 /** Top of the riser: green main line, radius and centre in X/Z. */
 topPipeR:1.72,
 topPipeZ:-.2,
} as const;

/**
 * One scale for the whole riser, chosen so the rim is 32 mm thick — a real
 * cast-iron handwheel for a DN80–DN100 gate valve (≈ 280–320 mm across) and
 * what an adult gloved fist closes round. Everything else follows from it.
 */
export const PIPE_SCALE=.032/(2*MODEL.rimTubeR);
/** Blind south wall of the far south-west cavern corner. */
export const PIPE_WALL={x:-26,z:-98};
/** Rear of the bracket clears the wall-face boulders. */
export const PIPE_WALL_CLEARANCE=.35;
/** Riser foot sits just into the sand (props stand on FLOOR_Y). */
export const PIPE_BOTTOM_Y=FLOOR_Y-.05;
/** Where the riser's model origin (bottom-centre of the rear face) lands in the world. */
export const PIPE_ORIGIN={x:PIPE_WALL.x,y:PIPE_BOTTOM_Y,z:PIPE_WALL.z+PIPE_WALL_CLEARANCE};
/** World-space height of the authored riser before the plain extension to the roof. */
export const PIPE_MODEL_TOP_Y=PIPE_BOTTOM_Y+MODEL.height*PIPE_SCALE;

export type V3={x:number;y:number;z:number};
/** Model point → world (yaw 0: model +Z is world +Z). */
export function modelToWorld(p:V3):V3{
 return{
  x:PIPE_ORIGIN.x+p.x*PIPE_SCALE,
  y:PIPE_ORIGIN.y+(p.y-MODEL.minY)*PIPE_SCALE,
  z:PIPE_ORIGIN.z+(p.z-MODEL.backZ)*PIPE_SCALE,
 };
}
/** Wheel centre on the rim mid-plane, world space. The spin axis is world +Z. */
export const WHEEL_CENTRE:V3=modelToWorld(MODEL.hub);
/** Rim centreline radius in metres (≈ 0.14 m → a 0.31 m wheel). */
export const WHEEL_RIM_R=MODEL.rimR*PIPE_SCALE;
export const WHEEL_TUBE_R=MODEL.rimTubeR*PIPE_SCALE;

/**
 * Where the diver stands to work the wheel: square to it, eye 0.38 m back from
 * the rim plane. Chest-height wheel, elbows bent — the posture a person picks to
 * put body weight into a stiff valve.
 */
export const VALVE_STAND={x:WHEEL_CENTRE.x,z:WHEEL_CENTRE.z+.38};
/** Close enough to reach the wheel (horizontal metres from the stand point). */
export const VALVE_REACH=1.25;

/** Rim point at clock angle φ (world). */
export function rimPoint(phi:number,radius=WHEEL_RIM_R,forward=0):V3{
 return{x:WHEEL_CENTRE.x+Math.sin(phi)*radius,y:WHEEL_CENTRE.y+Math.cos(phi)*radius,z:WHEEL_CENTRE.z+forward};
}

/* ─────────────────────────── Hydraulics ─────────────────────────── */

/**
 * Turns from fully open to seated. A real DN80 gate valve needs ~8–10; the
 * stem here is cut to 2½ turns so closing takes ~25 s of exposed work.
 */
export const VALVE_TURNS=2.5;
export const VALVE_CLOSE_RAD=VALVE_TURNS*Math.PI*2;

/** 1 = fully open, 0 = seated. `turned` is radians wound clockwise from open. */
export function valveOpenFraction(turned:number){
 return Math.max(0,Math.min(1,1-turned/VALVE_CLOSE_RAD));
}
/**
 * Fraction of full leak flow through a round gate valve port. The gate travels
 * linearly with the stem, so the open port is a circular segment of height
 * h = open·D; its area is (θ − sin θ)/2π of the full bore with θ = 2·acos(1 − 2h/D).
 * Orifice flow at fixed head is proportional to open area.
 */
export function gateFlowFraction(open:number){
 const o=Math.max(0,Math.min(1,open));
 if(o<=0)return 0;if(o>=1)return 1;
 const th=2*Math.acos(1-2*o);
 return (th-Math.sin(th))/(2*Math.PI);
}
export function leakFlowFraction(turned:number){return gateFlowFraction(valveOpenFraction(turned));}

/* ─────────────────────── Hand-over-hand turning ─────────────────────── */

/** Wheel travel per two-handed drive stroke (radians). */
export const DRIVE_ARC=THREE_DEG(75);
/**
 * Clock angles where the hands take hold at the start of each stroke. Closing is
 * clockwise: the right hand pulls down the right side from ≈ 1 o'clock to half
 * past 3 while the left pushes up the left side from ≈ half past 8 to 11.
 */
export const GRIP_RIGHT=THREE_DEG(30);
export const GRIP_LEFT=THREE_DEG(255);
/** Seconds for a free-running drive stroke. */
export const DRIVE_TIME=.9;
/** Seconds to release, carry back and re-take one hand. */
export const REGRIP_TIME=.6;
/** First-ever stroke: a valve left open for years is stuck. The hands strain before it gives. */
export const BREAKAWAY_TIME=.7;
/** Wheel creep while the stuck stem is being broken free (radians). */
export const BREAKAWAY_CREEP=THREE_DEG(2.5);
/** Enter/leave the wheel. */
export const REACH_TIME=.5;
export const RELEASE_TIME=.35;

function THREE_DEG(d:number){return d*Math.PI/180;}
const clamp01=(x:number)=>Math.max(0,Math.min(1,x));
/** C2-continuous ease: zero velocity and acceleration at both ends. */
export function smootherstep(x:number){const t=clamp01(x);return t*t*t*(t*(t*6-15)+10);}

/**
 * Operating torque rises as the gate closes against the head of water behind it
 * (and spikes into the seat), so strokes slow down near the end.
 */
export function strokeResistance(turned:number){
 const c=1-valveOpenFraction(turned);
 return 1+1.4*c*c*c;
}
/** Duration of a drive stroke that starts at `turned`. */
export function driveDuration(turned:number){return DRIVE_TIME*strokeResistance(turned);}

export type HandPhase='reach'|'grip'|'release'|'carry'|'regrip'|'away';
export type HandPose={
 /** Clock angle on the rim the hand is at (or hovering over). */
 phi:number;
 /** 0 = closed round the rim, 1 = fully open. */
 open:number;
 /** Metres the hand stands off the rim toward the player (+Z) and outward, while not holding. */
 lift:number;
 /** 0..1 blend from an off-screen rest pose (1) to the rim (0). */
 away:number;
 phase:HandPhase;
};

/** Stroke state machine. Drives wheel angle and both hands; owned by the renderer. */
export type ValveStroke={
 stage:'reach'|'breakaway'|'drive'|'regripRight'|'regripLeft'|'release'|'done';
 t:number;
 /** Wheel angle (turned) when this drive began. */
 driveFrom:number;
 /** Wheel travel planned for this drive (shorter for the last one into the seat). */
 driveArc:number;
 driveTime:number;
 /** Hands' clock angles when the drive began (they ride the rim). */
 rightFrom:number;leftFrom:number;
 /** Current hand clock angles. */
 right:number;left:number;
 /** The player let go of E: finish letting go, then leave. */
 releasing:boolean;
 seatedPulse:number;
 /** Hand poses at the moment of letting go, so release blends from wherever the hands were. */
 relRight:HandPose|null;relLeft:HandPose|null;
};

export function startStroke(turned:number):ValveStroke{
 return{stage:'reach',t:0,driveFrom:turned,driveArc:0,driveTime:DRIVE_TIME,rightFrom:GRIP_RIGHT,leftFrom:GRIP_LEFT,right:GRIP_RIGHT,left:GRIP_LEFT,releasing:false,seatedPulse:0,relRight:null,relLeft:null};
}

/** Result of one tick: how far the wheel turned, and whether it is working hard (breathing effort). */
export type StrokeStep={turn:number;effort:boolean;seated:boolean;strokeStarted:boolean;finished:boolean};

/**
 * Advance the stroke. `turned` is the wheel's current angle from open, `hold`
 * whether the player is still holding E, `stuck` whether the stem has never
 * been moved. Returns the wheel increment for this tick.
 */
function toRelease(s:ValveStroke){
 const now=handPoses(s);
 s.relRight=now.right;s.relLeft=now.left;
 s.stage='release';s.t=0;
}
export function stepStroke(s:ValveStroke,dt:number,turned:number,hold:boolean,stuck:boolean):StrokeStep{
 const res:StrokeStep={turn:0,effort:false,seated:false,strokeStarted:false,finished:false};
 if(!hold&&s.stage!=='release'&&s.stage!=='done'){
  // Letting go never throws the wheel: the gate's packing friction holds it where it is.
  toRelease(s);s.releasing=true;
 }
 s.t+=dt;
 const beginDrive=()=>{
  if(turned>=VALVE_CLOSE_RAD-1e-6){toRelease(s);return;}
  s.stage=stuck?'breakaway':'drive';s.t=0;
  s.driveFrom=turned;
  s.driveArc=Math.min(DRIVE_ARC,VALVE_CLOSE_RAD-turned);
  s.driveTime=driveDuration(turned)*(s.driveArc/DRIVE_ARC*.6+.4);
  s.rightFrom=s.right;s.leftFrom=s.left;
  res.strokeStarted=true;
 };
 switch(s.stage){
  case 'reach':
   if(s.t>=REACH_TIME)beginDrive();
   break;
  case 'breakaway':{
   // Static friction: the wheel only creeps while the hands load up, then breaks free.
   const u=clamp01(s.t/BREAKAWAY_TIME);
   const target=BREAKAWAY_CREEP*u*u;
   const now=s.driveFrom+target;
   res.turn=Math.max(0,now-turned);
   res.effort=true;
   s.right=s.rightFrom+target;s.left=s.leftFrom+target;
   if(u>=1){
    const done=turned+res.turn;
    s.stage='drive';s.t=0;s.driveFrom=done;s.driveArc=Math.min(DRIVE_ARC-BREAKAWAY_CREEP,VALVE_CLOSE_RAD-done);
    s.driveTime=driveDuration(done)*.85;
    s.rightFrom=s.right;s.leftFrom=s.left;
   }
   break;
  }
  case 'drive':{
   const u=clamp01(s.t/s.driveTime);
   const target=s.driveFrom+s.driveArc*smootherstep(u);
   res.turn=Math.max(0,Math.min(VALVE_CLOSE_RAD,target)-turned);
   res.effort=true;
   const along=target-s.driveFrom;
   s.right=s.rightFrom+along;s.left=s.leftFrom+along;
   if(u>=1){
    if(target>=VALVE_CLOSE_RAD-1e-6){res.seated=true;s.seatedPulse=1;toRelease(s);}
    else{s.stage='regripRight';s.t=0;}
   }
   break;
  }
  case 'regripRight':
   if(s.t>=REGRIP_TIME){s.right=GRIP_RIGHT;s.stage='regripLeft';s.t=0;}
   break;
  case 'regripLeft':
   if(s.t>=REGRIP_TIME){s.left=GRIP_LEFT;beginDrive();}
   break;
  case 'release':
   if(s.t>=RELEASE_TIME){s.stage='done';res.finished=true;}
   break;
  case 'done':res.finished=true;break;
 }
 s.seatedPulse=Math.max(0,s.seatedPulse-dt*3);
 return res;
}

/**
 * Hand-over-hand carry path for one hand during its re-grip: fingers open and
 * the palm peels off the rim (0–30 %), the hand swings back round the wheel
 * just clear of it (30–75 %), then closes on the new hold (75–100 %).
 */
export function regripPose(u:number,from:number,to:number):HandPose{
 const x=clamp01(u);
 if(x<.3){
  const k=smootherstep(x/.3);
  return{phi:from,open:k,lift:.035*k,away:0,phase:'release'};
 }
 if(x<.75){
  const k=smootherstep((x-.3)/.45);
  return{phi:from+(to-from)*k,open:1,lift:.035+.02*Math.sin(Math.PI*k),away:0,phase:'carry'};
 }
 const k=smootherstep((x-.75)/.25);
 return{phi:to,open:1-k,lift:.035*(1-k),away:0,phase:'regrip'};
}

/** Pose of each hand for the current stroke state. */
export function handPoses(s:ValveStroke):{right:HandPose;left:HandPose}{
 const hold=(phi:number):HandPose=>({phi,open:0,lift:0,away:0,phase:'grip'});
 switch(s.stage){
  case 'reach':{
   const u=clamp01(s.t/REACH_TIME);
   // Arms come up from rest; fingers stay open until the last third, then close.
   const away=1-smootherstep(Math.min(1,u/.7));
   const open=1-smootherstep((u-.65)/.35);
   return{right:{phi:GRIP_RIGHT,open,lift:.04*(1-smootherstep(u)),away,phase:'reach'},left:{phi:GRIP_LEFT,open,lift:.04*(1-smootherstep(u)),away,phase:'reach'}};
  }
  case 'breakaway':case 'drive':return{right:hold(s.right),left:hold(s.left)};
  case 'regripRight':{
   const u=clamp01(s.t/REGRIP_TIME);
   return{right:regripPose(u,s.right,GRIP_RIGHT),left:hold(s.left)};
  }
  case 'regripLeft':{
   const u=clamp01(s.t/REGRIP_TIME);
   return{right:hold(s.right),left:regripPose(u,s.left,GRIP_LEFT)};
  }
  case 'release':case 'done':{
   const u=clamp01(s.t/RELEASE_TIME);
   const ramp=smootherstep(Math.min(1,u/.5));
   const away=smootherstep((u-.25)/.75);
   const let_go=(from:HandPose|null,phi:number):HandPose=>{
    const f=from??{phi,open:0,lift:0,away:0,phase:'grip' as HandPhase};
    const open=Math.max(f.open,ramp);
    return{phi:f.phi,open,lift:Math.max(f.lift,.04*open),away:Math.max(f.away,away),phase:'away'};
   };
   return{right:let_go(s.relRight,s.right),left:let_go(s.relLeft,s.left)};
  }
 }
}
