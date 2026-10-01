/**
 * Critical suit self-regen: recover slowly after ≤enterHp while undamaged,
 * pause/reset on hurtPlayer, soft-cap below full HP.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Mission,isolateGuards,CRITICAL_SUIT_REGEN,EGO_SAVIOR,FLOOR_Y,WALK_EYE_Y,breathFootprint} from '../src/simulation';

const CX=breathFootprint().cx;
const FROM={x:CX,y:WALK_EYE_Y,z:20};

function mission(health:number){
 const m=new Mission(true);
 isolateGuards(m,-1);
 m.breathWaterY=FLOOR_Y-.1;
 m.director.enabled=false;
 m.health=health;
 m.position={x:CX,y:WALK_EYE_Y,z:24};
 m.elapsed=10;
 return m;
}

/** Advance sim time in ≤0.05 s steps (Mission.update clamps dt). */
function wait(m:Mission,seconds:number){
 for(let i=0;i<Math.round(seconds*60);i++)m.update(1/60,false);
}

test('CRITICAL_SUIT_REGEN tunables: enter ~5, soft cap 25–40, clutch rate, damage delay',()=>{
 assert.equal(CRITICAL_SUIT_REGEN.enterHp,5);
 assert.ok(CRITICAL_SUIT_REGEN.softCap>=25&&CRITICAL_SUIT_REGEN.softCap<=40);
 assert.ok(CRITICAL_SUIT_REGEN.ratePerSec>=4&&CRITICAL_SUIT_REGEN.ratePerSec<=6,'clutch regen should be readable');
 assert.ok(CRITICAL_SUIT_REGEN.damageDelay>0&&CRITICAL_SUIT_REGEN.damageDelay<=3);
 assert.ok(CRITICAL_SUIT_REGEN.softCap<100,'soft cap leaves room for medkits / leech');
 assert.ok(CRITICAL_SUIT_REGEN.enterHp>=EGO_SAVIOR.clampHpMax,'ego clamp always arms regen');
});

test('at ≤5 + no damage → health rises toward soft cap',()=>{
 const m=mission(CRITICAL_SUIT_REGEN.enterHp);
 const before=m.health;
 wait(m,2);
 assert.ok(m.health>before,`expected regen from ${before}, got ${m.health}`);
 assert.ok(m.suitRegenArmed||m.health>=CRITICAL_SUIT_REGEN.softCap);
 assert.ok(m.health<=CRITICAL_SUIT_REGEN.softCap);
});

test('take hit → regen pauses for damageDelay, then resumes',()=>{
 const m=mission(CRITICAL_SUIT_REGEN.enterHp);
 wait(m,CRITICAL_SUIT_REGEN.damageDelay+.5);
 assert.ok(m.health>CRITICAL_SUIT_REGEN.enterHp,'precondition: already regenerating');
 const hitFor=2;
 m.hurtPlayer(hitFor,FROM,'test',null);
 const afterHit=m.health;
 assert.equal(afterHit,Math.max(0,afterHit)); // sanity
 // During the damage delay, suit must not climb.
 wait(m,CRITICAL_SUIT_REGEN.damageDelay*.5);
 assert.equal(m.health,afterHit,'regen paused mid-delay');
 // After the full delay, it resumes (still armed from critical entry).
 wait(m,CRITICAL_SUIT_REGEN.damageDelay+.5);
 assert.ok(m.health>afterHit,`expected resume after delay, ${afterHit} → ${m.health}`);
});

test('regen never exceeds soft cap',()=>{
 const m=mission(1);
 // Long enough to overshoot if uncapped: (softCap-1)/rate + buffer.
 const need=(CRITICAL_SUIT_REGEN.softCap-1)/CRITICAL_SUIT_REGEN.ratePerSec+2;
 wait(m,need);
 assert.equal(m.health,CRITICAL_SUIT_REGEN.softCap);
 assert.equal(m.suitRegenArmed,false);
 wait(m,3);
 assert.equal(m.health,CRITICAL_SUIT_REGEN.softCap,'stays at soft cap without further heal sources');
});

test('at ≤5 + no damage → health rises fast enough to feel the clutch',()=>{
 const m=mission(CRITICAL_SUIT_REGEN.enterHp);
 wait(m,2);
 // ~ratePerSec*2 HP in two undamaged seconds — must be a readable bar climb.
 assert.ok(m.health>=CRITICAL_SUIT_REGEN.enterHp+CRITICAL_SUIT_REGEN.ratePerSec*1.5,
  `expected ~${CRITICAL_SUIT_REGEN.ratePerSec*2} HP in 2s, got ${m.health-CRITICAL_SUIT_REGEN.enterHp}`);
});

test('above enterHp without prior critical → no passive regen',()=>{
 const m=mission(20);
 wait(m,5);
 assert.equal(m.health,20);
 assert.equal(m.suitRegenArmed,false);
});

test('after Ego Savior clamp, regen starts past i-frames + damageDelay',()=>{
 const m=mission(2);
 m.rand=()=>0; // clampHpMin, iframeMin
 m.hurtPlayer(50,FROM,'lethal',null);
 assert.equal(m.egoSaviorUsed,true);
 assert.equal(m.health,EGO_SAVIOR.clampHpMin);
 assert.equal(m.suitRegenArmed,true);
 const clamped=m.health;
 // During i-frames: no regen.
 wait(m,EGO_SAVIOR.iframeMin*.5);
 assert.equal(m.health,clamped,'no regen during ego i-frames');
 // Past i-frames but still inside damageDelay from the save hit.
 const afterIframes=m.egoIframesUntil-m.elapsed;
 if(afterIframes>0)wait(m,afterIframes+.01);
 assert.ok(!m.egoIframesActive());
 const remaining=m.suitRegenAfter-m.elapsed;
 if(remaining>0){
  wait(m,remaining*.4);
  assert.equal(m.health,clamped,'still inside post-save damageDelay');
  wait(m,remaining+.5);
 }
 assert.ok(m.health>clamped,`regen after scare window, ${clamped} → ${m.health}`);
});
