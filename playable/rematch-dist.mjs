// Clear generated-stamp merge conflicts, then bake playable/dist.
// sha / builtAt / generatedAt are never copied out of a conflict. npm run build writes them.
import {execSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const playableDir=dirname(fileURLToPath(import.meta.url));
const repo=execSync('git rev-parse --show-toplevel',{cwd:playableDir,encoding:'utf8'}).trim();
const bake=process.argv.includes('--bake');

function git(args,{allowFail=false}={}){
 try{
  return execSync(`git ${args}`,{cwd:repo,encoding:'utf8'}).trim();
 }catch(err){
  if(allowFail)return '';
  throw err;
 }
}

function unmerged(){
 return git('diff --name-only --diff-filter=U',{allowFail:true}).split('\n').map(s=>s.trim()).filter(Boolean);
}

function merging(){
 return git('rev-parse -q --verify MERGE_HEAD',{allowFail:true}).length>0;
}

function isDist(p){return p.startsWith('playable/dist/');}
const PHYSICS='docs/verification/physics-reality.json';

function versionOf(ref){
 try{
  return JSON.parse(git(`show ${ref}:playable/package.json`)).version;
 }catch{return null;}
}

function cmpVersion(a,b){
 const pa=a.split('.').map(Number),pb=b.split('.').map(Number);
 for(let i=0;i<3;i++){
  const d=(pa[i]||0)-(pb[i]||0);
  if(d)return d;
 }
 return 0;
}

if(!bake){
 const files=unmerged();
 const dist=files.filter(isDist);
 const physics=files.filter(p=>p===PHYSICS);
 const source=files.filter(p=>!isDist(p)&&p!==PHYSICS);
 for(const p of dist){
  git(`rm -f -- ${p}`);
  console.log(`dropped conflicted dist (will bake after the merge commit): ${p}`);
 }
 if(physics.length){
  execSync('npx tsx tests/physics-reality.test.ts',{cwd:playableDir,stdio:'inherit'});
  git(`add -- ${PHYSICS}`);
  console.log('regenerated physics-reality.json from the test (did not keep either generatedAt)');
 }
 if(source.length){
  console.error('\nSource conflicts still need a resolution:');
  for(const p of source)console.error('  '+p);
  console.error('Fix those, bump playable/package.json past origin/main, commit the merge, then run: node playable/rematch-dist.mjs --bake');
  process.exit(1);
 }
 if(merging()){
  console.log('\nGenerated stamps are cleared. Commit this merge, then run: node playable/rematch-dist.mjs --bake');
  process.exit(0);
 }
 console.log('No generated-stamp conflicts. To bake dist for the current commit, run: node playable/rematch-dist.mjs --bake');
 process.exit(0);
}

if(merging()){
 console.error('A merge is in progress. Commit it first, then bake so the sha is that commit.');
 process.exit(1);
}
if(unmerged().length){
 console.error('Unmerged paths remain. Run node playable/rematch-dist.mjs without --bake.');
 process.exit(1);
}
const dirty=git('status --porcelain').split('\n').map(s=>s.trim()).filter(Boolean)
 .filter(s=>!s.endsWith('playable/dist')&&!s.includes('playable/dist/'));
if(dirty.length){
 console.error('Commit source changes before baking. A bake stamps git HEAD, not uncommitted files:');
 for(const line of dirty)console.error('  '+line);
 process.exit(1);
}
const ours=JSON.parse(readFileSync(new URL('./package.json',import.meta.url),'utf8')).version;
const main=versionOf('origin/main');
if(main&&cmpVersion(ours,main)<=0){
 console.error(`playable/package.json is ${ours}; origin/main is ${main}. Bump past main before baking.`);
 process.exit(1);
}

execSync('npm run build',{cwd:playableDir,stdio:'inherit'});
const info=JSON.parse(readFileSync(new URL('./dist/build-info.json',import.meta.url),'utf8'));
const head=git('rev-parse --short HEAD');
if(info.version!==ours||info.sha!==head){
 console.error(`Bake mismatch. build-info is v${info.version} · ${info.sha}; HEAD is v${ours} · ${head}.`);
 process.exit(1);
}
git('add -- playable/dist');
console.log(`\nBaked BUILD v${info.version} · ${info.sha} at ${info.builtAt}`);
console.log('playable/dist is staged. Commit it.');
