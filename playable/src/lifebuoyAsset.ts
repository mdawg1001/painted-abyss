/**
 * Cave floor prop — Poly Haven “Lifebuoy”.
 * Runtime files live in `public/assets/lifebuoy/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FLOOR_Y } from './simulation';

export const LIFEBUOY_ASSET_URL='/assets/lifebuoy/lifebuoy_1k.gltf';
export const LIFEBUOY_SOURCE='https://polyhaven.com/a/lifebuoy';
export const LIFEBUOY_AUTHOR='Hank Kaamura';
/** World placement — NW shelf of the start chamber, left of the dive path. */
export const LIFEBUOY_POS={x:-9.5,y:FLOOR_Y,z:-17} as const;
export const LIFEBUOY_YAW=.55;
/**
 * Outer diameter once laid flat (m). Poly Haven model is ~0.8 m — keep near life-size.
 */
export const LIFEBUOY_TARGET_DIAMETER=.78;

const BASE='/assets/lifebuoy';
const GLTF='lifebuoy_1k.gltf';

/** Brighten PBR so the red ring reads under cave murk. */
export function litLifebuoyMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=true;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.4;
   sm.emissive=new THREE.Color(0x3a1810);
   sm.emissiveIntensity=.28;
   sm.needsUpdate=true;
  }
 });
}

/**
 * Native glTF stands in XY (wall-hang). Lay flat on XZ, scale to target diameter,
 * then sit the ring on local y=0.
 */
export function poseLifebuoyOnFloor(root:THREE.Object3D,targetDiameter=LIFEBUOY_TARGET_DIAMETER){
 // Thin axis is local Z — rotate so thickness becomes height.
 root.rotation.x=-Math.PI/2;
 root.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(root);
 const size=box.getSize(new THREE.Vector3());
 const span=Math.max(size.x,size.z,.001);
 root.scale.multiplyScalar(targetDiameter/span);
 root.updateMatrixWorld(true);
 box.setFromObject(root);
 const center=box.getCenter(new THREE.Vector3());
 root.position.x-=center.x;
 root.position.z-=center.z;
 root.position.y-=box.min.y;
}

/** Torus stand-in while glTF loads. */
export function createLifebuoyStub():THREE.Group{
 const g=new THREE.Group();
 g.name='lifebuoyStub';
 const ring=new THREE.Mesh(
  new THREE.TorusGeometry(LIFEBUOY_TARGET_DIAMETER*.42,.07,10,28),
  new THREE.MeshStandardMaterial({
   color:0xb83228,roughness:.72,metalness:.05,
   emissive:0x3a1810,emissiveIntensity:.25,
  }),
 );
 // Torus lies in XY by default — flatten to floor.
 ring.rotation.x=Math.PI/2;
 ring.position.y=.07;
 g.add(ring);
 litLifebuoyMaterials(g);
 return g;
}

export type LifebuoyVisual={
 root:THREE.Group;
 pivot:THREE.Group;
 ready:boolean;
};

export function createLifebuoyVisual():LifebuoyVisual{
 const root=new THREE.Group();
 root.name='lifebuoy';
 const pivot=new THREE.Group();
 pivot.name='lifebuoyPivot';
 root.add(pivot);
 pivot.add(createLifebuoyStub());
 return{root,pivot,ready:false};
}

/** Replace stub with Poly Haven glTF. */
export async function upgradeLifebuoyVisual(visual:LifebuoyVisual):Promise<boolean>{
 try{
  const loader=new GLTFLoader();
  loader.setPath(`${BASE}/`);
  const gltf=await loader.loadAsync(GLTF);
  const scene=gltf.scene;
  litLifebuoyMaterials(scene);
  poseLifebuoyOnFloor(scene);
  while(visual.pivot.children.length)visual.pivot.remove(visual.pivot.children[0]);
  visual.pivot.add(scene);
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Lifebuoy failed to load; keeping stub.',err);
  return false;
 }
}
