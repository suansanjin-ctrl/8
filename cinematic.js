(() => {
  'use strict';
  const intro=document.getElementById('introScroll'),stage=document.getElementById('stage'),video=document.getElementById('mobileIntro');
  const enter=document.getElementById('reliableEnter'),play=document.getElementById('introPlay'),loader=document.getElementById('loader');
  const copy=document.getElementById('nodeCopy'),bar=document.querySelector('#progress i');
  const mobile=matchMedia('(max-width:760px), (max-width:1024px) and (max-height:600px) and (orientation:landscape)').matches;
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let skipped=false,ready=false,desired=0,progress=0,frame=0,timer,lastChapter=-1,seekStarted=0;
  const clamp=x=>Math.max(0,Math.min(1,x));
  document.documentElement.classList.add('native-scroll');document.body.classList.add('native-scroll');
  loader.classList.add('done');
  function finish(){if(skipped)return;skipped=true;clearTimeout(timer);video.pause();intro.hidden=true;enter.hidden=true;play.hidden=true;video.removeAttribute('src');video.load();document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'));window.scrollTo(0,0);}
  enter.addEventListener('click',finish);document.getElementById('skipIntro').addEventListener('click',finish);
  window.finishEmpireIntro=finish;
  const reveal=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.classList.add('in');reveal.unobserve(e.target)}},{threshold:.04});
  document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
  const links=[...document.querySelectorAll('#archiveNav a[href^="#"]')];
  const nav=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))},{rootMargin:'-15% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(el=>nav.observe(el));
  if(reduced||new URLSearchParams(location.search).get('intro')==='skip')return finish();
  function schedule(){if(!frame&&!skipped)frame=requestAnimationFrame(seek)}
  function setCopy(){
    if(bar)bar.style.transform=`scaleY(${progress})`;
    const chapter=progress<.16?1:progress<.34?2:progress<.52?3:progress<.74?4:5;
    copy.style.visibility=progress>.88?'hidden':'visible';
    if(!mobile&&chapter!==lastChapter&&window.EMPIRE_CHAPTERS?.[chapter]){
      lastChapter=chapter;const d=window.EMPIRE_CHAPTERS[chapter],block=copy.querySelector('.copyBlock');block.className='copyBlock '+d.pos;
      for(const [selector,value]of [['.eyebrow',d.eye],['.copyMeta',d.meta],['.copyFacts',d.facts],['h2',d.title],['p',d.text]])copy.querySelector(selector).textContent=value||'';
      block.getAnimations().forEach(a=>a.cancel());block.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:350,easing:'ease-out'});
    }
  }
  function measure(){if(skipped)return;const r=intro.getBoundingClientRect();progress=clamp(-r.top/Math.max(1,r.height-innerHeight));desired=ready?progress*Math.max(0,video.duration-.045):0;enter.hidden=r.bottom<0;setCopy();schedule()}
  function seek(){frame=0;if(!ready||skipped||document.hidden||video.seeking)return;
    // At most one outstanding decode. New scroll replaces the target, never queues seeks.
    if(Math.abs(video.currentTime-desired)>1/60){seekStarted=performance.now();video.currentTime=desired;}
  }
  video.addEventListener('loadedmetadata',()=>{ready=true;clearTimeout(timer);measure()});
  video.addEventListener('loadeddata',measure);video.addEventListener('canplay',measure);
  addEventListener('focus',measure);addEventListener('pageshow',measure);
  video.addEventListener('seeked',()=>{video.pause();schedule()});
  video.addEventListener('error',finish,{once:true});
  video.addEventListener('playing',()=>video.pause());
  addEventListener('scroll',measure,{passive:true});addEventListener('resize',measure,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else measure()});
  addEventListener('pagehide',()=>video.pause());
  video.muted=true;video.autoplay=false;video.loop=false;video.playsInline=true;video.preload='auto';video.poster='assets/film/intro-native-poster.webp';
  video.src=mobile||navigator.connection?.saveData?'assets/film/intro-native-mobile.mp4':'assets/film/intro-native-desktop.mp4';
  document.getElementById('hint').textContent=mobile?'滑动推进 · 反向滑动回看':'向下滚动推进 · 向上滚动回看';
  // A first touch can unlock video decoding on iOS without starting continuous playback.
  stage.addEventListener('pointerdown',()=>{if(!ready||skipped)return;video.play().then(()=>{video.pause();measure()}).catch(()=>{});},{once:true,passive:true});
  timer=setTimeout(()=>{if(!ready)finish()},10000);
  measure();
})();
