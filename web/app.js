(() => {
  'use strict';
  const C = window.MRX_LOADSCREEN || {};
  const $ = id => document.getElementById(id);
  let progress = 0, tipIndex = 0;

  const text = (id, value) => { const el=$(id); if(el) el.textContent=value || ''; };
  const setTheme = () => Object.entries(C.theme || {}).forEach(([key,value]) => value && document.documentElement.style.setProperty(`--${key}`,value));

  function render() {
    const s=C.server || {};
    text('serverMini',s.name); text('serverName',s.name); text('cardName',s.name);
    text('label',s.label); text('tagline',s.tagline); text('description',s.description);
    text('playerCap',`${s.maxPlayers || 0} SLOTS`);
    text('trackTitle',C.music?.title || 'MRX CITY RADIO'); text('trackArtist',C.music?.artist || 'BUILD DIFFERENT');

    if(C.logo){
      $('miniLogo').innerHTML=`<img src="${C.logo}" alt="Logo">`;
      $('heroLogo').innerHTML=`<img src="${C.logo}" alt="Logo">`;
    }
    $('featureGrid').innerHTML=(C.features||[]).slice(0,3).map(x=>`<article class="feature"><i>${x.icon||'◆'}</i><b>${x.title||''}</b><p>${x.text||''}</p></article>`).join('');
    $('rulesList').innerHTML=(C.rules||[]).map((rule,i)=>`<div class="rule"><b>${String(i+1).padStart(2,'0')}</b><span>${rule}</span></div>`).join('');
    $('discordButton').onclick=()=>copy(C.server?.discord,$('discordButton'));
    $('rulesButton').onclick=()=>$('rulesPanel').classList.add('open');
    $('closeRules').onclick=()=>$('rulesPanel').classList.remove('open');
  }

  async function copy(value,button){
    if(!value)return; try{await navigator.clipboard.writeText(value)}catch{const e=document.createElement('textarea');e.value=value;document.body.appendChild(e);e.select();document.execCommand('copy');e.remove()}
    const old=button.textContent;button.textContent='COPIED';setTimeout(()=>button.textContent=old,1200);
  }

  function initMusic(){
    const audio=$('audio'),m=C.music||{}; audio.volume=Math.max(0,Math.min(1,Number(m.volume||.2)));$('volume').value=audio.volume;
    if(m.file){audio.src=m.file;if(m.autoplay)audio.play().catch(()=>{});}else{$('playButton').disabled=true;}
    $('playButton').onclick=()=>audio.paused?audio.play().catch(()=>{}):audio.pause();
    $('muteButton').onclick=()=>{audio.muted=!audio.muted;$('muteButton').textContent=audio.muted?'MUTE':'VOL'};
    $('volume').oninput=e=>{audio.volume=Number(e.target.value);audio.muted=false;$('muteButton').textContent='VOL'};
    audio.onplay=()=>$('playButton').textContent='Ⅱ';audio.onpause=()=>$('playButton').textContent='▶';audio.onended=()=>{audio.currentTime=0;audio.play().catch(()=>{})};
  }

  function setProgress(value,stage){
    progress=Math.max(progress,Math.min(100,Math.round(Number(value)||0)));
    $('fill').style.width=`${progress}%`;text('percent',`${progress}%`);if(stage)text('stage',stage);
  }

  function initFiveM(){
    window.addEventListener('message',({data})=>{
      if(!data||typeof data!=='object')return;
      if(data.eventName==='loadProgress')setProgress((data.loadFraction||0)*100,'LOADING SERVER ASSETS');
      else if(data.eventName==='startInitFunction')text('stage',`INITIALIZING ${String(data.type||'SYSTEMS').toUpperCase()}`);
      else if(data.eventName==='startDataFileEntries')text('stage','LOADING DATA FILES');
      else if(data.eventName==='performMapLoadFunction')text('stage','PREPARING THE CITY');
    });
    if(!('invokeNative' in window))setInterval(()=>progress<96&&setProgress(progress+Math.random()*2,'PREVIEW MODE'),650);
  }

  function initTips(){const tips=C.tips||[];if(!tips.length)return;text('tip',tips[0]);setInterval(()=>{tipIndex=(tipIndex+1)%tips.length;text('tip',tips[tipIndex])},4800)}
  function particles(){const box=$('particles');for(let i=0;i<30;i++){const p=document.createElement('span');p.style.left=`${Math.random()*100}%`;p.style.animationDuration=`${8+Math.random()*14}s`;p.style.animationDelay=`-${Math.random()*14}s`;p.style.opacity=Math.random();box.appendChild(p)}}

  document.addEventListener('DOMContentLoaded',()=>{setTheme();render();initMusic();initFiveM();initTips();particles()});
})();
