/**
 * Stencilled Soviet signage, painted into one canvas atlas at load.
 *
 * Every mark is sprayed through a stencil: the letters get bridges, a soft overspray halo,
 * and are then worn back with speckle and scuffs so they sit in the paint rather than on it.
 */
import * as THREE from 'three';
import { hash3 } from './bunkerLayout';

const PX_PER_M = 170;
const SIZE = 2048;
const FONT = '"PT Sans Narrow","Arial Narrow","Roboto Condensed","DejaVu Sans Condensed","Liberation Sans Narrow",Impact,"Arial Black",sans-serif';

type Painter = (g: CanvasRenderingContext2D, w: number, h: number) => void;
type Mark = { w: number; h: number; paint: Painter };

const RED = '#8e1f16', BLACK = '#1d1c19', WHITE = '#e6e1d1', YELLOW = '#c9a227';

function fitText(g: CanvasRenderingContext2D, text: string, x: number, y: number, maxW: number, maxH: number, color: string, weight = 'bold') {
 let size = maxH;
 g.font = `${weight} ${size}px ${FONT}`;
 const m = g.measureText(text).width;
 if (m > maxW) { size *= maxW / m; g.font = `${weight} ${size}px ${FONT}`; }
 g.fillStyle = color;
 g.textAlign = 'center';
 g.textBaseline = 'middle';
 // Overspray: a faint soft pass first.
 g.save();
 g.shadowColor = color; g.shadowBlur = size * .08; g.globalAlpha = .35;
 g.fillText(text, x, y);
 g.restore();
 g.fillText(text, x, y);
 // Stencil bridges: the letters are cut through where the stencil card holds its islands.
 g.save();
 g.globalCompositeOperation = 'destination-out';
 g.fillRect(x - maxW / 2, y - size * .04, maxW, Math.max(2, size * .07));
 g.restore();
 return size;
}

function arrow(g: CanvasRenderingContext2D, x0: number, x1: number, y: number, t: number, color: string) {
 const dir = Math.sign(x1 - x0), head = t * 2.2;
 g.fillStyle = color;
 g.beginPath();
 g.moveTo(x0, y - t / 2); g.lineTo(x1 - dir * head, y - t / 2); g.lineTo(x1 - dir * head, y - t * 1.4);
 g.lineTo(x1, y); g.lineTo(x1 - dir * head, y + t * 1.4); g.lineTo(x1 - dir * head, y + t / 2); g.lineTo(x0, y + t / 2);
 g.closePath(); g.fill();
}

function star(g: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string) {
 g.beginPath();
 for (let i = 0; i < 10; i++) {
  const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .382 : r;
  g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
 }
 g.closePath(); g.fillStyle = color; g.fill();
}

