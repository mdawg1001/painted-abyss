import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 CATWALK_DECK_Y,CATWALK_DECK_RISE,CATWALK_LADDERS,CATWALK_SPANS,CATWALK_MODULE_W,
 catwalkMounts,catwalkSupportY,onCatwalkSpan,inCatwalkLadder,catwalkKeepouts,
 catwalkCoverageStats,nearestCatwalkLadder,
} from '../src/catwalkLayout';
import {
 CATWALK_URLS,createCatwalk,buildCatwalkStub,
} from '../src/catwalkAsset';
import {FLOOR_Y,supportHeight,supportAir} from '../src/simulation';
import {bunkerKeepouts} from '../src/bunkerKeepouts';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=path.join(root,'public/assets/industrial-catwalk');

test('industrial-catwalk GLBs ship (straight/cross/T/ladder/rail/bracket)',()=>{
 for(const kind of Object.keys(CATWALK_URLS) as (keyof typeof CATWALK_URLS)[]){
  const rel=CATWALK_URLS[kind].replace(/^\//,'');
  const file=path.join(root,'public',rel);
  assert.ok(fs.existsSync(file),file);
  const buf=fs.readFileSync(file);
  assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
  assert.ok(buf.length>1000,`${kind} too small`);
 }
 assert.ok(!fs.existsSync(path.join(dir,'catwalk_pad.glb')),'map-scale pad tile removed');
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/industrial-catwalk/i);
});

test('sparse fitting galleries: 3 short runs, few ladders, no map-scale pads',()=>{
 assert.equal(CATWALK_DECK_RISE,3.2);
 assert.equal(CATWALK_DECK_Y,FLOOR_Y+3.2);
 assert.ok(CATWALK_DECK_Y<FLOOR_Y+5.3,'below service pipes');
 assert.ok(CATWALK_MODULE_W>=1.2&&CATWALK_MODULE_W<=1.6,'narrow service walk width');
 const stats=catwalkCoverageStats();
 assert.equal(stats.galleries,3);
 assert.ok(stats.spans>=8&&stats.spans<=16,`expected a few spans, got ${stats.spans}`);
 assert.ok(stats.climbPoints>=2&&stats.climbPoints<=3,`couple of ladders, got ${stats.climbPoints}`);
 assert.equal(CATWALK_LADDERS.length,stats.climbPoints);
 assert.ok(stats.deckModules<=14,`sparse deck modules, got ${stats.deckModules}`);
 assert.ok(stats.brackets>=6,'wall brackets for bunker fit');

 // West-hall wall L supports
 assert.equal(catwalkSupportY(-27.2,-48),CATWALK_DECK_Y);
 assert.equal(catwalkSupportY(-25.0,-56),CATWALK_DECK_Y);
 // Intentional collapsed bay drops through
 assert.equal(catwalkSupportY(-27.2,-52),null);
 assert.ok(!onCatwalkSpan(-27.2,-52));
 // Neck west shelf
 assert.equal(catwalkSupportY(-5.35,-35),CATWALK_DECK_Y);
 // Pit north-lip overlook
 assert.equal(catwalkSupportY(-11,-58),CATWALK_DECK_Y);
 // No map-scale coverage: entrance centre / far hall corners stay floor
 assert.equal(catwalkSupportY(0,-12),null);
 assert.equal(catwalkSupportY(28,-48),null);
 assert.equal(catwalkSupportY(0,-32),null);

 for(const L of CATWALK_LADDERS){
  assert.ok(inCatwalkLadder(L.x,L.z,FLOOR_Y),L.label);
  assert.ok(inCatwalkLadder(L.x,L.z,CATWALK_DECK_Y),L.label);
  assert.equal(catwalkSupportY(L.landX,L.landZ),CATWALK_DECK_Y,`landing ${L.label}`);
 }
 assert.equal(nearestCatwalkLadder(CATWALK_LADDERS[0]!.x,CATWALK_LADDERS[0]!.z)?.label,CATWALK_LADDERS[0]!.label);

 const mounts=catwalkMounts();
 assert.ok(!mounts.some(m=>(m as {kind:string}).kind==='pad'));
 assert.ok(mounts.filter(m=>m.kind==='ladder').length===stats.climbPoints);
 assert.ok(mounts.some(m=>m.kind==='bracket'));
 assert.ok(mounts.some(m=>m.kind==='rail_broken'));
 // Sparse: no east-hall floating pads
 assert.ok(!mounts.some(m=>m.kind!=='bracket'&&m.x>5));
});

test('supportHeight uses catwalk AABBs; gaps fall through to floor',()=>{
 assert.equal(supportHeight(-27.2,-48),CATWALK_DECK_Y);
 assert.equal(supportAir(-27.2,-48),CATWALK_DECK_RISE);
 assert.equal(supportHeight(-27.2,-52),FLOOR_Y); // collapsed bay
 assert.equal(supportAir(-27.2,-52),0);
 assert.equal(supportHeight(0,-12),FLOOR_Y); // entrance centre
 assert.equal(supportHeight(-11,-58),CATWALK_DECK_Y); // pit lip
});

test('stubs mount until upgrade; keepouts preserve bake signature discs',()=>{
 const visual=createCatwalk();
 assert.equal(visual.ready,false);
 assert.equal(visual.group.children.length,visual.mounts.length);
 assert.equal(buildCatwalkStub(visual.mounts[0]).name,'catwalkStub');
 const keeps=catwalkKeepouts();
 assert.ok(keeps.length>=7);
 assert.ok(keeps.every(k=>k.r<=1.0),'keepouts ≤1.0 to preserve bake signature');
 const k=bunkerKeepouts();
 for(const c of keeps){
  assert.ok(k.some(x=>Math.hypot(x.x-c.x,x.z-c.z)<.01&&Math.abs(x.r-c.r)<.01),
   `missing keepout at ${c.x},${c.z}`);
 }
});
