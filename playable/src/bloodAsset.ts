/**
 * Underwater blood particle maps (Kenney Particle Pack, CC0).
 *
 * Soft alpha sprites tinted deep red — used by CaveWorld Points systems so
 * death/hit blood reads as floating clouds, not square point sprites.
 *
 * Runtime files live in `public/assets/blood/` (copied into dist on build).
 */
import * as THREE from 'three';

/** Soft droplet billboard — Kenney circle_05. */
export const BLOOD_DROPLET_URL='/assets/blood/soft_circle.png';
/** Diffuse plume — Kenney smoke_03. */
export const BLOOD_PLUME_URL='/assets/blood/soft_smoke.png';
/** Soft glow core — Kenney circle_01 (optional accent). */
export const BLOOD_GLOW_URL='/assets/blood/soft_glow.png';

export type BloodMaps={droplet:THREE.Texture;plume:THREE.Texture;glow:THREE.Texture};

function prepMap(tex:THREE.Texture){
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;
 tex.minFilter=THREE.LinearMipmapLinearFilter;
 tex.magFilter=THREE.LinearFilter;
 tex.generateMipmaps=true;
 tex.needsUpdate=true;
 return tex;
}

/** Tiny procedural soft blob so Points never flash as square placeholders. */
export function makeSoftBlobTexture(size=64):THREE.DataTexture{
 const data=new Uint8Array(size*size*4);
 const mid=(size-1)*.5;
 for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
   const dx=(x-mid)/mid,dy=(y-mid)/mid;
   const r=Math.sqrt(dx*dx+dy*dy);
   const a=Math.max(0,1-r);
   const soft=Math.pow(a,2.2)*255;
   const i=(y*size+x)*4;
   data[i]=255;data[i+1]=255;data[i+2]=255;data[i+3]=soft;
  }
 }
 const tex=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.needsUpdate=true;
 return tex;
}

/** Load Kenney soft maps (falls back to procedural blobs on failure). */
export function loadBloodMaps():Promise<BloodMaps>{
 const loader=new THREE.TextureLoader();
 const loadOne=(url:string)=>new Promise<THREE.Texture>((resolve)=>{
  loader.load(url,t=>resolve(prepMap(t)),undefined,()=>resolve(makeSoftBlobTexture()));
 });
 return Promise.all([loadOne(BLOOD_DROPLET_URL),loadOne(BLOOD_PLUME_URL),loadOne(BLOOD_GLOW_URL)])
  .then(([droplet,plume,glow])=>({droplet,plume,glow}));
}
