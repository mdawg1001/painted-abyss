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
