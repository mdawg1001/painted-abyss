/**
 * Map-scrap scroll found inside dive crates.
 *
 * PBR maps from Sketchfab “Scroll (game ready asset)” by Aparicio Silva 3D
 * (CC BY 4.0). The authored mesh requires a Sketchfab login to download; First
 * Dive builds a dive-tuned scroll mesh and maps those public textures onto it.
 */
import * as THREE from 'three';

export const SCROLL_SOURCE='https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7';
export const SCROLL_AUTHOR='Aparicio Silva 3D';
export const SCROLL_LICENSE='CC BY 4.0';
const TEX='/assets/scroll/textures';

export type ScrollVisual={
 root:THREE.Group;
 /** 0 hidden → 1 fully presented inside an open crate. */
 present:number;
 ready:boolean;
};

let sharedMats:THREE.MeshStandardMaterial[]|null=null;
let loadPromise:Promise<THREE.MeshStandardMaterial[]>|null=null;

function stubMats(){
 const parchment=new THREE.MeshStandardMaterial({
  color:0xc4a574,roughness:.85,metalness:.02,
  emissive:0x3a2a12,emissiveIntensity:.35,
 });
 const wood=new THREE.MeshStandardMaterial({
  color:0x4a3020,roughness:.9,metalness:.05,
  emissive:0x1a1008,emissiveIntensity:.25,
 });
 const wax=new THREE.MeshStandardMaterial({
  color:0x8a2030,roughness:.55,metalness:.05,
  emissive:0x3a0810,emissiveIntensity:.4,
 });
 return[parchment,wood,wax];
}

async function loadScrollMaterials(){
 if(sharedMats)return sharedMats;
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  const loader=new THREE.TextureLoader();
  const load=(url:string,colorSpace?:THREE.ColorSpace)=>{
   const t=loader.load(url);
   if(colorSpace)t.colorSpace=colorSpace;
   t.wrapS=t.wrapT=THREE.RepeatWrapping;
   t.anisotropy=4;
   return t;
  };
  try{
   const map=load(`${TEX}/albedo.jpg`,THREE.SRGBColorSpace);
   const roughnessMap=load(`${TEX}/roughness.jpg`);
   const metalnessMap=load(`${TEX}/metallic.png`);
   const normalMap=load(`${TEX}/normal.jpg`);
   const aoMap=load(`${TEX}/AO.jpg`);
   const emissiveMap=load(`${TEX}/emissive.jpg`,THREE.SRGBColorSpace);
   const parchment=new THREE.MeshStandardMaterial({
    map,roughnessMap,metalnessMap,normalMap,aoMap,emissiveMap,
    roughness:1,metalness:1,emissive:new THREE.Color(0xffffff),emissiveIntensity:.55,
    aoMapIntensity:1,normalScale:new THREE.Vector2(.85,.85),
    side:THREE.DoubleSide,
   });
   const wood=new THREE.MeshStandardMaterial({
    map,roughnessMap,metalnessMap,normalMap,aoMap,
    color:0xffffff,roughness:1,metalness:.2,
    emissive:0x2a1a0c,emissiveIntensity:.3,
    aoMapIntensity:1,normalScale:new THREE.Vector2(.6,.6),
   });
   const wax=new THREE.MeshStandardMaterial({
    color:0x9a2434,roughness:.45,metalness:.08,
    emissive:0x4a1018,emissiveIntensity:.45,
   });
   sharedMats=[parchment,wood,wax];
   return sharedMats;
  }catch(err){
   console.warn('Scroll textures failed; using stub materials.',err);
   sharedMats=stubMats();
   return sharedMats;
  }
 })();
 return loadPromise;
}

/** Build a rolled parchment scroll (~30 cm) with end rods and a wax seal. */
export function buildScrollMesh(mats:THREE.MeshStandardMaterial[]){
 const [parchment,wood,wax]=mats;
 const root=new THREE.Group();
 root.name='mapScroll';

 // Main roll body.
 const body=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.28,24,1,false),parchment);
 body.rotation.z=Math.PI/2;
 body.castShadow=true;body.receiveShadow=true;
 root.add(body);

 // Slightly flared outer wrap so it reads as layered parchment.
 const wrap=new THREE.Mesh(new THREE.CylinderGeometry(.052,.048,.22,24,1,true),parchment);
 wrap.rotation.z=Math.PI/2;
 wrap.castShadow=true;
 root.add(wrap);

 // Wooden end rods.
 for(const x of[-.155,.155]){
  const rod=new THREE.Mesh(new THREE.CylinderGeometry(.018,.018,.34,12),wood);
  rod.rotation.z=Math.PI/2;
  rod.position.x=x;
  rod.castShadow=true;
  root.add(rod);
  const knobL=new THREE.Mesh(new THREE.SphereGeometry(.022,10,8),wood);
  knobL.position.set(x,-.175,0);
  root.add(knobL);
  const knobR=new THREE.Mesh(new THREE.SphereGeometry(.022,10,8),wood);
  knobR.position.set(x,.175,0);
  root.add(knobR);
 }

 // Wax seal on the facing side.
 const seal=new THREE.Mesh(new THREE.CylinderGeometry(.028,.028,.012,16),wax);
 seal.rotation.x=Math.PI/2;
 seal.position.set(0,0,.055);
 root.add(seal);

 // Soft glow so the scrap reads in murk.
 const glow=new THREE.PointLight(0xd4b878,1.2,2.4,2);
 glow.position.set(0,.05,.08);
 root.add(glow);

 root.scale.setScalar(1);
 return root;
}

export function createScrollVisual():ScrollVisual{
 const root=new THREE.Group();
 root.name='scrollVisual';
 root.visible=false;
 const stub=buildScrollMesh(stubMats());
 root.add(stub);
 const visual:ScrollVisual={root,present:0,ready:false};
 loadScrollMaterials().then(mats=>{
  while(root.children.length)root.remove(root.children[0]);
  root.add(buildScrollMesh(mats));
  visual.ready=true;
 });
 return visual;
}

/**
 * Present the scroll inside an open crate (rise + face-up).
 * `want` true while the crate is open and the scrap has not been taken.
 */
export function syncScrollPresent(visual:ScrollVisual,want:boolean,dt:number,kind:'military'|'plastic'|'suitcase'){
 const target=want?1:0;
 const k=1-Math.exp(-(want?5:7)*dt);
 visual.present+= (target-visual.present)*k;
 const t=visual.present;
 visual.root.visible=t>.02;
 // Nest height by crate kind so the scrap sits in the opening.
 const baseY=kind==='suitcase'?.22:kind==='plastic'?.28:.32;
 visual.root.position.set(0,baseY+.06*t,kind==='plastic'?.05:0);
 visual.root.rotation.set(-.35+.1*t,.4,0);
 visual.root.scale.setScalar(.55+.45*t);
 // Dim the point light when hidden so closed crates stay dark.
 visual.root.traverse(o=>{
  if(o instanceof THREE.PointLight)o.intensity=1.2*t;
 });
}
