(()=>{"use strict";
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,touch=matchMedia('(hover:none)').matches;
gsap.registerPlugin(ScrollTrigger);
$('#yr').textContent=new Date().getFullYear();
/* build cards */
$('#skillGrid').innerHTML=SKILLS.map(([n,i,l])=>`<article class="sk glass tilt"><div class="ic">${i}</div><h3>${n}</h3><div class="bar"><i data-w="${l}"></i></div><small>${l}%</small></article>`).join('');
$('#projGrid').innerHTML=PROJECTS.map(p=>`<article class="pj glass tilt" style="--c:${p.c}33"><div class="vis"><span>${p.t[0]}</span></div><div class="in"><small>${p.k}</small><h3>${p.t}</h3><p>${p.d}</p><div class="tags">${p.g.map(g=>`<span>${g}</span>`).join('')}</div><a class="gh" href="${p.u||'https://github.com/ATIQULTIU'}" target="_blank" rel="noopener noreferrer">${p.u?'View on GitHub ↗':'More on GitHub ↗'}</a></div></article>`).join('');
/* loader */
let n=0;const ld=$('#ldn'),iv=setInterval(()=>{n=Math.min(100,n+Math.random()*14+4);ld.textContent=Math.floor(n);if(n>=100){clearInterval(iv);start()}},RM?5:90);
function start(){gsap.to('#loader',{opacity:0,duration:.6,delay:.2,onComplete:()=>$('#loader').remove()});
 if(!RM){gsap.from('.line',{yPercent:110,duration:1,stagger:.15,ease:'power4.out',delay:.4});gsap.from('.hero-copy>*:not(h1)',{y:30,opacity:0,stagger:.12,delay:.7});gsap.from('.portrait',{scale:.8,opacity:0,rotateY:-30,duration:1.4,ease:'expo.out',delay:.5});}
 typer();reveals()}
function typer(){const w=["Creative Developer","Problem Solver","AI Explorer","Full-Stack Learner"],el=$('#typed');if(RM){el.textContent=w[0];return}let i=0,j=0,d=0;(function t(){const s=w[i];j+=d?-1:1;el.textContent=s.slice(0,j);let ms=d?35:75;if(!d&&j===s.length){d=1;ms=1400}else if(d&&!j){d=0;i=(i+1)%w.length;ms=300}setTimeout(t,ms)})()}
function reveals(){
 $$('.st,.sub,.dash,.sk,.pj,.tl,.uni,.portal').forEach(e=>gsap.from(e,{y:50,opacity:0,duration:RM?0:.8,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%',once:true}}));
 $$('.bar i').forEach(b=>gsap.to(b,{width:b.dataset.w+'%',duration:1.4,ease:'power2.out',scrollTrigger:{trigger:b,start:'top 92%',once:true}}));
 $$('[data-c]').forEach(c=>{const o={v:0},d=+c.dataset.d||0;gsap.to(o,{v:+c.dataset.c,duration:1.6,scrollTrigger:{trigger:c,start:'top 90%',once:true},onUpdate:()=>c.textContent=o.v.toFixed(d)})});
 gsap.to('.tl-line i',{height:'100%',ease:'none',scrollTrigger:{trigger:'.timeline',start:'top 70%',end:'bottom 70%',scrub:true}});
 if(!RM)gsap.to('.portrait',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'#home',start:'top top',end:'bottom top',scrub:true}});}
/* nav */
const bg=$('.burger'),nv=$('.nav nav');bg.onclick=()=>{const o=nv.classList.toggle('open');bg.setAttribute('aria-expanded',o)};$$('nav a').forEach(a=>a.onclick=()=>{nv.classList.remove('open');bg.setAttribute('aria-expanded',false)});
/* cursor glow, tilt, magnetic */
const gl=$('#glow'),M={x:0,y:0};
addEventListener('pointermove',e=>{M.x=e.clientX/innerWidth*2-1;M.y=-(e.clientY/innerHeight*2-1);if(!touch)gsap.to(gl,{x:e.clientX,y:e.clientY,duration:.5})},{passive:true});
if(!touch&&!RM){$$('.tilt').forEach(t=>{t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;gsap.to(t,{rotateY:x*16,rotateX:-y*16,transformPerspective:900,duration:.4})});t.addEventListener('pointerleave',()=>gsap.to(t,{rotateX:0,rotateY:0,duration:.7,ease:'elastic.out(1,.6)'}))});
 $$('.mag').forEach(m=>{m.addEventListener('pointermove',e=>{const r=m.getBoundingClientRect();gsap.to(m,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.3})});m.addEventListener('pointerleave',()=>gsap.to(m,{x:0,y:0,duration:.6,ease:'elastic.out(1,.5)'}))})}
