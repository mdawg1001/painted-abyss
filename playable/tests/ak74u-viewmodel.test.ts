import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {AK74U_HIP_EYE,AK74U_ADS_EYE,AK74U_ADS,ak74uAimOffset} from '../src/gunAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

function glbJson(file:string){
 const buf=fs.readFileSync(file);
 const jsonLen=buf.readUInt32LE(12);
 return JSON.parse(buf.subarray(20,20+jsonLen).toString('utf8'));
}

test('aim offset slides the rig from the hip eye to the sight line',()=>{
 const zero=ak74uAimOffset(0);
 assert.ok(Math.abs(zero.x)+Math.abs(zero.y)+Math.abs(zero.z)===0);
 const full=ak74uAimOffset(1);
 assert.ok(Math.abs(full.x-(AK74U_HIP_EYE.x-AK74U_ADS_EYE.x))<1e-9);
 assert.ok(Math.abs(full.y-(AK74U_HIP_EYE.y-AK74U_ADS_EYE.y))<1e-9);
 assert.deepEqual(ak74uAimOffset(2),full,'clamped');
 const half=ak74uAimOffset(.5);
 assert.ok(Math.abs(half.x-full.x/2)<1e-9);
});

test('hip eye sits left of and above the sights; aiming narrows the lens and braces recoil',()=>{
 // Carbine right of centre at the hip, sights on the crosshair when aiming.
 assert.ok(AK74U_HIP_EYE.x<AK74U_ADS_EYE.x);
 assert.ok(AK74U_HIP_EYE.y>AK74U_ADS_EYE.y);
 // Rig is authored in metres: the eye is at standing head height.
 assert.ok(AK74U_HIP_EYE.y>1.4&&AK74U_HIP_EYE.y<1.8);
 assert.ok(AK74U_ADS.fov<64&&AK74U_ADS.fov>40);
 assert.ok(AK74U_ADS.seconds>.1&&AK74U_ADS.seconds<.5);
 assert.ok(AK74U_ADS.recoilScale>0&&AK74U_ADS.recoilScale<1);
});

test('viewmodel adds no scene lights and keeps authored materials',()=>{
 const src=fs.readFileSync(path.join(root,'src/gunAsset.ts'),'utf8');
 assert.doesNotMatch(src,/new THREE\.(Hemisphere|Directional|Point|Spot|Ambient)Light/);
 assert.doesNotMatch(src,/emissive\.setHex\(0x222426\)/);
});

test('ak74u glb is the official download: named PBR materials, specular, and seven clips',()=>{
 const json=glbJson(path.join(root,'public/assets/ak74u/ak74u.glb'));
 const mats=(json.materials||[]).map((m:{name:string})=>m.name).sort();
 assert.deepEqual(mats,['Ch08_body','Ch08_body1','Krinkov','Magazine','Null.001']);
 const krinkov=json.materials.find((m:{name:string})=>m.name==='Krinkov');
 assert.ok(krinkov.pbrMetallicRoughness.metallicRoughnessTexture,'Krinkov keeps its ORM map');
 assert.ok(krinkov.normalTexture,'Krinkov keeps its normal map');
 assert.ok(krinkov.extensions?.KHR_materials_specular,'Krinkov keeps its specular F0 map');
 // Arms are cloth and skin, never metal.
 for(const m of json.materials.filter((m:{name:string})=>m.name.startsWith('Ch08')))assert.equal(m.pbrMetallicRoughness.metallicFactor??1,0);
 assert.match(JSON.stringify(json.asset.extras),/This work is based on/);
 assert.equal((json.animations||[]).length,7);
});
