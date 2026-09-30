/**
 * Both of the diver's hands and arms while working the leak valve.
 *
 * Hands are world-space objects (not camera children) so a hand that is holding
 * the rim is locked to the rim: it travels with the wheel and cannot drift when
 * the head moves. Arms are solved every frame with two-bone IK from shoulders
 * that ride with the camera, so elbows bend and swing the way the hand path
 * demands instead of being keyframed.
 *
 * Grip model: the rim band is the "handle" of the fist frame from diverHand.ts
 * (origin on the rim centreline, +Y along the rim). The free choice is the roll
 * of the hand round the rim. On a handwheel at chest height people hold it the
 * way they hold a steering wheel: palm on the front face, knuckles pointing out
 * past the rim and tipped a little away, fingers hooked over the outside edge
 * and round the back. GRIP_ROLL sets how far the knuckles tip away.
 */
import * as THREE from 'three';
import { buildDiverHand, makeHandMaterials, WRIST_POS, type HandMaterials } from './diverHand';
import { WHEEL_CENTRE, WHEEL_RIM_R, type HandPose } from './valve';

/** Upper arm (shoulder → elbow) and forearm (elbow → wrist) of an adult, metres. */
export const UPPER_ARM=.3;
export const FOREARM=.27;
/** Shoulder joint centres in camera space (x right, y up, −z ahead), leaning into the wheel. */
export const SHOULDER_R=new THREE.Vector3(.19,-.28,.02);
export const SHOULDER_L=new THREE.Vector3(-.19,-.28,.02);
/** Camera-space rest point the hands drop to when they are off the wheel. */
const REST_R=new THREE.Vector3(.2,-.55,-.18);
const REST_L=new THREE.Vector3(-.2,-.55,-.18);

const AXIS=new THREE.Vector3(0,0,1); // wheel spin axis, pointing at the player
/** Knuckles tipped this far from radial-outward toward the back of the wheel. */
export const GRIP_ROLL=THREE.MathUtils.degToRad(28);
const FINGERS:[string,number][]=[['handIndex',.031],['handMiddle',.0105],['handRing',-.0095],['handPinky',-.0275]];

type Arm={
 side:1|-1;
 hand:THREE.Group;
 /** Finger pivots at the knuckles, thumb pivot at the CMC joint. */
 fingers:THREE.Group[];thumb:THREE.Group;
 forearm:THREE.Mesh;upper:THREE.Mesh;elbow:THREE.Mesh;
 /** Last solved elbow (world), used to seed the next frame's wrist roll. */
 elbowW:THREE.Vector3;
};
export type ValveHandsRig={root:THREE.Group;right:Arm;left:Arm;mats:HandMaterials};

/** Re-parent a group under a pivot at `at` so rotating the pivot rotates about that joint. */
function pivotAbout(child:THREE.Object3D,at:THREE.Vector3):THREE.Group{
 const parent=child.parent!;
 const pivot=new THREE.Group();pivot.position.copy(at);
 parent.add(pivot);parent.remove(child);
 child.position.sub(at);pivot.add(child);
 return pivot;
}

function makeArm(side:1|-1,mats:HandMaterials):Arm{
 const hand=buildDiverHand(mats,new THREE.Vector3(0,0,-1));
 hand.name=side>0?'valveHandRight':'valveHandLeft';
 // The static forearm and cuff are replaced by the IK sleeve below, which leaves the wrist wherever the elbow is.
 for(const name of ['handForearm','handCuff','handStrap']){const o=hand.getObjectByName(name);if(o)o.visible=false;}
 const fingers=FINGERS.map(([name,y])=>pivotAbout(hand.getObjectByName(name)!,new THREE.Vector3(-.03,y,.006)));
 const thumb=pivotAbout(hand.getObjectByName('handThumb')!,new THREE.Vector3(-.03,.03,-.062));
 hand.matrixAutoUpdate=false;
 // Unit cylinders stretched between joints each frame; wetsuit taper toward the wrist.
 const forearm=new THREE.Mesh(new THREE.CylinderGeometry(.043,.031,1,18,1,false),mats.sleeve);
 const upper=new THREE.Mesh(new THREE.CylinderGeometry(.055,.046,1,18,1,true),mats.sleeve);
 const elbow=new THREE.Mesh(new THREE.SphereGeometry(.045,16,12),mats.sleeve);
 for(const m of [forearm,upper,elbow]){m.frustumCulled=false;m.castShadow=false;m.receiveShadow=false;}
 return{side,hand,fingers,thumb,forearm,upper,elbow,elbowW:new THREE.Vector3()};
}

