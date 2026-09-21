import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {BLOOD_DROPLET_URL,BLOOD_PLUME_URL,BLOOD_GLOW_URL,makeSoftBlobTexture} from '../src/bloodAsset';

const root=join(dirname(fileURLToPath(import.meta.url)),'..');

test('blood particle PNGs exist under public/assets/blood',()=>{
 for(const name of ['soft_circle.png','soft_smoke.png','soft_glow.png']){
  const path=join(root,'public/assets/blood',name);
  assert.ok(existsSync(path),path);
  const buf=readFileSync(path);
  assert.equal(buf[0],0x89);
  assert.equal(buf.toString('ascii',1,4),'PNG');
 }
});

test('blood asset URLs match public paths',()=>{
 assert.equal(BLOOD_DROPLET_URL,'/assets/blood/soft_circle.png');
 assert.equal(BLOOD_PLUME_URL,'/assets/blood/soft_smoke.png');
 assert.equal(BLOOD_GLOW_URL,'/assets/blood/soft_glow.png');
});

test('procedural soft blob texture is RGBA with soft alpha',()=>{
 const tex=makeSoftBlobTexture(16);
 assert.equal(tex.image.width,16);
 assert.equal(tex.image.height,16);
 const data=tex.image.data as Uint8Array;
 // Center should be opaque-ish; corner near transparent.
 const mid=(8*16+8)*4+3;
 const corner=3;
 assert.ok(data[mid]>200);
 assert.ok(data[corner]<40);
});

test('NOTICE documents Kenney blood attribution',()=>{
 const notice=readFileSync(join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Kenney/i);
 assert.match(notice,/particle-pack/i);
 assert.match(notice,/CC0/i);
 assert.match(notice,/soft_circle\.png/);
});
