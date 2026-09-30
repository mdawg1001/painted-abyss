/**
 * Gold and rifle upgrades.
 *
 * Gold is real metal. 19,300 kg/m³, so every gram you carry is dead weight on land and
 * ballast in the water: it slows your stride and drags you down against your BCD. The
 * greedier you are, the harder the escape through the flooding bunker. Nothing here is
 * an artificial rule; it is mass, displacement and lift.
 *
 * Banked gold buys upgrades at the stash workbench, and upgrades are fitted to one
 * physical rifle. Die carrying that rifle and every upgrade on it lies on your corpse.
 */
import { GRAVITY, WATER_DENSITY } from './propPhysics';

export const GOLD_DENSITY = 19300;
/** Diver, suit, cylinder and kit (kg) — the mass the gold is added to. */
export const DIVER_KG = 95;
/** Lift of a jacket BCD fully inflated (kg). Typical recreational wings: 15–25 kg. */
export const BCD_LIFT_KG = 18;

export const GOLD = {
 /** Coins in a dead guard's pockets (grams), and the officer's purse. */
 guardCoins: [150, 350] as [number, number],
 officerCoins: [800, 1200] as [number, number],
 /** Standard good-delivery kilobar. */
 barGrams: 1000,
 /**
  * Free floor bars per dive — kept at zero so gold is earned on the kill/extract
  * levers, not by sightseeing. (scatterGold no-ops when both are 0.)
  */
 barsPerDive: 0,
 /** Free bars around the relic plinth — zero; extract payday replaces the hoard. */
 hoardBars: 0,
 /**
  * Extract jackpot: kilobars poured straight into the vault when you leave with
  * the relic. [min, max] bar count, rolled per extract.
  */
 extractBars: [2, 4] as [number, number],
 /** Coins within this radius are scooped up as you walk over them (bars need E). */
 scoopRadius: 1.4,
} as const;

/** Net downward force of `grams` of gold fully submerged (N): weight minus displaced water. */
export function goldNetWeightN(grams: number) {
 const kg = grams / 1000;
 return kg * GRAVITY * (1 - WATER_DENSITY / GOLD_DENSITY);
}

/** Fraction of full BCD lift needed just to cancel the gold (0 = none, 1 = BCD maxed out). */
export function goldBcdShare(grams: number) {
 return goldNetWeightN(grams) / (BCD_LIFT_KG * GRAVITY);
}

/**
 * Vertical acceleration the gold adds when swimming (m/s², downward positive), in the same
 * units as the BCD's full-lift acceleration `bcdAccel`: carrying the BCD's worth of gold
 * cancels a fully inflated jacket.
 */
export function goldSinkAccel(grams: number, bcdAccel: number) {
 return goldBcdShare(grams) * bcdAccel;
}

/** Share of kick thrust left when pushing the diver plus gold (heavier body, same fins). */
export function goldThrustFactor(grams: number) {
 return DIVER_KG / (DIVER_KG + grams / 1000);
}

/**
 * Walking speed multiplier under a carried load. Loaded-march studies put the cost of
 * load well above its share of body mass for loads held in the hands and pockets, so the
 * curve bends harder than mass alone: ~0.8 at 10 kg, ~0.67 at 20 kg.
 */
export function goldWalkFactor(grams: number) {
 return 1 / (1 + (grams / 1000) / 40);
}

/** Extra stamina burn while running with the load. */
export function goldStaminaFactor(grams: number) {
 return 1 + (grams / 1000) / 25;
}

export const fmtGold = (grams: number) => grams >= 1000 ? `${(grams / 1000).toFixed(grams >= 10000 ? 0 : 1)} kg` : `${Math.round(grams)} g`;
/** Shop price tag — grams of banked gold shown as $ gold. */
export const fmtShopGold = (grams: number) => `$${Math.max(0, Math.round(grams))}`;

// ── Upgrades / shop catalog ───────────────────────────────────────────────────────────

