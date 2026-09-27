/**
 * Calm combat / reduced-flash path (Phase 4).
 *
 * Respects `prefers-reduced-motion: reduce` — no full options menu.
 * Softens shake + hitstop, and hides spammy SCRAPE / GRAZE centre callouts.
 * Scoring, magnetism, and streak economy stay on; only presentation is quieter.
 */

import type { CombatTag } from './combatOutcomes';

/** Scales applied when the OS asks for reduced motion. */
export const CALM_COMBAT = {
  shakeScale: 0.32,
  shakeDurationScale: 0.55,
  hitstopScale: 0.45,
  /** Cap so even kill freezes stay brief under calm mode. */
  hitstopCapMs: 55,
  /** Centre callouts that stay visible under calm (named peaks only). */
  calloutAllow: ['HEAD', 'MULTI'] as const satisfies readonly CombatTag[],
} as const;

/** True when the user agent prefers reduced motion (SSR / tests → false). */
export function combatCalmActive(): boolean {
  if (typeof globalThis.matchMedia !== 'function') return false;
  try {
    return globalThis.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

/** Whether a scored tag should shout a centre callout under the current calm state. */
export function combatCalloutAllowed(tag: CombatTag, calm = combatCalmActive()): boolean {
  if (tag === 'CLEAN') return false;
  if (!calm) return true;
  return (CALM_COMBAT.calloutAllow as readonly string[]).includes(tag);
}

/** Scale shake intensity for calm combat (pure helper for tests). */
export function calmShakeIntensity(intensity: number, calm = combatCalmActive()): number {
  return calm ? intensity * CALM_COMBAT.shakeScale : intensity;
}

/** Scale shake duration for calm combat (pure helper for tests). */
export function calmShakeDuration(duration: number, calm = combatCalmActive()): number {
  return calm ? duration * CALM_COMBAT.shakeDurationScale : duration;
}

/** Scale hitstop ms for calm combat. Allocation-free. */
export function calmHitstopMs(ms: number, calm = combatCalmActive()): number {
  if (!calm) return ms;
  return Math.min(ms * CALM_COMBAT.hitstopScale, CALM_COMBAT.hitstopCapMs);
}
