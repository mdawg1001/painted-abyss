import { ShaderChunk } from 'three';

/**
 * Overtide picture language for every lit mesh.
 * A few flat color steps and one hard light edge. The 2K maps stay the shape source.
 * Darkest step is a colored shadow (0.28), not black, so cave photos do not collapse to red.
 */
export const OVERTIDE_GLSL = /* glsl */ `
vec3 overtideAlbedo(vec3 c){
  c=clamp(pow(max(c,vec3(0.0)),vec3(0.6))*1.35,0.0,1.0);
  float l=dot(c,vec3(0.2126,0.7152,0.0722));
  c=clamp(mix(vec3(l),c,1.45),0.0,1.0);
  vec3 steps=floor(min(c,vec3(0.999))*3.0);
  return vec3(0.28)+steps*0.34;
}
float overtideBand(float ndl){
  float halfL=clamp(ndl*0.5+0.5,0.0,1.0);
  return step(0.42,halfL)*0.45+0.55;
}
`;

/** JS mirror of overtideAlbedo. Linear input, linear steps 0.28 / 0.62 / 0.96. */
export function overtideAlbedoSteps(rgb: readonly number[]): [number, number, number] {
  const lifted = rgb.map((v) => Math.min(1, Math.pow(Math.max(v, 0), 0.6) * 1.35));
  const l = lifted[0] * 0.2126 + lifted[1] * 0.7152 + lifted[2] * 0.0722;
  return lifted.map((v) => {
    const sat = Math.min(1, Math.max(0, l + (v - l) * 1.45));
    const steps = Math.floor(Math.min(sat, 0.999) * 3);
    return Math.round((0.28 + steps * 0.34) * 1000) / 1000;
  }) as [number, number, number];
}

let installed = false;

/** Patch Three's shared chunks once, before the first material compiles. */
export function installOvertideShade(): void {
  if (installed) return;
  const chunks = ShaderChunk as unknown as Record<string, string>;
  chunks.common = OVERTIDE_GLSL + chunks.common;
  chunks.color_fragment += '\ndiffuseColor.rgb=overtideAlbedo(diffuseColor.rgb);\n';
  chunks.normal_fragment_maps += '\nnormal=nonPerturbedNormal;\n';
  chunks.lights_physical_fragment = `metalnessFactor=0.0;\n${chunks.lights_physical_fragment}\nmaterial.specularColor=vec3(0.0);material.specularF90=0.0;\n`;

  const directFrom = 'float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;';
  const directTo = 'float dotNL = dot( geometryNormal, directLight.direction );\n\tvec3 irradiance = overtideBand(dotNL) * directLight.color;';
  if (!chunks.lights_physical_pars_fragment.includes(directFrom)) {
    throw new Error('overtide direct-light patch missed');
  }
  chunks.lights_physical_pars_fragment = chunks.lights_physical_pars_fragment.replace(directFrom, directTo);

  const hemiFrom = 'float hemiDiffuseWeight = 0.5 * dotNL + 0.5;';
  const hemiTo = 'float hemiDiffuseWeight = overtideBand(dotNL);';
  if (!chunks.lights_pars_begin.includes(hemiFrom)) throw new Error('overtide hemisphere patch missed');
  chunks.lights_pars_begin = chunks.lights_pars_begin.replace(hemiFrom, hemiTo);
  installed = true;
}
