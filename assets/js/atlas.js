
const places=[{"id": "maynewave", "name": "MayneWave guest cabin", "lat": 48.850331, "lng": -123.302008, "category": "stay", "walk_time": "", "photo": "images/active-pass.jpg", "description": "The private guest cabin and centre of the MayneWave Atlas.", "audiences": ["booking"], "best_time": "Any time", "look_for": "Fog, ferries, changing light", "field_note": "The neighbourhood begins at the cabin door."}, {"id": "active-pass", "name": "Active Pass shoreline", "lat": 48.852743, "lng": -123.299432, "category": "waterfront", "walk_time": "Steps away", "photo": "images/active-pass.jpg", "description": "Ferries, fog, weather and marine life form the changing daily backdrop.", "audiences": ["booking"], "best_time": "Early morning", "look_for": "Ferries, eagles, seals", "field_note": "The first ferry often appears silently through the morning mist."}, {"id": "miners-bay-dock", "name": "Miners Bay dock", "lat": 48.852009, "lng": -123.300977, "category": "transport", "walk_time": "Measure", "photo": "images/sunset-dock.jpg", "description": "A nearby place for boats, evening light and waterfront atmosphere.", "audiences": ["booking"], "best_time": "Just before sunset", "look_for": "Boats, harbour seals, evening light", "field_note": "The dock grows quiet as the tide turns."}, {"id": "miners-bay-village", "name": "Miners Bay village", "lat": 48.850004, "lng": -123.298184, "category": "services", "walk_time": "Measure", "photo": "images/forest-road.jpg", "description": "Groceries, bakery, post office and village services.", "audiences": ["guest"], "best_time": "Morning", "look_for": "Bakery, shops, local conversation", "field_note": "Historic Miners Bay works best at walking speed."}, {"id": "museum-gaol", "name": "Museum and historic gaol", "lat": 48.851247, "lng": -123.296896, "category": "history", "walk_time": "Measure", "photo": "images/crocus.jpg", "description": "Historic Miners Bay context for confirmed guests.", "audiences": ["guest"], "best_time": "Late morning", "look_for": "Historic details", "field_note": "A small building can hold a surprising amount of island history."}, {"id": "village-bay-ferry", "name": "Village Bay ferry terminal", "lat": 48.845175, "lng": -123.322051, "category": "transport", "walk_time": "Measure", "photo": "images/forest-road.jpg", "description": "BC Ferries arrival point on the west side of Mayne Island.", "audiences": ["guest"], "best_time": "Before departure", "look_for": "Ferry traffic and island arrivals", "field_note": "The final leg of the journey is part of the experience."}, {"id": "mount-parke", "name": "Mount Parke", "lat": 48.843311, "lng": -123.279555, "category": "walks", "walk_time": "Drive / cycle", "photo": "images/mount-parke.jpg", "description": "A larger island outing with broad Gulf Islands views.", "audiences": ["guest", "explore"]}, {"id": "georgina-point", "name": "Georgina Point lighthouse", "lat": 48.8736, "lng": -123.2914, "category": "explore", "walk_time": "Drive / cycle", "photo": "images/active-pass.jpg", "description": "The lighthouse at the eastern entrance to Active Pass.", "audiences": ["booking", "guest", "explore"]}, {"id": "place-1784068906621", "name": "Start of Edith Point Walk", "lat": 48.862274, "lng": -123.267114, "category": "walks", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest", "explore"]}, {"id": "place-1784069019261", "name": "Start of St Johns Point Walk", "lat": 48.822289, "lng": -123.242735, "category": "walks", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest"]}, {"id": "place-1784069230960", "name": "Montrose and Stores", "lat": 48.844633, "lng": -123.277138, "category": "explore", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["booking", "guest", "explore"]}, {"id": "place-1784069326432", "name": "Davids Cove", "lat": 48.865253, "lng": -123.275462, "category": "waterfront", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest", "explore"]}, {"id": "place-1784069418301", "name": "Dinner Bay Park", "lat": 48.834041, "lng": -123.317957, "category": "explore", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest", "explore"]}, {"id": "place-1784069441399", "name": "Japanese Garden", "lat": 48.832515, "lng": -123.316068, "category": "walks", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest", "explore"]}, {"id": "place-1784069511011", "name": "Mayne Island Brewery", "lat": 48.848416, "lng": -123.288072, "category": "food", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["booking", "guest", "explore"]}, {"id": "place-1784069572891", "name": "Arbutus Grill", "lat": 48.844688, "lng": -123.251918, "category": "explore", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest"]}, {"id": "place-1784069635850", "name": "Piggott Bay", "lat": 48.82505, "lng": -123.2795, "category": "waterfront", "walk_time": "", "photo": "images/forest-road.jpg", "description": "", "audiences": ["guest", "explore"]}, {"id": "place-1784071612318", "name": "Church", "lat": 48.858572, "lng": -123.296086, "category": "explore", "audiences": ["booking", "guest", "explore"], "walk_time": "", "photo": "images/forest-road.jpg", "description": ""}];
const routes=[{"id": "morning-on-foot", "name": "Morning on Foot", "audiences": ["booking", "guest"], "color": "#5f7562", "time": "Measure", "distance": "", "photo": "images/morning-fog-ferry.jpg", "description": "A gentle loop from MayneWave through Historic Miners Bay, the waterfront and village.", "stops": ["maynewave", "active-pass", "miners-bay-dock", "miners-bay-village", "maynewave"], "story": ["Leave MayneWave after sunrise.", "Pause at Active Pass for the first ferries.", "Continue to the dock and village.", "Return at an unhurried pace."], "best_time": "Early morning"}, {"id": "historic-miners-bay", "name": "Historic Miners Bay", "audiences": ["booking", "guest"], "color": "#b78951", "time": "Measure", "distance": "", "photo": "images/island-life-parade.jpg", "description": "A short neighbourhood route linking the cabin, village, museum and waterfront.", "stops": ["maynewave", "miners-bay-village", "museum-gaol", "miners-bay-dock", "maynewave"], "story": ["Begin at the cabin.", "Walk into the village.", "Visit the museum and historic waterfront.", "Finish at the dock."], "best_time": "Late morning"}, {"id": "sunset-waterfront", "name": "Sunset Waterfront", "audiences": ["booking", "guest"], "color": "#4d7b88", "time": "Measure", "distance": "", "photo": "images/sunset-dock.jpg", "description": "An evening walk toward Active Pass and the government dock for the last light.", "stops": ["maynewave", "active-pass", "miners-bay-dock", "maynewave"], "story": ["Leave before sunset.", "Follow the waterfront toward Active Pass.", "Pause at the dock for the last light.", "Walk home as the bay quiets."], "best_time": "Evening"}];
const mapElement=document.getElementById('map');

