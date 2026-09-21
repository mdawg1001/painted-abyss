import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {CAUSTIC_ATLAS_URL,makeCausticFallbackTexture} from '../src/causticAsset';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');

test('caustics atlas PNG exists under public/assets/caustics',()=>{
 const path=join(root,'public/assets/caustics','caustics_atlas.png');
 assert.ok(existsSync(path),path);
 const buf=readFileSync(path);
 assert.equal(buf[0],0x89);
 assert.equal(buf.toString('ascii',1,4),'PNG');
 assert.ok(buf.length>100_000,'atlas should be a full 1024² texture');
});

test('caustic atlas URL matches public path',()=>{
 assert.equal(CAUSTIC_ATLAS_URL,'/assets/caustics/caustics_atlas.png');
});

test('procedural caustic fallback is soft RGBA',()=>{
 const tex=makeCausticFallbackTexture(16);
 assert.equal(tex.image.width,16);
 assert.equal(tex.image.height,16);
 const data=tex.image.data as Uint8Array;
 const mid=(8*16+8)*4+3;
 const corner=3;
 assert.ok(data[mid]>80);
 assert.ok(data[corner]<60);
});

test('NOTICE documents OpenGameArt caustics attribution',()=>{
 const notice=readFileSync(join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Water caustics/i);
 assert.match(notice,/opengameart\.org\/content\/water-caustics-effect-small/i);
 assert.match(notice,/CC0/i);
 assert.match(notice,/caustics_atlas\.png/);
});
