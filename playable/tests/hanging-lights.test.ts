import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HANGING_LIGHT, hangingLightMounts, lampLevel, lampState, swingStep, type HangingLamp } from '../src/hangingLightAsset';
import { cells, world } from '../src/simulation';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

test('the Poly Haven glTF and every file it references ship with the game', () => {
 const dir = join(root, 'public/assets/caged_hanging_light');
 const gltf = JSON.parse(readFileSync(join(dir, 'caged_hanging_light_1k.gltf'), 'utf8'));
 for (const b of gltf.buffers) assert.ok(existsSync(join(dir, b.uri)), b.uri);
 for (const i of gltf.images) assert.ok(existsSync(join(dir, i.uri)), i.uri);
});

test('lamps hang over open floor, spread through the bunker', () => {
 const m = hangingLightMounts();
 assert.ok(m.length >= 10, `enough lamps (${m.length})`);
 for (const p of m) {
  const inside = [...cells].some(k => { const [c, r] = k.split(',').map(Number); const w = world(c, r); return Math.abs(w.x - p.x) < 1e-6 && Math.abs(w.z - p.z) < 1e-6; });
  assert.ok(inside, 'over a floor cell');
 }
 for (let i = 0; i < m.length; i++) for (let j = i + 1; j < m.length; j++)
  assert.ok(Math.hypot(m[i].x - m[j].x, m[i].z - m[j].z) >= HANGING_LIGHT.spacing - 1e-6);
});

test('swing is a damped pendulum with the period its chain length gives', () => {
 let a = 0.1, v = 0, t = 0, crossings: number[] = [];
 const dt = 1 / 240;
 while (t < 12) { const prev = a; [a, v] = swingStep(a, v, dt, 9.81, HANGING_LIGHT.cable, 0); t += dt; if (prev > 0 && a <= 0) crossings.push(t); }
 const period = crossings[1] - crossings[0];
 const expected = 2 * Math.PI * Math.sqrt(HANGING_LIGHT.cable / 9.81);
 assert.ok(Math.abs(period - expected) / expected < 0.03, `period ${period.toFixed(2)} vs ${expected.toFixed(2)}`);
 let b = 0.1, w = 0;
 for (let i = 0; i < 240 * 30; i++) [b, w] = swingStep(b, w, dt);
 assert.ok(Math.abs(b) < 0.03, 'damping settles it');
});

test('failing tubes drop out, dying ones are mostly dark, the final wave makes everything stutter', () => {
 const lamp = (state: HangingLamp['state']) => ({ state, phase: 1.3, timer: 0, burst: false } as unknown as HangingLamp);
 const sample = (l: HangingLamp, panic = 0) => { const v: number[] = []; for (let t = 0; t < 20; t += 1 / 30) v.push(lampLevel(l, t, 1 / 30, panic, () => .5)); return v; };
 const steady = sample(lamp('steady'));
 assert.ok(Math.min(...steady) > .85, 'steady tubes only ripple');
 const failing = sample(lamp('failing'));
 assert.ok(failing.some(f => f < .1) && failing.filter(f => f > .8).length > failing.length * .6, 'failing: mostly lit, with blackouts');
 const dying = sample(lamp('dying'));
 assert.ok(dying.filter(f => f < .1).length > dying.length * .6, 'dying: mostly dark');
 const panic = sample(lamp('steady'), 1);
 assert.ok(panic.some(f => f < .1), 'panic: even steady tubes black out');
 const states = Array.from({ length: 40 }, (_, i) => lampState(i));
 assert.ok(states.includes('steady') && states.includes('failing') && states.includes('dying'));
});
