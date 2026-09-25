import { PALETTE } from './artPalette';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

/**
 * Overtide frame around the photographic cave.
 * Three fields only. They are assigned, never fog-lerped.
 * Rock / floor / moss maps are not part of this grade.
 */

export type FrameGrade = 'dry' | 'water' | 'slam';

/** Dirty ivory — dry safety. */
export const DRY_FIELD = 0xc4b496;
/** One flat blue-green. Not a depth ramp into navy. */
export const WATER_FIELD = 0x178f86;
/** Hard relic-trap red. */
export const SLAM_FIELD = 0xe30812;

export const DRY_DENSITY = 0.008;
export const WATER_DENSITY = 0.016;
export const SLAM_DENSITY = 0.05;

/** How long the trap holds full red before the cut back. No fade. */
export const SLAM_HOLD = 2.8;

/**
 * HDR from the cave lights is large. This exposure brings midtones up,
 * then the grade clips the shoulder instead of filming it off.
 */
export const GRADE_EXPOSURE = 1;
export const GRADE_CONTRAST = 1.28;
/** Low toe. Highlights clip; photographic shadows are not crushed to black. */
export const GRADE_PIVOT = 0.04;

/** Dim the guard lamps so the kits read as dark shapes. Outfits are not re-dyed. */
export const GUARD_KEY_GRADE = 0.45;
export const GUARD_RIM_GRADE = 0.22;

export const GRADE_LIGHTS = {
 dry: { sky: DRY_FIELD, ground: 0x3a3224, hemi: 0.38, ambient: 0x6a5e4c, ambientI: 0.16, sun: PALETTE.amber, sunI: 0.55 },
 water: { sky: WATER_FIELD, ground: 0x0b2e2b, hemi: 0.36, ambient: 0x145850, ambientI: 0.14, sun: WATER_FIELD, sunI: 0.42 },
 slam: { sky: SLAM_FIELD, ground: 0x3a0808, hemi: 0.48, ambient: SLAM_FIELD, ambientI: 0.22, sun: SLAM_FIELD, sunI: 0.9 },
} as const;

export type GradeClock = { slamLeft: number; floodSeen: boolean };

export function createGradeClock(): GradeClock {
 return { slamLeft: 0, floodSeen: false };
}

export function resetGradeClock(clock: GradeClock) {
 clock.slamLeft = 0;
 clock.floodSeen = false;
}

/**
 * The relic flood's rising edge latches a hard red hold.
 * The hold wins over dry and water. When it hits zero the next
 * sample is fully one of the other two — there is no in-between field.
 */
export function stepFrameGrade(clock: GradeClock, floodTriggered: boolean, freeAir: boolean, dt: number): FrameGrade {
 if (floodTriggered && !clock.floodSeen) clock.slamLeft = SLAM_HOLD;
 clock.floodSeen = floodTriggered;
 const grade: FrameGrade = clock.slamLeft > 0 ? 'slam' : freeAir ? 'dry' : 'water';
 if (clock.slamLeft > 0) clock.slamLeft = Math.max(0, clock.slamLeft - dt);
 return grade;
}

export function gradeField(grade: FrameGrade): number {
 if (grade === 'slam') return SLAM_FIELD;
 if (grade === 'water') return WATER_FIELD;
 return DRY_FIELD;
}

export function gradeDensity(grade: FrameGrade): number {
 if (grade === 'slam') return SLAM_DENSITY;
 if (grade === 'water') return WATER_DENSITY;
 return DRY_DENSITY;
}

/** 0 or 1. The slam pass must not sit on a partial mix. */
export function gradeSlam(grade: FrameGrade): 0 | 1 {
 return grade === 'slam' ? 1 : 0;
}

/** The water sheet is the blue-green field, or the same hard red while the trap holds. */
export function waterSheet(grade: FrameGrade): number {
 return grade === 'slam' ? SLAM_FIELD : WATER_FIELD;
}

/** Corridor veil. Thin in the water field so the photo rocks stay; hard red on the slam. */
export function waterVeilOpacity(grade: FrameGrade): number {
 return grade === 'slam' ? 0.55 : 0.1;
}

export function practicalColor(grade: FrameGrade): number {
 return grade === 'slam' ? SLAM_FIELD : PALETTE.amber;
}

export function practicalGlow(grade: FrameGrade): number {
 return grade === 'slam' ? SLAM_FIELD : PALETTE.amberGlow;
}

const CLIP_GRADE_SHADER = {
 uniforms: {
  tDiffuse: { value: null },
  uExposure: { value: GRADE_EXPOSURE },
  uContrast: { value: GRADE_CONTRAST },
  uPivot: { value: GRADE_PIVOT },
  uSlam: { value: 0 },
 },
 vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
 fragmentShader: `uniform sampler2D tDiffuse;uniform float uExposure;uniform float uContrast;uniform float uPivot;uniform float uSlam;varying vec2 vUv;
void main(){
  vec4 tex=texture2D(tDiffuse,vUv);
  vec3 c=tex.rgb*uExposure;
  c=(c-vec3(uPivot))*uContrast+vec3(uPivot);
  c=clamp(c,0.0,1.0);
  // uSlam is 0 or 1. Multiply crushes the frame to hard red; it is not a tint mix.
  vec3 red=c*vec3(1.0,0.04,0.03);
  c=mix(c,red,step(0.5,uSlam));
  gl_FragColor=vec4(c,tex.a);
}`,
};

/** Contrast clip in front of output. Tone mapping stays off so the clip is not filmed away. */
export function createClipGradePass() {
 return new ShaderPass(CLIP_GRADE_SHADER);
}
