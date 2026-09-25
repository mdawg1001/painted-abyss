/**
 * Phase 3 corridor guard mesh + locomotion.
 *
 * Quaternius Ultimate Animated Character — Soldier_Male (CC0 1.0):
 * https://quaternius.com/packs/ultimateanimatedcharacter.html
 * Authored Idle / Walk / Run skeletal clips (not procedural).
 *
 * Mixamo autorig of the prior Sketchfab WW2 Soviet Uniform was blocked
 * (Adobe OAuth on Mixamo API/site; no credentials in this environment).
 * SkeletonUtils.retarget onto that Unreal-style rig also failed — see
 * NOTICE.md and `scripts/retarget-guard-locomotion.mjs`.
 *
 * Scale: mesh AABB → ~1.90 m, feet on local y=0.
 * Always clone with `SkeletonUtils.clone` so skinned bind stays linked.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { mountTt33 } from './gunAsset';
import { addGuardFaceMorphs, buildGuardRig, makeGuardCombatState, type GuardRig, type GuardCombatState } from './guardCombatPose';
import { GUARD_OUTFIT_COLORS } from './simulation';

export const SOVIET_GUARD_SOURCE='https://quaternius.com/packs/ultimateanimatedcharacter.html';
export const SOVIET_GUARD_AUTHOR='Quaternius';
export const SOVIET_GUARD_LICENSE='CC0 1.0';
export const SOVIET_GUARD_PACK='Ultimate Animated Character Pack — Soldier_Male';
/** Prior Sketchfab mesh (CC BY) — Mixamo autorig blocked; retained for credit history only. */
export const SOVIET_GUARD_SKETCHFAB_PRIOR='https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99';
/** Public path — must match files under `playable/public/assets/soviet-uniform/`. */
export const SOVIET_GUARD_GLB='/assets/soviet-uniform/quaternius_soldier_male.glb';
/** True when shipped clips are procedural bake (should be false — real Quaternius clips). */
export const GUARD_LOCO_PROCEDURAL=false;
/**
 * Standing height in metres (feet → crown) from **mesh** extent.
 * Crown near player eye (`WALK_EYE_Y` = FLOOR_Y+1.6) and below hatch door (~2.3 m open).
 */
export const SOVIET_GUARD_HEIGHT=1.90;
/** Guard readability (tuned so face and uniform read without blowing out). */
export const GUARD_EMISSIVE_LIFT=.2;
export const GUARD_KEY_INTENSITY=6;
export const GUARD_RIM_INTENSITY=2.5;

/**
 * Ground speed baked into each authored clip at SOVIET_GUARD_HEIGHT (m/s).
 * Measured from the planted foot's backward slide during contact
 * (`tests/soviet-guard-gait.test.ts` re-measures the GLB and fails if these drift).
 * Stride rate is scaled from these so the planted foot stays locked to the floor.
 */
export const GUARD_WALK_CLIP_SPEED=1.05;
export const GUARD_RUN_CLIP_SPEED=2.65;
/** Walk→run blend band (m/s). Below the start it is pure walk, above the end pure run. */
export const GUARD_GAIT_BLEND_START=1.45;
export const GUARD_GAIT_BLEND_END=2.05;
/** Idle→walk blend band (m/s): the first steps out of a stand. */
export const GUARD_IDLE_BLEND_END=.45;

export type GuardLocomotionKind='idle'|'walk'|'run';

export type SovietGuardLocomotion={
 mixer:THREE.AnimationMixer;
 actions:Record<GuardLocomotionKind,THREE.AnimationAction>;
 /** Gait he is heading into (dominant target weight). */
 current:GuardLocomotionKind;
 skin:THREE.SkinnedMesh;
 /** Smoothed blend weights actually applied to the mixer. */
 weights:Record<GuardLocomotionKind,number>;
 /** Shared normalised gait phase (0..1) so walk and run feet stay in step while blending. */
 phase:number;
};

