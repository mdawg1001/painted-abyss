import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { type PbrMaps, triplanarGlsl } from '../rockMaps';

type Hooks = { onReady:()=>void; onPause:()=>void; onStatus:(d:number,z:string)=>void; onToggleUI:()=>void; onGlide:(v:boolean)=>void; onError:(s:string)=>void };
type Creature = { group:THREE.Group; fins:THREE.Group[]; tail:THREE.Group; center:THREE.Vector3; radius:number; speed:number; phase:number; kind:string; scale:number };
const TAU=Math.PI*2;
let seed=91623;
const rnd=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
const rand=(a:number,b:number)=>a+rnd()*(b-a);
const clamp=THREE.MathUtils.clamp;
const vec=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
function noise(x:number,z:number){return Math.sin(x*.063+Math.sin(z*.047)*2.3)*1.6+Math.sin(z*.09+x*.023)*1.3+Math.sin(x*.18+z*.12)*.5;}
function floorHeight(x:number,z:number){return -15+noise(x,z)+Math.max(0,Math.abs(x+Math.sin(z*.025)*13)-22)*.085-Math.max(0,-z-110)*.026;}

const shaderNoise=`
float hash21(vec2 p){p=fract(p*vec2(123.34,345.45));p+=dot(p,p+34.345);return fract(p.x*p.y);}
float valueNoise(vec2 p){vec2 i=floor(p), f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x),mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x),f.y);}
float caustic(vec2 p,float t){p+=vec2(sin(p.y*.6+t*.37),cos(p.x*.7+t*.29))*.8;float a=sin(p.x*1.9+p.y*.6+t*.52)+sin(p.y*2.1-p.x*.3-t*.41);float b=sin(p.x*2.6-p.y*.8-t*.32)+sin(p.y*2.5+p.x*.6+t*.38);return pow(1.-abs(sin(a+b)),16.);}
`;

