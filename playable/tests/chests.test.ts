import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {CHEST_META} from '../src/chestAsset';

const root=join(dirname(fileURLToPath(import.meta.url)),'..','public','assets','chests');

test('Poly Haven chest glTF packs exist under public/assets/chests',async()=>{
 for(const kind of Object.keys(CHEST_META) as (keyof typeof CHEST_META)[]){
  const meta=CHEST_META[kind];
  const folder=join(root,meta.folder);
  const gltfPath=join(folder,meta.gltf);
  await access(gltfPath);
  const gltf=JSON.parse(await readFile(gltfPath,'utf8'));
  assert.ok(Array.isArray(gltf.buffers)&&gltf.buffers[0]?.uri,`${kind} has buffer uri`);
  const bin=join(folder,gltf.buffers[0].uri);
  await access(bin);
  assert.ok(Array.isArray(gltf.images)&&gltf.images.length>=1,`${kind} has textures`);
  for(const img of gltf.images){
   assert.ok(img.uri,`${kind} image uri`);
   await access(join(folder,img.uri));
  }
 }
});

test('NOTICE documents the three chest attributions',async()=>{
 const notice=await readFile(join(dirname(fileURLToPath(import.meta.url)),'..','NOTICE.md'),'utf8');
 assert.match(notice,/wooden_military_crate/);
 assert.match(notice,/plastic_crate_02/);
 assert.match(notice,/vintage_suitcase/);
 assert.match(notice,/Prabhjinder Singh/);
 assert.match(notice,/Fabi_G/);
 assert.match(notice,/Maximilian Schuster/);
});
