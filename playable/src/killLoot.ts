/**
 * Stage-one kill loot: variable-ratio category + magnitude on the kill operant.
 *
 * Every downed guard rolls an opaque bucket (dry → jackpot). Paying buckets vary
 * how good the rifle is and how many grams fall with it. Dry kills pay nothing.
 *
 * Outside the schedule (always):
 *  - the Soviet key on the main officer
 *  - rifle / gold a guard stole off your corpse
 */
import type { GuardRole } from './survivalConfig';
import { RIFLE, rollDropCondition } from './rifleCondition';

export type KillLootBucket = 'dry' | 'ammo' | 'scrap' | 'field' | 'prize' | 'jackpot';

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
   * Roughly: ~1 in 5 dry, ~1 in 4 ammo-only, rare prize/jackpot.
   */
  weights: {
    dry: 20,
    ammo: 26,
    scrap: 24,
    field: 18,
    prize: 8,
    jackpot: 4,
  } as Record<KillLootBucket, number>,
  /** Ammo-only mag fill: short strip, never a keep-worthy rifle. */
  ammoRoundsShare: [0.12, 0.35] as [number, number],
  /** Ammo-only condition cap — scrap-tier frame you strip and leave. */
  ammoCondCap: 0.42,
  /** Scrap gold (grams). */
  scrapGold: [40, 120] as [number, number],
  /** Field gold (grams). */
  fieldGold: [100, 280] as [number, number],
  /** Prize gold (grams). */
  prizeGold: [200, 450] as [number, number],
  /** Jackpot gold (grams) — fat purse, any role. */
  jackpotGold: [600, 1400] as [number, number],
  /** Scrap condition never reaches a prize keep. */
  scrapCondCap: 0.48,
  /** Rare non-officer prize band: at/above keepCond, always below kit. */
  luckyPrize: [RIFLE.keepCond, RIFLE.kitCond - 0.02] as [number, number],
} as const;

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
};

const weightTotal = () =>
  KILL_LOOT_BUCKETS.reduce((s, b) => s + KILL_LOOT.weights[b], 0);

/** Pick a bucket from unit random in [0, 1). Exported for tests. */
export function selectKillLootBucket(unit: number): KillLootBucket {
  const u = Math.min(Math.max(unit, 0), 0.999999);
  let t = u * weightTotal();
  for (const b of KILL_LOOT_BUCKETS) {
    t -= KILL_LOOT.weights[b];
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

/**
 * Roll kill loot for one downed guard. Stolen corpse returns and the Soviet key
 * are applied by the caller — they are not part of this schedule.
 */
export function rollKillLoot(
  role: GuardRole,
  magazine: number,
  rand: () => number,
): KillLootRoll {
  const bucket = selectKillLootBucket(rand());
  const empty: KillLootRoll = {
    bucket,
    dropGun: false,
    dropGold: false,
    cond: 0,
    rounds: 0,
    goldGrams: 0,
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
      };
    case 'scrap':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollScrapCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.scrapGold, rand())),
      };
    case 'field':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollFieldCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.fieldGold, rand())),
      };
    case 'prize':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollPrizeCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.prizeGold, rand())),
      };
    case 'jackpot':
      return {
        bucket,
        dropGun: true,
        dropGold: true,
        cond: rollJackpotCond(role, rand),
        rounds: rollRounds(magazine, RIFLE.dropMagShare, rand),
        goldGrams: Math.round(lerp(KILL_LOOT.jackpotGold, rand())),
      };
  }
}
