/**
 * Graphic shade for the photographic rock, floor, and moss maps.
 * The 2K KTX2 files stay as they are. This only changes how the shader reads them.
 */

export const overtideSurfaceGlsl = /* glsl */ `
// Photographic sample → a few saturated flat bands.
// Linear rock mids sit near 0.2, so lift first or the whole wall falls into black.
// Nearby pore values share a bin; a darker crack or greener moss crosses one.
vec3 overtideAlbedo(vec3 c){
  c=clamp(pow(max(c,vec3(0.0)),vec3(0.55))*1.15,0.0,1.0);
  float l=dot(c,vec3(0.2126,0.7152,0.0722));
  vec3 sat=clamp(mix(vec3(l),c,2.2),0.0,1.0);
  return floor(min(sat,vec3(0.999))*3.0)/2.0;
}
// Half-Lambert snapped to shadow / mid / light. The edge is a step, not a wrap.
float overtideBand(float ndl){
  float halfL=clamp(ndl*0.5+0.5,0.0,0.999);
  float i=floor(halfL*3.0);
  return i<0.5?0.22:(i<1.5?0.58:1.0);
}
`;

/** Same 3-step posterize as `overtideAlbedo` in the rock shader. Bands are 0, 0.5, or 1. */
export function overtideAlbedoSteps(rgb: readonly [number, number, number]): [number, number, number] {
  const lifted = rgb.map((c) => Math.min(1, Math.max(0, Math.pow(Math.max(c, 0), 0.55) * 1.15)));
  const l = lifted[0] * 0.2126 + lifted[1] * 0.7152 + lifted[2] * 0.0722;
  const sat = lifted.map((c) => Math.min(1, Math.max(0, l + (c - l) * 2.2)));
  return sat.map((c) => Math.floor(Math.min(c, 0.999) * 3) / 2) as [number, number, number];
}

type LightChunks = {
  lights_physical_pars_fragment: string;
  lights_pars_begin: string;
};

/**
 * Hard light on the cave rock/floor/moss shader.
 * `onBeforeCompile` still sees `#include`s, so the Lambert wrap is edited
 * inside those chunks and the includes are replaced with the patched source.
 * Specular is forced off so the PBR lobe cannot soften the step.
 */
export function patchOvertideLighting(shader: { fragmentShader: string }, chunks: LightChunks): void {
  const directRe = /float dotNL = saturate\( dot\( geometryNormal, directLight\.direction \) \);\s*vec3 irradiance = dotNL \* directLight\.color;/;
  if (!directRe.test(chunks.lights_physical_pars_fragment)) throw new Error('overtide direct-light patch missed');
  const physical = chunks.lights_physical_pars_fragment.replace(directRe, 'float dotNL = dot( geometryNormal, directLight.direction );\n\tvec3 irradiance = overtideBand(dotNL) * directLight.color;');
  const hemiFrom = 'float hemiDiffuseWeight = 0.5 * dotNL + 0.5;';
  const hemiTo = 'float hemiDiffuseWeight = overtideBand(dotNL);';
  const pars = chunks.lights_pars_begin.replace(hemiFrom, hemiTo);
  if (pars === chunks.lights_pars_begin) throw new Error('overtide hemisphere patch missed');
  let frag = shader.fragmentShader.replace('#include <lights_physical_pars_fragment>', physical);
  if (frag === shader.fragmentShader) throw new Error('overtide physical pars include missed');
  frag = frag.replace('#include <lights_pars_begin>', pars);
  if (!frag.includes('hemiDiffuseWeight = overtideBand(dotNL)')) throw new Error('overtide hemisphere include missed');
  const specFrom = '#include <lights_physical_fragment>';
  const specTo = '#include <lights_physical_fragment>\nmaterial.specularColor=vec3(0.0);material.specularF90=0.0;';
  if (!frag.includes(specFrom)) throw new Error('overtide specular patch missed');
  shader.fragmentShader = frag.replace(specFrom, specTo);
}
