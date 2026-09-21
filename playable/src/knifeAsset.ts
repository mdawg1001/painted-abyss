/**
 * Diving-knife visual (Poly Haven “Fish Knife”).
 *
 * Torch remains the main camera-held FPS prop. This mesh is only a brief stab
 * cue when the inventory knife is selected — never a torch replacement.
 *
 * Runtime files live in `public/assets/knife/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/** Public path — must match files under `playable/public/assets/knife/`. */
export const KNIFE_ASSET_URL='/assets/knife/fish_knife_1k.gltf';
export const KNIFE_THUMB_URL='/assets/knife/thumb.png';

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

/** Camera-local rest pose — secondary to the torch on the opposite side. */
export function poseKnife(g:THREE.Group){
 // Asset is ~0.22 m long in Blender units; scale to a small hand cue.
 g.scale.setScalar(.55);
 g.position.set(-.32,-.38,-.55);
 g.rotation.set(.25,.85,.15);
}

/**
 * Load Poly Haven fish_knife (or stub on failure).
 * Parent under the camera; keep `visible=false` until a stab flash.
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
