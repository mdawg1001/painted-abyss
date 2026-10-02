import * as THREE from 'three';

/** Original lightweight rifle prop, grip at origin and muzzle along local -Z. */
let prototype:THREE.Group|undefined;
export function createCivilianRifle(){
 if(!prototype){
  const g=new THREE.Group();g.name='civilianRifle';
  const steel=new THREE.MeshStandardMaterial({color:0x303638,roughness:.6,metalness:.65});
  const wood=new THREE.MeshStandardMaterial({color:0x70432c,roughness:.82});
  const black=new THREE.MeshStandardMaterial({color:0x1b2023,roughness:.6,metalness:.45});
  const box=(name:string,size:number[],at:number[],mat:THREE.Material,angle=0)=>{
   const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size as [number,number,number]),mat);mesh.name=name;mesh.position.set(...at as [number,number,number]);mesh.rotation.x=angle;g.add(mesh);return mesh;
  };
  box('receiver',[.075,.09,.32],[0,.065,-.12],steel);
  box('woodStock',[.055,.11,.25],[0,.065,.16],wood,.08);
  box('butt',[.06,.13,.023],[0,.052,.288],black);
  box('grip',[.055,.135,.065],[0,-.045,.005],wood,-.2);
  box('handguard',[.08,.075,.19],[0,.065,-.36],wood);
  box('magazineUpper',[.047,.11,.085],[0,-.025,-.17],black,-.13);
  box('magazineLower',[.047,.12,.085],[0,-.125,-.155],black,-.30);
  const barrel=new THREE.Mesh(new THREE.CylinderGeometry(.019,.019,.31,8),steel);barrel.rotation.x=Math.PI/2;barrel.position.set(0,.082,-.56);g.add(barrel);
  box('frontSight',[.025,.06,.035],[0,.125,-.66],steel);
  box('rearSight',[.027,.03,.03],[0,.124,-.02],steel);
  const muzzle=new THREE.Object3D();muzzle.name='guardMuzzle';muzzle.position.set(0,.082,-.715);g.add(muzzle);
  g.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  prototype=g;
 }
 return prototype.clone(true);
}