export type SovietGuardVisual={
 root:THREE.Group;
 /** Mesh pivot with feet on local y=0. */
 body:THREE.Object3D;
 ready:boolean;
 /** Child props toggled from this sentry's inventory. */
 gun:THREE.Object3D;
 bottle:THREE.Object3D;
 coat:THREE.Object3D;
 /** Skeletal idle/walk/run when clips + skinned mesh are ready. */
 loco:SovietGuardLocomotion|null;
 /** Warm key light carried with him (his own lamp) so he reads clearly in the dark. */
 fill:THREE.PointLight;
 rim:THREE.PointLight;
 /** Index into GUARD_OUTFIT_COLORS. */
 outfit:number;
 /** Bones for the procedural combat layer (null on the capsule stub). */
 rig:GuardRig|null;
 /** Smoothed combat-pose state (pelvis warp, stance, expression, breathing). */
 pose:GuardCombatState;
};

type GuardGltfBundle={
 scene:THREE.Object3D;
 clips:Record<GuardLocomotionKind,THREE.AnimationClip>;
};

let loadPromise:Promise<GuardGltfBundle>|null=null;

function clothMat(color:number,rough=.82){
 return new THREE.MeshStandardMaterial({
  color,roughness:rough,metalness:.05,
  emissive:0x1a1410,emissiveIntensity:.22,
 });
}

/** Capsule stand-in while the glTF loads (or if it fails). */
export function buildSovietGuardStub(cloth=0x4a5a3a){
 const body=new THREE.Group();
 body.name='sovietGuardBody';
 const h=SOVIET_GUARD_HEIGHT;
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.28,h*.42,6,10),clothMat(cloth));
 torso.position.y=h*.58;
 torso.castShadow=true;torso.receiveShadow=true;
 body.add(torso);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.16,12,10),clothMat(0xc4a882,.55));
 head.position.y=h*.92;
 head.castShadow=true;
 body.add(head);
 const helmet=new THREE.Mesh(new THREE.SphereGeometry(.18,12,8,0,Math.PI*2,0,Math.PI*.55),clothMat(0x3a4038,.7));
 helmet.position.y=h*.95;
 body.add(helmet);
 return body;
}

function findNamedBone(root:THREE.Object3D,names:string[]):THREE.Object3D|null{
 const want=new Set(names.map(n=>n.toLowerCase()));
 let found:THREE.Object3D|null=null;
 root.traverse(o=>{
  if(found)return;
  if(want.has(o.name.toLowerCase()))found=o;
 });
 return found;
}

function makeGearProps(root:THREE.Group){
 const gun=new THREE.Group();
 gun.name='guardGun';
 gun.userData.gunAlive=true;
 const stub=new THREE.Group();
 stub.name='gunStub';
 stub.userData.gunStub=true;
 const barrel=new THREE.Mesh(
  new THREE.BoxGeometry(.08,.08,.55),
  new THREE.MeshStandardMaterial({color:0x9aa3aa,metalness:.55,roughness:.4}),
 );
 // Chest-height stub until TT-33 mounts / hand bone parents.
 barrel.position.set(.32,SOVIET_GUARD_HEIGHT*.66,-.38);
 stub.add(barrel);
 gun.add(stub);
 mountTt33(gun,'guard');
 gun.visible=false;
 root.add(gun);

 const bottle=new THREE.Mesh(
  new THREE.CylinderGeometry(.06,.07,.32,10),
  new THREE.MeshStandardMaterial({color:0x3d8f62,roughness:.45,metalness:.15}),
 );
 bottle.name='guardBottle';
 bottle.position.set(-.34,SOVIET_GUARD_HEIGHT*.6,.1);
 bottle.visible=false;
 root.add(bottle);

 const coat=new THREE.Mesh(
  new THREE.CapsuleGeometry(.36,SOVIET_GUARD_HEIGHT*.32,4,8),
  new THREE.MeshStandardMaterial({color:0xc49662,roughness:.88,metalness:0,transparent:true,opacity:.72}),
 );
 coat.name='guardCoat';
 coat.position.y=SOVIET_GUARD_HEIGHT*.58;
 coat.visible=false;
 root.add(coat);

 return{gun,bottle,coat};
}

