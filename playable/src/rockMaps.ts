import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import rockDiff from './assets/rocks/rock_face_03/diff.ktx2?url';
import rockNor from './assets/rocks/rock_face_03/nor.ktx2?url';
import rockArm from './assets/rocks/rock_face_03/arm.ktx2?url';
import sandDiff from './assets/rocks/dry_riverbed_rock/diff.ktx2?url';
import sandNor from './assets/rocks/dry_riverbed_rock/nor.ktx2?url';
import sandArm from './assets/rocks/dry_riverbed_rock/arm.ktx2?url';
import mossDiff from './assets/rocks/mossy_rock/diff.ktx2?url';
import mossNor from './assets/rocks/mossy_rock/nor.ktx2?url';
import mossArm from './assets/rocks/mossy_rock/arm.ktx2?url';

import rockDiffPreview from './assets/rocks/rock_face_03/preview/diff.ktx2?url';
import rockNorPreview from './assets/rocks/rock_face_03/preview/nor.ktx2?url';
import rockArmPreview from './assets/rocks/rock_face_03/preview/arm.ktx2?url';
import sandDiffPreview from './assets/rocks/dry_riverbed_rock/preview/diff.ktx2?url';
import sandNorPreview from './assets/rocks/dry_riverbed_rock/preview/nor.ktx2?url';
import sandArmPreview from './assets/rocks/dry_riverbed_rock/preview/arm.ktx2?url';
import mossDiffPreview from './assets/rocks/mossy_rock/preview/diff.ktx2?url';
import mossNorPreview from './assets/rocks/mossy_rock/preview/nor.ktx2?url';
import mossArmPreview from './assets/rocks/mossy_rock/preview/arm.ktx2?url';

/** Packed Poly Haven PBR set: albedo + OpenGL normal + ARM (AO/Rough/Metal). */
export type PbrMaps = {
  diff: THREE.Texture;
  nor: THREE.Texture;
  arm: THREE.Texture;
  /** World-space UV scale (repeats per metre). */
  scale: number;
  key: string;
};

export type CaveRockMaps = {
  rock: PbrMaps; sand: PbrMaps; moss: PbrMaps;
  /** Settles after all previews have loaded (failed previews retain a neutral fallback). */
  previewsReady: Promise<void>;
  startDetail(): void;
  dispose(): void;
};

function pendingMap(kind: 'diff' | 'nor' | 'arm'): THREE.CompressedTexture {
  const data = new Uint8Array(4 * 4 * 4);
  const pixel = kind === 'diff' ? [160,160,160,255] : kind === 'nor' ? [128,128,255,255] : [255,255,0,255];
  for(let i=0;i<data.length;i+=4)data.set(pixel,i);
  // RGBA until the transcoder reports the GPU format. A few frames may sample this flat block.
  const format = THREE.RGBAFormat as unknown as THREE.CompressedPixelFormat;
  const texture = new THREE.CompressedTexture(
    [{ data, width: 4, height: 4 }],
    4, 4,
    format,
    THREE.UnsignedByteType,
    THREE.UVMapping,
    THREE.RepeatWrapping,
    THREE.RepeatWrapping,
    THREE.LinearFilter,
    THREE.LinearFilter,
    8,
    kind === 'diff' ? THREE.SRGBColorSpace : THREE.NoColorSpace,
  );
  texture.needsUpdate = true;
  return texture;
}

/** Copy a transcoded KTX2 onto the texture already bound in the rock shaders. */
function adopt(dst: THREE.CompressedTexture, src: THREE.CompressedTexture, colorMap: boolean) {
  // WebGL2 texture storage is immutable: release the old GPU allocation before resizing.
  // Keep this JS texture object so every existing shader uniform still references it.
  dst.dispose();
  dst.mipmaps = src.mipmaps;
  dst.image = src.image;
  dst.format = src.format;
  dst.type = src.type;
  dst.colorSpace = colorMap ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  dst.wrapS = dst.wrapT = THREE.RepeatWrapping;
  dst.anisotropy = 8;
  dst.magFilter = THREE.LinearFilter;
  dst.minFilter = src.mipmaps.length > 1 ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  dst.generateMipmaps = false;
  dst.needsUpdate = true;
}

