/**
 * Kill loot: variable-ratio (VR) schedule on the kill operant — Ferster & Skinner.
 *
 * Obsession = unpredictable + still possible, not a generous hit rate. Roughly
 * VR10 on real pellets (scrap→jackpot ≈ 10% of kills): most presses dry, the next
 * one might pay, and nothing teaches "it never pays now" (no pity telegraph).
 * Near-miss / LDW is stage-two theater on scrap, not a payout guarantee.
 *
 * Ultra-rare `mega` (~0.5%): lottery slime-burst theater — fat gold scatter,
 * kit rifle + a free mod pip. Opaque; no pity telegraph.
 *
 * Outside the schedule (always):
 *  - the Soviet key on the main officer
 *  - rifle / gold a guard stole off your corpse
 */
import type { GuardRole } from './survivalConfig';
import { RIFLE, rollDropCondition } from './rifleCondition';
import { GOLD, MOD_TRACKS, noMods, type RifleMods } from './gold';

export type KillLootBucket = 'dry' | 'ammo' | 'scrap' | 'field' | 'prize' | 'jackpot' | 'mega';

/**
 * Classical cue kind for audio / notice / glow. `near_miss` is a scrap payout that
 * reads almost prize-grade (LDW theater) — still below `RIFLE.keepCond`.
 */
export type KillLootCue =
  | 'dry'
  | 'ammo'
  | 'scrap'
  | 'near_miss'
  | 'field'
  | 'prize'
  | 'jackpot'
  | 'mega';

/** Bucket order used when walking the weight table (stable, low → high payoff). */
export const KILL_LOOT_BUCKETS: readonly KillLootBucket[] = [
  'dry',
  'ammo',
  'scrap',
  'field',
  'prize',
  'jackpot',
  'mega',
] as const;

export const KILL_LOOT = {
  /**
   * Relative weights (sum 100). Opaque VR table — not a UI %.
   * Real pellets (scrap→jackpot) ≈ 10% → ~VR10. Ammo strips ≈ 5% lean theater.
   * Mega lottery ≈ 0.5%. Dry ≈ 84.5%. Next kill might still pay; no fixed cadence.
   */
  weights: {
    dry: 84.5,
    ammo: 5,
    scrap: 6,
    field: 2,
    prize: 1,
    jackpot: 1,
    mega: 0.5,
  } as Record<KillLootBucket, number>,
  /** Ammo-only mag fill: lean strip, never a keep-worthy rifle. */
  ammoRoundsShare: [0.08, 0.20] as [number, number],
  /**
   * Mag fill on paying kills (scrap→jackpot). Leaner than a half-mag so corpses
   * are not a second free ammo channel — strip, don't restock.
   */
  payRoundsShare: [0.10, 0.28] as [number, number],
  /** Mega lottery mag fill — fat strip, still not infinite free feed. */
  megaRoundsShare: [0.55, 0.95] as [number, number],
  /** Ammo-only condition cap — scrap-tier frame you strip and leave. */
  ammoCondCap: 0.42,
  /** Scrap gold (grams). */
  scrapGold: [40, 120] as [number, number],
  /** Field gold (grams). */
  fieldGold: [100, 280] as [number, number],
  /** Prize gold (grams) — pocket coins, not a free floor bar. */
  prizeGold: [200, 450] as [number, number],
  /**
   * Kill jackpot: whole kilobars on the corpse (need E). Replaces free world bars.
   * [min, max] bar count → grams = bars * GOLD.barGrams.
   */
  jackpotBars: [1, 2] as [number, number],
  /** Mega lottery kilobar scatter (need E). */
  megaBars: [4, 6] as [number, number],
  /** Mega lottery scoopable coin spray (grams). */
  megaCoins: [200, 500] as [number, number],
  /** Scrap condition never reaches a prize keep. */
  scrapCondCap: 0.48,
  /** Share of scrap kills that stage a near-miss frame (almost keepCond). */
  nearMissChance: 0.35,
  /**
   * Near-miss condition: warm glow, reads "almost a keeper", always below keepCond.
   * Small scrap gold still drops with it (LDW — win theater, scrap purse).
   */
  nearMissCond: [RIFLE.keepCond - 0.08, RIFLE.keepCond - 0.01] as [number, number],
  /** Rare non-officer prize band: at/above keepCond, always below kit. */
  luckyPrize: [RIFLE.keepCond, RIFLE.kitCond - 0.02] as [number, number],
  /**
   * Pity disabled (shift 0). A drought→payday nudge teaches "it never pays now,
   * then it must" — the opposite of VR. emptyStreak is still counted for tests /
   * telemetry; it must not change the schedule.
   */
  pityAfter: 999,
  pityShiftPer: 0,
  pityMaxShift: 0,
  /** HUD classical flash lifetime (s). Dry still flashes — empty ≠ silent. */
  hudFlashSeconds: 0.55,
  /** Mega lottery HUD flash — longer jackpot theater. */
  megaHudFlashSeconds: 1.6,
} as const;

