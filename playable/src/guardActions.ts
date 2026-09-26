/**
 * One-shot guard actions from Kevin Iglesias "Human Melee Animations FREE" (Unity Asset Store,
 * standard EULA), retargeted onto the Quaternius guard rig by
 * `scripts/retarget-kevin-iglesias.mjs` into `public/assets/soviet-uniform/guard-actions.json`.
 *
 *  - death: full body; he drops to his knees and pitches forward, then stays down.
 *  - hit:   upper body only (spine, arms, head) so a flinch never skates his feet while he moves.
 *  - stab:  rusher knife thrust, upper body. The wind-up is stretched over the sim's wind-up so
 *           the fist is furthest out exactly when the sim lands the blow.
 *
 * The actions share the guard's AnimationMixer with the phase-driven idle/walk/run clips: their
 * time is set by hand each frame and the gait weights are scaled down underneath them.
 */
import * as THREE from 'three';
import type { SovietGuardLocomotion } from './sovietGuardAsset';

export const GUARD_ACTIONS_URL = '/assets/soviet-uniform/guard-actions.json';
export type GuardActionKind = 'death' | 'hit' | 'stab';

/** Bones an upper-body action is allowed to move. */
export const UPPER_BODY = ['Abdomen', 'Torso', 'Neck', 'Head', 'ShoulderL', 'UpperArmL', 'LowerArmL', 'FistL', 'ShoulderR', 'UpperArmR', 'LowerArmR', 'FistR'];

/** Blend-in time (s) and how much of the body each action takes over. */
export const ACTION_TUNING = {
 death: { fadeIn: 0.08, weight: 1 },
 hit: { fadeIn: 0.04, weight: 0.85, fadeOutFrom: 0.35, length: 0.7 },
 stab: { fadeIn: 0.1, weight: 0.9 },
} as const;

export type GuardActionClips = Record<GuardActionKind, THREE.AnimationClip> & { stabHitTime: number };

let loading: Promise<GuardActionClips | null> | null = null;

/** Keep only tracks for the listed bones (upper-body overlays). */
export function filterClip(clip: THREE.AnimationClip, bones: string[], name = clip.name) {
 const keep = new Set(bones);
 return new THREE.AnimationClip(name, clip.duration, clip.tracks.filter(t => keep.has(t.name.split('.')[0])).map(t => t.clone()));
}

export function parseGuardActions(json: { clips: (THREE.AnimationClipJSON & { hitTime?: number })[] }): GuardActionClips {
 const by = new Map(json.clips.map(c => [c.name, c]));
 const get = (n: string) => {
  const c = by.get(n);
  if (!c) throw new Error(`guard-actions.json has no ${n} clip`);
  return THREE.AnimationClip.parse(c);
 };
 return {
  death: get('death'),
  hit: filterClip(get('hit'), UPPER_BODY, 'hit'),
  stab: filterClip(get('stab'), UPPER_BODY, 'stab'),
  stabHitTime: by.get('stab')?.hitTime ?? 0.33,
 };
}

/** Fetch once; resolves null (and the game keeps its procedural fall) if the file is missing. */
export function loadGuardActions(): Promise<GuardActionClips | null> {
 loading ??= fetch(GUARD_ACTIONS_URL)
  .then(r => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
  .then(parseGuardActions)
  .catch(err => { console.warn('Guard actions unavailable; procedural fall kept.', err); return null; });
 return loading;
}

export type GuardActionState = {
 actions: Record<GuardActionKind, THREE.AnimationAction>;
 clips: GuardActionClips;
 /** Action playing now (at most one), its clock and its current blend weight. */
 kind: GuardActionKind | null;
 time: number;
 weight: number;
};

export function attachGuardActions(loco: SovietGuardLocomotion, clips: GuardActionClips): GuardActionState {
 const mk = (clip: THREE.AnimationClip) => {
  const a = loco.mixer.clipAction(clip);
  a.setLoop(THREE.LoopOnce, 1);
  a.clampWhenFinished = true;
  a.timeScale = 0;
  a.enabled = true;
  a.setEffectiveWeight(0);
  a.play();
  return a;
 };
 return {
  actions: { death: mk(clips.death), hit: mk(clips.hit), stab: mk(clips.stab) },
  clips, kind: null, time: 0, weight: 0,
 };
}

/** Start an action from its first frame (death always wins; a new hit restarts a hit). */
export function playGuardAction(st: GuardActionState, kind: GuardActionKind) {
 if (st.kind === 'death' && kind !== 'death') return;
 if (st.kind === kind && kind === 'death') return;
 st.kind = kind; st.time = 0;
}

/** Fresh life in the slot: back to plain locomotion. */
export function clearGuardAction(st: GuardActionState) {
 st.kind = null; st.time = 0; st.weight = 0;
 for (const a of Object.values(st.actions)) a.setEffectiveWeight(0);
}

/**
 * Per frame, after updateGuardLocomotion: advance the action, set its weight, scale the gait
 * weights under it and re-evaluate the mixer. `windup` (0..1) drives the stab while the sim is
 * still winding up; after that the stab runs on its own clock.
 * Returns the weight the action holds (0 = none), so the caller can hand pose control over.
 */
export function stepGuardAction(loco: SovietGuardLocomotion, st: GuardActionState, dt: number, windup: number | null = null) {
 let target = 0;
 const k = st.kind;
 if (k) {
  const clip = st.clips[k];
  if (k === 'stab' && windup !== null) st.time = Math.min(1, Math.max(0, windup)) * st.clips.stabHitTime;
  else st.time += dt;
  if (k === 'death') { st.time = Math.min(st.time, clip.duration); target = ACTION_TUNING.death.weight; }
  else if (k === 'hit') {
   const h = ACTION_TUNING.hit;
   target = st.time < h.fadeOutFrom ? h.weight : h.weight * Math.max(0, 1 - (st.time - h.fadeOutFrom) / (h.length - h.fadeOutFrom));
   if (st.time >= h.length) { st.kind = null; target = 0; }
  } else {
   const fade = Math.max(0, clip.duration - 0.25);
   target = st.time < fade ? ACTION_TUNING.stab.weight : ACTION_TUNING.stab.weight * Math.max(0, 1 - (st.time - fade) / 0.25);
   if (st.time >= clip.duration) { st.kind = null; target = 0; }
  }
 }
 const fadeIn = k ? ACTION_TUNING[k].fadeIn : 0.12;
 st.weight += (target - st.weight) * (target > st.weight ? Math.min(1, dt / fadeIn) : Math.min(1, dt / 0.12));
 if (!k && st.weight < 1e-3) st.weight = 0;
 for (const kind of ['death', 'hit', 'stab'] as const) {
  const a = st.actions[kind];
  const on = kind === (k ?? null);
  // The mixer normalises shared bones by total weight: an overlay that should own a fraction f
  // of the upper body next to the full-weight gait needs weight f/(1−f).
  const w = !on ? 0 : kind === 'death' ? st.weight : Math.min(20, st.weight / Math.max(0.05, 1 - st.weight));
  a.setEffectiveWeight(w);
  if (on) a.time = Math.min(st.time, st.clips[kind].duration - 1e-4);
 }
 if (st.weight > 0) {
  // Death takes the whole body; overlays leave the legs to the gait.
  const under = k === 'death' ? 1 - st.weight : 1;
  if (under < 1) for (const g of ['idle', 'walk', 'run'] as const) loco.actions[g].setEffectiveWeight(loco.actions[g].getEffectiveWeight() * under);
 }
 loco.mixer.update(0);
 return st.weight;
}