export function createValveHands(mats:HandMaterials=makeHandMaterials()):ValveHandsRig{
 const root=new THREE.Group();root.name='valveHands';root.visible=false;
 const right=makeArm(1,mats),left=makeArm(-1,mats);
 for(const a of [right,left])root.add(a.hand,a.forearm,a.upper,a.elbow);
 return{root,right,left,mats};
}

/** Fingers uncurl about the knuckles (index first, pinky last); the thumb swings clear. */
function setOpen(arm:Arm,open:number){
 arm.fingers.forEach((f,i)=>{
  const lag=Math.max(0,Math.min(1,open*1.15-i*.05));
  f.rotation.y=-1.05*lag;
 });
 arm.thumb.rotation.z=.6*open;
 arm.thumb.rotation.x=-.25*open;
}

const _v=new THREE.Vector3(),_w=new THREE.Vector3(),_d=new THREE.Vector3(),_n=new THREE.Vector3();
const _x=new THREE.Vector3(),_y=new THREE.Vector3(),_z=new THREE.Vector3(),_t=new THREE.Vector3(),_r=new THREE.Vector3();
const _m=new THREE.Matrix4(),_mirror=new THREE.Matrix4().makeScale(-1,1,1);
const _q=new THREE.Quaternion(),_qa=new THREE.Quaternion(),_qb=new THREE.Quaternion();
const _pa=new THREE.Vector3(),_pb=new THREE.Vector3(),_s=new THREE.Vector3();

/**
 * Two-bone IK. Elbow for shoulder S and wrist W, bending toward `pole`.
 * Unreachable targets straighten the arm along S→W.
 */
export function solveElbow(S:THREE.Vector3,W:THREE.Vector3,pole:THREE.Vector3,out:THREE.Vector3,l1=UPPER_ARM,l2=FOREARM){
 _d.subVectors(W,S);
 const dist=Math.max(Math.abs(l1-l2)+1e-4,Math.min(l1+l2-1e-4,_d.length()));
 _d.normalize();
 const a=(l1*l1-l2*l2+dist*dist)/(2*dist);
 const h=Math.sqrt(Math.max(0,l1*l1-a*a));
 _n.copy(pole).addScaledVector(_d,-pole.dot(_d));
 if(_n.lengthSq()<1e-8)_n.set(0,-1,0).addScaledVector(_d,_d.y).normalize();else _n.normalize();
 return out.copy(S).addScaledVector(_d,a).addScaledVector(_n,h);
}

/** Stretch a unit Y-cylinder between a and b. */
function span(mesh:THREE.Mesh,a:THREE.Vector3,b:THREE.Vector3){
 _s.subVectors(b,a);const len=_s.length();
 mesh.position.copy(a).add(b).multiplyScalar(.5);
 mesh.quaternion.setFromUnitVectors(THREE.Object3D.DEFAULT_UP,_s.divideScalar(len||1));
 mesh.scale.set(1,len,1);
}

/**
 * Fist-frame matrix for a hand holding (or hovering over) the rim at clock angle
 * φ, rolled so the forearm leaves toward `elbow`.
 */
