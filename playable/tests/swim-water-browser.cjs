const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const ts=require('typescript');
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');

(async()=>{
 const source=fs.readFileSync(path.join(__dirname,'../src/diveAudio.ts'),'utf8');
 const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage();
  const result=await page.evaluate(async code=>{
   const peak=samples=>{let max=0;for(let i=0;i<samples.length;i++)max=Math.max(max,Math.abs(samples[i]));return max;};
   const rms=(samples,start,end)=>{let sum=0,n=Math.max(1,end-start);for(let i=start;i<end;i++)sum+=samples[i]*samples[i];return Math.sqrt(sum/n);};
   const exported={};new Function('exports',code)(exported);
   const stillCtx=new OfflineAudioContext(1,48000*1.2,48000),stillMaster=stillCtx.createGain();
   stillMaster.connect(stillCtx.destination);
   const still=new exported.SwimWaterAudio(stillCtx,stillMaster);
   still.update(0,true);
   const stillBuf=(await stillCtx.startRendering()).getChannelData(0);
   still.dispose();

   const swimCtx=new OfflineAudioContext(1,48000*1.2,48000),swimMaster=swimCtx.createGain();
   swimMaster.connect(swimCtx.destination);
   const swim=new exported.SwimWaterAudio(swimCtx,swimMaster);
   swim.update(4.8,true);
   const swimBuf=(await swimCtx.startRendering()).getChannelData(0);
   swim.dispose();

   const idleCtx=new OfflineAudioContext(1,48000*1.2,48000),idleMaster=idleCtx.createGain();
   idleMaster.connect(idleCtx.destination);
   const idle=new exported.SwimWaterAudio(idleCtx,idleMaster);
   idle.update(4.8,false);
   const idleBuf=(await idleCtx.startRendering()).getChannelData(0);
   idle.dispose();

   const late=Math.floor(48000*.55);
   return {
    stillPeak:peak(stillBuf),
    stillLateRms:rms(stillBuf,late,stillBuf.length),
    swimPeak:peak(swimBuf),
    swimLateRms:rms(swimBuf,late,swimBuf.length),
    idlePeak:peak(idleBuf),
    idleLateRms:rms(idleBuf,late,idleBuf.length),
   };
  },compiled);

  assert.ok(result.stillLateRms<.002,JSON.stringify(result));
  assert.ok(result.idleLateRms<.002,JSON.stringify(result));
  assert.ok(result.swimLateRms>.02,JSON.stringify(result));
  assert.ok(result.swimPeak>result.stillPeak*8,JSON.stringify(result));
  console.log(JSON.stringify({
   checks:[
    'Still water stays near silence',
    'Inactive update silences swim water',
    'Sprint speed produces audible cave whoosh',
   ],
   ...result,
  }));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
