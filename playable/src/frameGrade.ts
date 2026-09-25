import { PALETTE } from './artPalette';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

/**
 * Overtide frame around the photographic cave.
 * Three fields only. They are assigned, never fog-lerped.
 * Rock / floor / moss maps are not part of this grade.
 */

export type FrameGrade = 'dry' | 'water' | 'slam';

/** Dark cold bunker air (fog + background). */
export const DRY_FIELD = 0x18211f;
/** Cold fluorescent tube white: the bunker's main light. */
export const FLUORESCENT = 0xcfe8f0;
/** Hemisphere 'sky' in the dry bunker: cold concrete bounce from the ceiling. */
export const BUNKER_SKY = 0x5f7c86;
/** Warm caged-bulb sconce orange: the accent against the cold. */
export const BULB_ORANGE = 0xff9a48;
/** One flat blue-green. Not a depth ramp into navy. */
export const WATER_FIELD = 0x178f86;
/** Hard relic-trap red. */
export const SLAM_FIELD = 0xe30812;

export const DRY_DENSITY = 0.017;
export const WATER_DENSITY = 0.016;
export const SLAM_DENSITY = 0.05;

/** How long the trap holds full red before the cut back. No fade. */
export const SLAM_HOLD = 2.8;

/**
 * HDR from the cave lights is large. This exposure brings midtones up,
 * then the grade clips the shoulder instead of filming it off.
 */
export const GRADE_EXPOSURE = 1;
export const GRADE_CONTRAST = 1.34;
/** Low toe. Highlights clip; photographic shadows are not crushed to black. */
export const GRADE_PIVOT = 0.04;

/**
 * Stylized colour: Overtide-bright, painted, readable at a glance.
 * Runs on the finished frame, so the 2K photographic rock, wall and stone maps keep
 * every detail — only their colour is pushed. Luma-preserving saturation plus vibrance
 * (dull colours pushed harder than already-vivid ones, so skin and lamps do not burn).
 */
export const GRADE_SATURATION = 0.9;
export const GRADE_VIBRANCE = 0.45;
/** Midtone lift (gamma on linear light; < 1 brightens the mids, keeps black and white). */
export const GRADE_GAMMA = 0.9;
/** Split tone (multiplicative, so black stays black): cool shadows, warm sun highlights. */
export const GRADE_SHADOW_TINT = [0.84, 1.0, 1.06] as const;
export const GRADE_HIGHLIGHT_TINT = [1.0, 1.0, 1.0] as const;
/** Black level: shadows sit in a cold teal murk, not pure black (linear light, tiny). */
export const GRADE_LIFT = [0.0012, 0.0042, 0.0048] as const;

/** Dim the guard lamps so the kits read as dark shapes. Outfits are not re-dyed. */
export const GUARD_KEY_GRADE = 0.45;
export const GUARD_RIM_GRADE = 0.22;

export const GRADE_LIGHTS = {
 dry: { sky: BUNKER_SKY, ground: 0x3c4846, hemi: 0.85, ambient: 0x52666a, ambientI: 0.5, sun: FLUORESCENT, sunI: 0.55 },
 water: { sky: WATER_FIELD, ground: 0x0b2e2b, hemi: 0.62, ambient: 0x1d7468, ambientI: 0.22, sun: WATER_FIELD, sunI: 0.6 },
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
  uSaturation: { value: GRADE_SATURATION },
  uVibrance: { value: GRADE_VIBRANCE },
  uGamma: { value: GRADE_GAMMA },
  uShadowTint: { value: [...GRADE_SHADOW_TINT] },
  uHighlightTint: { value: [...GRADE_HIGHLIGHT_TINT] },
  uLift: { value: [...GRADE_LIFT] },
 },
 vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
 fragmentShader: `uniform sampler2D tDiffuse;uniform float uExposure;uniform float uContrast;uniform float uPivot;uniform float uSlam;
uniform float uSaturation;uniform float uVibrance;uniform float uGamma;uniform vec3 uShadowTint;uniform vec3 uHighlightTint;uniform vec3 uLift;varying vec2 vUv;
void main(){
  vec4 tex=texture2D(tDiffuse,vUv);
  vec3 c=max(tex.rgb*uExposure,vec3(0.0));
  // Vibrance + saturation around luma: the picture gets louder, the texture detail stays.
  float l=dot(c,vec3(0.2126,0.7152,0.0722));
  float mx=max(c.r,max(c.g,c.b)),mn=min(c.r,min(c.g,c.b));
  float satRel=(mx-mn)/max(mx,1e-4);
  // Near-greys (steel, concrete) stay neutral: vibrance ramps in only once a colour is really there.
  float vib=uVibrance*smoothstep(0.06,0.22,satRel)*(1.0-satRel);
  c=max(mix(vec3(l),c,uSaturation*(1.0+vib)),vec3(0.0));
  // Lift the mids so the cave reads bright and painted instead of murky.
  c=pow(c,vec3(uGamma));
  // Split tone: teal shadows, warm highlights.
  float t=smoothstep(0.0,0.7,dot(c,vec3(0.2126,0.7152,0.0722)));
  c*=mix(uShadowTint,uHighlightTint,t);
  c+=uLift*(1.0-t);
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