/** Centre HUD label per classical cue. Short, plain — dry must still shout. */
export const KILL_LOOT_HUD_LABEL: Record<KillLootCue, string> = {
  dry: 'EMPTY',
  ammo: 'ROUNDS',
  scrap: 'COINS',
  near_miss: 'ALMOST',
  field: 'PURSE',
  prize: 'KEEPER',
  jackpot: 'JACKPOT',
  mega: 'MEGA JACKPOT',
};

/** FeedbackKind for inventory pulse: dry feels blocked; everything else is a hit. */
export function killLootFeedback(kind: KillLootCue): 'ok' | 'blocked' {
  return kind === 'dry' ? 'blocked' : 'ok';
}

export function killLootHudLabel(kind: KillLootCue): string {
  return KILL_LOOT_HUD_LABEL[kind];
}

/** Empty schedule payout: nothing worth taking (no gold, no keep-worthy gun). */
export function isEmptyKillLoot(bucket: KillLootBucket): boolean {
  return bucket === 'dry' || bucket === 'ammo';
}

export type KillLootRoll = {
  bucket: KillLootBucket;
  dropGun: boolean;
  dropGold: boolean;
  /** Rifle condition when `dropGun`. */
  cond: number;
  /** Magazine rounds before streak bias when `dropGun`. */
  rounds: number;
  /** Total gold grams (bars + coins) for HUD / audio. */
  goldGrams: number;
  /** Scrap staged as almost-prize (never a real keep). */
  nearMiss: boolean;
  /** Whole kilobars to scatter as separate E pickups (mega). */
  barCount: number;
  /** Scoopable coin spray grams (mega). */
  coinGrams: number;
  /** Upgrades fitted to the dropped rifle (mega free mod pip). */
  mods?: RifleMods;
};

const weightTotalOf = (weights: Record<KillLootBucket, number>) =>
  KILL_LOOT_BUCKETS.reduce((s, b) => s + weights[b], 0);

/**
 * Effective bucket weights. Pity is off (`pityMaxShift` 0) so a dry streak never
 * becomes a reliable payday signal — every kill stays the same opaque VR draw.
 */
export function killLootWeights(emptyStreak = 0): Record<KillLootBucket, number> {
  const w = { ...KILL_LOOT.weights };
  if (KILL_LOOT.pityMaxShift <= 0 || emptyStreak < KILL_LOOT.pityAfter) return w;
  const steps = emptyStreak - KILL_LOOT.pityAfter + 1;
  const shift = Math.min(KILL_LOOT.pityMaxShift, steps * KILL_LOOT.pityShiftPer);
  if (shift <= 0) return w;
  // Peel dry first, then ammo — keep relative prize/jackpot rarity.
  let left = shift;
  const fromDry = Math.min(w.dry, left);
  w.dry -= fromDry;
  left -= fromDry;
  const fromAmmo = Math.min(w.ammo, left);
  w.ammo -= fromAmmo;
  const moved = fromDry + fromAmmo;
  const toScrap = Math.round(moved * 0.6);
  w.scrap += toScrap;
  w.field += moved - toScrap;
  return w;
}

/** Pick a bucket from unit random in [0, 1). Exported for tests. */
export function selectKillLootBucket(unit: number, emptyStreak = 0): KillLootBucket {
  const weights = killLootWeights(emptyStreak);
  const u = Math.min(Math.max(unit, 0), 0.999999);
  let t = u * weightTotalOf(weights);
  for (const b of KILL_LOOT_BUCKETS) {
    t -= weights[b];
    if (t < 0) return b;
  }
  return 'mega';
}

const lerp = (band: readonly [number, number], unit: number) =>
  band[0] + (band[1] - band[0]) * unit;

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

function rollAmmoCond(role: GuardRole, rand: () => number) {
  const base = rollDropCondition(role, rand);
  return Math.min(base, KILL_LOOT.ammoCondCap);
}

function rollScrapCond(role: GuardRole, rand: () => number) {
  const base = rollDropCondition(role, rand);
  return Math.min(base, KILL_LOOT.scrapCondCap);
}

function rollFieldCond(role: GuardRole, rand: () => number) {
  const c = rollDropCondition(role, rand);
  // Field pays a usable rifle, never a prize keep.
  return clamp(c, 0.36, Math.min(RIFLE.keepCond - 0.02, 0.62));
}

function rollPrizeCond(role: GuardRole, rand: () => number) {
  if (role === 'officer') return rollDropCondition('officer', rand);
  return lerp(KILL_LOOT.luckyPrize, rand());
}

