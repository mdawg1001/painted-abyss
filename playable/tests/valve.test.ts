import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {
 PIPE_SCALE,WHEEL_CENTRE,WHEEL_RIM_R,WHEEL_TUBE_R,VALVE_STAND,VALVE_CLOSE_RAD,VALVE_TURNS,PIPE_BOTTOM_Y,
 gateFlowFraction,leakFlowFraction,valveOpenFraction,startStroke,stepStroke,handPoses,rimPoint,
 GRIP_LEFT,GRIP_RIGHT,DRIVE_ARC,type ValveStroke,
} from '../src/valve.ts';
import {Mission,FLOOR_Y,WALK_EYE_Y,BREATH_RISE_MPS,isOpen,riseBreathWater} from '../src/simulation.ts';
import {createValveHands,poseValveHands,solveElbow,UPPER_ARM,FOREARM,SHOULDER_L,SHOULDER_R} from '../src/valveHands.ts';

const assetDir=path.join(path.dirname(fileURLToPath(import.meta.url)),'../public/assets/doom-pipe');

test('valve module agrees with the simulation floor',()=>{
 assert.equal(PIPE_BOTTOM_Y,FLOOR_Y-.05);
});

test('handwheel is a real DN80–100 gate-valve wheel at chest height',()=>{
 const diameter=2*(WHEEL_RIM_R+WHEEL_TUBE_R);
 assert.ok(diameter>.28&&diameter<.34,`wheel ${diameter.toFixed(3)} m across`);
 assert.ok(WHEEL_TUBE_R*2>.028&&WHEEL_TUBE_R*2<.036,'rim thick enough to close a gloved fist round');
 const aboveFloor=WHEEL_CENTRE.y-FLOOR_Y;
 assert.ok(aboveFloor>1.15&&aboveFloor<1.45,`hub ${aboveFloor.toFixed(2)} m above the floor`);
 const belowEye=WALK_EYE_Y-WHEEL_CENTRE.y;
 assert.ok(belowEye>.2&&belowEye<.45,'wheel sits below the eye, at the chest');
 assert.ok(PIPE_SCALE>.1&&PIPE_SCALE<.13);
});

test('the stand point is open floor, square in front of the wheel',()=>{
 assert.ok(isOpen(VALVE_STAND.x,VALVE_STAND.z));
 assert.ok(VALVE_STAND.z>WHEEL_CENTRE.z);
 assert.equal(VALVE_STAND.x,WHEEL_CENTRE.x);
});

test('round-port gate valve: flow is the open circular-segment area',()=>{
 assert.equal(gateFlowFraction(0),0);
 assert.equal(gateFlowFraction(1),1);
 assert.ok(Math.abs(gateFlowFraction(.5)-.5)<1e-9,'half lift uncovers half the bore');
 let prev=0;
 for(let o=.01;o<=1;o+=.01){const f=gateFlowFraction(o);assert.ok(f>=prev);prev=f;}
 assert.ok(gateFlowFraction(.1)<.1,'last tenth of travel passes less than a tenth of the flow');
 assert.equal(valveOpenFraction(VALVE_CLOSE_RAD),0);
 assert.equal(leakFlowFraction(0),1);
 assert.equal(VALVE_CLOSE_RAD,VALVE_TURNS*Math.PI*2);
});

test('the leak raises the water only while the valve passes flow',()=>{
 assert.equal(riseBreathWater(1,10),1+BREATH_RISE_MPS*10);
 assert.equal(riseBreathWater(1,10,0),1);
 const m=new Mission(true);
 const w0=m.breathWaterY;
 m.update(.05);
 const openRise=m.breathWaterY-w0;
 assert.ok(Math.abs(openRise-BREATH_RISE_MPS*.05)<1e-9);
 m.valveTurned=VALVE_CLOSE_RAD/2;
 const w1=m.breathWaterY;m.update(.05);
 assert.ok(Math.abs((m.breathWaterY-w1)-openRise*.5)<1e-9,'half-shut gate halves the leak');
 m.turnValve(VALVE_CLOSE_RAD);
 assert.ok(m.valveSealed);
 const w2=m.breathWaterY;m.update(.05);
 assert.equal(m.breathWaterY,w2,'sealed: the water holds');
});

