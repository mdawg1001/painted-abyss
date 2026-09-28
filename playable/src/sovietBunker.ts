/**
 * Soviet bunker art pass: kit loading, the painted-concrete shader, and geometry baking.
 *
 * The kit ships as one compact binary (see scripts/build_bunker_kit.py) plus a tangent-space
 * normal map and a packed AO / roughness / detail map per trim sheet. No kit colour ships: every
 * surface is painted here, per vertex (`aSurf` = tint + finish) and per pixel from world
 * position, so a wall knows its own height, its tide marks and its drip streaks.
 *
 * All sheets share one shader program (textures are uniforms), so adding the kit meshes after
 * the fallback never compiles anything mid-dive.
 */
import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { adopt, pendingMap } from './rockMaps';
import { PERF } from './perf';
import { BUNKER, type Placement, type Surf } from './bunkerLayout';

export { BUNKER_KIT_BASE, SHEETS, sheetOf, parseBunkerKit, loadBunkerKit, type Sheet, type KitPrim, type KitPiece, type BunkerKit } from './bunkerKit';
import { BUNKER_KIT_BASE, SHEETS, type Sheet, type KitPrim, type KitPiece, type BunkerKit } from './bunkerKit';

/**
 * Stand-in faces for the structural pieces until kit.bin arrives (a few hundred ms):
 * the same painted planes, so the bunker is closed from the first frame.
 */
