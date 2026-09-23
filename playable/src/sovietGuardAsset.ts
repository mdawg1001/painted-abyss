/**
 * Phase 3 corridor guard mesh + locomotion.
 *
 * Sketchfab “WW2 Soviet Uniform” by tnnv (CC BY 4.0):
 * https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99
 *
 * Runtime file: `public/assets/soviet-uniform/ww2_soviet_uniform.glb`
 * (Zenodo mirror of the same downloadable Sketchfab archive).
 *
 * Locomotion: Mixamo-quality procedural idle/walk/run clips on this skeleton
 * (`guard-locomotion.json`). Quaternius/Mixamo retarget attempted but rest-pose
 * axes incompatible — see NOTICE.md and `scripts/retarget-guard-locomotion.mjs`.
 *
 * Scale: size from **visible mesh AABB** (not bone-only), feet on local y=0.
 * Always clone with `SkeletonUtils.clone` so skinned bind stays linked.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { mountTt33 } from './gunAsset';

export const SOVIET_GUARD_SOURCE='https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99';
export const SOVIET_GUARD_AUTHOR='tnnv';
export const SOVIET_GUARD_LICENSE='CC BY 4.0';
export const SOVIET_GUARD_ZENODO='https://doi.org/10.5281/zenodo.10237261';
/** Public path — must match files under `playable/public/assets/soviet-uniform/`. */
export const SOVIET_GUARD_GLB='/assets/soviet-uniform/ww2_soviet_uniform.glb';
/** Retargeted Quaternius idle/walk/run clips (rotation tracks on this skeleton). */
export const SOVIET_GUARD_LOCOMOTION='/assets/soviet-uniform/guard-locomotion.json';
export const QUATERNIUS_UAL_SOURCE='https://quaternius.com/packs/universalanimationlibrary.html';
export const QUATERNIUS_UAL_LICENSE='CC0 1.0';
/** True when shipped clips are procedural (Mixamo retarget not yet viable on this rig). */
export const GUARD_LOCO_PROCEDURAL=true;
/**
 * Standing height in metres (feet → crown) from **mesh** extent.
 * Crown near player eye (`WALK_EYE_Y` = FLOOR_Y+1.6) and below hatch door (~2.3 m open).
 * Prior 1.78 bone-norm still read toy in play — force adult mesh height.
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

let loadPromise:Promise<THREE.Object3D>|null=null;
let locoPromise:Promise<Record<GuardLocomotionKind,THREE.AnimationClip>|null>|null=null;

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
 // Chest-height stub until TT-33 glTF mounts; y scales with adult guard height.
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
 * Visible mesh AABB. Sketchfab geometry is authored in a standing pose, so
 * `Box3.setFromObject` reflects the drawn height (not the toy bind helper).
 */
export function meshWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 return new THREE.Box3().setFromObject(root);
}

/**
 * Scale so **mesh** crown→feet ≈ `targetHeight`, then put feet on local y=0.
 * Mesh-extent (not bone-only) so the drawn guard matches corridor eye/door scale.
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

function loadGuardObject(){
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  try{
   const gltf=await new GLTFLoader().loadAsync(SOVIET_GUARD_GLB);
   const scene=gltf.scene;
   scene.name='sovietGuardMesh';
   normalizeHumanoid(scene,SOVIET_GUARD_HEIGHT);
   litGuardMaterials(scene);
   return scene;
  }catch(err){
   console.warn('Soviet guard mesh failed to load; using stub.',err);
   return buildSovietGuardStub();
  }
 })();
 return loadPromise;
}

function loadLocomotionClips(){
 if(locoPromise)return locoPromise;
 locoPromise=(async()=>{
  try{
   const res=await fetch(SOVIET_GUARD_LOCOMOTION);
   if(!res.ok)throw new Error(`HTTP ${res.status}`);
   const data=await res.json() as{
    clips:{idle:object;walk:object;run:object};
   };
   const idle=THREE.AnimationClip.parse(data.clips.idle as THREE.AnimationClipJSON);
   const walk=THREE.AnimationClip.parse(data.clips.walk as THREE.AnimationClipJSON);
   const run=THREE.AnimationClip.parse(data.clips.run as THREE.AnimationClipJSON);
   idle.name='idle';walk.name='walk';run.name='run';
   return{idle,walk,run};
  }catch(err){
   console.warn('Guard locomotion clips failed to load.',err);
   return null;
  }
 })();
 return locoPromise;
}

/** Attach AnimationMixer + idle/walk/run actions to a skinned guard instance. */
export function attachGuardLocomotion(
 body:THREE.Object3D,
 clips:Record<GuardLocomotionKind,THREE.AnimationClip>,
):SovietGuardLocomotion|null{
 const skin=findSkinnedMesh(body);
 if(!skin)return null;
 const mixer=new THREE.AnimationMixer(skin);
 const actions={
  idle:mixer.clipAction(clips.idle),
  walk:mixer.clipAction(clips.walk),
  run:mixer.clipAction(clips.run),
 } as const;
 for(const a of Object.values(actions)){
  a.enabled=true;
  a.setEffectiveWeight(0);
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
 * Swap the stub for the authored Sketchfab glTF when ready.
 * Uses SkeletonUtils.clone so skinned bind pose stays linked to the bones
 * (plain `clone(true)` left a toy-sized bind-pose mesh in the corridor).
 */
export async function upgradeSovietGuardVisual(visual:SovietGuardVisual){
 const mesh=await loadGuardObject();
 if(visual.ready&&visual.body.name==='sovietGuardMesh')return visual;
 visual.root.remove(visual.body);
 // Skinned FBX: plain clone(true) detaches skin → bind-pose toy. SkeletonUtils keeps bones.
 const instance=mesh.name==='sovietGuardMesh'?cloneSkinned(mesh):mesh.clone(true);
 instance.name='sovietGuardMesh';
 visual.root.add(instance);
 visual.body=instance;
 visual.ready=true;
 const clips=await loadLocomotionClips();
 if(clips)visual.loco=attachGuardLocomotion(instance,clips);
 return visual;
}

export function syncGuardGear(
 visual:SovietGuardVisual,
 inv:{gun:boolean;bottle:boolean;coat:boolean},
){
 visual.gun.visible=!!inv.gun;
 visual.bottle.visible=!!inv.bottle;
 visual.coat.visible=!!inv.coat;
}
