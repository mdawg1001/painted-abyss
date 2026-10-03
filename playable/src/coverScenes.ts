/**
 * Set dressing that turns each piece of cover into a scene someone was using when the water came.
 *
 * Cover in a civil-defence shelter is not furniture placed at random: the radio operator's desk
 * still has the set switched on, the log open at the last entry and a mug gone cold; the
 * quartermaster's racks carry the gas-mask issue, the fuel store, the workshop bench stock; the
 * crate stacks at the issue points have the manifest on top and the crowbar that opened them.
 * Deeper in, the same stacks are abandoned: a dropped mask, scattered papers, spent cases.
 *
 * Every site has a fixed scene (SCENE_AT), so the story reads the same each dive. Anything that
 * stands outside the cover's collision box is flat (paper, casings) so nothing can be walked
 * through. Models: Poly Haven (CC0, see public/assets/cover-props/README.md); paper, mug,
 * ashtray, stool, pencil and casings are built here, with Cyrillic paperwork drawn on canvas.
 */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { OPERATOR_STOOL } from './guardScenes';

export const COVER_DRESS_URL = '/assets/cover-props/cover_dress.gltf';
export type DressPart = 'radio' | 'clipboard' | 'gasMask' | 'crowbar' | 'toolbox' | 'oilTin' | 'multimeter';
/** Authored sizes (m): x, y (height), z. */
export const DRESS_SIZE: Record<DressPart, readonly [number, number, number]> = {
 radio: [.574, .434, .413], clipboard: [.229, .042, .337], gasMask: [.211, 1.126, .309], crowbar: [.04, .555, .128],
 toolbox: [.4, .305, .271], oilTin: [.115, .205, .154], multimeter: [.216, .279, .203],
};

export type CrateScene = 'issue' | 'workshop' | 'abandoned' | 'tea';
export type RackScene = 'stores' | 'masks' | 'fuel' | 'workshop';
/** The scene each cover site plays, keyed by its position. */
export const SCENE_AT: Record<string, CrateScene | RackScene | 'radio'> = {
 // Entrance chamber: the radio post, the issue point, the gas-mask store.
 '-10,-18': 'radio', '-6,-10': 'issue', '6,-14': 'masks',
 // Main cavern: the tea break, stores in use, then the panic.
 '-2,-50': 'issue', '-18,-50': 'abandoned', '14,-50': 'fuel', '18,-70': 'tea', '-22,-70': 'stores',
 '-15,-82': 'abandoned', '10,-90': 'fuel',
 // West annex: the workshop.
 '-40,-56': 'workshop', '-38,-96': 'workshop',
 // Deep wing: nobody came back for these.
 '-10,-120': 'abandoned', '12,-128': 'masks', '6,-152': 'abandoned',
 // Extraction pool.
 '32,-6': 'issue', '28,-20': 'stores',
};
export function sceneAt(x: number, z: number) { return SCENE_AT[`${x},${z}`]; }

