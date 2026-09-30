const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFile}=require('node:fs/promises');
const path=require('node:path');
test('256px previews preserve exact compressed mip data and color metadata from the originals',async()=>{
 const {read}=await import('../node_modules/three/examples/jsm/libs/ktx-parse.module.js');
 let previewBytes=0,originalBytes=0;
 for(const set of ['rock_face_03','dry_riverbed_rock','mossy_rock'])for(const map of ['diff','nor','arm']){
  const root=path.join(__dirname,'../src/assets/rocks',set);
  const original=await readFile(path.join(root,`${map}.ktx2`));
  const preview=await readFile(path.join(root,'preview',`${map}.ktx2`));
  const a=read(original),b=read(preview);
  assert.equal(a.pixelWidth,2048);assert.equal(a.pixelHeight,2048);
  assert.equal(b.pixelWidth,256);assert.equal(b.pixelHeight,256);
  assert.equal(b.levels.length,9);
  assert.deepEqual(b.dataFormatDescriptor,a.dataFormatDescriptor);
  assert.equal(b.keyValue.KTXorientation,a.keyValue.KTXorientation);
  for(let i=0;i<b.levels.length;i++)assert.deepEqual(b.levels[i],a.levels[i+3]);
  previewBytes+=preview.length;originalBytes+=original.length;
 }
 assert.ok(previewBytes<750000);assert.ok(previewBytes<originalBytes*.02);
});