const MARKS: Record<string, Mark> = {
 shelter: { w: 2.6, h: 1.3, paint: (g, w, h) => {
  g.fillStyle = WHITE; g.fillRect(0, 0, w, h);
  g.strokeStyle = RED; g.lineWidth = h * .06; g.strokeRect(h * .05, h * .05, w - h * .1, h - h * .1);
  fitText(g, 'УБЕЖИЩЕ № 7', w / 2, h * .4, w * .82, h * .36, BLACK);
  fitText(g, 'ВМЕСТИМОСТЬ 300 ЧЕЛ.', w / 2, h * .74, w * .7, h * .16, RED);
 } },
 caution: { w: 1.5, h: .55, paint: (g, w, h) => { fitText(g, 'ОСТОРОЖНО!', w / 2, h / 2, w * .96, h * .8, RED); } },
 nosmoke: { w: 1.3, h: .5, paint: (g, w, h) => { fitText(g, 'НЕ КУРИТЬ', w / 2, h / 2, w * .96, h * .8, RED); } },
 hermetic: { w: 1.6, h: .5, paint: (g, w, h) => { fitText(g, 'ГЕРМЕТИЧНО', w / 2, h / 2, w * .96, h * .78, BLACK); } },
 exitR: { w: 1.5, h: .5, paint: (g, w, h) => { fitText(g, 'ВЫХОД', w * .36, h / 2, w * .62, h * .78, BLACK); arrow(g, w * .7, w * .98, h / 2, h * .16, BLACK); } },
 exitL: { w: 1.5, h: .5, paint: (g, w, h) => { fitText(g, 'ВЫХОД', w * .64, h / 2, w * .62, h * .78, BLACK); arrow(g, w * .3, w * .02, h / 2, h * .16, BLACK); } },
 volts: { w: .7, h: .5, paint: (g, w, h) => {
  g.fillStyle = YELLOW; g.beginPath(); g.moveTo(w * .5, h * .04); g.lineTo(w * .96, h * .96); g.lineTo(w * .04, h * .96); g.closePath(); g.fill();
  g.strokeStyle = BLACK; g.lineWidth = h * .05; g.stroke();
  g.fillStyle = BLACK; g.beginPath();
  g.moveTo(w * .55, h * .28); g.lineTo(w * .4, h * .62); g.lineTo(w * .52, h * .6); g.lineTo(w * .45, h * .88); g.lineTo(w * .62, h * .52); g.lineTo(w * .5, h * .54); g.closePath(); g.fill();
 } },
 star: { w: .9, h: .9, paint: (g, w, h) => { star(g, w / 2, h * .53, w * .47, RED); } },
 gauge: { w: .46, h: 7.2, paint: (g, w, h) => {
  // Metres above the floor: the stencil runs from 0.1 m to 7.3 m.
  const y = (m: number) => (7.3 - m) / 7.2 * h;
  g.fillStyle = BLACK;
  g.fillRect(w * .08, y(7.3), w * .07, y(.1) - y(7.3));
  for (let cm = 10; cm <= 730; cm += 10) {
   const m = cm / 100, big = cm % 100 === 0, mid = cm % 50 === 0;
   const len = big ? .55 : mid ? .38 : .22;
   g.fillStyle = cm >= 600 ? RED : BLACK;
   g.fillRect(w * .15, y(m) - (big ? 3 : 1.5), w * len, big ? 6 : 3);
   if (big && m >= 1) fitText(g, String(m), w * .82, y(m) - h * .01, w * .34, h * .05, cm >= 600 ? RED : BLACK);
  }
 } },
};
const ZONES: Record<string, string> = { corridor: 'ОТСЕК 1', entrance: 'ОТСЕК 2', neck: 'ОТСЕК 3', hall: 'ОТСЕК 4', fissure: 'ОТСЕК 5', pool: 'ОТСЕК 6', back: 'ОТСЕК 7' };
for (const [z, text] of Object.entries(ZONES)) MARKS[`zone:${z}`] = { w: 1.9, h: .62, paint: (g, w, h) => { fitText(g, text, w / 2, h / 2, w * .97, h * .85, BLACK); } };

