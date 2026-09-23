import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {
 SOVIET_GUARD_GLB,SOVIET_GUARD_SOURCE,SOVIET_GUARD_LICENSE,GUARD_LOCO_PROCEDURAL,
} from '../src/sovietGuardAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('Quaternius soldier GLB with authored loco clips is credited and present',()=>{
 const dir=path.join(root,'public/assets/soviet-uniform');
 assert.ok(fs.existsSync(path.join(dir,'quaternius_soldier_male.glb')));
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/quaternius\.com/i);
 assert.match(readme,/CC0/);
 assert.match(SOVIET_GUARD_SOURCE,/quaternius\.com/);
 assert.equal(SOVIET_GUARD_LICENSE,'CC0 1.0');
 assert.equal(SOVIET_GUARD_GLB,'/assets/soviet-uniform/quaternius_soldier_male.glb');
 assert.equal(GUARD_LOCO_PROCEDURAL,false);
 const notice=fs.readFileSync(path.join(root,'NOTICE.md'),'utf8');
 assert.match(notice,/Quaternius/);
 assert.match(notice,/CC0/);
 assert.match(notice,/idle|Idle/);
});
