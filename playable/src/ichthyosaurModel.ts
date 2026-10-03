/**
 * The guardian: an ichthyosaur built from the anatomy, not from blobs.
 *
 * Proportions follow the ophthalmosaurids (Ophthalmosaurus, Stenopterygius): a tuna-shaped
 * body with no neck, a long narrow rostrum lined with conical teeth, an enormous eye held in a
 * bony sclerotic ring, two pairs of paddle flippers (the front pair much larger), a fleshy
 * triangular dorsal fin, and a crescent tail whose lower lobe carries the downturned spine.
 * Fossil melanosomes say the skin was dark above and paler below; it is wet and smooth.
 *
 * The body is one skinned mesh on a spine of six bones. Swimming is thunniform: a travelling
 * wave whose amplitude grows toward the tail, with a tail-beat frequency set by a Strouhal number
 * of 0.3 from the measured swim speed, so it beats faster when it chases and glides when it
 * slows. It banks into turns, the lower jaw gapes and snaps on the hunt, and a dead animal goes
 * slack and rolls.
 *
 * Local +X is forward (the snout), +Y up, origin on the body axis at the centre of mass, the
 * same frame the old model used, so the sim's heading and position drive it unchanged.
 */
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Body profile along X (m, before the guardian's scale): half height, half width, axis height. */
const PROFILE: [x: number, h: number, w: number, c: number][] = [
 [-4.05, .035, .022, -.42],
 [-3.6, .085, .06, -.26],
 [-3.1, .14, .1, -.14],
 [-2.4, .27, .21, -.05],
 [-1.5, .5, .42, -.01],
 [-.5, .7, .6, .01],
 [.5, .72, .62, .02],
 [1.3, .6, .52, .05],
 [1.85, .44, .38, .07],
 [2.25, .27, .22, .04],
 [2.6, .16, .12, 0],
 [3.1, .095, .07, -.02],
 [3.68, .022, .02, -.03],
];
const TAIL_X = PROFILE[0][0], SNOUT_X = PROFILE[PROFILE.length - 1][0];
/** Lower jaw hinge (at the back of the skull) and where the mouth line runs. */
const HINGE = new THREE.Vector3(1.78, -.09, 0);
const MOUTH_FROM = 1.9;
/** Spine bones along X, tail to head; the root (centre of mass) is index 2. */
const BONE_X = [-3.55, -2.75, -1.85, -.95, .35, 1.55];
const ROOT = 4;
const EYE = new THREE.Vector3(1.86, .2, .27);

function profileAt(x: number) {
 const p = PROFILE;
 if (x <= p[0][0]) return { h: p[0][1], w: p[0][2], c: p[0][3] };
 if (x >= p[p.length - 1][0]) { const q = p[p.length - 1]; return { h: q[1], w: q[2], c: q[3] }; }
 let i = 0; while (p[i + 1][0] < x) i++;
 // Catmull-Rom through the samples: a smooth, fair hull without bumps between them.
 const a = p[Math.max(0, i - 1)], b = p[i], c = p[i + 1], d = p[Math.min(p.length - 1, i + 2)];
 const t = (x - b[0]) / (c[0] - b[0]);
 const cr = (k: 1 | 2 | 3) => {
  const p0 = a[k], p1 = b[k], p2 = c[k], p3 = d[k];
  return .5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t * t + (-p0 + 3 * p1 - 3 * p2 + p3) * t * t * t);
 };
 return { h: Math.max(.012, cr(1)), w: Math.max(.012, cr(2)), c: cr(3) };
}
/** Height of the mouth line under the skull at x. */
function mouthY(x: number) { const p = profileAt(x); return p.c - p.h * .22; }

