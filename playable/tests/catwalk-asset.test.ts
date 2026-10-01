import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 CATWALK_DECK_Y,CATWALK_DECK_RISE,CATWALK_LADDER,CATWALK_SPANS,
 catwalkMounts,catwalkSupportY,onCatwalkSpan,inCatwalkLadder,catwalkKeepouts,
} from '../src/catwalkLayout';
import {
 CATWALK_URLS,createCatwalk,buildCatwalkStub,
} from '../src/catwalkAsset';
import {FLOOR_Y,supportHeight,supportAir} from '../src/simulation';
import {bunkerKeepouts} from '../src/bunkerKeepouts';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=path.join(root,'public/assets/industrial-catwalk');

test('industrial-catwalk GLBs ship (straight/cross/T/ladder/rail)',()=>{
 for(const kind of Object.keys(CATWALK_URLS) as (keyof typeof CATWALK_URLS)[]){
  const rel=CATWALK_URLS[kind].replace(/^\//,'');
  const file=path.join(root,'public',rel);
  assert.ok(fs.existsSync(file),file);
  const buf=fs.readFileSync(file);
  assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
  assert.ok(buf.length>1000,`${kind} too small`);
 }
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/industrial-catwalk/i);
});

test('west-hall layout: L-run + gap + ladder; deck below wall pipes',()=>{
 assert.equal(CATWALK_DECK_RISE,3.2);
 assert.equal(CATWALK_DECK_Y,FLOOR_Y+3.2);
 assert.ok(CATWALK_DECK_Y<FLOOR_Y+5.3,'below service pipes');
 assert.ok(CATWALK_SPANS.length>=5);
 // Gap at z≈-52 has no support
 assert.equal(catwalkSupportY(-27.2,-52),null);
 assert.ok(!onCatwalkSpan(-27.2,-52));
 // Solid spans support
 assert.equal(catwalkSupportY(-27.2,-48),CATWALK_DECK_Y);
 assert.equal(catwalkSupportY(-23.0,-56),CATWALK_DECK_Y);
 assert.ok(inCatwalkLadder(CATWALK_LADDER.x,CATWALK_LADDER.z,FLOOR_Y));
 assert.ok(inCatwalkLadder(CATWALK_LADDER.x,CATWALK_LADDER.z,CATWALK_DECK_Y));
 const mounts=catwalkMounts();
 assert.ok(mounts.some(m=>m.kind==='ladder'));
 assert.ok(mounts.some(m=>m.kind==='t'));
 assert.ok(mounts.some(m=>m.kind==='rail_broken'));
 assert.ok(mounts.every(m=>m.x>=-30&&m.x<=-20&&m.z>=-58&&m.z<=-46));
});

test('supportHeight uses catwalk AABBs; gap falls through to floor',()=>{
 assert.equal(supportHeight(-27.2,-48),CATWALK_DECK_Y);
 assert.equal(supportAir(-27.2,-48),CATWALK_DECK_RISE);
 assert.equal(supportHeight(-27.2,-52),FLOOR_Y);
 assert.equal(supportAir(-27.2,-52),0);
 // Far from gallery: unchanged floor / plinth behaviour untouched for hall
 assert.equal(supportHeight(0,-12),FLOOR_Y);
});

test('stubs mount until upgrade; keepouts cover the shelf',()=>{
 const visual=createCatwalk();
 assert.equal(visual.ready,false);
 assert.equal(visual.group.children.length,visual.mounts.length);
 assert.equal(buildCatwalkStub(visual.mounts[0]).name,'catwalkStub');
 const k=bunkerKeepouts();
 for(const c of catwalkKeepouts()){
  assert.ok(k.some(x=>Math.hypot(x.x-c.x,x.z-c.z)<.01&&Math.abs(x.r-c.r)<.01),
   `missing keepout at ${c.x},${c.z}`);
 }
});
