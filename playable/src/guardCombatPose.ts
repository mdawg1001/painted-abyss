/**
 * Soviet guard combat body language, layered procedurally over the idle/walk/run clips.
 *
 * What AAA shooters do with human enemies, and what this reproduces with the three
 * clips the Quaternius rig ships with:
 *
 * - Lower body / upper body split. Legs run the locomotion blend space along the real
 *   ground velocity; the pelvis is "orientation warped" toward the strafe direction
 *   (UE5 Orientation Warping) while the spine counter-twists so chest, head and muzzle
 *   stay on the target. Moving away from the target plays the walk backwards (backpedal).
 * - Two-handed modified-isosceles pistol stance: both wrists meet on the gun on the line
 *   from the shoulders to the target, elbows soft and dropped, knees bent and hips
 *   lowered, shoulders leaning ahead of the hips for recoil control.
 * - Analytic two-bone IK keeps the feet planted where the clip put them while the hips
 *   drop, so the crouch bends the knees instead of sinking the boots into the floor.
 * - Recoil runs through the body: wrists kick up and back, chest and head rock back,
 *   eyes squeeze. Faster combat breathing and an idle weight shift keep him alive even
 *   when his feet are still.
 * - Facial expression: morph targets generated on the face mesh — brows knit down and
 *   in (corrugator), eyes narrow — plus blinks and a flinch on every shot.
 *
 * Yaw convention matches the rig and the sim: yaw 0 faces +Z, his left is +X.
 */
import * as THREE from 'three';

export type GuardRig={
 body:THREE.Object3D;
 pelvis:THREE.Object3D;hips:THREE.Object3D;abdomen:THREE.Object3D;torso:THREE.Object3D;
 neck:THREE.Object3D;head:THREE.Object3D;
 armL:[THREE.Object3D,THREE.Object3D,THREE.Object3D];
 armR:[THREE.Object3D,THREE.Object3D,THREE.Object3D];
 legL:[THREE.Object3D,THREE.Object3D,THREE.Object3D];
 legR:[THREE.Object3D,THREE.Object3D,THREE.Object3D];
 /** Each spine / head bone's forward (+Z of the body at bind) in that bone's local frame. */
 fwd:Map<THREE.Object3D,THREE.Vector3>;
 /** Face mesh carrying [anger, squeeze] morph targets, when found. */
 face:THREE.Mesh|null;
};

export type GuardCombatState={
 /** Pelvis yaw toward the strafe direction (rad, relative to heading). */
 warp:number;
 /** Travelling away from the target: legs play the walk backwards. */
 back:boolean;
 /** Smoothed 0..1 weights. */
 stance:number;anger:number;
 /** Seconds, for breathing / sway / blinks. */
 t:number;
 nextBlink:number;blink:number;
};

export function makeGuardCombatState(seed=0):GuardCombatState{
 return{warp:0,back:false,stance:0,anger:0,t:seed*1.37,nextBlink:2+seed%3,blink:0};
}

/** Hips lowered this far in the full stance (m): a slight, athletic knee bend. */
export const GUARD_STANCE_CROUCH=.085;
/** Shoulders ahead of the hips in the stance (rad). */
export const GUARD_STANCE_LEAN=.13;
/** Most the pelvis turns away from the chest toward the travel direction (rad). */
export const GUARD_MAX_WARP=1.25;
/** The TT-33 is drawn a touch over real size in his hands so it reads at range. */
export const GUARD_GUN_READ_SCALE=1.35;

function bone(root:THREE.Object3D,name:string){
 let found:THREE.Object3D|null=null;
 root.traverse(o=>{if(!found&&o.name===name)found=o;});
 return found as THREE.Object3D|null;
}

/**
 * Knitted brows and narrowed eyes as morph targets on the Quaternius face mesh
 * (Face material: two eyes and two brows). Call once on the source scene before cloning.
 */