/** Parent the TT-33 to the right fist so it follows walk/run hand motion. */
export function mountGuardGunOnHand(body:THREE.Object3D,gun:THREE.Object3D){
 const fist=findNamedBone(body,['FistR','Hand_R','hand_r','mixamorigRightHand','RightHand']);
 if(!fist)return false;
 if(gun.parent)gun.parent.remove(gun);
 // Clear chest-stub layout; local offset in fist space (barrel forward −Z after fitTt33).
 gun.position.set(0.02,-0.02,-0.08);
 gun.rotation.set(0,0,0);
 gun.scale.set(1,1,1);
 fist.add(gun);
 return true;
}

/** Axis-aligned box of skeleton bones in world space (posed height). */
export function boneWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 const box=new THREE.Box3();
 let any=false;
 root.traverse(o=>{
  if(!(o as THREE.Bone).isBone)return;
  const p=new THREE.Vector3();
  o.getWorldPosition(p);
  if(!any){box.set(p,p);any=true;}
  else box.expandByPoint(p);
 });
 if(!any)box.setFromObject(root);
 return box;
}

/**
 * Visible mesh AABB. Authored standing pose → drawn height.
 */
export function meshWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 return new THREE.Box3().setFromObject(root);
}

/**
 * Scale so **mesh** crown→feet ≈ `targetHeight`, then put feet on local y=0.
 */
export function normalizeHumanoid(scene:THREE.Object3D,targetHeight=SOVIET_GUARD_HEIGHT){
 scene.scale.set(1,1,1);
 scene.position.set(0,0,0);
 scene.rotation.set(0,0,0);
 const box=meshWorldBox(scene);
 const height=Math.max(box.max.y-box.min.y,.001);
 const scale=targetHeight/height;
 scene.scale.setScalar(scale);
 const box2=meshWorldBox(scene);
 const center=box2.getCenter(new THREE.Vector3());
 scene.position.x-=center.x;
 scene.position.z-=center.z;
 scene.position.y-=box2.min.y;
 scene.updateMatrixWorld(true);
}

function litGuardMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.35;
   if(!sm.emissive)sm.emissive=new THREE.Color(0x000000);
   // A gentle lift in the material's own colour so cloth and skin keep their hue in the
   // murk. Kept low: the key/rim lights do the modelling, this only stops pure-black shadows.
   const base=sm.color?sm.color.clone():new THREE.Color(0x4a5a3a);
   sm.emissive.copy(base);
   sm.emissiveIntensity=GUARD_EMISSIVE_LIFT;
   sm.needsUpdate=true;
  }
 });
}

/**
 * Dye cloth (not skin or metal) so five clones read as a squad in different kits.
 * Materials are cloned so instances do not share a tint.
 */
export function tintGuardOutfit(root:THREE.Object3D,hex:number){
 const tint=new THREE.Color(hex);
 const olive=new THREE.Color(0x4a5a3a);
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const src=Array.isArray(o.material)?o.material:[o.material];
  const next=src.map(m=>{
   const sm=m.clone() as THREE.MeshStandardMaterial;
   if(!('color' in sm)||!sm.color)return sm;
   const name=`${sm.name||''} ${o.name||''}`.toLowerCase();
   if(/skin|face|head|hand|flesh|body/.test(name))return sm;
   const c=sm.color;
   const luma=.2126*c.r+.7152*c.g+.0722*c.b;
   if(luma>.42&&c.r>c.b+.05&&c.r>c.g*.8)return sm; // skin
   if('metalness' in sm&&(sm.metalness??0)>.45)return sm;
   // Keep value; shift hue toward this outfit from the authored olive.
   const dyed=c.clone().lerp(tint,.62);
   if(hex!==0x4a5a3a)c.copy(dyed);
   else c.lerp(olive,.15);
   if(sm.emissive){
    sm.emissive.copy(c);
    sm.emissiveIntensity=GUARD_EMISSIVE_LIFT;
   }
   sm.needsUpdate=true;
   return sm;
  });
  o.material=next.length===1?next[0]:next;
 });
}

