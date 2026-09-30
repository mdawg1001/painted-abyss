/**
 * Phase 3 streak economy — payoffs while style rank is high (B / A / S+).
 *
 * Pure (no THREE / DOM). Mission syncs the live style tier each tick. Free ammo
 * drip is OFF (Skinner: strip corpses / stash for rounds). Streak still softens
 * director pressure and biases kill-loot mags. One solid core hit breaks the
 * streak loudly; death can urge a corpse-recovery run.
 */

import { STYLE_RANKS, type StyleRank } from './styleMeter';

/** Ranks that unlock streak payoffs (B and above). */
export const STREAK_REWARD_RANKS = ['B', 'A', 'S', 'SS', 'SSS'] as const;
export type StreakRewardRank = (typeof STREAK_REWARD_RANKS)[number];

export const STREAK = {
  /** Style tier index of B (STYLE_RANKS). */
  rewardMinTier: 2,
  /** Seconds between ammo drips while streaking — unused while ammoRounds are 0. */
  ammoInterval: 6,
  /**
   * Free streak ammo drip — zeroed. Ammo comes from kill strips / stash / scarce boxes.
   * Keep the keys so tests and applyAmmoDrip stay wired if we ever re-enable.
   */
  ammoRounds: { B: 0, A: 0, S: 0, SS: 0, SSS: 0 } as Record<StreakRewardRank, number>,
  /** Prefer topping the magazine when it is below this fill fraction. */
  magPreferBelow: 0.55,
  /** Extra seconds added to the next reinforcement wait while streaking. */
  directorDelay: { B: 0.45, A: 0.7, S: 1.0, SS: 1.15, SSS: 1.3 } as Record<StreakRewardRank, number>,
  /** Hunting-target relief at S+ only (never below 1 live hunter when pressure is on). */
  directorTargetSoft: { B: 0, A: 0, S: 1, SS: 1, SSS: 1 } as Record<StreakRewardRank, number>,
  /** Flat extra rounds on a downed guard's dropped mag while streaking. */
  lootRoundsBonus: { B: 1, A: 1, S: 2, SS: 2, SSS: 2 } as Record<StreakRewardRank, number>,
  /** Extra walk-over pickup radius (m) for ammo / stripped mags while streaking. */
  pickupRadiusBonus: 0.22,
  /** Any real HP damage at or above this breaks a live streak (core hit). */
  coreBreakMinDamage: 1,
  /** Centre callout lifetime for STREAK BROKEN (s). */
  breakCalloutSeconds: 1.55,
  /** One-line death urge — notice only, not a permanent HUD widget. */
  deathUrge: 'STREAK BROKEN — recover the corpse',
  /** Loud-but-fair break juice (CaveWorld samples these). */
  breakShake: { intensity: 1.15, duration: 0.28 },
  breakHitstopMs: 70,
} as const;

export function streakRewardRank(tier: number): StreakRewardRank | null {
  if (tier < STREAK.rewardMinTier || tier >= STYLE_RANKS.length) return null;
  const rank = STYLE_RANKS[tier] as StyleRank;
  return (STREAK_REWARD_RANKS as readonly string[]).includes(rank) ? (rank as StreakRewardRank) : null;
}

export function streakRewardsActive(tier: number): boolean {
  return streakRewardRank(tier) !== null;
}

export function streakAmmoDrip(tier: number): number {
  const r = streakRewardRank(tier);
  return r ? STREAK.ammoRounds[r] : 0;
}

export function streakDirectorDelay(tier: number): number {
  const r = streakRewardRank(tier);
  return r ? STREAK.directorDelay[r] : 0;
}

export function streakDirectorTargetSoft(tier: number): number {
  const r = streakRewardRank(tier);
  return r ? STREAK.directorTargetSoft[r] : 0;
}

export function streakLootRoundsBonus(tier: number): number {
  const r = streakRewardRank(tier);
  return r ? STREAK.lootRoundsBonus[r] : 0;
}

export function streakPickupRadiusBonus(tier: number): number {
  return streakRewardsActive(tier) ? STREAK.pickupRadiusBonus : 0;
}

export function isCoreStreakBreak(damage: number): boolean {
  return damage >= STREAK.coreBreakMinDamage;
}