const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/** Wet reptile skin: fine pebbling and creases as a tiling normal map (no download). */
function skinNormalMap() {
 const N = 256, c = document.createElement('canvas'); c.width = c.height = N;
 const g = c.getContext('2d')!, img = g.createImageData(N, N);
 const h = new Float32Array(N * N);
 // Tileable value noise at three octaves plus elongated creases along the body.
 const rand = (i: number, j: number, s: number) => { const v = Math.sin((i * 127.1 + j * 311.7 + s * 74.7)) * 43758.5453; return v - Math.floor(v); };
 const noise = (x: number, y: number, f: number, s: number) => {
  const xi = Math.floor(x * f), yi = Math.floor(y * f), xf = x * f - xi, yf = y * f - yi;
  const r = (i: number, j: number) => rand(((i % f) + f) % f, ((j % f) + f) % f, s);
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  return (r(xi, yi) * (1 - u) + r(xi + 1, yi) * u) * (1 - v) + (r(xi, yi + 1) * (1 - u) + r(xi + 1, yi + 1) * u) * v;
 };
 for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
  const u = x / N, v = y / N;
  const pebble = Math.abs(noise(u, v, 64, 1) - .5) * 2;
  const crease = Math.pow(1 - Math.abs(Math.sin((v * 22 + noise(u, v, 6, 2) * 2.4) * Math.PI)), 6);
  h[y * N + x] = noise(u, v, 8, 3) * .35 + (1 - pebble) * .45 - crease * .12;
 }
 for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
  const at = (i: number, j: number) => h[((j + N) % N) * N + ((i + N) % N)];
  const dx = (at(x + 1, y) - at(x - 1, y)) * 2.2, dy = (at(x, y + 1) - at(x, y - 1)) * 2.2;
  const l = Math.hypot(dx, dy, 1), k = (y * N + x) * 4;
  img.data[k] = (-dx / l * .5 + .5) * 255; img.data[k + 1] = (-dy / l * .5 + .5) * 255; img.data[k + 2] = (1 / l * .5 + .5) * 255; img.data[k + 3] = 255;
 }
 g.putImageData(img, 0, 0);
 const t = new THREE.CanvasTexture(c);
 t.wrapS = t.wrapT = THREE.RepeatWrapping;
 t.anisotropy = 4;
 return t;
}

const DORSAL = new THREE.Color(0x1a1f20), FLANK = new THREE.Color(0x46504c), BELLY = new THREE.Color(0xc9c5b0);
const GUM = new THREE.Color(0x5a2a28), SCAR = new THREE.Color(0x8e8a7c);

/** Countershaded skin colour for a surface point (n = section-space outward normal y). */
function skinColour(out: THREE.Color, ny: number, x: number, z: number, y: number) {
 // Dark back fading through the flank to a pale belly, with the boundary waving along the body.
 const edge = -.15 + .12 * Math.sin(x * 2.3) + .05 * Math.sin(x * 7.1 + 1);
 out.copy(FLANK).lerp(DORSAL, smooth(edge, .75, ny)).lerp(BELLY, smooth(edge, edge - .55, ny));
 // Mottling, then old pale scars raked across the flank.
 const m = Math.sin(x * 5.3 + z * 9.1) * Math.sin(x * 2.1 - y * 7.7 + 1.3);
 out.multiplyScalar(.92 + .1 * m);
 for (const [sx, sy, len] of [[-.6, .25, .9], [-.35, .05, .6], [.4, .3, .5]] as const) {
  const along = (x - sx) / len, across = (y - sy - (x - sx) * .35) / .012;
  if (Math.abs(z) > .1 && along > 0 && along < 1 && Math.abs(across) < 1) out.lerp(SCAR, .55 * (1 - across * across) * Math.sin(along * Math.PI));
 }
 return out;
}

type Section = { x: number; h: number; w: number; c: number };
/**
 * Sweep a closed hull along X. `shape(s, angle)` gives the section point (y, z) at angle a,
 * `weights(x)` the two spine bones and blend. Returns a skinned-ready geometry.
 */
function sweep(xs: number[], around: number, shape: (s: Section, a: number) => { y: number; z: number; gum: boolean },
 weights: (x: number) => [number, number, number]) {
 const pos: number[] = [], col: number[] = [], uv: number[] = [], si: number[] = [], sw: number[] = [], idx: number[] = [];
 const c = new THREE.Color();
 for (let i = 0; i < xs.length; i++) {
  const x = xs[i], s = { x, ...profileAt(x) };
  const [b0, b1, wt] = weights(x);
  for (let j = 0; j <= around; j++) {
   const a = 2 * Math.PI * j / around;
   const p = shape(s, a);
   pos.push(x, p.y, p.z);
   const ny = Math.sin(a);
   if (p.gum) c.copy(GUM); else skinColour(c, ny, x, p.z, p.y);
   col.push(c.r, c.g, c.b);
   uv.push(x * 1.6, j / around * 2.4);
   si.push(b0, b1, 0, 0); sw.push(1 - wt, wt, 0, 0);
  }
 }
 const R = around + 1;
 for (let i = 0; i < xs.length - 1; i++) for (let j = 0; j < around; j++) {
  const a = i * R + j, b = a + R;
  idx.push(a, b, a + 1, a + 1, b, b + 1);
 }
 // Close both ends with a fan.
 for (const [ring, sgn] of [[0, -1], [xs.length - 1, 1]] as const) {
  const ci = pos.length / 3;
  let cy = 0, cz = 0; for (let j = 0; j < around; j++) { cy += pos[(ring * R + j) * 3 + 1]; cz += pos[(ring * R + j) * 3 + 2]; }
  pos.push(xs[ring] + sgn * .004, cy / around, cz / around);
  col.push(col[ring * R * 3], col[ring * R * 3 + 1], col[ring * R * 3 + 2]);
  uv.push(xs[ring] * 1.6, 0);
  si.push(si[ring * R * 4], si[ring * R * 4 + 1], 0, 0); sw.push(sw[ring * R * 4], sw[ring * R * 4 + 1], 0, 0);
  for (let j = 0; j < around; j++) sgn > 0 ? idx.push(ring * R + j, ci, ring * R + j + 1) : idx.push(ring * R + j + 1, ci, ring * R + j);
 }
 const g = new THREE.BufferGeometry();
 g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
 g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
 g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
 g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
 g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(sw, 4));
 g.setIndex(idx);
 g.computeVertexNormals();
 return g;
}

