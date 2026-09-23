/**
 * Phase 3 corridor guard mesh.
 *
 * Sketchfab “WW2 Soviet Uniform” by tnnv (CC BY 4.0):
 * https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99
 *
 * Runtime file: `public/assets/soviet-uniform/ww2_soviet_uniform.glb`
 * (Zenodo mirror of the same downloadable Sketchfab archive).
 *
 * Scale note: this is a skinned Sketchfab FBX. `Object3D.clone` breaks the
 * skeleton so the mesh sticks in bind pose (~toy height). Always clone with
 * `SkeletonUtils.clone`. Size from **visible mesh** world height (not bone
 * helpers alone) to match corridor door panels / player eye.
 *
 * Animation: the authored glTF has no clips — drive a procedural idle/walk
 * on the Unreal-style skeleton so patrol is clearly alive.
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

/**
 * Standing mesh height in metres (feet → crown).
 * Corridor refs: hatch door panels are 2.6 m tall; player eye is FLOOR_Y+1.6.
 * Prior 1.78 m bone-extent still read toy in play — size the **visible mesh**
 * to a clear adult so the crown sits near eye height when feet are on FLOOR_Y.
 */
export const SOVIET_GUARD_HEIGHT=1.85;
/** Hatch door panel height (CaveWorld breath hatch BoxGeometry y). */
export const CORRIDOR_DOOR_PANEL_H=2.6;
/** Standing eye height above FLOOR_Y (simulation WALK_EYE_Y − FLOOR_Y). */
export const CORRIDOR_EYE_ABOVE_FLOOR=1.6;

type GuardBones={
 thighL:THREE.Bone|null;
 thighR:THREE.Bone|null;
 calfL:THREE.Bone|null;
 calfR:THREE.Bone|null;
 spine:THREE.Bone|null;
 spine2:THREE.Bone|null;
 upperL:THREE.Bone|null;
 upperR:THREE.Bone|null;
 rest:Map<THREE.Bone,THREE.Quaternion>;
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
 /** Procedural stride phase (radians). */
 animPhase:number;
 /** Cached skeleton handles for idle/walk. */
 bones:GuardBones|null;
 /** Last sim XZ — used to detect real movement vs water stop. */
 lastXZ:{x:number;z:number}|null;
};

let loadPromise:Promise<THREE.Object3D>|null=null;

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

/** Axis-aligned box of skeleton bones in world space. */
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

/** Visible mesh AABB in world space (what the player actually sees). */
export function meshWorldBox(root:THREE.Object3D):THREE.Box3{
 root.updateMatrixWorld(true);
 const box=new THREE.Box3();
 let any=false;
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  const b=new THREE.Box3().setFromObject(o);
  if(b.isEmpty())return;
  if(!any){box.copy(b);any=true;}
  else box.union(b);
 });
 if(!any)return boneWorldBox(root);
 return box;
}

/**
 * Scale so **visible mesh** feet→crown ≈ `targetHeight`, then put feet on local y=0.
 * Must run on the authored skinned graph (not a broken Object3D.clone).
 */
export function normalizeHumanoid(scene:THREE.Object3D,targetHeight=SOVIET_GUARD_HEIGHT){
 scene.scale.set(1,1,1);
 scene.position.set(0,0,0);
 scene.rotation.set(0,0,0);
 const box=meshWorldBox(scene);
 const height=Math.max(box.max.y-box.min.y,.001);
 scene.scale.setScalar(targetHeight/height);
 const box2=meshWorldBox(scene);
 const center=box2.getCenter(new THREE.Vector3());
 scene.position.x-=center.x;
 scene.position.z-=center.z;
 scene.position.y-=box2.min.y;
 scene.updateMatrixWorld(true);
}

function findBone(root:THREE.Object3D,re:RegExp):THREE.Bone|null{
 let hit:THREE.Bone|null=null;
 root.traverse(o=>{
  if(hit||!(o as THREE.Bone).isBone)return;
  if(re.test(o.name))hit=o as THREE.Bone;
 });
 return hit;
}

function captureRest(bones:GuardBones){
 bones.rest.clear();
 for(const b of [bones.thighL,bones.thighR,bones.calfL,bones.calfR,bones.spine,bones.spine2,bones.upperL,bones.upperR]){
  if(b)bones.rest.set(b,b.quaternion.clone());
 }
}

