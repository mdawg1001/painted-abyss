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
 * Area moods — cold tubes in service corridors, warmer entrance enamel,
 * sparse amber in the fissure, cyan extraction, red emergency in the bone wing.
 */
export const ZONE_LIGHT:Record<Zone,ZoneLight>={
 corridor:{
  color:0xb5d4c8,intensity:13,distance:13,
  fog:0x14241f,fogDensity:.0195,
  ambient:0x3a5e52,ambientI:.4,hemi:.7,flickerBias:.06,
 },
 entrance:{
  color:0xd2e6f0,intensity:16,distance:13,
  fog:0x1a252a,fogDensity:.0155,
  ambient:0x4e6872,ambientI:.5,hemi:.82,flickerBias:0,
 },
 neck:{
  color:0xc4dbc8,intensity:12,distance:12,
  fog:0x18231e,fogDensity:.0175,
  ambient:0x456456,ambientI:.44,hemi:.74,flickerBias:.1,
 },
 hall:{
  color:FLUORESCENT,intensity:11,distance:14,
  fog:DRY_FIELD,fogDensity:DRY_DENSITY,
  ambient:0x52666a,ambientI:.46,hemi:.78,flickerBias:.12,
 },
 fissure:{
  color:0xffc878,intensity:8,distance:9,
  fog:0x1c160e,fogDensity:.021,
  ambient:0x5a4828,ambientI:.3,hemi:.5,flickerBias:.22,
 },
 pool:{
  color:0x9ee8f2,intensity:20,distance:15,
  fog:0x123838,fogDensity:.0135,
  ambient:0x3a7a7c,ambientI:.55,hemi:.92,flickerBias:0,
 },
 back:{
  color:0xff3e32,intensity:7.5,distance:11,
  fog:0x221010,fogDensity:.023,
  ambient:0x5c241c,ambientI:.34,hemi:.48,flickerBias:.18,
 },
};

export const ZONE_BLEND_SEC=.45;

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

/** Warm accent vs zone tube — every third steady sconce keeps a caged bulb. */
export function zoneSconceColor(zone:Zone,index:number,flicker:boolean):number{
 if(flicker)return zoneLight(zone).color;
 if(index%3===0&&zone!=='back'&&zone!=='fissure')return BULB_ORANGE;
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
  const y=zone==='pool'?5.2:zone==='back'?6.2:7.6;
  const boost=zone==='pool'?1.35:zone==='entrance'?1.15:1;
  out.push({
   zone,
   x:a.sx/a.n,
   y,
   z:a.sz/a.n,
   color:L.color,
   intensity:L.intensity*boost,
   distance:L.distance+CELL,
  });
 }
 return out;
}

/** Exponential ease toward a zone recipe (0..1). */
export function zoneBlendK(dt:number,sec=ZONE_BLEND_SEC){
 return 1-Math.exp(-Math.max(0,dt)/Math.max(1e-3,sec));
}
