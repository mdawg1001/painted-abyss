import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
 POST_FX_DPR_CAP,
 BLOOM_STRENGTH,
 BLOOM_RADIUS,
 BLOOM_THRESHOLD,
 BLOOM_RES_SCALE,
 IMPACT_HIT_PEAK,
 IMPACT_DASH_PEAK,
 IMPACT_DECAY,
 CRUNCH_PIXEL,
 createImpactFx,
 createImpactPass,
 createBloomPass,
 resizeBloomPass,
} from '../src/postFx';

test('bloom costs the same at any pixel density: sized from CSS pixels', () => {
 assert.equal(POST_FX_DPR_CAP, 1.5, 'mild density cap (governor floor still 1×)');
 let pr = 1;
 const bloom = createBloomPass(960, 600, () => pr);
 bloom.setSize(960, 600);
 const w1 = bloom.renderTargetsHorizontal[0].width;
 pr = 2; bloom.setSize(1920, 1200);
 assert.equal(bloom.renderTargetsHorizontal[0].width, w1, 'a denser frame still blurs at the CSS size');
 pr = 1.5; bloom.setSize(1440, 900);
 assert.equal(bloom.renderTargetsHorizontal[0].width, w1);
});

test('UnrealBloomPass tunables stay soft and thresholded for neon only', () => {
 assert.ok(BLOOM_STRENGTH > 0 && BLOOM_STRENGTH < 0.6, 'modest strength');
 assert.ok(BLOOM_RADIUS > 0 && BLOOM_RADIUS < 1);
 assert.ok(BLOOM_THRESHOLD >= 0.8, 'high threshold keeps rock albedo out of bloom');
 assert.equal(BLOOM_RES_SCALE, 0.25);
});

test('impact FX pulses on hit and dash, then decays', () => {
 const fx = createImpactFx();
 assert.equal(fx.intensity, 0);
 fx.pulseHit();
 assert.equal(fx.hit, IMPACT_HIT_PEAK);
 fx.pulseDash();
 assert.equal(fx.dash, IMPACT_DASH_PEAK);
 fx.step(0);
 assert.ok(fx.intensity > 0.5, 'combined intensity after both pulses');
 // ~0.5 s of decay at IMPACT_DECAY
 for (let i = 0; i < 30; i++) fx.step(1 / 60);
 assert.ok(fx.intensity < 0.55, 'decays within a short window');
 assert.ok(fx.hit < IMPACT_HIT_PEAK);
 fx.reset();
 assert.equal(fx.intensity, 0);
 assert.equal(fx.hit, 0);
 assert.equal(fx.dash, 0);
});

test('repeated pulses do not stack past 1', () => {
 const fx = createImpactFx();
 fx.pulseHit(0.8);
 fx.pulseHit(0.5);
 assert.equal(fx.hit, 0.8);
 fx.pulseHit(1);
 assert.equal(fx.hit, 1);
});

test('impact pass exposes intensity + size uniforms', () => {
 const pass = createImpactPass();
 pass.setIntensity(0.4);
 assert.equal(pass.uniforms.uIntensity.value, 0.4);
 pass.setIntensity(2);
 assert.equal(pass.uniforms.uIntensity.value, 1);
 pass.setSize(1280, 720);
 assert.equal(pass.uniforms.uResolution.value.x, 1280);
 assert.equal(pass.uniforms.uResolution.value.y, 720);
 assert.ok(CRUNCH_PIXEL >= 1 && CRUNCH_PIXEL <= 3, 'mild crunch only');
 assert.ok(IMPACT_DECAY > 1);
});

test('bloom pass builds at quarter resolution', () => {
 const bloom = createBloomPass(800, 600);
 assert.equal(bloom.resolution.x, 200);
 assert.equal(bloom.resolution.y, 150);
 assert.equal(bloom.strength, BLOOM_STRENGTH);
 assert.equal(bloom.threshold, BLOOM_THRESHOLD);
 resizeBloomPass(bloom, 1600, 900);
 assert.equal(bloom.resolution.x, 400);
 assert.equal(bloom.resolution.y, 225);
 bloom.dispose();
});

test('the fused clip grade pass carries the speed lens stretch (the pass that actually runs)', async () => {
 const { createClipGradePass } = await import('../src/frameGrade');
 const pass = createClipGradePass();
 pass.setWarp(.05);
 assert.equal(pass.uniforms.uWarp.value, .05);
 pass.setWarp(9);
 assert.equal(pass.uniforms.uWarp.value, .2, 'clamped');
 assert.match((pass as any).material.fragmentShader, /uWarp\*r2/);
 const fs = await import('node:fs');
 const src = fs.readFileSync(new URL('../src/CaveWorld.ts', import.meta.url), 'utf8');
 assert.match(src, /this\.clipPass\?\.setWarp\(/, 'applyLens drives the fused pass');
});
