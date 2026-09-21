const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');const assert=require('node:assert/strict');const fs=require('node:fs');fs.mkdirSync('test-results',{recursive:true});
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true,args:['--use-angle=swiftshader','--enable-webgl','--enable-unsafe-swiftshader']});try{
 const page=await browser.newPage({viewport:{width:1200,height:820}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{const Original=window.AudioContext;window.AudioContext=class extends Original{constructor(...args){super(...args);window.testAudio=this;}createAnalyser(){const probe=super.createAnalyser();window.testProbe=probe;return probe;}};});
 await page.goto('http://127.0.0.1:5174/');await page.getByRole('button',{name:'Test sound'}).click();
 const sample=()=>page.evaluate(()=>{const a=new Float32Array(window.testProbe.fftSize);window.testProbe.getFloatTimeDomainData(a);return {rms:Math.sqrt(a.reduce((n,v)=>n+v*v,0)/a.length),state:window.testAudio.state};});
 await page.waitForTimeout(100);const chime=await sample();assert.equal(chime.state,'running');assert.ok(chime.rms>.005,JSON.stringify(chime));
 await page.waitForTimeout(1700);assert.equal((await sample()).state,'suspended');
 await page.getByRole('button',{name:'Begin dive'}).click();await page.waitForTimeout(700);const ambient=await sample();assert.equal(ambient.state,'running');assert.ok(ambient.rms>.003,JSON.stringify(ambient));
 await page.keyboard.press('m');await page.waitForTimeout(450);const muted=await sample();assert.ok(muted.rms<.0001,JSON.stringify(muted));
 await page.keyboard.press('m');await page.waitForTimeout(450);const unmuted=await sample();assert.ok(unmuted.rms>.003);
 await page.keyboard.press('Escape');await page.getByRole('button',{name:'Resume dive'}).waitFor();await page.waitForTimeout(200);assert.equal((await sample()).state,'suspended');
 await page.getByRole('button',{name:'Resume dive'}).click();await page.waitForTimeout(700);const resumed=await sample();assert.equal(resumed.state,'running');assert.ok(resumed.rms>.003);
 await page.keyboard.press('Escape');await page.screenshot({path:'test-results/sound-update.png'});await page.close();
 const blocked=await browser.newPage();await blocked.addInitScript(()=>{AudioContext.prototype.resume=function(){return Promise.reject(new Error('Test audio permission failure'));};});await blocked.goto('http://127.0.0.1:5174/');await blocked.getByRole('button',{name:'Test sound'}).click();await blocked.getByText('Sound is blocked. Pause and choose Test sound.').waitFor();
 assert.deepEqual(errors,[]);const report={version:'0.1.1 sound-only',browser:await browser.version(),chime,ambient,muted,unmuted,resumed,checks:['Test sound produces measurable output and then suspends','Begin dive starts audible-range ambient output','Mute reduces output to silence','Unmute restores output','Pause suspends audio','Resume restores audio','Rejected browser audio request is visibly reported'],errors,limit:'Measured the real post-master Web Audio signal. Physical speaker/headphone output still requires the user listening.'};fs.writeFileSync('test-results/audio-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