/**
 * Runtime streak state owned by Mission. Sync `tier` from the CaveWorld style meter
 * each frame; tick ammo; note core hits and deaths.
 */
export class StyleStreak {
  /** Live style tier (−1 = empty). Synced from StyleMeter. */
  tier = -1;
  /** Mission time of the last ammo drip (−Infinity = never). */
  lastAmmoAt = -Infinity;
  /** Mission time of the latest streak break (−1 = none this life). */
  brokenAt = -1;
  /** True after a mid-streak death until the respawn urge is consumed. */
  private deathUrgePending = false;
  /** Whether rewards were active on the last sync (for break / death detection). */
  private wasRewarding = false;
  /** Gates rewards off immediately on break until style drops below B. */
  private brokenLock = false;

  syncTier(tier: number) {
    this.tier = tier;
    if (this.brokenLock && !streakRewardsActive(tier)) this.brokenLock = false;
    this.wasRewarding = streakRewardsActive(tier) && !this.brokenLock;
  }

  get rewarding() {
    return !this.brokenLock && streakRewardsActive(this.tier);
  }

  /**
   * Real core damage while rewards were live → streak break.
   * Caller applies StyleMeter.breakStreak() / HP. Returns true when this hit broke it.
   */
  noteCoreHit(amount: number, now: number): boolean {
    if (!isCoreStreakBreak(amount)) return false;
    if (!this.wasRewarding && !this.rewarding) return false;
    this.brokenAt = now;
    this.brokenLock = true;
    this.wasRewarding = false;
    this.lastAmmoAt = -Infinity;
    return true;
  }

  /**
   * Grant ammo drip rounds when due. Returns 0 when gated off / interval not elapsed.
   * Does not mutate mag/reserve — Mission applies the grant.
   */
  tickAmmo(now: number): number {
    if (!this.rewarding) return 0;
    if (!(now - this.lastAmmoAt >= STREAK.ammoInterval)) return 0;
    const n = streakAmmoDrip(this.tier);
    if (n <= 0) return 0;
    this.lastAmmoAt = now;
    return n;
  }

  /**
   * Death while streaking → clear rewards and queue the one-line corpse urge.
   * A killing blow that just broke the streak still counts as mid-streak death.
   */
  noteDeath(now = 0) {
    const justBroke = this.brokenAt >= 0 && now - this.brokenAt < 0.08;
    if (this.wasRewarding || this.rewarding || justBroke) this.deathUrgePending = true;
    this.tier = -1;
    this.wasRewarding = false;
    this.brokenLock = false;
    this.lastAmmoAt = -Infinity;
    this.brokenAt = -1;
  }

  /** Pop the death urge once (respawn). */
  consumeDeathUrge(): string | null {
    if (!this.deathUrgePending) return null;
    this.deathUrgePending = false;
    return STREAK.deathUrge;
  }

  reset() {
    this.tier = -1;
    this.lastAmmoAt = -Infinity;
    this.brokenAt = -1;
    this.deathUrgePending = false;
    this.wasRewarding = false;
    this.brokenLock = false;
  }
}

/**
 * Prefer topping a low magazine; otherwise drip into reserve.
 * Caps at maxMag / reserveMax so the stash stays meaningful.
 */
export function applyAmmoDrip(
  pistol: { mag: number; maxMag: number; reserve: number },
  rounds: number,
  reserveMax: number,
): { mag: number; reserve: number; applied: number } {
  if (rounds <= 0) return { mag: pistol.mag, reserve: pistol.reserve, applied: 0 };
  let left = rounds;
  let mag = pistol.mag;
  let reserve = pistol.reserve;
  const magRoom = Math.max(0, pistol.maxMag - mag);
  const preferMag = pistol.maxMag > 0 && mag / pistol.maxMag < STREAK.magPreferBelow;
  if (preferMag && magRoom > 0) {
    const take = Math.min(left, magRoom);
    mag += take;
    left -= take;
  }
  if (left > 0) {
    const room = Math.max(0, reserveMax - reserve);
    const take = Math.min(left, room);
    reserve += take;
    left -= take;
  }
  // Spill remaining into mag if reserve was full but mag still has room.
  if (left > 0) {
    const room = Math.max(0, pistol.maxMag - mag);
    const take = Math.min(left, room);
    mag += take;
    left -= take;
  }
  return { mag, reserve, applied: rounds - left };
}