function findSkinnedMesh(root:THREE.Object3D):THREE.SkinnedMesh|null{
 let skin:THREE.SkinnedMesh|null=null;
 root.traverse(o=>{
  if(!skin&&(o as THREE.SkinnedMesh).isSkinnedMesh)skin=o as THREE.SkinnedMesh;
 });
 return skin;
}

function pickLocoClips(anims:THREE.AnimationClip[]):Record<GuardLocomotionKind,THREE.AnimationClip>|null{
 const by=new Map(anims.map(a=>[a.name.toLowerCase(),a]));
 const idle=by.get('idle');
 const walk=by.get('walk');
 const run=by.get('run');
 if(!idle||!walk||!run)return null;
 idle.name='idle';walk.name='walk';run.name='run';
 return{idle,walk,run};
}

function loadGuardBundle(){
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  const gltf=await new GLTFLoader().loadAsync(SOVIET_GUARD_GLB);
  const scene=gltf.scene;
  scene.name='sovietGuardMesh';
  normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
  litGuardMaterials(scene);
  addGuardFaceMorphs(scene);
  const clips=pickLocoClips(gltf.animations);
  if(!clips)throw new Error('Guard GLB missing idle/walk/run clips');
  return{scene,clips};
 })().catch(err=>{
  console.warn('Soviet guard mesh failed to load; using stub.',err);
  loadPromise=null;
  throw err;
 });
 return loadPromise;
}

/** Attach AnimationMixer + idle/walk/run actions (mixer on body so bone tracks resolve). */
export function attachGuardLocomotion(
 body:THREE.Object3D,
 clips:Record<GuardLocomotionKind,THREE.AnimationClip>,
):SovietGuardLocomotion|null{
 const skin=findSkinnedMesh(body);
 if(!skin)return null;
 const mixer=new THREE.AnimationMixer(body);
 const actions={
  idle:mixer.clipAction(clips.idle),
  walk:mixer.clipAction(clips.walk),
  run:mixer.clipAction(clips.run),
 } as const;
 for(const a of Object.values(actions)){
  a.enabled=true;
  a.setLoop(THREE.LoopRepeat,Infinity);
  a.setEffectiveWeight(0);
  a.play();
 }
 // Gait clips are phase-driven by hand below; the mixer only evaluates them.
 actions.walk.timeScale=0;
 actions.run.timeScale=0;
 actions.idle.timeScale=1;
 actions.idle.setEffectiveWeight(1);
 return{mixer,actions,current:'idle',skin,weights:{idle:1,walk:0,run:0},phase:0};
}

const smooth01=(e0:number,e1:number,x:number)=>{const t=THREE.MathUtils.clamp((x-e0)/(e1-e0),0,1);return t*t*(3-2*t);};

/**
 * Target blend weights for a ground speed (a 1D blend space: idle → walk → run).
 * `turnRate` (rad/s) adds a small stepping-in-place walk layer while pivoting.
 */
export function guardGaitWeights(speed:number,turnRate=0):Record<GuardLocomotionKind,number>{
 const s=Math.max(0,speed);
 const move=smooth01(.02,GUARD_IDLE_BLEND_END,s);
 const run=smooth01(GUARD_GAIT_BLEND_START,GUARD_GAIT_BLEND_END,s);
 // Pivot footwork: feet shuffle while the body swings round on the spot.
 const pivot=(1-move)*THREE.MathUtils.clamp(Math.abs(turnRate)/2.4,0,1)*.45;
 const gait=Math.max(move,pivot);
 return{idle:1-gait,walk:gait*(1-run),run:gait*run};
}

