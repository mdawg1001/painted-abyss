/**
 * Wall posters — Sketchfab “Poster from Soviet Union” by PotatoWit (CC BY 4.0).
 * https://sketchfab.com/3d-models/poster-from-soviet-union-49a80251d7e543289b1deb656b15017a
 *
 * Official downloadable glTF needs Sketchfab OAuth; First Dive ships the two
 * weathered propaganda sheets from the model’s public preview as alpha planes
 * bolted to a cave wall face (same mount math as the Poly Haven sconces).
 */
import * as THREE from 'three';
import { wallSconceMounts, type SconceMount } from './sconceAsset';

export const POSTER_SOURCE='https://sketchfab.com/3d-models/poster-from-soviet-union-49a80251d7e543289b1deb656b15017a';
export const POSTER_AUTHOR='PotatoWit';
export const POSTER_LICENSE='CC BY 4.0';
export const POSTER_TEX_LITERACY='/assets/soviet-poster/textures/poster_literacy_albedo.png';
export const POSTER_TEX_SILENCE='/assets/soviet-poster/textures/poster_silence_albedo.png';

/** Poster sheet height in metres once hung. */
export const POSTER_TARGET_HEIGHT=1.55;
/** Centre height on the wall (above floor). */
export const POSTER_MOUNT_Y=3.35;
/** Horizontal gap between the two sheets (metres). */
export const POSTER_GAP=.12;
/** Aspect ≈ cropped preview sheets (width / height). */
export const POSTER_ASPECT=.72;

export type WallPosters={group:THREE.Group;ready:boolean};

const inwardVec=(yaw:number)=>new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));

/**
 * Pick a wall face that is not the first sconce cluster — far enough from start
 * to read as set dressing, still on a real solid wall.
 */
export function wallPosterMount(sconceMinDistance=14):SconceMount{
 const sconces=wallSconceMounts(sconceMinDistance,26);
 const candidates=wallSconceMounts(8,60);
 // Prefer a mount clear of every sconce so the posters aren’t buried in lamp glare.
 for(const m of candidates){
  if(sconces.every(s=>Math.hypot(s.x-m.x,s.z-m.z)>4.5))return m;
 }
 return candidates[Math.min(3,candidates.length-1)]??sconces[0]??{x:0,z:-20,yaw:0};
}

function sheetGeo(aspect=POSTER_ASPECT){
 const h=1,w=aspect;
 const g=new THREE.PlaneGeometry(w,h,1,1);
 return g;
}

function stubMat(tint:number){
 return new THREE.MeshStandardMaterial({
  color:tint,roughness:.88,metalness:0,
  emissive:0x2a1810,emissiveIntensity:.35,
  side:THREE.DoubleSide,
  transparent:true,alphaTest:.35,
 });
}

/** Cream rectangles until the PNG albedos arrive. */
export function buildPosterStub(mount:SconceMount):THREE.Group{
 const root=new THREE.Group();
 root.name='sovietPostersStub';
 const h=POSTER_TARGET_HEIGHT;
 const w=h*POSTER_ASPECT;
 const gap=POSTER_GAP;
 const inward=inwardVec(mount.yaw);
 const right=new THREE.Vector3(Math.cos(mount.yaw),0,-Math.sin(mount.yaw));
 const sheets=[
  {x:-(w+gap)*.5,mat:stubMat(0xd8c4a0)},
  {x:(w+gap)*.5,mat:stubMat(0xc9c49a)},
 ];
 for(const s of sheets){
  const mesh=new THREE.Mesh(sheetGeo(),s.mat);
  mesh.scale.set(h,h,1);
  mesh.position.copy(new THREE.Vector3(mount.x,POSTER_MOUNT_Y,mount.z))
   .addScaledVector(inward,.04)
   .addScaledVector(right,s.x);
  mesh.rotation.y=mount.yaw;
  mesh.castShadow=true;mesh.receiveShadow=true;
  root.add(mesh);
 }
 return root;
}

function loadTex(url:string){
 return new Promise<THREE.Texture>((resolve,reject)=>{
  new THREE.TextureLoader().load(url,t=>{
   t.colorSpace=THREE.SRGBColorSpace;
   t.anisotropy=4;
   t.wrapS=t.wrapT=THREE.ClampToEdgeWrapping;
   t.needsUpdate=true;
   resolve(t);
  },undefined,reject);
 });
}

/**
 * Hang both PotatoWit sheets on one wall face. Stub shows immediately; PNGs
 * upgrade in the background (alpha-tested torn edges).
 */
export function createWallPosters(mount?:SconceMount):WallPosters{
 const m=mount??wallPosterMount();
 const group=new THREE.Group();
 group.name='sovietPosters';
 group.userData.mount=m;
 group.add(buildPosterStub(m));
 return{group,ready:false};
}

export async function upgradeWallPosters(visual:WallPosters):Promise<boolean>{
 const mount=visual.group.userData.mount as SconceMount;
 if(typeof document==='undefined')return false;
 try{
  const [lit,sil]=await Promise.all([
   loadTex(POSTER_TEX_LITERACY),
   loadTex(POSTER_TEX_SILENCE),
  ]);
  const h=POSTER_TARGET_HEIGHT;
  const w=h*POSTER_ASPECT;
  const gap=POSTER_GAP;
  const inward=inwardVec(mount.yaw);
  const right=new THREE.Vector3(Math.cos(mount.yaw),0,-Math.sin(mount.yaw));
  const sheets=[
   {tex:lit,x:-(w+gap)*.5},
   {tex:sil,x:(w+gap)*.5},
  ];
  while(visual.group.children.length)visual.group.remove(visual.group.children[0]);
  for(const s of sheets){
   const mat=new THREE.MeshStandardMaterial({
    map:s.tex,
    transparent:true,
    alphaTest:.4,
    roughness:.82,
    metalness:0,
    // Warm lift so the propaganda art reads in cave murk without a dedicated lamp.
    emissive:new THREE.Color(0xffffff),
    emissiveMap:s.tex,
    emissiveIntensity:.55,
    side:THREE.DoubleSide,
    depthWrite:true,
   });
   const mesh=new THREE.Mesh(sheetGeo(s.tex.image?s.tex.image.width/s.tex.image.height:POSTER_ASPECT),mat);
   // PlaneGeometry is aspect×1; scale by height so sheet is POSTER_TARGET_HEIGHT tall.
   mesh.scale.setScalar(h);
   mesh.position.copy(new THREE.Vector3(mount.x,POSTER_MOUNT_Y,mount.z))
    .addScaledVector(inward,.04)
    .addScaledVector(right,s.x);
   mesh.rotation.y=mount.yaw;
   mesh.castShadow=true;mesh.receiveShadow=true;
   mesh.frustumCulled=false;
   visual.group.add(mesh);
  }
  visual.ready=true;
  return true;
 }catch(err){
  console.warn('Soviet posters failed to load; keeping stubs.',err);
  return false;
 }
}
