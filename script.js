(()=>{
  const theme=document.getElementById('theme-toggle');
  const navButton=document.getElementById('nav-toggle');
  const nav=document.getElementById('main-nav');
  const year=document.getElementById('year');
  if(year) year.textContent=String(new Date().getFullYear());
  theme?.addEventListener('click',()=>{
    const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    try{localStorage.setItem('xl-academic-theme',next)}catch(e){}
    theme.setAttribute('aria-label',next==='dark'?'Switch to light mode':'Switch to dark mode');
  });
  navButton?.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    navButton.setAttribute('aria-expanded',String(open));
    navButton.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    navButton?.setAttribute('aria-expanded','false');
  }));
  if('IntersectionObserver' in window){
    const links=[...nav.querySelectorAll('a')];
    const obs=new IntersectionObserver(entries=>{
      const entry=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(!entry)return;
      links.forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));
    },{rootMargin:'-18% 0px -58% 0px',threshold:0});
    document.querySelectorAll('main section[id]').forEach(s=>obs.observe(s));
  }
})();
