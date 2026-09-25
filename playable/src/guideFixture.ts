import * as THREE from 'three';
import { PALETTE } from './artPalette';

/** Sloped, full-size guide plate; readable at standing height between route stops. */
export function createGuideFixture(){
 const fixture=new THREE.Group();fixture.name='routeGuide';
 const metal=new THREE.MeshStandardMaterial({color:PALETTE.steel,roughness:.85,metalness:.35});
 const base=new THREE.Mesh(new THREE.BoxGeometry(.72,.36,.80),metal);base.position.y=.18;
 const panel=new THREE.Group();panel.position.y=.68;panel.rotation.x=-.65;
 const housing=new THREE.Mesh(new THREE.BoxGeometry(1.05,.12,1.35),metal);housing.name='guideHousing';
 // Broad luminous border and an inset black face retain a clear silhouette in low light.
 const lens=new THREE.Mesh(new THREE.BoxGeometry(.96,.06,1.26),new THREE.MeshBasicMaterial({color:PALETTE.amberGlow}));lens.name='guideLens';lens.position.y=.085;
 const face=new THREE.Mesh(new THREE.BoxGeometry(.80,.025,1.10),metal);face.position.y=.13;
 const shape=new THREE.Shape();shape.moveTo(0,.45);shape.lineTo(-.30,.05);shape.lineTo(-.11,.05);shape.lineTo(-.11,-.40);shape.lineTo(.11,-.40);shape.lineTo(.11,.05);shape.lineTo(.30,.05);shape.closePath();
 const arrow=new THREE.Mesh(new THREE.ShapeGeometry(shape),new THREE.MeshBasicMaterial({color:PALETTE.ivory,side:THREE.DoubleSide}));arrow.name='guideArrow';arrow.rotation.x=Math.PI/2;arrow.position.y=.155;
 panel.add(housing,lens,face,arrow);
 const light=new THREE.PointLight(PALETTE.amber,.85,5.5,1.5);light.position.y=1;
 fixture.add(base,panel,light);
 return fixture;
}
