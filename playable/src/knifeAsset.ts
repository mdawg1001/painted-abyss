/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * When the inventory knife is selected, this mesh is the camera-held FPS prop
 * (torch body meshes hide; torch SpotLight can stay on). Otherwise it stays
 * hidden and the torch returns as the held object.
 *
 * Runtime files live in `public/assets/knife/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/** Public path — must match files under `playable/public/assets/knife/`. */
export const KNIFE_ASSET_URL='/assets/knife/fish_knife_1k.gltf';
export const KNIFE_THUMB_URL='/assets/knife/thumb.png';

/**
 * Camera-local FPS hold — same pocket as the dive torch (lower-right),
 * blade reading toward the look direction.
 */
export const KNIFE_HOLD_POS={x:.42,y:-.38,z:-.55} as const;
export const KNIFE_HOLD_ROT={x:.15,y:1.15,z:.35} as const;
/** Large enough to read as a held prop next to the chunky lantern. */
export const KNIFE_HOLD_SCALE=2.4;
/** Thrust depth during a stab click (more negative = farther along look). */
export const KNIFE_STAB_Z=-.82;

const litMetal=()=>new THREE.MeshStandardMaterial({
 color:0xc8d0d6,metalness:.35,roughness:.42,emissive:0x5a6a78,emissiveIntensity:.55,
});
const litGrip=()=>new THREE.MeshStandardMaterial({
 color:0x3a2820,metalness:.05,roughness:.9,emissive:0x1a100c,emissiveIntensity:.25,
});

/** Brighten PBR knife mats so they read under cave murk without an env map. */
export function litKnifeMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.2;
   sm.metalness=Math.min(sm.metalness??.5,.4);
   sm.roughness=Math.max(sm.roughness??.4,.35);
   sm.emissive=new THREE.Color(0x4a5864);
   sm.emissiveIntensity=.45;
   sm.needsUpdate=true;
  }
 });
}

/** Minimal stand-in — always mounted immediately so the hold swap never waits on glTF. */
export function createKnifeStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeVisual';
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.045,.014,.32),litMetal());
 blade.position.z=-.14;
 const tip=new THREE.Mesh(new THREE.ConeGeometry(.022,.06,4),litMetal());
 tip.rotation.x=-Math.PI/2;tip.position.z=-.32;
 const handle=new THREE.Mesh(new THREE.CylinderGeometry(.02,.024,.11,8),litGrip());
 handle.rotation.x=Math.PI/2;handle.position.z=.05;
 const guard=new THREE.Mesh(new THREE.BoxGeometry(.07,.018,.02),litMetal());
 guard.position.z=-.01;
 g.add(blade,tip,handle,guard);
 litKnifeMaterials(g);
 // Small fill so the held knife is not unlit against the murk.
 const fill=new THREE.PointLight(0xd8e8f4,1.6,.9,2);
 fill.name='knifeFill';fill.position.set(0,.06,.08);g.add(fill);
 poseKnife(g);
 g.visible=false;
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
 * Returns true on success.
 */
export async function upgradeKnifeVisual(root:THREE.Group):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  // Explicit base so relative bin/texture URIs resolve under /assets/knife/.
  loader.setPath('/assets/knife/');
  const gltf=await loader.loadAsync('fish_knife_1k.gltf');
  const scene=gltf.scene;
  litKnifeMaterials(scene);
  // Center on handle/blade for camera attach.
  const box=new THREE.Box3().setFromObject(scene);
  const center=box.getCenter(new THREE.Vector3());
  scene.position.sub(center);
  // Drop procedural stub meshes; keep fill light.
  const keep=root.children.filter(c=>c.name==='knifeFill');
  while(root.children.length)root.remove(root.children[0]);
  root.add(scene,...keep);
  poseKnife(root);
  return true;
 }catch(err){
  console.warn('Knife asset failed to load; keeping stub.',err);
  return false;
 }
}

/**
 * Immediate stub group for camera attach; glTF upgrades in the background.
 */
export function createKnifeVisual():THREE.Group{
 return createKnifeStub();
}
