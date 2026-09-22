/**
 * Map-scrap scroll found inside dive crates.
 *
 * Inspired by Sketchfab “Scroll (game ready asset)” by Aparicio Silva 3D
 * (CC BY 4.0) — https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7
 *
 * Sketchfab requires an account to download the authored mesh. First Dive uses
 * a parchment crop from that model’s public albedo atlas on a dive-tuned roll
 * (leather band, rope wraps, wax seal) so the scrap reads clearly in murk.
 */
import * as THREE from 'three';

export const SCROLL_SOURCE='https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7';
export const SCROLL_AUTHOR='Aparicio Silva 3D';
export const SCROLL_LICENSE='CC BY 4.0';
const TEX='/assets/scroll/textures';

export type ScrollVisual={
 root:THREE.Group;
 /** 0 hidden → 1 fully presented on an open crate. */
 present:number;
 ready:boolean;
};

type ScrollMats={paper:THREE.MeshStandardMaterial;leather:THREE.MeshStandardMaterial;rope:THREE.MeshStandardMaterial;wax:THREE.MeshStandardMaterial};
let sharedMats:ScrollMats|null=null;
let loadPromise:Promise<ScrollMats>|null=null;

function stubMats(){
 return{
  paper:new THREE.MeshStandardMaterial({
   color:0xf2e2c0,roughness:.78,metalness:0,
   emissive:0xb89248,emissiveIntensity:1.15,
   side:THREE.DoubleSide,
  }),
  leather:new THREE.MeshStandardMaterial({
   color:0x4a2a14,roughness:.88,metalness:.05,
   emissive:0x2a1408,emissiveIntensity:.55,
  }),
  rope:new THREE.MeshStandardMaterial({
   color:0x6a4424,roughness:.92,metalness:0,
   emissive:0x3a2010,emissiveIntensity:.45,
  }),
  wax:new THREE.MeshStandardMaterial({
   color:0xd02030,roughness:.42,metalness:.08,
   emissive:0x701018,emissiveIntensity:1.05,
  }),
 };
}

function loadTex(loader:THREE.TextureLoader,url:string,colorSpace?:THREE.ColorSpace){
 return new Promise<THREE.Texture>((resolve,reject)=>{
  loader.load(url,t=>{
   if(colorSpace)t.colorSpace=colorSpace;
   t.wrapS=t.wrapT=THREE.RepeatWrapping;
   t.anisotropy=4;
   t.needsUpdate=true;
   resolve(t);
  },undefined,reject);
 });
}

async function loadScrollMaterials(){
 if(sharedMats)return sharedMats;
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  const loader=new THREE.TextureLoader();
  try{
   // Parchment crop from the Sketchfab albedo atlas (lower-right UV island).
   const paperMap=await loadTex(loader,`${TEX}/parchment.jpg`,THREE.SRGBColorSpace);
   paperMap.repeat.set(1.6,1.2);
   const paper=new THREE.MeshStandardMaterial({
    map:paperMap,color:0xffffff,roughness:.8,metalness:0,
    emissive:new THREE.Color(0xc9a060),emissiveIntensity:1.05,
    side:THREE.DoubleSide,
   });
   const leather=new THREE.MeshStandardMaterial({
    color:0x3f2412,roughness:.9,metalness:.04,
    emissive:0x241208,emissiveIntensity:.5,
   });
   const rope=new THREE.MeshStandardMaterial({
    color:0x6e4726,roughness:.95,metalness:0,
    emissive:0x3a2010,emissiveIntensity:.4,
   });
   const wax=new THREE.MeshStandardMaterial({
    color:0xd42232,roughness:.4,metalness:.1,
    emissive:0x801018,emissiveIntensity:1.1,
   });
   sharedMats={paper,leather,rope,wax};
   return sharedMats;
  }catch(err){
   console.warn('Scroll parchment texture failed; using stub materials.',err);
   sharedMats=stubMats();
   return sharedMats;
  }
 })();
 return loadPromise;
}

