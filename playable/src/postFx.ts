/**
 * Ultrakill-leaning post stack helpers for the dive composer.
 *
 * Pipeline (wired in CaveWorld.buildComposer):
 *   RenderPass → UnrealBloomPass → ImpactPass (chroma + vignette + mild crunch)
 *   → clip grade → OutputPass
 *
 * Tuned loud on purpose: neon / muzzle / pickups bloom hard; damage and Shift
 * sprint/run slam chroma + vignette with a slow decay so the punch is felt.
 * DPR stays capped; rock maps stay in the scene.
 */
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

/** Cap device pixel ratio when the bloom stack is live (Retina + UnrealBloomPass hitch). */
export const POST_FX_DPR_CAP = 1.25;

/** Loud neon bloom — low threshold so emissives/muzzle/pickups blow out. */
export const BLOOM_STRENGTH = 1.35;
export const BLOOM_RADIUS = 0.95;
export const BLOOM_THRESHOLD = 0.28;
/** Bloom render targets run at this fraction of the canvas (perf). */
export const BLOOM_RES_SCALE = 0.5;

/**
 * Chromatic / vignette peaks and decay.
 * IMPACT_DECAY is the exp falloff rate — lower = longer punch (~1.5–2 s visible).
 */
export const IMPACT_HIT_PEAK = 1;
export const IMPACT_DASH_PEAK = 1;
export const IMPACT_DECAY = 0.85;
/** Always-on pixel crunch (screen pixels per sample). */
export const CRUNCH_PIXEL = 2.4;
/** UV channel split at full intensity — unmistakable RGB fringe. */
export const IMPACT_CHROMA_MAX = 0.022;
export const IMPACT_VIGNETTE_MAX = 0.95;

export type ImpactFx = {
  /** Combined 0..1 drive for the impact pass (hit + dash). */
  intensity: number;
  hit: number;
  dash: number;
  pulseHit(amount?: number): void;
  pulseDash(amount?: number): void;
  step(dt: number): void;
  reset(): void;
};

export function createImpactFx(): ImpactFx {
  const fx: ImpactFx = {
    intensity: 0,
    hit: 0,
    dash: 0,
    pulseHit(amount = IMPACT_HIT_PEAK) {
      fx.hit = Math.min(1, Math.max(fx.hit, amount));
    },
    pulseDash(amount = IMPACT_DASH_PEAK) {
      fx.dash = Math.min(1, Math.max(fx.dash, amount));
    },
    step(dt: number) {
      const k = Math.exp(-IMPACT_DECAY * Math.max(0, dt));
      fx.hit *= k;
      fx.dash *= k;
      if (fx.hit < 0.01) fx.hit = 0;
      if (fx.dash < 0.01) fx.dash = 0;
      fx.intensity = Math.min(1, fx.hit * 1.0 + fx.dash * 0.95);
    },
    reset() {
      fx.hit = 0;
      fx.dash = 0;
      fx.intensity = 0;
    },
  };
  return fx;
}

const IMPACT_SHADER = {
  uniforms: {
    tDiffuse: { value: null },
    uIntensity: { value: 0 },
    uChroma: { value: IMPACT_CHROMA_MAX },
    uVignette: { value: IMPACT_VIGNETTE_MAX },
    uCrunch: { value: CRUNCH_PIXEL },
    uResolution: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uIntensity;uniform float uChroma;uniform float uVignette;uniform float uCrunch;uniform vec2 uResolution;varying vec2 vUv;
void main(){
  vec2 uv=vUv;
  // Pixel crunch — keeps 2K albedo, reads retro at presentation.
  if(uCrunch>1.01){
    vec2 grid=max(uResolution/uCrunch,vec2(1.0));
    uv=(floor(uv*grid)+.5)/grid;
  }
  float i=clamp(uIntensity,0.0,1.0);
  float aber=uChroma*i;
  // Hard radial chromatic split — centre still fringes a little so the hit is obvious.
  vec2 fromCentre=uv-.5;
  float radial=length(fromCentre);
  vec2 dir=radial>1e-4?fromCentre/radial:vec2(1.0,0.0);
  vec2 off=dir*aber*(.55+radial*1.6);
  float r=texture2D(tDiffuse,uv+off).r;
  float g=texture2D(tDiffuse,uv).g;
  float b=texture2D(tDiffuse,uv-off).b;
  vec3 c=vec3(r,g,b);
  // Damage/dash vignette: crush the corners hard; idle still has a faint rim.
  float vig=smoothstep(.18,1.05,radial);
  c*=1.0-vig*(uVignette*(.18+.82*i));
  gl_FragColor=vec4(c,1.0);
}`,
};

export type ImpactPass = ShaderPass & {
  setIntensity(v: number): void;
  setSize(w: number, h: number): void;
};

export function createImpactPass(): ImpactPass {
  const pass = new ShaderPass(IMPACT_SHADER) as ImpactPass;
  pass.setIntensity = (v: number) => {
    pass.uniforms.uIntensity.value = Math.max(0, Math.min(1, v));
  };
  pass.setSize = (w: number, h: number) => {
    pass.uniforms.uResolution.value.set(Math.max(1, w), Math.max(1, h));
  };
  return pass;
}

export function createBloomPass(width: number, height: number): UnrealBloomPass {
  const w = Math.max(1, Math.floor(width * BLOOM_RES_SCALE));
  const h = Math.max(1, Math.floor(height * BLOOM_RES_SCALE));
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), BLOOM_STRENGTH, BLOOM_RADIUS, BLOOM_THRESHOLD);
  return bloom;
}

/** Keep bloom targets at half-res when the canvas resizes. */
export function resizeBloomPass(bloom: UnrealBloomPass, width: number, height: number) {
  bloom.resolution.set(
    Math.max(1, Math.floor(width * BLOOM_RES_SCALE)),
    Math.max(1, Math.floor(height * BLOOM_RES_SCALE)),
  );
}
