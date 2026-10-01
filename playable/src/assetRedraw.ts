import {DefaultLoadingManager} from 'three';
/** Preserve the existing callback; invalidate the paused view after an asset settles. */
export function onAssetSettled(redraw:()=>void){
 const previous=DefaultLoadingManager.onProgress;
 const callback:typeof previous=(url,loaded,total)=>{previous?.(url,loaded,total);redraw();};
 DefaultLoadingManager.onProgress=callback;
 return ()=>{if(DefaultLoadingManager.onProgress===callback)DefaultLoadingManager.onProgress=previous;};
}
