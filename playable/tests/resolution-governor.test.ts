import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ResolutionGovernor,RESOLUTION,resolutionLadder} from '../src/resolutionGovernor';
import {PERF} from '../src/perf';

const R=RESOLUTION;
const smooth=1000/60,slow=26;
const run=(g:ResolutionGovernor,ms:number,n:number,active=true)=>{const ev=[];for(let i=0;i<n;i++){const e=g.frame(ms,active);if(e)ev.push(e);}return ev;};
/** Build a multi-rung ladder like the pre-0.22.37 Retina profile (for drop/probe tests). */
const fatCfg={...R,maxPixelRatio:2,msaa:4};

test('ladder: top follows PERF cap; floor stays 1× / no MSAA',()=>{
 const l=resolutionLadder(2);
 assert.deepEqual(l[0],{pixelRatio:PERF.dprCap,msaa:PERF.msaa});
 assert.deepEqual(l[l.length-1],{pixelRatio:1,msaa:0});
 assert.ok(l.length>=3,'mild cap exposes intermediate rungs the governor can step');
 assert.ok(l.every(r=>r.pixelRatio<=PERF.dprCap),'never above the playability density cap');
 assert.ok(l.every(r=>r.pixelRatio>=1),'never below one pixel per CSS pixel');
 assert.equal(resolutionLadder(3)[0].pixelRatio,PERF.dprCap,'device density cannot exceed PERF.dprCap');
});

test('fat ladder (legacy Retina+MSAA): top is 2×/4×, floor is 1×/0',()=>{
 const l=resolutionLadder(2,fatCfg);
 assert.deepEqual(l[0],{pixelRatio:2,msaa:4});
 assert.deepEqual(l[l.length-1],{pixelRatio:1,msaa:0});
 for(let i=1;i<l.length;i++)assert.ok(l[i].pixelRatio<l[i-1].pixelRatio||l[i].msaa<l[i-1].msaa,'every rung is cheaper');
 assert.deepEqual(resolutionLadder(1,fatCfg),[{pixelRatio:1,msaa:4},{pixelRatio:1,msaa:0}],'plain displays only trade MSAA');
});

test('governor defaults to the cheapest rung (never boots into Retina+MSAA)',()=>{
 const g=new ResolutionGovernor(2,fatCfg);
 assert.equal(g.level,g.ladder.length-1);
 assert.deepEqual(g.rung,{pixelRatio:1,msaa:0});
});

test('steady on-budget frames at the floor stay put (no forced climb without headroom wait)',()=>{
 for(const ms of [smooth,1000/120]){
  const g=new ResolutionGovernor(2,fatCfg);
  assert.equal(run(g,ms,10).length,0);
  assert.equal(g.level,g.ladder.length-1);
 }
});

test('sustained slow frames from the top step down to the floor',()=>{
 const g=new ResolutionGovernor(2,fatCfg,0);
 const ev=run(g,slow,2000);
 assert.ok(ev.length>=1&&ev.every(e=>e.reason==='drop'));
 assert.equal(g.level,g.ladder.length-1,'reaches the playability floor');
 assert.deepEqual(g.rung,{pixelRatio:1,msaa:0});
 assert.ok(ev.length<=g.ladder.length-1);
});

test('hitches (GC, uploads, tab switches) never cost resolution',()=>{
 const g=new ResolutionGovernor(2,fatCfg,0);
 for(let i=0;i<400;i++){g.frame(smooth);if(i%10===0)assert.equal(g.frame(400),null);}
 assert.equal(g.level,0);
});

test('nothing is judged in menus, paused or hidden',()=>{
 const g=new ResolutionGovernor(2,fatCfg,0);
 assert.equal(run(g,slow,1000,false).length,0);
 assert.equal(g.level,0);
});

test('with headroom it probes back up; a failed probe reverts and waits twice as long',()=>{
 const g=new ResolutionGovernor(2,fatCfg,3);
 const up=run(g,smooth,Math.ceil(R.probeAfter*60)+80);
 assert.equal(up[0]?.reason,'probe');
 assert.equal(g.level,2);
 let back=null;for(let i=0;i<60&&!back;i++)back=g.frame(slow);
 assert.equal(back?.reason,'revert');
 assert.equal(g.level,3);
 const t0=run(g,smooth,Math.ceil(R.probeAfter*60)+10);
 assert.equal(t0.length,0,'no retry at the old interval');
 const t1=run(g,smooth,Math.ceil(R.probeAfter*60)+80);
 assert.equal(t1[0]?.reason,'probe');
});

test('a probe that holds climbs toward the top of a fat ladder',()=>{
 const g=new ResolutionGovernor(2,fatCfg);
 run(g,smooth,60*60);
 assert.equal(g.level,0,'climbs to Retina + MSAA only when frames stay on budget');
});
