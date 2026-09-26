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

test('post FX caps Retina DPR below uncapped devicePixelRatio', () => {
 assert.ok(POST_FX_DPR_CAP <= 1.25, 'bloom stack must not run at full Retina');
 assert.ok(POST_FX_DPR_CAP >= 1, 'still at least 1×');
});

test('UnrealBloomPass tunables stay soft and thresholded for neon only', () => {
 assert.ok(BLOOM_STRENGTH > 0 && BLOOM_STRENGTH < 0.6, 'modest strength');
 assert.ok(BLOOM_RADIUS > 0 && BLOOM_RADIUS < 1);
 assert.ok(BLOOM_THRESHOLD >= 0.8, 'high threshold keeps rock albedo out of bloom');
 assert.equal(BLOOM_RES_SCALE, 0.5);
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

test('bloom pass builds at half resolution', () => {
 const bloom = createBloomPass(800, 600);
 assert.equal(bloom.resolution.x, 400);
 assert.equal(bloom.resolution.y, 300);
 assert.equal(bloom.strength, BLOOM_STRENGTH);
 assert.equal(bloom.threshold, BLOOM_THRESHOLD);
 resizeBloomPass(bloom, 1600, 900);
 assert.equal(bloom.resolution.x, 800);
 assert.equal(bloom.resolution.y, 450);
 bloom.dispose();
});
