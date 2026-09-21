const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');

(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--use-angle=swiftshader','--enable-webgl','--enable-unsafe-swiftshader']});
 try {
  const page=await browser.newPage({viewport:{width:1100,height:800}});
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  page.on('response',response=>{if(response.status()>=400)errors.push(`${response.status()} ${response.url()}`);});
  await page.addInitScript(()=>{
   window.musicSources=[];
   const Original=window.AudioContext;
   window.AudioContext=class extends Original {
    constructor(...args){super(...args);window.testAudio=this;}
    createAnalyser(){const node=super.createAnalyser();window.testProbe=node;return node;}
    createBufferSource(){
     const node=super.createBufferSource(),start=node.start.bind(node),stop=node.stop.bind(node);
     node.start=(...args)=>{if(node.buffer?.duration>60){window.musicSources.push(node);node.testStopped=false;}return start(...args);};
     node.stop=(...args)=>{node.testStopped=true;return stop(...args);};
     return node;
    }
   };
  });
  await page.goto(process.env.GAME_URL||'http://127.0.0.1:5173/');
  await page.getByRole('button',{name:'Test sound'}).click();
  await page.waitForTimeout(300);
  assert.equal(await page.evaluate(()=>window.musicSources.length),0);
  await page.getByRole('button',{name:'Begin dive'}).click();
  await page.waitForFunction(()=>window.musicSources.length===1,{}, {timeout:20000});
  const music=await page.evaluate(()=>({duration:window.musicSources[0].buffer.duration,loop:window.musicSources[0].loop,channels:window.musicSources[0].buffer.numberOfChannels}));
  assert.ok(music.duration>69&&music.duration<71);assert.ok(music.loop);assert.equal(music.channels,2);
  await page.waitForTimeout(2000);
  await page.keyboard.press('m');await page.waitForTimeout(500);
  const muted=await page.evaluate(()=>{const data=new Float32Array(window.testProbe.fftSize);window.testProbe.getFloatTimeDomainData(data);return Math.sqrt(data.reduce((sum,v)=>sum+v*v,0)/data.length);});
  assert.ok(muted<.0001);
  await page.keyboard.press('m');await page.waitForTimeout(300);
  assert.equal(await page.evaluate(()=>window.musicSources.length),1);
  await page.keyboard.press('Escape');await page.getByRole('button',{name:'Resume dive'}).waitFor();
  await page.waitForTimeout(200);const clock=await page.evaluate(()=>window.testAudio.currentTime);
  await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>window.testAudio.currentTime),clock);
  await page.getByRole('button',{name:'Resume dive'}).click();await page.waitForTimeout(300);
  assert.equal(await page.evaluate(()=>window.musicSources.length),1);
  assert.equal(await page.evaluate(()=>window.testAudio.state),'running');
  await page.keyboard.press('Escape');await page.getByRole('button',{name:'Restart dive'}).click();
  await page.waitForFunction(()=>window.musicSources.length===2);
  assert.equal(await page.evaluate(()=>window.musicSources.filter(source=>!source.testStopped).length),1);
  // Accelerate only the test source to traverse its full duration and verify looping.
  await page.evaluate(()=>{window.musicSources[1].playbackRate.value=40;window.musicSources[1].onended=()=>{window.musicEnded=true;};});
  await page.waitForTimeout(2100);assert.equal(await page.evaluate(()=>!!window.musicEnded),false);
  assert.deepEqual(errors,[]);
  console.log(JSON.stringify({music,muted,checks:['User MP3 decoded as stereo','Loops past track end','Test sound does not start music','Mute silences the master','Unmute does not duplicate music','Pause freezes music clock','Resume continues existing source','Restart replaces the source','No browser errors'],errors}));
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
