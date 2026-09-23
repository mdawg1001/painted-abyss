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

/** Native clip travel speeds (m/s) used to match stride rate to AI move speed. */
export const GUARD_WALK_CLIP_SPEED=1.2;
export const GUARD_RUN_CLIP_SPEED=2.15;

export type GuardLocomotionKind='idle'|'walk'|'run';

export type SovietGuardLocomotion={
 mixer:THREE.AnimationMixer;
 actions:Record<GuardLocomotionKind,THREE.AnimationAction>;
 current:GuardLocomotionKind;
 skin:THREE.SkinnedMesh;
};

export type SovietGuardVisual={
 root:THREE.Group;
 /** Mesh pivot with feet on local y=0. */
 body:THREE.Object3D;
 ready:boolean;
 /** Child props toggled from mission.guard inventory. */
 gun:THREE.Object3D;
 bottle:THREE.Object3D;
 coat:THREE.Object3D;
 /** Skeletal idle/walk/run when clips + skinned mesh are ready. */
 loco:SovietGuardLocomotion|null;
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
export function buildSovietGuardStub(){
 const body=new THREE.Group();
 body.name='sovietGuardBody';
 const h=SOVIET_GUARD_HEIGHT;
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.28,h*.42,6,10),clothMat(0x4a5a3a));
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
   // Soft lift so olive cloth reads under corridor murk.
   sm.emissive.lerp(new THREE.Color(0x2a3220),.15);
   sm.emissiveIntensity=Math.max(sm.emissiveIntensity,.18);
   sm.needsUpdate=true;
  }
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
  a.setEffectiveWeight(0);
  a.setLoop(THREE.LoopRepeat,Infinity);
  a.play();
 }
 actions.idle.setEffectiveWeight(1);
 actions.idle.timeScale=1;
 return{mixer,actions,current:'idle',skin};
}

/**
 * Pick idle / walk / run from AI motion, crossfade, and match stride rate.
 * `moving` false → idle (water edge / stand). Chase → run; other travel → walk.
 */
export function updateGuardLocomotion(
 loco:SovietGuardLocomotion,
 dt:number,
 opts:{moving:boolean;speed:number;state:string},
){
 let want:GuardLocomotionKind='idle';
 if(opts.moving&&opts.speed>.08){
  want=(opts.state==='chase'&&opts.speed>=1.6)?'run':'walk';
 }
 if(want!==loco.current){
  const fade=.28;
  loco.actions[loco.current].fadeOut(fade);
  const next=loco.actions[want];
  next.reset().setEffectiveWeight(1).fadeIn(fade);
  loco.current=want;
 }
 // Stride rate ≈ moveSpeed / clip reference speed (no skating).
 if(loco.current==='walk'){
  loco.actions.walk.timeScale=THREE.MathUtils.clamp(opts.speed/GUARD_WALK_CLIP_SPEED,.55,1.45);
 }else if(loco.current==='run'){
  loco.actions.run.timeScale=THREE.MathUtils.clamp(opts.speed/GUARD_RUN_CLIP_SPEED,.65,1.35);
 }else{
  loco.actions.idle.timeScale=1;
 }
 loco.mixer.update(dt);
}

/** Root group: feet sit on world y when `root.position.y = FLOOR_Y`. */
export function createSovietGuardVisual():SovietGuardVisual{
 const root=new THREE.Group();
 root.name='sovietGuard';
 const body=buildSovietGuardStub();
 root.add(body);
 const props=makeGearProps(root);
 return{root,body,ready:false,loco:null,...props};
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
  visual.root.add(instance);
  visual.body=instance;
  visual.ready=true;
  mountGuardGunOnHand(instance,visual.gun);
  visual.loco=attachGuardLocomotion(instance,clips);
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
