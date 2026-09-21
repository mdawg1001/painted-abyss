const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const ts=require('typescript');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');

(async()=>{
 const source=fs.readFileSync(path.join(__dirname,'../src/diveAudio.ts'),'utf8');
 const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try {
  const page=await browser.newPage();
  const result=await page.evaluate(async code=>{
   const exported={};new Function('exports',code)(exported);
   const ctx=new OfflineAudioContext(1,48000*5,48000),master=ctx.createGain();
   exported.buildDiveAudio(ctx,master);
   const rendered=await ctx.startRendering(),samples=rendered.getChannelData(0);
   const rms=(start,end)=>{const first=Math.round(start*48000),last=Math.round(end*48000);let sum=0;for(let i=first;i<last;i++)sum+=samples[i]*samples[i];return Math.sqrt(sum/(last-first));};
   const chimeCtx=new OfflineAudioContext(1,48000,48000),chimeMaster=chimeCtx.createGain();
   chimeMaster.connect(chimeCtx.destination);exported.playDiveChime(chimeCtx,chimeMaster);
   const chime=(await chimeCtx.startRendering()).getChannelData(0);
   return {inhale:rms(.5,1),exhale:rms(2.3,2.8),betweenBreaths:rms(1.65,1.85),betweenCycles:rms(4,4.4),chimePeak:Math.max(...chime)};
  },compiled);
  assert.ok(result.inhale>.01,JSON.stringify(result));assert.ok(result.exhale>.01,JSON.stringify(result));
  assert.ok(result.betweenBreaths<.00001);assert.ok(result.betweenCycles<.00001);
  assert.ok(result.chimePeak>.1);
  console.log(JSON.stringify({checks:['Inhale and exhale remain audible','No generated ambience between breaths','No generated ambience between breathing cycles','Chime still produces audio'],...result}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