function rollJackpotCond(role: GuardRole, rand: () => number) {
  // Half the time a prize frame rides with the fat purse.
  if (rand() < 0.5) return rollPrizeCond(role, rand);
  return rollFieldCond(role, rand);
}

function rollRounds(magazine: number, share: readonly [number, number], rand: () => number) {
  return Math.max(1, Math.round(magazine * lerp(share, rand())));
}

/** Inclusive bar count in a [lo, hi] band. */
function rollBarCount(band: readonly [number, number], rand: () => number) {
  const [lo, hi] = band;
  return lo + Math.floor(rand() * (hi - lo + 1));
}

/** Inclusive bar count in `KILL_LOOT.jackpotBars`. */
function rollJackpotBars(rand: () => number) {
  return rollBarCount(KILL_LOOT.jackpotBars, rand);
}

/** Gram band for a kill jackpot (whole kilobars). */
export const killJackpotGoldBand = (): [number, number] => [
  KILL_LOOT.jackpotBars[0] * GOLD.barGrams,
  KILL_LOOT.jackpotBars[1] * GOLD.barGrams,
];

/** Gram band for a mega lottery (bars + coins). */
export const killMegaGoldBand = (): [number, number] => [
  KILL_LOOT.megaBars[0] * GOLD.barGrams + KILL_LOOT.megaCoins[0],
  KILL_LOOT.megaBars[1] * GOLD.barGrams + KILL_LOOT.megaCoins[1],
];

/** One free mod pip on a random track — mega lottery upgrade pellet. */
function rollMegaMods(rand: () => number): RifleMods {
  const mods = noMods();
  const track = MOD_TRACKS[Math.floor(rand() * MOD_TRACKS.length)]!;
  mods[track] = 1;
  return mods;
}

/** Map a schedule roll to the classical cue the renderer / audio should play. */
export function killLootCueFor(roll: KillLootRoll): KillLootCue {
  if (roll.nearMiss) return 'near_miss';
  return roll.bucket;
}

/**
 * Roll kill loot for one downed guard. Stolen corpse returns and the Soviet key
 * are applied by the caller — they are not part of this schedule.
 */
export function rollKillLoot(
  role: GuardRole,
  magazine: number,
  rand: () => number,
  emptyStreak = 0,
): KillLootRoll {
  const bucket = selectKillLootBucket(rand(), emptyStreak);
  const empty: KillLootRoll = {
    bucket,
    dropGun: false,
    dropGold: false,
    cond: 0,
    rounds: 0,
    goldGrams: 0,
    nearMiss: false,
    barCount: 0,
    coinGrams: 0,
  };

  switch (bucket) {
    case 'dry':
      return empty;
    case 'ammo':
      return {
        bucket,
        dropGun: true,
        dropGold: false,
        cond: rollAmmoCond(role, rand),
        rounds: rollRounds(magazine, KILL_LOOT.ammoRoundsShare, rand),
        goldGrams: 0,
        nearMiss: false,
        barCount: 0,
        coinGrams: 0,
      };
    case 'scrap': {
      // Near-miss theater: scrap purse + a frame that almost clears keepCond.
      const nearMiss = rand() < KILL_LOOT.nearMissChance;
      const cond = nearMiss
        ? lerp(KILL_LOOT.nearMissCond, rand())
        : rollScrapCond(role, rand);
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond,
        rounds: rollRounds(magazine, KILL_LOOT.payRoundsShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.scrapGold, rand())),
        nearMiss,
        barCount: 0,
        coinGrams: 0,
      };
    }
    case 'field':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollFieldCond(role, rand),
        rounds: rollRounds(magazine, KILL_LOOT.payRoundsShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.fieldGold, rand())),
        nearMiss: false,
        barCount: 0,
        coinGrams: 0,
      };
    case 'prize':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollPrizeCond(role, rand),
        rounds: rollRounds(magazine, KILL_LOOT.payRoundsShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.prizeGold, rand())),
        nearMiss: false,
        barCount: 0,
        coinGrams: 0,
      };
    case 'jackpot': {
      const bars = rollJackpotBars(rand);
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollJackpotCond(role, rand),
        rounds: rollRounds(magazine, KILL_LOOT.payRoundsShare, rand),
        goldGrams: bars * GOLD.barGrams,
        nearMiss: false,
        barCount: 0,
        coinGrams: 0,
      };
    }
    case 'mega': {
      const bars = rollBarCount(KILL_LOOT.megaBars, rand);
      const coins = Math.round(lerp(KILL_LOOT.megaCoins, rand()));
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: RIFLE.kitCond,
        rounds: rollRounds(magazine, KILL_LOOT.megaRoundsShare, rand),
        goldGrams: bars * GOLD.barGrams + coins,
        nearMiss: false,
        barCount: bars,
        coinGrams: coins,
        mods: rollMegaMods(rand),
      };
    }
  }
}
