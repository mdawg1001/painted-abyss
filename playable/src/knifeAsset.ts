/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * Held FPS prop when the inventory knife is selected. No viewmodel arm —
 * the knife sits in the lower-right of the camera. Authored PBR maps stay
 * intact; a soft RoomEnvironment envMap adds steel response without local
 * point lights (those bloom white against UnrealBloomPass).
 *
 * Runtime files live in `public/assets/knife/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/** Public path — must match files under `playable/public/assets/knife/`. */
export const KNIFE_ASSET_URL='/assets/knife/fish_knife_1k.gltf';
export const KNIFE_THUMB_URL='/assets/knife/thumb.png';

/**
 * Camera-local FPS corner pose (knife only, no arm). Handle anchored in the
 * extreme lower-right; blade steeply diagonal with the tip toward screen
 * center (~65° on fov 64). Same framing language as a CS knife viewmodel.
 */
export const KNIFE_HOLD_POS={x:.44,y:-.28,z:-.62} as const;
export const KNIFE_HOLD_ROT={x:.85,y:.6,z:-.55} as const;
export const KNIFE_HOLD_SCALE=1.7;
export const KNIFE_STAB_Z=-.82;

const stubMetal=()=>new THREE.MeshStandardMaterial({
 color:0x6a7078,metalness:.55,roughness:.55,envMapIntensity:.35,
});
const stubGrip=()=>new THREE.MeshStandardMaterial({
 color:0x3a2418,metalness:.05,roughness:.9,envMapIntensity:.15,
});

/**
 * Keep Poly Haven PBR maps. Soft envMap only — no emissive wash, no local lamps.
 */
export function prepareKnifeMaterials(root:THREE.Object3D,envMap?:THREE.Texture|null){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.emissive?.setHex(0x000000);
   sm.emissiveIntensity=0;
   if(envMap){
    sm.envMap=envMap;
    sm.envMapIntensity=.45;
   }
   sm.needsUpdate=true;
  }
 });
}

/**
 * Aim blade tip along −Z (look) and put the butt at the origin so the hand
 * holds the grip — tip extends into the scene, not back at the camera.
 */
export function alignKnifeBladeForward(scene:THREE.Object3D){
 scene.rotation.set(0,0,0);
 scene.quaternion.identity();
 scene.position.set(0,0,0);
 scene.updateMatrixWorld(true);

 let blade:THREE.Object3D|undefined;
 let handle:THREE.Object3D|undefined;
 scene.traverse(o=>{
  if(o.name==='fish_knife_blade')blade=o;
  if(o.name==='fish_knife_handle')handle=o;
 });

 if(blade&&handle){
  const bladeC=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
  const handleC=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
  const tipDir=bladeC.clone().sub(handleC);
  if(tipDir.lengthSq()<1e-8)tipDir.set(0,0,-1);
  tipDir.normalize();
  // Rotate so handle→blade aims at look (−Z).
  scene.quaternion.setFromUnitVectors(tipDir,new THREE.Vector3(0,0,-1));
  scene.updateMatrixWorld(true);

  // Roll flat face toward camera-up so fish scales read.
  const hs=new THREE.Box3().setFromObject(handle).getSize(new THREE.Vector3());
  if(hs.x<hs.y){
   scene.rotateZ(Math.PI/2);
   scene.updateMatrixWorld(true);
   // Re-aim tip after roll (roll can tilt the tip off −Z).
   const blade2=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
   const handle2=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
   const tip2=blade2.clone().sub(handle2);
   if(tip2.lengthSq()>1e-8){
    tip2.normalize();
    const fix=new THREE.Quaternion().setFromUnitVectors(tip2,new THREE.Vector3(0,0,-1));
    scene.quaternion.premultiply(fix);
    scene.updateMatrixWorld(true);
   }
  }
 }else{
  const size=new THREE.Box3().setFromObject(scene).getSize(new THREE.Vector3());
  if(size.x>=size.y&&size.x>=size.z)scene.rotation.y=-Math.PI/2;
  else if(size.y>=size.x&&size.y>=size.z)scene.rotation.x=Math.PI/2;
  scene.updateMatrixWorld(true);
 }

 // Pivot on the wooden grip so the pose origin is the handle, tip still −Z.
 scene.updateMatrixWorld(true);
 if(handle){
  const grip=new THREE.Box3().setFromObject(handle).getCenter(new THREE.Vector3());
  scene.position.sub(grip);
 }else{
  const box=new THREE.Box3().setFromObject(scene);
  scene.position.x-=(box.min.x+box.max.x)*.5;
  scene.position.y-=(box.min.y+box.max.y)*.5;
  scene.position.z-=box.max.z;
 }
}

function attachKnifeMesh(root:THREE.Group,mesh:THREE.Object3D){
 const grip=root.getObjectByName('knifeGrip');
 if(!grip){root.add(mesh);return;}
 const prev=grip.getObjectByName('knifeMesh');
 if(prev)grip.remove(prev);
 mesh.name='knifeMesh';
 grip.add(mesh);
}

function createKnifeMeshStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeMesh';
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.045,.014,.22),stubMetal());
 blade.name='fish_knife_blade';blade.position.z=-.12;
 const tip=new THREE.Mesh(new THREE.ConeGeometry(.02,.05,4),stubMetal());
 tip.rotation.x=-Math.PI/2;tip.position.z=-.24;
 const handle=new THREE.Mesh(new THREE.CylinderGeometry(.018,.02,.09,8),stubGrip());
 handle.name='fish_knife_handle';handle.rotation.x=Math.PI/2;handle.position.z=-.02;
 g.add(blade,tip,handle);
 alignKnifeBladeForward(g);
 return g;
}

/** Knife only, grip pivot at the origin. Hidden until the caller shows it. */
export function createKnifeStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeVisual';
 g.frustumCulled=false;
 const grip=new THREE.Object3D();
 grip.name='knifeGrip';
 g.add(grip);
 attachKnifeMesh(g,createKnifeMeshStub());
 poseKnife(g);
 g.visible=false;
 g.userData.knifeReady=true;
 return g;
}

/** Camera-local rest pose for the held diving knife. */
export function poseKnife(g:THREE.Group){
 g.scale.setScalar(KNIFE_HOLD_SCALE);
 g.position.set(KNIFE_HOLD_POS.x,KNIFE_HOLD_POS.y,KNIFE_HOLD_POS.z);
 g.rotation.set(KNIFE_HOLD_ROT.x,KNIFE_HOLD_ROT.y,KNIFE_HOLD_ROT.z);
}

/**
 * Load Poly Haven fish_knife into an existing knife group (replaces stub meshes).
 */
export async function upgradeKnifeVisual(root:THREE.Group,envMap?:THREE.Texture|null):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  loader.setPath('/assets/knife/');
  const gltf=await loader.loadAsync('fish_knife_1k.gltf');
  const scene=gltf.scene;
  alignKnifeBladeForward(scene);
  prepareKnifeMaterials(scene,envMap??null);
  attachKnifeMesh(root,scene);
  poseKnife(root);
  root.userData.knifeReady=true;
  return true;
 }catch(err){
  console.warn('Knife asset failed to load; keeping stub.',err);
  root.userData.knifeReady=true;
  return false;
 }
}

export function applyKnifeEnvMap(root:THREE.Object3D,envMap:THREE.Texture){
 prepareKnifeMaterials(root,envMap);
}

export function createKnifeVisual():THREE.Group{
 return createKnifeStub();
}

/** Only show once glTF (or failed stub) is ready — prevents white chrome flash. */
export function knifeMeshReady(g:THREE.Group|null|undefined):boolean{
 return !!g?.userData?.knifeReady;
}
