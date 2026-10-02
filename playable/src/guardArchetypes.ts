/**
 * Six deliberately designed cartoon civilians (stickman-civilian inspiration).
 * Shared coral jacket / turquoise trousers / cream shoes; identity from
 * silhouette, hair and skin. Blank faces. Accessories deferred.
 */
export type GuardHairId='sidePart'|'curls'|'bob'|'messy'|'ponytail'|'bald';

export type GuardArchetype={
 id:string;
 label:string;
 /** Hair attachment name in the colourful-guard GLB (`Hair_<id>`), or bald. */
 hair:GuardHairId;
 hairColor:number;
 skin:number;
 /**
  * Uniform height scale only (safe with Quaternius skinning).
  * Width/belly variation is reserved for build-time body kits — do not apply as
  * non-uniform Object3D or bone.scale (that melts the skinned mesh).
  */
 height:number;
 /** Design notes for a future baked-body pass (unused at runtime). */
 width:number;
 depth:number;
 head:number;
 headY:number;
 shoulders:number;
 belly:number;
 /** Idle posture bias (rad) layered under combat pose. */
 posture:{spinePitch:number;slouch:number;swagger:number};
};

/** Coral / cyan / cream — the shared uniform; not olive squad dyes. */
export const GUARD_UNIFORM={
 jacket:0xe95b49,
 trim:0x3bbbc5,
 trousers:0x268d9a,
 shoe:0xf0e6cf,
 sole:0xe2b43c,
} as const;

/**
 * Index = guard outfit / slot % length. Designed, not randomly mixed.
 * 0 lanky · 1 sturdy · 2 broad · 3 slim · 4 scruffy · 5 athletic
 */
export const GUARD_ARCHETYPES:readonly GuardArchetype[]=[
 {
  id:'lanky',label:'Tall and lanky',
  hair:'sidePart',hairColor:0x2c2418,skin:0xf0d0a8,
  width:.88,height:1.08,depth:.90,head:.92,headY:1.12,shoulders:.88,belly:.85,
  posture:{spinePitch:.02,slouch:-.02,swagger:.04},
 },
 {
  id:'sturdy',label:'Short and sturdy',
  hair:'curls',hairColor:0x1a1210,skin:0xe0a878,
  width:1.12,height:.90,depth:1.10,head:1.14,headY:.92,shoulders:1.08,belly:1.12,
  posture:{spinePitch:.01,slouch:.02,swagger:.02},
 },
 {
  id:'broad',label:'Broad and imposing',
  hair:'bald',hairColor:0x1a1210,skin:0xc68642,
  width:1.18,height:1.02,depth:1.14,head:1.08,headY:.95,shoulders:1.22,belly:1.05,
  posture:{spinePitch:-.01,slouch:-.04,swagger:.01},
 },
 {
  id:'slim',label:'Slim and upright',
  hair:'bob',hairColor:0x14141a,skin:0xffe0c0,
  width:.90,height:1.00,depth:.88,head:.96,headY:1.02,shoulders:.90,belly:.82,
  posture:{spinePitch:-.03,slouch:-.05,swagger:0},
 },
 {
  id:'scruffy',label:'Relaxed and scruffy',
  hair:'messy',hairColor:0x5a4030,skin:0xd4a574,
  width:1.05,height:.97,depth:1.06,head:1.04,headY:1.0,shoulders:1.0,belly:1.16,
  posture:{spinePitch:.06,slouch:.08,swagger:.03},
 },
 {
  id:'athletic',label:'Athletic',
  hair:'ponytail',hairColor:0x2a2030,skin:0xe8b878,
  width:1.02,height:1.02,depth:.96,head:1.0,headY:1.0,shoulders:1.12,belly:.88,
  posture:{spinePitch:-.02,slouch:-.03,swagger:.06},
 },
] as const;

export function guardArchetype(outfit:number):GuardArchetype{
 const i=((outfit%GUARD_ARCHETYPES.length)+GUARD_ARCHETYPES.length)%GUARD_ARCHETYPES.length;
 return GUARD_ARCHETYPES[i];
}

export function hairObjectName(hair:GuardHairId):string|null{
 return hair==='bald'?null:`Hair_${hair}`;
}
