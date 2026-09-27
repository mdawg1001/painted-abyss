/**
 * Headless frame-time probe for the dive (SwiftShader).
 * Usage (with playwright installed somewhere): node --import ... playable/scripts/fps-probe.mjs
 * Expects serve on 127.0.0.1:5173 and `?test=1` exposing window.__abyss.
 */
import { chromium } from 'playwright';

const browser = await chromium.launch({
  channel: 'chrome',
  headless: true,
  args: ['--use-angle=swiftshader', '--enable-webgl', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 2,
});
await page.goto('http://127.0.0.1:5173/?test=1', { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.__abyss);
await page.getByRole('button', { name: 'Begin dive' }).click();
await page.waitForTimeout(800);
await page.evaluate(() => {
  const w = window.__abyss;
  w.mission.position = { x: 0, y: 1.6, z: -28 };
  w.position.copy(w.mission.position);
  w.yaw = w.targetYaw = 0;
  w.pitch = w.targetPitch = -0.1;
  w.velocity.set(0, 0, 0);
  w.holdCamera = true;
});
await page.waitForTimeout(1200);
const sample = await page.evaluate(() => {
  const w = window.__abyss;
  const times = [];
  const gl = w.renderer.getContext();
  for (let i = 0; i < 8; i++) { w.composer.render(); gl.finish(); }
  for (let i = 0; i < 48; i++) {
    const t0 = performance.now();
    w.composer.render();
    gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
    times.push(performance.now() - t0);
  }
  times.sort((a, b) => a - b);
  const mid = times[Math.floor(times.length / 2)];
  const mean = times.reduce((a, b) => a + b, 0) / times.length;
  return {
    medianMs: +mid.toFixed(2),
    meanMs: +mean.toFixed(2),
    minMs: +times[0].toFixed(2),
    maxMs: +times[times.length - 1].toFixed(2),
    dpr: w.renderer.getPixelRatio(),
    drawingBuffer: [gl.drawingBufferWidth, gl.drawingBufferHeight],
    antialias: w.renderer.getContextAttributes()?.antialias,
    build: (document.body.innerText.match(/BUILD[^\n]*/) || [null])[0],
  };
});
console.log(JSON.stringify(sample, null, 2));
await browser.close();
