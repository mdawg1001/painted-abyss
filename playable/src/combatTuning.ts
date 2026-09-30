/**
 * Phase 4+ addictive-combat constants (documented snapshot).
 *
 * Source of truth remains the live exports below; this module re-exports them and
 * pins the polish values so playtests / reviews share one table. Assists stay
 * silent and modest; survival tension (core hits, stash, ammo scarcity) intact.
 *
 * | System            | Constant                         | Value        | Intent |
 * |-------------------|----------------------------------|--------------|--------|
 * | Magnetism         | HITBOX_ASSIST.restBonus          | +8%          | Soft sticky rim (secondary) |
 * | Magnetism         | HITBOX_ASSIST.sprintBonus        | +12%         | Soft sprint rim — not cartoon-fat |
 * | Magnetism         | HITBOX_ASSIST.restAngleDeg       | 0.4°         | Hairline cone at rest (ADS stays honest) |
 * | Magnetism         | HITBOX_ASSIST.sprintAngleDeg     | 2.0°         | Readable strafe scrapes at speed |
 * | Magnetism         | HITBOX_ASSIST.angleHardCapDeg    | 2.5°         | Never half-screen snaps |
 * | Magnetism         | HITBOX_ASSIST.movingScatterDamp  | 25%          | Tighter wear spread while sprinting |
 * | Magnetism         | HITBOX_ASSIST.sprintSpeed        | 3.4 m/s      | = WALK_SPRINT |
 * | Graze bias        | SKIN_OF_TEETH.stillSpeed         | 0.40 m/s     | Aligned with style/graze still |
 * | Graze bias        | SKIN_OF_TEETH.maxGrazeBias       | 0.24         | Hardened land-chance cut (was 0.08) |
 * | Graze bias        | SKIN_OF_TEETH.fullBiasSpeed      | WALK_SPEED   | Full bias at brisk walk |
 * | Player core       | PLAYER_CORE.visualRadius         | 0.55 m       | Thick visual / camera skim shell |
 * | Player core       | PLAYER_CORE.coreShrink           | 0.40         | Core = visual × shrink ∈ [0.30,0.50] |
 * | Player core       | projectileCoreRadius()           | 0.22 m       | Only volume that deals damage |
 * | Style points      | scrape / graze / clean           | 70 / 80 / 60 | Honest CLEAN competitive with scrape |
 * | Style decay       | stillDrain                       | 72 pts/s     | Speed currency without aim-freeze panic |
 * | Style decay       | graceSeconds                     | 2.8 s        | Slightly longer fight breath |
 * | Callouts          | COMBAT_OUTCOME.calloutSeconds    | 0.60 s       | Less centre-screen linger |
 * | Streak ammo       | STREAK.ammoInterval              | 6 s          | Interval kept; drip disabled |
 * | Streak ammo       | ammoRounds B/A/S/SS/SSS          | 0/0/0/0/0    | No free ammo — strip corpses |
 * | Streak director   | delay B→SSS                      | 0.45…1.30 s  | Softer than 0.55…1.60 |
 * | Streak loot       | pickupRadiusBonus                | 0.22 m       | Modest (was 0.28) |
 * | Streak break      | shake / hitstop                  | 1.15 / 70 ms | Loud but fair, less nauseating |
 * | Calm combat       | prefers-reduced-motion           | on           | Soften shake/hitstop; hide SCRAPE/GRAZE callouts |
 */

export {
  HITBOX_ASSIST,
  playerVelocityMultiplier,
  playerAssistAngle,
  magnetizeAim,
  movingScatterScale,
  rotateToward,
} from './playerPistol';
export { SKIN_OF_TEETH, PLAYER_CORE, EGO_SAVIOR, projectileCoreRadius, projectileDamagesPlayer, enemyRayHitsPlayerCore, grazeAimPoint, playerCoreCenter } from './simulation';
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

/** Pinned magnetism + polish values — tests assert live exports match this table. */
export const COMBAT_POLISH = {
  magnetism: {
    restBonus: 0.08,
    sprintBonus: 0.12,
    sprintSpeed: 3.4,
    restAngleDeg: 0.4,
    sprintAngleDeg: 2.0,
    angleHardCapDeg: 2.5,
    movingScatterDamp: 0.25,
  },
  graze: { stillSpeed: 0.4, maxGrazeBias: 0.24, minChance: 0.05 },
  core: { visualRadius: 0.55, coreShrink: 0.40, radius: 0.22, grazeShell: 0.28 },
  style: { scrape: 70, graze: 80, clean: 60, stillDrain: 72, stillSpeed: 0.4, graceSeconds: 2.8 },
  calloutSeconds: 0.6,
  streak: {
    ammoInterval: 6,
    ammoRounds: { B: 0, A: 0, S: 0, SS: 0, SSS: 0 },
    directorDelay: { B: 0.45, A: 0.7, S: 1.0, SS: 1.15, SSS: 1.3 },
    pickupRadiusBonus: 0.22,
    breakShake: { intensity: 1.15, duration: 0.28 },
    breakHitstopMs: 70,
  },
} as const;