/* contact */
$('#copy').onclick=async e=>{try{await navigator.clipboard.writeText('atik.cmttiu1001@gmail.com');e.target.textContent='Copied ✓'}catch{e.target.textContent='atik.cmttiu1001@gmail.com'}setTimeout(()=>e.target.textContent='Copy email',2200)};
$('#cf').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);location.href=`mailto:atik.cmttiu1001@gmail.com?subject=${encodeURIComponent('Portfolio message from '+f.get('n'))}&body=${encodeURIComponent(f.get('m')+'\n\n— '+f.get('n')+' ('+f.get('e')+')')}`;$('#cfm').textContent='Opening your email app…'};
/* background particles */
try{const cv=$('#bg'),r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:false});r.setPixelRatio(Math.min(devicePixelRatio,1.5));
const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(60,1,.1,100);c.position.z=14;
const N=innerWidth<700?350:900,p=new Float32Array(N*3),col=new Float32Array(N*3),C=[new THREE.Color('#00e5ff'),new THREE.Color('#2d6bff'),new THREE.Color('#ff8a3d')];
for(let i=0;i<N;i++){p.set([(Math.random()-.5)*40,(Math.random()-.5)*40,(Math.random()-.5)*30],i*3);const k=C[Math.random()<.08?2:Math.random()<.5?0:1];col.set([k.r,k.g,k.b],i*3)}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3));g.setAttribute('color',new THREE.BufferAttribute(col,3));
const pts=new THREE.Points(g,new THREE.PointsMaterial({size:.07,vertexColors:true,transparent:true,opacity:.85,depthWrite:false}));s.add(pts);
const rs=()=>{r.setSize(innerWidth,innerHeight,false);c.aspect=innerWidth/innerHeight;c.updateProjectionMatrix()};rs();addEventListener('resize',rs);
let vis=true;document.addEventListener('visibilitychange',()=>vis=!document.hidden);
(function a(){requestAnimationFrame(a);if(!vis)return;const t=performance.now()*.00004;if(!RM){pts.rotation.y=t*3+M.x*.15;pts.rotation.x=M.y*.1+scrollY*.0002}r.render(s,c)})()}catch(e){console.warn('WebGL background unavailable',e)}
/* developer universe */
try{const cv=$('#uni'),r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,2));
const s=new THREE.Scene(),c=new THREE.PerspectiveCamera(50,1,.1,100);c.position.set(0,5,13);c.lookAt(0,0,0);
s.add(new THREE.AmbientLight(0x4466aa,.8));const pl=new THREE.PointLight(0x00e5ff,2.5,60);s.add(pl);
const sun=new THREE.Mesh(new THREE.IcosahedronGeometry(1.5,1),new THREE.MeshBasicMaterial({color:0x00e5ff,wireframe:true}));s.add(sun);
const core=new THREE.Mesh(new THREE.SphereGeometry(.9,32,32),new THREE.MeshBasicMaterial({color:0x2d6bff}));s.add(core);
const SYS=[["Java & OOP","Where my engineering foundations began.",3,0x00e5ff],["Web Frontend","HTML, CSS, JavaScript and responsive UI.",4.3,0x4d7cff],["Backend & Data","PHP, SQL/MySQL and REST APIs.",5.6,0xff8a3d],["AI & Vision","OpenCV, TensorFlow and gesture control.",6.9,0x00e5ff],["3D & Creativity","Three.js worlds and motion design.",8.2,0xff8a3d]],pls=[],grp=new THREE.Group();s.add(grp);
SYS.forEach(([n,d,R,col],i)=>{const o=new THREE.Mesh(new THREE.RingGeometry(R-.012,R+.012,128),new THREE.MeshBasicMaterial({color:0x2d6bff,transparent:true,opacity:.35,side:2}));o.rotation.x=-Math.PI/2;grp.add(o);
 const m=new THREE.Mesh(new THREE.SphereGeometry(.38+i*.03,24,24),new THREE.MeshStandardMaterial({color:col,emissive:col,emissiveIntensity:.5,roughness:.4}));m.userData={n,d,R,a:i*1.3,sp:.5/R+.05};grp.add(m);pls.push(m)});
const st=new THREE.BufferGeometry(),sp=new Float32Array(600);for(let i=0;i<600;i++)sp[i]=(Math.random()-.5)*50;st.setAttribute('position',new THREE.BufferAttribute(sp,3));s.add(new THREE.Points(st,new THREE.PointsMaterial({size:.06,color:0x88ccff})));
let rx=0,ry=0,drag=0,lx=0,ly=0;const box=cv.parentElement,info=$('#uniInfo'),ray=new THREE.Raycaster(),mp=new THREE.Vector2();
const rs=()=>{const w=box.clientWidth,h=box.clientHeight;r.setSize(w,h,false);c.aspect=w/h;c.updateProjectionMatrix();c.position.z=w<600?18:13};rs();addEventListener('resize',rs);
box.addEventListener('pointerdown',e=>{drag=1;lx=e.clientX;ly=e.clientY});addEventListener('pointerup',()=>drag=0);
box.addEventListener('pointermove',e=>{if(drag){ry+=(e.clientX-lx)*.005;rx=Math.max(-.6,Math.min(.6,rx+(e.clientY-ly)*.004));lx=e.clientX;ly=e.clientY}
 const b=box.getBoundingClientRect();mp.set((e.clientX-b.left)/b.width*2-1,-((e.clientY-b.top)/b.height*2-1));ray.setFromCamera(mp,c);const h=ray.intersectObjects(pls)[0];info.textContent=h?`● ${h.object.userData.n} — ${h.object.userData.d}`:'Hover a planet · drag to rotate'});
let on=false;new IntersectionObserver(e=>on=e[0].isIntersecting).observe(box);
(function a(){requestAnimationFrame(a);if(!on)return;const t=performance.now()*.001;sun.rotation.y=t*.4;sun.rotation.x=t*.2;if(!drag&&!RM)ry+=.0015;grp.rotation.set(rx,ry,0);sun.rotation.z=t*.1;
 pls.forEach(m=>{const u=m.userData;if(!RM)u.a+=u.sp*.01;m.position.set(Math.cos(u.a)*u.R,0,Math.sin(u.a)*u.R)});r.render(s,c)})()}catch(e){$('#uniInfo').textContent='3D view needs WebGL support.'}
})();
