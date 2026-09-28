import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 CombatFeedbackManager,
 COMBAT_FEEDBACK,
 noiseOffset,
} from '../src/combatFeedback';

test('triggerScreenShake decays to zero over duration',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerScreenShake(.5,.2);
 const a=fx.tick(0,0);
 assert.ok(a.amplitude>0.4);
 assert.ok(Math.hypot(a.offset.x,a.offset.y,a.offset.z)>0);
 // Halfway through — still shaking but weaker
 const mid=fx.tick(.1,0.1);
 assert.ok(mid.amplitude<a.amplitude);
 assert.ok(mid.amplitude>0.05);
 // Past duration — quiet
 let last=mid;
 for(let i=0;i<20;i++)last=fx.tick(.05,0.1+i*.05);
 assert.equal(last.amplitude,0);
 assert.deepEqual(last.offset,{x:0,y:0,z:0});
});

test('stronger overlapping shake replaces a weaker envelope',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerScreenShake(.2,.5);
 fx.triggerScreenShake(.8,.15);
 const t=fx.tick(0,0);
 assert.ok(t.amplitude>=.79);
});

test('triggerHitstop freezes simDt until millis elapse',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerHitstop(50);
 const frozen=fx.tick(0.01,0);
 assert.equal(frozen.simDt,0);
 assert.equal(frozen.hitstopping,true);
 assert.equal(fx.isHitstopping,true);
 // 40 ms more wall time — still frozen
 const still=fx.tick(0.04,0.04);
 assert.equal(still.simDt,0);
 // Blow past remaining ~10 ms
 const done=fx.tick(0.02,0.06);
 assert.equal(done.hitstopping,false);
 assert.equal(done.simDt,0.02);
});

test('hitstop stacks by keeping the longer freeze',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerHitstop(30);
 fx.triggerHitstop(80);
 fx.tick(0.05,0); // 50 ms gone, 30 left from the 80
 assert.equal(fx.isHitstopping,true);
 fx.tick(0.04,0);
 assert.equal(fx.isHitstopping,false);
});

test('shake keeps moving during hitstop while simDt is zero',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerScreenShake(.6,.3);
 fx.triggerHitstop(40);
 const a=fx.tick(0.01,1);
 const b=fx.tick(0.01,1.02);
 assert.equal(a.simDt,0);
 assert.equal(b.simDt,0);
 assert.ok(a.amplitude>0&&b.amplitude>0);
 // Offsets differ as phase advances (punchy freeze, not a still frame)
 assert.notDeepEqual(a.offset,b.offset);
});

test('noiseOffset scales with amplitude and is deterministic',()=>{
 const a=noiseOffset(1.5,.4);
 const b=noiseOffset(1.5,.4);
 assert.deepEqual(a,b);
 const c=noiseOffset(1.5,.8);
 assert.ok(Math.abs(c.x)>Math.abs(a.x));
});

test('COMBAT_FEEDBACK presets are positive',()=>{
 assert.ok(COMBAT_FEEDBACK.gunFire.intensity>0);
 assert.ok(COMBAT_FEEDBACK.hitstopKill>=COMBAT_FEEDBACK.hitstopHead);
 assert.ok(COMBAT_FEEDBACK.meleeHit.intensity>COMBAT_FEEDBACK.gunFire.intensity);
});

test('presets stay readable; hitstop is a few frames, never a visible freeze',()=>{
 assert.ok(COMBAT_FEEDBACK.gunFire.intensity>=.5);
 assert.ok(COMBAT_FEEDBACK.gunFireHeavy.intensity>=.8);
 assert.ok(COMBAT_FEEDBACK.gunFireHeavy.intensity<1.2);
 assert.ok(COMBAT_FEEDBACK.hitstopHead>=30&&COMBAT_FEEDBACK.hitstopHead<=60);
 assert.ok(COMBAT_FEEDBACK.hitstopKill>=50&&COMBAT_FEEDBACK.hitstopKill<=90);
 // Peak offset at intensity 1 should clear ~5 cm — felt, not subtle
 const peak=noiseOffset(0.25,1);
 assert.ok(Math.hypot(peak.x,peak.y,peak.z)>0.05);
 assert.ok(Math.hypot(peak.x,peak.y,peak.z)<0.12);
});

test('reset clears shake and hitstop',()=>{
 const fx=new CombatFeedbackManager();
 fx.triggerScreenShake(1,1);
 fx.triggerHitstop(100);
 fx.reset();
 const t=fx.tick(0.016,0);
 assert.equal(t.amplitude,0);
 assert.equal(t.simDt,0.016);
 assert.equal(t.hitstopping,false);
});

test('no light is ever created, removed or hidden mid-dive (each one recompiles every lit shader)',async()=>{
 const fs=await import('node:fs');
 const src=fs.readFileSync(new URL('../src/CaveWorld.ts',import.meta.url),'utf8');
 // Pickups borrow pooled lights instead of bringing their own.
 const sync=src.slice(src.indexOf(' syncPickups(){'),src.indexOf(' assignPickupGlows(){'));
 assert.doesNotMatch(sync,/new THREE\.(Point|Spot)Light/);
 assert.doesNotMatch(src,/torchLight\.visible\s*=/);
 assert.doesNotMatch(src,/decoyMesh\.add\(new THREE\.PointLight/);
});
