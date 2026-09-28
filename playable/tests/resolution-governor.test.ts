import {test} from 'node:test';
import assert from 'node:assert/strict';
import {ResolutionGovernor,RESOLUTION,resolutionLadder} from '../src/resolutionGovernor';

const R=RESOLUTION;
const smooth=1000/60,slow=26;
const run=(g:ResolutionGovernor,ms:number,n:number,active=true)=>{const ev=[];for(let i=0;i<n;i++){const e=g.frame(ms,active);if(e)ev.push(e);}return ev;};

test('ladder: Retina 2× with MSAA at the top, the old 1× no-MSAA profile at the bottom',()=>{
 const l=resolutionLadder(2);
 assert.deepEqual(l[0],{pixelRatio:2,msaa:4});
 assert.deepEqual(l[l.length-1],{pixelRatio:1,msaa:0});
 for(let i=1;i<l.length;i++)assert.ok(l[i].pixelRatio<l[i-1].pixelRatio||l[i].msaa<l[i-1].msaa,'every rung is cheaper');
 assert.ok(l.every(r=>r.pixelRatio>=1),'never below one pixel per CSS pixel');
 assert.deepEqual(resolutionLadder(1),[{pixelRatio:1,msaa:4},{pixelRatio:1,msaa:0}],'plain displays only trade MSAA');
 assert.equal(resolutionLadder(3)[0].pixelRatio,2,'density capped at 2×');
});

test('steady on-budget frames never lower quality (60 Hz and 120 Hz)',()=>{
 for(const ms of [smooth,1000/120]){
  const g=new ResolutionGovernor(2);
  assert.equal(run(g,ms,3000).length,0);
  assert.equal(g.level,0);
 }
});

test('sustained slow frames step down, one rung per cooldown, to the floor and no further',()=>{
 const g=new ResolutionGovernor(2);
 const ev=run(g,slow,2000);
 assert.ok(ev.length>=1&&ev.every(e=>e.reason==='drop'));
 assert.equal(g.level,g.ladder.length-1,'reaches the old profile');
 assert.deepEqual(g.rung,{pixelRatio:1,msaa:0});
 // Changes are spaced by the cooldown.
 assert.ok(ev.length<=g.ladder.length-1);
});

test('hitches (GC, uploads, tab switches) never cost resolution',()=>{
 const g=new ResolutionGovernor(2);
 for(let i=0;i<400;i++){g.frame(smooth);if(i%10===0)assert.equal(g.frame(400),null);}
 assert.equal(g.level,0);
});

test('nothing is judged in menus, paused or hidden',()=>{
 const g=new ResolutionGovernor(2);
 assert.equal(run(g,slow,1000,false).length,0);
 assert.equal(g.level,0);
});

test('with headroom it probes back up; a failed probe reverts and waits twice as long',()=>{
 const g=new ResolutionGovernor(2,R,3);
 // Clean frames: after probeAfter seconds it tries the rung above.
 const up=run(g,smooth,Math.ceil(R.probeAfter*60)+80);
 assert.equal(up[0]?.reason,'probe');
 assert.equal(g.level,2);
 // That rung is too heavy: the probe fails and goes back.
 let back=null;for(let i=0;i<60&&!back;i++)back=g.frame(slow);
 assert.equal(back?.reason,'revert');
 assert.equal(g.level,3);
 // Next probe needs twice the clean time.
 const t0=run(g,smooth,Math.ceil(R.probeAfter*60)+10);
 assert.equal(t0.length,0,'no retry at the old interval');
 const t1=run(g,smooth,Math.ceil(R.probeAfter*60)+80);
 assert.equal(t1[0]?.reason,'probe');
});

test('a probe that holds is kept and the climb continues to the top',()=>{
 const g=new ResolutionGovernor(2,R,g0());
 function g0(){return resolutionLadder(2).length-1;}
 run(g,smooth,60*60);
 assert.equal(g.level,0,'climbs back to Retina + MSAA on a fast machine');
});
