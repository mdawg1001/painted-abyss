import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {createGuideFixture} from '../src/guideFixture';

test('guide arrows and lenses remain multi-pixel at the longest route spacing',()=>{
 const fixture=createGuideFixture();fixture.updateMatrixWorld(true);
 const camera=new THREE.PerspectiveCamera(70,1280/800,.1,100);
 camera.position.set(0,1.7,-16);camera.lookAt(0,.68,0);camera.updateMatrixWorld(true);
 for(const name of ['guideArrow','guideLens']){
  const mesh=fixture.getObjectByName(name) as THREE.Mesh;
  const vertices=mesh.geometry.getAttribute('position');
  const points=Array.from({length:vertices.count},(_,i)=>new THREE.Vector3().fromBufferAttribute(vertices,i).applyMatrix4(mesh.matrixWorld).project(camera));
  const width=(Math.max(...points.map(p=>p.x))-Math.min(...points.map(p=>p.x)))*640;
  const height=(Math.max(...points.map(p=>p.y))-Math.min(...points.map(p=>p.y)))*400;
  assert.ok(width>=15&&height>=9,`${name}: ${width.toFixed(1)} x ${height.toFixed(1)} pixels at 16 m`);
 }
});