export function addGuardFaceMorphs(scene:THREE.Object3D){
 scene.traverse(o=>{
  const mesh=o as THREE.Mesh;
  if(!mesh.isMesh||!mesh.geometry)return;
  const mat=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;
  if(!mat||mat.name!=='Face'||mesh.geometry.morphAttributes.position)return;
  const pos=mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
  const box=new THREE.Box3().setFromBufferAttribute(pos);
  const h=box.max.y-box.min.y;
  if(h<=0)return;
  // Brows are the top band of the face strip; eyes sit below.
  const browY=box.min.y+h*.66;
  const eyeC={l:0,r:0},eyeN={l:0,r:0};
  let innerX=Infinity,outerX=0;
  for(let i=0;i<pos.count;i++){
   const x=pos.getX(i),y=pos.getY(i);
   if(y<browY){const k=x>0?'l':'r';eyeC[k]+=y;eyeN[k]++;}
   else{innerX=Math.min(innerX,Math.abs(x));outerX=Math.max(outerX,Math.abs(x));}
  }
  const cy={l:eyeC.l/Math.max(1,eyeN.l),r:eyeC.r/Math.max(1,eyeN.r)};
  const anger=new Float32Array(pos.count*3),squeeze=new Float32Array(pos.count*3);
  for(let i=0;i<pos.count;i++){
   const x=pos.getX(i),y=pos.getY(i);
   if(y>=browY){
    // 1 at the inner (nose) end of the brow, 0 at the outer end.
    const u=THREE.MathUtils.clamp((outerX-Math.abs(x))/Math.max(1e-4,outerX-innerX),0,1);
    anger[i*3]=-Math.sign(x)*h*.07*u;
    anger[i*3+1]=-h*(.08+.3*u);
    anger[i*3+2]=h*.05*u;
    squeeze[i*3+1]=-h*.06;
   }else{
    const c=x>0?cy.l:cy.r;
    const above=y>c;
    // Narrow the eye: upper lid comes down more than the lower lid comes up.
    anger[i*3+1]=(c-y)*(above?.5:.3);
    squeeze[i*3+1]=(c-y)*(above?.92:.8);
   }
  }
  mesh.geometry.morphTargetsRelative=true;
  mesh.geometry.morphAttributes.position=[
   new THREE.Float32BufferAttribute(anger,3),
   new THREE.Float32BufferAttribute(squeeze,3),
  ];
  mesh.updateMorphTargets();
 });
}

/** Find the bones this layer drives and record each spine bone's bind-pose forward. */
export function buildGuardRig(body:THREE.Object3D):GuardRig|null{
 const n=(s:string)=>bone(body,s);
 const need=['Body_1','Hips','Abdomen','Torso','Neck','Head','UpperArmL','LowerArmL','FistL','UpperArmR','LowerArmR','FistR','UpperLegL','LowerLegL','FootL','UpperLegR','LowerLegR','FootR'];
 const b:Record<string,THREE.Object3D>={};
 for(const k of need){const o=n(k);if(!o)return null;b[k]=o;}
 let face:THREE.Mesh|null=null;
 body.traverse(o=>{
  const mesh=o as THREE.Mesh;
  if(!face&&mesh.isMesh&&mesh.morphTargetInfluences&&mesh.morphTargetInfluences.length>=2)face=mesh;
 });
 body.updateMatrixWorld(true);
 const bodyQ=body.getWorldQuaternion(new THREE.Quaternion());
 const fwdW=new THREE.Vector3(0,0,1).applyQuaternion(bodyQ);
 const fwd=new Map<THREE.Object3D,THREE.Vector3>();
 for(const k of ['Hips','Abdomen','Torso','Neck','Head']){
  const q=b[k].getWorldQuaternion(new THREE.Quaternion()).invert();
  fwd.set(b[k],fwdW.clone().applyQuaternion(q).normalize());
 }
 return{
  body,pelvis:b.Body_1,hips:b.Hips,abdomen:b.Abdomen,torso:b.Torso,neck:b.Neck,head:b.Head,
  armL:[b.UpperArmL,b.LowerArmL,b.FistL],armR:[b.UpperArmR,b.LowerArmR,b.FistR],
  legL:[b.UpperLegL,b.LowerLegL,b.FootL],legR:[b.UpperLegR,b.LowerLegR,b.FootR],
  fwd,face,
 };
}

/** The hand-mount offset the gun had before this layer first moved it. */
function gunBase(gun:THREE.Object3D):THREE.Vector3{
 return (gun.userData.handMount??=gun.position.clone()) as THREE.Vector3;
}

const wrap=(a:number)=>{a=(a+Math.PI)%(Math.PI*2);if(a<0)a+=Math.PI*2;return a-Math.PI;};

/**
 * Lower-body direction from the sim's ground velocity. Updates `st.warp` / `st.back`
 * and returns the gait direction (+1 forward, −1 backpedal) for the locomotion layer.
 */
