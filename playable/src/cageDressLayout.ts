/**
 * Skinner rat-cage dress — pure layout (no THREE).
 *
 * Bolts Soviet industrial bars / mesh / observation slits / floor grates onto the
 * existing sparse service galleries and the neck choke. Does not expand catwalks
 * bunker-wide and does not touch hatch / breath / flood.
 *
 * Continues #211/#213 (operant economy) + #228 (grated galleries) with in-world
 * cage language the player can see and walk through immediately.
 */

/** Must match `FLOOR_Y` in simulation.ts. */
const FLOOR_Y = .65;

export type CageBarPanel = {
 /** World centre of the panel. */
 x: number; y: number; z: number;
 /** Width along local X (m), height (m). */
 w: number; h: number;
 /** World yaw (rad): panel faces +Z after yaw. */
 yaw: number;
 /** Vertical bar spacing (m). */
 spacing: number;
 /** Bar thickness (m). */
 thick: number;
 label: string;
};

export type CageMeshApron = {
 x: number; y: number; z: number;
 w: number; d: number;
 yaw: number;
 label: string;
};

export type CageFloorGrate = {
 x: number; z: number;
 w: number; d: number;
 yaw: number;
 label: string;
};

export type CageObsLamp = {
 x: number; y: number; z: number;
 /** Spot aim point on the floor approach. */
 aimX: number; aimZ: number;
 label: string;
};

/** Axis-aligned watched choke — ladder approaches + neck funnel. */
export type CageWatchedZone = {
 minX: number; maxX: number; minZ: number; maxZ: number;
 label: string;
};

/**
 * Observation slits / bar cages on memorable walls near the three galleries
 * and the approach neck — reads as lab observation, not dungeon bars.
 */
export function cageBarPanels(): CageBarPanel[] {
 const yMid = FLOOR_Y + 1.55;
 return [
  // West-hall gallery screens — lab observation slits beside the service walk.
  { x: -28.05, y: yMid, z: -49.5, w: 2.6, h: 1.35, yaw: Math.PI / 2, spacing: .14, thick: .035, label: 'wh-slit-a' },
  { x: -28.05, y: yMid, z: -54.5, w: 2.6, h: 1.35, yaw: Math.PI / 2, spacing: .14, thick: .035, label: 'wh-slit-b' },
  // West-hall ladder funnel — side cages that pinch the south approach.
  { x: -28.55, y: FLOOR_Y + 1.2, z: -46.4, w: 1.8, h: 2.2, yaw: Math.PI / 2, spacing: .16, thick: .04, label: 'wh-funnel-w' },
  { x: -25.85, y: FLOOR_Y + 1.2, z: -46.4, w: 1.8, h: 2.2, yaw: -Math.PI / 2, spacing: .16, thick: .04, label: 'wh-funnel-e' },
  // Neck choke — bar screens flanking the shelf + true corridor walls (expanded map).
  { x: -6.15, y: yMid, z: -34.5, w: 3.2, h: 1.2, yaw: Math.PI / 2, spacing: .13, thick: .032, label: 'nk-slit-shelf' },
  { x: -9.85, y: yMid, z: -34.5, w: 3.6, h: 1.35, yaw: Math.PI / 2, spacing: .13, thick: .032, label: 'nk-slit-w' },
  { x: 9.85, y: yMid, z: -34.5, w: 3.6, h: 1.35, yaw: -Math.PI / 2, spacing: .13, thick: .032, label: 'nk-slit-e' },
  // Pit-lip ladder approach — short bar screen east of the climb.
  { x: -11.2, y: FLOOR_Y + 1.15, z: -55.6, w: 2.4, h: 2.0, yaw: 0, spacing: .15, thick: .038, label: 'pit-funnel' },
 ];
}

/**
 * Wire mesh hung under grated decks — from the floor the catwalk reads as a
 * cage ceiling (rat-box roof), not a floating shelf.
 */
export function cageMeshAprons(): CageMeshApron[] {
 const under = FLOOR_Y + 3.05; // just under CATWALK_DECK_Y (3.85)
 return [
  { x: -27.2, y: under, z: -49.5, w: 1.45, d: 4.2, yaw: 0, label: 'wh-mesh-s' },
  { x: -27.2, y: under, z: -54.5, w: 1.45, d: 3.6, yaw: 0, label: 'wh-mesh-n' },
  { x: -24.0, y: under, z: -56.0, w: 4.4, d: 1.35, yaw: 0, label: 'wh-mesh-spur' },
  { x: -5.35, y: under, z: -35.0, w: 1.45, d: 5.2, yaw: 0, label: 'nk-mesh' },
  { x: -11.0, y: under, z: -58.0, w: 5.4, d: 1.35, yaw: 0, label: 'pit-mesh' },
 ];
}

/**
 * Floor grate patches — Skinner-box floor language in the choke approaches
 * (flush visual, not walkable support changes).
 */
export function cageFloorGrates(): CageFloorGrate[] {
 return [
  // West-hall ladder runway (south approach)
  { x: -27.2, z: -45.2, w: 1.5, d: 2.4, yaw: 0, label: 'wh-runway' },
  { x: -27.2, z: -43.0, w: 1.5, d: 2.0, yaw: 0, label: 'wh-runway-s' },
  // Neck choke floor
  { x: -3.35, z: -34.5, w: 4.6, d: 1.55, yaw: 0, label: 'nk-floor' },
  // Pit-lip climb pad
  { x: -13.0, z: -55.4, w: 1.6, d: 2.0, yaw: 0, label: 'pit-pad' },
 ];
}

/** Harsh cold observation lamps aimed at ladder / neck approaches. */
export function cageObsLamps(): CageObsLamp[] {
 return [
  { x: -27.2, y: FLOOR_Y + 4.6, z: -45.5, aimX: -27.2, aimZ: -46.8, label: 'wh-obs' },
  { x: -3.35, y: FLOOR_Y + 4.4, z: -34.5, aimX: -3.35, aimZ: -34.5, label: 'nk-obs' },
  { x: -13.0, y: FLOOR_Y + 4.5, z: -55.8, aimX: -13.0, aimZ: -56.4, label: 'pit-obs' },
 ];
}

/**
 * Watched chokes — entering telegraphs observation (lamp harden + one tip).
 * Kept tight so combat sight lines elsewhere stay unchanged.
 */
export function cageWatchedZones(): CageWatchedZone[] {
 return [
  { minX: -28.6, maxX: -25.6, minZ: -48.2, maxZ: -42.4, label: 'west-hall-approach' },
  { minX: -6.4, maxX: -.4, minZ: -37.2, maxZ: -30.6, label: 'neck-choke' },
  { minX: -14.2, maxX: -11.4, minZ: -57.2, maxZ: -54.6, label: 'pit-lip-approach' },
 ];
}

export function inCageWatchedZone(x: number, z: number): CageWatchedZone | null {
 for (const z0 of cageWatchedZones()) {
  if (x >= z0.minX && x <= z0.maxX && z >= z0.minZ && z <= z0.maxZ) return z0;
 }
 return null;
}

/** First-enter tip — plain, once per dive (CaveWorld / Mission.say). */
export const CAGE_WATCHED_TIP = 'Observed. Bars. Grate underfoot. Stay in the lane.';

export function cageDressStats() {
 return {
  barPanels: cageBarPanels().length,
  meshAprons: cageMeshAprons().length,
  floorGrates: cageFloorGrates().length,
  obsLamps: cageObsLamps().length,
  watchedZones: cageWatchedZones().length,
 };
}
