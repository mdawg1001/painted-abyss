import * as THREE from 'three';

/** Original lightweight rifle prop, grip at origin and muzzle along local -Z. */
let prototype:THREE.Group|undefined;
export function createCivilianRifle(){
 if(!prototype){
  const g=new THREE.Group();g.name='civilianRifle';
  const steel=new THREE.MeshStandardMaterial({color:0x303638,roughness:.55,metalness:.7});
  const wood=new THREE.MeshStandardMaterial({color:0x70432c,roughness:.78});
  const black=new THREE.MeshStandardMaterial({color:0x1b2023,roughness:.55,metalness:.5});
  const round=(name:string,geo:THREE.BufferGeometry,at:number[],mat:THREE.Material,rx=0)=>{
   const mesh=new THREE.Mesh(geo,mat);mesh.name=name;mesh.position.set(...at as [number,number,number]);mesh.rotation.x=rx;g.add(mesh);return mesh;
  };
  // Rounded primitives so the prop doesn't read as Minecraft-block geometry next to the body.
  round('receiver',new THREE.CapsuleGeometry(.04,.22,4,10),[0,.065,-.12],steel,Math.PI/2);
  round('woodStock',new THREE.CapsuleGeometry(.032,.18,4,8),[0,.065,.16],wood,Math.PI/2+.08);
  round('butt',new THREE.BoxGeometry(.06,.13,.023),[0,.052,.288],black);
  round('grip',new THREE.CapsuleGeometry(.03,.09,4,8),[0,-.045,.005],wood,-.2);
  round('handguard',new THREE.CapsuleGeometry(.038,.14,4,8),[0,.065,-.36],wood,Math.PI/2);
  round('magazineUpper',new THREE.CapsuleGeometry(.028,.07,3,8),[0,-.025,-.17],black,-.13);
  round('magazineLower',new THREE.CapsuleGeometry(.028,.08,3,8),[0,-.125,-.155],black,-.30);
  const barrel=new THREE.Mesh(new THREE.CylinderGeometry(.016,.019,.31,14),steel);barrel.name='barrel';barrel.rotation.x=Math.PI/2;barrel.position.set(0,.082,-.56);g.add(barrel);
  round('frontSight',new THREE.BoxGeometry(.02,.055,.028),[0,.125,-.66],steel);
  round('rearSight',new THREE.BoxGeometry(.022,.028,.028),[0,.124,-.02],steel);
  const muzzle=new THREE.Object3D();muzzle.name='guardMuzzle';muzzle.position.set(0,.082,-.715);g.add(muzzle);
  g.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  prototype=g;
 }
 return prototype.clone(true);
}
