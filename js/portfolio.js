const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parallaxItems=[...document.querySelectorAll('[data-parallax]')];let ticking=false;
function updateParallax(){parallaxItems.forEach((el)=>{const speed=Number(el.dataset.parallax||0);const rect=el.getBoundingClientRect();const offset=(rect.top+rect.height/2-window.innerHeight/2)*speed;el.style.transform=reduceMotion?'none':`translate3d(0,${Math.round(offset)}px,0)`});ticking=false}
if(!reduceMotion){window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateParallax);ticking=true}},{passive:true});updateParallax()}
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('[data-reveal]').forEach((el)=>{el.classList.add('js-reveal');observer.observe(el)});
document.querySelectorAll('video').forEach((video)=>{video.addEventListener('mouseenter',()=>video.play().catch(()=>{}));video.addEventListener('mouseleave',()=>{if(!video.autoplay)video.pause()})});
