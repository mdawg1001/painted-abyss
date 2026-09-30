/**
 * Baked bunker lighting (see scripts/bunker-bake): the shipped bunker geometry with lightmap
 * UVs, and the shader hook that uses the two lightmaps.
 *
 *  - lm_indirect: light bounced off the bunker from every static lamp, in three.js irradiance
 *    units (E = I cos / d^2), so it adds straight onto the real-time lights;
 *  - lm_ao: R = ambient occlusion, which darkens the flat ambient fill in corners and under
 *    things; G = the fixed lamps' shadow mask (their shadowed / unshadowed direct light), which
 *    CaveWorld's point-light loop applies to those lamps only, so pipes, pilasters, frames and
 *    crates cast real shadows and light no longer leaks through walls.
 *
 * Direct light stays real time: lamps still swing, sconces still flicker, the relic slam still
 * turns everything red. Pure THREE (no DOM), so tests can parse the asset.
 */
import * as THREE from 'three';

export const BUNKER_LM_BASE = '/assets/soviet-bunker-kit/baked/';

/** Shared by every lightmapped material; CaveWorld drives the grade tint each frame. */
export const BUNKER_LIGHT = {
 uBkLmInd: { value: null as THREE.Texture | null },
 uBkLmAo: { value: null as THREE.Texture | null },
 /** Decode scale: E = texel² × scale. */
 uBkLmScale: { value: 1 },
 /** Grade colour of the bounce (white in the dry, teal flooded, red on the slam). */
 uBkLmTint: { value: new THREE.Color(1, 1, 1) },
 /** Share of the flat hemisphere / ambient fill kept on baked surfaces (occluded by the AO). */
 uBkAmbient: { value: .2 },
 /** How much the AO darkens direct light: contact shading under pipes, in corners. */
 uBkAoDirect: { value: .75 },
 /** Share of the grade's flat overhead fill (directional) kept on baked surfaces, occluded. */
 uBkSky: { value: .4 },
 /** Strength of the baked shadows of the fixed lamps (1 = physical). */
 uBkShadow: { value: 1 },
 /**
  * Brightness of the bounce relative to the bake. 1 is physical; 2 stands in for the light the
  * trimmed flat fill used to fake, so rooms keep their exposure while gaining their shape.
  */
 uBkBounce: { value: 2 },
};

export type LightmapSwitch = { value: number };

/**
 * Give a MeshStandardMaterial the baked lighting. `on` is per material: 0 keeps plain three
 * ambient (before the lightmaps arrive, or on geometry that is not baked). Every material with
 * the hook shares one program either way.
 */
