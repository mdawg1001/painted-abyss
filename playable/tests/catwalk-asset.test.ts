import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 CATWALK_DECK_Y,CATWALK_DECK_RISE,CATWALK_LADDERS,CATWALK_SPANS,CATWALK_PAD,
 catwalkMounts,catwalkSupportY,onCatwalkSpan,inCatwalkLadder,catwalkKeepouts,
 catwalkCoverageStats,cellHasCatwalk,nearestCatwalkLadder,
} from '../src/catwalkLayout';
import {
 CATWALK_URLS,createCatwalk,buildCatwalkStub,
} from '../src/catwalkAsset';
import {FLOOR_Y,supportHeight,supportAir} from '../src/simulation';
import {bunkerKeepouts} from '../src/bunkerKeepouts';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dir=path.join(root,'public/assets/industrial-catwalk');

test('industrial-catwalk GLBs ship (pad/straight/cross/T/ladder/rail)',()=>{
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

test('map-scale mezzanine: wide pads, multi-ladder, gaps, below pipe tray',()=>{
 assert.equal(CATWALK_DECK_RISE,3.2);
 assert.equal(CATWALK_DECK_Y,FLOOR_Y+3.2);
 assert.ok(CATWALK_DECK_Y<FLOOR_Y+5.3,'below service pipes');
 assert.ok(CATWALK_PAD>=2.4,'walkways ≥ ~2.4–3.8 m');
 const stats=catwalkCoverageStats();
 assert.ok(stats.coveredCells>=80,`expected large mezzanine, got ${stats.coveredCells} cells`);
 assert.ok(stats.coveragePct>=45,`expected ≥45% combat-floor coverage, got ${stats.coveragePct.toFixed(1)}%`);
 assert.ok(stats.climbPoints>=5,`expected multiple climb points, got ${stats.climbPoints}`);
 assert.equal(CATWALK_LADDERS.length,stats.climbPoints);
 assert.ok(CATWALK_SPANS.length===stats.coveredCells);
 // Intentional gap (west alley cell 7,16) has no support
 assert.ok(!cellHasCatwalk(7,16));
 assert.equal(catwalkSupportY(-16,-64),null);
 assert.ok(!onCatwalkSpan(-16,-64));
 // Covered hall pad supports
 assert.ok(cellHasCatwalk(4,12));
 assert.equal(catwalkSupportY(-28,-48),CATWALK_DECK_Y);
 // Neck bridge
 assert.ok(cellHasCatwalk(11,8));
 assert.equal(catwalkSupportY(0,-32),CATWALK_DECK_Y);
 // Entrance centre lane stays ground-only
 assert.ok(!cellHasCatwalk(11,3));
 assert.equal(catwalkSupportY(0,-12),null);
 // Ladder volumes
 for(const L of CATWALK_LADDERS){
  assert.ok(inCatwalkLadder(L.x,L.z,FLOOR_Y),L.label);
  assert.ok(inCatwalkLadder(L.x,L.z,CATWALK_DECK_Y),L.label);
  assert.equal(catwalkSupportY(L.landX,L.landZ),CATWALK_DECK_Y,`landing ${L.label}`);
 }
 assert.equal(nearestCatwalkLadder(CATWALK_LADDERS[0]!.x,CATWALK_LADDERS[0]!.z)?.label,CATWALK_LADDERS[0]!.label);
 const mounts=catwalkMounts();
 assert.ok(mounts.filter(m=>m.kind==='pad').length===stats.coveredCells);
 assert.ok(mounts.filter(m=>m.kind==='ladder').length===stats.climbPoints);
 assert.ok(mounts.some(m=>m.kind==='rail_broken'));
 // Toy west-hall L-shelf is gone — network spans far beyond one wall
 assert.ok(mounts.some(m=>m.x>20),'east hall coverage');
 assert.ok(mounts.some(m=>m.z>-30),'neck/entrance reach');
});

test('supportHeight uses catwalk AABBs; gaps fall through to floor',()=>{
 assert.equal(supportHeight(-28,-48),CATWALK_DECK_Y);
 assert.equal(supportAir(-28,-48),CATWALK_DECK_RISE);
 assert.equal(supportHeight(-16,-64),FLOOR_Y); // gap alley
 assert.equal(supportAir(-16,-64),0);
 assert.equal(supportHeight(0,-12),FLOOR_Y); // entrance centre
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
