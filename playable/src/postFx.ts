/**
 * Ultrakill-leaning post stack helpers for the dive composer.
 *
 * Pipeline (wired in CaveWorld.buildComposer):
 *   RenderPass → UnrealBloomPass → clip grade (+ fused impact crunch/chroma/vignette)
 *   → OutputPass
 *
 * Bloom is intentionally thresholded so only emissive / additive practicals
 * (muzzle, neon pickups, shafts) glow — not the whole cave. Impact intensity
 * is pulsed from damage and sprint/run rising edges, then decays.
 */
import * as THREE from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { PERF } from './perf';

/** Cap device pixel ratio when the bloom stack is live (Retina + UnrealBloomPass hitch). */
/** Highest render density; mirrors PERF.dprCap (governor top rung). */
export const POST_FX_DPR_CAP = PERF.dprCap;

/** Soft bloom: high threshold, modest strength — neon / muzzle / pickups only. */
export const BLOOM_STRENGTH = 0.28;
export const BLOOM_RADIUS = 0.42;
export const BLOOM_THRESHOLD = 0.88;
/** Bloom render targets run at this fraction of the canvas (perf). */
export const BLOOM_RES_SCALE = PERF.bloomResScale;

/** Chromatic / vignette peaks and decay (seconds to ease back to idle). */
export const IMPACT_HIT_PEAK = 1;
export const IMPACT_DASH_PEAK = 0.72;
export const IMPACT_DECAY = 2.4;
/** Always-on mild pixel crunch (screen pixels per sample). 1 = off; higher = crunchier. */
export const CRUNCH_PIXEL = 1.2;
export const IMPACT_CHROMA_MAX = 0.0048;
export const IMPACT_VIGNETTE_MAX = 0.72;

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
      fx.intensity = Math.min(1, fx.hit * 0.85 + fx.dash * 0.55);
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
    uWarp: { value: 0 },
  },
  vertexShader: `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
  fragmentShader: `uniform sampler2D tDiffuse;uniform float uIntensity;uniform float uChroma;uniform float uVignette;uniform float uCrunch;uniform vec2 uResolution;uniform float uWarp;varying vec2 vUv;
void main(){
  vec2 uv=vUv;
  // Speed lens (speedFov.ts): sample toward the centre in proportion to r², so the periphery is
  // stretched out to the frame edges while the middle stays true. Aspect-corrected radius.
  if(uWarp>1e-4){
    vec2 d=uv-.5;vec2 a=vec2(d.x*uResolution.x/uResolution.y,d.y);
    float r2=dot(a,a)/(.25+.25*(uResolution.x*uResolution.x)/(uResolution.y*uResolution.y));
    uv=.5+d*(1.0-uWarp*r2);
  }
  // Very mild always-on crunch — barely groups samples so albedo stays sharp.
  if(uCrunch>1.01){
    vec2 grid=max(uResolution/uCrunch,vec2(1.0));
    uv=(floor(uv*grid)+.5)/grid;
  }
  float i=clamp(uIntensity,0.0,1.0);
  float aber=uChroma*i;
  // Radial chromatic split (Ultrakill-ish) — stronger toward the rim.
  vec2 fromCentre=uv-.5;
  float radial=length(fromCentre);
  vec2 dir=radial>1e-4?fromCentre/radial:vec2(1.0,0.0);
  vec2 off=dir*aber*(.35+radial);
  float r=texture2D(tDiffuse,uv+off).r;
  float g=texture2D(tDiffuse,uv).g;
  float b=texture2D(tDiffuse,uv-off).b;
  vec3 c=vec3(r,g,b);
  // Damage/dash vignette: darken the corners; idle stays nearly clear.
  float vig=smoothstep(.35,1.15,radial);
  c*=1.0-vig*(uVignette*(.12+.88*i));
  gl_FragColor=vec4(c,1.0);
}`,
};

export type ImpactPass = ShaderPass & {
  setIntensity(v: number): void;
  /** Peripheral speed stretch, 0 (none) to ~0.1. */
  setWarp(v: number): void;
  setSize(w: number, h: number): void;
};

export function createImpactPass(): ImpactPass {
  const pass = new ShaderPass(IMPACT_SHADER) as ImpactPass;
  pass.setIntensity = (v: number) => {
    pass.uniforms.uIntensity.value = Math.max(0, Math.min(1, v));
  };
  pass.setWarp = (v: number) => {
    pass.uniforms.uWarp.value = Math.max(0, Math.min(.2, v));
  };
  pass.setSize = (w: number, h: number) => {
    pass.uniforms.uResolution.value.set(Math.max(1, w), Math.max(1, h));
  };
  return pass;
}

/**
 * `pixelRatio` is read whenever the composer resizes the pass: the composer hands passes render
 * pixels, and bloom is a blur, so it stays sized from CSS pixels. A Retina 2× frame costs the
 * same bloom as a 1× frame, and the glow keeps its size at every rung of the resolution governor.
 */
export function createBloomPass(width: number, height: number, pixelRatio: () => number = () => 1): UnrealBloomPass {
  const w = Math.max(1, Math.floor(width * BLOOM_RES_SCALE));
  const h = Math.max(1, Math.floor(height * BLOOM_RES_SCALE));
  const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), BLOOM_STRENGTH, BLOOM_RADIUS, BLOOM_THRESHOLD);
  const setSize = bloom.setSize.bind(bloom);
  bloom.setSize = (rw: number, rh: number) => {
    const pr = Math.max(1e-3, pixelRatio());
    setSize(Math.max(1, Math.round(rw / pr)), Math.max(1, Math.round(rh / pr)));
  };
  return bloom;
}

/** Keep bloom targets at half-res when the canvas resizes. */
export function resizeBloomPass(bloom: UnrealBloomPass, width: number, height: number) {
  bloom.resolution.set(
    Math.max(1, Math.floor(width * BLOOM_RES_SCALE)),
    Math.max(1, Math.floor(height * BLOOM_RES_SCALE)),
  );
}
