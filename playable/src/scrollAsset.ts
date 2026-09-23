/**
 * Map-scrap scroll found inside dive crates.
 *
 * Sketchfab “Scroll (game ready asset)” by Aparicio Silva 3D (CC BY 4.0):
 * https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7
 *
 * `public/assets/scroll/scroll.gltf` is that model’s mesh (7,444 triangles)
 * with its public PBR atlas (albedo, normal, roughness, metallic, AO).
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const SCROLL_SOURCE='https://sketchfab.com/3d-models/scroll-game-ready-asset-c1503d2292c74faebf83a5937646c1c7';
export const SCROLL_AUTHOR='Aparicio Silva 3D';
export const SCROLL_LICENSE='CC BY 4.0';
const TEX='/assets/scroll/textures';
const GLTF='/assets/scroll/scroll.gltf';

export type ScrollVisual={
 root:THREE.Group;
 /** 0 hidden → 1 fully presented on an open crate. */
 present:number;
 ready:boolean;
};

let sharedMat:THREE.MeshStandardMaterial|null=null;
let loadPromise:Promise<THREE.Object3D>|null=null;

function stubMat(){
 return new THREE.MeshStandardMaterial({
  color:0xf2e2c0,roughness:.78,metalness:0,
  emissive:0xb89248,emissiveIntensity:1.05,
  side:THREE.DoubleSide,
 });
}

/** Cream roll shown until the authored glTF is ready. */
export function buildScrollStub(){
 const root=new THREE.Group();
 root.name='mapScroll';
 const body=new THREE.Mesh(new THREE.CylinderGeometry(.05,.05,.4,16,1,false),stubMat());
 body.rotation.z=Math.PI/2;
 body.castShadow=true;body.receiveShadow=true;
 root.add(body);
 const seal=new THREE.Mesh(new THREE.SphereGeometry(.028,10,8),new THREE.MeshStandardMaterial({
  color:0xd02030,roughness:.4,emissive:0x701018,emissiveIntensity:.8,
 }));
 seal.position.set(0,0,.06);
 root.add(seal);
 return root;
}

function loadTex(loader:THREE.TextureLoader,url:string,colorSpace?:THREE.ColorSpace){
 return new Promise<THREE.Texture>((resolve,reject)=>{
  loader.load(url,t=>{
   if(colorSpace)t.colorSpace=colorSpace;
   t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;
   t.anisotropy=4;
   t.needsUpdate=true;
   resolve(t);
  },undefined,reject);
 });
}

async function loadScrollMaterial(){
 if(sharedMat)return sharedMat;
 const loader=new THREE.TextureLoader();
 const [albedo,normal,roughness,metallic,ao]=await Promise.all([
  loadTex(loader,`${TEX}/albedo.jpg`,THREE.SRGBColorSpace),
  loadTex(loader,`${TEX}/normal.jpg`),
  loadTex(loader,`${TEX}/roughness.jpg`),
  loadTex(loader,`${TEX}/metallic.png`),
  loadTex(loader,`${TEX}/AO.jpg`),
 ]);
 sharedMat=new THREE.MeshStandardMaterial({
  map:albedo,
  normalMap:normal,
  roughnessMap:roughness,
  metalnessMap:metallic,
  aoMap:ao,
  roughness:1,
  metalness:1,
  aoMapIntensity:.85,
  // Warm lift so the parchment reads in cave murk without a bloom orb.
  emissive:new THREE.Color(0xc4a36a),
  emissiveIntensity:.38,
  side:THREE.DoubleSide,
 });
 return sharedMat;
}

function bindMaterial(root:THREE.Object3D,mat:THREE.Material){
 root.traverse(o=>{
  if(!(o instanceof THREE.Mesh))return;
  o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
  const uv=o.geometry.getAttribute('uv');
  if(uv&&!o.geometry.getAttribute('uv2'))o.geometry.setAttribute('uv2',uv);
  o.material=mat;
 });
}

/** Authored Sketchfab mesh, cloned per crate. Falls back to the stub. */
function loadScrollObject(){
 if(loadPromise)return loadPromise;
 loadPromise=(async()=>{
  try{
   const [gltf,mat]=await Promise.all([
    new GLTFLoader().loadAsync(GLTF),
    loadScrollMaterial(),
   ]);
   const scene=gltf.scene;
   scene.name='mapScroll';
   bindMaterial(scene,mat);
   return scene;
  }catch(err){
   console.warn('Scroll mesh failed to load; using stub.',err);
   return buildScrollStub();
  }
 })();
 return loadPromise;
}

export function createScrollVisual():ScrollVisual{
 const root=new THREE.Group();
 root.name='scrollVisual';
 root.visible=false;
 root.add(buildScrollStub());
 const visual:ScrollVisual={root,present:0,ready:false};
 if(typeof document==='undefined')return visual;
 loadScrollObject().then(src=>{
  const mesh=src.clone(true);
  while(root.children.length)root.remove(root.children[0]);
  root.add(mesh);
  visual.ready=true;
 });
 return visual;
}

type ScrollKind='military'|'plastic'|'suitcase';

/**
 * Clear interior of each crate, in chest-local metres (origin on the floor centre).
 * `span` is along the roll (local X), `across` is the tight plan width.
 */
export const SCROLL_CAVITY:Record<ScrollKind,{span:number;across:number;floor:number;rim:number;x:number;z:number}>={
 military:{span:1.15,across:.42,floor:.055,rim:.46,x:0,z:0},
 plastic:{span:.70,across:.48,floor:.04,rim:.40,x:0,z:0},
 suitcase:{span:.28,across:.04,floor:.04,rim:.28,x:0,z:-.036},
};
/** Authored mesh extents before the per-crate fit (metres). */
const MESH_LEN=.40;
const MESH_RAD=.046;

/** Scale and rest height so the roll lies inside the cavity, on its floor. */
export function scrollFit(kind:ScrollKind){
 const c=SCROLL_CAVITY[kind];
 const scale=Math.min(
  (c.span*.78)/MESH_LEN,
  (c.across*.9)/(MESH_RAD*2),
  ((c.rim-c.floor)*.85)/(MESH_RAD*2),
 );
 return{scale,y:c.floor+MESH_RAD*scale+.004,x:c.x,z:c.z};
}

/**
 * Rest the scroll on the crate floor (crate-local — parent it to the chest pivot).
 * `want` true while the crate is open and the scrap has not been taken.
 */
export function syncScrollPresent(
 visual:ScrollVisual,
 want:boolean,
 dt:number,
 kind:ScrollKind,
){
 const target=want?1:0;
 const k=1-Math.exp(-(want?5:7)*dt);
 visual.present+=(target-visual.present)*k;
 const t=visual.present;
 visual.root.visible=t>.02;
 const fit=scrollFit(kind);
 visual.root.position.set(fit.x,fit.y,fit.z);
 // Long axis along the crate; a small roll turns the seal without leaving the box.
 visual.root.rotation.set(.55,0,0);
 visual.root.scale.setScalar(fit.scale*(.94+.06*t));
}