export type RifleMods = { barrel: number; action: number; mag: number };
export type ModTrack = keyof RifleMods;
export const MOD_TRACKS: ModTrack[] = ['barrel', 'action', 'mag'];
export const noMods = (): RifleMods => ({ barrel: 0, action: 0, mag: 0 });

/** Buy an AK-74U from the hatch shop when you don't already carry one. */
export const SHOP_RIFLE_PRICE = 1200;

export const UPGRADE = {
 maxLevel: 3,
 /** Grams of banked gold for each level (1, 2, 3) of any track. */
 cost: [400, 900, 1800] as [number, number, number],
 names: { barrel: 'Barrel', action: 'Action', mag: 'Magazine' } as Record<ModTrack, string>,
 /** Plain shop labels (not gunsmith jargon). */
 shopNames: { barrel: 'Harder hits', action: 'Fewer jams', mag: 'Bigger magazine' } as Record<ModTrack, string>,
 blurbs: {
  barrel: ['Lapped bore: +8% damage, tighter groups', 'Chrome-lined: +16% damage', 'Match barrel: +24% damage, half the scatter'],
  action: ['Polished feed ramp: half the jams', 'Tuned gas block: faster cycling', 'Hand-fitted action: jams nearly gone, fastest cycling'],
  mag: ['Extended mag: +4 rounds', 'Coupled mags: +8 rounds', 'Drum: +12 rounds'],
 } as Record<ModTrack, [string, string, string]>,
} as const;

export const upgradeCost = (level: number) => level >= UPGRADE.maxLevel ? Infinity : UPGRADE.cost[level];
export const damageMult = (m: RifleMods) => 1 + .08 * m.barrel;
export const spreadMult = (m: RifleMods) => 1 - m.barrel / 6;
export const jamMult = (m: RifleMods) => Math.pow(.5, m.action);
export const cycleMult = (m: RifleMods) => 1 - .08 * m.action;
export const magBonus = (m: RifleMods) => 4 * m.mag;
export const modLevel = (m: RifleMods | undefined) => m ? m.barrel + m.action + m.mag : 0;
/** Gold sunk into a rifle's upgrades so far. */
export const modValue = (m: RifleMods | undefined) => m ? MOD_TRACKS.reduce((s, t) => s + UPGRADE.cost.slice(0, m[t]).reduce((a, b) => a + b, 0), 0) : 0;
export const modTag = (m: RifleMods | undefined) => modLevel(m) > 0 ? ` +${modLevel(m)}` : '';

export function parseMods(raw: unknown): RifleMods | undefined {
 if (!raw || typeof raw !== 'object') return undefined;
 const o = raw as Record<string, unknown>;
 const lv = (v: unknown) => typeof v === 'number' ? Math.max(0, Math.min(UPGRADE.maxLevel, Math.floor(v))) : 0;
 const m = { barrel: lv(o.barrel), action: lv(o.action), mag: lv(o.mag) };
 return modLevel(m) > 0 ? m : undefined;
}

/**
 * "Almost afford" band — unfinished upgrade contingency.
 * Shortfall counts as almost when ≤ 35% of the next cost OR ≤ 250 g.
 * Ready = shortfall 0. That unfinished buy is the meta Skinner pull.
 */
export const ALMOST_UPGRADE = {
 frac: 0.35,
 grams: 250,
} as const;

export type UpgradeTarget = {
 track: ModTrack;
 /** Level after purchase (1..maxLevel). */
 nextLevel: number;
 cost: number;
 have: number;
 short: number;
 ready: boolean;
 almost: boolean;
};

/** True when shortfall is in the almost band (not yet ready). */
export function isAlmostShort(short: number, cost: number): boolean {
 if (!(short > 0) || !(cost > 0) || !Number.isFinite(cost)) return false;
 return short <= ALMOST_UPGRADE.grams || short <= cost * ALMOST_UPGRADE.frac;
}

