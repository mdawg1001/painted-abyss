/**
 * Hatch stash overlay — drag gear bag↔chest.
 * Pocket gold is saved on open, plus an explicit SAVE GOLD button.
 * Shop is a plain catalog: Gold $X, priced items, big BUY + confirm.
 */
import React,{useCallback,useRef,useState} from 'react';
import {
 fmtGold,fmtShopGold,modLevel,upgradeCost,UPGRADE,MOD_TRACKS,SHOP_GUNS,SHOP_AMMO_PACKS,isAlmostShort,
} from './gold';
import {ITEMS,STASH_CAPACITY,type Item,type StashSlot} from './simulation';
import {PISTOL} from './playerPistol';
import {KNIFE_THUMB_URL} from './knifeAsset';

export type StashMissionApi={
 inventory:(Item|null)[];
 selected:number;
 stash:StashSlot[];
 gold:number;
 bankedGold:number;
 pistol:{reserve:number};
 gunCond:number;
 gunMods:Record<'barrel'|'action'|'mag',number>;
 moveInvStash:(invI:number,stashI:number)=>boolean;
 moveInv:(from:number,to:number)=>boolean;
 moveStash:(from:number,to:number)=>boolean;
 depositAmmoPack:(stashI:number)=>boolean;
 withdrawAmmoPack:(stashI:number)=>boolean;
 bankPocketGold:()=>boolean;
 buyUpgrade:(track:'barrel'|'action'|'mag')=>boolean;
 buyShopRifle:(cost?:number,label?:string)=>boolean;
 buyShopAmmo:(rounds:number)=>boolean;
 closeStash:()=>void;
};

type DragPayload=
 |{kind:'inv';index:number}
 |{kind:'stash';index:number}
 |{kind:'ammo'};

type ShopOffer={
 id:string;
 name:string;
 price:number;
 detail:string;
 canBuy:boolean;
 blocked?:string;
 /** Gun catalog row — button must read BUY GUN. */
 gunBuy?:boolean;
 /** Ammo pack row — button reads BUY N ROUNDS · $N. */
 ammoBuy?:boolean;
 run:()=>boolean;
};

const DRAG_MIME='application/x-abyss-stash';

function Icon({item}:{item:Item|null}){
 if(item==='knife'){
  return <img className="slot-thumb" src={KNIFE_THUMB_URL} alt="" width={40} height={40} draggable={false}/>;
 }
 const paths:Record<Exclude<Item,'knife'>,React.ReactNode>={
  stone:<path fill="#7a8480" d="M12 28c1-9 7-15 13-16 8-2 15 3 16 11 2 9-4 17-13 18-8 1-15-4-16-13z"/>,
  wood:<g transform="rotate(-35 24 24)"><rect x="20" y="8" width="8" height="32" rx="2.5" fill="#2c343a"/><rect x="19" y="8" width="10" height="7" rx="1.5" fill="#4a545c"/><rect x="21" y="18" width="6" height="2" fill="#1a2024"/></g>,
  flare:<><rect x="22" y="16" width="5" height="24" rx="1.5" fill="#e8e8e8"/><path fill="#ff1e14" d="M21 16c1-5 2.5-10 3.5-13 1.5 3 3.5 7 4.5 11H21z"/><path fill="#ffc14a" d="M24 5c0-2 .6-4 1-5 .4 1.5 1.2 3 2 4.5-.7.2-1.8.4-3 .5z"/></>,
  air:<><rect x="17" y="13" width="14" height="26" rx="5" fill="#c8d0d6"/><rect x="20" y="7" width="8" height="8" rx="2" fill="#a8b2ba"/><line x1="17" y1="23" x2="31" y2="23" stroke="#3a444a" strokeWidth="1.3"/><line x1="24" y1="17" x2="24" y2="30" stroke="#3a444a" strokeWidth="1.3"/></>,
  bandage:<><rect x="11" y="17" width="26" height="18" rx="2.5" fill="#9aa4aa"/><path fill="#5c666c" d="M22 17v-5h4v5m-2 6v8m-5-4h10"/></>,
  relic:<><path fill="#c4923a" d="M24 8c9 0 15 6 15 13 0 10-8 17-15 17S9 31 9 21 12 8 24 8z"/><path fill="none" stroke="#4a2a08" strokeWidth="2.2" d="M31 28c-9 9-19 1-16-7s13-11 14-1-7 8-6 2"/><circle cx="28" cy="17" r="3.2" fill="#ecc878"/></>,
  gun:<><rect x="8" y="20" width="22" height="6" rx="1" fill="#9aa3aa"/><rect x="28" y="18" width="12" height="4" rx="1" fill="#d5dbe0"/><rect x="14" y="26" width="5" height="12" rx="1" fill="#3a3028"/></>,
  bottle:<><rect x="18" y="12" width="12" height="26" rx="5" fill="#3d8f62"/><rect x="21" y="6" width="6" height="8" rx="1.5" fill="#e4e8ea"/></>,
  gold:<><path fill="#f2c14e" d="M10 32l5-12h18l5 12z"/><path fill="#ffe08a" d="M15 20h18l-2 4H17z"/></>,
  coat:<><path fill="#c49662" d="M14 16l10 5 10-5 6 7-5 18H13L8 23z"/><path fill="#6e5340" d="M20 20h8v8h-8z"/></>,
  sovietKey:<g>
   <rect x="22" y="20" width="5" height="22" rx="1.5" fill="#3a3d42"/>
   <rect x="14" y="38" width="13" height="4" rx="1" fill="#26282c"/>
   <ellipse cx="24.5" cy="14" rx="11" ry="9" fill="#2e3136"/>
   <circle cx="24.5" cy="14" r="5" fill="#c9a227"/>
  </g>,
 };
 return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">{item?paths[item]:null}</svg>;
}