test('the prompt appears only at the wheel',()=>{
 const m=new Mission(true);
 assert.equal(m.nearValve(),false);
 m.position={x:VALVE_STAND.x,y:WALK_EYE_Y,z:VALVE_STAND.z};
 assert.ok(m.nearValve());
 m.position={x:VALVE_STAND.x,y:WALK_EYE_Y,z:WHEEL_CENTRE.z-.5};
 assert.equal(m.nearValve(),false,'not from behind the wheel');
 m.position={x:VALVE_STAND.x,y:WALK_EYE_Y,z:VALVE_STAND.z};
 m.turnValve(VALVE_CLOSE_RAD);
 assert.equal(m.nearValve(),false,'nothing left to turn');
 assert.ok(m.atValve());
});

/** Run the stroke machine with E held until the valve seats; record every tick. */
function runToSeat(dt=1/60){
 let turned=0,t=0;
 const s=startStroke(0);
 const log:{t:number;turned:number;stage:ValveStroke['stage'];right:number;left:number;poses:ReturnType<typeof handPoses>}[]=[];
 let strokes=0;
 while(t<120){
  const r=stepStroke(s,dt,turned,true,turned<=0);
  assert.ok(r.turn>=0,'the wheel never runs backwards');
  turned=Math.min(VALVE_CLOSE_RAD,turned+r.turn);
  if(r.strokeStarted)strokes++;
  t+=dt;
  log.push({t,turned,stage:s.stage,right:s.right,left:s.left,poses:handPoses(s)});
  if(r.finished)break;
 }
 return{turned,t,log,strokes};
}

test('holding E winds the valve shut hand over hand in a plausible time',()=>{
 const {turned,t,strokes}=runToSeat();
 assert.ok(Math.abs(turned-VALVE_CLOSE_RAD)<1e-6,'seated exactly');
 assert.ok(t>18&&t<45,`closing took ${t.toFixed(1)} s`);
 assert.equal(strokes,Math.ceil(VALVE_CLOSE_RAD/DRIVE_ARC),'one drive per arc');
});

test('a holding hand stays locked to the rim and rides round with it',()=>{
 const {log}=runToSeat();
 let checked=0;
 for(let i=1;i<log.length;i++){
  const a=log[i-1],b=log[i];
  if(a.stage!=='drive'||b.stage!=='drive')continue;
  const dw=b.turned-a.turned;
  assert.ok(Math.abs((b.right-a.right)-dw)<1e-9&&Math.abs((b.left-a.left)-dw)<1e-9);
  assert.equal(b.poses.right.open,0);assert.equal(b.poses.left.open,0);
  checked++;
 }
 assert.ok(checked>300);
 // During each re-grip exactly one hand lets go and the wheel does not move.
 for(let i=1;i<log.length;i++){
  const a=log[i-1],b=log[i];
  if(b.stage==='regripRight'&&a.stage==='regripRight'){assert.equal(b.turned,a.turned);assert.equal(b.poses.left.open,0);}
  if(b.stage==='regripLeft'&&a.stage==='regripLeft'){assert.equal(b.turned,a.turned);assert.equal(b.poses.right.open,0);}
 }
});

test('hand motion is continuous: no teleports or finger snaps between ticks',()=>{
 const {log}=runToSeat(1/120);
 for(let i=1;i<log.length;i++){
  for(const side of ['right','left'] as const){
   const a=log[i-1].poses[side],b=log[i].poses[side];
   assert.ok(Math.abs(b.phi-a.phi)<.08,`${side} hand jumped round the rim at ${log[i].t.toFixed(2)} s (${log[i-1].stage}→${log[i].stage})`);
   assert.ok(Math.abs(b.open-a.open)<.12,`${side} fingers snapped at ${log[i].t.toFixed(2)} s`);
   assert.ok(Math.abs(b.lift-a.lift)<.01);
   assert.ok(Math.abs(b.away-a.away)<.1);
  }
 }
});