/** Tightly rolled parchment with leather band, rope, and wax seal (matches Sketchfab look). */
export function buildScrollMesh(mats:ScrollMats){
 const{paper,leather,rope,wax}=mats;
 const root=new THREE.Group();
 root.name='mapScroll';

 // Main cream roll — axis along X so it sits across the crate mouth.
 const body=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.34,28,1,false),paper);
 body.rotation.z=Math.PI/2;
 body.castShadow=true;body.receiveShadow=true;
 root.add(body);

 // Slight outer wrap so layered parchment reads.
 const wrap=new THREE.Mesh(new THREE.CylinderGeometry(.062,.058,.3,28,1,true),paper);
 wrap.rotation.z=Math.PI/2;
 wrap.castShadow=true;
 root.add(wrap);

 // Frayed end lips (thicker rings).
 for(const x of[-.175,.175]){
  const lip=new THREE.Mesh(new THREE.TorusGeometry(.058,.012,8,20),paper);
  lip.rotation.y=Math.PI/2;
  lip.position.x=x;
  root.add(lip);
 }

 // Dark leather band around the middle.
 const band=new THREE.Mesh(new THREE.CylinderGeometry(.068,.068,.055,24,1,false),leather);
 band.rotation.z=Math.PI/2;
 band.castShadow=true;
 root.add(band);

 // Coarse rope wraps (three thin tori around the band).
 for(const x of[-.018,0,.018]){
  const cord=new THREE.Mesh(new THREE.TorusGeometry(.072,.007,6,24),rope);
  cord.rotation.y=Math.PI/2;
  cord.position.x=x;
  root.add(cord);
 }

 // Bright red wax seal on the facing side.
 const seal=new THREE.Mesh(new THREE.CylinderGeometry(.032,.036,.016,18),wax);
 seal.rotation.x=Math.PI/2;
 seal.position.set(0,0,.078);
 seal.castShadow=true;
 root.add(seal);
 const sealBoss=new THREE.Mesh(new THREE.SphereGeometry(.012,10,8),wax);
 sealBoss.position.set(0,0,.09);
 root.add(sealBoss);

 root.scale.setScalar(1);
 return root;
}

export function createScrollVisual():ScrollVisual{
 const root=new THREE.Group();
 root.name='scrollVisual';
 root.visible=false;
 root.add(buildScrollMesh(stubMats()));
 const visual:ScrollVisual={root,present:0,ready:false};
 loadScrollMaterials().then(mats=>{
  if(!mats)return;
  while(root.children.length)root.remove(root.children[0]);
  root.add(buildScrollMesh(mats));
  visual.ready=true;
 });
 return visual;
}

/**
 * Present the scroll on the open crate mouth (world-space).
 * `want` true while the crate is open and the scrap has not been taken.
 */
export function syncScrollPresent(
 visual:ScrollVisual,
 want:boolean,
 dt:number,
 kind:'military'|'plastic'|'suitcase',
 chestPos:{x:number;y:number;z:number},
 chestYaw:number,
){
 const target=want?1:0;
 const k=1-Math.exp(-(want?5:7)*dt);
 visual.present+=(target-visual.present)*k;
 const t=visual.present;
 visual.root.visible=t>.02;
 const lift=kind==='suitcase'?.5:kind==='plastic'?.58:.74;
 const forward=kind==='plastic'?.16:.24;
 const fx=Math.sin(chestYaw)*forward;
 const fz=Math.cos(chestYaw)*forward;
 visual.root.position.set(chestPos.x+fx,chestPos.y+lift+.06*t,chestPos.z+fz);
 // Roll lies across the rim, seal facing the diver.
 visual.root.rotation.set(-.35+.1*t,chestYaw+.15,.15);
 visual.root.scale.setScalar(1.35+.4*t);
}
