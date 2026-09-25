import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ShaderChunk } from 'three';
import { overtideAlbedoSteps, overtideSurfaceGlsl, patchOvertideLighting } from '../src/overtideSurface';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ocean = readFileSync(path.join(root, 'src/legacy/ocean.ts'), 'utf8');

test('posterize keeps pore noise in one band and splits cracks and moss', () => {
  // Linear values, the way the rock shader samples the 2K maps.
  const rock: [number, number, number] = [0.32, 0.22, 0.13];
  const pore: [number, number, number] = [0.28, 0.19, 0.11];
  const crack: [number, number, number] = [0.08, 0.06, 0.04];
  const moss: [number, number, number] = [0.08, 0.25, 0.05];
  const sand: [number, number, number] = [0.55, 0.48, 0.25];
  const a = overtideAlbedoSteps(rock);
  const b = overtideAlbedoSteps(pore);
  assert.deepEqual(a, b, 'a small pore shift stays in the same flat band');
  for (const px of [a, overtideAlbedoSteps(crack), overtideAlbedoSteps(moss), overtideAlbedoSteps(sand)]) {
    for (const c of px) assert.ok(c === 0 || c === 0.5 || c === 1, `band ${c}`);
  }
  assert.ok(a[0] > a[1] && a[1] > a[2], 'rock is a warm flat field');
  assert.ok(overtideAlbedoSteps(crack).reduce((s, c) => s + c, 0) < a.reduce((s, c) => s + c, 0), 'cracks land in a darker band');
  const m = overtideAlbedoSteps(moss);
  assert.ok(m[1] > m[0], 'moss stays a greener field than the rock');
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
  const shader = { fragmentShader: [
    '#include <lights_physical_pars_fragment>',
    '#include <lights_pars_begin>',
    '#include <lights_physical_fragment>',
    '#include <lights_fragment_begin>',
  ].join('\n') };
  patchOvertideLighting(shader, ShaderChunk);
  assert.match(shader.fragmentShader, /irradiance = overtideBand\(dotNL\) \* directLight\.color/);
  assert.match(shader.fragmentShader, /hemiDiffuseWeight = overtideBand\(dotNL\)/);
  assert.match(shader.fragmentShader, /material\.specularColor=vec3\(0\.0\)/);
  assert.match(shader.fragmentShader, /#include <lights_fragment_begin>/);
  assert.doesNotMatch(shader.fragmentShader, /saturate\( dot\( geometryNormal, directLight\.direction \) \)/);
  assert.doesNotMatch(shader.fragmentShader, /0\.5 \* dotNL \+ 0\.5/);
});

test('enemy hit flash is still the red emissive lerp', () => {
  const fx = readFileSync(path.join(root, 'src/survivalFx.ts'), 'utf8');
  assert.match(fx, /0xff2a1a/);
});