const FALLBACK: Record<string, { axis: 'x' | 'y'; at: number; a0: number; a1: number; b0: number; b1: number; slot: string }> = {
 WallAstra_Straight_Flat: { axis: 'x', at: -2, a0: 0, a1: 3, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 ShortWall_WhitePlate2_Straight: { axis: 'x', at: -2, a0: 0, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 ShortWall_Simple1_Straight: { axis: 'x', at: -2, a0: 0, a1: 1, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 TopCables_Straight: { axis: 'x', at: -2, a0: 3, a1: 5, b0: -2, b1: 2, slot: 'MI_Trim_03_Dark' },
 TopCables_Straight_Hanging: { axis: 'x', at: -2, a0: 3, a1: 5, b0: -2, b1: 2, slot: 'MI_Trim_03_Dark' },
 Platform_Simple: { axis: 'y', at: 0, a0: -2, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_03' },
 Platform_Metal2: { axis: 'y', at: 0, a0: -2, a1: 2, b0: -2, b1: 2, slot: 'MI_Trim_02' },
};

function fallbackPrim(name: string): KitPiece | null {
 const f = FALLBACK[name];
 if (!f) return null;
 const pos = new Float32Array(12), nor = new Float32Array(12), uv = new Float32Array(8);
 const q = f.axis === 'x'
  ? [[f.at, f.a0, f.b1], [f.at, f.a0, f.b0], [f.at, f.a1, f.b0], [f.at, f.a1, f.b1]]
  : [[f.a0, f.at, f.b1], [f.a1, f.at, f.b1], [f.a1, f.at, f.b0], [f.a0, f.at, f.b0]];
 q.forEach((v, i) => { pos.set(v, i * 3); nor.set(f.axis === 'x' ? [1, 0, 0] : [0, 1, 0], i * 3); uv.set([i === 1 || i === 2 ? 1 : 0, i >= 2 ? 1 : 0], i * 2); });
 return { min: [], max: [], prims: [{ slot: f.slot, sheet: 'none', pos, nor, uv, idx: new Uint16Array([0, 1, 2, 0, 2, 3]) }] };
}

// ── Textures ─────────────────────────────────────────────────────────────────
export type SheetMaps = { nor: THREE.Texture; ord: THREE.Texture; detMean: number };
export type BunkerTextures = { sheets: Record<Sheet, SheetMaps>; ready: Promise<void>; dispose(): void };

function flatMap(rgba: [number, number, number, number]) {
 const t = pendingMap('nor');
 const data = (t.mipmaps[0] as { data: Uint8Array }).data;
 for (let i = 0; i < data.length; i += 4) data.set(rgba, i);
 t.flipY = false;
 t.needsUpdate = true;
 return t;
}

/** Per-sheet mean of the kit albedo luminance (ORD.b), so detail darkens and lightens evenly. */
const DET_MEAN: Record<Sheet, number> = { T1: .36, T2: .41, T3: .66, none: .63 };

export function createBunkerTextures(renderer: THREE.WebGLRenderer, shared?: KTX2Loader, base = BUNKER_KIT_BASE): BunkerTextures {
 const flatN: [number, number, number, number] = [128, 128, 255, 255];
 const flatO: [number, number, number, number] = [255, 150, 160, 255];
 const sheets = {} as Record<Sheet, SheetMaps>;
 const jobs: { tex: THREE.CompressedTexture; url: string }[] = [];
 for (const s of SHEETS) {
  const nor = flatMap(flatN), ord = flatMap(flatO);
  sheets[s] = { nor, ord, detMean: DET_MEAN[s] };
  if (s !== 'none') {
   jobs.push({ tex: nor, url: `${base}${s.toLowerCase()}_nor.ktx2` }, { tex: ord, url: `${base}${s.toLowerCase()}_ord.ktx2` });
  }
 }
 let disposed = false;
 const loader = shared ?? new KTX2Loader().setTranscoderPath('./basis/').setWorkerLimit(1).detectSupport(renderer);
 const ready = (async () => {
  for (const job of jobs) {
   try {
    const t = await loader.loadAsync(job.url);
    if (disposed) return;
    adopt(job.tex, t, false);
    job.tex.flipY = false;
    job.tex.anisotropy = PERF.anisotropy;
    t.dispose();
   } catch (e) {
    if (!disposed) console.warn('Bunker texture unavailable; keeping flat detail', job.url, e);
   }
  }
  if (!shared) loader.dispose();
 })();
 return {
  sheets, ready,
  dispose() { disposed = true; for (const s of SHEETS) { sheets[s].nor.dispose(); sheets[s].ord.dispose(); } },
 };
}

// ── Material ─────────────────────────────────────────────────────────────────
const NOISE = /* glsl */`
float bkHash(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float bkNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*f*(f*(f*6.-15.)+10.);return mix(mix(bkHash(i),bkHash(i+vec2(1,0)),f.x),mix(bkHash(i+vec2(0,1)),bkHash(i+vec2(1,1)),f.x),f.y);}
const mat2 BK_ROT=mat2(.8,-.6,.6,.8);
float bkFbm(vec2 p){float a=.5,s=0.;for(int i=0;i<4;i++){s+=a*bkNoise(p);p=BK_ROT*p*2.03+11.7;a*=.5;}return s/.9375;}
vec3 bkPerturb(vec3 surfPos,vec3 surfNorm,vec2 dHdxy,float faceDir){
 vec3 sx=dFdx(surfPos),sy=dFdy(surfPos);
 vec3 r1=cross(sy,surfNorm),r2=cross(surfNorm,sx);
 float det=dot(sx,r1)*faceDir;
 vec3 grad=sign(det)*(dHdxy.x*r1+dHdxy.y*r2);
 return normalize(abs(det)*surfNorm-grad);
}
`;

/**
 * The painted bunker surface. Finishes (bunkerLayout FINISH):
 * 0 wall paint by height, 1 enamel steel, 2 painted floor, 3 whitewashed ceiling, 4 rubber,
 * 5 galvanised steel, 6 hazard bumper, 7 bare concrete.
 */
const COLOR = /* glsl */`
vec3 bkW=vBkW; vec3 bkN=normalize(vBkN); float bkH=bkW.y-uBkFloor;
vec4 bkOrd=texture2D(uBkOrd,vNormalMapUv);
vec3 bkNm=texture2D(normalMap,vNormalMapUv).xyz*2.-1.;
float bkEdge=clamp(length(bkNm.xy)*2.4,0.,1.);
float bkF=vSurf.a;
float bkWall=1.-step(.55,abs(bkN.y));
vec2 bkP=bkWall>.5?vec2(abs(bkN.x)>abs(bkN.z)?bkW.z:bkW.x,bkW.y):bkW.xz;
float bkDist=length(vViewPosition);
float bkFine=1.-smoothstep(14.,40.,bkDist);
float n1=bkNoise(BK_ROT*bkP*.55),n2=bkNoise(BK_ROT*bkP*2.3+17.1),n3=bkNoise(bkP*9.+3.7),n4=mix(.5,bkNoise(BK_ROT*bkP*27.+9.1),bkFine);
vec3 bkTint=vSurf.rgb;
vec3 bkCol=bkTint; float bkRough=.6; float bkMetal=0.; float bkBump=1.;
// Damage gathers in patches (knocks, damp) and breaks up into small flakes inside them.
float bkPatch=smoothstep(.42,.78,bkFbm(BK_ROT*bkP*.35+3.1));
float bkFlake=mix(.5,bkFbm(bkP*5.5+1.3),bkFine*.7+.3);
float bkChipF=bkFlake*.6+bkPatch*.5;
vec3 bkPlaster=vec3(.56,.55,.51)*(.82+.3*n3);
vec3 bkRust=vec3(.26,.12,.06)*(.75+.5*n3);
if(bkF<.5){
 // Oil-paint dado, a dark stripe, whitewash above. The line is brushed straight, so no wobble.
 float aa=max(fwidth(bkH)*1.5,1e-4);
 float up=smoothstep(uBkDado-aa,uBkDado+aa,bkH);
 float stripe=up*(1.-smoothstep(uBkDado+uBkStripe-aa,uBkDado+uBkStripe+aa,bkH));
 vec3 white=uBkWhite*(.9+.12*n2)*(.96+.06*n4);
 vec3 lower=bkTint*(.92+.12*n2);
 bkCol=mix(lower,white,up);
 bkCol=mix(bkCol,bkTint*.32,stripe);
 bkRough=mix(.42,.93,up);
 float wearLow=(1.-smoothstep(0.,1.1,bkH))*.14;
 float chip=smoothstep(.7,.73,bkChipF+bkEdge*.22+wearLow-up*.05);
 // Whitewash flakes off in the top third, where the damp collects.
 float peel=up*smoothstep(.74,.77,bkChipF+smoothstep(4.,7.5,bkH)*.1);
 chip=max(chip,peel);
 bkCol=mix(bkCol,mix(uBkWhite*.86,bkPlaster,up*.6+.4),chip);
 bkRough=mix(bkRough,.9,chip);
 bkBump=1.-chip;
}else if(bkF<1.5){
 bkCol=bkTint*(.88+.18*n2);
 float chip=smoothstep(.72,.76,bkChipF+bkEdge*.22-(1.-bkWall)*.06);
 bkCol=mix(bkCol,bkRust,chip);
 bkRough=mix(.46+.12*n3,.85,chip);
 bkBump=1.-chip;
}else if(bkF<2.5){
 bkCol=bkTint*(.9+.16*n2);
 float wear=smoothstep(.66,.74,bkFbm(BK_ROT*bkW.xz*.45)*.6+bkFlake*.4);
 vec3 conc=vec3(.2,.19,.17)*(.8+.3*n3);
 bkCol=mix(bkCol,conc,wear*.8);
 bkRough=mix(.5,.86,wear);
 bkBump=1.-wear;
}else if(bkF<3.5){
 bkCol=bkTint*(.9+.12*n2);
 float ring=smoothstep(.6,.64,n1)*(1.-smoothstep(.64,.7,n1));
 float stain=smoothstep(.63,.72,n1);
 bkCol=mix(bkCol,bkCol*vec3(.85,.78,.62),stain*.55);
 bkCol=mix(bkCol,vec3(.42,.34,.22),ring*.45);
 float peel=smoothstep(.76,.79,bkChipF);
 bkCol=mix(bkCol,bkPlaster*.9,peel);
 bkRough=.95; bkBump=1.-peel;
}else if(bkF<4.5){
 bkCol=bkTint*(.9+.2*n3); bkRough=.58;
}else if(bkF<5.5){
 bkCol=bkTint*(.8+.35*n3)*(.9+.15*n2); bkMetal=.55; bkRough=.38+.3*n2;
 float dirt=smoothstep(.55,.8,n1); bkCol=mix(bkCol,vec3(.25,.23,.2),dirt*.5); bkMetal*=1.-dirt*.6;
}else if(bkF<6.5){
 float s=fract((bkW.x+bkW.z+bkH)*1.25);
 bkCol=mix(bkTint,vec3(.05,.05,.045),step(.5,s));
 float chip=smoothstep(.66,.7,bkChipF+bkEdge*.25+(1.-smoothstep(0.,.5,bkH))*.1);
 bkCol=mix(bkCol,bkPlaster,chip);
 bkRough=mix(.5,.9,chip); bkBump=1.-chip;
}else{
 bkCol=bkTint*(.78+.35*n2)*(.9+.2*n4); bkRough=.9; bkBump=.5;
}
// Kit occlusion and panel detail.
bkCol*=mix(1.,bkOrd.r,.85);
bkCol*=clamp(mix(1.,bkOrd.b/uBkDetMean,.3),.72,1.2);
if(bkF<3.5||bkF>5.5){
 // Grime rising off the floor.
 float g=(1.-smoothstep(0.,.9,bkH))*bkWall;
 bkCol*=1.-.38*g*(.6+.4*n2);
 // Tide marks from earlier floods, and a damp algae film below the lower one.
 float wob=(n1-.5)*.14+(n3-.5)*.03;
 float d1=bkH-(1.18+wob),d2=bkH-(2.74+wob*1.3);
 float below=(1.-smoothstep(-.04,.03,d1))*bkWall;
 float below2=(1.-smoothstep(-.04,.03,d2))*bkWall;
 bkCol=mix(bkCol,bkCol*vec3(.74,.78,.62),below*.4+below2*.18);
 bkCol=mix(bkCol,vec3(.2,.19,.13),(exp(-d1*d1/.0012)*.5+exp(-d2*d2/.0016)*.3)*bkWall);
 bkRough*=1.-below*.3;
 // Rust water streaking down from the tray and the pipes.
 float st=bkNoise(vec2(bkP.x*3.3,bkH*.16+n1*.4));
 float streak=smoothstep(.64,.86,st)*smoothstep(.4,6.8,bkH)*bkWall*(.5+.5*n3);
 bkCol=mix(bkCol,bkCol*vec3(.62,.5,.36),streak*.75);
 // Soot and damp gather under the slab.
 bkCol*=1.-smoothstep(5.8,8.,bkH)*bkWall*(.18+.2*n1);
 // Old blood, rare and low: somebody was dragged along here.
 float bl=smoothstep(.81,.86,bkNoise(bkP*vec2(.18,.5)+41.))*smoothstep(.3,.7,n3)*(1.-smoothstep(.6,2.1,bkH))*bkWall;
 bkCol=mix(bkCol,vec3(.2,.025,.015),bl*.8);
 bkRough=mix(bkRough,.3,bl*.6);
}
// Standing water on the floor: dark, glossy puddles.
float pud=smoothstep(.66,.72,bkFbm(BK_ROT*bkW.xz*.16+5.3)+bkFlake*.12-.06)*step(.55,bkN.y)*step(bkH,.05);
bkCol*=mix(1.,.55,pud);
bkRough=mix(bkRough,.06,pud);
diffuseColor.rgb=bkCol;
`;

export type BunkerMaterial = THREE.MeshStandardMaterial;

export function createBunkerMaterial(maps: SheetMaps, floorY: number): BunkerMaterial {
 const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0, normalMap: maps.nor, normalScale: new THREE.Vector2(1, -1) });
 m.name = 'sovietBunker';
 const uniforms = {
  uBkOrd: { value: maps.ord }, uBkDetMean: { value: maps.detMean }, uBkFloor: { value: floorY },
  uBkDado: { value: BUNKER.dado }, uBkStripe: { value: BUNKER.stripe },
  uBkWhite: { value: new THREE.Color(0xd6d2c2) },
 };
 m.onBeforeCompile = shader => {
  Object.assign(shader.uniforms, uniforms);
  shader.vertexShader = 'attribute vec4 aSurf;\nvarying vec4 vSurf;\nvarying vec3 vBkW;\nvarying vec3 vBkN;\n' + shader.vertexShader
   .replace('#include <begin_vertex>', '#include <begin_vertex>\nvSurf=aSurf;\nvBkW=(modelMatrix*vec4(transformed,1.)).xyz;')
   .replace('#include <defaultnormal_vertex>', '#include <defaultnormal_vertex>\nvBkN=normalize(mat3(modelMatrix)*objectNormal);');
  shader.fragmentShader = 'uniform sampler2D uBkOrd;uniform float uBkDetMean;uniform float uBkFloor;uniform float uBkDado;uniform float uBkStripe;uniform vec3 uBkWhite;\nvarying vec4 vSurf;\nvarying vec3 vBkW;\nvarying vec3 vBkN;\n' + NOISE + shader.fragmentShader
   .replace('#include <color_fragment>', '#include <color_fragment>\n' + COLOR)
   .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor=clamp(bkRough*(.78+.44*bkOrd.g),.05,1.);')
   .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor=bkMetal;')
   .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
{
 // Paint has thickness: chips and worn patches step down into the surface.
 float hgt=(bkBump*.0035+n3*.0012+n4*.0006)*bkFine;
 normal=bkPerturb(-vViewPosition,normal,vec2(dFdx(hgt),dFdy(hgt)),faceDirection);
}`);
 };
 m.customProgramCacheKey = () => 'sovietBunker:1';
 return m;
}

// ── Geometry baking ──────────────────────────────────────────────────────────
const _m = new THREE.Matrix4(), _n = new THREE.Matrix3(), _q = new THREE.Quaternion(), _v = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0);

function surfAttr(count: number, surf: Surf) {
 _c.setHex(surf.tint);
 const a = new Float32Array(count * 4);
 for (let i = 0; i < count; i++) a.set([_c.r, _c.g, _c.b, surf.finish], i * 4);
 return new THREE.BufferAttribute(a, 4);
}

function finish(geo: THREE.BufferGeometry, surf: Surf) {
 const g = geo.index ? geo : geo;
 for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal' && k !== 'uv') g.deleteAttribute(k);
 g.setAttribute('aSurf', surfAttr(g.attributes.position.count, surf));
 return g;
}

function kitGeometry(prim: KitPrim, matrix: THREE.Matrix4, surf: Surf) {
 const g = new THREE.BufferGeometry();
 g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(prim.pos), 3));
 g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(prim.nor), 3));
 g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(prim.uv), 2));
 g.setIndex(new THREE.BufferAttribute(new Uint16Array(prim.idx), 1));
 g.applyMatrix4(matrix);
 return finish(g, surf);
}

export type BakedBucket = Map<Sheet | 'decal', THREE.BufferGeometry[]>;
export type BakeOptions = {
 kit: BunkerKit | null;
 bucketOf: (c: number, r: number) => string;
 decalRect: (id: string) => [number, number, number, number] | null;
 /** Only these placement kinds (default all). */
 filter?: (p: Placement) => boolean;
};

/** Turn placements into per-bucket, per-sheet geometry lists (not merged). */
export function bakeBunker(placements: Placement[], opts: BakeOptions) {
 const out = new Map<string, BakedBucket>();
 const push = (key: string, sheet: Sheet | 'decal', g: THREE.BufferGeometry) => {
  let b = out.get(key);
  if (!b) { b = new Map(); out.set(key, b); }
  let list = b.get(sheet);
  if (!list) { list = []; b.set(sheet, list); }
  list.push(g);
 };
 const flip = new THREE.Matrix4().makeRotationX(Math.PI);
 for (const p of placements) {
  if (opts.filter && !opts.filter(p)) continue;
  const key = opts.bucketOf(p.c, p.r);
  if (p.kind === 'kit') {
   const piece = opts.kit?.get(p.piece) ?? (opts.kit ? null : fallbackPrim(p.piece));
   if (!piece) continue;
   _q.setFromAxisAngle(UP, p.yaw);
   _m.compose(_v.set(p.x, p.y, p.z), _q, _s.set(...(p.scale ?? [1, 1, 1])));
   if (p.flip) _m.multiply(flip);
   for (const prim of piece.prims) {
    const surf = p.slots[prim.slot];
    if (!surf) continue;
    push(key, opts.kit ? prim.sheet : 'none', kitGeometry(prim, _m, surf));
   }
  } else if (p.kind === 'box') {
   const g = new THREE.BoxGeometry(p.sx, p.sy, p.sz);
   if (p.yaw) g.rotateY(p.yaw);
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'cyl') {
   const a = new THREE.Vector3(...p.a), b = new THREE.Vector3(...p.b);
   const len = a.distanceTo(b);
   if (len < 1e-3) continue;
   const g = new THREE.CylinderGeometry(p.radius, p.radius, len, 12, 1, true);
   _q.setFromUnitVectors(UP, _v.subVectors(b, a).normalize());
   g.applyMatrix4(_m.compose(a.add(b).multiplyScalar(.5), _q, _s.set(1, 1, 1)));
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'ball') {
   const g = new THREE.SphereGeometry(p.radius, 10, 6);
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'torus') {
   const g = new THREE.TorusGeometry(p.radius, p.tube, 8, 28);
   g.rotateY(Math.atan2(p.nx, p.nz));
   g.translate(p.x, p.y, p.z);
   push(key, 'none', finish(g, p.surf));
  } else if (p.kind === 'decal') {
   const rect = opts.decalRect(p.id);
   if (!rect) continue;
   const g = new THREE.PlaneGeometry(p.w, p.h);
   const uv = g.attributes.uv as THREE.BufferAttribute;
   for (let i = 0; i < uv.count; i++) uv.setXY(i, rect[0] + uv.getX(i) * (rect[2] - rect[0]), rect[1] + uv.getY(i) * (rect[3] - rect[1]));
   g.rotateY(Math.atan2(p.nx, p.nz));
   g.translate(p.x, p.y, p.z);
   push(key, 'decal', finish(g, { tint: 0xffffff, finish: 0 }));
  }
 }
 return out;
}

/** Merge a bucket's lists into one geometry per sheet (inputs are disposed). */
export function mergeBucket(list: THREE.BufferGeometry[]) {
 const merged = mergeGeometries(list, false);
 list.forEach(g => g.dispose());
 if (!merged) return null;
 merged.computeBoundingBox();
 merged.computeBoundingSphere();
 return merged;
}
