import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {SCROLL_AUTHOR,SCROLL_CAVITY,SCROLL_LICENSE,SCROLL_SOURCE,createScrollVisual,scrollFit,scrollShouldShow,syncScrollPresent} from '../src/scrollAsset';

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

test('scroll rests inside each crate and stays within the cavity',()=>{
 const meshRad=.046;
 const meshHalf=.20;
 for(const kind of['military','plastic','suitcase'] as const){
  const visual=createScrollVisual();
  assert.equal(visual.root.visible,false);
  syncScrollPresent(visual,true,1,kind);
  const c=SCROLL_CAVITY[kind];
  const fit=scrollFit(kind);
  assert.ok(visual.present>.5,kind);
  assert.equal(visual.root.visible,true);
  const scale=visual.root.scale.x;
  const rad=meshRad*scale;
  const half=meshHalf*scale;
  assert.ok(Math.abs(scale-fit.scale)<.02,kind+' scale');
  assert.ok(visual.root.position.y-rad>=c.floor-.001,kind+' above floor');
  assert.ok(visual.root.position.y+rad<=c.rim+.001,kind+' below rim');
  assert.ok(half*2<=c.span+.001,kind+' length');
  assert.ok(rad*2<=c.across+.001,kind+' width');
  assert.ok(Math.abs(visual.root.position.x-fit.x)<.001,kind+' x');
  assert.ok(Math.abs(visual.root.position.z-fit.z)<.001,kind+' z');
 }
 const visual=createScrollVisual();
 syncScrollPresent(visual,false,1,'military');
 assert.ok(visual.present<.2);
});

test('plastic scrap is visible while the crate is closed; lidded scraps wait for open',()=>{
 assert.equal(scrollShouldShow('plastic',false,false),true);
 assert.equal(scrollShouldShow('plastic',false,true),false);
 assert.equal(scrollShouldShow('military',false,false),false);
 assert.equal(scrollShouldShow('military',true,false),true);
 assert.equal(scrollShouldShow('suitcase',false,false),false);
 assert.equal(scrollShouldShow('suitcase',true,false),true);
 assert.equal(scrollShouldShow('suitcase',true,true),false);
});
