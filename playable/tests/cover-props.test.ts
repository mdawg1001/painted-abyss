/**
 * Cover props: real crate stacks, stocked storage racks and staged scenes stand inside the
 * sim's cover boxes, reach the height the 2D sight test assumes, and every site has its scene.
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SURVIVAL_COVER } from '../src/survivalConfig';
import { crateStackLayout, crateStackExtent, crateStackHeight } from '../src/crateStackAsset';
import { storageRackFootprint, STORAGE_RACK } from '../src/storageRackAsset';
import { SCENE_AT, sceneAt } from '../src/coverScenes';

const root = resolve(import.meta.dirname, '..');

test('crate stacks fill their cover square and hide a standing diver', () => {
 for (const c of SURVIVAL_COVER.filter(c => c.kind === 'crates')) {
  const { slots, yaw } = crateStackLayout(c.x, c.z);
  const e = crateStackExtent(slots, yaw);
  assert.ok(e.hx <= c.hx + .05 && e.hz <= c.hz + .05, `stack at ${c.x},${c.z} spills out: ${e.hx.toFixed(2)} × ${e.hz.toFixed(2)}`);
  assert.ok(e.hx >= c.hx - .12 && e.hz >= c.hz - .12, `stack at ${c.x},${c.z} leaves a gap to its collision box`);
  const h = crateStackHeight(slots);
  assert.ok(h >= 1.7 && h <= 2.05, `stack at ${c.x},${c.z} is ${h.toFixed(2)} m`);
 }
});

test('storage racks stay inside the wall box and every item fits under the deck above it', () => {
 for (const scene of ['stores', 'masks', 'fuel', 'workshop'] as const) for (const seed of [0, 1, 2, 3, 7, 11]) {
  for (const f of storageRackFootprint(seed, scene)) {
   assert.ok(f.hx <= STORAGE_RACK.width + .02, `${scene}/${seed}: ${f.part} sticks out of the row (${f.hx.toFixed(2)})`);
   assert.ok(f.hz <= STORAGE_RACK.depth / 2 + .02, `${scene}/${seed}: ${f.part} sticks out of the rack (${f.hz.toFixed(2)})`);
  }
  const decks = STORAGE_RACK.shelves;
  for (const f of storageRackFootprint(seed, scene)) {
   if (f.part === 'rack') continue;
   const deck = decks.reduce((k, d, i) => (f.y >= d - .001 ? i : k), 0);
   if (deck < decks.length - 1) assert.ok(f.top <= decks[deck + 1] + .015, `${scene}/${seed}: ${f.part} on deck ${deck} is ${f.top.toFixed(2)} high`);
  }
 }
 // The row is as long as the cover box and as tall as the sight test assumes.
 assert.equal(STORAGE_RACK.width * 2, 2.4);
 assert.ok(STORAGE_RACK.height >= 1.85);
});

test('every crate and rack site plays a scene, and the scene assets ship', () => {
 for (const c of SURVIVAL_COVER.filter(c => c.kind !== 'cardboard')) assert.ok(sceneAt(c.x, c.z), `no scene at ${c.x},${c.z}`);
 assert.equal(sceneAt(-10, -18), 'radio');
 assert.ok(Object.keys(SCENE_AT).length >= 17);
 for (const f of ['cover_crates.gltf', 'cover_rack.gltf', 'cover_dress.gltf']) {
  const p = resolve(root, 'public/assets/cover-props', f);
  assert.ok(existsSync(p), f);
  const g = JSON.parse(readFileSync(p, 'utf8')) as { images: { uri: string }[]; buffers: { uri: string }[] };
  for (const u of [...g.images, ...g.buffers].map(i => i.uri)) assert.ok(existsSync(resolve(p, '..', u)), `${f} → ${u}`);
 }
});

test('crate stencils are Soviet: the cover crates use the repainted military crate', () => {
 const g = JSON.parse(readFileSync(resolve(root, 'public/assets/cover-props/cover_crates.gltf'), 'utf8')) as { images: { uri: string }[] };
 assert.ok(g.images.some(i => i.uri.includes('wooden_military_crate_su_diff')));
});
