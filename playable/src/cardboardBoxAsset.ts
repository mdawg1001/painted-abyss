/**
 * Poly Haven cardboard_box_01 — shootout cover stacks.
 * Runtime files: `public/assets/cardboard_box_01/` (1k glTF + textures).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const CARDBOARD_BOX_URL='/assets/cardboard_box_01/cardboard_box_01_1k.gltf';
export const CARDBOARD_BOX_SOURCE='https://polyhaven.com/a/cardboard_box_01';
export const CARDBOARD_BOX_AUTHOR='Rahul Chaudhary';
/** One carton height after normalize (m). Three stacked reach chest–head cover. */
export const CARDBOARD_BOX_HEIGHT=.52;
/** Boxes in a cover stack. */
export const CARDBOARD_STACK=3;

const BASE='/assets/cardboard_box_01/';
const FILE='cardboard_box_01_1k.gltf';

let proto:THREE.Object3D|null=null;
let loading:Promise<THREE.Object3D>|null=null;

/** Brighten PBR so cardboard reads under bunker murk. */
export function litCardboardMaterials(root:THREE.Object3D){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   sm.envMapIntensity=.25;
   sm.emissive=new THREE.Color(0x2a2218);
   sm.emissiveIntensity=.28;
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
export function createCardboardStub(yaw=0):THREE.Group{
 const g=new THREE.Group();
 g.name='cardboardStub';
 g.rotation.y=yaw;
 const mat=new THREE.MeshStandardMaterial({color:0xb89a6a,roughness:.92,metalness:0,emissive:0x2a2218,emissiveIntensity:.2});
 const tape=new THREE.MeshStandardMaterial({color:0xc8b070,roughness:.75,metalness:.05});
 for(let i=0;i<CARDBOARD_STACK;i++){
  const box=new THREE.Mesh(new THREE.BoxGeometry(.42,.5,.36),mat);
  box.position.set((i%2)*.04-.02,CARDBOARD_BOX_HEIGHT*(i+.5),(i%3)*.03-.03);
  box.rotation.y=i*.17;
  const strip=new THREE.Mesh(new THREE.BoxGeometry(.44,.03,.08),tape);
  strip.position.y=.18;
  box.add(strip);
  g.add(box);
 }
 litCardboardMaterials(g);
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
   litCardboardMaterials(scene);
   normalizeToFloor(scene,CARDBOARD_BOX_HEIGHT);
   proto=scene;
   return scene;
  })();
 }
 return loading;
}

/** Stack of Poly Haven cartons for a cover footprint. */
export function createCardboardCoverVisual(yaw=0):THREE.Group{
 const root=new THREE.Group();
 root.name='cardboardCover';
 root.rotation.y=yaw;
 root.add(createCardboardStub(0));
 return root;
}

/** Swap the stub stack for the authored mesh. */
export async function upgradeCardboardCover(root:THREE.Group):Promise<boolean>{
 try{
  const scene=await loadProto();
  const stub=root.getObjectByName('cardboardStub');
  if(stub)root.remove(stub);
  for(let i=0;i<CARDBOARD_STACK;i++){
   const box=scene.clone(true);
   box.name=`cardboardBox${i}`;
   box.position.set((i%2)*.05-.025,CARDBOARD_BOX_HEIGHT*i,(i%3)*.04-.04);
   box.rotation.y=i*.21;
   root.add(box);
  }
  return true;
 }catch{
  return false;
 }
}
