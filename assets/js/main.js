
(() => {
  const toggle=document.querySelector('.nav-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items=[...document.querySelectorAll('.reveal')];
  if(reduced){items.forEach(el=>el.classList.add('is-visible'));}
  else {const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}}),{threshold:.09,rootMargin:'0px 0px -40px'});items.forEach(el=>io.observe(el));}
  const report=document.querySelector('.report-content');
  const toc=document.querySelector('.toc');
  if(report&&toc){[...report.querySelectorAll('.report-section>h2')].forEach((h,i)=>{const id='section-'+(i+1);h.parentElement.id=id;const a=document.createElement('a');a.href='#'+id;a.textContent=String(i+1).padStart(2,'0')+' · '+h.textContent;toc.appendChild(a);});}
  const dlg=document.querySelector('.lightbox');
  if(dlg){const dimg=dlg.querySelector('img'),cap=dlg.querySelector('p');document.querySelectorAll('.image-open').forEach(btn=>btn.addEventListener('click',()=>{dimg.src=btn.dataset.full;dimg.alt=btn.dataset.caption||'';cap.textContent=btn.dataset.caption||'';dlg.showModal();}));dlg.querySelector('.lightbox-close').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close();});}
})();
