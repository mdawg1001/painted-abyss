import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PERF } from '../src/perf';
import { POST_FX_DPR_CAP, BLOOM_RES_SCALE } from '../src/postFx';
import { HANGING_LIGHT } from '../src/hangingLightAsset';

test('playability profile targets cheaper frames without gutting the bunker', () => {
 // #191's Retina 2× + 4× MSAA crushed Safari when the governor lagged. v0.24.3
 // allows a mild 1.5× / 2× top rung; the governor still boots on 1× / 0 MSAA.
 assert.equal(PERF.dprCap, 1.5, 'mild density cap — below the #191 Retina crush');
 assert.ok(PERF.dprCap < 2, 'never reopen the 2× framebuffer that crushed Safari');
 assert.equal(PERF.msaa, 2, 'light MSAA on the scene target (not 4×)');
 assert.ok(PERF.msaa <= 2, 'MSAA stays at or below 2×');
 assert.equal(PERF.antialias, false, 'no canvas MSAA — composer target owns samples');
 assert.equal(PERF.shadows, false, 'no shadow-map re-draws');
 assert.ok(PERF.bloomResScale <= 0.25, 'bloom at quarter-res or cheaper');
 assert.ok(PERF.particleCount <= 220, 'motes cut hard from the 1800 baseline');
 assert.ok(PERF.hangingLightPool <= 3, 'fewer active tube spots');
 assert.equal(PERF.hangingShadowed, 0);
 assert.equal(PERF.composerFloat, false, 'LDR composer buffers');
 assert.ok(PERF.lightScanFrames >= 16, 'PointLight registry rescans slowly');
 assert.ok(PERF.anisotropy <= 8);
});

test('post FX and hanging lights follow the playability profile', () => {
 assert.equal(POST_FX_DPR_CAP, PERF.dprCap);
 assert.equal(BLOOM_RES_SCALE, PERF.bloomResScale);
 assert.equal(HANGING_LIGHT.pool, PERF.hangingLightPool);
 assert.equal(HANGING_LIGHT.shadowed, PERF.hangingShadowed);
});
