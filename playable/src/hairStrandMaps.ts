/**
 * Procedural hair strand PBR maps for colourful-guard Hair_* / Facial_* kits.
 * Original — not from the Unity Asset Store (project policy: no Unity character assets).
 * Greyscale albedo is tinted at runtime via `material.color` (archetype hairColor).
 * Alpha cutouts suit hair-card geometry (planes), not solid plastic blobs.
 */
import * as THREE from 'three';

let cached:{
 albedo:THREE.DataTexture;
 normal:THREE.DataTexture;
 roughness:THREE.DataTexture;
}|null=null;

function hash2(x:number,y:number){
 const n=Math.sin(x*127.1+y*311.7)*43758.5453;
 return n-Math.floor(n);
}

/** Value noise in [0,1]. */
function noise(x:number,y:number){
 const xi=Math.floor(x),yi=Math.floor(y);
 const xf=x-xi,yf=y-yi;
 const u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
 const a=hash2(xi,yi),b=hash2(xi+1,yi),c=hash2(xi,yi+1),d=hash2(xi+1,yi+1);
 return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;
}

/**
 * Build seamless strand albedo (RGB + alpha) / normal / roughness once.
 * Strands run mostly along V; alpha gaps cut cards into fibre ribbons.
 */
export function getHairStrandMaps(size=256){
 if(cached)return cached;
 const albedo=new Uint8Array(size*size*4);
 const normal=new Uint8Array(size*size*4);
 const rough=new Uint8Array(size*size*4);
 const height=new Float32Array(size*size);

 for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
   const u=x/size,v=y/size;
   // Fine strands + thicker clumps; slight lengthwise flow.
   const strand=Math.sin((u*56+noise(u*8,v*2)*.9)*Math.PI*2)*.5+.5;
   const clump=Math.sin((u*13+noise(u*2.2,v)*.55)*Math.PI*2)*.5+.5;
   const flow=noise(u*3.2,v*10);
   const h=THREE.MathUtils.clamp(strand*.55+clump*.28+flow*.17,.06,.98);
   height[y*size+x]=h;
   // Soft-edged fibre mask — opaque ribbons with clear gaps (not nearly-empty).
   // Raised cosine bands keep ~55% coverage so cards read as hair, not vanish.
   const phase=u*56+noise(u*6,v)*.7;
   const fibre=.55+.45*Math.cos(phase*Math.PI*2); // [0.1..1]
   const clumpMask=.65+.35*Math.cos((u*13+noise(u*2,v)*.4)*Math.PI*2);
   const mask=THREE.MathUtils.clamp(fibre*clumpMask+.08*flow,.0,1);
   // Only feather the very tips; keep mid-card solid.
   const tipFade=THREE.MathUtils.smoothstep(v,0.0,0.04)*THREE.MathUtils.smoothstep(v,1.0,0.96);
   const a=THREE.MathUtils.clamp(mask*Math.max(tipFade,.85),0,1);
   const i=(y*size+x)*4;
   const g=Math.round(28+h*210);
   albedo[i]=albedo[i+1]=albedo[i+2]=g;
   albedo[i+3]=Math.round(a*255);
   const r=Math.round(120+(1-h)*100);
   rough[i]=rough[i+1]=rough[i+2]=r;rough[i+3]=255;
  }
 }
 // Sobel-ish normals from height.
 for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
   const xm=(x+size-1)%size,xp=(x+1)%size,ym=(y+size-1)%size,yp=(y+1)%size;
   const dx=height[y*size+xp]-height[y*size+xm];
   const dy=height[yp*size+x]-height[ym*size+x];
   const nx=-dx*5.5,ny=-dy*5.5,nz=1;
   const len=Math.hypot(nx,ny,nz)||1;
   const i=(y*size+x)*4;
   normal[i]=Math.round((nx/len*.5+.5)*255);
   normal[i+1]=Math.round((ny/len*.5+.5)*255);
   normal[i+2]=Math.round((nz/len*.5+.5)*255);
   normal[i+3]=255;
  }
 }

 const wrap=(data:Uint8Array,colorSpace?:string)=>{
  const t=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);
  t.wrapS=t.wrapT=THREE.RepeatWrapping;
  t.magFilter=THREE.LinearFilter;
  t.minFilter=THREE.LinearMipmapLinearFilter;
  t.generateMipmaps=true;
  if(colorSpace)t.colorSpace=colorSpace as THREE.ColorSpace;
  t.needsUpdate=true;
  t.repeat.set(3.2,2.4);
  return t;
 };

 cached={
  albedo:wrap(albedo,THREE.SRGBColorSpace),
  normal:wrap(normal),
  roughness:wrap(rough),
 };
 return cached;
}

/** Apply strand maps for hair-card kits. Tint with `material.color`. */
export function applyHairStrandMaps(mat:THREE.MeshStandardMaterial){
 const maps=getHairStrandMaps();
 mat.map=maps.albedo;
 mat.normalMap=maps.normal;
 mat.normalScale=new THREE.Vector2(1.35,1.35);
 mat.roughnessMap=maps.roughness;
 mat.roughness=.58;
 mat.metalness=0;
 mat.vertexColors=false;
 mat.envMapIntensity=.4;
 // Alpha cutouts turn card planes into fibre ribbons (not plastic shells).
 mat.transparent=false;
 mat.alphaTest=.28;
 mat.depthWrite=true;
 mat.side=THREE.DoubleSide;
 mat.needsUpdate=true;
}
