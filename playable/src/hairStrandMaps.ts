/**
 * Procedural hair strand PBR maps for colourful-guard Hair_* / Facial_* kits.
 * Original — not from the Unity Asset Store (project policy: no Unity character assets).
 * Greyscale albedo is tinted at runtime via `material.color` (archetype hairColor).
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
 * Build seamless strand albedo / normal / roughness once.
 * Strands run mostly along V so spherical/cylindrical UVs read as hair flow.
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
   // Many fine strands + a few thicker clumps.
   const strand=Math.sin((u*48+noise(u*6,v*2)*.8)*Math.PI*2)*.5+.5;
   const clump=Math.sin((u*11+noise(u*2,v)*.5)*Math.PI*2)*.5+.5;
   const flow=noise(u*3,v*8);
   const h=THREE.MathUtils.clamp(strand*.55+clump*.25+flow*.2,.08,.98);
   height[y*size+x]=h;
   const i=(y*size+x)*4;
   const g=Math.round(40+h*200);
   albedo[i]=albedo[i+1]=albedo[i+2]=g;albedo[i+3]=255;
   // Roughness: tips / lit strands glossier.
   const r=Math.round(140+(1-h)*90);
   rough[i]=rough[i+1]=rough[i+2]=r;rough[i+3]=255;
  }
 }
 // Sobel-ish normals from height.
 for(let y=0;y<size;y++){
  for(let x=0;x<size;x++){
   const xm=(x+size-1)%size,xp=(x+1)%size,ym=(y+size-1)%size,yp=(y+1)%size;
   const dx=height[y*size+xp]-height[y*size+xm];
   const dy=height[yp*size+x]-height[ym*size+x];
   const nx=-dx*4,ny=-dy*4,nz=1;
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
  t.repeat.set(2.5,2.5);
  return t;
 };

 cached={
  albedo:wrap(albedo,THREE.SRGBColorSpace),
  normal:wrap(normal),
  roughness:wrap(rough),
 };
 return cached;
}

/** Apply strand maps to a hair/facial material. Tint with `material.color`. */
export function applyHairStrandMaps(mat:THREE.MeshStandardMaterial){
 const maps=getHairStrandMaps();
 mat.map=maps.albedo;
 mat.normalMap=maps.normal;
 mat.normalScale=new THREE.Vector2(1.1,1.1);
 mat.roughnessMap=maps.roughness;
 mat.roughness=.62;
 mat.metalness=0;
 mat.vertexColors=false;
 mat.envMapIntensity=.35;
 mat.needsUpdate=true;
}
