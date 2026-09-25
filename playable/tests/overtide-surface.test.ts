import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { overtideAlbedoSteps, overtideSurfaceGlsl, patchOvertideLighting } from '../src/overtideSurface';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ocean = readFileSync(path.join(root, 'src/legacy/ocean.ts'), 'utf8');

test('posterize keeps pore noise in one band and splits cracks and moss', () => {
  const rock: [number, number, number] = [0.45, 0.42, 0.38];
  const pore: [number, number, number] = [0.47, 0.44, 0.40];
  const crack: [number, number, number] = [0.18, 0.16, 0.14];
  const moss: [number, number, number] = [0.22, 0.48, 0.16];
  const sand: [number, number, number] = [0.72, 0.66, 0.42];
  const a = overtideAlbedoSteps(rock);
  const b = overtideAlbedoSteps(pore);
  assert.deepEqual(a, b, 'a small pore shift stays in the same flat band');
  for (const px of [a, overtideAlbedoSteps(crack), overtideAlbedoSteps(moss), overtideAlbedoSteps(sand)]) {
    for (const c of px) assert.ok(c === 0 || c === 0.5 || c === 1, `band ${c}`);
  }
  assert.ok(overtideAlbedoSteps(crack).reduce((s, c) => s + c, 0) < a.reduce((s, c) => s + c, 0), 'cracks land in a darker band');
  const m = overtideAlbedoSteps(moss);
  assert.ok(m[1] > m[0] && m[1] >= 0.5, 'moss stays a saturated green field');
  const s = overtideAlbedoSteps(sand);
  assert.ok(s[0] === 1 && s[1] === 1 && s[2] === 0, 'sand highlight snaps to a flat yellow');
});

test('rock shader posterizes albedo, flattens normals, and steps the light', () => {
  assert.match(overtideSurfaceGlsl, /vec3 overtideAlbedo/);
  assert.match(overtideSurfaceGlsl, /float overtideBand/);
  const maps = readFileSync(path.join(root, 'src/rockMaps.ts'), 'utf8');
  assert.match(maps, /overtideSurfaceGlsl/);
  assert.match(ocean, /diffuseColor\.rgb=overtideAlbedo\(gAlb\*tintScale\)/);
  assert.match(ocean, /float mossOn=step\(0\.42,gMoss\)/);
  assert.match(ocean, /normal=nonPerturbedNormal/);
  assert.doesNotMatch(ocean, /triNormalView/);
  assert.match(ocean, /:overtide/);
  const pars = readFileSync(path.join(root, 'node_modules/three/src/renderers/shaders/ShaderChunk/lights_physical_pars_fragment.glsl.js'), 'utf8');
  const hemi = readFileSync(path.join(root, 'node_modules/three/src/renderers/shaders/ShaderChunk/lights_pars_begin.glsl.js'), 'utf8');
  const patched = patchOvertideLighting(`${pars}\n${hemi}\n#include <lights_physical_fragment>`);
  assert.match(patched, /irradiance = overtideBand\(dotNL\) \* directLight\.color/);
  assert.match(patched, /hemiDiffuseWeight = overtideBand\(dotNL\)/);
  assert.match(patched, /material\.specularColor=vec3\(0\.0\)/);
  assert.doesNotMatch(patched, /saturate\( dot\( geometryNormal, directLight\.direction \) \)/);
  assert.doesNotMatch(patched, /0\.5 \* dotNL \+ 0\.5/);
});

test('enemy hit flash is still the red emissive lerp', () => {
  const fx = readFileSync(path.join(root, 'src/survivalFx.ts'), 'utf8');
  assert.match(fx, /0xff2a1a/);
});
