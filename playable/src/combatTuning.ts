/**
 * Phase 4 — final addictive-combat constants (documented snapshot).
 *
 * Source of truth remains the live exports below; this module re-exports them and
 * pins the polish values so playtests / reviews share one table. Assists stay
 * silent and modest; survival tension (core hits, stash, ammo scarcity) intact.
 *
 * | System            | Constant                         | Value        | Intent |
 * |-------------------|----------------------------------|--------------|--------|
 * | Magnetism         | HITBOX_ASSIST.restBonus          | +14%         | Soft sticky rim at rest |
 * | Magnetism         | HITBOX_ASSIST.sprintBonus        | +30%         | Invisible sprint assist (was 35%) |
 * | Magnetism         | HITBOX_ASSIST.sprintSpeed        | 3.4 m/s      | = WALK_SPRINT |
 * | Graze bias        | SKIN_OF_TEETH.stillSpeed         | 0.40 m/s     | Aligned with style/graze still |
 * | Graze bias        | SKIN_OF_TEETH.maxGrazeBias       | 0.08         | Modest land-chance cut (was 0.10) |
 * | Graze bias        | SKIN_OF_TEETH.fullBiasSpeed      | WALK_SPEED   | Full bias at brisk walk |
 * | Style points      | scrape / graze / clean           | 70 / 80 / 60 | Honest CLEAN competitive with scrape |
 * | Style decay       | stillDrain                       | 72 pts/s     | Speed currency without aim-freeze panic |
 * | Style decay       | graceSeconds                     | 2.8 s        | Slightly longer fight breath |
 * | Callouts          | COMBAT_OUTCOME.calloutSeconds    | 0.60 s       | Less centre-screen linger |
 * | Streak ammo       | STREAK.ammoInterval              | 6 s          | Slower drip (was 5) |
 * | Streak ammo       | ammoRounds B/A/S/SS/SSS          | 1/1/1/2/2    | S no longer double-drips |
 * | Streak director   | delay B→SSS                      | 0.45…1.30 s  | Softer than 0.55…1.60 |
 * | Streak loot       | pickupRadiusBonus                | 0.22 m       | Modest (was 0.28) |
 * | Streak break      | shake / hitstop                  | 1.15 / 70 ms | Loud but fair, less nauseating |
 * | Calm combat       | prefers-reduced-motion           | on           | Soften shake/hitstop; hide SCRAPE/GRAZE callouts |
 */

export { HITBOX_ASSIST, playerVelocityMultiplier } from './playerPistol';
export { SKIN_OF_TEETH, PLAYER_CORE } from './simulation';
export { STYLE_TUNING, STYLE_RANKS } from './styleMeter';
export { COMBAT_OUTCOME } from './combatOutcomes';
export { STREAK, STREAK_REWARD_RANKS } from './styleStreak';
export {
  CALM_COMBAT,
  combatCalmActive,
  combatCalloutAllowed,
  calmShakeIntensity,
  calmShakeDuration,
  calmHitstopMs,
} from './combatCalm';
export { COMBAT_FEEDBACK } from './combatFeedback';

/** Pinned Phase 4 polish values — tests assert live exports match this table. */
export const COMBAT_POLISH = {
  magnetism: { restBonus: 0.14, sprintBonus: 0.3, sprintSpeed: 3.4 },
  graze: { stillSpeed: 0.4, maxGrazeBias: 0.08, minChance: 0.05 },
  style: { scrape: 70, graze: 80, clean: 60, stillDrain: 72, stillSpeed: 0.4, graceSeconds: 2.8 },
  calloutSeconds: 0.6,
  streak: {
    ammoInterval: 6,
    ammoRounds: { B: 1, A: 1, S: 1, SS: 2, SSS: 2 },
    directorDelay: { B: 0.45, A: 0.7, S: 1.0, SS: 1.15, SSS: 1.3 },
    pickupRadiusBonus: 0.22,
    breakShake: { intensity: 1.15, duration: 0.28 },
    breakHitstopMs: 70,
  },
} as const;