// ── glTF parts ──────────────────────────────────────────────────────────────
let dress: Promise<Record<DressPart, THREE.Object3D>> | null = null;
export function loadDressParts() {
 dress ??= new GLTFLoader().loadAsync(COVER_DRESS_URL).then(gltf => {
  const out = {} as Record<DressPart, THREE.Object3D>;
  for (const k of Object.keys(DRESS_SIZE) as DressPart[]) {
   const o = gltf.scene.getObjectByName(k);
   if (!o) throw new Error(`cover_dress.gltf: no ${k}`);
   o.traverse(m => {
    const mesh = m as THREE.Mesh;
    if (!mesh.isMesh) return;
    for (const mat of (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.MeshStandardMaterial[]) {
     mat.envMapIntensity = .4;
     mat.emissive = new THREE.Color(0x24262a);
     mat.emissiveIntensity = .25;
    }
    mesh.castShadow = mesh.receiveShadow = true;
   });
   o.position.set(0, 0, 0); o.rotation.set(0, 0, 0); o.scale.set(1, 1, 1);
   out[k] = o;
  }
  return out;
 });
 return dress;
}

// ── Paperwork ──────────────────────────────────────────────────────────────
type PaperKind = 'log' | 'telegram' | 'manifest' | 'blank' | 'scrawl';
const PAPER: Partial<Record<PaperKind, THREE.MeshStandardMaterial>> = {};
const TYPE = '"Courier New", "Liberation Mono", "DejaVu Sans Mono", monospace';
const HAND = 'italic 600 26px "Georgia", "DejaVu Serif", serif';

function paperCanvas(kind: PaperKind) {
 const W = 420, H = 594, c = document.createElement('canvas'); c.width = W; c.height = H;
 const g = c.getContext('2d')!;
 // Cheap pulp paper, yellowed toward the edges, a damp stain.
 g.fillStyle = '#e6dfc8'; g.fillRect(0, 0, W, H);
 const edge = g.createRadialGradient(W / 2, H / 2, H * .2, W / 2, H / 2, H * .75);
 edge.addColorStop(0, 'rgba(0,0,0,0)'); edge.addColorStop(1, 'rgba(120,96,50,.35)');
 g.fillStyle = edge; g.fillRect(0, 0, W, H);
 g.fillStyle = 'rgba(120,110,80,.18)'; g.beginPath(); g.ellipse(W * .7, H * .78, 90, 60, .4, 0, 7); g.fill();
 const typeLine = (t: string, x: number, y: number, size = 15, col = 'rgba(30,28,26,.88)') => { g.font = `bold ${size}px ${TYPE}`; g.fillStyle = col; g.fillText(t, x, y); };
 const hand = (t: string, x: number, y: number, col = 'rgba(28,40,120,.85)', rot = 0) => { g.save(); g.translate(x, y); g.rotate(rot); g.font = HAND; g.fillStyle = col; g.fillText(t, 0, 0); g.restore(); };
 const rule = (y: number) => { g.strokeStyle = 'rgba(60,60,80,.35)'; g.lineWidth = 1; g.beginPath(); g.moveTo(24, y); g.lineTo(W - 24, y); g.stroke(); };
 if (kind === 'log') {
  typeLine('ЖУРНАЛ РАДИОСВЯЗИ', 92, 46, 19);
  typeLine('ОБЪЕКТ № 7    ЛИСТ 14', 110, 70, 14);
  for (let y = 100; y < H - 20; y += 32) rule(y);
  const rows: [string, string][] = [
   ['03:40', 'Связь с «Берёзой» есть'], ['04:10', '«Берёза» не отвечает'], ['04:25', 'Вода в отсеке 3, 40 см'],
   ['04:40', 'Насосы стали'], ['05:02', 'Шум за переборкой'], ['05:15', 'Дежурный не вернулся'],
   ['05:31', 'Оно в воде'], ['05:3', ''],
  ];
  rows.forEach(([t, msg], i) => { typeLine(t, 30, 124 + i * 32, 15); hand(msg, 96, 124 + i * 32, 'rgba(28,40,120,.85)', -.01); });
 } else if (kind === 'telegram') {
  g.fillStyle = 'rgba(200,180,140,.5)'; g.fillRect(0, 0, W, 110);
  typeLine('ТЕЛЕГРАММА', 120, 50, 26);
  typeLine('МИНИСТЕРСТВО СВЯЗИ СССР', 98, 78, 12);
  g.save(); g.translate(300, 150); g.rotate(-.18); g.strokeStyle = 'rgba(190,30,30,.75)'; g.lineWidth = 4; g.strokeRect(-70, -26, 140, 46);
  g.font = `bold 28px ${TYPE}`; g.fillStyle = 'rgba(190,30,30,.75)'; g.fillText('МОЛНИЯ', -62, 8); g.restore();
  const msg = ['ОБЪЕКТ 7 НАЧАЛЬНИКУ', 'ГЕРМЕТИЗИРОВАТЬ НИЖНИЕ', 'ОТСЕКИ ТЧК ЛЮДЕЙ НЕ', 'ВЫВОДИТЬ ДО ПРИКАЗА', 'ТЧК ОБРАЗЕЦ НЕ', 'УНИЧТОЖАТЬ ТЧК', '          ВОЛКОВ'];
  msg.forEach((t, i) => typeLine(t, 40, 230 + i * 34, 17));
 } else if (kind === 'manifest') {
  typeLine('ВЕДОМОСТЬ ВЫДАЧИ', 92, 46, 19);
  typeLine('склад ГО  № 3', 140, 70, 14);
  g.strokeStyle = 'rgba(40,40,60,.55)'; g.lineWidth = 1.5;
  for (let y = 90; y <= 450; y += 30) { g.beginPath(); g.moveTo(24, y); g.lineTo(W - 24, y); g.stroke(); }
  for (const x of [24, 60, 300, W - 24]) { g.beginPath(); g.moveTo(x, 90); g.lineTo(x, 450); g.stroke(); }
  const rows = [['Противогаз ГП-5', '40'], ['Патроны 7,62 ПС', '880'], ['Аптечка АИ-2', '12'], ['Канистра 20 л', '6'], ['Фонарь', '4'], ['Дозиметр ДП-5', '2'], ['Сухпаёк', '120']];
  rows.forEach(([n, q], i) => { typeLine(String(i + 1), 34, 112 + i * 30, 14); hand(n, 68, 112 + i * 30); hand(q, 316, 112 + i * 30); });
  hand('выдано —', 60, 500, 'rgba(28,40,120,.8)', -.04);
  g.strokeStyle = 'rgba(28,40,120,.8)'; g.lineWidth = 2; g.beginPath(); g.moveTo(170, 500); g.bezierCurveTo(200, 470, 230, 520, 290, 488); g.stroke();
 } else if (kind === 'scrawl') {
  hand('где Петров?', 60, 180, 'rgba(20,20,20,.85)', -.1);
  hand('не открывать', 50, 300, 'rgba(150,20,20,.85)', -.06);
  hand('ОНО СЛЫШИТ', 70, 420, 'rgba(20,20,20,.9)', .05);
 }
 // Fold creases.
 g.strokeStyle = 'rgba(80,70,50,.18)'; g.lineWidth = 2;
 g.beginPath(); g.moveTo(0, H / 3); g.lineTo(W, H / 3 + 4); g.moveTo(0, H * 2 / 3); g.lineTo(W, H * 2 / 3 - 3); g.stroke();
 return c;
}
function paperMaterial(kind: PaperKind) {
 if (PAPER[kind]) return PAPER[kind]!;
 const t = new THREE.CanvasTexture(paperCanvas(kind));
 t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
 return (PAPER[kind] = new THREE.MeshStandardMaterial({ map: t, roughness: .92, side: THREE.DoubleSide, emissive: 0x1e1c16, emissiveIntensity: .25, polygonOffset: true, polygonOffsetFactor: -2 }));
}
/** A sheet of A4, slightly cockled. Lies flat in its own XZ plane, top edge toward -Z. */
function sheet(kind: PaperKind, seed: number, w = .21, h = .297) {
 const g = new THREE.PlaneGeometry(w, h, 4, 6);
 g.rotateX(-Math.PI / 2);
 const p = g.attributes.position;
 for (let i = 0; i < p.count; i++) p.setY(i, .0015 + .004 * Math.abs(Math.sin(p.getX(i) * 31 + seed) * Math.sin(p.getZ(i) * 17 + seed * 2)));
 g.computeVertexNormals();
 const m = new THREE.Mesh(g, paperMaterial(kind));
 m.receiveShadow = true;
 return m;
}

let crumpleGeo: THREE.BufferGeometry | null = null;
function crumpled(seed: number) {
 if (!crumpleGeo) {
  const g = new THREE.IcosahedronGeometry(.04, 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
   const v = new THREE.Vector3().fromBufferAttribute(p, i);
   const k = .7 + .45 * Math.abs(Math.sin(v.x * 90) * Math.cos(v.y * 70 + v.z * 50));
   v.multiplyScalar(k); v.y *= .75; p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals(); crumpleGeo = g;
 }
 const m = new THREE.Mesh(crumpleGeo, paperMaterial('blank'));
 m.rotation.set(seed, seed * 2.3, seed * .7);
 m.scale.setScalar(.8 + (seed * 7.3 % 1) * .5);
 m.castShadow = true;
 return m;
}

// ── Small procedural props ───────────────────────────────────────────────────
const mats: Record<string, THREE.Material> = {};
const mat = (k: string, make: () => THREE.Material) => (mats[k] ??= make());

/** Enamelled steel mug, white with a blue rim and chips. */
export function enamelMug() {
 const g = new THREE.Group();
 const prof = [[0, 0], [.04, 0], [.042, .004], [.042, .09], [.044, .092], [.04, .092], [.038, .006], [0, .006]].map(([x, y]) => new THREE.Vector2(x, y));
 const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 24), mat('enamel', () => new THREE.MeshStandardMaterial({ color: 0xe8e6dc, roughness: .25, emissive: 0x1e1e1c, emissiveIntensity: .25 })));
 const rim = new THREE.Mesh(new THREE.TorusGeometry(.042, .003, 6, 24), mat('enamelRim', () => new THREE.MeshStandardMaterial({ color: 0x2a3f7a, roughness: .3 })));
 rim.rotation.x = Math.PI / 2; rim.position.y = .091;
 const handle = new THREE.Mesh(new THREE.TorusGeometry(.024, .005, 6, 14, Math.PI), mat('enamel', () => new THREE.MeshStandardMaterial()));
 handle.rotation.z = -Math.PI / 2; handle.position.set(.042, .05, 0);
 const tea = new THREE.Mesh(new THREE.CircleGeometry(.038, 20), mat('tea', () => new THREE.MeshStandardMaterial({ color: 0x2a160a, roughness: .05 })));
 tea.rotation.x = -Math.PI / 2; tea.position.y = .07;
 g.add(body, rim, handle, tea);
 g.traverse(o => { o.castShadow = true; });
 return g;
}
/** Enamelled tea kettle (chainik): white with a blue rim, like every Soviet barracks had. */
function chainik() {
 const g = new THREE.Group();
 const body = new THREE.Mesh(new TeapotGeometry(.07, 8, true, true, true, false, true), mat('enamel', () => new THREE.MeshStandardMaterial({ color: 0xe8e6dc, roughness: .25, emissive: 0x1e1e1c, emissiveIntensity: .25 })));
 body.position.y = .07;
 g.add(body);
 g.traverse(o => { o.castShadow = true; });
 return g;
}
/** Tin ashtray with papirosa butts. */
function ashtray() {
 const g = new THREE.Group();
 const tin = new THREE.Mesh(new THREE.CylinderGeometry(.055, .05, .022, 20, 1, true), mat('tin', () => new THREE.MeshStandardMaterial({ color: 0x8a8a80, roughness: .4, metalness: .8, side: THREE.DoubleSide })));
 tin.position.y = .011;
 const base = new THREE.Mesh(new THREE.CircleGeometry(.05, 20), mat('ash', () => new THREE.MeshStandardMaterial({ color: 0x55524c, roughness: 1 })));
 base.rotation.x = -Math.PI / 2; base.position.y = .004;
 g.add(tin, base);
 const paper = mat('papirosa', () => new THREE.MeshStandardMaterial({ color: 0xe8e2d0, roughness: .8 }));
 for (let i = 0; i < 5; i++) {
  const b = new THREE.Mesh(new THREE.CylinderGeometry(.0045, .0045, .05, 6), paper);
  b.rotation.set(Math.PI / 2 - .2, i * 1.3, 0); b.position.set(Math.cos(i * 1.3) * .02, .012, Math.sin(i * 1.3) * .02);
  g.add(b);
 }
 return g;
}
/** Pine stool (taburet): seat, four splayed legs, stretchers. */
function taburet() {
 const g = new THREE.Group();
 const wood = mat('pine', () => new THREE.MeshStandardMaterial({ color: 0x4a3828, roughness: .8, emissive: 0x0e0a06, emissiveIntensity: .2 }));
 const seat = new THREE.Mesh(new THREE.BoxGeometry(.34, .03, .34), wood); seat.position.y = .45;
 g.add(seat);
 for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
  const leg = new THREE.Mesh(new THREE.BoxGeometry(.035, .45, .035), wood);
  leg.position.set(sx * .13, .225, sz * .13); leg.rotation.set(-sz * .04, 0, sx * .04);
  g.add(leg);
 }
 for (const r of [0, Math.PI / 2]) {
  const s = new THREE.Mesh(new THREE.BoxGeometry(.27, .03, .02), wood);
  s.position.y = .15; s.rotation.y = r; g.add(s);
 }
 g.traverse(o => { o.castShadow = o.receiveShadow = true; });
 return g;
}
export function pencil() {
 const m = new THREE.Mesh(new THREE.CylinderGeometry(.0035, .0035, .16, 6), mat('pencil', () => new THREE.MeshStandardMaterial({ color: 0x9c2a1c, roughness: .5 })));
 m.rotation.z = Math.PI / 2; m.position.y = .004;
 return m;
}
let caseGeo: THREE.BufferGeometry | null = null;
/** Spent 7.62×39 cases where someone fired from behind this cover. */
function casings(n: number, seed: number, around: { x: number; z: number; r0: number; r1: number }) {
 caseGeo ??= new THREE.CylinderGeometry(.0055, .0058, .039, 8).rotateZ(Math.PI / 2).translate(0, .0057, 0);
 const brass = mat('brass', () => new THREE.MeshStandardMaterial({ color: 0xb08a3c, roughness: .35, metalness: .9, emissive: 0x2a2010, emissiveIntensity: .3 }));
 const im = new THREE.InstancedMesh(caseGeo, brass, n);
 const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
 for (let i = 0; i < n; i++) {
  const a = (seed * 13.7 + i * 2.39) % (Math.PI * 2), r = around.r0 + ((seed * 7.1 + i * .618) % 1) * (around.r1 - around.r0);
  e.set(0, i * 1.7 + seed, 0); q.setFromEuler(e);
  m.compose(new THREE.Vector3(around.x + Math.cos(a) * r, 0, around.z + Math.sin(a) * r), q, new THREE.Vector3(1, 1, 1));
  im.setMatrixAt(i, m);
 }
 im.castShadow = false; im.receiveShadow = true;
 return im;
}

