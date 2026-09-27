/**
 * Style meter: scores how you fight, D → SSS.
 *
 * Every combat action is an event with a base value. What it actually scores depends on:
 *  - freshness: repeating the same action is worth less each time (×0.65 per repeat), and
 *    recovers while you do other things, so variety pays and spamming does not;
 *  - chain: events landing within `chainWindow` of each other build a multiplier (+10 % per
 *    link, capped at ×2);
 *  - modifiers: the same kill is worth more mid-slide or in the air (stacked on top).
 * Points fill the current rank's bar; overflow promotes. With no events for `graceSeconds`, the
 * bar drains, faster at high ranks, and empties down through the tiers. Getting hurt costs a
 * slice of the bar.
 *
 * Pure (no THREE, no DOM). Hook in with `onRankChange` for UI juice such as screen shake.
 */

export const STYLE_RANKS = ['D', 'C', 'B', 'A', 'S', 'SS', 'SSS'] as const;
export type StyleRank = typeof STYLE_RANKS[number];

/** Combat actions the meter understands. */
export type StyleAction =
 | 'hit'          // round lands on a body
 | 'headshot'     // round lands on a head
 | 'kill'         // gun kill
 | 'headshotKill' // gun kill through the head
 | 'meleeHit'     // knife connects
 | 'meleeKill'    // knife kill
 | 'monsterHit'   // wound the guardian
 | 'monsterKill'  // kill the guardian
 | 'parry'        // deflect a melee attack (reserved: no parry mechanic in the game yet)
 | 'closeCall';   // a shot or swing at you misses while you slide or are airborne

export type StyleModifier = 'slide' | 'aerial';

export type StyleEvent = { action: StyleAction; mods?: StyleModifier[] };

export const STYLE_TUNING = {
 /** Base points per action. */
 points: {
  hit: 40, headshot: 90, kill: 180, headshotKill: 280,
  meleeHit: 70, meleeKill: 260, monsterHit: 120, monsterKill: 600,
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
 /** Seconds with no events before the bar drains. */
 graceSeconds: 2.5,
 /** Drain rate in points/s at D, growing per rank (so SSS is hard to hold). */
 drainBase: 60,
 drainPerRank: 35,
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
 hit: 'HIT', headshot: 'HEADSHOT', kill: 'KILL', headshotKill: 'HEADSHOT KILL',
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
 private key(ev: StyleEvent) { return [ev.action, ...(ev.mods ?? []).slice().sort()].join('+'); }

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

 /** Per-frame: freshness recovers; after the grace period the bar drains down through the tiers. */
 update(dt: number) {
  const T = STYLE_TUNING;
  this.clock += dt;
  for (const [k, f] of this.freshness) {
   const n = Math.min(1, f + T.freshnessRegen * dt);
   if (n >= 1) this.freshness.delete(k); else this.freshness.set(k, n);
  }
  if (this.tier < 0 || this.clock - this.lastEventAt < T.graceSeconds) return;
  this.chain = 0;
  let p = this.points - (T.drainBase + T.drainPerRank * this.tier) * dt;
  let tier = this.tier;
  while (p < 0 && tier >= 0) { tier--; p += tier >= 0 ? this.size(tier) : 0; }
  this.points = tier < 0 ? 0 : p;
  this.setTier(tier);
 }

 /** Fresh life: meter empty, history cleared (listeners kept). */
 reset() {
  this.tier = -1; this.points = 0; this.total = 0; this.chain = 0;
  this.lastEventAt = -Infinity; this.freshness.clear(); this.feed = [];
 }

 view(): StyleView {
  const live = this.feed.filter(l => this.clock - l.at < STYLE_TUNING.feedSeconds);
  return { rank: this.rank, tier: this.tier, fill: this.tier < 0 ? 0 : this.points / this.size(), total: this.total, chain: this.chain, feed: live.map(l => ({ ...l })) };
 }
}
