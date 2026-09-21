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
  color:0xffe6b0,roughness:.75,metalness:0,
  emissive:0xc4923a,emissiveIntensity:1.35,
  side:THREE.DoubleSide,
 });
 const wood=new THREE.MeshStandardMaterial({
  color:0x8a5530,roughness:.85,metalness:.05,
  emissive:0x4a2810,emissiveIntensity:.7,
 });
 const wax=new THREE.MeshStandardMaterial({
  color:0xe03040,roughness:.45,metalness:.05,
  emissive:0x801018,emissiveIntensity:1.1,
 });
 return[parchment,wood,wax];
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
   const[map,roughnessMap,metalnessMap,normalMap,aoMap,emissiveMap]=await Promise.all([
    loadTex(loader,`${TEX}/albedo.jpg`,THREE.SRGBColorSpace),
    loadTex(loader,`${TEX}/roughness.jpg`),
    loadTex(loader,`${TEX}/metallic.png`),
    loadTex(loader,`${TEX}/normal.jpg`),
    loadTex(loader,`${TEX}/AO.jpg`),
    loadTex(loader,`${TEX}/emissive.jpg`,THREE.SRGBColorSpace),
   ]);
   const parchment=new THREE.MeshStandardMaterial({
    map,roughnessMap,metalnessMap,normalMap,aoMap,emissiveMap,
    color:0xffffff,roughness:1,metalness:1,
    emissive:new THREE.Color(0xffd090),emissiveIntensity:1.25,
    aoMapIntensity:.7,normalScale:new THREE.Vector2(.9,.9),
    side:THREE.DoubleSide,
   });
   const wood=new THREE.MeshStandardMaterial({
    map,roughnessMap,metalnessMap,normalMap,aoMap,
    color:0xffffff,roughness:1,metalness:.15,
    emissive:0x3a2010,emissiveIntensity:.4,
    aoMapIntensity:1,normalScale:new THREE.Vector2(.55,.55),
   });
   const wax=new THREE.MeshStandardMaterial({
    color:0xb02838,roughness:.45,metalness:.08,
    emissive:0x5a1018,emissiveIntensity:.65,
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

/** Build a rolled parchment scroll (~35 cm) with end rods and a wax seal. */
export function buildScrollMesh(mats:THREE.MeshStandardMaterial[]){
 const[parchment,wood,wax]=mats;
 const root=new THREE.Group();
 root.name='mapScroll';

 const body=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.3,24,1,false),parchment);
 body.rotation.z=Math.PI/2;
 body.castShadow=true;body.receiveShadow=true;
 root.add(body);

 const wrap=new THREE.Mesh(new THREE.CylinderGeometry(.058,.052,.24,24,1,true),parchment);
 wrap.rotation.z=Math.PI/2;
 wrap.castShadow=true;
 root.add(wrap);

 for(const x of[-.17,.17]){
  const rod=new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,.36,12),wood);
  rod.rotation.z=Math.PI/2;
  rod.position.x=x;
  rod.castShadow=true;
  root.add(rod);
  const knobL=new THREE.Mesh(new THREE.SphereGeometry(.024,10,8),wood);
  knobL.position.set(x,-.19,0);
  root.add(knobL);
  const knobR=new THREE.Mesh(new THREE.SphereGeometry(.024,10,8),wood);
  knobR.position.set(x,.19,0);
  root.add(knobR);
 }

 const seal=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,.014,16),wax);
 seal.rotation.x=Math.PI/2;
 seal.position.set(0,0,.062);
 root.add(seal);

 // Unfurled tongue of parchment so the scrap reads as a map, not just a dark rod.
 const sheet=new THREE.Mesh(new THREE.PlaneGeometry(.28,.2),parchment);
 sheet.position.set(0,.055,.04);
 sheet.rotation.x=-1.15; // nearly face-up toward the diver looking down
 sheet.castShadow=true;
 root.add(sheet);

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
 * Present the scroll on the open crate mouth (world-space, clear of the lid cavity).
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
 const lift=kind==='suitcase'?.48:kind==='plastic'?.55:.72;
 const forward=kind==='plastic'?.14:.22;
 // Spill toward +local Z of the crate (sin/cos of yaw) so the roll sits on the rim.
 const fx=Math.sin(chestYaw)*forward;
 const fz=Math.cos(chestYaw)*forward;
 visual.root.position.set(chestPos.x+fx,chestPos.y+lift+.08*t,chestPos.z+fz);
 visual.root.rotation.set(-.55+.15*t,chestYaw+.85,0);
 visual.root.scale.setScalar(1.45+.45*t);
}
