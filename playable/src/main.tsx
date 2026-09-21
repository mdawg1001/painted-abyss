import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CaveWorld,type Snapshot} from './CaveWorld';
import {ITEMS,EXIT,distance,hydrostaticDepth,AIR_MAIN_MAX,AIR_BAILOUT_MAX,type Item} from './simulation';
import {KNIFE_THUMB_URL} from './knifeAsset';
import {APP_VERSION,APP_BUILD_LABEL,APP_BUILD_SHA} from './version';
import './style.css';

function Icon({item}:{item:Item|null}){
 if(item==='knife'){
  return <img className="slot-thumb" src={KNIFE_THUMB_URL} alt="" width={36} height={36} draggable={false}/>;
 }
 const paths:Record<Exclude<Item,'knife'>,React.ReactNode>={
  stone:<path fill="#7a8480" d="M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"/>,
  wood:<g transform="rotate(-35 24 24)"><rect x="20" y="8" width="8" height="32" rx="2.5" fill="#2c343a"/><rect x="19" y="8" width="10" height="7" rx="1.5" fill="#4a545c"/><rect x="21" y="18" width="6" height="2" fill="#1a2024"/></g>,
  flare:<><rect x="22" y="16" width="5" height="24" rx="1.5" fill="#e8e8e8"/><path fill="#ff1e14" d="M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"/><path fill="#ffc14a" d="M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"/></>,
  air:<><rect x="17" y="13" width="14" height="26" rx="5" fill="#c8d0d6"/><rect x="20" y="7" width="8" height="8" rx="2" fill="#a8b2ba"/><line x1="17" y1="23" x2="31" y2="23" stroke="#3a444a" strokeWidth="1.3"/><line x1="24" y1="17" x2="24" y2="30" stroke="#3a444a" strokeWidth="1.3"/></>,
  bandage:<><rect x="11" y="17" width="26" height="18" rx="2.5" fill="#9aa4aa"/><path fill="#5c666c" d="M22 17v-5h4v5m-2 6v8m-5-4h10"/></>,
  relic:<><path fill="#c4923a" d="M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"/><path fill="none" stroke="#4a2a08" strokeWidth="2.2" d="M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"/><circle cx="28" cy="17" r="3.2" fill="#ecc878"/></>,
 };
 return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">{item?paths[item]:null}</svg>;
}

function Compass({yaw}:{yaw:number}){
 const heading=(((-yaw*180)/Math.PI)%360+360)%360;
 const marks: {deg:number;x:number;label:string;major:boolean}[]=[];
 for(let deg=0;deg<360;deg+=5){
  let offset=((deg-heading+540)%360)-180;
  if(Math.abs(offset)>52)continue;
  const label=deg===0?'N':deg===90?'E':deg===180?'S':deg===270?'W':'';
  marks.push({deg,x:offset,label,major:deg%90===0});
 }
 return <div className="compass" aria-hidden="true">
  <div className="compass-needle"/>
  <div className="compass-track">
   {marks.map(m=><div key={m.deg} className={`compass-mark ${m.major?'major':m.deg%15===0?'mid':''}`} style={{transform:`translateX(${m.x*2.55}px)`}}>
    <i/>{m.label&&<span>{m.label}</span>}
   </div>)}
  </div>
 </div>;
}