export function updateGuardMoveFrame(st:GuardCombatState,vx:number,vz:number,heading:number,speed:number,dt:number){
 let want=0;
 if(speed>.12){
  const rel=wrap(Math.atan2(vx,vz)-heading);
  // Hysteresis round the sideways point so the legs do not flicker between modes.
  const a=Math.abs(rel);
  if(st.back?a<Math.PI*.5-.25:a>Math.PI*.5+.25)st.back=!st.back;
  want=st.back?wrap(rel-Math.PI):rel;
  want=THREE.MathUtils.clamp(want,-GUARD_MAX_WARP,GUARD_MAX_WARP);
 }else st.back=false;
 const k=1-Math.exp(-Math.max(0,dt)/.16);
 st.warp+=(want-st.warp)*k;
 return st.back?-1:1;
}

const _a=new THREE.Vector3(),_b=new THREE.Vector3(),_c=new THREE.Vector3(),_t=new THREE.Vector3();
const _v1=new THREE.Vector3(),_v2=new THREE.Vector3(),_ax=new THREE.Vector3(),_p=new THREE.Vector3();
const _q=new THREE.Quaternion(),_qw=new THREE.Quaternion(),_qp=new THREE.Quaternion(),_qi=new THREE.Quaternion();
const _saved=[new THREE.Quaternion(),new THREE.Quaternion()];
const UP=new THREE.Vector3(0,1,0);

/** Apply a world-space rotation `q` to `b` (about its own origin). */
function rotateWorld(b:THREE.Object3D,q:THREE.Quaternion){
 b.getWorldQuaternion(_qw);_qw.premultiply(q);
 if(b.parent){b.parent.getWorldQuaternion(_qp).invert();_qw.premultiply(_qp);}
 b.quaternion.copy(_qw);
 b.updateMatrixWorld(true);
}
function rotateAxis(b:THREE.Object3D,axis:THREE.Vector3,angle:number){
 if(Math.abs(angle)<1e-5)return;
 _q.setFromAxisAngle(axis,angle);rotateWorld(b,_q);
}
/** Turn `b` so its bind forward points along `dir` (weighted). */
function aimForward(rig:GuardRig,b:THREE.Object3D,dir:THREE.Vector3,w:number){
 const f=rig.fwd.get(b);if(!f||w<=0)return;
 b.getWorldQuaternion(_qw);
 _v1.copy(f).applyQuaternion(_qw).normalize();
 _q.setFromUnitVectors(_v1,dir);
 _qi.identity();
 _q.copy(_qi.slerp(_q,w));
 rotateWorld(b,_q);
}

/**
 * Exact analytic two-bone IK: bend the middle joint so the chain spans the target,
 * swing the root so the end lands on it, then roll the chain about the root→target
 * axis so the middle joint points toward `pole`. `endLocal` is the end point in the
 * lower bone's local space.
 */
function twoBoneIK(upper:THREE.Object3D,lower:THREE.Object3D,endLocal:THREE.Vector3,target:THREE.Vector3,pole:THREE.Vector3){
 upper.getWorldPosition(_a);lower.getWorldPosition(_b);_c.copy(endLocal);lower.localToWorld(_c);
 const lab=_a.distanceTo(_b),lcb=_b.distanceTo(_c);
 if(lab<1e-5||lcb<1e-5)return;
 const lat=THREE.MathUtils.clamp(_a.distanceTo(target),Math.abs(lab-lcb)+1e-4,(lab+lcb)*.9995);
 // 1. Bend at the middle joint to the interior angle the target distance needs.
 _v1.subVectors(_a,_b).normalize();_v2.subVectors(_c,_b).normalize();
 const cur=Math.acos(THREE.MathUtils.clamp(_v1.dot(_v2),-1,1));
 const want=Math.acos(THREE.MathUtils.clamp((lab*lab+lcb*lcb-lat*lat)/(2*lab*lcb),-1,1));
 _ax.crossVectors(_v1,_v2);
 if(_ax.lengthSq()<1e-10){
  // Straight limb: bend in the plane that contains the pole.
  _p.subVectors(pole,_b);_ax.crossVectors(_v1,_p);
  if(_ax.lengthSq()<1e-10)return;
 }
 _ax.normalize();
 rotateAxis(lower,_ax,want-cur);
 // 2. Swing the root so the end reaches the target.
 _c.copy(endLocal);lower.localToWorld(_c);
 _v1.subVectors(_c,_a).normalize();_v2.subVectors(target,_a).normalize();
 _q.setFromUnitVectors(_v1,_v2);rotateWorld(upper,_q);
 // 3. Roll about root→target so the knee / elbow faces the pole.
 lower.getWorldPosition(_b);
 const axis=_t.subVectors(target,_a).normalize();
 _v1.subVectors(_b,_a);_v1.addScaledVector(axis,-_v1.dot(axis));
 _v2.subVectors(pole,_a);_v2.addScaledVector(axis,-_v2.dot(axis));
 if(_v1.lengthSq()<1e-10||_v2.lengthSq()<1e-10)return;
 _v1.normalize();_v2.normalize();
 let roll=Math.acos(THREE.MathUtils.clamp(_v1.dot(_v2),-1,1));
 if(_ax.crossVectors(_v1,_v2).dot(axis)<0)roll=-roll;
 rotateAxis(upper,axis,roll);
}