function StashIcon({slot}:{slot:StashSlot}){
 if(!slot)return null;
 if(slot.kind==='ammo'){
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
   <rect x="10" y="14" width="28" height="20" rx="3" fill="#6b7a4a"/>
   <rect x="14" y="18" width="6" height="12" rx="1" fill="#c8d0a8"/>
   <rect x="22" y="18" width="6" height="12" rx="1" fill="#c8d0a8"/>
   <rect x="30" y="18" width="6" height="12" rx="1" fill="#c8d0a8"/>
  </svg>;
 }
 return <Icon item={slot.item}/>;
}

function writeDrag(e:React.DragEvent,payload:DragPayload){
 e.dataTransfer.setData(DRAG_MIME,JSON.stringify(payload));
 e.dataTransfer.effectAllowed='move';
}

function readDrag(e:React.DragEvent):DragPayload|null{
 try{
  const raw=e.dataTransfer.getData(DRAG_MIME)||e.dataTransfer.getData('text/plain');
  if(!raw)return null;
  return JSON.parse(raw) as DragPayload;
 }catch{return null;}
}

function ammoOffers(m:StashMissionApi):ShopOffer[]{
 const hasGun=m.inventory.includes('gun');
 const gold=m.bankedGold;
 const room=Math.max(0,PISTOL.reserveMax-m.pistol.reserve);
 return SHOP_AMMO_PACKS.map(pack=>{
  let blocked:string|undefined;
  if(!hasGun)blocked='Need a rifle';
  else if(room<pack.rounds)blocked=room<=0?'Spare rounds full':`Need room for ${pack.rounds}`;
  else if(gold<pack.price)blocked=`Need ${fmtShopGold(pack.price)}`;
  return {
   id:pack.id,
   name:`BUY ${pack.rounds} ROUNDS · ${fmtShopGold(pack.price)}`,
   price:pack.price,
   detail:`${pack.rounds} spare rounds for your rifle. ${fmtShopGold(pack.price)} → ${pack.rounds} rounds.`,
   canBuy:!blocked,
   blocked,
   ammoBuy:true,
   run:()=>m.buyShopAmmo(pack.rounds),
  };
 });
}

