/**
 * Staged guard scenes: guards caught in the middle of their shift, Hitman style.
 *
 * Three of the opening garrison are not standing on posts. In the entrance chamber the radio
 * operator sits at the desk writing up the log and calling "Берёза" on his headphones; in the
 * main cavern the quartermaster sits on a long crate by a supply stack with his tea while the
 * young conscript stands smoking and talking at him. While the scene runs they are distracted:
 * they see less far, over a narrower arc, and look at their work or at each other. Anything
 * that puts one on alert (seeing you, a squad call, a shot, a hit) breaks the scene for him:
 * he gets up and the normal AI takes over for good.
 *
 * This file is pure layout and tuning shared by the sim (positions, headings, senses) and
 * the renderer (seat, props, poses). World coordinates; heading 0 faces +Z, π/2 faces +X.
 */
import { SURVIVAL_COVER } from './survivalConfig';

export type GuardSceneId = 'radio' | 'teaSit' | 'teaTalk';

export type GuardSceneSlot = {
 id: GuardSceneId;
 /** Where the sim keeps him: open floor just off the cover he is using. */
 x: number; z: number;
 /** Which way he faces while the scene runs. */
 heading: number;
 /** Where his body is drawn while the scene runs (seat centre for a sitter). */
 visual: { x: number; z: number; heading: number };
 /** Seat surface height above the floor (m), null when he stands. */
 seat: number | null;
 /** Partner he talks to / looks at, if any. */
 partner: GuardSceneId | null;
};

export const SCENE_SENSES = {
 /** Pick-up distances shrink to this share while he is busy. */
 sight: .55,
 /** His field of view narrows to this half angle (rad) around what he is looking at. */
 fovHalf: .8,
 /** A sprinting diver is heard from this far (m) instead of the usual 13. */
 hearSprint: 9,
 /** Seconds to get up and get his rifle off his shoulder once the scene breaks: no move, no shot. */
 getUpSeated: 1.1,
 getUpStanding: .6,
} as const;

/** Seconds a guard needs to recover from his scene once it breaks. */
export function sceneGetUp(id: GuardSceneId) { return id === 'teaTalk' ? SCENE_SENSES.getUpStanding : SCENE_SENSES.getUpSeated; }

/** Radio desk yaw, as survivalFx builds the desk. */
export const deskYaw = (x: number, z: number) => x * .13 + z * .09;

/** Desk-local point (x along the desk, z toward the operator's side) to world. */
function deskToWorld(dx: number, dz: number, lx: number, lz: number, yaw: number) {
 return { x: dx + lx * Math.cos(yaw) + lz * Math.sin(yaw), z: dz - lx * Math.sin(yaw) + lz * Math.cos(yaw) };
}

/** Radio operator's stool, desk-local (m): pulled out on the operator side, left of centre. */
export const OPERATOR_STOOL = { x: -.18, z: .62, height: .45 } as const;
/** The crate stack in the main cavern where the quartermaster takes his tea. */
export const TEA_SITE = { x: 18, z: -70 } as const;
/** The long crate the quartermaster sits on: along the east face of the issue stack. */
export const TEA_BENCH = { gap: .03, width: .53, length: 1.17, height: .47 } as const;

let cache: GuardSceneSlot[] | null = null;

/** The staged scenes in spawn order (radio, teaSit, teaTalk). */
export function guardScenes(): GuardSceneSlot[] {
 if (cache) return cache;
 const desk = SURVIVAL_COVER.find(c => c.kind === 'desk' && c.x === -10 && c.z === -18) ?? SURVIVAL_COVER.find(c => c.kind === 'desk')!;
 const yaw = deskYaw(desk.x, desk.z);
 // He faces the desk: desk-local −Z.
 const opHeading = yaw + Math.PI;
 const stool = deskToWorld(desk.x, desk.z, OPERATOR_STOOL.x, OPERATOR_STOOL.z, yaw);
 const opSim = deskToWorld(desk.x, desk.z, OPERATOR_STOOL.x, 1.02, yaw);
 const stack = SURVIVAL_COVER.find(c => c.kind === 'crates' && c.x === TEA_SITE.x && c.z === TEA_SITE.z) ?? SURVIVAL_COVER.find(c => c.kind === 'crates')!;
 const benchX = stack.x + stack.hx + TEA_BENCH.gap + TEA_BENCH.width / 2;
 cache = [
  { id: 'radio', x: opSim.x, z: opSim.z, heading: opHeading, visual: { x: stool.x, z: stool.z, heading: opHeading }, seat: OPERATOR_STOOL.height, partner: null },
  // Back to the stack, facing out into the room and at the conscript.
  { id: 'teaSit', x: benchX + .62, z: stack.z + .05, heading: Math.PI / 2 - .12, visual: { x: benchX + .04, z: stack.z + .05, heading: Math.PI / 2 - .12 }, seat: TEA_BENCH.height, partner: 'teaTalk' },
  { id: 'teaTalk', x: benchX + 1.75, z: stack.z + .35, heading: -Math.PI / 2 - .25, visual: { x: benchX + 1.75, z: stack.z + .35, heading: -Math.PI / 2 - .25 }, seat: null, partner: 'teaSit' },
 ];
 return cache;
}

export function guardScene(id: GuardSceneId) { return guardScenes().find(s => s.id === id)!; }

/** Bench pose for the dressing: world centre and size of the long crate. */
export function teaBench() {
 const stack = SURVIVAL_COVER.find(c => c.kind === 'crates' && c.x === TEA_SITE.x && c.z === TEA_SITE.z) ?? SURVIVAL_COVER.find(c => c.kind === 'crates')!;
 return { x: stack.x + stack.hx + TEA_BENCH.gap + TEA_BENCH.width / 2, z: stack.z, stack };
}
