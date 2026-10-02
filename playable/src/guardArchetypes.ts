/**
 * Designed cartoon enemy guards (stickman-civilian inspiration for the mesh).
 * Shared pure-red jacket / pure-blue trousers / cream shoes; identity from
 * silhouette, hair/kit and skin. Blank faces.
 */
export type GuardHairId='spiky'|'mullet'|'afro'|'pigtails'|'buzz'|'mohawk'|'bald';
export type GuardFacialId='handlebar'|null;
export type GuardCapId='baseball'|null;

export type GuardArchetype={
 id:string;
 label:string;
 /** Hair attachment name in the colourful-guard GLB (`Hair_<id>`), or bald. */
 hair:GuardHairId;
 /** Optional facial kit (`Facial_<id>`). */
 facial:GuardFacialId;
 /** Optional cap kit (`Cap_<id>`). */
 cap:GuardCapId;
 hairColor:number;
 skin:number;
 /**
  * Outer-root scales (`visual.root` via `guardRootScale`). Safe because the
  * AnimationMixer targets the skinned body, not this parent group.
  * Never apply these as bone.scale or on the mixer root — that melts the mesh.
  */
 height:number;
 width:number;
 depth:number;
 head:number;
 headY:number;
 shoulders:number;
 belly:number;
 /** Idle posture bias (rad) layered under combat pose. */
 posture:{spinePitch:number;slouch:number;swagger:number};
};

/** Stark toy primary colours — pure red / pure blue / cream; not olive squad dyes. */
export const GUARD_UNIFORM={
 jacket:0xff0000,
 trim:0x0000ff,
 trousers:0x0000ff,
 shoe:0xfff2a8,
 sole:0xffcc00,
} as const;

/** Bright toy-blue hair for female enemy guards. */
export const GUARD_BLUE_HAIR=0x3d9bff;

/**
 * Index = guard outfit / slot % length. Designed, not randomly mixed.
 * Hairstyle makeover: spiky / mullet / afro / baseball cap / handlebar / mohawk / pigtails.
 */
export const GUARD_ARCHETYPES:readonly GuardArchetype[]=[
 {
  id:'lanky',label:'Tall and lanky — short spiky',
  hair:'spiky',facial:null,cap:null,hairColor:0x2c2418,skin:0xf0d0a8,
  width:.88,height:1.08,depth:.90,head:.92,headY:1.12,shoulders:.88,belly:.85,
  posture:{spinePitch:.02,slouch:-.02,swagger:.04},
 },
 {
  id:'pigtail',label:'Female — blue pigtails',
  hair:'pigtails',facial:null,cap:null,hairColor:GUARD_BLUE_HAIR,skin:0xffd2b0,
  width:.90,height:.96,depth:.88,head:1.02,headY:1.04,shoulders:.86,belly:.86,
  posture:{spinePitch:-.02,slouch:-.03,swagger:.05},
 },
 {
  id:'sturdy',label:'Short and sturdy — afro',
  hair:'afro',facial:null,cap:null,hairColor:0x1a1210,skin:0xe0a878,
  width:1.12,height:.90,depth:1.10,head:1.14,headY:.92,shoulders:1.08,belly:1.12,
  posture:{spinePitch:.01,slouch:.02,swagger:.02},
 },
 {
  id:'broad',label:'Broad — handlebar moustache',
  hair:'buzz',facial:'handlebar',cap:null,hairColor:0x3a2a18,skin:0xc68642,
  width:1.18,height:1.02,depth:1.14,head:1.08,headY:.95,shoulders:1.22,belly:1.05,
  posture:{spinePitch:-.01,slouch:-.04,swagger:.01},
 },
 {
  id:'pigtailTall',label:'Female — tall blue pigtails',
  hair:'pigtails',facial:null,cap:null,hairColor:GUARD_BLUE_HAIR,skin:0xf0c098,
  width:.86,height:1.04,depth:.86,head:.98,headY:1.08,shoulders:.84,belly:.82,
  posture:{spinePitch:-.01,slouch:-.04,swagger:.04},
 },
 {
  id:'slim',label:'Slim — mullet',
  hair:'mullet',facial:null,cap:null,hairColor:0x14141a,skin:0xffe0c0,
  width:.90,height:1.00,depth:.88,head:.96,headY:1.02,shoulders:.90,belly:.82,
  posture:{spinePitch:-.03,slouch:-.05,swagger:0},
 },
 {
  id:'scruffy',label:'Scruffy — baseball cap',
  hair:'buzz',facial:null,cap:'baseball',hairColor:0x5a4030,skin:0xd4a574,
  width:1.05,height:.97,depth:1.06,head:1.04,headY:1.0,shoulders:1.0,belly:1.16,
  posture:{spinePitch:.06,slouch:.08,swagger:.03},
 },
 {
  id:'athletic',label:'Athletic — mohawk',
  hair:'mohawk',facial:null,cap:null,hairColor:0x2a2030,skin:0xe8b878,
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

export function facialObjectName(facial:GuardFacialId):string|null{
 return facial?`Facial_${facial}`:null;
}

export function capObjectName(cap:GuardCapId):string|null{
 return cap?`Cap_${cap}`:null;
}
