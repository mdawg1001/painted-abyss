/**
 * Per-compartment practical lighting (Soviet-bunker mood: each wing reads differently).
 * Pure data + helpers — CaveWorld owns the Three.js lights; slam/water grades still win.
 */
import { zoneOf, type Zone } from './bunkerLayout';
import { tile, cells, world, CELL } from './simulation';
import { FLUORESCENT, BULB_ORANGE, DRY_FIELD, DRY_DENSITY } from './frameGrade';

export type ZoneLight={
 /** Practical / sconce colour. */
 color:number;
 intensity:number;
 distance:number;
 /** Dry-grade fog + background hint while standing here. */
 fog:number;
 fogDensity:number;
 ambient:number;
 ambientI:number;
 hemi:number;
 /** Extra chance a sconce in this zone flickers (on top of global assign). */
 flickerBias:number;
};

/**
 * Area moods — cold tubes in service corridors, colder entrance enamel,
 * sparse amber in the fissure, cyan extraction, red emergency in the bone wing.
 * Tuned ~50% further from hall/neutral so wing shifts read in motion.
 */
export const ZONE_LIGHT:Record<Zone,ZoneLight>={
 corridor:{
  color:0x7ee0b0,intensity:15,distance:14,
  fog:0x0c2e1c,fogDensity:.0215,
  ambient:0x2a7a58,ambientI:.34,hemi:.58,flickerBias:.08,
 },
 entrance:{
  color:0xa8e8ff,intensity:20,distance:14,
  fog:0x122838,fogDensity:.014,
  ambient:0x3a7a92,ambientI:.58,hemi:.95,flickerBias:0,
 },
 neck:{
  color:0x9ae0b4,intensity:13,distance:12,
  fog:0x10281c,fogDensity:.019,
  ambient:0x34785a,ambientI:.38,hemi:.66,flickerBias:.14,
 },
 hall:{
  color:FLUORESCENT,intensity:11,distance:14,
  fog:DRY_FIELD,fogDensity:DRY_DENSITY,
  ambient:0x52666a,ambientI:.46,hemi:.78,flickerBias:.12,
 },
 fissure:{
  color:0xffa848,intensity:5.5,distance:8,
  fog:0x2a1406,fogDensity:.0245,
  ambient:0x6a3e14,ambientI:.22,hemi:.36,flickerBias:.3,
 },
 pool:{
  color:0x5ef4ff,intensity:28,distance:17,
  fog:0x084848,fogDensity:.0115,
  ambient:0x28a0a8,ambientI:.68,hemi:1.15,flickerBias:0,
 },
 back:{
  color:0xff1810,intensity:5,distance:10,
  fog:0x300808,fogDensity:.027,
  ambient:0x7a1810,ambientI:.26,hemi:.34,flickerBias:.26,
 },
};

/** Faster wing cross so the grade shift lands before you leave the room. */
export const ZONE_BLEND_SEC=.28;

/** Zone under a world XZ (open floor). Falls back to hall. */
export function zoneAt(x:number,z:number):Zone{
 const {col,row}=tile({x,y:0,z});
 if(cells.has(`${col},${row}`))return zoneOf(col,row);
 // Nearest open cell if standing in cover / wall bleed.
 let best:Zone='hall',bestD=Infinity;
 for(const key of cells){
  const [c,r]=key.split(',').map(Number);
  const p=world(c,r);
  const d=Math.hypot(p.x-x,p.z-z);
  if(d<bestD){bestD=d;best=zoneOf(c,r);}
 }
 return best;
}

export function zoneLight(zone:Zone):ZoneLight{
 return ZONE_LIGHT[zone];
}

/**
 * Warm accent vs zone tube — hall/neck keep every-third caged bulbs;
 * signature wings stay pure zone colour so the mood reads.
 */
export function zoneSconceColor(zone:Zone,index:number,flicker:boolean):number{
 if(flicker)return zoneLight(zone).color;
 if(index%3===0&&(zone==='hall'||zone==='neck'))return BULB_ORANGE;
 return zoneLight(zone).color;
}

export type ZoneFillMount={zone:Zone;x:number;y:number;z:number;color:number;intensity:number;distance:number};

/**
 * One ceiling fill per compartment (centroid of open cells). Extraction keeps a
 * stronger pool fill; bone wing sits lower and redder.
 */
export function zoneFillMounts():ZoneFillMount[]{
 const acc=new Map<Zone,{sx:number;sz:number;n:number}>();
 for(const key of cells){
  const [c,r]=key.split(',').map(Number);
  const z=zoneOf(c,r);
  const p=world(c,r);
  const a=acc.get(z)??{sx:0,sz:0,n:0};
  a.sx+=p.x;a.sz+=p.z;a.n++;
  acc.set(z,a);
 }
 const out:ZoneFillMount[]=[];
 for(const [zone,a] of acc){
  if(a.n<=0)continue;
  const L=zoneLight(zone);
  const y=zone==='pool'?5.2:zone==='back'?6.2:zone==='fissure'?6.8:7.6;
  const boost=zone==='pool'?1.7:zone==='entrance'?1.45:zone==='back'?1.25:zone==='fissure'?.85:1;
  out.push({
   zone,
   x:a.sx/a.n,
   y,
   z:a.sz/a.n,
   color:L.color,
   intensity:L.intensity*boost,
   distance:L.distance+CELL*(zone==='pool'||zone==='entrance'?1.25:1),
  });
 }
 return out;
}

/** Exponential ease toward a zone recipe (0..1). */
export function zoneBlendK(dt:number,sec=ZONE_BLEND_SEC){
 return 1-Math.exp(-Math.max(0,dt)/Math.max(1e-3,sec));
}