export function injectLightmap(material: THREE.MeshStandardMaterial, on: LightmapSwitch) {
 const prev = material.onBeforeCompile?.bind(material);
 const prevKey = material.customProgramCacheKey.bind(material);
 material.onBeforeCompile = (shader, renderer) => {
  prev?.(shader, renderer);
  Object.assign(shader.uniforms, BUNKER_LIGHT, { uBkLmOn: on });
  shader.vertexShader = 'attribute vec2 aLm;\nvarying vec2 vBkLm;\n' + shader.vertexShader
   .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBkLm=aLm;');
  shader.fragmentShader = '#define BK_SHADOW\nuniform sampler2D uBkLmInd;uniform sampler2D uBkLmAo;uniform float uBkLmScale;uniform vec3 uBkLmTint;uniform float uBkAmbient;uniform float uBkAoDirect;uniform float uBkShadow;uniform float uBkSky;uniform float uBkBounce;uniform float uBkLmOn;\nvarying vec2 vBkLm;\n' + shader.fragmentShader
   // Sampled before the light loops: the point-light loop reads bkShadow (CaveWorld POINT_CULL_LIGHTS).
   .replace('#include <lights_fragment_begin>', `float bkLmAo=1.;float bkShadow=1.;
if(uBkLmOn>.5){vec2 bkM=texture2D(uBkLmAo,vBkLm).rg;bkLmAo=bkM.r;bkShadow=mix(1.,bkM.g,uBkShadow);}
#include <lights_fragment_begin>`)
   .replace('#include <lights_fragment_maps>', `#include <lights_fragment_maps>
#if defined( RE_IndirectDiffuse )
if(uBkLmOn>.5){
 vec3 lmE=texture2D(uBkLmInd,vBkLm).rgb;
 lmE*=lmE*uBkLmScale;
 irradiance=irradiance*uBkAmbient*bkLmAo+lmE*uBkLmTint*uBkBounce;
}
#endif`)
   .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
reflectedLight.directDiffuse*=mix(1.,bkLmAo,uBkAoDirect*uBkLmOn);
reflectedLight.directSpecular*=mix(1.,bkLmAo*bkLmAo,uBkLmOn);`);
 };
 material.customProgramCacheKey = () => prevKey() + ':bkLm1';
 return material;
}

// ── Asset ────────────────────────────────────────────────────────────────────
export type LitMesh = { bucket: string; key: string; lm: boolean; geometry: THREE.BufferGeometry };
export type LitBunker = { signature: string; lmScale: number; meshes: LitMesh[] };

const srgbToLinear = (c: number) => c <= .04045 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4);
const SRGB_LUT = Float32Array.from({ length: 256 }, (_, i) => srgbToLinear(i / 255));

/**
 * bunker-lit.bin: u32 headerBytes | header JSON | per mesh (each block 4-byte aligned):
 * f32 pos[3n] | i8 nor[4n] | f32 uv[2n] | u16 lm[2n] | u8 surf[4n] | u16|u32 idx[m]
 */
export function parseLitBunker(buf: ArrayBuffer): LitBunker {
 const hl = new DataView(buf).getUint32(0, true);
 const header = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl))) as {
  version: number; signature: string; lmScale: number;
  meshes: { bucket: string; key: string; lm: boolean; vertices: number; indices: number; wide: boolean }[];
 };
 let o = 4 + hl;
 const al = (n: number) => (n + 3) & ~3;
 const meshes: LitMesh[] = header.meshes.map(m => {
  const n = m.vertices;
  const pos = new Float32Array(buf.slice(o, o + n * 12)); o += n * 12;
  const nor4 = new Int8Array(buf, o, n * 4); o += n * 4;
  const nor = new Int8Array(n * 3);
  for (let i = 0; i < n; i++) { nor[i * 3] = nor4[i * 4]; nor[i * 3 + 1] = nor4[i * 4 + 1]; nor[i * 3 + 2] = nor4[i * 4 + 2]; }
  const uv = new Float32Array(buf.slice(o, o + n * 8)); o += n * 8;
  const lm = new Uint16Array(buf.slice(o, o + n * 4)); o += al(n * 4);
  const s8 = new Uint8Array(buf, o, n * 4); o += n * 4;
  const surf = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
   surf[i * 4] = SRGB_LUT[s8[i * 4]]; surf[i * 4 + 1] = SRGB_LUT[s8[i * 4 + 1]]; surf[i * 4 + 2] = SRGB_LUT[s8[i * 4 + 2]]; surf[i * 4 + 3] = s8[i * 4 + 3];
  }
  const ib = m.wide ? 4 : 2;
  const idx = m.wide ? new Uint32Array(buf.slice(o, o + m.indices * 4)) : new Uint16Array(buf.slice(o, o + m.indices * 2));
  o += al(m.indices * ib);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3, true));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('aLm', new THREE.BufferAttribute(lm, 2, true));
  g.setAttribute('aSurf', new THREE.BufferAttribute(surf, 4));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeBoundingBox(); g.computeBoundingSphere();
  return { bucket: m.bucket, key: m.key, lm: m.lm, geometry: g };
 });
 return { signature: header.signature, lmScale: header.lmScale, meshes };
}

/** The shipped file is gzip'd (neutral extension, so no server double-decodes it). */
export async function loadLitBunker(base = BUNKER_LM_BASE): Promise<LitBunker> {
 const res = await fetch(base + 'bunker-lit.pack');
 if (!res.ok || !res.body) throw new Error(`baked bunker ${res.status}`);
 const raw = new Response(res.body.pipeThrough(new DecompressionStream('gzip')));
 return parseLitBunker(await raw.arrayBuffer());
}