function shopOffers(m:StashMissionApi):ShopOffer[]{
 const hasGun=m.inventory.includes('gun');
 const gold=m.bankedGold;
 const offers:ShopOffer[]=[];
 // No rifle in the bag → gun catalog first (never bury BUY GUN under upgrades).
 if(!hasGun){
  for(const g of SHOP_GUNS){
   let blocked:string|undefined;
   if(m.inventory.every(x=>x!==null))blocked='Bag full';
   else if(gold<g.price)blocked=`Need ${fmtShopGold(g.price)}`;
   offers.push({
    id:g.id,
    name:`${g.name} · ${fmtShopGold(g.price)}`,
    price:g.price,
    detail:g.detail,
    canBuy:!blocked,
    blocked,
    gunBuy:true,
    run:()=>m.buyShopRifle(g.price,g.name.replace(/^BUY GUN — /,'')),
   });
  }
  offers.push(...ammoOffers(m));
  return offers;
 }
 for(const t of MOD_TRACKS){
  const lv=m.gunMods[t];
  const price=upgradeCost(lv);
  const maxed=lv>=UPGRADE.maxLevel;
  let blocked:string|undefined;
  if(maxed)blocked='Owned (max)';
  else if(gold<price)blocked=`Need ${fmtShopGold(price)}`;
  const rank=lv>0?' '+'I'.repeat(lv):'';
  offers.push({
   id:t,
   name:`${UPGRADE.shopNames[t]}${rank}`,
   price:maxed?0:price,
   detail:maxed?UPGRADE.blurbs[t][2]:UPGRADE.blurbs[t][lv],
   canBuy:!blocked,
   blocked,
   run:()=>m.buyUpgrade(t),
  });
 }
 offers.push(...ammoOffers(m));
 return offers;
}

type Props={
 open:boolean;
 mission:StashMissionApi|null;
 onClose:()=>void;
 onChanged:()=>void;
};

