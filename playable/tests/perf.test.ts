import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PERF } from '../src/perf';
import { POST_FX_DPR_CAP, BLOOM_RES_SCALE } from '../src/postFx';
import { HANGING_LIGHT } from '../src/hangingLightAsset';

test('playability profile targets cheaper frames without gutting the bunker', () => {
 // #191 briefly raised Retina 2× + 4× MSAA; that crushed Safari when the governor lagged.
 // Cap stays at the 0.21 playability floor so a failed governor cannot leave a heavy rung on.
 assert.equal(PERF.dprCap, 1, '1× CSS pixels — no Retina framebuffer crush');
 assert.equal(PERF.msaa, 0, 'MSAA off on the scene target');
 assert.equal(PERF.antialias, false, 'no canvas MSAA');
 assert.equal(PERF.shadows, false, 'no shadow-map re-draws');
 assert.ok(PERF.bloomResScale <= 0.25, 'bloom at quarter-res or cheaper');
 assert.ok(PERF.particleCount <= 220, 'motes cut hard from the 1800 baseline');
 assert.ok(PERF.hangingLightPool <= 3, 'fewer active tube spots');
 assert.equal(PERF.hangingShadowed, 0);
 assert.equal(PERF.composerFloat, false, 'LDR composer buffers');
 assert.ok(PERF.lightScanFrames >= 16, 'PointLight registry rescans slowly');
 assert.ok(PERF.anisotropy <= 4);
});

test('post FX and hanging lights follow the playability profile', () => {
 assert.equal(POST_FX_DPR_CAP, PERF.dprCap);
 assert.equal(BLOOM_RES_SCALE, PERF.bloomResScale);
 assert.equal(HANGING_LIGHT.pool, PERF.hangingLightPool);
 assert.equal(HANGING_LIGHT.shadowed, PERF.hangingShadowed);
});
