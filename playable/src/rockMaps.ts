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

/** Packed Poly Haven PBR set: albedo + OpenGL normal + ARM (AO/Rough/Metal). */
export type PbrMaps = {
  diff: THREE.Texture;
  nor: THREE.Texture;
  arm: THREE.Texture;
  /** World-space UV scale (repeats per metre). */
  scale: number;
  key: string;
};

export type CaveRockMaps = { rock: PbrMaps; sand: PbrMaps; moss: PbrMaps };

/** One transcoder for the whole dive. `./basis/` is `public/basis`, copied from three's KTX2Loader build. */
let ktx2Loader: KTX2Loader | null = null;

function pendingMap(colorMap: boolean): THREE.CompressedTexture {
  const data = new Uint8Array(4 * 4 * 4);
  // RGBA until the transcoder reports the GPU format. A few frames may sample this flat block.
  const format = THREE.RGBAFormat as unknown as THREE.CompressedPixelFormat;
  return new THREE.CompressedTexture(
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
    colorMap ? THREE.SRGBColorSpace : THREE.NoColorSpace,
  );
}

/** Copy a transcoded KTX2 onto the texture already bound in the rock shaders. */
function adopt(dst: THREE.CompressedTexture, src: THREE.CompressedTexture, colorMap: boolean) {
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

/**
 * Load cave rock/floor/moss maps. Returns compressed textures immediately; mip data
 * arrives after the Basis transcoder finishes. Resolution stays 2048.
 */
export function loadCaveRockMaps(renderer: THREE.WebGLRenderer): CaveRockMaps {
  if (!ktx2Loader) {
    ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath('./basis/');
  }
  ktx2Loader.detectSupport(renderer);
  const load = (url: string, colorMap: boolean) => {
    const tex = pendingMap(colorMap);
    ktx2Loader!.load(url, (loaded) => adopt(tex, loaded, colorMap), undefined, (err) => {
      console.error('Rock map failed to transcode', url, err);
    });
    return tex;
  };
  return {
    rock: {
      diff: load(rockDiff, true),
      nor: load(rockNor, false),
      arm: load(rockArm, false),
      scale: 0.22,
      key: 'rock_face_03',
    },
    sand: {
      diff: load(sandDiff, true),
      nor: load(sandNor, false),
      arm: load(sandArm, false),
      scale: 0.28,
      key: 'dry_riverbed_rock',
    },
    moss: {
      diff: load(mossDiff, true),
      nor: load(mossNor, false),
      arm: load(mossArm, false),
      scale: 0.26,
      key: 'mossy_rock',
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
