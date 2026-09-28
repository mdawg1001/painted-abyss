/**
 * Frame-time watchdog for render resolution and anti-aliasing.
 *
 * The game renders at the display's full pixel density (Retina 2×) with 4× MSAA when the machine
 * keeps up, and steps down a rung whenever frames start missing the budget. It can only ever fall
 * to the old playability profile (1× pixels, no MSAA), so no machine is slower than before.
 *
 * Browsers pace requestAnimationFrame to the display, so a frame that finishes early still reports
 * a full refresh interval: spare headroom is invisible. The governor therefore *probes*: after a
 * stretch of clean frames it tries the next rung up, and if that rung starts missing frames it
 * steps back and waits twice as long before trying again.
 *
 * Single long frames (a GC pause, a texture upload, a tab switch) are hitches, not load: they are
 * ignored, so a hitch never costs resolution. Pure (no DOM, no THREE).
 */
import { PERF } from './perf';

export type ResolutionRung = { /** Render pixels per CSS pixel. */ pixelRatio: number; /** MSAA samples on the scene target. */ msaa: number };

export const RESOLUTION = {
 /** Frames at or under this are on budget (ms): 60 fps with a little slack for timer jitter. */
 budgetMs: 1000 / 60 * 1.22,
 /** A frame this long is a hitch, not load, and is ignored (ms). */
 hitchMs: 120,
 /** Frames judged per decision. */
 window: 45,
 /** Step down when at least this share of the window is over budget. */
 dropShare: .22,
 /** A probe fails if this share of frames after it goes over budget. */
 probeFailShare: .12,
 /** Clean seconds before the first probe up; doubled after every failed probe (capped). */
 probeAfter: 3,
 probeAfterMax: 48,
 /** Seconds a probe is watched before it is kept. */
 probeWatch: 2.5,
 /** Never change more often than this (s): each change reallocates the render targets. */
 cooldown: 1.2,
 /** Pixel-ratio rungs as fractions of the display's density (capped at 2×). */
 scales: [1, .875, .75, .625, .5],
 /** Floor: never render below the old profile's one pixel per CSS pixel. */
 minPixelRatio: 1,
 msaa: PERF.msaa,
 maxPixelRatio: PERF.dprCap,
} as const;

/** Rungs from best to cheapest for a display density, ending on the old profile (1×, no MSAA). */
export function resolutionLadder(devicePixelRatio: number, cfg: ResolutionConfig = RESOLUTION): ResolutionRung[] {
 const top = Math.max(1, Math.min(cfg.maxPixelRatio, devicePixelRatio || 1));
 const out: ResolutionRung[] = [];
 for (const s of cfg.scales) {
  const pr = Math.max(cfg.minPixelRatio, Math.round(top * s * 8) / 8);
  if (!out.some(r => r.pixelRatio === pr)) out.push({ pixelRatio: pr, msaa: cfg.msaa });
 }
 out.push({ pixelRatio: cfg.minPixelRatio, msaa: 0 });
 return out;
}

export type ResolutionConfig = Omit<typeof RESOLUTION, 'scales'> & { scales: readonly number[] };
export type GovernorEvent = { from: number; to: number; rung: ResolutionRung; reason: 'drop' | 'probe' | 'revert' };

export class ResolutionGovernor {
 readonly ladder: ResolutionRung[];
 /** Index into the ladder (0 = best). */
 level = 0;
 private frames: boolean[] = [];
 private clock = 0;
 private lastChange = -Infinity;
 private clean = 0;
 private probeAfter: number;
 private probing: { at: number; from: number } | null = null;
 private probeFrames: boolean[] = [];

 constructor(devicePixelRatio: number, readonly cfg: ResolutionConfig = RESOLUTION, start = 0) {
  this.ladder = resolutionLadder(devicePixelRatio, cfg);
  this.level = Math.min(Math.max(0, start), this.ladder.length - 1);
  this.probeAfter = cfg.probeAfter;
 }

 get rung() { return this.ladder[this.level]; }

 /**
  * Feed one frame's wall time (ms). `active` is false in menus, while paused or when the tab is
  * hidden: nothing is judged then. Returns a change to apply, or null.
  */
 frame(ms: number, active = true): GovernorEvent | null {
  const c = this.cfg;
  if (!active || !(ms > 0)) { this.frames.length = 0; this.probeFrames.length = 0; this.clean = 0; return null; }
  this.clock += ms / 1000;
  if (ms >= c.hitchMs) return null;
  const slow = ms > c.budgetMs;
  this.frames.push(slow);
  if (this.frames.length > c.window) this.frames.shift();
  if (this.probing) {
   this.probeFrames.push(slow);
   const share = this.probeFrames.filter(Boolean).length / this.probeFrames.length;
   if (this.probeFrames.length >= 20 && share > c.probeFailShare) {
    // The rung above does not fit: go back and wait longer before the next try.
    const from = this.level, to = this.probing.from;
    this.probing = null; this.probeFrames.length = 0;
    this.probeAfter = Math.min(c.probeAfterMax, this.probeAfter * 2);
    return this.move(to, 'revert', from);
   }
   if (this.clock - this.probing.at >= c.probeWatch) { this.probing = null; this.probeFrames.length = 0; }
   return null;
  }
  if (this.clock - this.lastChange < c.cooldown) return null;
  const full = this.frames.length >= c.window;
  const share = this.frames.filter(Boolean).length / this.frames.length;
  if (full && share >= c.dropShare && this.level < this.ladder.length - 1) {
   return this.move(this.level + 1, 'drop', this.level);
  }
  this.clean = slow ? 0 : this.clean + ms / 1000;
  if (this.level > 0 && this.clean >= this.probeAfter) {
   const from = this.level;
   const ev = this.move(this.level - 1, 'probe', from);
   this.probing = { at: this.clock, from };
   return ev;
  }
  return null;
 }

 private move(to: number, reason: GovernorEvent['reason'], from: number): GovernorEvent {
  this.level = to;
  this.lastChange = this.clock;
  this.frames.length = 0;
  this.clean = 0;
  return { from, to, rung: this.ladder[to], reason };
 }
}