function put(parent: THREE.Object3D, o: THREE.Object3D, x: number, y: number, z: number, yaw = 0) {
 o.position.set(x, y, z); o.rotation.y += yaw; parent.add(o); return o;
}
const clone = (p: Record<DressPart, THREE.Object3D>, k: DressPart) => p[k].clone(true);

// ── Scenes ─────────────────────────────────────────────────────────────────
/**
 * The radio post: metal_office_desk, operator side +Z, top at 0.7875 m, knee hole |x| < 0.51.
 * The set is on, the log is open at the last entry, the telegram that explains it beside it.
 */
export async function dressRadioDesk(root: THREE.Object3D) {
 const p = await loadDressParts();
 const g = new THREE.Group(); g.name = 'scene:radio';
 const top = .7875;
 put(g, clone(p, 'radio'), -.52, top, -.18, .12);
 const log = put(g, sheet('log', 1, .3, .21), -.02, top, .12, -.06);
 log.rotation.y = Math.PI / 2 - .06;
 put(g, sheet('telegram', 2), .33, top, .02, .22);
 put(g, sheet('blank', 3), .4, top - .0005, -.1, -.4);
 const clip = put(g, clone(p, 'clipboard'), .74, top, -.16, .18);
 put(clip, sheet('manifest', 4, .2, .28), 0, .03, .02);
 put(g, enamelMug(), .56, top, .24, 1.1);
 put(g, ashtray(), .82, top, .27);
 // The operator's stool, pulled out where he sits writing up the log (guardSceneVisual knocks
 // it over when he jumps up).
 const stool = put(g, taburet(), OPERATOR_STOOL.x, 0, OPERATOR_STOOL.z, .08);
 stool.name = 'operatorStool';
 // A gas mask dropped on the floor by the desk; papers that slid off.
 const mask = put(g, clone(p, 'gasMask'), -.75, .07, .5, 0);
 mask.rotation.set(-Math.PI / 2, 0, 2.1);
 put(g, sheet('scrawl', 5), .1, 0, .75, .5);
 put(g, sheet('blank', 6), -.6, 0, .82, -.9);
 for (let i = 0; i < 4; i++) put(g, crumpled(i + 1), -.9 + i * .38, .03, .62 + (i % 2) * .25);
 // The top drawer left open.
 const drawer = root.getObjectByName('metal_office_desk_drawer_02') ?? root.getObjectByName('metal_office_desk_drawer_01');
 if (drawer) drawer.position.z += .14;
 root.add(g);
}