/** Bind procedural idle/walk handles after the skinned mesh is mounted. */
export function bindGuardBones(body:THREE.Object3D):GuardBones{
 const bones:GuardBones={
  thighL:findBone(body,/thigh_l/i),
  thighR:findBone(body,/thigh_r/i),
  calfL:findBone(body,/calf_l/i),
  calfR:findBone(body,/calf_r/i),
  spine:findBone(body,/spine_01/i),
  spine2:findBone(body,/spine_02/i),
  upperL:findBone(body,/upperarm_l/i),
  upperR:findBone(body,/upperarm_r/i),
  rest:new Map(),
 };
 captureRest(bones);
 return bones;
}

function applyBone(b:THREE.Bone|null,rest:Map<THREE.Bone,THREE.Quaternion>,euler:THREE.Euler){
 if(!b)return;
 const base=rest.get(b);if(!base)return;
 const q=new THREE.Quaternion().setFromEuler(euler);
 b.quaternion.copy(base).multiply(q);
}

/**
 * Procedural idle / walk. The WW2 Soviet Uniform GLB ships with **zero** clips;
 * this drives the Unreal-style skeleton so he is clearly alive on patrol and
 * settles to a breathing idle when stopped (water edge / alert).
 */
export function updateGuardAnimation(visual:SovietGuardVisual,dt:number,walking:boolean){
 if(!visual.bones){
  if(visual.ready)visual.bones=bindGuardBones(visual.body);
  else return;
 }
 const b=visual.bones;
 const rate=walking?7.2:2.4;
 visual.animPhase+=dt*rate;
 const t=visual.animPhase;
 if(walking){
  const swing=.55;
  const calf=.7;
  applyBone(b.thighL,b.rest,new THREE.Euler(Math.sin(t)*swing,0,0));
  applyBone(b.thighR,b.rest,new THREE.Euler(Math.sin(t+Math.PI)*swing,0,0));
  applyBone(b.calfL,b.rest,new THREE.Euler(Math.max(0,-Math.sin(t))*calf,0,0));
  applyBone(b.calfR,b.rest,new THREE.Euler(Math.max(0,-Math.sin(t+Math.PI))*calf,0,0));
  applyBone(b.spine,b.rest,new THREE.Euler(Math.sin(t*2)*.04,Math.sin(t)*.06,0));
  applyBone(b.spine2,b.rest,new THREE.Euler(0,Math.sin(t)*.05,0));
  applyBone(b.upperL,b.rest,new THREE.Euler(Math.sin(t+Math.PI)*.35,0,.12));
  applyBone(b.upperR,b.rest,new THREE.Euler(Math.sin(t)*.35,0,-.12));
 }else{
  const breath=Math.sin(t)*.025;
  applyBone(b.thighL,b.rest,new THREE.Euler(.04,0,.02));
  applyBone(b.thighR,b.rest,new THREE.Euler(.04,0,-.02));
  applyBone(b.calfL,b.rest,new THREE.Euler(.08,0,0));
  applyBone(b.calfR,b.rest,new THREE.Euler(.08,0,0));
  applyBone(b.spine,b.rest,new THREE.Euler(breath,.0,0));
  applyBone(b.spine2,b.rest,new THREE.Euler(breath*.6,0,0));
  applyBone(b.upperL,b.rest,new THREE.Euler(.08,0,.15));
  applyBone(b.upperR,b.rest,new THREE.Euler(.08,0,-.15));
 }
 visual.body.updateMatrixWorld(true);
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

function loadGuardObject(){
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  try{
   const gltf=await new GLTFLoader().loadAsync(SOVIET_GUARD_GLB);
   const scene=gltf.scene;
   scene.name='sovietGuardMesh';
   // Authored archive has no AnimationClips — procedural idle/walk instead.
   if(gltf.animations?.length){
    console.info('Soviet guard glTF clips:',gltf.animations.map(a=>a.name));
   }
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

/** Root group: feet sit on world y when `root.position.y = FLOOR_Y`. */
export function createSovietGuardVisual():SovietGuardVisual{
 const root=new THREE.Group();
 root.name='sovietGuard';
 const body=buildSovietGuardStub();
 root.add(body);
 const props=makeGearProps(root);
 return{root,body,ready:false,animPhase:0,bones:null,lastXZ:null,...props};
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
 visual.bones=bindGuardBones(instance);
 visual.animPhase=0;
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
