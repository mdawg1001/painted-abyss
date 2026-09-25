/**
 * Poly Haven cardboard_box_01 — shootout cover barricades.
 * Runtime files: `public/assets/cardboard_box_01/` (1k glTF + textures).
 * Each cover footprint is a cluster of 3–4 vertical stacks (chest–head high)
 * so the player has a real barricade to duck behind.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const CARDBOARD_BOX_URL='/assets/cardboard_box_01/cardboard_box_01_1k.gltf';
export const CARDBOARD_BOX_SOURCE='https://polyhaven.com/a/cardboard_box_01';
export const CARDBOARD_BOX_AUTHOR='Rahul Chaudhary';
/** One carton height after normalize (m). Three stacked reach chest–head cover. */
export const CARDBOARD_BOX_HEIGHT=.52;
/** Boxes in one vertical stack. */
export const CARDBOARD_STACK=3;
/** Stacks side-by-side in a barricade cluster (3 or 4). */
export const CARDBOARD_CLUSTER_MIN=3;
export const CARDBOARD_CLUSTER_MAX=4;
/** Centre-to-centre spacing of stacks along the barricade (m). */
export const CARDBOARD_STACK_SPACING=.48;

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

/** Clamp cluster size to 3–4 stacks. */
export function cardboardClusterCount(n:number){
 return Math.max(CARDBOARD_CLUSTER_MIN,Math.min(CARDBOARD_CLUSTER_MAX,Math.round(n)||CARDBOARD_CLUSTER_MAX));
}

/** Local-X offsets that centre `n` stacks into a barricade line. */
export function cardboardStackOffsets(n:number){
 const count=cardboardClusterCount(n);
 const start=-(count-1)*CARDBOARD_STACK_SPACING/2;
 return Array.from({length:count},(_,i)=>start+i*CARDBOARD_STACK_SPACING);
}

/** One vertical stack of cartons at a local offset (stub geometry). */
function addStubStack(parent:THREE.Object3D,ox:number,yawJitter:number,mat:THREE.Material,tape:THREE.Material){
 const stack=new THREE.Group();
 stack.position.set(ox,0,(yawJitter%3)*.03-.03);
 stack.rotation.y=yawJitter;
 for(let i=0;i<CARDBOARD_STACK;i++){
  const box=new THREE.Mesh(new THREE.BoxGeometry(.42,.5,.36),mat);
  box.position.set((i%2)*.04-.02,CARDBOARD_BOX_HEIGHT*(i+.5),(i%3)*.03-.03);
  box.rotation.y=i*.17;
  const strip=new THREE.Mesh(new THREE.BoxGeometry(.44,.03,.08),tape);
  strip.position.y=.18;
  box.add(strip);
  stack.add(box);
 }
 parent.add(stack);
}

/** Procedural stand-in while the glTF loads — `cluster` stacks in a line. */
export function createCardboardStub(yaw=0,cluster=CARDBOARD_CLUSTER_MAX):THREE.Group{
 const g=new THREE.Group();
 g.name='cardboardStub';
 g.rotation.y=yaw;
 g.userData.cluster=cardboardClusterCount(cluster);
 const mat=new THREE.MeshStandardMaterial({color:0xb89a6a,roughness:.92,metalness:0,emissive:0x2a2218,emissiveIntensity:.2});
 const tape=new THREE.MeshStandardMaterial({color:0xc8b070,roughness:.75,metalness:.05});
 const offsets=cardboardStackOffsets(g.userData.cluster);
 for(let s=0;s<offsets.length;s++)addStubStack(g,offsets[s],s*.21-.1,mat,tape);
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

/**
 * Barricade of Poly Haven cartons for a cover footprint.
 * Stacks run along local +X; rotate `yaw` (e.g. π/2) to face the fight.
 */
export function createCardboardCoverVisual(yaw=0,cluster=CARDBOARD_CLUSTER_MAX):THREE.Group{
 const root=new THREE.Group();
 root.name='cardboardCover';
 root.userData.cluster=cardboardClusterCount(cluster);
 // Stub owns the barricade yaw; root stays unrotated so upgrade can re-place stacks.
 root.add(createCardboardStub(yaw,root.userData.cluster));
 return root;
}

/** Swap the stub cluster for authored meshes. */
export async function upgradeCardboardCover(root:THREE.Group):Promise<boolean>{
 try{
  const scene=await loadProto();
  const stub=root.getObjectByName('cardboardStub');
  const yaw=stub?stub.rotation.y:0;
  const cluster=cardboardClusterCount(root.userData.cluster??stub?.userData.cluster??CARDBOARD_CLUSTER_MAX);
  if(stub)root.remove(stub);
  const offsets=cardboardStackOffsets(cluster);
  for(let s=0;s<offsets.length;s++){
   const stack=new THREE.Group();
   stack.name=`cardboardStack${s}`;
   stack.position.set(offsets[s],0,(s%3)*.04-.04);
   stack.rotation.y=yaw+s*.19-.12;
   for(let i=0;i<CARDBOARD_STACK;i++){
    const box=scene.clone(true);
    box.name=`cardboardBox${s}_${i}`;
    box.position.set((i%2)*.05-.025,CARDBOARD_BOX_HEIGHT*i,(i%3)*.03-.03);
    box.rotation.y=i*.21;
    stack.add(box);
   }
   root.add(stack);
  }
  root.userData.cluster=cluster;
  return true;
 }catch{
  return false;
 }
}
