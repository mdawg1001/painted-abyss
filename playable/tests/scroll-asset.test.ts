import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {SCROLL_AUTHOR,SCROLL_LICENSE,SCROLL_SOURCE,createScrollVisual,syncScrollPresent} from '../src/scrollAsset';

const root=join(dirname(fileURLToPath(import.meta.url)),'..','public','assets','scroll');

test('scroll textures and authored Sketchfab mesh exist under public/assets/scroll',async()=>{
 for(const name of['albedo.jpg','roughness.jpg','normal.jpg','metallic.png','AO.jpg','emissive.jpg']){
  await access(join(root,'textures',name));
 }
 await access(join(root,'scroll.bin'));
 const gltf=JSON.parse(await readFile(join(root,'scroll.gltf'),'utf8'));
 const prim=gltf.meshes[0].primitives[0];
 const indices=gltf.accessors[prim.indices];
 assert.equal(indices.count,7444*3);
 assert.equal(gltf.asset.version,'2.0');
 const readme=await readFile(join(root,'README.md'),'utf8');
 assert.match(readme,/Aparicio Silva/i);
 assert.match(readme,/CC BY/i);
 assert.match(readme,/c1503d2292c74faebf83a5937646c1c7/);
 assert.match(readme,/scroll\.gltf/);
 assert.equal(SCROLL_AUTHOR,'Aparicio Silva 3D');
 assert.match(SCROLL_LICENSE,/CC BY/);
 assert.match(SCROLL_SOURCE,/sketchfab\.com/);
});

test('scroll presents inside an open crate',()=>{
 const visual=createScrollVisual();
 assert.equal(visual.root.visible,false);
 syncScrollPresent(visual,true,1,'military',{x:0,y:.65,z:0},0);
 assert.ok(visual.present>.5);
 assert.equal(visual.root.visible,true);
 assert.ok(visual.root.position.y>.9);
 syncScrollPresent(visual,false,1,'military',{x:0,y:.65,z:0},0);
 assert.ok(visual.present<.2);
});
