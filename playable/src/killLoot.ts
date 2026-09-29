/**
 * Kill loot: variable-ratio category + magnitude on the kill operant, plus stage-two
 * theater (near-miss / LDW cues) and stage-three soft pity.
 *
 * Every downed guard rolls an opaque bucket (dry → jackpot). Paying buckets vary
 * how good the rifle is and how many grams fall with it. Dry kills pay nothing.
 * After several empty kills in a row (dry / ammo-only), odds quietly shift toward
 * a real drop — no pity bar, still not a hard guarantee.
 *
 * Outside the schedule (always):
 *  - the Soviet key on the main officer
 *  - rifle / gold a guard stole off your corpse
 */
import type { GuardRole } from './survivalConfig';
import { RIFLE, rollDropCondition } from './rifleCondition';
import { GOLD } from './gold';

export type KillLootBucket = 'dry' | 'ammo' | 'scrap' | 'field' | 'prize' | 'jackpot';

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
  | 'jackpot';

/** Bucket order used when walking the weight table (stable, low → high payoff). */
export const KILL_LOOT_BUCKETS: readonly KillLootBucket[] = [
  'dry',
  'ammo',
  'scrap',
  'field',
  'prize',
  'jackpot',
] as const;

export const KILL_LOOT = {
  /**
   * Relative weights (sum 100). Opaque to the player — the schedule, not a UI %.
   * Rat cage: dry is the default (~3 in 5). Ammo strips are uncommon. Real gold
   * and keepers are rare; jackpot is a freak event.
   */
  weights: {
    dry: 58,
    ammo: 18,
    scrap: 12,
    field: 8,
    prize: 3,
    jackpot: 1,
  } as Record<KillLootBucket, number>,
  /** Ammo-only mag fill: short strip, never a keep-worthy rifle. */
  ammoRoundsShare: [0.12, 0.35] as [number, number],
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
   * Soft pity: after a long dry streak, nudge odds a little. Opaque — no UI.
   * Kept late and soft so empty stays the feeling, not a countdown to payday.
   */
  pityAfter: 6,
  /** Weight points moved from empty → paying per empty kill past the threshold. */
  pityShiftPer: 5,
  /** Cap on shifted weight — dry must still dominate even after a drought. */
  pityMaxShift: 20,
  /** HUD classical flash lifetime (s). Dry still flashes — empty ≠ silent. */
  hudFlashSeconds: 0.55,
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
  /** Pocket coins when `dropGold` (stolen corpse gold is added by the caller). */
  goldGrams: number;
  /** Scrap staged as almost-prize (never a real keep). */
  nearMiss: boolean;
};

const weightTotalOf = (weights: Record<KillLootBucket, number>) =>
  KILL_LOOT_BUCKETS.reduce((s, b) => s + weights[b], 0);

/**
 * Effective bucket weights after soft pity. `emptyStreak` is consecutive dry/ammo
 * kills; at/above `pityAfter`, weight peels off dry+ammo into scrap+field.
 */
export function killLootWeights(emptyStreak = 0): Record<KillLootBucket, number> {
  const w = { ...KILL_LOOT.weights };
  if (emptyStreak < KILL_LOOT.pityAfter) return w;
  const steps = emptyStreak - KILL_LOOT.pityAfter + 1;
  const shift = Math.min(KILL_LOOT.pityMaxShift, steps * KILL_LOOT.pityShiftPer);
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
  return 'jackpot';
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

/** Inclusive bar count in `KILL_LOOT.jackpotBars`. */
function rollJackpotBars(rand: () => number) {
  const [lo, hi] = KILL_LOOT.jackpotBars;
  return lo + Math.floor(rand() * (hi - lo + 1));
}

/** Gram band for a kill jackpot (whole kilobars). */
export const killJackpotGoldBand = (): [number, number] => [
  KILL_LOOT.jackpotBars[0] * GOLD.barGrams,
  KILL_LOOT.jackpotBars[1] * GOLD.barGrams,
];

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
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.scrapGold, rand())),
        nearMiss,
      };
    }
    case 'field':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollFieldCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.fieldGold, rand())),
        nearMiss: false,
      };
    case 'prize':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollPrizeCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.prizeGold, rand())),
        nearMiss: false,
      };
    case 'jackpot':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollJackpotCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        // Whole kilobars — needs E; the big kill score that replaced free floor bars.
        goldGrams: rollJackpotBars(rand) * GOLD.barGrams,
        nearMiss: false,
      };
  }
}