/** Bone pair and blend for a point at x along the spine. */
function spineWeights(x: number): [number, number, number] {
 if (x <= BONE_X[0]) return [0, 0, 0];
 for (let i = 0; i < BONE_X.length - 1; i++) if (x <= BONE_X[i + 1]) return [i, i + 1, smooth(BONE_X[i], BONE_X[i + 1], x)];
 return [BONE_X.length - 1, BONE_X.length - 1, 0];
}

/** A paddle or fin planform (outline in x/y), extruded thin with rounded edges, tapering in thickness. */
function foil(outline: [number, number][], thick: number, colour: THREE.Color) {
 const s = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(x, y)));
 const g = new THREE.ExtrudeGeometry(s, { depth: thick * .4, bevelEnabled: true, bevelThickness: thick * .3, bevelSize: thick * .45, bevelSegments: 3, curveSegments: 18, steps: 1 });
 g.translate(0, 0, -thick * .2);
 const p = g.attributes.position, cols: number[] = [];
 const c = new THREE.Color();
 for (let i = 0; i < p.count; i++) {
  // Thin toward the trailing edge and the tip, like a real hydrofoil.
  const x = p.getX(i), y = p.getY(i);
  const k = .35 + .65 * Math.exp(-y * y * 1.5) * (1 - smooth(-.1, .5, -x));
  p.setZ(i, p.getZ(i) * k);
  c.copy(colour).multiplyScalar(.9 + .12 * Math.sin(x * 13 + y * 7));
  cols.push(c.r, c.g, c.b);
 }
 g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
 // Weld the extrusion so the bevel shades round instead of faceted, then map UVs flat.
 g.deleteAttribute('normal'); g.deleteAttribute('uv');
 const w = mergeVertices(g, 1e-5);
 g.dispose();
 const wp = w.attributes.position, wuv: number[] = [];
 for (let i = 0; i < wp.count; i++) wuv.push(wp.getX(i) * 1.6, wp.getY(i) * 1.6);
 w.setAttribute('uv', new THREE.Float32BufferAttribute(wuv, 2));
 w.computeVertexNormals();
 return w;
}

/** Conical teeth along a jaw edge, pointing `dir` (+1 down from the upper jaw, -1 up from the lower). */
function teeth(from: number, to: number, count: number, dir: 1 | -1, y: (x: number) => number, z: (x: number) => number) {
 const parts: THREE.BufferGeometry[] = [];
 for (const side of [-1, 1]) for (let i = 0; i < count; i++) {
  const t = (i + .5) / count, x = from + (to - from) * t;
  const len = (.03 + .028 * Math.sin(Math.PI * Math.min(1, t * 1.3))) * (.85 + .3 * ((i * 7) % 5) / 5);
  const g = new THREE.ConeGeometry(len * .22, len, 5, 1);
  g.rotateX(Math.PI);
  g.translate(0, -len / 2, 0);
  g.rotateZ(dir > 0 ? .18 : Math.PI - .18);
  g.rotateX(side * .12);
  g.translate(x, y(x), side * z(x));
  parts.push(g);
 }
 const out = mergeGeometries(parts, false)!;
 for (const g of parts) g.dispose();
 return out;
}