/** Scuff the painted marks back: speckle, a few scrapes, and soft fade patches. */
function weather(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number) {
 g.save();
 g.globalCompositeOperation = 'destination-out';
 const n = Math.round(w * h / 90);
 for (let i = 0; i < n; i++) {
  const r = 1 + hash3(i, seed, 1) ** 3 * 5;
  g.globalAlpha = .25 + hash3(i, seed, 2) * .75;
  g.beginPath(); g.arc(x + hash3(i, seed, 3) * w, y + hash3(i, seed, 4) * h, r, 0, Math.PI * 2); g.fill();
 }
 for (let i = 0; i < 3; i++) {
  g.globalAlpha = .35;
  const cx = x + hash3(i, seed, 5) * w, cy = y + hash3(i, seed, 6) * h, rr = Math.min(w, h) * (.2 + hash3(i, seed, 7) * .4);
  const gr = g.createRadialGradient(cx, cy, 0, cx, cy, rr);
  gr.addColorStop(0, 'rgba(0,0,0,1)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr; g.fillRect(cx - rr, cy - rr, rr * 2, rr * 2);
 }
 g.globalAlpha = .6;
 g.lineWidth = 2;
 for (let i = 0; i < 2; i++) {
  g.beginPath();
  const sx = x + hash3(i, seed, 8) * w, sy = y + hash3(i, seed, 9) * h;
  g.moveTo(sx, sy); g.lineTo(sx + (hash3(i, seed, 10) - .5) * w * .6, sy + (hash3(i, seed, 11) - .3) * h * .3);
  g.stroke();
 }
 g.restore();
}

export type StencilAtlas = { texture: THREE.CanvasTexture; rect(id: string): [number, number, number, number] | null };
type Slot = { id: string; x: number; y: number; w: number; h: number; paint: Painter };

/**
 * Where every mark sits in the atlas (pixels). Pure: the offline light baker needs the same
 * decal UVs as the running game.
 */
function atlasSlots(labels: Map<string, string>): Slot[] {
 const slots: Slot[] = [];
 const gaugeW = Math.ceil(MARKS.gauge.w * SIZE / MARKS.gauge.h);
 slots.push({ id: 'gauge', x: SIZE - gaugeW - 4, y: 0, w: gaugeW, h: SIZE, paint: MARKS.gauge.paint });
 // Shelf-pack everything else to the left of the gauge.
 const maxX = SIZE - gaugeW - 12;
 let x = 4, y = 4, row = 0;
 const add = (id: string, wm: number, hm: number, paint: Painter) => {
  const w = Math.round(wm * PX_PER_M), h = Math.round(hm * PX_PER_M);
  if (x + w > maxX) { x = 4; y += row + 6; row = 0; }
  if (y + h > SIZE) return;
  slots.push({ id, x, y, w, h, paint });
  x += w + 6; row = Math.max(row, h);
 };
 for (const [id, m] of Object.entries(MARKS)) if (id !== 'gauge') add(id, m.w, m.h, m.paint);
 for (const [id, text] of labels) {
  if (id.startsWith('door:')) add(id, .8, .34, (gg, w, h) => { fitText(gg, text, w / 2, h / 2, w * .95, h * .82, RED); });
  else add(id, .52, .26, (gg, w, h) => { fitText(gg, text, w / 2, h / 2, w * .95, h * .82, BLACK); });
 }
 return slots;
}

/** Atlas UV rect per stencil id: canvas top-left origin, three flips canvas textures, so v runs bottom-up. */
export function stencilRects(labels: Map<string, string>) {
 const rects = new Map<string, [number, number, number, number]>();
 for (const { id, x, y, w, h } of atlasSlots(labels)) rects.set(id, [(x + 1) / SIZE, 1 - (y + h - 1) / SIZE, (x + w - 1) / SIZE, 1 - (y + 1) / SIZE]);
 return rects;
}

/** Paint every fixed mark plus the per-pilaster grid labels into one atlas. */
export function createStencilAtlas(labels: Map<string, string>): StencilAtlas {
 const canvas = document.createElement('canvas');
 canvas.width = canvas.height = SIZE;
 const g = canvas.getContext('2d')!;
 for (const { id, x, y, w, h, paint } of atlasSlots(labels)) {
  g.save(); g.translate(x, y);
  g.beginPath(); g.rect(0, 0, w, h); g.clip();
  paint(g, w, h);
  g.restore();
  weather(g, x, y, w, h, id.length * 131 + x + y);
 }
 const rects = stencilRects(labels);
 const texture = new THREE.CanvasTexture(canvas);
 texture.colorSpace = THREE.SRGBColorSpace;
 texture.anisotropy = 4;
 texture.generateMipmaps = true;
 texture.minFilter = THREE.LinearMipmapLinearFilter;
 return { texture, rect: id => rects.get(id) ?? null };
}

export function createDecalMaterial(atlas: StencilAtlas) {
 const m = new THREE.MeshStandardMaterial({
  map: atlas.texture, transparent: true, depthWrite: false, roughness: .82, metalness: 0,
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
 });
 m.name = 'bunkerStencil';
 return m;
}
