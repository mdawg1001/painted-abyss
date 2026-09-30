/**
 * Poly Haven metal_office_desk — single shootout cover desk.
 * Runtime files: `public/assets/metal_office_desk/` (1k glTF + textures).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const METAL_DESK_URL='/assets/metal_office_desk/metal_office_desk_1k.gltf';
export const METAL_DESK_SOURCE='https://polyhaven.com/a/metal_office_desk';
export const METAL_DESK_AUTHOR='Ulan Cabanilla';
/** Authored desk height after normalize (m) — waist / chest duck-behind cover. */
export const METAL_DESK_HEIGHT=.79;

const BASE='/assets/metal_office_desk/';
const FILE='metal_office_desk_1k.gltf';

let proto:THREE.Object3D|null=null;
let loading:Promise<THREE.Object3D>|null=null;

/** Soften PBR so grey metal reads under bunker murk. */
export function litDeskMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.2;
   sm.emissive=new THREE.Color(0x1a1c1e);
   sm.emissiveIntensity=.18;
   sm.needsUpdate=true;
  }
 });
}

function normalizeToFloor(root:THREE.Object3D,targetHeight:number){
 const box=new THREE.Box3().setFromObject(root);
 const size=box.getSize(new THREE.Vector3());
 const scale=targetHeight/Math.max(size.y,.001);
 root.scale.multiplyScalar(scale);
 box.setFromObject(root);
 const center=box.getCenter(new THREE.Vector3());
 root.position.x-=center.x;
 root.position.z-=center.z;
 root.position.y-=box.min.y;
}

/** Procedural stand-in while the glTF loads. */
export function createDeskStub(yaw=0):THREE.Group{
 const g=new THREE.Group();
 g.name='deskStub';
 g.rotation.y=yaw;
 const steel=new THREE.MeshStandardMaterial({color:0x6a6e72,roughness:.55,metalness:.65,emissive:0x1a1c1e,emissiveIntensity:.15});
 const top=new THREE.Mesh(new THREE.BoxGeometry(1.9,.06,.9),steel);top.position.y=.76;
 const apron=new THREE.Mesh(new THREE.BoxGeometry(1.85,.12,.85),steel);apron.position.y=.68;
 const legGeom=new THREE.BoxGeometry(.06,.7,.06);
 for(const [lx,lz] of [[-.88,-.38],[-.88,.38],[.88,-.38],[.88,.38]] as const){
  const leg=new THREE.Mesh(legGeom,steel);leg.position.set(lx,.35,lz);g.add(leg);
 }
 const drawer=new THREE.Mesh(new THREE.BoxGeometry(.55,.22,.7),steel);drawer.position.set(.55,.45,0);
 g.add(top,apron,drawer);
 litDeskMaterials(g);
 return g;
}

async function loadProto():Promise<THREE.Object3D>{
 if(proto)return proto;
 if(!loading){
  loading=(async()=>{
   const loader=new GLTFLoader();
   loader.setPath(BASE);
   const gltf=await loader.loadAsync(FILE);
   const scene=gltf.scene;
   litDeskMaterials(scene);
   normalizeToFloor(scene,METAL_DESK_HEIGHT);
   proto=scene;
   return scene;
  })();
 }
 return loading;
}

/** Poly Haven metal desk for a cover footprint. */
export function createDeskCoverVisual(yaw=0):THREE.Group{
 const root=new THREE.Group();
 root.name='deskCover';
 root.rotation.y=yaw;
 root.add(createDeskStub(0));
 return root;
}

/** Swap the stub for the authored mesh. */
export async function upgradeDeskCover(root:THREE.Group):Promise<boolean>{
 try{
  const scene=await loadProto();
  const stub=root.getObjectByName('deskStub');
  if(stub)root.remove(stub);
  const desk=scene.clone(true);
  desk.name='metalOfficeDesk';
  root.add(desk);
  return true;
 }catch{
  return false;
 }
}
