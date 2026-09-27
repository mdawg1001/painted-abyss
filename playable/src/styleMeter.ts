/**
 * Style meter: scores how you fight, D → S (SS/SSS kept as stretch tiers).
 *
 * Every combat action is an event with a base value. What it actually scores depends on:
 *  - freshness: repeating the same action is worth less each time (×0.65 per repeat), and
 *    recovers while you do other things, so variety pays and spamming does not;
 *  - chain: events landing within `chainWindow` of each other build a multiplier (+10 % per
 *    link, capped at ×2);
 *  - modifiers: the same kill is worth more mid-slide or in the air (stacked on top).
 * Points fill the current rank's bar; overflow promotes. With no events for `graceSeconds`, the
 * bar drains, faster at high ranks, and empties down through the tiers. Standing still drains
 * even inside the grace window. Getting hurt costs a slice of the bar.
 *
 * Pure (no THREE, no DOM). Hook in with `onRankChange` for UI juice such as screen shake.
 */

export const STYLE_RANKS = ['D', 'C', 'B', 'A', 'S', 'SS', 'SSS'] as const;
export type StyleRank = typeof STYLE_RANKS[number];

/** Combat actions the meter understands. */
export type StyleAction =
 | 'hit'          // legacy body hit (tests / melee path aliases)
 | 'clean'        // solid unassisted body hit
 | 'scrape'       // magnetism-only near-miss that stuck
 | 'graze'        // enemy miss while you were moving
 | 'headshot'     // round lands on a head
 | 'kill'         // gun kill
 | 'headshotKill' // gun kill through the head
 | 'multi'        // chained kill inside the multi window
 | 'meleeHit'     // knife connects
 | 'meleeKill'    // knife kill
 | 'monsterHit'   // wound the guardian
 | 'monsterKill'  // kill the guardian
 | 'parry'        // deflect a melee attack (reserved: no parry mechanic in the game yet)
 | 'closeCall';   // a shot or swing at you misses while you slide or are airborne

export type StyleModifier = 'slide' | 'aerial';

export type StyleEvent = { action: StyleAction; mods?: StyleModifier[] };

export const STYLE_TUNING = {
 /** Base points per action. Phase 4: CLEAN competitive with scrape; graze slightly ahead of scrape. */
 points: {
  hit: 40, clean: 60, scrape: 70, graze: 80, headshot: 90, kill: 180, headshotKill: 280,
  multi: 140, meleeHit: 70, meleeKill: 260, monsterHit: 120, monsterKill: 600,
  parry: 220, closeCall: 110,
 } as Record<StyleAction, number>,
 /** Multipliers stacked onto an event per modifier. */
 mods: { slide: 1.6, aerial: 1.5 } as Record<StyleModifier, number>,
 /** Label shown in the feed for a modifier. */
 modLabel: { slide: 'SLIDE', aerial: 'AERIAL' } as Record<StyleModifier, string>,
 /** Points to fill each rank's bar (D … SSS). */
 rankSize: [300, 400, 500, 650, 800, 1000, 1200],
 /** Freshness lost per use and regained per second. */
 freshnessDecay: .65,
 freshnessFloor: .2,
 freshnessRegen: .05,
 chainWindow: 2.5,
 chainStep: .1,
 chainMax: 2,
 /** Seconds with no events before the idle bar drains. */
 graceSeconds: 2.8,
 /** Drain rate in points/s at D, growing per rank (so SSS is hard to hold). */
 drainBase: 60,
 drainPerRank: 35,
 /** Horizontal speed (m/s) at or below which standing-still drain applies. */
 stillSpeed: 0.4,
 /** Extra drain (points/s) while standing still — speed is currency without aim-freeze panic. */
 stillDrain: 72,
 /** Share of the current rank's bar lost when you take a hit. */
 hurtPenalty: .6,
 /** Feed lines kept, and how long each stays up (s). */
 feedSize: 5,
 feedSeconds: 3,
} as const;

export type StyleFeedLine = { label: string; points: number; at: number };

