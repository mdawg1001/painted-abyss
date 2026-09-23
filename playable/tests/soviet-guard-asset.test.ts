import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {SOVIET_GUARD_GLB,SOVIET_GUARD_SOURCE,SOVIET_GUARD_LOCOMOTION} from '../src/sovietGuardAsset';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');

test('soviet uniform textures and authored Sketchfab mesh exist under public/assets/soviet-uniform',()=>{
 const dir=path.join(root,'public/assets/soviet-uniform');
 assert.ok(fs.existsSync(path.join(dir,'ww2_soviet_uniform.glb')));
 assert.ok(fs.existsSync(path.join(dir,'guard-locomotion.json')));
 assert.ok(fs.existsSync(path.join(dir,'README.md')));
 const readme=fs.readFileSync(path.join(dir,'README.md'),'utf8');
 assert.match(readme,/sketchfab\.com/);
 assert.match(readme,/CC BY 4\.0/);
 assert.match(SOVIET_GUARD_SOURCE,/sketchfab\.com/);
 assert.equal(SOVIET_GUARD_GLB,'/assets/soviet-uniform/ww2_soviet_uniform.glb');
 assert.equal(SOVIET_GUARD_LOCOMOTION,'/assets/soviet-uniform/guard-locomotion.json');
});
