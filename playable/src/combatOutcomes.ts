/**
 * Phase 2 scored combat outcomes — pure tags for SCRAPE / GRAZE / CLEAN / HEAD / MULTI.
 *
 * SCRAPE: player round that only lands because magnetism helped — angular cone pull
 *          and/or soft radius rim (assisted hitscan hits, honest pre-magnetism ray misses).
 * GRAZE:  enemy round that misses while the player is moving (skin-of-teeth path).
 * CLEAN:  solid unassisted body hit.
 * HEAD:   headshot (assisted or not — the helmet volume won).
 * MULTI:  second+ kill inside a short chain window.
 *
 * No Three.js / DOM. Simulation tags; CaveWorld / style meter juice them.
 */

import type { HitscanHit } from './playerPistol';

/** Named beats the HUD / style feed can shout. */
export type CombatTag = 'SCRAPE' | 'GRAZE' | 'CLEAN' | 'HEAD' | 'MULTI';

export const COMBAT_OUTCOME = {
  /** Horizontal speed (m/s) at or below which a guard miss is not a GRAZE. */
  grazeStillSpeed: 0.4,
  /** Seconds between kills that still count as MULTI. */
  multiWindow: 2.4,
  /** Style / callout seconds a pip stays readable (Phase 4: shorter to cut spam linger). */
  calloutSeconds: 0.6,
} as const;

/**
 * Tag a player→enemy hitscan that connected under magnetism.
 * Compare assisted vs unassisted results from the same ray.
 */
export function classifyPlayerHit(
 assisted: HitscanHit | null,
 unassisted: HitscanHit | null,
): CombatTag | null {
 if (!assisted) return null;
 // Magnetism-only contact: honest volumes miss → SCRAPE (never upgrade a scrape to HEAD).
 if (!unassisted || unassisted.id !== assisted.id) return 'SCRAPE';
 if (assisted.headshot) return 'HEAD';
 return 'CLEAN';
}

/** Enemy gun miss while the player is moving → GRAZE; standing still → null. */
export function classifyEnemyMiss(playerHorizontalSpeed: number): CombatTag | null {
 if (!(playerHorizontalSpeed > COMBAT_OUTCOME.grazeStillSpeed)) return null;
 return 'GRAZE';
}

/** True when this kill chains onto a prior kill inside `multiWindow`. */
export function isMultiKill(now: number, previousKillAt: number, window = COMBAT_OUTCOME.multiWindow): boolean {
 if (!(previousKillAt >= 0)) return false;
 return now - previousKillAt <= window;
}

/** Map a primary hit tag (+ optional multi) to style-meter action names. */
export function styleActionsForTag(tag: CombatTag, killed: boolean): Array<'scrape' | 'graze' | 'clean' | 'headshot' | 'multi' | 'kill' | 'headshotKill'> {
 if (tag === 'GRAZE') return ['graze'];
 if (tag === 'SCRAPE') return killed ? ['scrape', 'kill'] : ['scrape'];
 if (tag === 'HEAD') return killed ? ['headshotKill'] : ['headshot'];
 if (tag === 'MULTI') return ['multi'];
 // CLEAN
 if (killed) return ['clean', 'kill'];
 return ['clean'];
}
