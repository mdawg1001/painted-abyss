// Repackage the originals' 256px mip chain without decoding or recompressing it.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {read,write} from '../node_modules/three/examples/jsm/libs/ktx-parse.module.js';
const root=new URL('../src/assets/rocks/',import.meta.url);
let total=0;
for(const set of ['rock_face_03','dry_riverbed_rock','mossy_rock']){
 await mkdir(new URL(`${set}/preview/`,root),{recursive:true});
 for(const map of ['diff','nor','arm']){
  const texture=read(await readFile(new URL(`${set}/${map}.ktx2`,root)));
  if(texture.pixelWidth!==2048||texture.pixelHeight!==2048||texture.supercompressionScheme!==2||texture.globalData)throw new Error('Expected independent Zstd-compressed 2048px mip levels');
  texture.pixelWidth=texture.pixelHeight=256;
  texture.levels=texture.levels.slice(3);
  texture.levelCount=texture.levels.length;
  const bytes=write(texture);
  await writeFile(new URL(`${set}/preview/${map}.ktx2`,root),bytes);
  total+=bytes.length;
 }
}
console.log(`Nine 256px preview maps: ${total} bytes. Originals unchanged.`);
