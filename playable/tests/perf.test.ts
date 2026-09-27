import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PERF } from '../src/perf';
import { POST_FX_DPR_CAP, BLOOM_RES_SCALE } from '../src/postFx';
import { HANGING_LIGHT } from '../src/hangingLightAsset';

test('playability profile targets cheaper frames without gutting the bunker', () => {
 assert.equal(PERF.dprCap, 1, 'no Retina oversample');
 assert.equal(PERF.antialias, false, 'MSAA off');
 assert.equal(PERF.shadows, false, 'no shadow-map re-draws');
 assert.ok(PERF.bloomResScale <= 0.25, 'bloom at quarter-res or cheaper');
 assert.ok(PERF.particleCount <= 400, 'motes cut ~5× from 1800');
 assert.ok(PERF.hangingLightPool <= 3, 'fewer active tube spots');
 assert.equal(PERF.hangingShadowed, 0);
 assert.equal(PERF.composerFloat, false, 'LDR composer buffers');
 assert.ok(PERF.lightScanFrames >= 8);
 assert.ok(PERF.anisotropy <= 4);
});

test('post FX and hanging lights follow the playability profile', () => {
 assert.equal(POST_FX_DPR_CAP, PERF.dprCap);
 assert.equal(BLOOM_RES_SCALE, PERF.bloomResScale);
 assert.equal(HANGING_LIGHT.pool, PERF.hangingLightPool);
 assert.equal(HANGING_LIGHT.shadowed, PERF.hangingShadowed);
});
