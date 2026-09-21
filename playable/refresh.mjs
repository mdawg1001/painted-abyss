#!/usr/bin/env node
// Pull latest main, kill the old local server, rebuild, and serve.
// Use this after another agent merges so Safari cannot keep an outdated build.
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const playableDir=fileURLToPath(new URL('./', import.meta.url));
const repoRoot=path.resolve(playableDir,'..');
const port=Number(process.env.PORT||5173);

function run(cmd,cwd=repoRoot){
 console.log(`\n→ ${cmd}`);
 execSync(cmd,{cwd,stdio:'inherit'});
}

try{
 run('git fetch origin main');
 run('git checkout main');
 run('git pull origin main');
}catch(err){
 console.error('\nGit update failed. Fix git state, then retry.');
 process.exit(1);
}

try{
 execSync(`lsof -ti:${port} | xargs kill`,{stdio:'ignore'});
 console.log(`\n→ stopped whatever was on port ${port}`);
}catch{/* nothing listening */}

run('npm run build',playableDir);
console.log('\n→ starting server (leave this window open)\n');
run('node serve.mjs',playableDir);
