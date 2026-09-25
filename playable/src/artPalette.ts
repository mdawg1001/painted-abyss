/**
 * Material tints for meshes that are not photographic.
 * The three picture fields (ivory / blue-green / trap red) live in frameGrade.ts.
 * Do not fog-blend those fields. Rock, floor, and moss maps are not tinted here.
 */
export const PALETTE = {
 stone: 0xb7bab0, floor: 0xc1bbaa, ceiling: 0x81867e, ivory: 0xd2c9ad,
 steel: 0x414944, green: 0x64745b, amber: 0xe5b477, amberGlow: 0xf0c994,
 fill: 0xa1aaa0,
} as const;
