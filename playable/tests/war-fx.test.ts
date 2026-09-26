import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { impactNormal, onSurface, MAX_HOLES, HOLE_SIZE } from '../src/warFx';
import { isOpen, world, FLOOR_Y, cells } from '../src/simulation';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('War FX and Crosshairs textures ship with the game', () => {
 const need = [
  ...[1, 2, 3].flatMap(i => [`war_fx/muzzle_front_${i}.png`, `war_fx/muzzle_sparks_${i}.png`]),
  'war_fx/bullet_holes_concrete.png', 'war_fx/smoke_puff.png', 'war_fx/glow_circle.png',
  'crosshairs/crosshair_03.png', 'crosshairs/crosshair_27.png',
 ];
 for (const f of need) assert.ok(existsSync(join(root, 'public/assets', f)), f);
 const css = readFileSync(join(root, 'src/style.css'), 'utf8');
 assert.match(css, /crosshair_03\.png/);
 assert.match(css, /crosshair_27\.png/);
 const notice = readFileSync(join(root, 'NOTICE.md'), 'utf8');
 assert.match(notice, /War FX/);
 assert.match(notice, /OccaSoftware/);
});

test('a wall hit faces back into the room and sits on the face', () => {
 // Find a floor cell with a solid neighbour to the west.
 const key = [...cells].find(k => { const [c, r] = k.split(',').map(Number); return !cells.has(`${c - 1},${r}`); })!;
 const [c, r] = key.split(',').map(Number);
 const p = world(c, r);
 const hit = { x: p.x - 1.9, y: FLOOR_Y + 1.4, z: p.z };
 assert.ok(isOpen(hit.x, hit.z));
 const n = impactNormal(hit, { x: p.x + 1, z: p.z });
 assert.deepEqual(n, { x: 1, y: 0, z: 0 }, 'west wall faces east');
 const at = onSurface(hit, n);
 assert.ok(isOpen(at.x, at.z) && !isOpen(at.x - 0.02, at.z), 'snapped onto the face');
});

test('floor hits face up; decals are small and pooled', () => {
 assert.deepEqual(impactNormal({ x: 0, y: FLOOR_Y, z: 0 }, { x: 1, z: 1 }), { x: 0, y: 1, z: 0 });
 assert.ok(HOLE_SIZE > 0.05 && HOLE_SIZE < 0.3);
 assert.ok(MAX_HOLES >= 16 && MAX_HOLES <= 96);
});
