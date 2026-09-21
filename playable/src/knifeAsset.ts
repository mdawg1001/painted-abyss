/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * When the inventory knife is selected this mesh is the camera-held FPS prop
 * (torch body meshes hide; torch SpotLight can stay on). Materials keep the
 * authored PBR maps so the carved fish handle + weathered blade read like the
 * Poly Haven studio shot — RoomEnvironment fills missing specular.
 *
 * Runtime files live in `public/assets/knife/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/** Public path — must match files under `playable/public/assets/knife/`. */
export const KNIFE_ASSET_URL='/assets/knife/fish_knife_1k.gltf';
export const KNIFE_THUMB_URL='/assets/knife/thumb.png';

/**
 * Camera-local FPS hold — lower-right pocket, blade along look (−Z).
 * Tuned after `alignKnifeBladeForward` so the fish pommel sits near the hand.
 */
export const KNIFE_HOLD_POS={x:.36,y:-.30,z:-.56} as const;
export const KNIFE_HOLD_ROT={x:.22,y:.55,z:.72} as const;
/** ~0.22 m asset × scale ≈ chunky dive knife in first person. */
export const KNIFE_HOLD_SCALE=3.1;
/** Thrust depth during a stab click (more negative = farther along look). */
export const KNIFE_STAB_Z=-.92;

const stubMetal=()=>new THREE.MeshStandardMaterial({
 color:0x9aa2a8,metalness:.82,roughness:.38,envMapIntensity:1.1,
});
const stubGrip=()=>new THREE.MeshStandardMaterial({
 color:0x4a3020,metalness:.08,roughness:.88,envMapIntensity:.35,
});

/**
 * Keep Poly Haven PBR maps intact. Optional envMap unlocks metal specular
 * (without it the blade reads as flat gray in the cave murk).
 */
export function prepareKnifeMaterials(root:THREE.Object3D,envMap?:THREE.Texture|null){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   if(envMap){
    sm.envMap=envMap;
    // Blade is weathered steel — enough intensity to catch torch/shaft light.
    sm.envMapIntensity=1.2;
   }
   // Do not clamp metalness/roughness or wash with emissive — that erased the asset.
   sm.needsUpdate=true;
  }
 });
}

/**
 * Orient the glTF so the longest axis points along −Z (blade tip forward)
 * and the blade mesh sits on the −Z side of the pivot.
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
 scene.traverse(o=>{if(o.name==='fish_knife_blade')blade=o;});
 if(blade){
  const tip=new THREE.Box3().setFromObject(blade).getCenter(new THREE.Vector3());
  if(tip.z>0)scene.rotation.y+=Math.PI;
  scene.updateMatrixWorld(true);
 }

 const center=new THREE.Box3().setFromObject(scene).getCenter(new THREE.Vector3());
 scene.position.sub(center);
}

function attachKnifeFill(g:THREE.Group){
 // Warm key + cool rim so wood grain and rivets read without an emissive wash.
 let fill=g.getObjectByName('knifeFill') as THREE.PointLight|undefined;
 if(!fill){
  fill=new THREE.PointLight(0xffe2c4,2.4,1.35,2);
  fill.name='knifeFill';
  g.add(fill);
 }
 fill.position.set(.04,.1,-.02);
 fill.intensity=2.4;
 let rim=g.getObjectByName('knifeRim') as THREE.PointLight|undefined;
 if(!rim){
  rim=new THREE.PointLight(0xa8d4e8,1.1,1.1,2);
  rim.name='knifeRim';
  g.add(rim);
 }
 rim.position.set(-.08,-.02,-.18);
}

/** Minimal stand-in — always mounted immediately so the hold swap never waits on glTF. */
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
 attachKnifeFill(g);
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
 * Pass a PMREM env map so metal/wood specular match the studio look underwater.
 */
export async function upgradeKnifeVisual(root:THREE.Group,envMap?:THREE.Texture|null):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  // Explicit base so relative bin/texture URIs resolve under /assets/knife/.
  loader.setPath('/assets/knife/');
  const gltf=await loader.loadAsync('fish_knife_1k.gltf');
  const scene=gltf.scene;
  alignKnifeBladeForward(scene);
  prepareKnifeMaterials(scene,envMap??null);
  const keep=root.children.filter(c=>c.name==='knifeFill'||c.name==='knifeRim');
  while(root.children.length)root.remove(root.children[0]);
  root.add(scene,...keep);
  attachKnifeFill(root);
  poseKnife(root);
  return true;
 }catch(err){
  console.warn('Knife asset failed to load; keeping stub.',err);
  return false;
 }
}

/** Re-bind env map after PMREM is ready (stub may already be on camera). */
export function applyKnifeEnvMap(root:THREE.Object3D,envMap:THREE.Texture){
 prepareKnifeMaterials(root,envMap);
}

/** Immediate stub group for camera attach; glTF upgrades in the background. */
export function createKnifeVisual():THREE.Group{
 return createKnifeStub();
}