export class OceanWorld {
  scene=new THREE.Scene(); camera:THREE.PerspectiveCamera; renderer:THREE.WebGLRenderer;
  uniforms={uTime:{value:0}};
  host:HTMLDivElement; hooks:Hooks; clock=new THREE.Clock(); frame=0; alive=true; playing=false; started=false; glide=false; sound=true;
  yaw=0; pitch=-.1; targetYaw=0; targetPitch=-.1;
  keys=new Set<string>(); velocity=vec(); move=vec(); forward=vec(); right=vec(); upAxis=vec(0,1,0); position=vec(0,3,35);
  touch={x:0,y:0,z:0}; dragging=false; lastPointer={x:0,y:0}; listeners:(()=>void)[]=[];
  creatures:Creature[]=[]; fish!:THREE.InstancedMesh; fishData:{center:THREE.Vector3; phase:number;radius:number;speed:number;size:number}[]=[];
  particles!:THREE.Points; kelpMaterials:THREE.MeshStandardMaterial[]=[]; colliders:{pos:THREE.Vector3;radius:number;height:number}[]=[];
  dummy=new THREE.Object3D(); statusAt=0; time=0; pausedTime=0; audioContext:AudioContext|null=null; master:GainNode|null=null;
  observer!:ResizeObserver; reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(host:HTMLDivElement,hooks:Hooks,options:{deferStart?:boolean}={}){
    this.host=host;this.hooks=hooks;
    this.camera=new THREE.PerspectiveCamera(67,host.clientWidth/host.clientHeight,.12,600);
    this.camera.position.copy(this.position);this.camera.rotation.order='YXZ';this.camera.rotation.set(this.pitch,this.yaw,0);
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.7));this.renderer.setSize(host.clientWidth,host.clientHeight);
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.18;
    this.renderer.setClearColor(0x0a5365);host.appendChild(this.renderer.domElement);
    this.scene.background=new THREE.Color(0x0b5363);this.scene.fog=new THREE.FogExp2(0x0b5363,.014);
    if(options.deferStart)return;
    const ambient=new THREE.HemisphereLight(0x98e2df,0x1b3641,2.2);this.scene.add(ambient);
    const sun=new THREE.DirectionalLight(0xe1ffec,3.2);sun.position.set(-35,65,-10);this.scene.add(sun);
    const rim=new THREE.DirectionalLight(0x48cbd0,1.5);rim.position.set(30,18,-60);this.scene.add(rim);
    this.terrain();this.rocks();this.plants();this.surface();this.life();this.suspendedParticles();
    this.bind();this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);
    this.animate();requestAnimationFrame(()=>hooks.onReady());
  }

  material(color:THREE.ColorRepresentation,detail:'rock'|'skin'|'sand'|'plain'='plain',roughness=.82,causticGain=1,maps?:PbrMaps,mossMaps?:PbrMaps){
    const m=new THREE.MeshStandardMaterial({color,roughness,metalness:detail==='skin'?.05:0});
    const gain=Math.max(0,causticGain);
    const usePbr=!!maps&&(detail==='rock'||detail==='sand');
    const useMoss=usePbr&&!!mossMaps;
    const mossAmount=detail==='rock'?'0.7':detail==='sand'?'0.4':'0.';
    m.onBeforeCompile=shader=>{
      shader.uniforms.uTime=this.uniforms.uTime;
      shader.vertexShader='varying vec3 vOceanWorld; varying vec3 vOceanLocal; varying vec3 vOceanWNormal;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvOceanLocal=position;');
      shader.vertexShader=shader.vertexShader.replace('#include <defaultnormal_vertex>',`#include <defaultnormal_vertex>
        vOceanWNormal=normalize(mat3(modelMatrix)*objectNormal);`);
      shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
        vec4 oceanPos=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          oceanPos=instanceMatrix*oceanPos;
        #endif
        vOceanWorld=(modelMatrix*oceanPos).xyz;`);
      let fragHead='uniform float uTime; varying vec3 vOceanWorld; varying vec3 vOceanLocal; varying vec3 vOceanWNormal;\n'+shaderNoise;
      if(usePbr&&maps){
        shader.uniforms.uPbrDiff={value:maps.diff};
        shader.uniforms.uPbrNor={value:maps.nor};
        shader.uniforms.uPbrArm={value:maps.arm};
        shader.uniforms.uPbrScale={value:maps.scale};
        fragHead+='uniform sampler2D uPbrDiff;uniform sampler2D uPbrNor;uniform sampler2D uPbrArm;uniform float uPbrScale;\n'+triplanarGlsl;
        if(useMoss&&mossMaps){
          shader.uniforms.uMossDiff={value:mossMaps.diff};
          shader.uniforms.uMossNor={value:mossMaps.nor};
          shader.uniforms.uMossArm={value:mossMaps.arm};
          shader.uniforms.uMossScale={value:mossMaps.scale};
          fragHead+='uniform sampler2D uMossDiff;uniform sampler2D uMossNor;uniform sampler2D uMossArm;uniform float uMossScale;\n';
        }
      }
      shader.fragmentShader=fragHead+shader.fragmentShader;
      let detailCode='';
      if(usePbr){
        // Albedo + AO only here; roughness/metalness applied after their map chunks.
        detailCode=`{
          vec3 wn=normalize(vOceanWNormal);
          vec3 b=triBlend(wn);
          vec3 albedo=triAlbedo(uPbrDiff,vOceanWorld,b,uPbrScale);
          vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
          float wet=${detail==='sand'?'0.5':'0.62'};
          albedo*=mix(1.,.62,wet);
          ${useMoss?`
          vec3 mossAlb=triAlbedo(uMossDiff,vOceanWorld,b,uMossScale);
          vec3 mossArm=triArm(uMossArm,vOceanWorld,b,uMossScale);
          // Sparse accent — up to 35% over base stone
          float moss=min(mossCoverage(vOceanWorld,wn,arm.r,${mossAmount}),.35);
          mossAlb*=mix(1.,.9,wet*.35);
          albedo=mix(albedo,mossAlb,moss);
          arm=mix(arm,mossArm,moss);
          `:''}
          diffuseColor.rgb*=albedo*mix(.62,1.,arm.r);
        }`;
      }else{
        if(detail==='sand')detailCode=`float grain=valueNoise(vOceanWorld.xz*15.);float ripple=sin(vOceanWorld.x*.7+vOceanWorld.z*3.+valueNoise(vOceanWorld.xz*.11)*5.);diffuseColor.rgb*=.82+grain*.22+ripple*.07;`;
        if(detail==='rock')detailCode=`float n=valueNoise(vOceanWorld.xz*1.7+vOceanWorld.y*.8);float layer=sin(vOceanWorld.y*5.+valueNoise(vOceanWorld.xz)*3.);diffuseColor.rgb*=.67+n*.5+layer*.075;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.22,.16),smoothstep(.57,.84,n)*.6);`;
      }
      if(detail==='skin')detailCode=`float blot=valueNoise(vOceanLocal.xz*5.+vOceanLocal.y*2.);float fine=valueNoise(vOceanLocal.xy*48.);float bands=sin(vOceanLocal.x*5.5+vOceanLocal.z*3.+blot*4.);diffuseColor.rgb*=.6+blot*.5+fine*.15;diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*.42,smoothstep(.5,.9,bands)*.45);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.54,.62,.49),(1.-smoothstep(-.75,.0,vOceanLocal.y))*.65);`;
      shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>\n${detailCode}`);
      if(usePbr){
        const wet=detail==='sand'?'0.5':'0.62';
        shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
          {
            vec3 wn=normalize(vOceanWNormal);vec3 b=triBlend(wn);
            vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
            float wet=${wet};
            ${useMoss?`
            vec3 mossArm=triArm(uMossArm,vOceanWorld,b,uMossScale);
            float moss=min(mossCoverage(vOceanWorld,wn,arm.r,${mossAmount}),.35);
            arm.g=mix(arm.g,mossArm.g,moss);
            roughnessFactor=clamp(mix(arm.g*roughnessFactor,mix(arm.g*roughnessFactor*.35,arm.g*roughnessFactor*.78,moss),wet),.06,.98);
            `:`
            roughnessFactor=clamp(mix(arm.g*roughnessFactor,arm.g*roughnessFactor*.35,wet),.06,.95);
            `}
          }`);
        shader.fragmentShader=shader.fragmentShader.replace('#include <metalnessmap_fragment>',`#include <metalnessmap_fragment>
          {
            vec3 wn=normalize(vOceanWNormal);vec3 b=triBlend(wn);
            vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
            ${useMoss?`
            vec3 mossArm=triArm(uMossArm,vOceanWorld,b,uMossScale);
            float moss=min(mossCoverage(vOceanWorld,wn,arm.r,${mossAmount}),.35);
            arm.b=mix(arm.b,mossArm.b,moss);
            `:''}
            metalnessFactor=clamp(arm.b,.0,.35);
          }`);
        shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
          {
            vec3 wn=normalize(vOceanWNormal);
            vec3 b=triBlend(wn);
            vec3 nRock=triNormalView(uPbrNor,vOceanWorld,wn,b,uPbrScale,viewMatrix);
            ${useMoss?`
            vec3 arm=triArm(uPbrArm,vOceanWorld,b,uPbrScale);
            float moss=min(mossCoverage(vOceanWorld,wn,arm.r,${mossAmount}),.35);
            vec3 nMoss=triNormalView(uMossNor,vOceanWorld,wn,b,uMossScale,viewMatrix);
            normal=normalize(mix(nRock,nMoss,moss));
            `:`
            normal=nRock;
            `}
          }`);
      }
      if(gain>0){
        if(usePbr){
          // Soft caustics only — strong procedural caustics fight photographic albedo
          shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(0.012*gain).toFixed(4)};\n#include <opaque_fragment>`);
        }else{
          shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`float ca=caustic(vOceanWorld.xz*.55+vOceanWorld.y*.12,uTime);float sunward=pow(max(0.,dot(normalize(normal),vec3(.15,.92,.28))),1.35);outgoingLight+=vec3(.55,.9,.88)*ca*sunward*${(0.055*gain).toFixed(4)};\n#include <opaque_fragment>`);
        }
      }
    };
    m.customProgramCacheKey=()=>`${detail}:${gain.toFixed(2)}:pbr${usePbr?maps!.key:'0'}:moss${useMoss?mossMaps!.key+':35pct':'0'}`;
    return m;
  }

  terrain(){
    const g=new THREE.PlaneGeometry(700,700,180,180);g.rotateX(-Math.PI/2);
    const a=g.attributes.position;
    for(let i=0;i<a.count;i++)a.setY(i,floorHeight(a.getX(i),a.getZ(i)));
    g.computeVertexNormals();const floor=new THREE.Mesh(g,this.material(0xafa785,'sand'));this.scene.add(floor);
  }
  rocks(){
    const mats=[this.material(0x7b8372,'rock'),this.material(0x737969,'rock'),this.material(0x627b6c,'rock')];
    const prototypes:THREE.BufferGeometry[]=[];
    for(let n=0;n<5;n++){
      const g=new THREE.IcosahedronGeometry(1,3);const p=g.attributes.position;
      for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i),z=p.getZ(i);const d=1+.12*Math.sin(x*8+n)*Math.sin(z*7-y*4)+.055*Math.sin(y*19+x*8);p.setXYZ(i,x*d,y*d,z*d);}
      g.computeVertexNormals();prototypes.push(g);
    }
    const add=(x:number,z:number,sx:number,sy:number,sz:number)=>{
      const m=new THREE.Mesh(prototypes[Math.floor(rnd()*5)],mats[Math.floor(rnd()*3)]);
      m.position.set(x,floorHeight(x,z)+sy*.15,z);m.scale.set(sx,sy,sz);m.rotation.set(rand(-.2,.2),rand(0,TAU),rand(-.12,.12));this.scene.add(m);
      if(sx>3)this.colliders.push({pos:m.position.clone(),radius:Math.min(sx,sz)*.88,height:sy*.95});
    };
    for(let i=0;i<95;i++){
      const z=rand(-205,95);const side=i%2?1:-1;const x=side*rand(24,65)+Math.sin(z*.025)*8;
      const s=rand(3,10);add(x,z,s,rand(4,15),s*rand(.7,1.5));
    }
    // A weathered ridge frames the opening into deeper water.
    add(-23,-16,13,19,15);add(-35,-24,17,24,14);add(34,-50,15,22,17);add(43,-69,18,28,14);
    for(let i=0;i<210;i++){const x=rand(-160,160),z=rand(-230,140);const s=rand(.3,2.8);add(x,z,s,s*rand(.4,1),s*rand(.6,1.5));}
    // Broken natural stone arch, far enough from the starting corridor to explore around it.
    add(-28,-103,8,20,7);add(-3,-103,6,18,7);add(-15,-103,17,4,6);
  }

  plantMaterial(color:number){
    const m=this.material(color,'plain',.9);m.side=THREE.DoubleSide;
    const previous=m.onBeforeCompile;
    m.onBeforeCompile=(shader,renderer)=>{
      previous(shader,renderer);
      shader.vertexShader='attribute float aBend;\n'+shader.vertexShader;
      shader.vertexShader=shader.vertexShader.replace('vOceanLocal=position;',`vOceanLocal=position; vec3 ip=vec3(0.);
      #ifdef USE_INSTANCING
      ip=instanceMatrix[3].xyz;
      #endif
      transformed.x+=sin(uTime*.6+ip.x*.3+position.y*.7)*aBend*.35;
      transformed.z+=sin(uTime*.43+ip.z*.4+position.y*.45)*aBend*.25;`);
      shader.vertexShader='uniform float uTime;\n'+shader.vertexShader;
    };m.customProgramCacheKey=()=>`plant${color}`;return m;
  }

  plants(){
    // Each blade is a curved ribbon with a tapered tip, animated by a slow current.
    const ribbon=(height:number,width:number,bend:number)=>{
      const p=[],uv=[],ind=[],b=[];const steps=12;
      for(let i=0;i<=steps;i++){let t=i/steps;const w=width*Math.pow(Math.sin(Math.PI*t*.95),.7)+.008;for(let s=-1;s<=1;s+=2){p.push(s*w+Math.sin(t*2)*bend,height*t,Math.sin(t*3)*bend*.45);uv.push((s+1)/2,t);b.push(t*t*height*.3);}if(i<steps){let n=i*2;ind.push(n,n+1,n+2,n+1,n+3,n+2);}}
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setAttribute('aBend',new THREE.Float32BufferAttribute(b,1));g.setIndex(ind);g.computeVertexNormals();return g;
    };
    for(let variant=0;variant<3;variant++){
      const g=ribbon(variant===2?9:2.5,variant===2?.25:.09,.2);
      const mat=this.plantMaterial([0x426b42,0x64773d,0x506b3c][variant]);
      const count=variant===2?480:1900;const mesh=new THREE.InstancedMesh(g,mat,count);
      for(let i=0;i<count;i++){
        let x=rand(-110,110),z=rand(-220,100);
        // Keep a sandy meandering corridor down the centre.
        const corridor=Math.abs(x+Math.sin(z*.035)*8);if(corridor<13)x+=Math.sign(x||1)*(15-corridor);
        this.dummy.position.set(x,floorHeight(x,z)-.1,z);this.dummy.rotation.set(rand(-.08,.08),rand(0,TAU),0);
        const s=rand(.5,1.7);this.dummy.scale.set(s,s,s);this.dummy.updateMatrix();mesh.setMatrixAt(i,this.dummy.matrix);
      }this.scene.add(mesh);
    }
    // Fan corals and small branching colonies soften the mineral seabed.
    const coralGeometries:THREE.BufferGeometry[]=[];
    const branch=(a:THREE.Vector3,b:THREE.Vector3,r:number)=>{
      const diff=b.clone().sub(a);const geo=new THREE.CylinderGeometry(r*.48,r,diff.length(),5,1);geo.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(vec(0,1,0),diff.normalize()));geo.translate((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);coralGeometries.push(geo);
    };
    const grow=(a:THREE.Vector3,angle:number,len:number,depth:number)=>{
      const b=a.clone().add(vec(Math.sin(angle)*len,Math.cos(angle)*len,rand(-.13,.13)));branch(a,b,depth*.025+.014);
      if(depth>0){grow(b,angle-.43,len*.7,depth-1);grow(b,angle+.4,len*.74,depth-1);}
    };grow(vec(),0,1.05,4);
    const fanGeo=mergeGeometries(coralGeometries);coralGeometries.forEach(g=>g.dispose());
    if(fanGeo){
      const mats=[this.material(0x9b655e),this.material(0x927e57),this.material(0x627d73)];
      for(let i=0;i<90;i++){
        const mesh=new THREE.Mesh(fanGeo,mats[i%3]);const x=rand(-65,65),z=rand(-170,60);
        mesh.position.set(x,floorHeight(x,z),z);mesh.rotation.y=rand(0,TAU);mesh.scale.setScalar(rand(.6,1.4));this.scene.add(mesh);
      }
    }
  }

  surface(){
    const mat=new THREE.ShaderMaterial({uniforms:{uTime:this.uniforms.uTime},side:THREE.DoubleSide,transparent:true,depthWrite:false,
      vertexShader:`varying vec3 wp; uniform float uTime;void main(){vec3 p=position;p.z+=sin(p.x*.09+uTime*.25)*.3+sin(p.y*.11-uTime*.3)*.2;wp=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,
      fragmentShader:`varying vec3 wp;uniform float uTime;${shaderNoise}void main(){float c=caustic(wp.xz*.16,uTime*.7);float n=valueNoise(wp.xz*.025+uTime*.02);vec3 col=mix(vec3(.1,.48,.54),vec3(.55,.86,.81),n);col+=c*.24;float sun=exp(-length(wp.xz-vec2(-38.,-36.))*.014);col+=vec3(.35,.4,.3)*sun;gl_FragColor=vec4(col,.89);}`});
    const plane=new THREE.Mesh(new THREE.PlaneGeometry(800,800,55,55),mat);plane.rotation.x=-Math.PI/2;plane.position.y=26;this.scene.add(plane);
    const beamMat=new THREE.ShaderMaterial({uniforms:{uTime:this.uniforms.uTime},transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
      vertexShader:`varying vec2 vUv;varying vec3 wPos;void main(){vUv=uv;wPos=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
      fragmentShader:`varying vec2 vUv;varying vec3 wPos;uniform float uTime;void main(){float edge=pow(max(0.,sin(vUv.x*3.14159)),3.);float vertical=sin(vUv.y*3.14159);float pulse=.78+sin(wPos.x*.14+uTime*.21)*.12;gl_FragColor=vec4(.38,.78,.67,edge*vertical*pulse*.038);}`});
    for(let i=0;i<30;i++){
      const length=rand(34,54);const beam=new THREE.Mesh(new THREE.CylinderGeometry(rand(.3,1.2),rand(2,5),length,16,1,true),beamMat);
      beam.position.set(rand(-85,95),26-length*.48,rand(-130,55));beam.rotation.z=-.26;beam.rotation.x=.13;this.scene.add(beam);
    }
  }

  ellipsoid(group:THREE.Group,material:THREE.Material,x:number,y:number,z:number,sx:number,sy:number,sz:number){
    const g=new THREE.SphereGeometry(1,32,20);g.scale(sx,sy,sz);g.translate(x,y,z);const m=new THREE.Mesh(g,material);group.add(m);return m;
  }
  tube(points:THREE.Vector3[],radii:number[],material:THREE.Material,segments=56,radial=12){
    const curve=new THREE.CatmullRomCurve3(points);const frames=curve.computeFrenetFrames(segments,false);const positions=[],uv=[],indices=[];
    for(let i=0;i<=segments;i++){
      const t=i/segments,p=curve.getPoint(t),ri=t*(radii.length-1),j=Math.min(Math.floor(ri),radii.length-2),r=THREE.MathUtils.lerp(radii[j],radii[j+1],ri-j);
      for(let k=0;k<=radial;k++){const theta=k/radial*TAU;const v=p.clone().addScaledVector(frames.normals[i],Math.cos(theta)*r).addScaledVector(frames.binormals[i],Math.sin(theta)*r);positions.push(v.x,v.y,v.z);uv.push(k/radial,t);if(i<segments&&k<radial){const a=i*(radial+1)+k,b=a+radial+1;indices.push(a,a+1,b,b,a+1,b+1);}}
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();return new THREE.Mesh(g,material);
  }
  flipper(material:THREE.Material,length:number,width:number){
    const positions=[],uv=[],indices=[];const n=20,rad=12;
    for(let i=0;i<=n;i++){const t=i/n,w=Math.max(.015,Math.pow(Math.sin(Math.PI*t),.7)*width);for(let j=0;j<=rad;j++){const a=j/rad*TAU;positions.push(-t*t*length*.32+w*Math.cos(a),Math.sin(a)*w*.18,t*length);uv.push(j/rad,t);if(i<n&&j<rad){const v=i*(rad+1)+j;indices.push(v,v+1,v+rad+1,v+1,v+rad+2,v+rad+1);}}}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();return new THREE.Mesh(geo,material);
  }

  plesiosaur(scale=1):Omit<Creature,'center'|'radius'|'speed'|'phase'> {
    const group=new THREE.Group();const skin=this.material(0x546960,'skin',.51);const fins:THREE.Group[]=[];
    this.ellipsoid(group,skin,0,0,0,2.6,.92,1.24);
    group.add(this.tube([vec(1.3,.2),vec(2.8,.38),vec(4.3,1.06),vec(5.8,1.7),vec(7.1,1.86)],[.76,.46,.32,.25,.22],skin));
    this.ellipsoid(group,skin,7.38,1.88,0,.65,.3,.31);
    this.ellipsoid(group,skin,7.79,1.79,0,.42,.15,.22);
    const eye=new THREE.MeshStandardMaterial({color:0x061211,roughness:.12,metalness:.3});
    for(const s of [-1,1]){
      this.ellipsoid(group,this.material(0x8b8970),7.37,2.01,s*.262,.11,.095,.039);
      this.ellipsoid(group,eye,7.4,2.014,s*.294,.065,.06,.024);
      const jaw=this.tube([vec(7.34,1.73,s*.265),vec(7.78,1.72,s*.205),vec(8.02,1.75,s*.105)],[.012,.012,.006],eye,12,4);group.add(jaw);
      for(let i=0;i<2;i++){
        const pivot=new THREE.Group();pivot.position.set(i===0?1.2:-1.65,-.34,s*.85);const fin=this.flipper(skin,i===0?3.3:2.8,.68);if(s<0)fin.rotation.x=Math.PI;pivot.add(fin);pivot.userData.side=s;pivot.userData.phase=i*.8;group.add(pivot);fins.push(pivot);
      }
    }
    const tail=new THREE.Group();tail.position.x=-1.9;tail.add(this.tube([vec(),vec(-1.7,-.1),vec(-3.4,-.06),vec(-4.2,.03)],[.7,.36,.12,.012],skin,36));group.add(tail);
    group.scale.setScalar(scale);return {group,fins,tail,kind:'plesiosaur',scale};
  }

  ichthyosaur(scale=1):Omit<Creature,'center'|'radius'|'speed'|'phase'> {
    const group=new THREE.Group();const skin=this.material(0x496570,'skin',.42);const fins:THREE.Group[]=[];
    this.ellipsoid(group,skin,0,0,0,2.6,.77,.73);
    group.add(this.tube([vec(1.5,.0),vec(2.5,-.03),vec(3.65,-.14)],[.57,.31,.045],skin,35));
    const eyes=new THREE.MeshStandardMaterial({color:0x061213,roughness:.15});
    for(const s of [-1,1]){this.ellipsoid(group,eyes,1.75,.27,s*.45,.12,.13,.06);const p=new THREE.Group();p.position.set(.9,-.25,s*.58);const f=this.flipper(skin,1.7,.4);if(s<0)f.rotation.x=Math.PI;p.add(f);p.userData.side=s;p.userData.phase=0;group.add(p);fins.push(p);}
    const dorsal=this.flipper(skin,1.3,.6);dorsal.rotation.x=-Math.PI/2;dorsal.position.set(-.35,.55,0);group.add(dorsal);
    const tail=new THREE.Group();tail.position.x=-1.9;tail.add(this.tube([vec(),vec(-1.3,0),vec(-2.15,0)],[.5,.23,.06],skin,24));
    for(const s of [-1,1]){const f=this.flipper(skin,1.35,.42);f.position.x=-2.0;f.rotation.x=s*Math.PI/2;tail.add(f);}group.add(tail);
    group.scale.setScalar(scale);return {group,fins,tail,kind:'ichthyosaur',scale};
  }

  spinosaurus(scale=1):Omit<Creature,'center'|'radius'|'speed'|'phase'> {
    const group=new THREE.Group();const skin=this.material(0x676953,'skin',.7);const fins:THREE.Group[]=[];
    this.ellipsoid(group,skin,0,0,0,2.4,1.1,.87);
    group.add(this.tube([vec(1.5,.3),vec(2.6,.75),vec(3.4,.8)],[.66,.43,.36],skin,32));
    this.ellipsoid(group,skin,3.8,.75,0,.94,.39,.37);this.ellipsoid(group,skin,4.55,.62,0,.85,.22,.23);
    const sailP=[],sailI=[],sailUV=[];
    for(let i=0;i<=28;i++){const t=i/28,x=-2.25+t*4.3,h=.7+Math.sin(Math.PI*t)*2.35+.22*Math.sin(t*13);sailP.push(x,.4,0,x,h,0);sailUV.push(t,0,t,1);if(i<28){const a=i*2;sailI.push(a,a+1,a+2,a+1,a+3,a+2);}}
    const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.Float32BufferAttribute(sailP,3));sg.setAttribute('uv',new THREE.Float32BufferAttribute(sailUV,2));sg.setIndex(sailI);sg.computeVertexNormals();const sm=this.material(0x665346,'skin');sm.side=THREE.DoubleSide;group.add(new THREE.Mesh(sg,sm));
    for(let i=0;i<15;i++){const t=i/14,x=-2.2+t*4.2,h=.7+Math.sin(Math.PI*t)*2.35+.22*Math.sin(t*13);group.add(this.tube([vec(x,.6,.02),vec(x-.1,h*.6,.02),vec(x,h,.02)],[.045,.031,.012],skin,8,5));}
    const eye=new THREE.MeshStandardMaterial({color:0x151912,roughness:.3});
    for(const s of [-1,1]){
      this.ellipsoid(group,eye,3.51,.98,s*.326,.07,.07,.034);
      const hind=new THREE.Group();hind.position.set(-1.25,-.5,s*.58);hind.add(this.tube([vec(),vec(-.2,-.85,s*.5),vec(.15,-1.2,s*.6),vec(-.45,-1.35,s*.76)],[.45,.29,.15,.03],skin,24));group.add(hind);hind.userData.side=s;hind.userData.phase=1;fins.push(hind);
      const fore=new THREE.Group();fore.position.set(1.3,-.45,s*.55);fore.add(this.tube([vec(),vec(.13,-.56,s*.4),vec(.8,-.66,s*.5)],[.21,.12,.04],skin,20));group.add(fore);fore.userData.side=s;fore.userData.phase=0;fins.push(fore);
    }
    const tail=new THREE.Group();tail.position.x=-1.8;tail.add(this.tube([vec(),vec(-1.7,.0),vec(-3.5,.08),vec(-5.5,.0)],[.7,.48,.27,.012],skin,48));group.add(tail);group.scale.setScalar(scale);return{group,fins,tail,kind:'spinosaur',scale};
  }

  ammonite(){
    const group=new THREE.Group();const shellMat=this.material(0xb8a684,'plain',.65);const pts=[],radii=[];
    const n=100;for(let i=0;i<=n;i++){const t=i/n,angle=t*TAU*2.3,r=.06+Math.pow(t,1.65)*.85;pts.push(vec(Math.cos(angle)*r,Math.sin(angle)*r,0));radii.push(.015+Math.pow(t,1.6)*.24);}
    group.add(this.tube(pts,radii,shellMat,150,12));
    const end=pts[pts.length-1];const flesh=this.material(0x927e62);
    for(let i=0;i<7;i++){
      const a=i/7*TAU;group.add(this.tube([end.clone(),end.clone().add(vec(.45,Math.sin(a)*.16,Math.cos(a)*.16)),end.clone().add(vec(.9,Math.sin(a)*.35,Math.cos(a)*.3)),end.clone().add(vec(1.02,Math.sin(a)*.24,Math.cos(a)*.3))],[.037,.033,.021,.001],flesh,16,5));
    }
    const ribMat=this.material(0x776d56);
    for(let i=30;i<n;i+=3){const p=pts[i],radius=radii[i]*1.025;const ring=new THREE.Mesh(new THREE.TorusGeometry(radius,.008,4,12),ribMat);ring.position.copy(p);const tangent=pts[Math.min(i+1,n)].clone().sub(pts[Math.max(0,i-1)]).normalize();ring.quaternion.setFromUnitVectors(vec(0,0,1),tangent);group.add(ring);}
    // Consolidate the shell ribs into one draw call per material.
    const merged=new THREE.Group();const batches=new Map<THREE.Material,THREE.BufferGeometry[]>();
    for(const child of group.children){const mesh=child as THREE.Mesh;mesh.updateMatrix();const g=mesh.geometry.clone().applyMatrix4(mesh.matrix);const m=mesh.material as THREE.Material;if(!batches.has(m))batches.set(m,[]);batches.get(m)!.push(g);}
    for(const [m,geometries] of batches){const g=mergeGeometries(geometries);if(g)merged.add(new THREE.Mesh(g,m));geometries.forEach(g=>g.dispose());}
    group.children.forEach(c=>(c as THREE.Mesh).geometry.dispose());
    return merged;
  }

  life(){
    const add=(model:ReturnType<OceanWorld['plesiosaur']>,center:THREE.Vector3,radius:number,speed:number,phase:number)=>{const c={...model,center,radius,speed,phase};this.creatures.push(c);this.scene.add(c.group);};
    add(this.plesiosaur(1.15),vec(28,7,-8),28,.017,Math.PI*.72);
    add(this.plesiosaur(.78),vec(-48,12,-108),38,.014,1.8);
    add(this.ichthyosaur(.9),vec(30,2,-58),38,.06,.8);
    add(this.ichthyosaur(.67),vec(26,5,-62),38,.06,.96);
    add(this.spinosaurus(1.2),vec(-22,21,-45),48,.012,-.5);
    add(this.plesiosaur(1.35),vec(55,-2,-180),40,.015,2.5);
    add(this.ichthyosaur(1.1),vec(-80,4,28),48,.048,.5);
    // A small population of slow drifting ammonites.
    const template=this.ammonite();
    for(let i=0;i<13;i++){
      const g=i===0?template:template.clone();const x=rand(-42,42),z=rand(-110,22);g.position.set(x,floorHeight(x,z)+rand(3,8),z);g.rotation.set(rand(-.2,.2),rand(0,TAU),rand(-.1,.1));g.scale.setScalar(rand(.55,1.1));g.userData.origin=g.position.clone();g.userData.phase=rnd()*TAU;g.userData.ammonite=true;this.scene.add(g);
    }
    const fishG=new THREE.SphereGeometry(1,10,6);fishG.scale(.5,.16,.09);
    const tailG=new THREE.ConeGeometry(.23,.35,3);tailG.rotateZ(Math.PI/2);tailG.scale(1,1,.25);tailG.translate(-.53,0,0);
    const fg=mergeGeometries([fishG,tailG]);this.fish=new THREE.InstancedMesh(fg!,this.material(0x9cae9b,'plain',.45),350);this.scene.add(this.fish);
    const schools=[vec(-14,5,-31),vec(38,11,-35),vec(0,16,-90),vec(-48,1,-120),vec(30,-3,25)];
    for(let i=0;i<350;i++)this.fishData.push({center:schools[i%5].clone().add(vec(rand(-6,6),rand(-3,3),rand(-6,6))),phase:rand(0,TAU),radius:rand(3,8),speed:rand(.11,.2),size:rand(.35,1.05)});
  }

  suspendedParticles(){
    const count=1800,pos=new Float32Array(count*3);for(let i=0;i<count;i++){pos[i*3]=rand(-110,110);pos[i*3+1]=rand(-16,26);pos[i*3+2]=rand(-110,110);}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const mat=new THREE.ShaderMaterial({uniforms:{uTime:this.uniforms.uTime,uPixelRatio:{value:this.renderer.getPixelRatio()}},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
      vertexShader:`uniform float uTime;uniform float uPixelRatio;varying float a;void main(){vec3 p=position;p.x+=sin(uTime*.14+position.z)*.22;p.y+=sin(uTime*.18+position.x)*.25;vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(38./-mv.z,1.,3.5)*uPixelRatio;gl_Position=projectionMatrix*mv;a=clamp(1.-length(mv.xyz)/95.,0.,1.)*.33;}`,
      fragmentShader:`varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.65,.87,.79,a*smoothstep(.5,.0,d));}`});
    this.particles=new THREE.Points(g,mat);this.scene.add(this.particles);
  }

  bind(){
    const on=(target:EventTarget,type:string,fn:EventListener)=>{target.addEventListener(type,fn);this.listeners.push(()=>target.removeEventListener(type,fn));};
    on(window,'keydown',((e:KeyboardEvent)=>{
      if(!this.playing)return;if(['KeyW','KeyA','KeyS','KeyD','KeyQ','KeyE','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','ShiftLeft','ShiftRight','ControlLeft'].includes(e.code)){e.preventDefault();this.keys.add(e.code);}
      if(e.code==='Escape')this.pause();if(e.code==='KeyH'&&!e.repeat)this.hooks.onToggleUI();if(e.code==='KeyG'&&!e.repeat){this.setGlide(!this.glide);this.hooks.onGlide(this.glide);}
    }) as EventListener);
    on(window,'keyup',((e:KeyboardEvent)=>{this.keys.delete(e.code);}) as EventListener);
    on(window,'blur',(()=>{this.keys.clear();if(this.playing)this.pause();}) as EventListener);
    on(document,'visibilitychange',(()=>{if(document.hidden&&this.playing)this.pause();}) as EventListener);
    const canvas=this.renderer.domElement;
    on(canvas,'pointerdown',((e:PointerEvent)=>{if(!this.playing)return;this.dragging=true;this.lastPointer={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);if(e.pointerType==='mouse'&&document.pointerLockElement!==canvas){try{const result=canvas.requestPointerLock?.();if(result&&typeof result.catch==='function')result.catch(()=>{});}catch{}}}) as EventListener);
    on(canvas,'pointerup',(()=>{this.dragging=false;}) as EventListener);
    on(canvas,'pointercancel',(()=>{this.dragging=false;}) as EventListener);
    on(document,'pointermove',((e:PointerEvent)=>{
      if(!this.playing)return;const locked=document.pointerLockElement===canvas;
      if(!locked&&!this.dragging)return;
      const dx=locked?e.movementX:e.clientX-this.lastPointer.x,dy=locked?e.movementY:e.clientY-this.lastPointer.y;
      this.targetYaw-=dx*.0021;this.targetPitch=clamp(this.targetPitch-dy*.0021,-1.47,1.47);this.lastPointer={x:e.clientX,y:e.clientY};
    }) as EventListener);
    on(document,'pointerlockchange',(()=>{if(!document.pointerLockElement&&this.playing&&!this.dragging)this.pause();}) as EventListener);
    on(canvas,'webglcontextlost',((e:Event)=>{e.preventDefault();this.pause();this.hooks.onError('The graphics connection was interrupted. Refresh to return to the ocean.');}) as EventListener);
  }
  start(){this.playing=true;this.started=true;this.keys.clear();this.clock.getDelta();this.initAudio();if(this.sound)this.audioContext?.resume().catch(()=>{});if(window.matchMedia('(pointer:fine)').matches){try{const result=this.renderer.domElement.requestPointerLock?.();if(result&&typeof result.catch==='function')result.catch(()=>{});}catch{}}}
  pause(){if(!this.playing)return;this.playing=false;this.glide=false;this.keys.clear();this.touch={x:0,y:0,z:0};this.velocity.set(0,0,0);this.dragging=false;if(document.pointerLockElement===this.renderer.domElement)document.exitPointerLock();this.audioContext?.suspend().catch(()=>{});this.hooks.onPause();}
  reset(){this.position.set(0,3,35);this.camera.position.copy(this.position);this.yaw=this.targetYaw=0;this.pitch=this.targetPitch=-.1;this.velocity.set(0,0,0);this.glide=false;this.time=0;}
  setGlide(value:boolean){this.glide=value;}
  touchMove(x:number,y:number){this.touch.x=clamp(x,-1,1);this.touch.y=clamp(y,-1,1);}
  touchVertical(z:number){this.touch.z=z;}
  setSound(v:boolean){this.sound=v;if(this.master&&this.audioContext)this.master.gain.setTargetAtTime(v?.35:0,this.audioContext.currentTime,.3);if(v&&this.playing)this.audioContext?.resume().catch(()=>{});}
  initAudio(){
    if(this.audioContext)return;
    try{
      const Ctx=window.AudioContext||(window as unknown as {webkitAudioContext:typeof AudioContext}).webkitAudioContext;
      const ctx=new Ctx();this.audioContext=ctx;this.master=ctx.createGain();this.master.gain.value=this.sound?.35:0;this.master.connect(ctx.destination);
      const buffer=ctx.createBuffer(2,ctx.sampleRate*8,ctx.sampleRate);
      for(let ch=0;ch<2;ch++){let b=0;const d=buffer.getChannelData(ch);for(let i=0;i<d.length;i++){b=(b+(Math.random()*2-1)*.03)/1.018;d[i]=b*4;}}
      const noise=ctx.createBufferSource();noise.buffer=buffer;noise.loop=true;
      const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=480;filter.Q.value=.45;
      const level=ctx.createGain();level.gain.value=.42;noise.connect(filter);filter.connect(level);level.connect(this.master);noise.start();
      const osc=ctx.createOscillator(),gain=ctx.createGain();osc.frequency.value=.07;gain.gain.value=160;osc.connect(gain);gain.connect(filter.frequency);osc.start();
      const bass=ctx.createOscillator(),bassGain=ctx.createGain();bass.type='sine';bass.frequency.value=47;bassGain.gain.value=.055;bass.connect(bassGain);bassGain.connect(this.master);bass.start();
    }catch{/* Ocean remains fully playable when audio is unavailable. */}
  }
  resize(){if(!this.alive)return;const w=this.host.clientWidth,h=this.host.clientHeight;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);}

  animate=()=>{
    if(!this.alive)return;this.frame=requestAnimationFrame(this.animate);const dt=Math.min(this.clock.getDelta(),.05);
    // The title screen is a living view; an explicitly paused dive stops the world.
    if(this.playing||!this.started)this.time+=dt;
    const t=this.time;this.uniforms.uTime.value=t;
    if(this.playing){
      const pressed=(...keys:string[])=>keys.some(k=>this.keys.has(k))?1:0;
      this.yaw=THREE.MathUtils.lerp(this.yaw,this.targetYaw,1-Math.exp(-14*dt));this.pitch=THREE.MathUtils.lerp(this.pitch,this.targetPitch,1-Math.exp(-14*dt));
      this.camera.rotation.set(this.pitch,this.yaw,0);this.camera.getWorldDirection(this.forward);this.right.crossVectors(this.forward,this.upAxis).normalize();
      const f=pressed('KeyW','ArrowUp')-pressed('KeyS','ArrowDown')+(this.glide?.52:0)+this.touch.y;
      const side=pressed('KeyD','ArrowRight')-pressed('KeyA','ArrowLeft')+this.touch.x;
      const up=pressed('KeyE','Space')-pressed('KeyQ','ControlLeft')+this.touch.z;
      this.move.copy(this.forward).multiplyScalar(f).addScaledVector(this.right,side);this.move.y+=up;
      if(this.move.lengthSq()>1)this.move.normalize();const speed=pressed('ShiftLeft','ShiftRight')?8.2:3.8;this.move.multiplyScalar(speed);
      this.velocity.lerp(this.move,1-Math.exp(-2.1*dt));this.position.addScaledVector(this.velocity,dt);
      this.position.x=clamp(this.position.x,-245,245);this.position.z=clamp(this.position.z,-265,245);this.position.y=clamp(this.position.y,floorHeight(this.position.x,this.position.z)+1.8,24.2);
      for(const rock of this.colliders){if(Math.abs(this.position.y-rock.pos.y)>rock.height+1)continue;const dx=this.position.x-rock.pos.x,dz=this.position.z-rock.pos.z,d=Math.sqrt(dx*dx+dz*dz);if(d<rock.radius+.85&&d>.001){const push=rock.radius+.85-d;this.position.x+=dx/d*push;this.position.z+=dz/d*push;}}
      this.camera.position.copy(this.position);if(!this.reduced)this.camera.position.y+=Math.sin(t*.9)*.026;
    }else if(!this.started&&!this.reduced){this.camera.rotation.set(-.09+Math.sin(t*.1)*.018,Math.sin(t*.08)*.025,0);}
    for(const c of this.creatures){
      const a=t*c.speed+c.phase;const x=c.center.x+Math.cos(a)*c.radius,z=c.center.z+Math.sin(a)*c.radius*.58;
      c.group.position.set(x,c.center.y+Math.sin(t*.3+c.phase)*.35,z);c.group.rotation.y=Math.atan2(-Math.cos(a)*.58,-Math.sin(a));c.group.rotation.z=Math.sin(t*.3+c.phase)*.025;
      c.fins.forEach(f=>{f.rotation.x=Math.sin(t*1.25+(f.userData.phase||0)+c.phase)*.22*(f.userData.side||1);f.rotation.z=Math.sin(t*1.25+(f.userData.phase||0)+c.phase+.7)*.07;});
      c.tail.rotation.y=Math.sin(t*(c.kind==='ichthyosaur'?3:1.3)+c.phase)*(c.kind==='ichthyosaur'?.22:.11);
    }
    for(let i=0;i<this.fishData.length;i++){
      const f=this.fishData[i],a=t*f.speed+f.phase;this.dummy.position.set(f.center.x+Math.cos(a)*f.radius,f.center.y+Math.sin(a*2)*.7,f.center.z+Math.sin(a)*f.radius*.5);this.dummy.rotation.set(0,Math.atan2(-Math.cos(a)*.5,-Math.sin(a)),Math.cos(a*2)*.035);this.dummy.scale.set(f.size,f.size,f.size);this.dummy.updateMatrix();this.fish.setMatrixAt(i,this.dummy.matrix);
    }this.fish.instanceMatrix.needsUpdate=true;
    for(const child of this.scene.children){if(child.userData.ammonite){child.position.y=child.userData.origin.y+Math.sin(t*.28+child.userData.phase)*.35;child.rotation.z=Math.sin(t*.23+child.userData.phase)*.09;}}
    this.particles.position.set(Math.floor(this.position.x/80)*80,0,Math.floor(this.position.z/80)*80);
    const fog=this.scene.fog as THREE.FogExp2;const deep=clamp((-this.position.z-75)/160,0,1);fog.density=.013+deep*.006;const col=new THREE.Color(0x0b5363).lerp(new THREE.Color(0x062c43),deep*.75);fog.color.copy(col);(this.scene.background as THREE.Color).copy(col);
    if(t-this.statusAt>.25){this.statusAt=t;this.hooks.onStatus(26-this.position.y,this.position.z < -130?'The blue beyond':this.position.z < -65?'The ancient reef':Math.abs(this.position.x)>40?'The underwater forest':'The sunlit shallows');}
    this.renderer.render(this.scene,this.camera);
  }
  dispose(){this.alive=false;cancelAnimationFrame(this.frame);this.listeners.forEach(fn=>fn());this.observer?.disconnect();this.audioContext?.close().catch(()=>{});const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();this.scene.traverse(o=>{const m=o as THREE.Mesh;if(m.geometry)geometries.add(m.geometry);if(m.material){const a=Array.isArray(m.material)?m.material:[m.material];a.forEach(x=>materials.add(x));}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());this.renderer.dispose();this.renderer.domElement.remove();}
}
