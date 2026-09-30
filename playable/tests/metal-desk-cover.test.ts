import {test} from 'node:test';
import assert from 'node:assert/strict';
import {accessSync, readFileSync, constants} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {SURVIVAL_COVER} from '../src/survivalConfig';
import {METAL_DESK_URL,METAL_DESK_SOURCE,METAL_DESK_AUTHOR,createDeskCoverVisual} from '../src/metalDeskAsset';
import {inCover,isOpen,cellOpen,tile} from '../src/simulation';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const pub=join(root,'public','assets','metal_office_desk');

test('metal_office_desk 1k glTF and textures are shipped',()=>{
 for(const f of [
  'metal_office_desk_1k.gltf','metal_office_desk.bin',
  'textures/metal_office_desk_diff_1k.jpg',
  'textures/metal_office_desk_arm_1k.jpg',
  'textures/metal_office_desk_nor_gl_1k.jpg',
 ])accessSync(join(pub,f),constants.R_OK);
 assert.equal(METAL_DESK_URL,'/assets/metal_office_desk/metal_office_desk_1k.gltf');
 assert.equal(METAL_DESK_SOURCE,'https://polyhaven.com/a/metal_office_desk');
 assert.equal(METAL_DESK_AUTHOR,'Ulan Cabanilla');
});

test('NOTICE credits Poly Haven metal_office_desk',()=>{
 const notice=readFileSync(join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/metal_office_desk/);
 assert.match(notice,/Ulan Cabanilla/);
 assert.match(notice,/CC0/);
});

test('metal desk cover sits on open floor and leaves a way round',()=>{
 const desks=SURVIVAL_COVER.filter(c=>c.kind==='desk');
 assert.ok(desks.length>=1,`${desks.length} desk cover`);
 for(const c of desks){
  const t=tile({x:c.x,y:0,z:c.z});
  assert.ok(cellOpen(t.col,t.row),`desk at ${c.x},${c.z} is on an open cell`);
  assert.ok(inCover(c.x,c.z),'desk itself is cover');
  assert.ok(isOpen(c.x+c.hx+.6,c.z)||isOpen(c.x-c.hx-.6,c.z),'cover leaves a way round');
 }
});

test('desk cover stub is a solid stand-in',()=>{
 const g=createDeskCoverVisual(0);
 const stub=g.getObjectByName('deskStub');
 assert.ok(stub);
 assert.ok(stub!.children.length>=4,'stub has top/apron/legs');
});
