/**
 * Phase 4 combat polish: pinned tunables, calm-combat callout gates, style view reuse.
 */
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {
 COMBAT_POLISH, HITBOX_ASSIST, SKIN_OF_TEETH, PLAYER_CORE, STYLE_TUNING, COMBAT_OUTCOME, STREAK,
 CALM_COMBAT, combatCalloutAllowed, calmShakeIntensity, calmHitstopMs,
} from '../src/combatTuning';
import {StyleMeter} from '../src/styleMeter';
import {CombatFeedbackManager, COMBAT_FEEDBACK} from '../src/combatFeedback';

test('Phase 4 polish table matches live combat exports',()=>{
 const P=COMBAT_POLISH;
 assert.equal(HITBOX_ASSIST.restBonus,P.magnetism.restBonus);
 assert.equal(HITBOX_ASSIST.sprintBonus,P.magnetism.sprintBonus);
 assert.equal(HITBOX_ASSIST.sprintSpeed,P.magnetism.sprintSpeed);
 assert.equal(HITBOX_ASSIST.restAngleDeg,P.magnetism.restAngleDeg);
 assert.equal(HITBOX_ASSIST.sprintAngleDeg,P.magnetism.sprintAngleDeg);
 assert.equal(HITBOX_ASSIST.angleHardCapDeg,P.magnetism.angleHardCapDeg);
 assert.equal(HITBOX_ASSIST.movingScatterDamp,P.magnetism.movingScatterDamp);
 assert.equal(SKIN_OF_TEETH.stillSpeed,P.graze.stillSpeed);
 assert.equal(SKIN_OF_TEETH.maxGrazeBias,P.graze.maxGrazeBias);
 assert.equal(SKIN_OF_TEETH.minChance,P.graze.minChance);
 assert.equal(PLAYER_CORE.visualRadius,P.core.visualRadius);
 assert.equal(PLAYER_CORE.coreShrink,P.core.coreShrink);
 assert.equal(PLAYER_CORE.radius,P.core.radius);
 assert.equal(PLAYER_CORE.grazeShell,P.core.grazeShell);
 assert.equal(STYLE_TUNING.points.scrape,P.style.scrape);
 assert.equal(STYLE_TUNING.points.graze,P.style.graze);
 assert.equal(STYLE_TUNING.points.clean,P.style.clean);
 assert.equal(STYLE_TUNING.stillDrain,P.style.stillDrain);
 assert.equal(STYLE_TUNING.stillSpeed,P.style.stillSpeed);
 assert.equal(STYLE_TUNING.graceSeconds,P.style.graceSeconds);
 assert.equal(COMBAT_OUTCOME.calloutSeconds,P.calloutSeconds);
 assert.equal(STREAK.ammoInterval,P.streak.ammoInterval);
 assert.deepEqual({...STREAK.ammoRounds},P.streak.ammoRounds);
 assert.deepEqual({...STREAK.directorDelay},P.streak.directorDelay);
 assert.equal(STREAK.pickupRadiusBonus,P.streak.pickupRadiusBonus);
 assert.equal(STREAK.breakShake.intensity,P.streak.breakShake.intensity);
 assert.equal(STREAK.breakShake.duration,P.streak.breakShake.duration);
 assert.equal(STREAK.breakHitstopMs,P.streak.breakHitstopMs);
 // Assists stay modest — cone is the readable boost; radii stay non-cartoon.
 assert.ok(HITBOX_ASSIST.sprintBonus<=.15);
 assert.ok(HITBOX_ASSIST.restBonus<=.10);
 assert.ok(HITBOX_ASSIST.sprintAngleDeg<=HITBOX_ASSIST.angleHardCapDeg);
 assert.ok(HITBOX_ASSIST.angleHardCapDeg<=2.5);
 assert.ok(HITBOX_ASSIST.restAngleDeg<=.5);
 assert.ok(HITBOX_ASSIST.movingScatterDamp<=.35);
 assert.ok(SKIN_OF_TEETH.maxGrazeBias>=.20,'graze bias is obvious when strafing');
 assert.ok(SKIN_OF_TEETH.maxGrazeBias<=.34,'still not strafe god-mode');
 assert.ok(PLAYER_CORE.coreShrink>=.30&&PLAYER_CORE.coreShrink<=.50);
 assert.ok(STYLE_TUNING.points.clean>=55,'honest CLEAN stays rewarding');
});

test('calm combat: callout allow-list + shake/hitstop scales',()=>{
 assert.equal(combatCalloutAllowed('CLEAN',false),false);
 assert.equal(combatCalloutAllowed('SCRAPE',false),true);
 assert.equal(combatCalloutAllowed('GRAZE',false),true);
 assert.equal(combatCalloutAllowed('HEAD',false),true);
 assert.equal(combatCalloutAllowed('SCRAPE',true),false);
 assert.equal(combatCalloutAllowed('GRAZE',true),false);
 assert.equal(combatCalloutAllowed('HEAD',true),true);
 assert.equal(combatCalloutAllowed('MULTI',true),true);
 assert.deepEqual([...CALM_COMBAT.calloutAllow],['HEAD','MULTI']);

 assert.ok(Math.abs(calmShakeIntensity(1,true)-CALM_COMBAT.shakeScale)<1e-12);
 assert.equal(calmShakeIntensity(1,false),1);
 assert.ok(calmHitstopMs(COMBAT_FEEDBACK.hitstopKill,true)<=CALM_COMBAT.hitstopCapMs);
 assert.equal(calmHitstopMs(90,false),90);
});

test('CombatFeedbackManager applies calm scales without throwing',()=>{
 const fb=new CombatFeedbackManager();
 fb.triggerScreenShake(COMBAT_FEEDBACK.scrapeTick.intensity,COMBAT_FEEDBACK.scrapeTick.duration);
 fb.triggerHitstop(COMBAT_FEEDBACK.hitstopScrape);
 const tick=fb.tick(1/60,0);
 assert.ok(tick.simDt===0||tick.simDt>0);
 fb.reset();
});

test('StyleMeter.view reuses the same snapshot object across calls',()=>{
 const m=new StyleMeter();
 m.record({action:'scrape'});
 const a=m.view();
 const b=m.view();
 assert.equal(a,b,'view() returns the scratch snapshot');
 assert.ok(a.feed.length>=1);
 assert.equal(a.rank,'D');
 // Mutating caller-facing feed length must not break the meter internals.
 const len=a.feed.length;
 m.record({action:'graze'});
 const c=m.view();
 assert.equal(c,a);
 assert.ok(c.feed.length>=len);
});

test('still speeds stay aligned across magnetism / graze / style',()=>{
 assert.equal(SKIN_OF_TEETH.stillSpeed,STYLE_TUNING.stillSpeed);
 assert.equal(COMBAT_OUTCOME.grazeStillSpeed,STYLE_TUNING.stillSpeed);
});