type Slot = { part: string; x: number; y: number; z: number; yaw: number; top: number; hw: number; hd: number };

/** Crate stacks: dress the top and the floor around it. `slots` are root-local with their top. */
export async function dressCrateStack(root: THREE.Object3D, scene: CrateScene, slots: Slot[], extent: { hx: number; hz: number }, seed: number) {
 const p = await loadDressParts();
 const g = new THREE.Group(); g.name = `scene:${scene}`;
 // A lid at chest height with room on it, where a standing man would actually put things down
 // (and where the player sees them); failing that, the lowest free lid.
 const roomy = slots.filter(s => s.hw * s.hd > .05);
 const reach = roomy.filter(s => s.top > .8 && s.top < 1.62).sort((a, b) => b.top - a.top);
 const lid = reach[0] ?? [...roomy].sort((a, b) => a.top - b.top)[0] ?? slots[0];
 const onLid = (o: THREE.Object3D, dx: number, dz: number, yaw: number) => {
  const c = Math.cos(lid.yaw), s = Math.sin(lid.yaw);
  return put(g, o, lid.x + dx * c + dz * s, lid.top, lid.z - dx * s + dz * c, lid.yaw + yaw);
 };
 if (scene === 'tea') {
  // The quartermaster's tea break: kettle and the manifest on the stack, his bench beside it
  // (crateStackAsset), his mug in his hand (guardSceneVisual).
  const clip = onLid(clone(p, 'clipboard'), -.1, .02, .25);
  put(clip, sheet('manifest', seed, .2, .28), 0, .03, .02);
  onLid(chainik(), .2, -.05, .6);
  onLid(enamelMug(), .24, .16, 2.2);
 } else if (scene === 'issue') {
  const clip = onLid(clone(p, 'clipboard'), -.08, 0, .2);
  put(clip, sheet('manifest', seed, .2, .28), 0, .03, .02);
  onLid(enamelMug(), .22, .08, 1.4);
  // Crowbar leant against the stack.
  const bar = put(g, clone(p, 'crowbar'), extent.hx + .03, 0, .1, Math.PI / 2);
  bar.rotation.z = .2;
  g.add(casings(9, seed, { x: 0, z: 0, r0: extent.hx + .2, r1: extent.hx + .9 }));
 } else if (scene === 'workshop') {
  onLid(clone(p, 'toolbox'), -.1, 0, .1);
  onLid(clone(p, 'multimeter'), .22, .02, -.3);
  put(g, clone(p, 'oilTin'), extent.hx + .09, 0, -.25, .4);
  put(g, sheet('blank', seed), extent.hx + .35, 0, .2, 1.1);
 } else {
  // Abandoned: the mask dropped on the run, papers and cases everywhere.
  const mask = put(g, clone(p, 'gasMask'), extent.hx + .25, .06, -.1, 0);
  mask.rotation.set(-Math.PI / 2, 0, 1.9 + seed % 1);
  const bar = put(g, clone(p, 'crowbar'), -extent.hx - .3, .02, .3, 0);
  bar.rotation.set(Math.PI / 2, 0, .9);
  put(g, sheet('scrawl', seed), .1, 0, extent.hz + .4, .7);
  put(g, sheet('log', seed + 1), -.4, 0, -extent.hz - .35, -1.2);
  for (let i = 0; i < 3; i++) put(g, crumpled(seed + i), extent.hx + .3 + i * .2, .03, .45 - i * .4);
  g.add(casings(16, seed, { x: 0, z: 0, r0: extent.hx + .2, r1: extent.hx + 1.4 }));
 }
 root.add(g);
}