/** Preview first; full originals are streamed serially after the first Begin/Resume. */
export function loadCaveRockMaps(renderer: THREE.WebGLRenderer): CaveRockMaps {
  const loader = new KTX2Loader().setTranscoderPath('./basis/').setWorkerLimit(2).detectSupport(renderer);
  let disposed = false, started = false;
  const abort = new AbortController();
  const entries: {texture: THREE.CompressedTexture; preview: string; full: string; color: boolean}[] = [];
  const makeSet = (key: string, scale: number, previews: string[], originals: string[]): PbrMaps => {
    const textures = (['diff','nor','arm'] as const).map((kind,i) => {
      const texture = pendingMap(kind);
      entries.push({texture,preview:previews[i],full:originals[i],color:kind==='diff'});
      return texture;
    });
    return {diff:textures[0],nor:textures[1],arm:textures[2],key,scale};
  };
  const rock = makeSet('rock_face_03',.22,[rockDiffPreview,rockNorPreview,rockArmPreview],[rockDiff,rockNor,rockArm]);
  const sand = makeSet('dry_riverbed_rock',.28,[sandDiffPreview,sandNorPreview,sandArmPreview],[sandDiff,sandNor,sandArm]);
  const moss = makeSet('mossy_rock',.26,[mossDiffPreview,mossNorPreview,mossArmPreview],[mossDiff,mossNor,mossArm]);
  const load = async (entry: typeof entries[number], url: string) => {
    try {
      const texture = await loader.loadAsync(url);
      if(!disposed)adopt(entry.texture,texture,entry.color);
      texture.dispose();
    } catch(error) {
      // A failed upgrade leaves the already-rendering preview intact.
      if(!disposed)console.warn('Cave texture unavailable; retaining current detail',url,error);
    }
  };
  const previewsReady = Promise.all(entries.map(entry=>load(entry,entry.preview))).then(()=>{});
  const wait = (ms: number) => new Promise<void>(resolve=>{
    if(disposed){resolve();return;}
    const finish=()=>{clearTimeout(timer);abort.signal.removeEventListener('abort',finish);resolve();};
    const timer=setTimeout(finish,ms);
    abort.signal.addEventListener('abort',finish,{once:true});
  });
  return {
    rock,sand,moss,previewsReady,
    startDetail(){
      if(started||disposed)return;
      started=true;
      void (async()=>{
        await previewsReady;
        await wait(2000); // Let the first playable frames and essential props settle.
        for(const entry of entries){
          if(disposed)return;
          await load(entry,entry.full); // One download/transcode/upload upgrade at a time.
          await wait(250); // Give rendering time between large texture uploads.
        }
      })();
    },
    dispose(){
      if(disposed)return;
      disposed=true;abort.abort();loader.dispose();
      for(const entry of entries)entry.texture.dispose();
    },
  };
}

/** Triplanar helpers injected ahead of MeshStandardMaterial fragment chunks. */
export const triplanarGlsl = /* glsl */ `
vec3 triBlend(vec3 n){
  vec3 b=pow(abs(n),vec3(4.));
  return b/(b.x+b.y+b.z+1e-5);
}
vec3 triAlbedo(sampler2D map,vec3 p,vec3 b,float s){
  // Flat floor / wall / ceiling weights are exactly 1 on one axis, so one tap
  // equals the three-tap blend. Diagonal normals still blend all three.
  if(b.x>0.999) return texture2D(map,p.zy*s).rgb;
  if(b.y>0.999) return texture2D(map,p.xz*s).rgb;
  if(b.z>0.999) return texture2D(map,p.xy*s).rgb;
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
vec3 triArm(sampler2D map,vec3 p,vec3 b,float s){
  if(b.x>0.999) return texture2D(map,p.zy*s).rgb;
  if(b.y>0.999) return texture2D(map,p.xz*s).rgb;
  if(b.z>0.999) return texture2D(map,p.xy*s).rgb;
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
// Whiteout-blend OpenGL normals into world space, then to view space.
vec3 triNormalView(sampler2D map,vec3 p,vec3 wn,vec3 b,float s,mat4 viewMatrix){
  vec3 n;
  if(b.y>0.999){
    vec3 ty=texture2D(map,p.xz*s).xyz*2.-1.;
    ty.xy*=1.55;
    ty=vec3(ty.xy+wn.xz,abs(wn.y));
    n=normalize(ty.xzy);
  }else if(b.x>0.999){
    vec3 tx=texture2D(map,p.zy*s).xyz*2.-1.;
    tx.xy*=1.55;
    tx=vec3(tx.xy+wn.zy,abs(wn.x));
    n=normalize(tx.zyx);
  }else if(b.z>0.999){
    vec3 tz=texture2D(map,p.xy*s).xyz*2.-1.;
    tz.xy*=1.55;
    tz=vec3(tz.xy+wn.xy,abs(wn.z));
    n=normalize(tz.xyz);
  }else{
    vec3 tx=texture2D(map,p.zy*s).xyz*2.-1.;
    vec3 ty=texture2D(map,p.xz*s).xyz*2.-1.;
    vec3 tz=texture2D(map,p.xy*s).xyz*2.-1.;
    tx.xy*=1.55;ty.xy*=1.55;tz.xy*=1.55;
    tx=vec3(tx.xy+wn.zy,abs(wn.x));
    ty=vec3(ty.xy+wn.xz,abs(wn.y));
    tz=vec3(tz.xy+wn.xy,abs(wn.z));
    n=normalize(tx.zyx*b.x+ty.xzy*b.y+tz.xyz*b.z);
  }
  return normalize((viewMatrix*vec4(n,0.)).xyz);
}
// Patchy moss: crevices + near-floor + ledge tops + wall streaks.
float mossCoverage(vec3 p,vec3 wn,float ao,float amount){
  float blob=valueNoise(p.xz*.22+p.y*.14);
  float blob2=valueNoise(p.xy*.14+p.z*.19);
  float streaks=valueNoise(vec2(p.y*1.1+p.x*.08,p.z*.35));
  float clumps=smoothstep(.18,.62,blob*.55+blob2*.45);
  float nearFloor=1.-smoothstep(.2,4.8,p.y);
  float ledge=smoothstep(-.35,.55,wn.y);
  float wall=smoothstep(.15,.85,1.-abs(wn.y));
  float crevice=pow(clamp(1.-ao,0.,1.),1.1);
  float m=clumps*(.45+.4*nearFloor+.35*ledge+.25*wall)
         +crevice*.55
         +smoothstep(.4,.85,streaks)*wall*.35;
  return clamp(m*amount,0.,1.);
}
`;
