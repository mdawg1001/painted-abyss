/**
 * Dive chests (Poly Haven crates / suitcase).
 * Runtime files live in `public/assets/chests/<kind>/` so glTF relative URIs resolve.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export type ChestKind='military'|'plastic'|'suitcase';

export const CHEST_META:Record<ChestKind,{
 label:string;
 folder:string;
 gltf:string;
 /** Target footprint height (m) after normalize. */
 targetHeight:number;
 source:string;
 author:string;
}>= {
 military:{
  label:'military crate',
  folder:'wooden_military_crate',
  gltf:'wooden_military_crate_1k.gltf',
  targetHeight:.55,
  source:'https://polyhaven.com/a/wooden_military_crate',
  author:'Prabhjinder Singh',
 },
 plastic:{
  label:'plastic crate',
  folder:'plastic_crate_02',
  gltf:'plastic_crate_02_1k.gltf',
  targetHeight:.45,
  source:'https://polyhaven.com/a/plastic_crate_02',
  author:'Fabi_G',
 },
 suitcase:{
  label:'vintage suitcase',
  folder:'vintage_suitcase',
  gltf:'vintage_suitcase_1k.gltf',
  targetHeight:.38,
  source:'https://polyhaven.com/a/vintage_suitcase',
  author:'Maximilian Schuster',
 },
};

const BASE='/assets/chests';

