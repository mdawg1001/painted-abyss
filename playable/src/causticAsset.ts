/**
 * Animated water-caustics atlas (OpenGameArt “Water Caustics Effect”, CC0).
 *
 * 16-frame 4×4 atlas projected as soft additive floor pools under ceiling
 * light shafts — local pools only, not a global floor wash.
 *
 * Runtime file: `public/assets/caustics/caustics_atlas.png`.
 */
import * as THREE from 'three';

export const CAUSTIC_ATLAS_URL='/assets/caustics/caustics_atlas.png';

/** Soft procedural fallback so pools never flash untextured white. */
export function makeCausticFallbackTexture(size=64):THREE.DataTexture{
 const data=new Uint8Array(size*size*4);
 const mid=(size-1)*.5;
 for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
   const dx=(x-mid)/mid,dy=(y-mid)/mid;
   const r=Math.sqrt(dx*dx+dy*dy);
   const ripple=Math.pow(Math.max(0,1-r),2.4);
   const bands=.55+.45*Math.sin((x+y)*.55)*Math.sin((x-y)*.4);
   const v=Math.min(255,ripple*bands*255);
   const i=(y*size+x)*4;
   data[i]=v;data[i+1]=Math.min(255,v*1.05);data[i+2]=Math.min(255,v*1.1);data[i+3]=Math.min(255,ripple*220);
  }
 }
 const tex=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.needsUpdate=true;
 return tex;
}

function prepAtlas(tex:THREE.Texture){
 tex.colorSpace=THREE.SRGBColorSpace;
 tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;
 tex.minFilter=THREE.LinearFilter;
 tex.magFilter=THREE.LinearFilter;
 tex.generateMipmaps=false;
 tex.needsUpdate=true;
 return tex;
}

/** Load the 4×4 caustics atlas (falls back to a soft procedural tile). */
export function loadCausticAtlas():Promise<THREE.Texture>{
 return new Promise((resolve)=>{
  new THREE.TextureLoader().load(
   CAUSTIC_ATLAS_URL,
   t=>resolve(prepAtlas(t)),
   undefined,
   ()=>resolve(makeCausticFallbackTexture()),
  );
 });
}
