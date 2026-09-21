import {test} from 'node:test';
import assert from 'node:assert/strict';
import {APP_VERSION,APP_VERSION_LABEL,APP_BUILD_LABEL,APP_BUILD_SHA} from '../src/version';
import pkg from '../package.json' with {type:'json'};

test('on-screen build version matches package.json',()=>{
 assert.equal(APP_VERSION,pkg.version);
 assert.equal(APP_VERSION_LABEL,`v${pkg.version}`);
 assert.match(APP_VERSION,/^\d+\.\d+\.\d+$/);
 assert.match(APP_BUILD_LABEL,new RegExp(`^v${pkg.version.replace(/\./g,'\\.')} · `));
 assert.ok(APP_BUILD_SHA.length>0);
});