/** Brighten PBR mats so crates read under cave murk without a strong env map. */
export function litChestMaterials(root:THREE.Object3D,kind?:ChestKind){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=false;o.receiveShadow=false;o.frustumCulled=true;
  const mats=Array.isArray(o.material)?o.material:[o.material];
  for(const m of mats){
   if(!m||!('roughness' in m))continue;
   const sm=m as THREE.MeshStandardMaterial;
   // Poly Haven plastic_crate_02 ships alphaMode=BLEND — under murk that reads as
   // missing walls. Force opaque + double-sided so vented sides stay solid.
   sm.transparent=false;
   sm.opacity=1;
   sm.depthWrite=true;
   sm.alphaTest=0;
   sm.side=THREE.DoubleSide;
   sm.envMapIntensity=.35;
   sm.emissive=new THREE.Color(kind==='plastic'?0x3a2810:0x2a3840);
   sm.emissiveIntensity=kind==='plastic'?.22:.38;
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
 // Sit on local y=0, centered in XZ.
 root.position.x-=center.x;
 root.position.z-=center.z;
 root.position.y-=box.min.y;
}

/** Procedural stand-in while glTF loads. */
export function createChestStub(kind:ChestKind):THREE.Group{
 const g=new THREE.Group();
 g.name=`chestStub-${kind}`;
 const meta=CHEST_META[kind];
 const color=kind==='military'?0x6b5a3a:kind==='plastic'?0x3a6a78:0x5a4030;
 const body=new THREE.Mesh(
  new THREE.BoxGeometry(kind==='suitcase'?.7:.85,meta.targetHeight*.85,kind==='suitcase'?.45:.55),
  new THREE.MeshStandardMaterial({color,roughness:.85,metalness:.08,emissive:0x12181c,emissiveIntensity:.2}),
 );
 body.position.y=meta.targetHeight*.42;
 g.add(body);
 if(kind!=='plastic'){
  const lid=new THREE.Mesh(
   new THREE.BoxGeometry(kind==='suitcase'?.7:.85,.06,kind==='suitcase'?.45:.55),
   new THREE.MeshStandardMaterial({color:color+0x101010,roughness:.8,metalness:.12}),
  );
  lid.name='stubLid';
  lid.position.y=meta.targetHeight*.85;
  g.add(lid);
 }
 litChestMaterials(g,kind);
 return g;
}

export type ChestVisual={
 /** World-placed group (position / yaw). */
 root:THREE.Group;
 /** Inner pivot for open/tip animation — never overwrite with facing yaw. */
 pivot:THREE.Group;
 kind:ChestKind;
 /** Object to rotate when open (lid / top / pivot for plastic). */
 lid:THREE.Object3D|null;
 /** Closed / open local rotations (radians). */
 closedRot:THREE.Euler;
 openRot:THREE.Euler;
 ready:boolean;
};

function pickLid(kind:ChestKind,scene:THREE.Object3D):THREE.Object3D|null{
 if(kind==='military'){
  return scene.getObjectByName('wooden_military_crate_lid')
   ?? scene.children.find(c=>/lid/i.test(c.name))
   ?? null;
 }
 if(kind==='suitcase'){
  // Prefer the first suitcase; hide the duplicate twin in the file.
  for(const name of ['vintage_suitcase_02_bottom','vintage_suitcase_02_clasp','vintage_suitcase_02_handle','vintage_suitcase_02_top']){
   const o=scene.getObjectByName(name);if(o)o.visible=false;
  }
  return scene.getObjectByName('vintage_suitcase_01_top')
   ?? scene.children.find(c=>/01_top|_top$/i.test(c.name))
   ?? null;
 }
 return null;
}

function openPose(kind:ChestKind,lid:THREE.Object3D|null):{closed:THREE.Euler;open:THREE.Euler}{
 if(kind==='plastic'){
  // Stay upright — tip looked like broken mesh; open = slight hop + yaw wiggle only.
  return{closed:new THREE.Euler(0,0,0),open:new THREE.Euler(0,.35,0)};
 }
 if(kind==='suitcase'){
  return{closed:new THREE.Euler().copy(lid?.rotation??new THREE.Euler()),open:new THREE.Euler(-1.15,lid?.rotation.y??0,lid?.rotation.z??0)};
 }
 // Military crate lid hinges back.
 return{closed:new THREE.Euler().copy(lid?.rotation??new THREE.Euler()),open:new THREE.Euler(-1.35,lid?.rotation.y??0,lid?.rotation.z??0)};
}

export function createChestVisual(kind:ChestKind):ChestVisual{
 const root=new THREE.Group();
 root.name=`chest-${kind}`;
 const pivot=new THREE.Group();
 pivot.name=`chestPivot-${kind}`;
 root.add(pivot);
 const stub=createChestStub(kind);
 pivot.add(stub);
 const lid=stub.getObjectByName('stubLid')??null;
 const pose=openPose(kind,lid);
 return{
  root,pivot,kind,
  lid:kind==='plastic'?pivot:lid,
  closedRot:pose.closed,openRot:pose.open,ready:false,
 };
}

/** Replace stub with Poly Haven glTF. */
export async function upgradeChestVisual(visual:ChestVisual):Promise<boolean>{
 const meta=CHEST_META[visual.kind];
 try{
  const loader=new GLTFLoader();
  loader.setPath(`${BASE}/${meta.folder}/`);
  const gltf=await loader.loadAsync(meta.gltf);
  const scene=gltf.scene;
  litChestMaterials(scene,visual.kind);
  normalizeToFloor(scene,meta.targetHeight);
  while(visual.pivot.children.length)visual.pivot.remove(visual.pivot.children[0]);
  visual.pivot.add(scene);
  const lid=pickLid(visual.kind,scene);
  const pose=openPose(visual.kind,lid);
  visual.lid=visual.kind==='plastic'?visual.pivot:lid;
  visual.closedRot=pose.closed;
  visual.openRot=pose.open;
  if(visual.lid)visual.lid.rotation.copy(visual.closedRot);
  visual.ready=true;
  return true;
 }catch(err){
  console.warn(`Chest ${visual.kind} failed to load; keeping stub.`,err);
  return false;
 }
}

/** Ease lid / tip toward open or closed. */
export function syncChestOpen(visual:ChestVisual,open:boolean,dt:number){
 const target=open?visual.openRot:visual.closedRot;
 const obj=visual.lid??visual.pivot;
 const k=1-Math.exp(-(open?6:4)*dt);
 obj.rotation.x+= (target.x-obj.rotation.x)*k;
 obj.rotation.y+= (target.y-obj.rotation.y)*k;
 obj.rotation.z+= (target.z-obj.rotation.z)*k;
}
