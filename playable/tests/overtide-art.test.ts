import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ShaderChunk} from 'three';
import {installOvertideShade, overtideAlbedoSteps} from '../src/overtideShade';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const ocean=readFileSync(join(root,'src/legacy/ocean.ts'),'utf8');
const fx=readFileSync(join(root,'src/survivalFx.ts'),'utf8');

test('posterize keeps rock warm, moss green, sand light, and blood red',()=>{
  const rock=overtideAlbedoSteps([0.32,0.22,0.13]);
  const pore=overtideAlbedoSteps([0.28,0.19,0.11]);
  const moss=overtideAlbedoSteps([0.08,0.25,0.05]);
  const sand=overtideAlbedoSteps([0.55,0.48,0.25]);
  const blood=overtideAlbedoSteps([0.45,0.02,0.015]);
  assert.deepEqual(rock, pore);
  assert.ok(rock[0]>=rock[1] && rock[1]>=rock[2], 'rock stays warm');
  assert.ok(rock[0]>0.4, 'rock is not crushed black');
  assert.ok(moss[1]>moss[0], 'moss stays greener than rock');
  assert.ok(sand[0]>=rock[0] && sand[1]>=rock[1], 'sand is a lighter band');
  assert.ok(blood[0]>blood[1] && blood[1]===blood[2], 'blood stays a red step');
});

test('every standard material gets flat color and a hard light edge',()=>{
  installOvertideShade();
  assert.match(ShaderChunk.color_fragment, /overtideAlbedo\(diffuseColor\.rgb\)/);
  assert.match(ShaderChunk.normal_fragment_maps, /normal=nonPerturbedNormal/);
  assert.match(ShaderChunk.lights_physical_pars_fragment, /overtideBand\(dotNL\) \* directLight\.color/);
  assert.match(ShaderChunk.lights_pars_begin, /hemiDiffuseWeight = overtideBand\(dotNL\)/);
  assert.match(ShaderChunk.lights_physical_fragment, /specularColor=vec3\(0\.0\)/);
  assert.match(ocean, /installOvertideShade\(\)/);
  assert.match(ocean, /diffuseColor\.rgb=overtideAlbedo\(diffuseColor\.rgb\)/);
  assert.match(ocean, /normal=nonPerturbedNormal/);
  assert.match(ocean, /step\(0\.5,n\)/);
  assert.match(ocean, /vec3\(0\.02,0\.42,0\.48\)/);
  assert.match(ocean, /vec3\(0\.15,0\.82,0\.86\)/);
  assert.match(ocean, /gBlood/);
});

test('enemy hit flash is still the red emissive lerp',()=>{
  assert.match(fx, /0xff2a1a/);
});
