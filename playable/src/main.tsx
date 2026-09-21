import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {CaveWorld,type Snapshot} from './CaveWorld';
import {ITEMS,EXIT,distance,type Item} from './simulation';
import './style.css';

function Icon({item}:{item:Item|null}){
 const paths:Record<Item,React.ReactNode>={
  stone:<path fill="currentColor" opacity=".92" d="M10 30c2-10 8-16 14-18 7-2 14 2 16 10 2 9-3 18-12 20-8 2-16-2-18-12z"/>,
  wood:<><path fill="currentColor" opacity=".85" d="M8 34 30 8l8 7L16 40z"/><path fill="none" stroke="currentColor" strokeWidth="1.6" d="m14 32 16-14M20 34l6 4"/></>,
  flare:<><path fill="#ff3b2f" d="M19 38 24 14l7 2.5L26 40z"/><path fill="#ff8a4a" d="M24 14c1-4 3-8 4-9 2 3 5 6 6 8-3 1-7 1-10 1z"/><path fill="#ffe08a" opacity=".9" d="M26 8c0-3 1.5-6 2-7 .8 2 2 4 3 5.5-1.5.4-3.5.6-5 1.5z"/></>,
  air:<><rect x="16" y="11" width="16" height="28" rx="6" fill="currentColor" opacity=".9"/><rect x="20" y="5" width="8" height="7" rx="2" fill="currentColor"/><path fill="none" stroke="#0a1620" strokeWidth="1.4" d="M16 22h16M24 16v14"/></>,
  bandage:<><rect x="9" y="15" width="30" height="22" rx="3" fill="currentColor" opacity=".88"/><path fill="#0a1620" opacity=".35" d="M20 15V9h8v6m-4 8v10m-6-5h12"/></>,
  relic:<><path fill="#c4923a" d="M24 8c8 0 14 5 14 12 0 9-8 16-16 16S6 28 6 20 12 8 24 8z"/><path fill="none" stroke="#5c3510" strokeWidth="2" d="M30 28c-8 8-18 2-16-6s12-10 14-2-6 8-6 2"/><path fill="#e8c078" d="M28 18c2 1 3 4 2 6-2 1-4 0-5-2 0-2 1-4 3-4z"/></>,
 };
 return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">{item?paths[item]:null}</svg>;
}

function Compass({yaw}:{yaw:number}){
 const heading=(((-yaw*180)/Math.PI)%360+360)%360;
 const marks: {deg:number;x:number;label:string;major:boolean}[]=[];
 for(let deg=0;deg<360;deg+=15){
  let offset=((deg-heading+540)%360)-180;
  if(Math.abs(offset)>58)continue;
  const label=deg===0?'N':deg===90?'E':deg===180?'S':deg===270?'W':'';
  marks.push({deg,x:offset,label,major:deg%90===0});
 }
 return <div className="compass" aria-hidden="true">
  <div className="compass-needle"/>
  <div className="compass-track">
   {marks.map(m=><div key={m.deg} className={`compass-mark ${m.major?'major':''}`} style={{transform:`translateX(${m.x*4.2}px)`}}>
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
   <div className="interaction" role="status">{prompt&&<div className="prompt">{prompt}</div>}{m.elapsed<m.noticeUntil&&<p>{m.notice}</p>}</div>
   <div className="inventory" aria-label="Inventory">
    <div className="slots">{m.inventory.map((item,i)=><div className={`slot ${i===m.selected?'selected':''} ${item==='relic'?'relic':''} ${item==='flare'?'flare':''}`} key={i}><kbd>{i+1}</kbd><Icon item={item}/></div>)}</div>
   </div>
   <aside className="keybinds" aria-hidden="true">
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
   <div className="dive-note">2–4 MINUTES <span>·</span> DESKTOP / HEADPHONES <span>·</span> PROTOTYPE 0.1.4 · REFERENCE LIGHTING</div>
   </section><aside className="briefing"><div className="eyebrow">BEFORE YOU DESCEND</div><ol><li><b>Follow the turquoise lights.</b><span>Find the relic in the bone alcove, beyond the central pillar.</span></li><li><b>Make room for your discovery.</b><span>Five slots, no backpack. Press E, choose 1–5, then E to swap. The old item drops.</span></li><li><b>Escape through the east fissure.</b><span>Follow amber lights north to the extraction pool. The guardian cannot enter the narrow passage.</span></li></ol><div className="control-grid"><span><kbd>W A S D</kbd> Swim</span><span><kbd>Space / Q</kbd> Up / down</span><span><kbd>Shift</kbd> Sprint</span><span><kbd>F</kbd> Torch</span><span><kbd>E</kbd> Collect / extract</span><span><kbd>R</kbd> Use selected item</span><span><kbd>1–5</kbd> Select slot</span><span><kbd>G</kbd> Drop selected item</span></div><p className="look-note">Move the mouse or trackpad to look — right looks right. No button held. If the browser limits the pointer, hold left or right of center to keep turning through 360° without leaving the dive window. Arrow keys also look. <kbd>Esc</kbd> pauses; <kbd>M</kbd> mutes.</p><p className="tip">Rock blocks its sight. Torchlight and fast swimming draw attention. Use a flare to distract it, then move away.</p></aside></div>}
 </main>;
}
createRoot(document.getElementById('root')!).render(<App/>);
