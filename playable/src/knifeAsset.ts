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

/** Camera-local FPS hold — lower-right, roughly where the torch sits. */
export const KNIFE_HOLD_POS={x:.38,y:-.42,z:-.58} as const;
export const KNIFE_HOLD_ROT={x:.32,y:-.55,z:.22} as const;
export const KNIFE_HOLD_SCALE=.88;
/** Thrust depth during a stab click (more negative = farther along look). */
export const KNIFE_STAB_Z=-.78;

const stubMat=()=>new THREE.MeshStandardMaterial({
 color:0xb8c0c4,metalness:.55,roughness:.35,emissive:0x1a2228,emissiveIntensity:.15,
});

/** Minimal stand-in if the glTF fails to load. */
export function createKnifeStub():THREE.Group{
 const g=new THREE.Group();
 g.name='knifeVisual';
 const blade=new THREE.Mesh(new THREE.BoxGeometry(.04,.012,.28),stubMat());
 blade.position.z=-.14;
 const handle=new THREE.Mesh(new THREE.CylinderGeometry(.018,.022,.1,6),new THREE.MeshStandardMaterial({color:0x2a3238,roughness:.85,metalness:.05}));
 handle.rotation.x=Math.PI/2;handle.position.z=.04;
 g.add(blade,handle);
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
 * Load Poly Haven fish_knife (or stub on failure).
 * Parent under the camera; keep `visible=false` until the knife slot is selected.
 */
export async function loadKnifeVisual():Promise<THREE.Group>{
 try{
  const gltf=await new GLTFLoader().loadAsync(KNIFE_ASSET_URL);
  const root=new THREE.Group();
  root.name='knifeVisual';
  const scene=gltf.scene;
  scene.traverse(o=>{
   if(o instanceof THREE.Mesh){
    o.castShadow=false;o.receiveShadow=false;
    const mats=Array.isArray(o.material)?o.material:[o.material];
    for(const m of mats){
     if(m&&'envMapIntensity' in m)(m as THREE.MeshStandardMaterial).envMapIntensity=.35;
    }
  }
  });
  // Center on handle/blade for camera attach.
  const box=new THREE.Box3().setFromObject(scene);
  const center=box.getCenter(new THREE.Vector3());
  scene.position.sub(center);
  root.add(scene);
  poseKnife(root);
  root.visible=false;
  return root;
 }catch(err){
  console.warn('Knife asset failed to load; using stub.',err);
  return createKnifeStub();
 }
}
