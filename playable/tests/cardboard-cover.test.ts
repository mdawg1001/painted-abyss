import {test} from 'node:test';
import assert from 'node:assert/strict';
import {accessSync, readFileSync, constants} from 'node:fs';
import {dirname,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {SURVIVAL_COVER} from '../src/survivalConfig';
import {
 CARDBOARD_BOX_URL,CARDBOARD_BOX_SOURCE,CARDBOARD_STACK,
 CARDBOARD_CLUSTER_MIN,CARDBOARD_CLUSTER_MAX,CARDBOARD_STACK_SPACING,
 cardboardClusterCount,cardboardStackOffsets,createCardboardCoverVisual,
} from '../src/cardboardBoxAsset';
import {inCover,isOpen,cellOpen,tile,guardPerimeterRoute,guardClearLine,GUARD_BODY_RADIUS} from '../src/simulation';

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
 assert.equal(CARDBOARD_CLUSTER_MIN,3);
 assert.equal(CARDBOARD_CLUSTER_MAX,4);
 assert.ok(CARDBOARD_STACK_SPACING>.3);
});

test('NOTICE credits Poly Haven cardboard_box_01',()=>{
 const notice=readFileSync(join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/cardboard_box_01/);
 assert.match(notice,/Rahul Chaudhary/);
 assert.match(notice,/CC0/);
});

test('cardboard barricades sit on open floor and leave a way round',()=>{
 const boxes=SURVIVAL_COVER.filter(c=>c.kind==='cardboard');
 assert.ok(boxes.length>=8,`${boxes.length} cardboard barricades`);
 for(const c of boxes){
  assert.ok(c.hx>=.5&&c.hz>=.5,`barricade at ${c.x},${c.z} is wide enough (${c.hx}×${c.hz})`);
  const t=tile({x:c.x,y:0,z:c.z});
  assert.ok(cellOpen(t.col,t.row),`barricade at ${c.x},${c.z} is on an open cell`);
  assert.ok(inCover(c.x,c.z),'barricade itself is cover');
  assert.ok(
   isOpen(c.x+c.hx+.6,c.z)||isOpen(c.x-c.hx-.6,c.z)||isOpen(c.x,c.z+c.hz+.6)||isOpen(c.x,c.z-c.hz-.6),
   'cover leaves a way round',
  );
 }
});

test('shootout cover has no procedural crate or blast-wall boxes',()=>{
 for(const c of SURVIVAL_COVER){
  assert.ok(c.kind==='cardboard'||c.kind==='desk',`unexpected cover kind ${c.kind}`);
 }
});

test('cardboard cover does not block the guard perimeter route',()=>{
 const r=guardPerimeterRoute();
 for(let i=0;i<r.length;i++){
  const a=r[i],b=r[(i+1)%r.length];
  assert.ok(guardClearLine(a,b,GUARD_BODY_RADIUS),`segment ${i} is walkable`);
 }
});

test('cardboard cover stub clusters 3–4 stacks of three cartons',()=>{
 const four=createCardboardCoverVisual(0,4);
 const stub4=four.getObjectByName('cardboardStub');
 assert.ok(stub4);
 assert.equal(stub4!.children.length,4,'four stacks in a barricade');
 for(const stack of stub4!.children)assert.equal(stack.children.length,CARDBOARD_STACK);

 const three=createCardboardCoverVisual(0,3);
 const stub3=three.getObjectByName('cardboardStub');
 assert.ok(stub3);
 assert.equal(stub3!.children.length,3);

 assert.equal(cardboardClusterCount(2),3);
 assert.equal(cardboardClusterCount(9),4);
 assert.equal(cardboardStackOffsets(4).length,4);
 assert.ok(Math.abs(cardboardStackOffsets(4)[0]+cardboardStackOffsets(4)[3])<1e-9,'centred');
});
