(() => {
  'use strict';
  const C = window.MRX_CONFIG || {};
  const $ = (id) => document.getElementById(id);
  const tracks = Array.isArray(C.music?.tracks) ? C.music.tracks.slice(0, 3).filter(t => t?.file) : [];
  let trackIndex = 0, galleryIndex = 0, progress = 0;
  const audio = $('audio');

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  })[char]);

  const setTheme = () => {
    const t = C.theme || {};
    const root = document.documentElement.style;
    Object.entries({primary:t.primary,secondary:t.secondary,glow:t.glow,bg:t.background,panel:t.panel,text:t.text,muted:t.muted}).forEach(([k,v]) => v && root.setProperty(`--${k}`, v));
  };

  const renderNavigation = () => {
    const nav = $('navigation');
    (C.navigation || []).forEach((page, i) => {
      const btn = document.createElement('button');
      btn.textContent = page;
      btn.className = i === 0 ? 'active' : '';
      btn.onclick = () => {
        document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector(`[data-page="${page}"]`)?.classList.add('active');
      };
      nav.appendChild(btn);
    });
  };

  const renderIdentity = () => {
    const s = C.server || {};
    $('miniLogo').src = s.logo || '';
    $('heroLogo').src = s.logo || '';
    $('miniName').textContent = s.name || 'FIVEM SERVER';
    $('eyebrow').textContent = s.eyebrow || 'WELCOME TO';
    $('serverName').textContent = s.name || 'FIVEM SERVER';
    $('tagline').textContent = s.tagline || '';
    $('description').textContent = s.description || '';
    $('copyDiscord').onclick = () => copyText(s.discord, $('copyDiscord'));
    $('copyWebsite').onclick = () => copyText(s.website, $('copyWebsite'));
  };

  const copyText = async (text, button) => {
    if (!text) return;
    try { await navigator.clipboard.writeText(text); } catch { const a=document.createElement('textarea');a.value=text;document.body.appendChild(a);a.select();document.execCommand('copy');a.remove(); }
    const old = button.textContent; button.textContent = 'COPIED'; setTimeout(() => button.textContent = old, 1200);
  };

  const renderRules = () => {
    $('rulesGrid').innerHTML = (window.MRX_RULES || []).map(r => `<article class="rule-card"><span class="number">${escapeHtml(r.number)}</span><h3>${escapeHtml(r.title)}</h3><p>${escapeHtml(r.text)}</p></article>`).join('');
  };

  const renderTeam = () => {
    $('teamGrid').innerHTML = (window.MRX_TEAM || []).map(m => `<article class="team-card"><img src="${escapeHtml(m.avatar)}" alt="${escapeHtml(m.name || 'Staff')}"><h3>${escapeHtml(m.name)}</h3><div class="role">${escapeHtml(m.role)}</div><p>${escapeHtml(m.about)}</p><div class="discord">${escapeHtml(m.discord)}</div></article>`).join('');
  };

  const renderEvents = () => {
    $('eventsGrid').innerHTML = (window.MRX_EVENTS || []).map(e => `<article class="event-card">${e.image ? `<img class="event-image" src="${escapeHtml(e.image)}" alt="${escapeHtml(e.title || 'Event')}">` : ''}<span class="status">${escapeHtml(e.status || 'EVENT')}</span><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.description)}</p><div class="event-meta"><span>📅 ${escapeHtml(e.date)}</span><span>🕒 ${escapeHtml(e.time)}</span><span>📍 ${escapeHtml(e.location)}</span><span>🏆 ${escapeHtml(e.reward)}</span></div></article>`).join('');
  };

  const renderGallery = () => {
    const gallery = window.MRX_GALLERY || [];
    if (!gallery.length) return;
    const update = () => {
      const item = gallery[galleryIndex] || gallery[0];
      $('galleryImage').src = item.image;
      $('galleryTitle').textContent = item.title || '';
      $('galleryCaption').textContent = item.caption || '';
      document.querySelectorAll('#galleryDots button').forEach((d,i)=>d.classList.toggle('active', i===galleryIndex));
    };
    $('galleryDots').innerHTML = gallery.map((_,i)=>`<button aria-label="Gallery ${i+1}"></button>`).join('');
    document.querySelectorAll('#galleryDots button').forEach((d,i)=>d.onclick=()=>{galleryIndex=i;update();});
    $('galleryPrev').onclick=()=>{galleryIndex=(galleryIndex-1+gallery.length)%gallery.length;update();};
    $('galleryNext').onclick=()=>{galleryIndex=(galleryIndex+1)%gallery.length;update();};
    update();
  };

  const formatTime = (seconds) => Number.isFinite(seconds) ? `${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}` : '0:00';
  const loadTrack = (index, autoplay=false) => {
    if (!tracks.length) return;
    trackIndex = (index + tracks.length) % tracks.length;
    const t = tracks[trackIndex];
    audio.src = t.file;
    $('musicTitle').textContent = t.title || `Track ${trackIndex+1}`;
    $('musicArtist').textContent = t.artist || '';
    $('musicCover').src = t.cover || C.server?.logo || '';
    if (autoplay) audio.play().catch(()=>{});
  };
  const nextTrack = () => {
    if (tracks.length === 1) { audio.currentTime = 0; audio.play().catch(()=>{}); }
    else if (tracks.length > 1) {
      if (C.music?.shuffle) { let next; do { next = Math.floor(Math.random()*tracks.length); } while (next===trackIndex && tracks.length>1); loadTrack(next,true); }
      else loadTrack(trackIndex+1,true);
    }
  };
  const initMusic = () => {
    audio.volume = Math.max(0, Math.min(1, Number(C.music?.volume ?? .25)));
    $('volume').value = audio.volume;
    if (!tracks.length) return;
    loadTrack(0, Boolean(C.music?.autoplay));
    $('playPause').onclick=()=> audio.paused ? audio.play().catch(()=>{}) : audio.pause();
    $('prevTrack').onclick=()=>loadTrack(trackIndex-1,true);
    $('nextTrack').onclick=nextTrack;
    $('muteButton').onclick=()=>{audio.muted=!audio.muted;$('muteButton').textContent=audio.muted?'🔇':'🔊';};
    $('volume').oninput=e=>{audio.volume=Number(e.target.value);audio.muted=false;$('muteButton').textContent='🔊';};
    $('seekBar').onclick=e=>{if(audio.duration){const r=e.currentTarget.getBoundingClientRect();audio.currentTime=((e.clientX-r.left)/r.width)*audio.duration;}};
    audio.onplay=()=>$('playPause').textContent='❚❚'; audio.onpause=()=>$('playPause').textContent='▶';
    audio.ontimeupdate=()=>{const pct=audio.duration?(audio.currentTime/audio.duration)*100:0;$('seekFill').style.width=`${pct}%`;$('currentTime').textContent=formatTime(audio.currentTime);$('duration').textContent=formatTime(audio.duration);};
    audio.onended=nextTrack;
  };

  const initBackground = () => {
    const bg=C.background||{}, video=$('backgroundVideo');
    if(bg.video) video.src=bg.video;
    if(bg.poster) video.poster=bg.poster;
    video.style.filter=`saturate(.85) brightness(.65) blur(${Number(bg.blur||0)}px)`;
    document.querySelector('.background-overlay').style.opacity=String(bg.overlayOpacity ?? .76);
  };

  const setProgress = (value, stage) => {
    progress=Math.max(progress,Math.min(100,Math.round(value)));
    $('loadingFill').style.width=`${progress}%`;
    $('loadingPercent').textContent=`${progress}%`;
    if(stage) $('loadingStage').textContent=stage;
  };

  const initFiveMEvents = () => {
    window.addEventListener('message', ({data}) => {
      if (!data || typeof data !== 'object') return;
      const name=data.eventName;
      if(name==='loadProgress') setProgress((data.loadFraction||0)*100,'Loading server assets...');
      else if(name==='startInitFunction') $('loadingStage').textContent=`Initializing ${data.type || 'systems'}...`;
      else if(name==='startDataFileEntries') $('loadingStage').textContent='Loading data files...';
      else if(name==='performMapLoadFunction') $('loadingStage').textContent='Preparing the city...';
      else if(name==='onLogLine' && data.message) $('loadingStage').textContent=String(data.message).slice(0,80);
    });
    // Browser preview fallback only.
    if (!('invokeNative' in window)) setInterval(()=>{if(progress<96)setProgress(progress+Math.random()*2.2,'Preview mode — loading interface...');},800);
  };

  const initTips = () => {
    const tips=C.tips||[]; if(!tips.length)return; let i=0;$('tipText').textContent=tips[0];setInterval(()=>{i=(i+1)%tips.length;$('tipText').textContent=tips[i];},5000);
  };

  const initParticles = () => {
    const box=$('particles'); for(let i=0;i<34;i++){const s=document.createElement('span');s.style.left=`${Math.random()*100}%`;s.style.animationDuration=`${8+Math.random()*14}s`;s.style.animationDelay=`-${Math.random()*15}s`;s.style.opacity=Math.random();box.appendChild(s);}
  };

  document.addEventListener('DOMContentLoaded',()=>{setTheme();initBackground();renderNavigation();renderIdentity();renderRules();renderTeam();renderGallery();renderEvents();initMusic();initFiveMEvents();initTips();initParticles();});
})();
