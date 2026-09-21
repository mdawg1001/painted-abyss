import * as THREE from 'three';
import rockDiff from './assets/rocks/rock_face_03/diff.jpg?url';
import rockNor from './assets/rocks/rock_face_03/nor.jpg?url';
import rockArm from './assets/rocks/rock_face_03/arm.jpg?url';
import sandDiff from './assets/rocks/dry_riverbed_rock/diff.jpg?url';
import sandNor from './assets/rocks/dry_riverbed_rock/nor.jpg?url';
import sandArm from './assets/rocks/dry_riverbed_rock/arm.jpg?url';
import mossDiff from './assets/rocks/mossy_rock/diff.jpg?url';
import mossNor from './assets/rocks/mossy_rock/nor.jpg?url';
import mossArm from './assets/rocks/mossy_rock/arm.jpg?url';

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

function configure(tex: THREE.Texture, colorMap: boolean) {
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = colorMap ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.anisotropy = 8;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

/** Load cave rock/floor/moss maps (TextureLoader returns immediately; images fill in async). */
export function loadCaveRockMaps(loader = new THREE.TextureLoader()): CaveRockMaps {
  const load = (url: string, colorMap: boolean) => configure(loader.load(url), colorMap);
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
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
vec3 triArm(sampler2D map,vec3 p,vec3 b,float s){
  return texture2D(map,p.zy*s).rgb*b.x
       + texture2D(map,p.xz*s).rgb*b.y
       + texture2D(map,p.xy*s).rgb*b.z;
}
// Whiteout-blend OpenGL normals into world space, then to view space.
vec3 triNormalView(sampler2D map,vec3 p,vec3 wn,vec3 b,float s,mat4 viewMatrix){
  vec3 tx=texture2D(map,p.zy*s).xyz*2.-1.;
  vec3 ty=texture2D(map,p.xz*s).xyz*2.-1.;
  vec3 tz=texture2D(map,p.xy*s).xyz*2.-1.;
  tx.xy*=1.55;ty.xy*=1.55;tz.xy*=1.55;
  tx=vec3(tx.xy+wn.zy,abs(wn.x));
  ty=vec3(ty.xy+wn.xz,abs(wn.y));
  tz=vec3(tz.xy+wn.xy,abs(wn.z));
  vec3 n=normalize(tx.zyx*b.x+ty.xzy*b.y+tz.xyz*b.z);
  return normalize((viewMatrix*vec4(n,0.)).xyz);
}
// Patchy moss: crevices + near-floor + ledge tops.
float mossCoverage(vec3 p,vec3 wn,float ao,float amount){
  float patch=valueNoise(p.xz*.28+p.y*.18);
  float patch2=valueNoise(p.xy*.17+p.z*.23);
  float clumps=smoothstep(.28,.76,patch*.62+patch2*.48);
  float nearFloor=1.-smoothstep(.35,5.4,p.y);
  float ledge=smoothstep(-.2,.7,wn.y);
  float crevice=pow(clamp(1.-ao,0.,1.),1.35);
  float m=clumps*(.3+.45*nearFloor+.3*ledge)+crevice*.4;
  return clamp(m*amount,0.,1.);
}
`;
