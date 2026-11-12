(()=>{
  const button=document.getElementById('menu-toggle');
  const nav=document.getElementById('main-navigation');
  button?.addEventListener('click',()=>{
    const isOpen=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(isOpen));
    button.innerHTML=isOpen?'Close <span aria-hidden="true">✕</span>':'Menu <span aria-hidden="true">☰</span>';
  });
  nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    button?.setAttribute('aria-expanded','false');
    if(button)button.innerHTML='Menu <span aria-hidden="true">☰</span>';
  }));
  document.getElementById('year').textContent=String(new Date().getFullYear());
})();