/** Solve an arm onto `target`, blended with the clip pose by `w`. */
function armIK(chain:[THREE.Object3D,THREE.Object3D,THREE.Object3D],target:THREE.Vector3,pole:THREE.Vector3,w:number){
 const [u,l,e]=chain;
 _saved[0].copy(u.quaternion);_saved[1].copy(l.quaternion);
 twoBoneIK(u,l,e.position,target,pole);
 if(w<1){
  u.quaternion.slerpQuaternions(_saved[0],u.quaternion.clone(),w);
  l.quaternion.slerpQuaternions(_saved[1],l.quaternion.clone(),w);
  u.updateMatrixWorld(true);
 }
}

export type GuardCombatPoseInput={
 /** Point he is aiming at (player chest / eye), world. */
 target:THREE.Vector3;
 /** Gun raised 0..1 (sim `aim`). */
 aim:number;
 /** In a fight at all (alert / chase / search) — drives face and breathing. */
 engaged:boolean;
 /** Shot kick 0..1, decays in the caller. */
 recoil:number;
 /** Ground speed m/s. */
 speed:number;
 dt:number;
 /** 0..1 once he is shot down: face goes slack, eyes close. */
 down?:number;
 /** Close-attack wind-up progress 0..1 (hand drawn up and back over the shoulder). */
 melee?:number;
 /** Strike 1 → 0 just after the blow lands (arm thrust out at you). */
 strike?:number;
};

const _S=new THREE.Vector3(),_SL=new THREE.Vector3(),_SR=new THREE.Vector3(),_dir=new THREE.Vector3(),_dirH=new THREE.Vector3();
const _G=new THREE.Vector3(),_GL=new THREE.Vector3(),_left=new THREE.Vector3(),_pole=new THREE.Vector3();
const _footL=new THREE.Vector3(),_footR=new THREE.Vector3(),_endL=new THREE.Vector3(),_endR=new THREE.Vector3();
const _hp=new THREE.Vector3(),_bf=new THREE.Vector3(),_gp=new THREE.Vector3(),_m=new THREE.Matrix4();

/**
 * Pose the guard for this frame, after the locomotion mixer has written the clip pose.
 * Returns true when it posed the gun (so the caller skips the one-arm fallback).
 */