function gripMatrix(side:1|-1,pose:HandPose,elbow:THREE.Vector3,out:THREE.Matrix4){
 const phi=pose.phi;
 _r.set(Math.sin(phi),Math.cos(phi),0);                 // radial, outward
 _t.crossVectors(AXIS,_r);                              // rim tangent (anticlockwise as the player sees it)
 // Centre of the rim band, peeled off toward the player and outward while not holding.
 _v.set(WHEEL_CENTRE.x,WHEEL_CENTRE.y,WHEEL_CENTRE.z).addScaledVector(_r,WHEEL_RIM_R+pose.lift*.45).addScaledVector(AXIS,pose.lift);
 // Knuckles: outward past the rim, tipped back by GRIP_ROLL (steering-wheel hold).
 void elbow;
 _z.copy(_r).multiplyScalar(Math.cos(GRIP_ROLL)).addScaledVector(AXIS,-Math.sin(GRIP_ROLL)).normalize();
 if(side>0){_y.copy(_t);_x.crossVectors(_y,_z);out.makeBasis(_x,_y,_z);}
 else{_y.copy(_t).negate();_x.crossVectors(_y,_z);out.makeBasis(_x,_y,_z).multiply(_mirror);}
 out.setPosition(_v);
 return out;
}

function poseArm(arm:Arm,pose:HandPose,camera:THREE.Camera,shoulderCam:THREE.Vector3,restCam:THREE.Vector3){
 const S=_pa.copy(shoulderCam).applyMatrix4(camera.matrixWorld);
 // Elbows hang down and out, a little behind the hands.
 const pole=_pb.set(arm.side*.55,-1,.25).transformDirection(camera.matrixWorld);
 // Seed: previous elbow, or a point under the shoulder on the first frame.
 if(arm.elbowW.lengthSq()===0)arm.elbowW.copy(S).addScaledVector(pole,.2);
 // Two passes: roll the grip to the elbow, then solve the elbow for the new wrist.
 for(let i=0;i<2;i++){
  gripMatrix(arm.side,pose,arm.elbowW,_m);
  _w.set(WRIST_POS.x,WRIST_POS.y,WRIST_POS.z).applyMatrix4(_m);
  solveElbow(S,_w,pole,arm.elbowW);
 }
 // Blend toward the off-screen rest pose (hands dropping away / coming up).
 if(pose.away>0){
  const rest=_v.copy(restCam).applyMatrix4(camera.matrixWorld);
  _m.decompose(_pa,_qa,_s);
  const k=pose.away;
  _qb.setFromRotationMatrix(camera.matrixWorld).multiply(_q.setFromEuler(new THREE.Euler(-.9,0,arm.side*-.4)));
  if(arm.side<0){/* mirrored basis keeps its reflection in the scale */}
  _pa.lerp(rest,k);_qa.slerp(_qb,k);
  _m.compose(_pa,_qa,_s);
  _w.set(WRIST_POS.x,WRIST_POS.y,WRIST_POS.z).applyMatrix4(_m);
  solveElbow(_pb.copy(shoulderCam).applyMatrix4(camera.matrixWorld),_w,_v.set(arm.side*.55,-1,.25).transformDirection(camera.matrixWorld),arm.elbowW);
 }
 arm.hand.matrix.copy(_m);arm.hand.matrixWorldNeedsUpdate=true;
 setOpen(arm,pose.open);
 // Sleeve from the wrist to the elbow, upper arm to the shoulder.
 const cuff=_pb.set(WRIST_POS.x,WRIST_POS.y,WRIST_POS.z-.012).applyMatrix4(_m);
 span(arm.forearm,cuff,arm.elbowW);
 const Sw=_v.copy(shoulderCam).applyMatrix4(camera.matrixWorld);
 span(arm.upper,arm.elbowW,Sw);
 arm.elbow.position.copy(arm.elbowW);
}

/** Pose both arms. Call after the camera's matrixWorld is current for this frame. */
export function poseValveHands(rig:ValveHandsRig,camera:THREE.Camera,right:HandPose,left:HandPose){
 camera.updateMatrixWorld();
 poseArm(rig.right,right,camera,SHOULDER_R,REST_R);
 poseArm(rig.left,left,camera,SHOULDER_L,REST_L);
}

/** Forget last elbows so the next reach starts clean. */
export function resetValveHands(rig:ValveHandsRig){rig.right.elbowW.set(0,0,0);rig.left.elbowW.set(0,0,0);}