export type GuardianModel = {
 group: THREE.Group;
 /** Kept for callers that still poke fins / tail directly. */
 fins: THREE.Group[];
 tail: THREE.Group;
 kind: 'ichthyosaur';
 scale: number;
 /** Advance the swim cycle. `mood`: chase / rage drive the beat and the jaw; `dead` goes slack. */
 update(dt: number, time: number, mood: { state: string; raged: boolean; flinch: number }): void;
};

export function createIchthyosaur(scale = 1): GuardianModel {
 const group = new THREE.Group();
 group.name = 'guardian';
 const nrm = skinNormalMap();
 const skin = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .38, metalness: 0, normalMap: nrm, normalScale: new THREE.Vector2(.35, .35), envMapIntensity: .6 });
 const bone = new THREE.MeshStandardMaterial({ color: 0xe6dcc0, roughness: .3, metalness: 0 });

 // ── Skeleton ─────────────────────────────────────────────────────────────
 const bones = BONE_X.map((_, i) => { const b = new THREE.Bone(); b.name = `spine${i}`; return b; });
 bones[ROOT].position.set(BONE_X[ROOT], 0, 0);
 for (let i = ROOT - 1; i >= 0; i--) { bones[i].position.set(BONE_X[i] - BONE_X[i + 1], profileAt(BONE_X[i]).c - profileAt(BONE_X[i + 1]).c, 0); bones[i + 1].add(bones[i]); }
 bones[ROOT + 1].position.set(BONE_X[ROOT + 1] - BONE_X[ROOT], profileAt(BONE_X[ROOT + 1]).c - profileAt(BONE_X[ROOT]).c, 0);
 bones[ROOT].add(bones[ROOT + 1]);
 bones[ROOT].position.y = profileAt(BONE_X[ROOT]).c;
 const head = bones[ROOT + 1];

 // ── Body: one hull from tail stock to the tip of the upper jaw ───────────
 const xs: number[] = [];
 for (let i = 0; i <= 90; i++) { const t = i / 90; xs.push(TAIL_X + (SNOUT_X - TAIL_X) * (.5 - .5 * Math.cos(Math.PI * t))); }
 const body = sweep(xs, 28, (s, a) => {
  const ca = Math.cos(a), sa = Math.sin(a);
  // Rounded-diamond section: a slight keel along the back, fuller belly.
  const e = (v: number, k: number) => Math.sign(v) * Math.pow(Math.abs(v), k);
  let y = s.c + e(sa, sa > 0 ? .9 : .8) * s.h, z = e(ca, .8) * s.w;
  y += sa > 0 ? Math.pow(Math.max(0, sa), 8) * s.h * .06 : 0;
  // Ahead of the hinge the hull is only the skull and upper jaw: its lower half folds up flat
  // onto the mouth line and becomes palate.
  const m = smooth(MOUTH_FROM - .1, MOUTH_FROM + .25, s.x);
  const my = mouthY(s.x);
  let gum = false;
  if (y < my && m > 0) { y = my + (y - my) * (1 - .9 * m); gum = m > .5 && Math.abs(z) < s.w * .82; }
  return { y, z, gum };
 }, spineWeights);
 const hull = new THREE.SkinnedMesh(body, skin);
 hull.name = 'guardianBody';
 hull.add(bones[ROOT]);
 hull.updateMatrixWorld(true);
 hull.bind(new THREE.Skeleton(bones));
 hull.castShadow = hull.receiveShadow = true;
 hull.frustumCulled = false;
 group.add(hull);

 // ── Lower jaw on its hinge ───────────────────────────────────────────────
 const jaw = new THREE.Group();
 jaw.position.copy(HINGE).sub(head.position).sub(bones[ROOT].position);
 head.add(jaw);
 const jxs: number[] = [];
 for (let i = 0; i <= 40; i++) jxs.push(HINGE.x - .05 + (SNOUT_X - .1 - HINGE.x + .05) * (.5 - .5 * Math.cos(Math.PI * i / 40)));
 const jawGeo = sweep(jxs, 16, (s, a) => {
  const ca = Math.cos(a), sa = Math.sin(a), my = mouthY(s.x);
  const depth = s.h * .75 * (1 - .45 * smooth(2.2, 3.6, s.x)), half = s.w * .9;
  const y = sa > 0 ? my + sa * .006 : my + sa * depth;
  return { y, z: Math.sign(ca) * Math.pow(Math.abs(ca), .85) * half, gum: sa > .2 && Math.abs(ca) < .8 };
 }, () => [0, 0, 0]);
 jawGeo.deleteAttribute('skinIndex'); jawGeo.deleteAttribute('skinWeight');
 jawGeo.translate(-HINGE.x, -HINGE.y, 0);
 const jawMesh = new THREE.Mesh(jawGeo, skin);
 jawMesh.castShadow = jawMesh.receiveShadow = true;
 jaw.add(jawMesh);
 const lowerTeeth = new THREE.Mesh(teeth(2.05, SNOUT_X - .16, 26, -1, x => mouthY(x) - HINGE.y + .004, x => profileAt(x).w * .78), bone);
 lowerTeeth.position.x = -HINGE.x;
 jaw.add(lowerTeeth);
 const headOrigin = head.getWorldPosition(new THREE.Vector3());
 const upperTeeth = new THREE.Mesh(teeth(2.0, SNOUT_X - .08, 30, 1, x => mouthY(x) - headOrigin.y - .004, x => profileAt(x).w * .8), bone);
 upperTeeth.position.x = -headOrigin.x;
 head.add(upperTeeth);

 // ── Eyes: the largest of any vertebrate for its size, in a bony ring ─────
 const eyeball = new THREE.MeshStandardMaterial({ color: 0x0b0a08, roughness: .05, metalness: .1, emissive: 0xc8812c, emissiveIntensity: .0 });
 const shine = new THREE.MeshBasicMaterial({ color: 0xe0a772 });
 const ringMat = new THREE.MeshStandardMaterial({ color: 0x3a3c36, roughness: .55 });
 for (const side of [-1, 1]) {
  const eye = new THREE.Group();
  const p = EYE.clone(); p.z = side * (profileAt(EYE.x).w * .78);
  eye.position.copy(p).sub(headOrigin);
  eye.rotation.y = side > 0 ? .25 : Math.PI - .25;
  eye.rotation.x = side * -.1;
  const ball = new THREE.Mesh(new THREE.SphereGeometry(.105, 24, 16), eyeball);
  ball.scale.set(1, 1, .55);
  // Tapetum eyeshine: a deep-diver's eye throws the torch back amber.
  const pupil = new THREE.Mesh(new THREE.CircleGeometry(.062, 24), shine);
  pupil.position.z = .059;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(.112, .028, 10, 28), ringMat);
  ring.scale.set(1, 1, .7);
  ring.position.z = .018;
  eye.add(ball, pupil, ring);
  eye.traverse(o => { o.castShadow = false; });
  head.add(eye);
 }

 // ── Fins ─────────────────────────────────────────────────────────────────
 const finColour = new THREE.Color(0x2a3234);
 const fore = foil([[0, .1], [.12, -.18], [.02, -.52], [-.2, -.9], [-.38, -1.12], [-.46, -1.05], [-.36, -.7], [-.22, -.3], [-.2, .02], [-.06, .14]], .07, finColour);
 const hind = foil([[0, .06], [.06, -.12], [-.04, -.34], [-.18, -.5], [-.26, -.44], [-.2, -.2], [-.14, .02]], .05, finColour);
 const fins: THREE.Group[] = [];
 const flipper = (geo: THREE.BufferGeometry, b: THREE.Bone, x: number, y: number, side: number, phase: number) => {
  const pivot = new THREE.Group();
  const at = new THREE.Vector3(x, y, side * profileAt(x).w * .62);
  pivot.position.copy(at).sub(b.getWorldPosition(new THREE.Vector3()));
  // Paddle hangs out and back, set with a little dihedral below the body.
  const m = new THREE.Mesh(geo, skin);
  m.rotation.set(side > 0 ? -1.15 : 1.15, 0, 0);
  m.castShadow = true;
  pivot.add(m);
  pivot.userData = { side, phase, base: pivot.rotation.clone() };
  b.add(pivot);
  fins.push(pivot);
 };
 for (const side of [-1, 1]) {
  flipper(fore, bones[ROOT], 1.05, profileAt(1.05).c - profileAt(1.05).h * .45, side, 0);
  flipper(hind, bones[2], -1.75, profileAt(-1.75).c - profileAt(-1.75).h * .4, side, .9);
 }
 // Dorsal: fleshy, falcate, no bone in it.
 const dorsalGeo = foil([[.35, 0], [.1, .32], [-.18, .58], [-.3, .56], [-.28, .3], [-.42, 0]], .06, DORSAL);
 const dorsal = new THREE.Mesh(dorsalGeo, skin);
 const dx = -.55, dPos = new THREE.Vector3(dx, profileAt(dx).c + profileAt(dx).h * .92, 0).sub(bones[3].getWorldPosition(new THREE.Vector3()));
 dorsal.position.copy(dPos);
 dorsal.castShadow = true;
 bones[3].add(dorsal);
 // Crescent tail: the lower lobe follows the downturned spine, the upper lobe is all flesh.
 const fluke = foil([[.25, -.02], [.05, .22], [-.22, .6], [-.52, .98], [-.62, .94], [-.44, .5], [-.36, .12], [-.38, -.12], [-.5, -.48], [-.66, -.86], [-.56, -.9], [-.22, -.52], [.02, -.2]], .07, DORSAL);
 const tail = new THREE.Group();
 tail.position.set(TAIL_X + .15, profileAt(TAIL_X + .15).c, 0).sub(bones[0].getWorldPosition(new THREE.Vector3()));
 const flukeMesh = new THREE.Mesh(fluke, skin);
 flukeMesh.rotation.z = -.12;
 flukeMesh.castShadow = true;
 tail.add(flukeMesh);
 bones[0].add(tail);

 group.scale.setScalar(scale);

 // ── Motion ───────────────────────────────────────────────────────────────
 const last = new THREE.Vector3(), now = new THREE.Vector3();
 let phase = 0, speed = 0, beat = 0, bank = 0, lastYaw = 0, gape = 0, slack = 0, primed = false;
 const length = (SNOUT_X - TAIL_X) * scale;
 const update: GuardianModel['update'] = (dt, time, mood) => {
  dt = Math.min(dt, .1);
  group.getWorldPosition(now);
  if (!primed) { last.copy(now); lastYaw = group.rotation.y; primed = true; }
  const v = dt > 0 ? now.distanceTo(last) / dt : 0;
  last.copy(now);
  speed += (Math.min(v, 6) - speed) * Math.min(1, dt * 3);
  const dead = mood.state === 'dead';
  slack += ((dead ? 1 : 0) - slack) * Math.min(1, dt * (dead ? .8 : 3));
  // Thunniform kinematics: tail amplitude ~ 0.2 L, frequency from St = f·A / U = 0.3.
  const amp = .2 * length;
  const cruise = mood.raged && mood.state === 'chase' ? 1.25 : mood.state === 'damaged' ? .6 : 1;
  const f = Math.max(.32, .3 * speed / amp) * cruise;
  beat += (f - beat) * Math.min(1, dt * 2);
  phase += 2 * Math.PI * beat * dt * (1 - slack);
  // Wave travels tail-ward and grows toward the tail; the head counter-yaws a little.
  const live = 1 - slack;
  const k = 1.1;
  const env = [1, .72, .45, .22, 0, -.06];
  for (let i = 0; i < bones.length; i++) {
   if (i === ROOT) continue;
   const a = env[i] * .24 * Math.sin(phase - k * (ROOT - i));
   bones[i].rotation.y = a * live * Math.min(1, .45 + speed / 2.5) + (dead ? .12 * (i < ROOT ? 1 : 0) * slack : 0);
  }
  // Bank into turns, read from the heading rate.
  let dyaw = group.rotation.y - lastYaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw)); lastYaw = group.rotation.y;
  const turn = dt > 0 ? dyaw / dt : 0;
  bank += (THREE.MathUtils.clamp(-turn * .35, -.6, .6) * live - bank) * Math.min(1, dt * 3);
  bones[ROOT].rotation.x = bank;
  bones[ROOT].rotation.z = Math.sin(phase * .5) * .025 * live;
  // Foreflippers steer and trim; hindflippers stabilise. They feather, not row.
  for (const p of fins) {
   const s = p.userData.side as number, ph = p.userData.phase as number;
   p.rotation.x = s * (.12 * Math.sin(phase * .5 + ph) + bank * .5) * live + s * .5 * slack;
   p.rotation.z = (-.15 + .1 * Math.sin(phase * .5 + ph + 1)) * live;
  }
  // Jaw: a slow gape while it hunts, a snap when it closes on prey, shut when calm.
  const hunting = mood.state === 'chase' || mood.state === 'alert';
  const snap = hunting ? Math.pow(Math.max(0, Math.sin(time * (mood.raged ? 2.4 : 1.3))), 6) : 0;
  const want = dead ? .28 : (hunting ? .1 : .02) + snap * (mood.raged ? .45 : .3) + (mood.flinch > 0 ? .35 : 0);
  gape += (want - gape) * Math.min(1, dt * (want > gape ? 14 : 5));
  jaw.rotation.z = -gape;
 };

 return { group, fins, tail, kind: 'ichthyosaur', scale, update };
}