/**
 * Drive idle / walk / run as a phase-synchronised blend space from real ground speed.
 *
 * - Stride rate comes from speed ÷ stride length, so the planted foot does not skate.
 * - Walk and run share one normalised phase, so crossing the blend band never
 *   double-steps or scissors the legs.
 * - Weights ease with a short time constant, so state flips never pop.
 */
export function updateGuardLocomotion(
 loco:SovietGuardLocomotion,
 dt:number,
 opts:{moving:boolean;speed:number;state:string;turnRate?:number;
  /** +1 walks forward; −1 plays the gait backwards (backpedalling while firing). */
  direction?:number},
){
 const speed=opts.moving?Math.max(0,opts.speed):0;
 const target=guardGaitWeights(speed,opts.turnRate??0);
 loco.current=target.run>=target.walk&&target.run>=target.idle?'run':target.walk>=target.idle?'walk':'idle';
 // Critically-damped-ish weight easing (~0.12 s): smooth but responsive.
 const k=1-Math.exp(-Math.max(0,dt)/.12);
 let sum=0;
 for(const kind of ['idle','walk','run'] as const){
  loco.weights[kind]+= (target[kind]-loco.weights[kind])*k;
  sum+=loco.weights[kind];
 }
 for(const kind of ['idle','walk','run'] as const){
  loco.actions[kind].setEffectiveWeight(sum>1e-6?loco.weights[kind]/sum:kind==='idle'?1:0);
 }
 // Phase: blended stride length (metres per full cycle) sets cycles per second.
 const walkClip=loco.actions.walk.getClip(),runClip=loco.actions.run.getClip();
 const walkStride=GUARD_WALK_CLIP_SPEED*walkClip.duration;
 const runStride=GUARD_RUN_CLIP_SPEED*runClip.duration;
 const gaitW=loco.weights.walk+loco.weights.run;
 const runMix=gaitW>1e-4?loco.weights.run/gaitW:0;
 const stride=THREE.MathUtils.lerp(walkStride,runStride,runMix);
 // While pivoting on the spot, shuffle at a slow walking cadence.
 const pivotCadence=Math.min(1,Math.abs(opts.turnRate??0)/2.4)*.55/walkClip.duration;
 const cycles=Math.max(speed/stride,pivotCadence);
 const dir=(opts.direction??1)<0?-1:1;
 loco.phase=((loco.phase+dir*cycles*Math.max(0,dt))%1+1)%1;
 loco.actions.walk.time=loco.phase*walkClip.duration;
 loco.actions.run.time=loco.phase*runClip.duration;
 loco.mixer.update(dt);
}

/** Root group: feet sit on world y when `root.position.y = FLOOR_Y`. */
export function createSovietGuardVisual(outfit=0):SovietGuardVisual{
 const root=new THREE.Group();
 root.name=`sovietGuard:${outfit}`;
 const cloth=GUARD_OUTFIT_COLORS[outfit]??GUARD_OUTFIT_COLORS[0];
 const body=buildSovietGuardStub(cloth);
 root.add(body);
 const props=makeGearProps(root);
 // Key: in front of his chest, like a lamp clipped to the webbing (he faces +Z).
 const fill=new THREE.PointLight(0xffe4c8,GUARD_KEY_INTENSITY,3.6,2);
 fill.name='guardFill';fill.position.set(.25,1.75,.9);fill.castShadow=false;
 const rim=new THREE.PointLight(0xa8c8ff,GUARD_RIM_INTENSITY,3,2);
 rim.name='guardRim';rim.position.set(-.3,2.1,-.7);rim.castShadow=false;
 root.add(fill,rim);
 return{root,body,ready:false,loco:null,fill,rim,outfit,rig:null,pose:makeGuardCombatState(outfit),...props};
}

/**
 * Swap the stub for the Quaternius soldier + attach authored loco clips.
 * Uses SkeletonUtils.clone so skinned bind pose stays linked to the bones.
 */