/**
 * Cheapest next upgrade on the rifle in hand. Null when no gun or every track is maxed.
 * Ties break in MOD_TRACKS order (barrel → action → mag).
 */
export function nextUpgradeTarget(mods: RifleMods, banked: number, hasGun: boolean): UpgradeTarget | null {
 if (!hasGun) return null;
 const have = Math.max(0, Math.floor(banked));
 let best: UpgradeTarget | null = null;
 for (const track of MOD_TRACKS) {
  const level = mods[track];
  if (level >= UPGRADE.maxLevel) continue;
  const cost = upgradeCost(level);
  if (!Number.isFinite(cost)) continue;
  const short = Math.max(0, cost - have);
  const ready = short === 0;
  const almost = !ready && isAlmostShort(short, cost);
  const cand: UpgradeTarget = { track, nextLevel: level + 1, cost, have, short, ready, almost };
  if (!best || cand.cost < best.cost || (cand.cost === best.cost && cand.short < best.short)) best = cand;
 }
 return best;
}

/** HUD / bank / dive-end copy for the next unfinished buy. */
export function almostUpgradeLine(mods: RifleMods, banked: number, hasGun: boolean): string | null {
 const t = nextUpgradeTarget(mods, banked, hasGun);
 if (!t) return null;
 const name = UPGRADE.shopNames[t.track];
 if (t.ready) return `${name} ready — open the hatch (E) and press BUY.`;
 if (t.almost) return `${fmtShopGold(t.short)} short of ${name}.`;
 return null;
}

/** Bank-pop suffix: " · $140 TO HARDER HITS" / " · BUY HARDER HITS NOW". */
export function bankAlmostSuffix(mods: RifleMods, banked: number, hasGun: boolean): string {
 const t = nextUpgradeTarget(mods, banked, hasGun);
 if (!t) return '';
 const name = UPGRADE.shopNames[t.track].toUpperCase();
 if (t.ready) return ` · BUY ${name} NOW`;
 if (t.almost) return ` · ${fmtShopGold(t.short)} TO ${name}`;
 return '';
}

/** Loud Skinner pull copy for the unfinished buy (center banner + side shout). */
export type SkinnerPullCopy = {
 kind: 'ready' | 'almost';
 /** Huge center-screen line. */
 center: string;
 /** Persistent edge shout. */
 side: string;
 track: ModTrack;
 short: number;
 cost: number;
 have: number;
};

export function skinnerPullCopy(mods: RifleMods, banked: number, hasGun: boolean): SkinnerPullCopy | null {
 const t = nextUpgradeTarget(mods, banked, hasGun);
 if (!t) return null;
 if (t.ready) {
  return {
   kind: 'ready',
   center: `${UPGRADE.shopNames[t.track].toUpperCase()} READY — BUY AT THE HATCH!`,
   side: 'UPGRADE NOW',
   track: t.track,
   short: 0,
   cost: t.cost,
   have: t.have,
  };
 }
 if (t.almost) {
  return {
   kind: 'almost',
   center: `ONLY ${fmtShopGold(t.short)} MORE UNTIL UPGRADE!`,
   side: 'UPGRADE NOW',
   track: t.track,
   short: t.short,
   cost: t.cost,
   have: t.have,
  };
 }
 return null;
}

// ── Banked gold (persists with the stash) ─────────────────────────────────────────────

export const GOLD_STORAGE_KEY = 'painted-abyss.gold';
export function readBankedGold() {
 try { const v = Number(globalThis.localStorage?.getItem(GOLD_STORAGE_KEY)); return Number.isFinite(v) && v > 0 ? Math.floor(v) : 0; } catch { return 0; }
}
export function writeBankedGold(grams: number) {
 try { globalThis.localStorage?.setItem(GOLD_STORAGE_KEY, String(Math.max(0, Math.floor(grams)))); } catch { /* private mode */ }
}
