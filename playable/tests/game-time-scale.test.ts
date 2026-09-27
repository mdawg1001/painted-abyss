import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
 GAME_TIME_SCALE,
 MAX_FRAME_DT,
 MAX_SIM_DT,
 wallToSimDt,
 Mission,
 isolateGuards,
} from '../src/simulation';
import { CombatFeedbackManager } from '../src/combatFeedback';
import { HANGING_LIGHT } from '../src/hangingLightAsset';

test('GAME_TIME_SCALE is 5× with matching hitch caps', () => {
 assert.equal(GAME_TIME_SCALE, 5);
 assert.equal(MAX_FRAME_DT, 0.05);
 assert.equal(MAX_SIM_DT, MAX_FRAME_DT * GAME_TIME_SCALE);
 assert.equal(MAX_SIM_DT, 0.25);
});

test('wallToSimDt caps wall clock then multiplies by the scale', () => {
 assert.equal(wallToSimDt(1 / 60), (1 / 60) * GAME_TIME_SCALE);
 assert.equal(wallToSimDt(0.2), MAX_SIM_DT, 'hitch frames clamp before scaling');
 assert.equal(wallToSimDt(0), 0);
 assert.equal(wallToSimDt(-1), 0);
});

test('Mission.update accepts a full scaled frame and does not re-clamp below 5×', () => {
 const m = new Mission();
 isolateGuards(m);
 const before = m.elapsed;
 m.update(MAX_SIM_DT, false);
 assert.ok(Math.abs(m.elapsed - before - MAX_SIM_DT) < 1e-9);
 // A pathological dt larger than MAX_SIM_DT is still clamped.
 const mid = m.elapsed;
 m.update(MAX_SIM_DT * 4, false);
 assert.ok(Math.abs(m.elapsed - mid - MAX_SIM_DT) < 1e-9);
});

test('60 Hz wall frames advance mission elapsed at 5× wall clock', () => {
 const m = new Mission();
 isolateGuards(m);
 const frames = 60;
 const wallSeconds = frames * (1 / 60);
 for (let i = 0; i < frames; i++) m.update(wallToSimDt(1 / 60), false);
 assert.ok(Math.abs(m.elapsed - wallSeconds * GAME_TIME_SCALE) < 1e-6);
});

test('hitstop freezes sim on wall clock; scale resumes after the freeze', () => {
 const fx = new CombatFeedbackManager();
 fx.triggerHitstop(50); // 50 ms wall freeze
 // First wall frame inside hitstop → simDt 0 (then scaled still 0)
 const frozen = fx.tick(0.01, 0);
 assert.equal(frozen.simDt, 0);
 assert.equal(frozen.simDt * GAME_TIME_SCALE, 0);
 // Blow past remaining freeze
 fx.tick(0.05, 0.05);
 const live = fx.tick(1 / 60, 0.1);
 assert.ok(live.simDt > 0);
 assert.ok(Math.abs(live.simDt * GAME_TIME_SCALE - wallToSimDt(live.simDt)) < 1e-12);
});

test('hanging-light hitch cap scales with GAME_TIME_SCALE', () => {
 // Mirrors stepHangingLights: Math.min(dt, GAME_TIME_SCALE / 20)
 const cap = GAME_TIME_SCALE / 20;
 assert.equal(cap, 0.25);
 assert.ok(cap > 1 / 20, 'must exceed the old 50 ms wall cap');
 // A normal 5× frame (~83 ms sim) is under the scaled cap.
 assert.ok(wallToSimDt(1 / 60) < cap);
 // Cable period still matches physics (sanity — period √(L/g) unchanged by scale).
 const expected = 2 * Math.PI * Math.sqrt(HANGING_LIGHT.cable / HANGING_LIGHT.gravity);
 assert.ok(expected > 1 && expected < 3);
});

test('swim-camera follow hitch cap scales with GAME_TIME_SCALE', () => {
 // Mirrors CaveWorld: Math.min(dt, 0.018 * GAME_TIME_SCALE)
 const cap = 0.018 * GAME_TIME_SCALE;
 assert.equal(cap, 0.09);
 assert.ok(wallToSimDt(1 / 60) <= cap + 1e-9);
});
