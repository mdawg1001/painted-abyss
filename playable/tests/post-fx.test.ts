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
 IMPACT_CHROMA_MAX,
 IMPACT_VIGNETTE_MAX,
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

test('UnrealBloomPass is hard-capped so the bunker stays readable', () => {
 assert.ok(BLOOM_STRENGTH > 0 && BLOOM_STRENGTH <= 0.5, 'modest strength — no full-screen wash');
 assert.ok(BLOOM_RADIUS > 0 && BLOOM_RADIUS <= 0.5, 'tight radius — no giant disk');
 assert.ok(BLOOM_THRESHOLD >= 0.75, 'high threshold keeps rock/water/lights out of bloom');
 assert.equal(BLOOM_RES_SCALE, 0.5);
});

test('impact chroma/vignette peaks stay extreme and decay slowly', () => {
 assert.ok(IMPACT_CHROMA_MAX >= 0.015, 'RGB fringe must be unmistakable');
 assert.ok(IMPACT_VIGNETTE_MAX >= 0.9);
 assert.ok(IMPACT_DECAY <= 1.2, 'slow decay so the punch hangs');
 assert.equal(IMPACT_HIT_PEAK, 1);
 assert.equal(IMPACT_DASH_PEAK, 1);
});

test('impact FX pulses on hit and dash, then decays', () => {
 const fx = createImpactFx();
 assert.equal(fx.intensity, 0);
 fx.pulseHit();
 assert.equal(fx.hit, IMPACT_HIT_PEAK);
 fx.pulseDash();
 assert.equal(fx.dash, IMPACT_DASH_PEAK);
 fx.step(0);
 assert.ok(fx.intensity > 0.9, 'combined intensity near peak after both pulses');
 // Still loud after ~0.5 s (slow decay), then gone after a few seconds.
 for (let i = 0; i < 30; i++) fx.step(1 / 60);
 assert.ok(fx.intensity > 0.45, 'still felt after half a second');
 for (let i = 0; i < 180; i++) fx.step(1 / 60);
 assert.ok(fx.intensity < 0.15, 'eventually decays');
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
 assert.ok(CRUNCH_PIXEL >= 2 && CRUNCH_PIXEL <= 4);
 assert.ok(IMPACT_DECAY > 0.4);
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
