import { test } from 'node:test';
import assert from 'node:assert/strict';
import { zoneOf, type Zone } from '../src/bunkerLayout';
import { cells, world, START, EXIT } from '../src/simulation';
import {
 ZONE_LIGHT, ZONE_BLEND_SEC, zoneAt, zoneBlendK, zoneFillMounts, zoneLight, zoneSconceColor,
} from '../src/zoneLighting';
import { assignSconceStates, createWallSconces, wallSconceMounts } from '../src/sconceAsset';
import { PIPE_MOUNT } from '../src/pipeAsset';
import { BULB_ORANGE, DRY_FIELD, FLUORESCENT } from '../src/frameGrade';

const ZONES: Zone[] = ['corridor', 'entrance', 'neck', 'hall', 'fissure', 'pool', 'back'];

test('every compartment has a distinct practical colour and fog', () => {
 const colors = new Set(ZONES.map(z => ZONE_LIGHT[z].color));
 const fogs = new Set(ZONES.map(z => ZONE_LIGHT[z].fog));
 assert.ok(colors.size >= 5, 'wings do not share one tube colour');
 assert.ok(fogs.size >= 5, 'wings do not share one fog');
 assert.equal(ZONE_LIGHT.hall.color, FLUORESCENT);
 assert.equal(ZONE_LIGHT.hall.fog, DRY_FIELD);
 assert.ok(ZONE_LIGHT.back.color > 0xff0000 || ((ZONE_LIGHT.back.color >> 16) & 0xff) > 0xc0, 'bone wing reads red');
 assert.ok(((ZONE_LIGHT.pool.color) & 0xff) > 0xc0, 'extraction reads cyan');
 assert.ok(((ZONE_LIGHT.fissure.color >> 8) & 0xff) > 0x80, 'fissure keeps warm amber');
});

test('zoneAt follows open floor; START and EXIT land in expected wings', () => {
 assert.equal(zoneAt(START.x, START.z), 'entrance');
 assert.equal(zoneAt(EXIT.x, EXIT.z), 'pool');
 for (const key of [...cells].slice(0, 40)) {
  const [c, r] = key.split(',').map(Number);
  const p = world(c, r);
  assert.equal(zoneAt(p.x, p.z), zoneOf(c, r));
 }
});

test('zoneFillMounts places one ceiling practical per inhabited zone', () => {
 const mounts = zoneFillMounts();
 const seen = new Set(mounts.map(m => m.zone));
 for (const z of ZONES) {
  const hasCells = [...cells].some(k => {
   const [c, r] = k.split(',').map(Number);
   return zoneOf(c, r) === z;
  });
  if (hasCells) assert.ok(seen.has(z), `fill for ${z}`);
 }
 for (const m of mounts) {
  assert.ok(m.intensity > 0 && m.distance > 0);
  assert.equal(m.color, zoneLight(m.zone).color);
  assert.ok(m.y > 4 && m.y < 9);
 }
});

test('zone sconce colour keeps warm accents outside emergency wings', () => {
 assert.equal(zoneSconceColor('hall', 0, false), BULB_ORANGE);
 assert.equal(zoneSconceColor('hall', 1, false), ZONE_LIGHT.hall.color);
 assert.equal(zoneSconceColor('hall', 2, true), ZONE_LIGHT.hall.color);
 assert.equal(zoneSconceColor('back', 0, false), ZONE_LIGHT.back.color);
 assert.equal(zoneSconceColor('fissure', 0, false), ZONE_LIGHT.fissure.color);
});

test('wall sconces carry a zone and paint lights from ZONE_LIGHT', () => {
 const mounts = wallSconceMounts();
 assert.ok(mounts.length > 8);
 assert.ok(mounts.every(m => m.zone && ZONES.includes(m.zone)));
 const { lights } = createWallSconces(mounts);
 assert.equal(lights.length, mounts.length);
 const on = lights.filter(l => l.state !== 'off');
 assert.ok(on.length >= 4);
 for (let i = 0; i < mounts.length; i++) {
  if (lights[i].state === 'off') continue;
  const hex = lights[i].light.color.getHex();
  const zone = mounts[i].zone!;
  const expected = zoneSconceColor(zone, i, lights[i].state === 'flicker');
  assert.equal(hex, expected, `sconce ${i} in ${zone}`);
  assert.equal(lights[i].base, zoneLight(zone).intensity);
 }
});

test('zone flickerBias promotes extra failing tubes without wiping the off budget', () => {
 const n = 40;
 const steadyZones = Array.from({ length: n }, () => 'hall' as Zone);
 const biasedZones = Array.from({ length: n }, () => 'fissure' as Zone);
 const base = assignSconceStates(n, steadyZones);
 const biased = assignSconceStates(n, biasedZones);
 const flick = (s: ReturnType<typeof assignSconceStates>) => s.filter(x => x === 'flicker').length;
 const off = (s: ReturnType<typeof assignSconceStates>) => s.filter(x => x === 'off').length;
 assert.ok(flick(biased) > flick(base), 'fissure biases more flicker');
 assert.equal(off(biased), off(base), 'off count stays on the global assign');
});

test('soft zone blend eases in under half a second', () => {
 assert.ok(ZONE_BLEND_SEC > 0.2 && ZONE_BLEND_SEC < 1);
 const k = zoneBlendK(ZONE_BLEND_SEC);
 assert.ok(k > 0.6 && k < 0.75, `k=${k}`);
 assert.equal(zoneBlendK(0), 0);
 assert.ok(zoneBlendK(2) > 0.98);
});

test('leak-valve pipe mount is tagged to the bone wing', () => {
 assert.equal(PIPE_MOUNT.zone, 'back');
 // Mount sits on the wall face (not open floor); nearest open cell may be hall.
 assert.ok(Number.isFinite(PIPE_MOUNT.x) && Number.isFinite(PIPE_MOUNT.z));
});
