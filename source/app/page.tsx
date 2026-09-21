"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Volume2, VolumeX, Maximize, Pause, Play, RotateCcw, Shell, MoveUp, MoveDown, Waves, MousePointer2 } from "lucide-react";
import type { OceanWorld } from "@/lib/ocean";

export default function Home() {
  const viewport = useRef<HTMLDivElement>(null);
  const world = useRef<OceanWorld | null>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [sound, setSound] = useState(true);
  const [glide, setGlide] = useState(false);
  const [depth, setDepth] = useState(23);
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState("");
  const [zone, setZone] = useState("The sunlit shallows");
  const [hint, setHint] = useState(true);

  useEffect(() => {
    let stopped = false;
    import("@/lib/ocean").then(({ OceanWorld }) => {
      if(stopped || !viewport.current) return;
      try {
        const instance = new OceanWorld(viewport.current, {
          onReady: () => setReady(true),
          onPause: () => { setPlaying(false); setGlide(false); setHidden(false); },
          onStatus: (d,z) => {setDepth(d);setZone(z);},
          onToggleUI: () => setHidden(v=>!v),
          onGlide: v => setGlide(v),
          onError: setError,
        });
        world.current = instance;
      } catch(e) {setError("This browser could not start the 3D ocean. Try opening it in Chrome or Safari with hardware acceleration enabled.");}
    }).catch(() => setError("The ocean could not load. Please refresh and try again."));
    return () => {stopped=true;world.current?.dispose();};
  }, []);

  useEffect(() => {
    type Tool = {name:string; description:string; inputSchema:object; annotations?:object; execute:(input:unknown)=>unknown};
    const context=(document as unknown as {modelContext?:{registerTool:(tool:Tool,options:{signal:AbortSignal})=>unknown}}).modelContext;
    if(!context?.registerTool)return;
    const lifecycle=new AbortController();
    const register=(tool:Tool)=>{try{Promise.resolve(context.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};
    register({name:"read_exploration",description:"Read current swimming state, depth in metres, and position in the prehistoric ocean.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute:()=>{const w=world.current;if(!w)throw Error("Ocean is still loading");return {playing:w.playing,depthMetres:Math.round((26-w.position.y)*10)/10,position:{x:w.position.x,y:w.position.y,z:w.position.z},drifting:w.glide};}});
    register({name:"set_drift",description:"Start or stop gentle forward swimming during an active exploration.",inputSchema:{type:"object",properties:{enabled:{type:"boolean"}},required:["enabled"],additionalProperties:false},execute:(input)=>{if(!input||typeof input!=="object"||typeof (input as {enabled?:unknown}).enabled!=="boolean"||Object.keys(input).some(k=>k!=="enabled"))throw Error("Provide enabled as a boolean");const w=world.current;if(!w?.playing)throw Error("Enter the water first");const v=(input as {enabled:boolean}).enabled;w.setGlide(v);setGlide(v);return {drifting:v};}});
    return ()=>lifecycle.abort();
  }, []);

  function enter() {world.current?.start();setPlaying(true);setStarted(true);setHint(true);setTimeout(()=>setHint(false),14000);}
  function pause() {world.current?.pause();setPlaying(false);setHidden(false);}
  function audio() {setSound(v=>{world.current?.setSound(!v);return !v;});}
  function drift() {setGlide(v=>{world.current?.setGlide(!v);return !v;});}
  function fullscreen() {if(document.fullscreenElement) document.exitFullscreen().catch(()=>{});else document.documentElement.requestFullscreen?.().catch(()=>{});}

  return <main className={`ocean-app ${playing?"is-playing":"is-paused"} ${hidden?"hide-ui":""}`}>
    <div className="ocean-viewport" ref={viewport} role="img" aria-label="An interactive three-dimensional prehistoric sea with swimming marine reptiles, ammonites, fish and a rocky seabed" />
    <div className={`loading-image ${ready?"loaded":""}`} />
    <div className="cinema-shade" />
    <header className="hud header">
      <a className="wordmark" href="#" onClick={e=>{e.preventDefault();pause();}} aria-label="Ancient Seas, pause exploration"><Shell size={24} strokeWidth={1.25}/><span>ANCIENT SEAS</span></a>
      <div className="header-actions">
        <button className="icon-button" onClick={audio} aria-label={sound?"Mute ocean sound":"Enable ocean sound"} title={sound?"Mute sound":"Enable sound"}>{sound?<Volume2 size={19}/>:<VolumeX size={19}/>}</button>
        <button className="icon-button fullscreen" onClick={fullscreen} aria-label="Toggle full screen" title="Full screen"><Maximize size={18}/></button>
        {playing && <button className="icon-button" onClick={pause} aria-label="Pause exploration" title="Pause · Esc"><Pause size={19}/></button>}
      </div>
    </header>

    {!playing && <section className="entry-panel" aria-label={started?"Exploration paused":"Enter the prehistoric sea"}>
      <div className="eyebrow"><span className="fine-line"/>{started?"TAKE YOUR TIME":"A WORLD BEFORE OURS"}</div>
      <h1>{started?<>Stay a little<br/><em>longer.</em></>:<>Into the<br/><em>ancient blue.</em></>}</h1>
      <p className="intro">Drift through sunlit water. Follow the seabed.<br/>Let the giants come to you.</p>
      {error ? <p className="error" role="alert">{error}</p> : <button className="enter-button" onClick={enter} disabled={!ready}><span>{!ready?"Opening the ocean…":started?"Return to the water":"Enter the water"}</span>{started?<Play size={19}/>:<ArrowUpRight size={21}/>}</button>}
      <div className="entry-note"><Waves size={16}/><span>Headphones on. The rest can wait.</span></div>
      {started && <button className="reset-button" onClick={()=>{world.current?.reset();setGlide(false);enter();}}><RotateCcw size={14}/> Return to the shallows</button>}
    </section>}

    {!playing && <aside className="entry-controls"><div className="controls-label">YOUR WAY THROUGH</div><div><span className="keys"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span><span>Swim freely</span></div><div><MousePointer2 size={18}/><span>Click scene, then move mouse to look</span></div><div><span className="keys"><kbd>Q</kbd><kbd>E</kbd></span><span>Down / up</span></div><p>An imagined ecosystem inspired by your images.</p></aside>}

    {playing && <>
      <div className="hud depth-gauge"><span className="vertical-line"/><span className="depth-value">{depth.toFixed(1)}<small>m</small></span><span className="depth-label">BELOW THE SURFACE</span></div>
      <footer className="hud dive-footer"><div className="place"><span className="eyebrow">EXPLORING</span><span>{zone}</span></div><div className="dive-actions"><button className={`text-button ${glide?"active":""}`} aria-pressed={glide} onClick={drift}><Waves size={17}/>{glide?"Stop drifting":"Drift forward"}</button><button className="text-button hide-button" onClick={()=>setHidden(true)}>Hide controls <kbd>H</kbd></button></div></footer>
      {hint && <div className="hud swim-hint"><span><kbd>W A S D</kbd> swim</span><span><kbd>Q / E</kbd> down / up</span><span><kbd>Shift</kbd> faster</span><span><kbd>Esc</kbd> pause</span></div>}
      <div className="touch-controls hud"><div className="joystick" aria-label="Drag to swim" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);world.current?.touchMove(0,0);}} onPointerMove={e=>{if(!e.currentTarget.hasPointerCapture(e.pointerId))return; const b=e.currentTarget.getBoundingClientRect();world.current?.touchMove((e.clientX-b.left-b.width/2)/(b.width/2),-(e.clientY-b.top-b.height/2)/(b.height/2));}} onPointerUp={()=>world.current?.touchMove(0,0)} onPointerCancel={()=>world.current?.touchMove(0,0)}><span/></div><div className="vertical-buttons"><button aria-label="Swim up" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);world.current?.touchVertical(1);}} onPointerUp={()=>world.current?.touchVertical(0)} onPointerCancel={()=>world.current?.touchVertical(0)}><MoveUp size={23}/></button><button aria-label="Swim down" onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);world.current?.touchVertical(-1);}} onPointerUp={()=>world.current?.touchVertical(0)} onPointerCancel={()=>world.current?.touchVertical(0)}><MoveDown size={23}/></button></div></div>
    </>}
    {hidden && <button className="restore-ui" onClick={()=>setHidden(false)} aria-label="Show controls">Show controls</button>}
    {!playing && <div className="bottom-caption">FREE EXPLORATION<span>NO DESTINATION. NO HURRY.</span></div>}
  </main>;
}
