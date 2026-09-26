#!/usr/bin/env node
/** Rough critical-path asset-byte budget (menu vs Begin dive). From playable/: node scripts/critical-path-bytes.mjs */
import {statSync, readdirSync} from 'node:fs';
import {join} from 'node:path';

const pub=join(process.cwd(),'public');
const size=p=>{try{return statSync(p).size;}catch{return 0;}};
const dir=p=>{let n=0;const w=d=>{for(const e of readdirSync(d,{withFileTypes:true})){const x=join(d,e.name);if(e.isDirectory())w(x);else n+=statSync(x).size;}};try{w(p);}catch{/* */}return n;};
const rows=[
 ['ak74u',dir(join(pub,'assets/ak74u'))],
 ['tt33',dir(join(pub,'assets/tt33'))],
 ['soviet-uniform',dir(join(pub,'assets/soviet-uniform'))],
 ['knife (no thumb)',dir(join(pub,'assets/knife'))-size(join(pub,'assets/knife/thumb.png'))],
 ['hanging lights',dir(join(pub,'assets/caged_hanging_light'))],
 ['sconces',dir(join(pub,'assets/industrial_caged_sconce'))],
 ['cardboard',dir(join(pub,'assets/cardboard_box_01'))],
 ['desk',dir(join(pub,'assets/metal_office_desk'))],
 ['caustics',dir(join(pub,'assets/caustics'))],
 ['blood',dir(join(pub,'assets/blood'))],
];
let preview=0;
for(const set of ['rock_face_03','dry_riverbed_rock','mossy_rock']){
 for(const f of readdirSync(join(process.cwd(),'src/assets/rocks',set,'preview')))preview+=statSync(join(process.cwd(),'src/assets/rocks',set,'preview',f)).size;
}
const was=rows.reduce((s,[,b])=>s+b,0)+preview;
const diveKick=rows.filter(([n])=>['tt33','soviet-uniform','knife (no thumb)','caustics','blood'].includes(n)).reduce((s,[,b])=>s+b,0);
console.log(JSON.stringify({
 wasMB:+(was/1e6).toFixed(2),
 menuNowMB:+(preview/1e6).toFixed(2),
 diveKickMB:+(diveKick/1e6).toFixed(2),
 menuFactor:+(was/preview).toFixed(1),
 toPlayableFactor:+(was/diveKick).toFixed(1),
},null,2));