function App(){
 const host=useRef<HTMLDivElement>(null),engine=useRef<CaveWorld|null>(null);const [snap,setSnap]=useState<Snapshot|null>(null),[error,setError]=useState('');
 const [staleMsg,setStaleMsg]=useState('');
 useEffect(()=>{if(!host.current)return;let instance:CaveWorld;try{instance=new CaveWorld(host.current,s=>setSnap({...s}));engine.current=instance;if(import.meta.env.DEV&&new URLSearchParams(location.search).has('test'))(window as any).__abyss=instance;}catch(e){console.error(e);setError('The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.');}return()=>{instance?.dispose();engine.current=null;};},[]);
 useEffect(()=>{
  let alive=true;
  const check=()=>{
   fetch('/__build.json',{cache:'no-store'}).then(r=>r.json()).then((info:{packageVersion?:string;distVersion?:string;sha?:string})=>{
    if(!alive||!info?.packageVersion)return;
    if(info.packageVersion!==APP_VERSION||(info.sha&&info.sha!==APP_BUILD_SHA)){
     setStaleMsg(`OUTDATED TAB — server is ${info.packageVersion}${info.sha?` · ${info.sha}`:''}. Hard refresh (Cmd+Shift+R) or run: node playable/refresh.mjs`);
    }else setStaleMsg('');
   }).catch(()=>{});
  };
  check();
  const id=window.setInterval(check,4000);
  const onFocus=()=>check();
  window.addEventListener('focus',onFocus);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)check();});
  return()=>{alive=false;window.clearInterval(id);window.removeEventListener('focus',onFocus);};
 },[]);
 const m=snap?.mission,playing=!!snap?.playing,terminal=m?.outcome!=='playing'&&!!m;
 const nearest=m?.nearest();const extraction=m&&distance(m.position,EXIT)<4;
 const prompt=m?.pending!==null&&m?.pending!==undefined?'Choose slot 1–5 · E confirms swap · Esc cancels':extraction?(m?.hasRelic?'E · Extract with the relic':'Relic required for extraction'):nearest?`E · Collect ${ITEMS[nearest.item].name}`:'';
 const yaw=snap?.yaw??0;
 const onBailout=!!(m&&m.air<=0&&m.bailout>0);
 const airPool=m?Math.ceil(onBailout?m.bailout:m.air):AIR_MAIN_MAX;
 const airMax=onBailout?AIR_BAILOUT_MAX:AIR_MAIN_MAX;
 const time=`${String(Math.floor(airPool/60)).padStart(2,'0')}:${String(airPool%60).padStart(2,'0')}`;
 const ponyReady=!!(m&&m.bailout>0&&m.air>0);
 const depth=m?Math.round(hydrostaticDepth(m.position.y)):0;
 const buoyancy=m?.buoyancy??0;
 const trimLabel=buoyancy>.2?'FLOAT':buoyancy<-.2?'SINK':'LEVEL';
 const trimLeft=buoyancy>=0?50:50+buoyancy*50;
 const trimWidth=Math.abs(buoyancy)*50;
 const predator=m?.predator.state||'patrol';const close=m?distance(m.position,m.predator.position)<23:false;
 const raging=!!(m?.predator.raged&&predator==='chase');
 const threat=close?({
  patrol:'Movement in the dark',
  alert:'It heard something',
  chase:raging?'Wounded — raging at you':'It is hunting you',
  search:'Searching your last position',
  damaged:'Wounded — moving slow',
  dead:'Guardian down',
 } as Record<string,string>)[predator]:'';
 return <main className={playing?'app playing':'app'}>
  <div className="viewport" ref={host} aria-label="Three-dimensional underwater cave"/>
  <div className="vignette"/>
  <div className="build-version" aria-label={`Build version ${APP_VERSION}`}>BUILD {APP_BUILD_LABEL}</div>
  {staleMsg&&<div className="stale-build" role="alert">{staleMsg}</div>}
  {!playing&&<header><div className="brand"><span className="brand-mark">◉</span> PAINTED ABYSS<small>THE DROWNED SHELF</small></div><div className="build-label">FIRST DIVE <span> / </span> {APP_VERSION}</div></header>}
  {playing&&m&&<>
   <section className="objectives" aria-label="Objectives">
    <div className={`obj ${m.hasRelic?'done':''}`}><span className="obj-icon" aria-hidden="true">◆</span>{m.hasRelic?'Carry the ammonite relic':'Recover the ammonite relic'}</div>
    <div className="obj"><span className="obj-icon" aria-hidden="true">○</span>Reach the extraction pool</div>
   </section>
   <Compass yaw={yaw}/>
   <div className="depth">DEPTH {depth} m</div>
   <section className="vitals" aria-label="Vitals">
    <div className="vital"><div className="vital-row"><span>{onBailout?'PONY':'AIR'}{ponyReady?` · +${Math.ceil(m.bailout)}s`:''}</span><strong className={airPool<45||onBailout?'warning':''}>{time}</strong></div><div className={`meter air ${onBailout?'bailout':''}`}><i style={{width:`${airPool/airMax*100}%`}}/></div></div>
    <div className="vital"><div className="vital-row"><span>TRIM</span><strong className={Math.abs(buoyancy)>.55?'warning':''}>{trimLabel}</strong></div><div className="meter trim" aria-valuemin={-1} aria-valuemax={1} aria-valuenow={+buoyancy.toFixed(2)}><i style={{left:`${trimLeft}%`,width:`${trimWidth}%`}}/></div></div>
    <div className="vital"><div className="vital-row"><span>SUIT</span><strong className={m.health<40?'warning':''}>{Math.ceil(m.health)}</strong></div><div className="meter suit"><i style={{width:`${m.health}%`}}/></div></div>
    <div className="vital"><div className="vital-row"><span>FINS</span><strong>{Math.round(m.stamina)}</strong></div><div className="meter fins"><i style={{width:`${m.stamina}%`}}/></div></div>
   </section>
   {threat&&<div className={`threat ${predator}`} role="status">{threat}</div>}
   {snap?.audioNotice&&<div className="audio-notice" role="status">{snap.audioNotice}</div>}
   {m.health<40&&<div className="injury"/>}
   <div className="interaction" role="status">{prompt&&<div className="prompt">{prompt}</div>}{m.elapsed<m.noticeUntil&&<p key={m.feedbackPulse} className={`notice ${m.feedbackKind}`}>{m.notice}</p>}</div>
   <div className="inventory" aria-label="Inventory">
    <div className="slots">{m.inventory.map((item,i)=>{const selected=i===m.selected;const pulse=selected&&m.feedbackKind?m.feedbackKind:'';return <div className={`slot ${selected?'selected':''} ${item==='relic'?'relic':''} ${item==='flare'?'flare':''} ${item==='knife'?'knife':''} ${pulse?`pulse-${pulse}`:''}`} key={selected?`${i}-p${m.feedbackPulse}`:i}><kbd>{i+1}</kbd><Icon item={item}/>{selected&&<em className="slot-mark" aria-hidden="true">●</em>}</div>;})}</div>
   </div>
   <aside className="keybinds" aria-hidden="true">
    <div><kbd>1–5</kbd><span>Select</span></div>
    <div><kbd>Click</kbd><span>Stab</span></div>
    <div><kbd>F</kbd><span>Torch</span></div>
    <div><kbd>E</kbd><span>Interact</span></div>
    <div><kbd>R</kbd><span>Use</span></div>
    <div><kbd>G</kbd><span>Drop</span></div>
   </aside>
   {!snap?.pointerLocked&&<div className="free-look">360° free look · move to look · hold left or right of center to keep turning</div>}
  </>}
  {!playing&&<div className="menu-backdrop"><section className="menu">
   <div className="eyebrow">{terminal?m?.outcome==='won'?'EXPEDITION COMPLETE':'DIVE LOST':snap?.started?'DIVE PAUSED':'A SHORT UNDERWATER SURVIVAL PROTOTYPE'}</div>
   <h1>{terminal?m?.outcome==='won'?<>Back to<br/><em>the light.</em></>:<>The deep<br/><em>keeps its own.</em></>:snap?.started?<>Catch your<br/><em>breath.</em></>:<>Some things<br/><em>should stay buried.</em></>}</h1>
   <p className="intro">{terminal?m?.reason:snap?.started?'Your dive is paused. Take a moment, then return to the cave.':'One cave. One ancient guardian. Recover the ammonite relic and bring it back to the light.'}</p>
   {terminal&&<div className="results"><span>{Math.floor((m?.elapsed||0)/60)}m {Math.floor((m?.elapsed||0)%60)}s underwater</span><span>{m?.outcome==='won'?'1 relic secured':'No relic secured'}</span></div>}
   {(error||snap?.error)?<p className="error" role="alert">{error||snap?.error}</p>:<button className="primary" disabled={!snap} onClick={()=>engine.current?.start()}>{!snap?'Opening the cave…':terminal?'Try another dive':snap.started?'Resume dive':'Begin dive'} <span>↗</span></button>}
   <div className="menu-actions"><button onClick={()=>{const w=engine.current;if(w){w.setSound(!w.sound);w.publish();}}}>{engine.current?.sound===false?'Sound off':'Sound on'}</button><button onClick={()=>engine.current?.testSound()}>Test sound</button>{snap?.started&&!terminal&&<button onClick={()=>{engine.current?.reset();engine.current?.start();}}>Restart dive</button>}</div>
   <p className="sound-help" role="status">{snap?.audioNotice||'Test sound plays two clear tones. During the dive, hear your music — water moves with you as you swim.'}</p>
   <div className="dive-note">2–4 MINUTES <span>·</span> DESKTOP / HEADPHONES <span>·</span> PROTOTYPE {APP_VERSION}</div>
   </section><aside className="briefing"><div className="eyebrow">BEFORE YOU DESCEND</div><ol><li><b>Follow the turquoise lights.</b><span>Find the relic in the bone alcove, beyond the central pillar.</span></li><li><b>Make room for your discovery.</b><span>Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops. Slot 1 starts with a diving knife.</span></li><li><b>Escape through the east fissure.</b><span>Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage.</span></li></ol><div className="control-grid"><span><kbd>W A S D</kbd> Swim</span><span><kbd>Space / Q</kbd> Buoyancy</span><span><kbd>Shift</kbd> Sprint</span><span><kbd>F</kbd> Torch</span><span><kbd>E</kbd> Collect / extract</span><span><kbd>1–5</kbd> Select slot</span><span><kbd>Click</kbd> Stab (knife)</span><span><kbd>R</kbd> Use / consume</span><span><kbd>G</kbd> Drop selected</span></div><p className="look-note">Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. <kbd>Esc</kbd> pauses; <kbd>M</kbd> mutes.</p><p className="tip">Inventory: <kbd>1</kbd> selects the diving knife, then <kbd>click</kbd> stabs at close range — wound it and it rages; cut deep and it breaks off slow, or sinks bloody when killed. <kbd>R</kbd> uses consumables (air, sealant, flares). A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away. Killing is optional — extraction still only needs the relic.</p></aside></div>}
 </main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