export function applyGuardCombatPose(rig:GuardRig,st:GuardCombatState,gun:THREE.Object3D,inp:GuardCombatPoseInput){
 const dt=Math.max(0,inp.dt);
 st.t+=dt;
 const kS=1-Math.exp(-dt/.22);
 st.stance+=((inp.aim>.02?1:0)-st.stance)*kS;
 st.anger+=((inp.engaged?1:0)-st.anger)*(1-Math.exp(-dt/.35));
 const w=THREE.MathUtils.clamp(inp.aim,0,1);
 const stance=st.stance*st.stance*(3-2*st.stance);
 const rec=THREE.MathUtils.clamp(inp.recoil,0,1);
 const body=rig.body;

 // --- Lower body: pelvis warp (whole rig turns; spine turns back below). ---
 body.rotation.y=st.warp;
 body.updateMatrixWorld(true);
 body.getWorldDirection(_bf);_bf.y=0;_bf.normalize();

 // --- Crouch with planted feet (and a slow weight shift when he is not travelling). ---
 const still=1-THREE.MathUtils.clamp(inp.speed/.6,0,1);
 const crouchM=GUARD_STANCE_CROUCH*stance+.012*rec;
 const swayM=.018*stance*still*Math.sin(st.t*.9);
 if(crouchM>1e-4||Math.abs(swayM)>1e-4){
  const [ul,ll,fl]=rig.legL,[ur,lr,fr]=rig.legR;
  fl.getWorldPosition(_footL);fr.getWorldPosition(_footR);
  _endL.copy(_footL);ll.worldToLocal(_endL);
  _endR.copy(_footR);lr.worldToLocal(_endR);
  const parent=rig.pelvis.parent!;
  parent.getWorldScale(_p);
  // Drop and shift in world metres, converted into the pelvis parent's space.
  _hp.copy(rig.pelvis.position);parent.localToWorld(_hp);
  _left.crossVectors(UP,_bf).normalize();
  _hp.y-=crouchM;_hp.addScaledVector(_left,swayM);
  parent.worldToLocal(_hp);
  rig.pelvis.position.copy(_hp);
  rig.pelvis.updateMatrixWorld(true);
  // Knees point forward and a touch outward.
  ll.getWorldPosition(_pole);_pole.addScaledVector(_bf,.5).addScaledVector(_left,.08);
  twoBoneIK(ul,ll,_endL,_footL,_pole);
  lr.getWorldPosition(_pole);_pole.addScaledVector(_bf,.5).addScaledVector(_left,-.08);
  twoBoneIK(ur,lr,_endR,_footR,_pole);
 }

 // --- Spine: counter the warp and square the chest up on the target. ---
 rig.torso.getWorldPosition(_p);
 _dir.subVectors(inp.target,_p);
 const flat=Math.hypot(_dir.x,_dir.z);
 _dirH.set(_dir.x,0,_dir.z);
 if(flat>1e-4)_dirH.divideScalar(flat);else _dirH.copy(_bf);
 const pitch=Math.atan2(_dir.y,Math.max(1e-4,flat));
 // Chest follows only part of the vertical aim; arms and head take the rest.
 const chestDir=_v2.copy(_dirH).multiplyScalar(Math.cos(pitch*.5));chestDir.y=Math.sin(pitch*.5);chestDir.normalize();
 // Out of the stance he still turns his upper body with the pelvis warp undone.
 const spineW=Math.max(stance,Math.min(1,Math.abs(st.warp)/.2));
 if(spineW>1e-3){
  const cd=chestDir.clone();
  aimForward(rig,rig.hips,cd,.3*spineW);
  aimForward(rig,rig.abdomen,cd,.5*spineW);
  aimForward(rig,rig.torso,cd,spineW);
 }
 // Shoulders ahead of the hips, combat breathing, and the recoil rocking him back.
 _left.crossVectors(UP,_dirH).normalize();
 const breathe=Math.sin(st.t*Math.PI*2*(.3+.18*st.anger));
 rotateAxis(rig.abdomen,_left,GUARD_STANCE_LEAN*stance*.6);
 rotateAxis(rig.torso,_left,GUARD_STANCE_LEAN*stance*.4+.018*breathe*(.5+st.anger)-.07*rec);

 // --- Two-handed isosceles grip on the line from the shoulders to the target. ---
 if(w>1e-3){
  const [ur,lr]=rig.armR,[ul,ll]=rig.armL;
  ur.getWorldPosition(_SR);ul.getWorldPosition(_SL);
  _S.addVectors(_SR,_SL).multiplyScalar(.5);
  lr.getWorldPosition(_p);
  const upperLen=_SR.distanceTo(_p);
  _c.copy(rig.armR[2].position);lr.localToWorld(_c);
  const armLen=upperLen+_p.distanceTo(_c);
  _dir.subVectors(inp.target,_S).normalize();
  _left.crossVectors(UP,_dir).normalize();
  // Soft elbows: wrists at ~90 % of full reach, just under the shoulder line (the
  // chunky helmeted head then sights down over the gun instead of hiding behind it),
  // kicked up and back by the shot.
  const reach=armLen*(.9-.1*rec);
  _G.copy(_S).addScaledVector(_dir,reach).addScaledVector(UP,-.05+.07*rec);
  // Support hand cups the grip from below and inside, so the slide stays in view.
  _GL.copy(_G).addScaledVector(_left,.04).addScaledVector(UP,-.07).addScaledVector(_dir,-.01);
  _pole.copy(_SR).addScaledVector(UP,-.45).addScaledVector(_left,-.35).addScaledVector(_dir,-.1);
  armIK(rig.armR,_G,_pole,w);
  _pole.copy(_SL).addScaledVector(UP,-.45).addScaledVector(_left,.35).addScaledVector(_dir,-.1);
  armIK(rig.armL,_GL,_pole,w);
 }

 // --- Close attack: a readable wind-up (hand back over the shoulder, torso turned away),
 // then a full-length thrust. Overrides the grip on the striking arm. ---
 const mel=THREE.MathUtils.clamp(inp.melee??0,0,1),stk=THREE.MathUtils.clamp(inp.strike??0,0,1);
 if(mel>0||stk>0){
  const [ur,lr]=rig.armR;
  ur.getWorldPosition(_SR);lr.getWorldPosition(_p);
  _c.copy(rig.armR[2].position);lr.localToWorld(_c);
  const armLen=_SR.distanceTo(_p)+_p.distanceTo(_c);
  _dir.subVectors(inp.target,_SR);_dir.y*=.4;_dir.normalize();
  _left.crossVectors(UP,_dir).normalize();
  const draw=mel*mel*(3-2*mel);
  _G.copy(_SR).addScaledVector(UP,.3).addScaledVector(_dir,-.14).addScaledVector(_left,-.14);
  _GL.copy(_SR).addScaledVector(_dir,armLen*.97).addScaledVector(UP,-.1);
  _G.lerp(_GL,stk);
  _pole.copy(_SR).addScaledVector(_left,-.45).addScaledVector(UP,.05-.4*stk);
  armIK(rig.armR,_G,_pole,Math.max(draw,stk));
  rotateAxis(rig.torso,UP,-.4*draw*(1-stk)+.3*stk);
 }

 // --- Head: eyes on the target, cheek dropped a touch toward the sights. ---
 rig.head.getWorldPosition(_p);
 _dir.subVectors(inp.target,_p).normalize();
 const headW=Math.max(stance,.35*st.anger);
 if(headW>1e-3){
  aimForward(rig,rig.neck,_dir,.45*headW);
  aimForward(rig,rig.head,_dir,headW);
  _left.crossVectors(UP,_dir).normalize();
  rotateAxis(rig.head,_left,.09*stance-.09*rec);
 }

 // --- Gun: seated on top of the fists, barrel (−Z) straight at the target, muzzle
 // rising with the kick. Slightly over-scaled so it reads against the chunky hands. ---
 if(w>1e-3){
  const fist=rig.armR[2];
  fist.getWorldPosition(_gp);
  _dir.subVectors(inp.target,_gp).normalize();
  _gp.addScaledVector(_dir,.075*w).addScaledVector(UP,.035*w);
  const base=gunBase(gun);
  if(gun.parent){
   gun.parent.updateWorldMatrix(true,false);
   gun.scale.setScalar(1+(GUARD_GUN_READ_SCALE-1)*w);
   gun.position.lerpVectors(base,gun.parent.worldToLocal(_c.copy(_gp)),w);
  }
  gun.updateWorldMatrix(true,false);
  gun.getWorldPosition(_gp);
  _t.copy(inp.target).addScaledVector(UP,.35*rec);
  _m.lookAt(_gp,_t,UP);
  _qw.setFromRotationMatrix(_m);
  if(gun.parent){gun.parent.getWorldQuaternion(_qp).invert();_qw.premultiply(_qp);}
  gun.quaternion.slerpQuaternions(_qi.identity(),_qw,w);
 }else{
  gun.quaternion.identity();gun.position.copy(gunBase(gun));gun.scale.setScalar(1);
 }

 // --- Face: knit brows and narrowed eyes when fighting; blinks; flinch on each shot. ---
 if(rig.face?.morphTargetInfluences){
  st.nextBlink-=dt;
  if(st.nextBlink<=0){st.blink=.14;st.nextBlink=2.2+((st.t*7.31)%1)*3.5;}
  st.blink=Math.max(0,st.blink-dt);
  const blink=st.blink>0?Math.sin(Math.PI*st.blink/.14):0;
  const down=THREE.MathUtils.clamp(inp.down??0,0,1);
  rig.face.morphTargetInfluences[0]=st.anger*(1-down);
  rig.face.morphTargetInfluences[1]=Math.min(1,Math.max(blink,rec*.85,down));
 }
 return w>1e-3;
}