export async function upgradeSovietGuardVisual(visual:SovietGuardVisual){
 try{
  const {scene,clips}=await loadGuardBundle();
  if(visual.ready&&visual.body.name==='sovietGuardMesh')return visual;
  visual.root.remove(visual.body);
  const instance=cloneSkinned(scene);
  instance.name='sovietGuardMesh';
  tintGuardOutfit(instance,GUARD_OUTFIT_COLORS[visual.outfit]??GUARD_OUTFIT_COLORS[0]);
  visual.root.add(instance);
  visual.body=instance;
  visual.ready=true;
  mountGuardGunOnHand(instance,visual.gun);
  visual.loco=attachGuardLocomotion(instance,clips);
  visual.rig=buildGuardRig(instance);
  return visual;
 }catch{
  return visual;
 }
}

export function syncGuardGear(
 visual:SovietGuardVisual,
 inv:{gun:boolean;bottle:boolean;coat:boolean},
){
 visual.gun.visible=!!inv.gun;
 visual.bottle.visible=!!inv.bottle;
 visual.coat.visible=!!inv.coat;
}


const _bp=new THREE.Vector3(),_cp=new THREE.Vector3(),_cur=new THREE.Vector3(),_want=new THREE.Vector3();
const _qFull=new THREE.Quaternion(),_qDelta=new THREE.Quaternion(),_qWorld=new THREE.Quaternion(),_qParent=new THREE.Quaternion(),_qId=new THREE.Quaternion();
const _m=new THREE.Matrix4(),_up=new THREE.Vector3(0,1,0);
/** Rotate `bone` (weighted) so the direction bone→child points at `target`. */
function aimSegment(bone:THREE.Object3D,child:THREE.Object3D,target:THREE.Vector3,w:number){
 bone.updateWorldMatrix(true,false);child.updateWorldMatrix(false,false);
 bone.getWorldPosition(_bp);child.getWorldPosition(_cp);
 _cur.subVectors(_cp,_bp).normalize();_want.subVectors(target,_bp).normalize();
 if(_cur.lengthSq()<1e-8||_want.lengthSq()<1e-8)return;
 // (slerpQuaternions copies its first argument into `this`, so the full turn needs its own slot.)
 _qFull.setFromUnitVectors(_cur,_want);
 _qDelta.slerpQuaternions(_qId,_qFull,w);
 bone.getWorldQuaternion(_qWorld);
 _qWorld.premultiply(_qDelta);
 if(bone.parent){bone.parent.getWorldQuaternion(_qParent);_qParent.invert();_qWorld.premultiply(_qParent);}
 bone.quaternion.copy(_qWorld);
 bone.updateMatrixWorld(true);
}
/**
 * Pistol aim layered over the walk/idle clips: the right arm straightens toward the
 * target and the TT-33's barrel lines up on it. `w` 0..1 raises the gun; `recoil`
 * 0..1 kicks the muzzle up after a shot (decays in the caller).
 */
export function applyGuardAim(visual:SovietGuardVisual,target:THREE.Vector3,w:number,recoil=0){
 const body=visual.body;
 const upper=findNamedBone(body,['UpperArmR']),lower=findNamedBone(body,['LowerArmR']),fist=findNamedBone(body,['FistR']);
 if(!upper||!lower||!fist||w<=1e-3){
  visual.gun.quaternion.identity();
  return;
 }
 visual.root.updateMatrixWorld(true);
 // Kick: aim a little above the target while recoil is high.
 const kick=_want.set(0,.35*recoil,0);
 const t=target.clone().add(kick);
 aimSegment(upper,lower,t,w);
 aimSegment(lower,fist,t,w);
 // Barrel (−Z of the gun group) straight at the target.
 visual.gun.updateWorldMatrix(true,false);
 visual.gun.getWorldPosition(_bp);
 _m.lookAt(_bp,t,_up);
 _qWorld.setFromRotationMatrix(_m);
 if(visual.gun.parent){visual.gun.parent.getWorldQuaternion(_qParent);_qParent.invert();_qWorld.premultiply(_qParent);}
 visual.gun.quaternion.slerpQuaternions(_qId,_qWorld,w);
}