test('letting go mid-carry releases from where the hand is, and the wheel stays put',()=>{
 let turned=0;
 const s=startStroke(0);
 // Run into the first right-hand re-grip carry.
 for(let i=0;i<2000&&!(s.stage==='regripRight'&&s.t>.25);i++){const r=stepStroke(s,1/120,turned,true,turned<=0);turned+=r.turn;}
 assert.equal(s.stage,'regripRight');
 const before=handPoses(s).right;
 const r=stepStroke(s,1/120,turned,false,false);
 assert.equal(r.turn,0);
 const after=handPoses(s).right;
 assert.ok(Math.abs(after.phi-before.phi)<1e-9,'no snap back to the old hold');
 assert.ok(after.open>=before.open-1e-9);
 let finished=false;
 for(let i=0;i<200&&!finished;i++){const q=stepStroke(s,1/120,turned,false,false);assert.equal(q.turn,0);finished=q.finished;}
 assert.ok(finished);
});

test('closing is clockwise as the player sees it; grips sit either side of the wheel',()=>{
 const right=rimPoint(GRIP_RIGHT),left=rimPoint(GRIP_LEFT);
 assert.ok(right.x>WHEEL_CENTRE.x&&left.x<WHEEL_CENTRE.x);
 // Clockwise from 1 o'clock heads toward 3: +x first, then down.
 const on=rimPoint(GRIP_RIGHT+DRIVE_ARC);
 assert.ok(on.y<right.y&&on.x>right.x-.05);
});

test('two-bone IK keeps bone lengths and bends toward the pole',()=>{
 const S=new THREE.Vector3(0,0,0),W=new THREE.Vector3(.1,-.1,-.4),E=new THREE.Vector3();
 solveElbow(S,W,new THREE.Vector3(1,-1,0),E);
 assert.ok(Math.abs(E.distanceTo(S)-UPPER_ARM)<1e-6);
 assert.ok(Math.abs(E.distanceTo(W)-FOREARM)<1e-6);
 assert.ok(E.y<-.05&&E.x>0,'elbow drops down and out');
});

test('every hold of a full close is within reach of a standing diver',()=>{
 const cam=new THREE.PerspectiveCamera(70,16/9,.12,100);
 cam.rotation.order='YXZ';
 cam.position.set(VALVE_STAND.x,WALK_EYE_Y,VALVE_STAND.z);
 const dz=WHEEL_CENTRE.z-cam.position.z,dy=WHEEL_CENTRE.y+.05-cam.position.y;
 cam.rotation.set(Math.atan2(dy,Math.abs(dz)),0,0);
 cam.updateMatrixWorld();
 const rig=createValveHands();
 const {log}=runToSeat(1/30);
 const sR=SHOULDER_R.clone().applyMatrix4(cam.matrixWorld),sL=SHOULDER_L.clone().applyMatrix4(cam.matrixWorld);
 for(const row of log){
  poseValveHands(rig,cam,row.poses.right,row.poses.left);
  for(const [arm,S] of [[rig.right,sR],[rig.left,sL]] as const){
   const wrist=new THREE.Vector3(-.03,-.004,-.082).applyMatrix4(arm.hand.matrix);
   const reach=wrist.distanceTo(S);
   assert.ok(reach<UPPER_ARM+FOREARM-.01,`over-reached ${reach.toFixed(3)} m`);
   assert.ok(reach>.2,'elbow not crushed into the chest');
   // Forearm and upper arm keep their lengths (IK solved, not stretched).
   assert.ok(Math.abs(arm.elbowW.distanceTo(S)-UPPER_ARM)<1e-4);
  }
 }
});

test('shipped GLB carries the wheel as its own node and stays light',()=>{
 const glb=readFileSync(path.join(assetDir,'doom_pipe.glb'));
 assert.ok(glb.length<1_000_000,'under 1 MB');
 const jsonLen=glb.readUInt32LE(12);
 const json=JSON.parse(glb.subarray(20,20+jsonLen).toString('utf8'));
 const names=json.nodes.map((n:{name:string})=>n.name);
 assert.ok(names.includes('valveWheel')&&names.includes('pipeBody'));
 const wheel=json.nodes.find((n:{name:string})=>n.name==='valveWheel');
 // Meshopt quantisation folds its offset into the node, but the pivot must stay on the spin axis (x, y).
 assert.ok(Math.abs(wheel.translation[0])<.005&&Math.abs(wheel.translation[1]-11.43)<.01,'wheel node pivots on the hub axis');
 assert.equal(wheel.rotation,undefined,'wheel starts unrotated');
});
