/**
 * Dive chart overlay — torn map fragments fill in as chests are opened.
 * Tab toggles. Exit marks appear only when all three scraps are fitted.
 */
import React from 'react';
import {
 START,RELIC,EXIT,cells,tile,BREATH_ROW_HATCH,
 MAP_FRAGMENT_ORDER,MAP_FRAGMENT_LABEL,
 type MapFragmentId,type Point,
} from './simulation';

/** Map SVG viewBox — col 4..21, hatch row..30 → x right, y down (north = −Z = up on chart). */
const COL0=4,COL1=21,ROW0=BREATH_ROW_HATCH,ROW1=30;
const VW=340,VH=420;
const PAD=18;

function cellToSvg(col:number,row:number){
 const x=PAD+((col-COL0)/(COL1-COL0))*(VW-PAD*2);
 // North (−Z / higher row) toward top of chart.
 const y=PAD+((ROW1-row)/(ROW1-ROW0))*(VH-PAD*2);
 return{x,y};
}

function pointToSvg(p:Point){
 const t=tile(p);
 return cellToSvg(t.col,t.row);
}

/** Soft cave footprint from open cells (simplified hull blobs per band). */
function caveFootprintPath(){
 const byRow=new Map<number,[number,number]>();
 for(const key of cells){
  const [c,r]=key.split(',').map(Number);
  const cur=byRow.get(r);
  if(!cur)byRow.set(r,[c,c]);
  else{cur[0]=Math.min(cur[0],c);cur[1]=Math.max(cur[1],c);}
 }
 const rows=[...byRow.keys()].sort((a,b)=>a-b);
 if(!rows.length)return'';
 const top:string[]=[];
 const bot:string[]=[];
 for(const r of rows){
  const [lo,hi]=byRow.get(r)!;
  const a=cellToSvg(lo-.35,r);
  const b=cellToSvg(hi+.35,r);
  top.push(`${a.x.toFixed(1)},${a.y.toFixed(1)}`);
  bot.unshift(`${b.x.toFixed(1)},${b.y.toFixed(1)}`);
 }
 return `M${top[0]} L${top.slice(1).join(' L')} L${bot.join(' L')} Z`;
}

const FRAGMENT_CLIP:Record<MapFragmentId,string>={
 // Left third — west cavern scrap.
 west:`M0,0 H${VW*.42} L${VW*.38},${VH} H0 Z`,
 // Right strip including exit arm.
 east:`M${VW*.55},0 H${VW} V${VH} H${VW*.48} Z`,
 // Upper (deep / north) band.
 deep:`M0,0 H${VW} V${VH*.48} L0,${VH*.55} Z`,
};

type DiveMapProps={
 fragments:MapFragmentId[];
 complete:boolean;
 player?:Point;
 open:boolean;
 onClose:()=>void;
};

export function DiveMap({fragments,complete,player,open,onClose}:DiveMapProps){
 if(!open)return null;
 const footprint=caveFootprintPath();
 const start=pointToSvg(START);
 const relic=pointToSvg(RELIC);
 const exit=pointToSvg(EXIT);
 const you=player?pointToSvg(player):null;
 const count=fragments.length;

 return <div className="dive-map" role="dialog" aria-label="Cave chart" aria-modal="true">
  <div className="dive-map-sheet">
   <header className="dive-map-head">
    <div>
     <div className="eyebrow">DROWNED SHELF · FIELD CHART</div>
     <h2>Scraps {count}/3{complete?' · fitted':''}</h2>
    </div>
    <button type="button" className="dive-map-close" onClick={onClose}><kbd>Tab</kbd> Close</button>
   </header>
   <div className="dive-map-body">
    <svg className="dive-map-svg" viewBox={`0 0 ${VW} ${VH}`} aria-hidden="true">
     <defs>
      {MAP_FRAGMENT_ORDER.map(id=>(
       <clipPath key={id} id={`frag-${id}`}><path d={FRAGMENT_CLIP[id]}/></clipPath>
      ))}
      <filter id="paperGrain">
       <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" result="n"/>
       <feColorMatrix in="n" type="matrix" values="0 0 0 0 .12  0 0 0 0 .14  0 0 0 0 .11  0 0 0 .35 0"/>
      </filter>
     </defs>
     <rect className="dive-map-paper" x="0" y="0" width={VW} height={VH} rx="4"/>
     <rect x="0" y="0" width={VW} height={VH} filter="url(#paperGrain)" opacity=".55"/>
     {/* Ghost outline always faintly visible so empty chart isn't blank. */}
     <path className="dive-map-ghost" d={footprint}/>
     {MAP_FRAGMENT_ORDER.map(id=>{
      const have=fragments.includes(id);
      return <g key={id} clipPath={`url(#frag-${id})`} className={have?'dive-map-piece have':'dive-map-piece missing'}>
       <path className="dive-map-fill" d={footprint}/>
       {!have&&<path className="dive-map-tear" d={FRAGMENT_CLIP[id]}/>}
      </g>;
     })}
     {/* Landmark labels — exits only when complete. */}
     {fragments.includes('west')||fragments.includes('deep')?(
      <g className="dive-map-mark start">
       <circle cx={start.x} cy={start.y} r="5"/>
       <text x={start.x+8} y={start.y+4}>Entrance</text>
      </g>
     ):null}
     {fragments.includes('deep')?(
      <g className="dive-map-mark relic">
       <circle cx={relic.x} cy={relic.y} r="5"/>
       <text x={relic.x+8} y={relic.y+4}>Relic</text>
      </g>
     ):null}
     {complete?(
      <g className="dive-map-mark exit">
       <circle cx={exit.x} cy={exit.y} r="6"/>
       <text x={exit.x-8} y={exit.y-10}>EXIT</text>
       <text x={exit.x-8} y={exit.y+18}>Extraction</text>
      </g>
     ):null}
     {you&&count>0?(
      <g className="dive-map-you">
       <circle cx={you.x} cy={you.y} r="4.5"/>
       <circle cx={you.x} cy={you.y} r="8" className="ring"/>
      </g>
     ):null}
     <text className="dive-map-n" x={VW/2} y="14">N</text>
    </svg>
    <ul className="dive-map-legend">
     {MAP_FRAGMENT_ORDER.map(id=>{
      const have=fragments.includes(id);
      return <li key={id} className={have?'have':''}>
       <span className="pip"/>{have?MAP_FRAGMENT_LABEL[id]:`Missing — ${MAP_FRAGMENT_LABEL[id]}`}
      </li>;
     })}
    </ul>
    <p className="dive-map-hint">
     {complete
      ?'Chart fitted. Amber exit is marked — extraction pool through the east fissure.'
      :'Chart scraps sit in the cavern crates. The plastic crate shows its scrap. Exits stay unmarked until all three fit.'}
    </p>
   </div>
  </div>
 </div>;
}