if(mapElement){
  const home=places.find(p=>p.id==='maynewave');
  const map=L.map('map',{scrollWheelZoom:false}).setView([home.lat,home.lng],15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);

  const panelTitle=document.getElementById('place-title');
  const panelCopy=document.getElementById('place-copy');
  const panelPhoto=document.getElementById('place-photo');
  const panelMeta=document.getElementById('place-meta');
  const bestTime=document.getElementById('best-time');
  const lookFor=document.getElementById('look-for');
  const fieldNote=document.getElementById('field-note');
  const routeSummary=document.getElementById('route-summary');
  const routeCards=document.getElementById('route-cards');
  const routeButtons=document.getElementById('route-buttons');

  const publicPlaces=places.filter(p=>p.id==='maynewave'||(p.audiences||[]).includes('booking'));
  let activeLine=null;

  function photoPath(path){
    if(!path) return 'assets/images/forest-road.jpg';
    return path.startsWith('images/') ? `assets/${path}` : path;
  }

  function symbolFor(p){
    if(p.id==='maynewave') return '⌂';
    const icons={waterfront:'≈',services:'•',history:'✦',transport:'↔',walks:'⌁',food:'◦',explore:'◇'};
    return icons[p.category]||'•';
  }

  function iconFor(p){
    const cls=p.id==='maynewave'?'home':(p.category||'services');
    return L.divIcon({className:'',html:`<div class="custom-pin ${cls}">${symbolFor(p)}</div>`,iconSize:[32,32],iconAnchor:[16,16]});
  }

  function selectPlace(p){
    panelTitle.textContent=p.name;
    panelCopy.textContent=p.description||'Part of the MayneWave experience.';
    panelPhoto.src=photoPath(p.photo);panelPhoto.alt=p.name;
    panelMeta.textContent=p.walk_time||'MayneWave location advantage';
    if(bestTime) bestTime.textContent=p.best_time||'Any time';
    if(lookFor) lookFor.textContent=p.look_for||'Small island details';
    if(fieldNote) fieldNote.textContent=p.field_note||'Every destination begins at MayneWave.';
    if(routeSummary) routeSummary.hidden=true;
  }

  publicPlaces.forEach(p=>{
    const marker=L.marker([p.lat,p.lng],{icon:iconFor(p)}).addTo(map).bindTooltip(p.name,{direction:'top'});
    marker.on('click',()=>selectPlace(p));
  });

  function routeLatLngs(route){
    return route.stops.map(id=>places.find(p=>p.id===id)).filter(Boolean).map(p=>[p.lat,p.lng]);
  }

  function showRoute(route){
    if(activeLine) map.removeLayer(activeLine);
    activeLine=L.polyline(routeLatLngs(route),{color:route.color||'#5f7562',weight:6,opacity:.9,className:'route-line'}).addTo(map);
    map.fitBounds(activeLine.getBounds(),{padding:[40,40]});
    panelTitle.textContent=route.name;
    panelCopy.textContent=route.description||'A suggested route from MayneWave.';
    panelPhoto.src=photoPath(route.photo);panelPhoto.alt=route.name;
    panelMeta.textContent=[route.time,route.distance].filter(Boolean).join(' · ')||'Walking route';
    if(bestTime) bestTime.textContent=route.best_time||'Any time';
    if(lookFor) lookFor.textContent='Waterfront, village and island details';
    if(fieldNote) fieldNote.textContent='A route is best experienced slowly.';
    if(routeSummary){
      const story=(route.story||[]).map(s=>`<li>${s}</li>`).join('');
      routeSummary.hidden=false;
      routeSummary.innerHTML=`<h3>${route.name}</h3><p>${route.description||''}</p><div class="route-meta">${[route.time,route.distance].filter(Boolean).join(' · ')}</div><ul class="route-story">${story}</ul>`;
    }
    document.querySelectorAll('[data-route-id]').forEach(el=>el.classList.toggle('active',el.dataset.routeId===route.id));
  }

  function clearRoute(){
    if(activeLine) map.removeLayer(activeLine);
    activeLine=null;map.setView([home.lat,home.lng],15);
    document.querySelectorAll('[data-route-id]').forEach(el=>el.classList.remove('active'));
    selectPlace(home);
  }

  routeButtons.innerHTML='<button class="route-button active" id="showPlaces">Places</button>'+routes.filter(r=>(r.audiences||[]).includes('booking')).map(r=>`<button class="route-button" data-route-id="${r.id}">${r.name}</button>`).join('');
  routeButtons.addEventListener('click',e=>{
    if(e.target.dataset.routeId) showRoute(routes.find(r=>r.id===e.target.dataset.routeId));
    if(e.target.id==='showPlaces') clearRoute();
  });

  routeCards.innerHTML=routes.filter(r=>(r.audiences||[]).includes('booking')).map(r=>`<div class="route-card" data-route-id="${r.id}"><strong><span class="route-swatch" style="background:${r.color}"></span>${r.name}</strong><small>${r.time||'Measure'}${r.distance?' · '+r.distance:''}</small></div>`).join('');
  routeCards.addEventListener('click',e=>{
    const card=e.target.closest('[data-route-id]');
    if(card) showRoute(routes.find(r=>r.id===card.dataset.routeId));
  });

  document.querySelectorAll('[data-place-id]').forEach(row=>{
    row.addEventListener('click',()=>{
      const p=places.find(x=>x.id===row.dataset.placeId);
      if(p){clearRoute();selectPlace(p);map.setView([p.lat,p.lng],16);}
    });
  });

  selectPlace(home);
  setTimeout(()=>map.invalidateSize(),150);
}

const filterBar=document.getElementById('atlas-filters');
if(filterBar){
  filterBar.addEventListener('click',e=>{
    const filter=e.target.dataset.filter;
    if(!filter)return;
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===e.target));
    renderMarkers(filter);
  });
}
