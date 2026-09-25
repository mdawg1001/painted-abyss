/**
 * Persistent bunker stash chest — small bank near the hatch.
 * Contents survive death, extract, dive-again, and full page reload via localStorage.
 * The ammonite relic cannot be stored (extract win condition).
 *
 * Keep this module free of value imports from simulation.ts (Mission loads stash).
 */
import { SURVIVAL } from './survivalConfig';

/** Visible capacity — not an infinite backpack. */
export const STASH_CAPACITY = 5;

export const STASH_STORAGE_KEY = 'painted-abyss.stash';

/**
 * Fixed dry alcove against the west hatch bulkhead.
 * Off the corridor gear centerline (x≈−2) and far from the relic / guard rooms.
 * y matches FLOOR_Y (0.65) in simulation.ts.
 */
export const STASH_POSITION = { x: -4.85, y: 0.65, z: 31.55 } as const;
/** Face east into the hatch corridor. */
export const STASH_YAW = Math.PI / 2;
/** Reach for open / store (m) — a step from the hatch spawn. */
export const STASH_REACH = 3.6;

/** Spare rounds moved in one Store-ammo press (matches a floor ammo box). */
export const STASH_AMMO_PACK = SURVIVAL.supplies.ammo;

/** Bankable inventory items — never the extract relic. */
export type StashItem =
 | 'stone'
 | 'wood'
 | 'flare'
 | 'air'
 | 'bandage'
 | 'knife'
 | 'gun'
 | 'bottle'
 | 'coat';

export type Item = StashItem | 'relic';

/** One chest slot: gear, or a spare-ammo pack (not inventoriable elsewhere). */
export type StashSlot =
 | { kind: 'item'; item: StashItem; rounds?: number }
 | { kind: 'ammo'; amount: number }
 | null;

export type StashCue = '' | 'open' | 'close' | 'deposit' | 'withdraw';

export function emptyStash(): StashSlot[] {
 return Array.from({ length: STASH_CAPACITY }, () => null);
}

export function isStashItem(item: Item): item is StashItem {
 return item !== 'relic';
}

export function stashSlotLabel(slot: StashSlot): string {
 if (!slot) return 'empty';
 if (slot.kind === 'ammo') return `${slot.amount} rounds`;
 if (slot.item === 'gun' && slot.rounds) return `TT-33 (+${slot.rounds})`;
 const names: Record<StashItem, string> = {
  knife: 'Diving knife',
  stone: 'Limestone',
  wood: 'Driftwood',
  flare: 'Signal flare',
  air: 'Pony bottle',
  bandage: 'Sealant kit',
  gun: 'TT-33 pistol',
  bottle: 'Spare air bottle',
  coat: 'Coat',
 };
 return names[slot.item];
}

function parseSlot(raw: unknown): StashSlot {
 if (!raw || typeof raw !== 'object') return null;
 const o = raw as Record<string, unknown>;
 if (o.kind === 'ammo' && typeof o.amount === 'number' && o.amount > 0) {
  return { kind: 'ammo', amount: Math.floor(o.amount) };
 }
 if (o.kind === 'item' && typeof o.item === 'string' && o.item !== 'relic') {
  const item = o.item as StashItem;
  const rounds = typeof o.rounds === 'number' && o.rounds > 0 ? Math.floor(o.rounds) : undefined;
  return rounds !== undefined ? { kind: 'item', item, rounds } : { kind: 'item', item };
 }
 // Legacy flat shape { item, rounds? }
 if (typeof o.item === 'string' && o.item !== 'relic' && o.kind !== 'ammo') {
  const item = o.item as StashItem;
  const rounds = typeof o.rounds === 'number' && o.rounds > 0 ? Math.floor(o.rounds) : undefined;
  return rounds !== undefined ? { kind: 'item', item, rounds } : { kind: 'item', item };
 }
 return null;
}

/** Load stash slots from localStorage (or empty if missing / corrupt). */
export function readStash(): StashSlot[] {
 const slots = emptyStash();
 try {
  const raw = globalThis.localStorage?.getItem(STASH_STORAGE_KEY);
  if (!raw) return slots;
  const data = JSON.parse(raw) as unknown;
  if (!Array.isArray(data)) return slots;
  for (let i = 0; i < STASH_CAPACITY; i++) slots[i] = parseSlot(data[i]);
 } catch {
  /* private mode / bad JSON */
 }
 return slots;
}

/** Persist stash slots. No-op when storage is unavailable. */
export function writeStash(slots: StashSlot[]) {
 try {
  const payload = slots.slice(0, STASH_CAPACITY).map((s) => {
   if (!s) return null;
   if (s.kind === 'ammo') return { kind: 'ammo', amount: s.amount };
   return s.rounds !== undefined
    ? { kind: 'item', item: s.item, rounds: s.rounds }
    : { kind: 'item', item: s.item };
  });
  while (payload.length < STASH_CAPACITY) payload.push(null);
  globalThis.localStorage?.setItem(STASH_STORAGE_KEY, JSON.stringify(payload));
 } catch {
  /* private mode */
 }
}

export function stashHasContents(slots: StashSlot[]) {
 return slots.some((s) => s !== null);
}

export function firstEmptyStashSlot(slots: StashSlot[]) {
 return slots.findIndex((s) => s === null);
}

export function firstFilledStashSlot(slots: StashSlot[]) {
 return slots.findIndex((s) => s !== null);
}