/** A tier crossed. `to` is null when the meter empties below D; `tier` is the new tier (−1 = empty). */
export type StyleRankChange = { from: StyleRank | null; to: StyleRank | null; tier: number; up: boolean };

/** Plain snapshot for the HUD. */
export type StyleView = { rank: StyleRank | null; tier: number; fill: number; total: number; chain: number; feed: StyleFeedLine[] };

const LABEL: Record<StyleAction, string> = {
 hit: 'HIT', clean: 'CLEAN', scrape: 'SCRAPE', graze: 'GRAZE',
 headshot: 'HEAD', kill: 'KILL', headshotKill: 'HEAD', multi: 'MULTI',
 meleeHit: 'CUT', meleeKill: 'KNIFE KILL', monsterHit: 'GUARDIAN WOUND', monsterKill: 'GUARDIAN SLAIN',
 parry: 'PARRY', closeCall: 'CLOSE CALL',
};

export class StyleMeter {
 /** Tier index into STYLE_RANKS; −1 = unranked (empty meter). */
 tier = -1;
 /** Points inside the current tier's bar. */
 points = 0;
 /** Lifetime style points this life. */
 total = 0;
 chain = 0;
 private clock = 0;
 private lastEventAt = -Infinity;
 private freshness = new Map<string, number>();
 private feed: StyleFeedLine[] = [];
 private listeners: ((c: StyleRankChange) => void)[] = [];
 /** Reused by `view()` so the HUD publish path does not allocate feed copies each tick. */
 private viewScratch: StyleView = { rank: null, tier: -1, fill: 0, total: 0, chain: 0, feed: [] };
 private feedScratch: StyleFeedLine[] = [];

 /** Subscribe to tier changes (up or down). Returns an unsubscribe function. */
 onRankChange(fn: (c: StyleRankChange) => void) {
  this.listeners.push(fn);
  return () => { this.listeners = this.listeners.filter(f => f !== fn); };
 }

 get rank(): StyleRank | null { return this.tier < 0 ? null : STYLE_RANKS[this.tier]; }

 private size(tier = this.tier) { return STYLE_TUNING.rankSize[Math.max(0, Math.min(tier, STYLE_RANKS.length - 1))]; }

 private setTier(next: number) {
  const prev = this.tier;
  if (next === prev) return;
  this.tier = next;
  // Tiers are crossed one at a time, so a big spike from C to S fires once per letter it passes.
  const R = (t: number) => (t >= 0 ? STYLE_RANKS[t] : null);
  const events: StyleRankChange[] = [];
  if (next > prev) for (let t = prev + 1; t <= next; t++) events.push({ from: R(t - 1), to: R(t), tier: t, up: true });
  else for (let t = prev - 1; t >= next; t--) events.push({ from: R(t + 1), to: R(t), tier: t, up: false });
  for (const e of events) for (const fn of this.listeners) fn(e);
 }

 /** Key for freshness: the action plus its modifiers (a slide kill is fresh after a plain kill). */
 private key(ev: StyleEvent) {
  const mods = ev.mods;
  if (!mods || mods.length === 0) return ev.action;
  if (mods.length === 1) return `${ev.action}+${mods[0]}`;
  // Rare multi-mod path — sort a tiny copy only when needed.
  return [ev.action, ...mods.slice().sort()].join('+');
 }

