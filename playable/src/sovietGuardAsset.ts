/**
 * Phase 3 corridor guard mesh.
 *
 * Sketchfab “WW2 Soviet Uniform” by tnnv (CC BY 4.0):
 * https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99
 *
 * Runtime file: `public/assets/soviet-uniform/ww2_soviet_uniform.glb`
 * (Zenodo mirror of the same downloadable Sketchfab archive).
 *
 * Scale note: Sketchfab FBX skin often draws at **bind-pose** size (~0.4 m) while
 * `Box3.setFromObject` / bone extents report ~1.85 m. We **bake** the standing
 * pose into static meshes with `applyBoneTransform`, then normalize the visible
 * AABB to adult height so play never sees a toy T-pose.
 *
 * Animation: authored GLB has no clips — procedural bob/stride on the body
 * (skeletal clips unavailable after bake; root motion keeps him clearly alive).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { mountTt33 } from './gunAsset';

export const SOVIET_GUARD_SOURCE='https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99';
export const SOVIET_GUARD_AUTHOR='tnnv';
export const SOVIET_GUARD_LICENSE='CC BY 4.0';
export const SOVIET_GUARD_ZENODO='https://doi.org/10.5281/zenodo.10237261';
/** Public path — must match files under `playable/public/assets/soviet-uniform/`. */
export const SOVIET_GUARD_GLB='/assets/soviet-uniform/ww2_soviet_uniform.glb';

/**
 * Standing mesh height in metres (feet → crown) after bake + normalize.
 * Corridor refs: hatch door panels 2.6 m; player eye = FLOOR_Y+1.6.
 * Tall adult so crown sits clearly above eye and reads vs the door.
 */
export const SOVIET_GUARD_HEIGHT=1.95;
/** Hatch door panel height (CaveWorld breath hatch BoxGeometry y). */
export const CORRIDOR_DOOR_PANEL_H=2.6;
/** Standing eye height above FLOOR_Y (simulation WALK_EYE_Y − FLOOR_Y). */
export const CORRIDOR_EYE_ABOVE_FLOOR=1.6;

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
 /** Last sim XZ — detect real movement vs water stop. */
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

/** Visible mesh AABB in world space. */
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
 if(!any)box.setFromObject(root);
 return box;
}

/** Bone AABB (debug / tests). Prefer meshWorldBox for authored height. */
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
 * Bind-pose mesh height (geometry × matrixWorld, **no** skinning).
 * On this asset that is ~0.4 m — what you see if GPU skinning fails.
 */
export function bindPoseMeshHeight(root:THREE.Object3D):number{
 root.updateMatrixWorld(true);
 let minY=Infinity,maxY=-Infinity,any=false;
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh)&&!(o as THREE.SkinnedMesh).isSkinnedMesh)return;
  const mesh=o as THREE.Mesh;
  const g=mesh.geometry;
  if(!g.boundingBox)g.computeBoundingBox();
  const bb=g.boundingBox!;
  const corners:[number,number,number][]=[
   [bb.min.x,bb.min.y,bb.min.z],[bb.min.x,bb.min.y,bb.max.z],
   [bb.min.x,bb.max.y,bb.min.z],[bb.min.x,bb.max.y,bb.max.z],
   [bb.max.x,bb.min.y,bb.min.z],[bb.max.x,bb.min.y,bb.max.z],
   [bb.max.x,bb.max.y,bb.min.z],[bb.max.x,bb.max.y,bb.max.z],
  ];
  const e=mesh.matrixWorld.elements;
  for(const [x,y,z] of corners){
   const wy=e[1]*x+e[5]*y+e[9]*z+e[13];
   minY=Math.min(minY,wy);maxY=Math.max(maxY,wy);any=true;
  }
 });
 return any?maxY-minY:0;
}

/**
 * Bake standing pose into static meshes (keeps parent transforms).
 * Removes SkinnedMesh so bind-pose toy scale cannot appear in-engine.
 */
export function bakeSkinnedMeshes(root:THREE.Object3D):number{
 root.updateMatrixWorld(true);
 const replacements:Array<[THREE.SkinnedMesh,THREE.Mesh]>=[];
 root.traverse(o=>{
  if(!(o as THREE.SkinnedMesh).isSkinnedMesh)return;
  const sk=o as THREE.SkinnedMesh;
  sk.skeleton.update();
  const geo=sk.geometry.clone();
  const pos=geo.attributes.position;
  const v=new THREE.Vector3();
  for(let i=0;i<pos.count;i++){
   v.fromBufferAttribute(pos,i);
   sk.applyBoneTransform(i,v);
   pos.setXYZ(i,v.x,v.y,v.z);
  }
  pos.needsUpdate=true;
  geo.deleteAttribute('skinIndex');
  geo.deleteAttribute('skinWeight');
  geo.computeBoundingBox();
  geo.computeVertexNormals();
  const mesh=new THREE.Mesh(geo,sk.material);
  mesh.name=sk.name||'sovietGuardBake';
  mesh.position.copy(sk.position);
  mesh.quaternion.copy(sk.quaternion);
  mesh.scale.copy(sk.scale);
  mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;
  replacements.push([sk,mesh]);
 });
 for(const [sk,mesh] of replacements){
  sk.parent?.add(mesh);
  sk.parent?.remove(sk);
 }
 return replacements.length;
}

/**
 * Scale baked (or static) mesh feet→crown to `targetHeight`, feet on local y=0.
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

/**
 * Procedural idle / walk on the body pivot.
 * GLB has no clips; bake removed the skeleton — root bob/stride keeps him alive.
 */
export function updateGuardAnimation(visual:SovietGuardVisual,dt:number,walking:boolean){
 const rate=walking?8.5:2.6;
 visual.animPhase+=dt*rate;
 const t=visual.animPhase;
 const body=visual.body;
 if(walking){
  body.position.y=Math.abs(Math.sin(t))*.055;
  body.rotation.z=Math.sin(t)*.07;
  body.rotation.x=Math.sin(t*2)*.035;
 }else{
  body.position.y=Math.sin(t)*.012;
  body.rotation.z=Math.sin(t*.7)*.015;
  body.rotation.x=0;
 }
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
   // Authored archive ships with zero AnimationClips.
   bakeSkinnedMeshes(scene);
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
 return{root,body,ready:false,animPhase:0,lastXZ:null,...props};
}

/**
 * Swap the stub for the baked Sketchfab mesh.
 * Prototype is already static (no skin) — plain clone is safe.
 */
export async function upgradeSovietGuardVisual(visual:SovietGuardVisual){
 const mesh=await loadGuardObject();
 if(visual.ready&&visual.body.name==='sovietGuardMesh')return visual;
 visual.root.remove(visual.body);
 const instance=mesh.clone(true);
 instance.name='sovietGuardMesh';
 visual.root.add(instance);
 visual.body=instance;
 visual.ready=true;
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
