import {test} from 'node:test';
import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildScrollMesh,SCROLL_AUTHOR,SCROLL_LICENSE,SCROLL_SOURCE,createScrollVisual,syncScrollPresent} from '../src/scrollAsset';
import * as THREE from 'three';

const root=join(dirname(fileURLToPath(import.meta.url)),'..','public','assets','scroll');

test('scroll textures from Sketchfab CC-BY asset exist under public/assets/scroll',async()=>{
 for(const name of['albedo.jpg','roughness.jpg','normal.jpg','metallic.png','AO.jpg','emissive.jpg']){
  await access(join(root,'textures',name));
 }
 const readme=await readFile(join(root,'README.md'),'utf8');
 assert.match(readme,/Aparicio Silva/i);
 assert.match(readme,/CC BY/i);
 assert.match(readme,/c1503d2292c74faebf83a5937646c1c7/);
 assert.equal(SCROLL_AUTHOR,'Aparicio Silva 3D');
 assert.match(SCROLL_LICENSE,/CC BY/);
 assert.match(SCROLL_SOURCE,/sketchfab\.com/);
});

test('scroll mesh builds and presents inside an open crate',()=>{
 const mats=[
  new THREE.MeshStandardMaterial({color:0xc4a574}),
  new THREE.MeshStandardMaterial({color:0x4a3020}),
  new THREE.MeshStandardMaterial({color:0x8a2030}),
 ];
 const mesh=buildScrollMesh(mats);
 assert.ok(mesh.children.length>=4);
 const visual=createScrollVisual();
 assert.equal(visual.root.visible,false);
 syncScrollPresent(visual,true,1,'military',{x:0,y:.65,z:0},0);
 assert.ok(visual.present>.5);
 assert.equal(visual.root.visible,true);
 assert.ok(visual.root.position.y>.9);
 syncScrollPresent(visual,false,1,'military',{x:0,y:.65,z:0},0);
 assert.ok(visual.present<.2);
});