 /** Score one combat event. Returns the points awarded. */
 record(ev: StyleEvent): number {
  const T = STYLE_TUNING;
  const key = this.key(ev);
  const fresh = this.freshness.get(key) ?? 1;
  this.chain = this.clock - this.lastEventAt <= T.chainWindow ? this.chain + 1 : 0;
  const chainMult = Math.min(T.chainMax, 1 + this.chain * T.chainStep);
  let mult = 1;
  for (const m of new Set(ev.mods ?? [])) mult *= T.mods[m];
  const pts = Math.round(T.points[ev.action] * mult * fresh * chainMult);
  this.freshness.set(key, Math.max(T.freshnessFloor, fresh * T.freshnessDecay));
  this.lastEventAt = this.clock;
  this.total += pts;
  const label = [...(ev.mods ?? []).map(m => T.modLabel[m]), LABEL[ev.action]].join(' ');
  this.feed.unshift({ label, points: pts, at: this.clock });
  this.feed.length = Math.min(this.feed.length, T.feedSize);
  // Fill the bar; each full bar promotes (SSS just stays full).
  let tier = this.tier, p = this.points + pts;
  if (tier < 0) tier = 0;
  while (p >= this.size(tier) && tier < STYLE_RANKS.length - 1) { p -= this.size(tier); tier++; }
  this.points = Math.min(p, this.size(tier));
  this.setTier(tier);
  return pts;
 }

 /** Took damage: lose a slice of the bar, dropping a tier if it empties. */
 hurt() {
  if (this.tier < 0) return;
  this.chain = 0;
  let p = this.points - this.size() * STYLE_TUNING.hurtPenalty;
  let tier = this.tier;
  if (p < 0) { tier--; p = tier >= 0 ? this.size(tier) * .5 : 0; }
  this.points = Math.max(0, p);
  this.setTier(tier);
 }

 /**
  * Phase 3 streak break: one solid core hit knocks you out of payoff ranks (B+ → C at
  * half fill). Fair and readable — rewards stop until you climb back to B.
  */
 breakStreak() {
  if (this.tier < 0) return;
  this.chain = 0;
  // Already below B: same as a normal hurt so scrapes still cost.
  if (this.tier < 2) { this.hurt(); return; }
  const next = 1; // C
  this.points = this.size(next) * .5;
  this.setTier(next);
 }

 /**
  * Per-frame: freshness recovers; after the grace period the bar drains down through the tiers.
  * `horizontalSpeed` (optional): standing still drains even inside the grace window — speed is currency.
  */
 update(dt: number, horizontalSpeed = Infinity) {
  const T = STYLE_TUNING;
  this.clock += dt;
  // forEach avoids allocating a Map iterator object on the hot sim path.
  if (this.freshness.size > 0) {
   this.freshness.forEach((f, k) => {
    const n = Math.min(1, f + T.freshnessRegen * dt);
    if (n >= 1) this.freshness.delete(k); else this.freshness.set(k, n);
   });
  }
  if (this.tier < 0) return;
  const still = !(horizontalSpeed > T.stillSpeed);
  const idle = this.clock - this.lastEventAt >= T.graceSeconds;
  if (!still && !idle) return;
  if (idle) this.chain = 0;
  const rate = (idle ? T.drainBase + T.drainPerRank * this.tier : 0) + (still ? T.stillDrain : 0);
  if (rate <= 0) return;
  let p = this.points - rate * dt;
  let tier = this.tier;
  while (p < 0 && tier >= 0) { tier--; p += tier >= 0 ? this.size(tier) : 0; }
  this.points = tier < 0 ? 0 : p;
  this.setTier(tier);
 }

 /** Fresh life: meter empty, history cleared (listeners kept). */
 reset() {
  this.tier = -1; this.points = 0; this.total = 0; this.chain = 0;
  this.lastEventAt = -Infinity; this.freshness.clear(); this.feed.length = 0;
  this.feedScratch.length = 0;
 }

 /**
  * HUD snapshot. Reuses one StyleView + feed array — safe for the publish path (~20 Hz).
  * Callers must not mutate the returned object or its `feed` entries.
  */
 view(): StyleView {
  const feed = this.feedScratch;
  feed.length = 0;
  const maxAge = STYLE_TUNING.feedSeconds;
  for (let i = 0; i < this.feed.length; i++) {
   const l = this.feed[i];
   if (this.clock - l.at < maxAge) feed.push(l);
  }
  const v = this.viewScratch;
  v.rank = this.rank;
  v.tier = this.tier;
  v.fill = this.tier < 0 ? 0 : this.points / this.size();
  v.total = this.total;
  v.chain = this.chain;
  v.feed = feed;
  return v;
 }
}
