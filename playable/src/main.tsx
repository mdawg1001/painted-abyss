import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CaveWorld,type Snapshot} from './CaveWorld';
import {ITEMS,EXIT,distance,type Item} from './simulation';
import './style.css';

function Icon({item}:{item:Item|null}){
 const paths:Record<Item,React.ReactNode>={
  stone:<ellipse cx="24" cy="26" rx="14" ry="11" fill="#6a7270"/>,
  wood:<><rect x="18" y="10" width="12" height="28" rx="3" fill="#3a4248" transform="rotate(-28 24 24)"/><rect x="20" y="12" width="8" height="6" rx="1" fill="#5a646c" transform="rotate(-28 24 24)"/></>,
  flare:<><path fill="#e8e8e8" d="M21 40V18h6v22z"/><path fill="#ff2a1f" d="M20 18c1-6 3-12 4-14 2 3 5 8 6 12H20z"/><path fill="#ffb040" d="M23 8c0-3 1-6 1.5-7 .5 2 1.5 4 2.5 6-.5.2-2 .4-4 1z"/></>,
  air:<><rect x="17" y="12" width="14" height="26" rx="5" fill="#c5ced4"/><rect x="20" y="6" width="8" height="8" rx="2" fill="#aeb8c0"/><path stroke="#2a3338" strokeWidth="1.2" d="M17 22h14M24 16v12" fill="none"/></>,
  bandage:<><rect x="10" y="16" width="28" height="20" rx="3" fill="#9aa4aa"/><path fill="#5a646a" d="M22 16V10h4v6m-2 8v8m-5-4h10"/></>,
  relic:<><path fill="#b8893a" d="M24 7c9 0 16 6 16 14 0 10-8 18-16 18S8 31 8 21 12 7 24 7z"/><path fill="none" stroke="#4a2a0a" strokeWidth="2.2" d="M31 29c-9 9-20 1-17-8s14-11 15-1-8 9-7 2"/><circle cx="28" cy="18" r="3.5" fill="#e8c878"/></>,
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
 useEffect(()=>{if(!host.current)return;let instance:CaveWorld;try{instance=new CaveWorld(host.current,s=>setSnap({...s}));engine.current=instance;if(import.meta.env.DEV&&new URLSearchParams(location.search).has('test'))(window as any).__abyss=instance;}catch(e){console.error(e);setError('The cave needs WebGL. Enable graphics acceleration in a desktop browser, then reload.');}return()=>{instance?.dispose();engine.current=null;};},[]);
 const m=snap?.mission,playing=!!snap?.playing,terminal=m?.outcome!=='playing'&&!!m;
 const nearest=m?.nearest();const extraction=m&&distance(m.position,EXIT)<4;
 const prompt=m?.pending!==null&&m?.pending!==undefined?'Choose slot 1–5 · E confirms swap · Esc cancels':extraction?(m?.hasRelic?'E · Extract with the relic':'Relic required for extraction'):nearest?`E · Collect ${ITEMS[nearest.item].name}`:'';
 const yaw=snap?.yaw??0;
 const air=m?Math.ceil(m.air):240;const time=`${String(Math.floor(air/60)).padStart(2,'0')}:${String(air%60).padStart(2,'0')}`;
 const depth=m?Math.max(1,Math.round(10+(-m.position.z)*.22+(5-m.position.y)*2.4)):0;
 const predator=m?.predator.state||'patrol';const close=m?distance(m.position,m.predator.position)<23:false;
 const threat=close?{patrol:'Movement in the dark',alert:'It heard something',chase:'It is hunting you',search:'Searching your last position'}[predator]:'';
 return <main className={playing?'app playing':'app'}>
  <div className="viewport" ref={host} aria-label="Three-dimensional underwater cave"/>
  <div className="vignette"/>
  {!playing&&<header><div className="brand"><span className="brand-mark">◉</span> PAINTED ABYSS<small>THE DROWNED SHELF</small></div><div className="build-label">FIRST DIVE <span> / </span> 01</div></header>}
  {playing&&m&&<>
   <section className="objectives" aria-label="Objectives">
    <div className={`obj ${m.hasRelic?'done':''}`}><span className="obj-icon diamond"/>{m.hasRelic?'Carry the ammonite relic':'Recover the ammonite relic'}</div>
    <div className="obj"><span className="obj-icon circle"/>Reach the extraction pool</div>
   </section>
   <Compass yaw={yaw}/>
   <div className="depth">DEPTH {depth} m</div>
   <section className="vitals" aria-label="Vitals">
    <div className="vital"><div className="vital-row"><span>AIR</span><strong className={air<45?'warning':''}>{time}</strong></div><div className="meter air"><i style={{width:`${m.air/240*100}%`}}/></div></div>
    <div className="vital"><div className="vital-row"><span>SUIT</span><strong className={m.health<40?'warning':''}>{Math.ceil(m.health)}</strong></div><div className="meter suit"><i style={{width:`${m.health}%`}}/></div></div>
    <div className="vital"><div className="vital-row"><span>FINS</span><strong>{Math.round(m.stamina)}</strong></div><div className="meter fins"><i style={{width:`${m.stamina}%`}}/></div></div>
   </section>
   {threat&&<div className={`threat ${predator}`} role="status">{threat}</div>}
   {snap?.audioNotice&&<div className="audio-notice" role="status">{snap.audioNotice}</div>}
   {m.health<40&&<div className="injury"/>}
   <div className="interaction" role="status">{prompt&&<div className="prompt">{prompt}</div>}{m.elapsed<m.noticeUntil&&<p key={m.feedbackPulse} className={`notice ${m.feedbackKind}`}>{m.notice}</p>}</div>
   <div className="inventory" aria-label="Inventory">
    <div className="slots">{m.inventory.map((item,i)=>{const selected=i===m.selected;const pulse=selected&&m.feedbackKind?m.feedbackKind:'';return <div className={`slot ${selected?'selected':''} ${item==='relic'?'relic':''} ${item==='flare'?'flare':''} ${pulse?`pulse-${pulse}`:''}`} key={selected?`${i}-p${m.feedbackPulse}`:i}><kbd>{i+1}</kbd><Icon item={item}/>{selected&&<em className="slot-mark" aria-hidden="true">●</em>}</div>;})}</div>
   </div>
   <aside className="keybinds" aria-hidden="true">
    <div><kbd>1–5</kbd><span>Select</span></div>
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
   <p className="sound-help" role="status">{snap?.audioNotice||'Test sound plays two clear tones. During the dive, hear your music and regulator breathing.'}</p>
   <div className="dive-note">2–4 MINUTES <span>·</span> DESKTOP / HEADPHONES <span>·</span> PROTOTYPE 0.1.6 · SELECT CLICK</div>
   </section><aside className="briefing"><div className="eyebrow">BEFORE YOU DESCEND</div><ol><li><b>Follow the turquoise lights.</b><span>Find the relic in the bone alcove, beyond the central pillar.</span></li><li><b>Make room for your discovery.</b><span>Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops.</span></li><li><b>Escape through the east fissure.</b><span>Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage.</span></li></ol><div className="control-grid"><span><kbd>W A S D</kbd> Swim</span><span><kbd>Space / Q</kbd> Up / down</span><span><kbd>Shift</kbd> Sprint</span><span><kbd>F</kbd> Torch</span><span><kbd>E</kbd> Collect / extract</span><span><kbd>1–5</kbd> Select slot</span><span><kbd>R</kbd> Use / consume</span><span><kbd>G</kbd> Drop selected</span></div><p className="look-note">Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. <kbd>Esc</kbd> pauses; <kbd>M</kbd> mutes.</p><p className="tip">Inventory: <kbd>1–5</kbd> selects (click sound when the slot changes), then <kbd>R</kbd> uses — air, sealant, and flares are consumed. A one-time tip appears on the first dive only. Rock blocks its sight; a flare distracts it while you move away.</p></aside></div>}
 </main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
