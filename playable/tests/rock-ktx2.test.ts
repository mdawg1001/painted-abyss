import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

test('basis transcoder shipped in public/basis matches three KTX2Loader', () => {
  for (const name of ['basis_transcoder.js', 'basis_transcoder.wasm']) {
    const pub = readFileSync(path.join(root, 'public/basis', name));
    const src = readFileSync(path.join(root, 'node_modules/three/examples/jsm/libs/basis', name));
    assert.equal(createHash('sha256').update(pub).digest('hex'), createHash('sha256').update(src).digest('hex'), name);
  }
});

test('cave rock sets are 2048 KTX2, not the old JPEGs', () => {
  for (const set of ['rock_face_03', 'dry_riverbed_rock', 'mossy_rock']) {
    for (const map of ['diff', 'nor', 'arm']) {
      const file = path.join(root, 'src/assets/rocks', set, `${map}.ktx2`);
      const bytes = statSync(file).size;
      assert.ok(bytes > 1_000_000 && bytes < 8_000_000, `${set}/${map}.ktx2 size ${bytes}`);
      const head = [...readFileSync(file).subarray(0, 4)];
      assert.deepEqual(head, [0xab, 0x4b, 0x54, 0x58]);
      assert.throws(() => statSync(path.join(root, 'src/assets/rocks', set, `${map}.jpg`)));
    }
  }
});