/** Racks: gas masks hung on the end posts, the stock list clipped to the other end. */
export async function dressRack(root: THREE.Object3D, scene: RackScene, halfLength: number, seed: number) {
 const p = await loadDressParts();
 const g = new THREE.Group(); g.name = `scene:${scene}`;
 const end = halfLength + .02;
 if (scene === 'masks') {
  for (const [i, z] of [-.18, 0, .18].entries()) {
   const m = put(g, clone(p, 'gasMask'), end + .06, 1.86 - 1.126, z, Math.PI / 2 + (i - 1) * .15);
   m.rotation.z = .02 * (i - 1);
  }
 } else if (scene === 'workshop') {
  put(g, clone(p, 'oilTin'), end + .1, 0, .12, .3);
  put(g, clone(p, 'oilTin'), end + .1, 0, -.1, -.2);
 }
 // Stock list on the far post, facing the aisle.
 const clip = put(g, clone(p, 'clipboard'), -end - .03, 1.42, 0, 0);
 clip.rotation.set(0, -Math.PI / 2, Math.PI / 2);
 put(clip, sheet('manifest', seed, .2, .28), 0, .03, .02);
 if (scene !== 'masks') g.add(casings(5, seed, { x: 0, z: 0, r0: halfLength + .3, r1: halfLength + 1.1 }));
 root.add(g);
}
