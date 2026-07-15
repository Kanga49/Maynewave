document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>o.observe(e));
document.body.classList.add('page-fade');

const notebookEntries=[{"label": "Morning fog", "text": "The first ferry often appears before the shoreline is fully visible.", "category": "morning"}, {"label": "Active Pass", "text": "The waterway changes character with every tide and every wind.", "category": "waterfront"}, {"label": "Historic Miners Bay", "text": "The neighbourhood makes more sense on foot than through a windshield.", "category": "history"}, {"label": "Government Dock", "text": "Just before sunset, the dock becomes a place to linger rather than arrive.", "category": "sunset"}, {"label": "Autumn crocus", "text": "Small flowers appear among old oyster shells when summer has clearly ended.", "category": "nature"}, {"label": "After rain", "text": "The forest road grows darker, quieter and more reflective after a storm.", "category": "nature"}, {"label": "Village morning", "text": "Coffee, groceries and conversation all happen within a few minutes of one another.", "category": "food"}, {"label": "Evening water", "text": "The last light often stays on Active Pass after the village has gone quiet.", "category": "sunset"}];
const toggle=document.createElement('button');
toggle.className='notebook-toggle';
toggle.textContent='Explorer’s Notebook';
toggle.setAttribute('aria-expanded','false');

const drawer=document.createElement('aside');
drawer.className='notebook-drawer';
drawer.innerHTML=`<div class="notebook-head"><div><div class="eyebrow">MayneWave</div><h2>Explorer’s Notebook</h2></div><button class="notebook-close" aria-label="Close">×</button></div><div class="notebook-list">${notebookEntries.map(n=>`<article class="notebook-entry"><strong>${n.label}</strong><p>${n.text}</p></article>`).join('')}</div>`;

document.body.append(toggle,drawer);
function setNotebook(open){drawer.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));}
toggle.addEventListener('click',()=>setNotebook(!drawer.classList.contains('open')));
drawer.querySelector('.notebook-close').addEventListener('click',()=>setNotebook(false));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setNotebook(false)});

document.querySelectorAll('img:not([loading])').forEach(img=>img.loading='lazy');