export function StashScreen({open,mission,onClose,onChanged}:Props){
 const [hover,setHover]=useState<string|null>(null);
 const [pick,setPick]=useState<DragPayload|null>(null);
 const [confirm,setConfirm]=useState<ShopOffer|null>(null);
 const dragRef=useRef<DragPayload|null>(null);

 const apply=useCallback((src:DragPayload,dest:DragPayload)=>{
  if(!mission)return;
  let ok=false;
  if(src.kind==='inv'&&dest.kind==='stash')ok=mission.moveInvStash(src.index,dest.index);
  else if(src.kind==='stash'&&dest.kind==='inv')ok=mission.moveInvStash(dest.index,src.index);
  else if(src.kind==='inv'&&dest.kind==='inv')ok=mission.moveInv(src.index,dest.index);
  else if(src.kind==='stash'&&dest.kind==='stash')ok=mission.moveStash(src.index,dest.index);
  else if(src.kind==='ammo'&&dest.kind==='stash')ok=mission.depositAmmoPack(dest.index);
  else if(src.kind==='stash'&&dest.kind==='ammo')ok=mission.withdrawAmmoPack(src.index);
  if(ok)onChanged();
  setPick(null);
  dragRef.current=null;
 },[mission,onChanged]);

 const onDropDest=(dest:DragPayload)=>(e:React.DragEvent)=>{
  e.preventDefault();
  e.stopPropagation();
  setHover(null);
  const src=readDrag(e)||dragRef.current;
  if(!src)return;
  apply(src,dest);
 };

 const allowDrop=(id:string)=>(e:React.DragEvent)=>{
  e.preventDefault();
  e.dataTransfer.dropEffect='move';
  setHover(id);
 };

 if(!open||!mission)return null;
 const m=mission;
 const filled=m.stash.filter(Boolean).length;
 const offers=shopOffers(m);

 const clickSlot=(payload:DragPayload,empty:boolean)=>{
  if(!pick){
   if(empty&&payload.kind!=='ammo')return;
   if(payload.kind==='ammo'&&m.pistol.reserve<=0)return;
   if(payload.kind==='inv'&&!m.inventory[payload.index])return;
   if(payload.kind==='stash'&&!m.stash[payload.index])return;
   setPick(payload);
   return;
  }
  if(pick.kind===payload.kind
   &&('index' in pick)&&('index' in payload)
   &&pick.index===payload.index){
   setPick(null);
   return;
  }
  apply(pick,payload);
 };

 return <div className="stash-screen" role="dialog" aria-label="Stash chest" aria-modal="true"
  onPointerDown={e=>e.stopPropagation()}
  onDragOver={e=>{e.preventDefault();}}>
  <div className="stash-screen-sheet">
   <header className="stash-screen-head">
    <div>
     <div className="eyebrow">HATCH STORAGE</div>
     <h2>Stash</h2>
     <p className="stash-screen-hint">Gold on you: press SAVE GOLD. Drag gear into the chest. Press BUY to spend gold. Esc closes.</p>
    </div>
    <button type="button" className="stash-screen-close" onClick={onClose}>Close <kbd>Esc</kbd></button>
   </header>

   <div className="stash-screen-body">
    <section className="stash-col" aria-label="Inventory">
     <h3>INVENTORY</h3>
     <div className="stash-grid">
      {m.inventory.map((item,i)=>{
       const id=`inv-${i}`;
       const selected=i===m.selected;
       const picked=pick?.kind==='inv'&&pick.index===i;
       return <button type="button" key={i}
        className={`stash-cell ${item?item:''} ${selected?'hot':''} ${picked?'picked':''} ${hover===id?'drop':''}`}
        draggable={!!item}
        onDragStart={e=>{const p:DragPayload={kind:'inv',index:i};dragRef.current=p;writeDrag(e,p);}}
        onDragEnd={()=>{dragRef.current=null;setHover(null);}}
        onDragOver={allowDrop(id)}
        onDragLeave={()=>setHover(null)}
        onDrop={onDropDest({kind:'inv',index:i})}
        onClick={()=>clickSlot({kind:'inv',index:i},!item)}
       >
        <kbd>{i+1}</kbd>
        <Icon item={item}/>
        {item&&<span className="stash-cell-name">{ITEMS[item].short}</span>}
       </button>;
      })}
     </div>

     <button type="button"
      className={`stash-chip ammo ${m.pistol.reserve>0?'live':''} ${pick?.kind==='ammo'?'picked':''} ${hover==='ammo'?'drop':''}`}
      style={{marginTop:12,width:'100%'}}
      draggable={m.pistol.reserve>0}
      onDragStart={e=>{const p:DragPayload={kind:'ammo'};dragRef.current=p;writeDrag(e,p);}}
      onDragEnd={()=>{dragRef.current=null;setHover(null);}}
      onDragOver={allowDrop('ammo')}
      onDragLeave={()=>setHover(null)}
      onDrop={onDropDest({kind:'ammo'})}
      onClick={()=>clickSlot({kind:'ammo'},m.pistol.reserve<=0)}
     >
      <strong>{m.pistol.reserve}</strong>
      <span>SPARE ROUNDS · drag to chest</span>
     </button>
    </section>

    <section className="stash-col" aria-label="Chest and shop">
     <h3>CHEST <em>{filled}/{STASH_CAPACITY}</em></h3>
     <div className="stash-grid">
      {m.stash.map((slot,i)=>{
       const id=`stash-${i}`;
       const kind=slot?.kind==='ammo'?'ammo':slot?.item??'';
       const picked=pick?.kind==='stash'&&pick.index===i;
       return <button type="button" key={i}
        className={`stash-cell ${kind} ${picked?'picked':''} ${hover===id?'drop':''}`}
        draggable={!!slot}
        onDragStart={e=>{const p:DragPayload={kind:'stash',index:i};dragRef.current=p;writeDrag(e,p);}}
        onDragEnd={()=>{dragRef.current=null;setHover(null);}}
        onDragOver={allowDrop(id)}
        onDragLeave={()=>setHover(null)}
        onDrop={onDropDest({kind:'stash',index:i})}
        onClick={()=>clickSlot({kind:'stash',index:i},!slot)}
       >
        <kbd>{i+1}</kbd>
        <StashIcon slot={slot}/>
        {slot?.kind==='ammo'&&<em className="stash-amt">×{slot.amount}</em>}
        {slot?.kind==='item'&&slot.rounds?<em className="stash-amt">+{slot.rounds}</em>:null}
        {slot?.kind==='item'&&modLevel(slot.mods)>0?<em className="stash-mods">+{modLevel(slot.mods)}</em>:null}
        {slot?.kind==='item'&&<span className="stash-cell-name">{ITEMS[slot.item].short}</span>}
        {slot?.kind==='ammo'&&<span className="stash-cell-name">Ammo</span>}
       </button>;
      })}
     </div>

     <div className="stash-save" aria-label="Save Gold">
      {m.gold>0?(
       <button type="button" className="stash-save-btn" onClick={()=>{if(m.bankPocketGold())onChanged();}}>
        <strong>SAVE GOLD</strong>
        <span>{fmtGold(m.gold)} on you — save it to spend in the Shop</span>
       </button>
      ):(
       <div className={`stash-save-banner${m.bankedGold>0?' live':''}`}>
        <strong>{m.bankedGold>0?`Gold saved: ${fmtShopGold(m.bankedGold)}`:'No gold saved yet'}</strong>
        <span>{m.bankedGold>0?'Press BUY below to spend it':'Kill guards, bring gold here, press SAVE GOLD'}</span>
       </div>
      )}
     </div>

     <div className="stash-shop" aria-label="Shop">
      <div className="stash-shop-head">
       <h3>SHOP</h3>
       <b className="stash-shop-gold">Gold: {fmtShopGold(m.bankedGold)}</b>
      </div>
      <div className="stash-shop-list">
       {offers.map(offer=>{
        const owned=offer.blocked==='Owned (max)'||offer.blocked==='Already owned';
        const title=owned
         ?`${offer.name}: ${offer.blocked}`
         :offer.gunBuy||offer.ammoBuy
          ?offer.name
          :`${offer.name}: ${fmtShopGold(offer.price)}`;
        const short=Math.max(0,offer.price-m.bankedGold);
        const almost=!offer.canBuy&&!owned&&offer.price>0&&isAlmostShort(short,offer.price);
        return <div key={offer.id} className={`stash-shop-item${offer.gunBuy?' gun-buy':''}${offer.ammoBuy?' ammo-buy':''}${offer.canBuy?' afford':''}${almost?' almost':''}`}>
         <div className="stash-shop-row">
          <strong className="stash-shop-name">{title}</strong>
         </div>
         <p className="stash-shop-detail">{offer.detail}</p>
         {offer.blocked&&offer.blocked!=='Owned (max)'&&offer.blocked!=='Already owned'&&(
          <p className="stash-shop-blocked">{offer.blocked}</p>
         )}
         <button type="button" className={`stash-shop-buy-btn${offer.gunBuy?' gun':''}${offer.ammoBuy?' ammo':''}`}
          disabled={!offer.canBuy}
          onClick={()=>setConfirm(offer)}
         >{offer.gunBuy?`BUY GUN · ${fmtShopGold(offer.price)}`:offer.ammoBuy?`BUY ${SHOP_AMMO_PACKS.find(p=>p.id===offer.id)?.rounds??''} ROUNDS · ${fmtShopGold(offer.price)}`:'BUY'}</button>
        </div>;
       })}
      </div>
     </div>
    </section>
   </div>
  </div>

  {confirm&&<div className="stash-confirm" role="alertdialog" aria-label="Confirm purchase">
   <div className="stash-confirm-card">
    <h4>Buy {confirm.name}?</h4>
    <p>Price: <strong>{fmtShopGold(confirm.price)}</strong></p>
    <p className="stash-confirm-balance">Your gold: {fmtShopGold(m.bankedGold)}</p>
    <div className="stash-confirm-actions">
     <button type="button" className="stash-confirm-cancel" onClick={()=>setConfirm(null)}>Cancel</button>
     <button type="button" className="stash-confirm-ok" onClick={()=>{
      if(confirm.run())onChanged();
      setConfirm(null);
     }}>Confirm BUY</button>
    </div>
   </div>
  </div>}
 </div>;
}
