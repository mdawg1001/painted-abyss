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
   let peak=0;for(let i=0;i<samples.length;i++)peak=Math.max(peak,Math.abs(samples[i]));
   const chimeCtx=new OfflineAudioContext(1,48000,48000),chimeMaster=chimeCtx.createGain();
   chimeMaster.connect(chimeCtx.destination);exported.playDiveChime(chimeCtx,chimeMaster);
   const chime=(await chimeCtx.startRendering()).getChannelData(0);
   const clickCtx=new OfflineAudioContext(1,Math.round(48000*.2),48000),clickMaster=clickCtx.createGain();
   clickMaster.connect(clickCtx.destination);exported.playInventoryClick(clickCtx,clickMaster);
   const click=(await clickCtx.startRendering()).getChannelData(0);
   return {diveBedPeak:peak,chimePeak:Math.max(...chime),clickPeak:Math.max(...click)};
  },compiled);
  assert.ok(result.diveBedPeak<.00001,JSON.stringify(result));
  assert.ok(result.chimePeak>.1);
  assert.ok(result.clickPeak>.25,JSON.stringify(result));
  console.log(JSON.stringify({checks:['Dive bed has no breathing/regulator loop','Chime still produces audio','Inventory click peak is clearly above soft UI levels'],...result}));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
