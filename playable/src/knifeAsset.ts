/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * Held FPS prop when the inventory knife is selected. Authored PBR maps stay
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
 * Camera-local FPS hold — lower-right, blade along look (−Z).
 * Roll keeps the carved fish face readable toward the camera.
 */
export const KNIFE_HOLD_POS={x:.34,y:-.28,z:-.52} as const;
export const KNIFE_HOLD_ROT={x:.18,y:.4,z:.95} as const;
export const KNIFE_HOLD_SCALE=3.35;
export const KNIFE_STAB_Z=-.9;

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
    // Weathered steel — low enough that bloom does not turn the blade into a flare.
    sm.envMapIntensity=.45;
   }
   sm.needsUpdate=true;
  }
 });
}

/**
 * Orient glTF: longest axis → −Z (tip forward), blade on −Z side,
 * then roll so the flat fish-carved face is camera-readable.
 */
export function alignKnifeBladeForward(scene:THREE.Object3D){
 scene.rotation.set(0,0,0);
 scene.position.set(0,0,0);
 scene.updateMatrixWorld(true);
 const size=new THREE.Box3().setFromObject(scene).getSize(new THREE.Vector3());
 if(size.x>=size.y&&size.x>=size.z)scene.rotation.y=-Math.PI/2;
 else if(size.y>=size.x&&size.y>=size.z)scene.rotation.x=Math.PI/2;
 scene.updateMatrixWorld(true);

 let blade:THREE.Object3D|undefined;
 let handle:THREE.Object3D|undefined;
 scene.traverse(o=>{
  if(o.name==='fish_knife_blade')blade=o;
  if(o.name==='fish_knife_handle')handle=o;
 });
 if(blade){
  const tip=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
  if(tip.z>0)scene.rotation.y+=Math.PI;
  scene.updateMatrixWorld(true);
 }
 // Prefer the thinner handle axis facing the camera (±Y) so scales/eye read.
 if(handle){
  const hs=new THREE.Box3().setFromObject(handle).getSize(new THREE.Vector3());
  if(hs.x<hs.y)scene.rotation.z+=Math.PI/2;
  scene.updateMatrixWorld(true);
 }

 const center=new THREE.Box3().setFromObject(scene).getCenter(new THREE.Vector3());
 scene.position.sub(center);
}

/** Minimal stand-in — hidden until glTF upgrades (avoids chrome flash). */
export function createKnifeStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeVisual';
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.045,.014,.32),stubMetal());
 blade.position.z=-.14;
 const tip=new THREE.Mesh(new THREE.ConeGeometry(.022,.06,4),stubMetal());
 tip.rotation.x=-Math.PI/2;tip.position.z=-.32;
 const handle=new THREE.Mesh(new THREE.CylinderGeometry(.02,.024,.11,8),stubGrip());
 handle.rotation.x=Math.PI/2;handle.position.z=.05;
 const guard=new THREE.Mesh(new THREE.BoxGeometry(.07,.018,.02),stubMetal());
 guard.position.z=-.01;
 g.add(blade,tip,handle,guard);
 poseKnife(g);
 g.visible=false;
 g.userData.knifeReady=false;
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
  while(root.children.length)root.remove(root.children[0]);
  root.add(scene);
  poseKnife(root);
  root.userData.knifeReady=true;
  return true;
 }catch(err){
  console.warn('Knife asset failed to load; keeping stub.',err);
  root.userData.knifeReady=true; // allow stub as last resort
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
