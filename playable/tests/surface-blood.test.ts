import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const ocean=readFileSync(join(root,'src/legacy/ocean.ts'),'utf8');
const maps=readFileSync(join(root,'src/rockMaps.ts'),'utf8');
const fx=readFileSync(join(root,'src/survivalFx.ts'),'utf8');

test('cave surfaces are photographic again, with blood splatters kept',()=>{
  assert.match(ocean,/diffuseColor\.rgb=mix\(diffuseColor\.rgb,vec3\(0\.45,0\.02,0\.015\),gBlood\)/);
  assert.match(ocean,/gBlood=clamp\(\(max\(blob\*0\.95,speck\*0\.8\)\+crack\*gate\*0\.85\)\*0\.40,0\.0,0\.352\)/);
  assert.match(ocean,/triNormalView/);
  assert.match(ocean,/roughnessFactor=mix\(roughnessFactor,min\(roughnessFactor,0\.35\),gBlood\)/);
  assert.doesNotMatch(ocean,/overtideAlbedo|overtideBand|nonPerturbedNormal|patchOvertideLighting/);
  assert.doesNotMatch(maps,/overtideSurface/);
  assert.match(ocean,/:blood/);
});

test('enemy hit flash is still the red emissive lerp',()=>{
  assert.match(fx,/0xff2a1a/);
});
