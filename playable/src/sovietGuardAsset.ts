/**
 * Phase 3 corridor guard mesh.
 *
 * Sketchfab “WW2 Soviet Uniform” by tnnv (CC BY 4.0):
 * https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99
 *
 * Runtime file: `public/assets/soviet-uniform/ww2_soviet_uniform.glb`
 * (Zenodo mirror of the same downloadable Sketchfab archive).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const SOVIET_GUARD_SOURCE='https://sketchfab.com/3d-models/ww2-soviet-uniform-f85a4ed8c33a43eca1a7caa45f7acf99';
export const SOVIET_GUARD_AUTHOR='tnnv';
export const SOVIET_GUARD_LICENSE='CC BY 4.0';
export const SOVIET_GUARD_ZENODO='https://doi.org/10.5281/zenodo.10237261';
/** Public path — must match files under `playable/public/assets/soviet-uniform/`. */
export const SOVIET_GUARD_GLB='/assets/soviet-uniform/ww2_soviet_uniform.glb';
/** Standing height in metres after normalize (≈ adult). */
export const SOVIET_GUARD_HEIGHT=1.72;

export type SovietGuardVisual={
 root:THREE.Group;
 /** Mesh pivot with feet on local y=0. */
 body:THREE.Group;
 ready:boolean;
 /** Child props toggled from mission.guard inventory. */
 gun:THREE.Object3D;
 bottle:THREE.Object3D;
 coat:THREE.Object3D;
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
 const torso=new THREE.Mesh(new THREE.CapsuleGeometry(.28,.72,6,10),clothMat(0x4a5a3a));
 torso.position.y=1.05;
 torso.castShadow=true;torso.receiveShadow=true;
 body.add(torso);
 const head=new THREE.Mesh(new THREE.SphereGeometry(.16,12,10),clothMat(0xc4a882,.55));
 head.position.y=1.62;
 head.castShadow=true;
 body.add(head);
 const helmet=new THREE.Mesh(new THREE.SphereGeometry(.18,12,8,0,Math.PI*2,0,Math.PI*.55),clothMat(0x3a4038,.7));
 helmet.position.y=1.68;
 body.add(helmet);
 return body;
}

function makeGearProps(root:THREE.Group){
 const gun=new THREE.Group();
 gun.name='guardGun';
 const barrel=new THREE.Mesh(
  new THREE.BoxGeometry(.08,.08,.55),
  new THREE.MeshStandardMaterial({color:0x9aa3aa,metalness:.55,roughness:.4}),
 );
 barrel.position.set(.28,1.15,-.35);
 gun.add(barrel);
 gun.visible=false;
 root.add(gun);

 const bottle=new THREE.Mesh(
  new THREE.CylinderGeometry(.06,.07,.32,10),
  new THREE.MeshStandardMaterial({color:0x3d8f62,roughness:.45,metalness:.15}),
 );
 bottle.name='guardBottle';
 bottle.position.set(-.32,1.05,.08);
 bottle.visible=false;
 root.add(bottle);

 const coat=new THREE.Mesh(
  new THREE.CapsuleGeometry(.34,.55,4,8),
  new THREE.MeshStandardMaterial({color:0xc49662,roughness:.88,metalness:0,transparent:true,opacity:.72}),
 );
 coat.name='guardCoat';
 coat.position.y=1.05;
 coat.visible=false;
 root.add(coat);

 return{gun,bottle,coat};
}

function normalizeHumanoid(scene:THREE.Object3D,targetHeight:number){
 const box=new THREE.Box3().setFromObject(scene);
 const size=box.getSize(new THREE.Vector3());
 const scale=targetHeight/Math.max(size.y,.001);
 scene.scale.multiplyScalar(scale);
 box.setFromObject(scene);
 const center=box.getCenter(new THREE.Vector3());
 scene.position.x-=center.x;
 scene.position.z-=center.z;
 scene.position.y-=box.min.y;
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
 return{root,body,ready:false,...props};
}

/** Swap the stub for the authored Sketchfab glTF when ready. */
export async function upgradeSovietGuardVisual(visual:SovietGuardVisual){
 const mesh=await loadGuardObject();
 if(visual.ready&&visual.body.name==='sovietGuardMesh')return visual;
 visual.root.remove(visual.body);
 const clone=mesh.clone(true);
 clone.name='sovietGuardMesh';
 visual.root.add(clone);
 visual.body=clone as THREE.Group;
 visual.ready=true;
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
