import {test} from 'node:test';
import assert from 'node:assert/strict';
import {accessSync, readFileSync, constants} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {SURVIVAL_COVER} from '../src/survivalConfig';
import {CARDBOARD_BOX_URL,CARDBOARD_BOX_SOURCE,CARDBOARD_STACK,createCardboardCoverVisual} from '../src/cardboardBoxAsset';
import {inCover,isOpen,cellOpen,tile} from '../src/simulation';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const pub=join(root,'public','assets','cardboard_box_01');

test('cardboard_box_01 1k glTF and textures are shipped',()=>{
 for(const f of [
  'cardboard_box_01_1k.gltf','cardboard_box_01.bin',
  'textures/cardboard_box_01_diff_1k.jpg',
  'textures/cardboard_box_01_arm_1k.jpg',
  'textures/cardboard_box_01_nor_gl_1k.jpg',
 ])accessSync(join(pub,f),constants.R_OK);
 assert.equal(CARDBOARD_BOX_URL,'/assets/cardboard_box_01/cardboard_box_01_1k.gltf');
 assert.equal(CARDBOARD_BOX_SOURCE,'https://polyhaven.com/a/cardboard_box_01');
 assert.equal(CARDBOARD_STACK,3);
});

test('NOTICE credits Poly Haven cardboard_box_01',()=>{
 const notice=readFileSync(join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/cardboard_box_01/);
 assert.match(notice,/Rahul Chaudhary/);
 assert.match(notice,/CC0/);
});

test('cardboard cover piles sit on open floor and leave a way round',()=>{
 const boxes=SURVIVAL_COVER.filter(c=>c.kind==='cardboard');
 assert.ok(boxes.length>=6,`${boxes.length} cardboard piles`);
 for(const c of boxes){
  const t=tile({x:c.x,y:0,z:c.z});
  assert.ok(cellOpen(t.col,t.row),`pile at ${c.x},${c.z} is on an open cell`);
  assert.ok(inCover(c.x,c.z),'pile itself is cover');
  assert.ok(isOpen(c.x+c.hx+.6,c.z)||isOpen(c.x-c.hx-.6,c.z),'cover leaves a way round');
 }
});

test('cardboard cover stub stacks three cartons',()=>{
 const g=createCardboardCoverVisual(0);
 const stub=g.getObjectByName('cardboardStub');
 assert.ok(stub);
 assert.equal(stub!.children.length,CARDBOARD_STACK);
});
