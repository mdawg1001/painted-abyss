import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 AK74U_GLB,AK74U_SOURCE,AK74U_AUTHOR,AK74U_LICENSE,AK74U_TRIANGLES,AK74U_ANIMATIONS,
} from '../src/gunAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 assert.equal(buf.subarray(0,4).toString('utf8'),'glTF');
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

test('ak74u glb is the official Sketchfab FPS anim pack and NOTICE credits BURNER',()=>{
 const dir=path.join(root,'public/assets/ak74u');
 const glbPath=path.join(dir,'ak74u.glb');
 assert.ok(fs.existsSync(glbPath));
 assert.ok(fs.statSync(glbPath).size>1_000_000);
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/Alexander_Ovelar/i);
 assert.match(readme,/CC BY 4\.0/);
 assert.match(readme,/2ab66220c48b465e9501067667965569/);
 assert.match(readme,/DRAW/);
 assert.match(readme,/IDLE/);
 assert.match(readme,/SHOOT/);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/BURNER/);
 assert.match(notice,/CC BY 4\.0/);
 assert.match(notice,/2ab66220c48b465e9501067667965569/);
 assert.equal(AK74U_GLB,'/assets/ak74u/ak74u.glb');
 assert.equal(AK74U_AUTHOR,'BURNER');
 assert.equal(AK74U_LICENSE,'CC BY 4.0');
 assert.match(AK74U_SOURCE,/2ab66220c48b465e9501067667965569/);
 const json=glbJson(glbPath);
 const animNames=new Set((json.animations||[]).map((a:{name?:string})=>a.name||''));
 for(const name of AK74U_ANIMATIONS)assert.ok(animNames.has(name),`missing clip ${name}`);
 const extras=JSON.stringify(json.asset?.extras??{});
 assert.match(extras,/2ab66220c48b465e9501067667965569/);
 assert.match(extras,/CC BY 4\.0/);
 assert.ok((json.images||[]).length>=1,'textures are packed');
 assert.ok((json.materials||[]).some((m:any)=>m?.pbrMetallicRoughness?.baseColorTexture));
 assert.ok((json.skins||[]).length>=1,'skinned FPS arms+gun');
 // Face count is approximate (strip expansion / weld); stay in the published ballpark.
 let tris=0;
 for(const mesh of json.meshes||[]){
  for(const prim of mesh.primitives||[]){
   if(prim.indices==null)continue;
   const count=json.accessors[prim.indices].count;
   // TRIANGLE_STRIP≈n-2 tris; TRIANGLES=n/3. Use strip formula when mode===5.
   if(prim.mode===5)tris+=Math.max(0,count-2);
   else tris+=Math.floor(count/3);
  }
 }
 assert.ok(tris>40_000&&tris<200_000,`unexpected tri count ${tris} (Sketchfab lists ${AK74U_TRIANGLES})`);
 assert.ok(!fs.existsSync(path.join(root,'public/assets/retro-gun')),'PolyCube retro pistol asset removed');
});
