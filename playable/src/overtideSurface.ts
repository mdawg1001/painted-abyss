/**
 * Graphic shade for the photographic rock, floor, and moss maps.
 * The 2K KTX2 files stay as they are. This only changes how the shader reads them.
 */

export const overtideSurfaceGlsl = /* glsl */ `
// Photographic sample → a few saturated flat bands.
// Nearby pore values share a bin; a darker crack or greener moss crosses one.
vec3 overtideAlbedo(vec3 c){
  float l=dot(c,vec3(0.2126,0.7152,0.0722));
  vec3 sat=clamp(mix(vec3(l),c,2.85),0.0,1.0);
  sat=clamp((sat-vec3(0.38))*1.65+vec3(0.38),0.0,1.0);
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
  const l = rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
  const sat = rgb.map((c) => Math.min(1, Math.max(0, l + (c - l) * 2.85)));
  const spread = sat.map((c) => Math.min(1, Math.max(0, (c - 0.38) * 1.65 + 0.38)));
  return spread.map((c) => Math.floor(Math.min(c, 0.999) * 3) / 2) as [number, number, number];
}

/**
 * Hard light on the cave rock/floor/moss shader.
 * Direct NdotL and the hemisphere wrap become the same 3 bands.
 * Specular stays off so the PBR lobe cannot soften the step.
 */
export function patchOvertideLighting(fragmentShader: string): string {
  const directFrom = 'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\n\tvec3 irradiance = dotNL * directLight.color;';
  const directTo = 'float dotNL = dot( geometryNormal, directLight.direction );\n\n\tvec3 irradiance = overtideBand(dotNL) * directLight.color;';
  const direct = fragmentShader.replace(directFrom, directTo);
  if (direct === fragmentShader) throw new Error('overtide direct-light patch missed');
  const hemiFrom = 'float hemiDiffuseWeight = 0.5 * dotNL + 0.5;';
  const hemiTo = 'float hemiDiffuseWeight = overtideBand(dotNL);';
  const hemi = direct.replace(hemiFrom, hemiTo);
  if (hemi === direct) throw new Error('overtide hemisphere patch missed');
  const specFrom = '#include <lights_physical_fragment>';
  const specTo = '#include <lights_physical_fragment>\nmaterial.specularColor=vec3(0.0);material.specularF90=0.0;';
  const spec = hemi.replace(specFrom, specTo);
  if (spec === hemi) throw new Error('overtide specular patch missed');
  return spec;
}
