/* ─── Music Data (32 combinations: mood × weather × time) ───── */
const MUSIC_DB = {

  /* ── HAPPY ── */
  'happy-sunny-daylight': [
    { title: "Happy",                      artist: "Pharrell Williams",          genre: "Pop",          yt: "https://www.youtube.com/watch?v=ZbZSe6N_BXs" },
    { title: "Walking on Sunshine",        artist: "Katrina and the Waves",      genre: "Pop Rock",     yt: "https://www.youtube.com/watch?v=iPUmE-tne5U" },
    { title: "Can't Stop the Feeling!",    artist: "Justin Timberlake",          genre: "Pop",          yt: "https://www.youtube.com/watch?v=ru0K8uYEZWw" },
    { title: "Good as Hell",               artist: "Lizzo",                      genre: "Pop/R&B",      yt: "https://www.youtube.com/watch?v=SmbmeOgGnpA" },
  ],
  'happy-sunny-nightfall': [
    { title: "September",                  artist: "Earth, Wind & Fire",         genre: "Funk/Soul",    yt: "https://www.youtube.com/watch?v=Gs069dndIYk" },
    { title: "Dancing Queen",              artist: "ABBA",                       genre: "Disco",        yt: "https://www.youtube.com/watch?v=xFrGuyw1V8s" },
    { title: "Uptown Funk",                artist: "Mark Ronson ft. Bruno Mars", genre: "Funk/Pop",     yt: "https://www.youtube.com/watch?v=OPf0YbXqDm0" },
    { title: "Blinding Lights",            artist: "The Weeknd",                 genre: "Synth-pop",    yt: "https://www.youtube.com/watch?v=4NRXx6U8ABQ" },
  ],
  'happy-cloudy-daylight': [
    { title: "Shake It Off",               artist: "Taylor Swift",               genre: "Pop",          yt: "https://www.youtube.com/watch?v=nfWlot6h_JM" },
    { title: "Best Day of My Life",        artist: "American Authors",           genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=Y66j_BUCBMY" },
    { title: "Here Comes the Sun",         artist: "The Beatles",                genre: "Rock",         yt: "https://www.youtube.com/watch?v=KQetemT1sWc" },
    { title: "Dog Days Are Over",          artist: "Florence + the Machine",     genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=iWOyfLBYtuU" },
  ],
  'happy-cloudy-nightfall': [
    { title: "Shut Up and Dance",          artist: "WALK THE MOON",              genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=6JCLY0Rlx6Q" },
    { title: "On Top of the World",        artist: "Imagine Dragons",            genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=e3cEsELNhXA" },
    { title: "Counting Stars",             artist: "OneRepublic",                genre: "Pop Rock",     yt: "https://www.youtube.com/watch?v=hT_nvWreIhg" },
  ],
  'happy-rainy-daylight': [
    { title: "Singin' in the Rain",        artist: "Gene Kelly",                 genre: "Classic Film", yt: "https://www.youtube.com/watch?v=D1ZYhVpdXbQ" },
    { title: "Good Day Sunshine",          artist: "The Beatles",                genre: "Rock",         yt: "https://www.youtube.com/watch?v=GOHCReFAbZw" },
    { title: "Island in the Sun",          artist: "Weezer",                     genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=erG5rgNYSdk" },
    { title: "Lovely Day",                 artist: "Bill Withers",               genre: "Soul",         yt: "https://www.youtube.com/watch?v=bEeaS6fuUoA" },
  ],
  'happy-rainy-nightfall': [
    { title: "Purple Rain",                artist: "Prince",                     genre: "R&B/Rock",     yt: "https://www.youtube.com/watch?v=TvnYmWpD_T8" },
    { title: "Come On Eileen",             artist: "Dexys Midnight Runners",     genre: "Pop Rock",     yt: "https://www.youtube.com/watch?v=gwx0BPSdGmI" },
    { title: "Rhythm of the Rain",         artist: "The Cascades",               genre: "Pop Classic",  yt: "https://www.youtube.com/watch?v=GJX2TYJBL34" },
  ],
  'happy-snowy-daylight': [
    { title: "Winter Wonderland",          artist: "Dean Martin",                genre: "Holiday",      yt: "https://www.youtube.com/watch?v=3NSk7ojG5aE" },
    { title: "Jingle Bell Rock",           artist: "Bobby Helms",                genre: "Holiday",      yt: "https://www.youtube.com/watch?v=Z0ajuTaHBtM" },
    { title: "Let It Snow! Let It Snow!",  artist: "Frank Sinatra",              genre: "Holiday",      yt: "https://www.youtube.com/watch?v=SnvEUnPsFKM" },
  ],
  'happy-snowy-nightfall': [
    { title: "All I Want for Christmas Is You", artist: "Mariah Carey",          genre: "Pop Holiday",  yt: "https://www.youtube.com/watch?v=aAkMkVFwAoo" },
    { title: "Last Christmas",             artist: "Wham!",                      genre: "Synth-pop",    yt: "https://www.youtube.com/watch?v=E8gmARGvPlI" },
    { title: "Rockin' Around the Christmas Tree", artist: "Brenda Lee",          genre: "Holiday Rock", yt: "https://www.youtube.com/watch?v=1qYz7rfgLWE" },
  ],

  /* ── PEACEFUL ── */
  'peaceful-sunny-daylight': [
    { title: "Banana Pancakes",            artist: "Jack Johnson",               genre: "Acoustic",     yt: "https://www.youtube.com/watch?v=OjFB5H4-Bxc" },
    { title: "Golden Hour",                artist: "JVKE",                       genre: "Pop",          yt: "https://www.youtube.com/watch?v=PEM0Vs8jf1w" },
    { title: "Better Together",            artist: "Jack Johnson",               genre: "Acoustic",     yt: "https://www.youtube.com/watch?v=u57d4_b_YgI" },
    { title: "Anywhere with You",          artist: "Jake Owen",                  genre: "Country Pop",  yt: "https://www.youtube.com/watch?v=YfzHALJdDf4" },
  ],
  'peaceful-sunny-nightfall': [
    { title: "Sunset Lover",               artist: "Petit Biscuit",              genre: "Electronic",   yt: "https://www.youtube.com/watch?v=00N4-gHCrSo" },
    { title: "Holocene",                   artist: "Bon Iver",                   genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=TWcyIpul8OE" },
    { title: "Electric Feel",              artist: "MGMT",                       genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=MmZexg8sxyk" },
  ],
  'peaceful-cloudy-daylight': [
    { title: "Blue Ridge Mountains",       artist: "Fleet Foxes",                genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=aP13Km98C7g" },
    { title: "White Winter Hymnal",        artist: "Fleet Foxes",                genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=2ZBT9JGiSBo" },
    { title: "Stubborn Love",              artist: "The Lumineers",              genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=cwNVEpADRaE" },
    { title: "Skinny Love",                artist: "Bon Iver",                   genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=ssdgFoHLwnk" },
  ],
  'peaceful-cloudy-nightfall': [
    { title: "Bloom",                      artist: "The Paper Kites",            genre: "Folk",         yt: "https://www.youtube.com/watch?v=h0THHi04RBo" },
    { title: "Yellow",                     artist: "Coldplay",                   genre: "Alternative",  yt: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
    { title: "The Night We Met",           artist: "Lord Huron",                 genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=KtlgYxa6BMU" },
  ],
  'peaceful-rainy-daylight': [
    { title: "The Rain Song",              artist: "Led Zeppelin",               genre: "Rock",         yt: "https://www.youtube.com/watch?v=Z8OlJPEy1cg" },
    { title: "Bridge Over Troubled Water", artist: "Simon & Garfunkel",          genre: "Folk",         yt: "https://www.youtube.com/watch?v=4G-YQA_bsOU" },
    { title: "Riders on the Storm",        artist: "The Doors",                  genre: "Rock",         yt: "https://www.youtube.com/watch?v=iv8GW1GaoIc" },
  ],
  'peaceful-rainy-nightfall': [
    { title: "Fix You",                    artist: "Coldplay",                   genre: "Alternative",  yt: "https://www.youtube.com/watch?v=k4V3Mo61fJM" },
    { title: "Breathe (2 AM)",             artist: "Anna Nalick",                genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=AoFBLQCRFWI" },
    { title: "The Scientist",              artist: "Coldplay",                   genre: "Alternative",  yt: "https://www.youtube.com/watch?v=RB-RcX5DS5A" },
  ],
  'peaceful-snowy-daylight': [
    { title: "River",                      artist: "Joni Mitchell",              genre: "Folk",         yt: "https://www.youtube.com/watch?v=KFM9bGxFSA8" },
    { title: "White Christmas",            artist: "Bing Crosby",                genre: "Classic",      yt: "https://www.youtube.com/watch?v=hHjGtBnSv50" },
    { title: "Snowflake",                  artist: "Sia ft. Wrabel",             genre: "Pop",          yt: "https://www.youtube.com/watch?v=UNMBEsCUUy8" },
  ],
  'peaceful-snowy-nightfall': [
    { title: "December",                   artist: "Semisonic",                  genre: "Alternative",  yt: "https://www.youtube.com/watch?v=B1RPRIbNJTM" },
    { title: "Have Yourself a Merry Little Christmas", artist: "Judy Garland",   genre: "Classic",      yt: "https://www.youtube.com/watch?v=1QMh1kDeGdQ" },
    { title: "Colorblind",                 artist: "Counting Crows",             genre: "Alternative",  yt: "https://www.youtube.com/watch?v=OXpASXFI7cA" },
  ],

  /* ── TIRED ── */
  'tired-sunny-daylight': [
    { title: "The Sound of Silence",       artist: "Simon & Garfunkel",          genre: "Folk Rock",    yt: "https://www.youtube.com/watch?v=4zLfCnGVeL4" },
    { title: "Sunday Morning",             artist: "Velvet Underground",         genre: "Art Rock",     yt: "https://www.youtube.com/watch?v=6pnSSvBH0LU" },
    { title: "The Lazy Song",              artist: "Bruno Mars",                 genre: "Pop",          yt: "https://www.youtube.com/watch?v=fLexgOxsZu0" },
    { title: "Sunday Morning",             artist: "Maroon 5",                   genre: "Pop Rock",     yt: "https://www.youtube.com/watch?v=FDsx8EcX6GQ" },
  ],
  'tired-sunny-nightfall': [
    { title: "Under the Bridge",           artist: "Red Hot Chili Peppers",      genre: "Rock",         yt: "https://www.youtube.com/watch?v=lwF-2pMHvqI" },
    { title: "Semi-Charmed Life",          artist: "Third Eye Blind",            genre: "Alt Rock",     yt: "https://www.youtube.com/watch?v=bgB4nFBOgQ4" },
    { title: "Champagne Supernova",        artist: "Oasis",                      genre: "Britpop",      yt: "https://www.youtube.com/watch?v=tI-5uv4wryI" },
  ],
  'tired-cloudy-daylight': [
    { title: "Comfortably Numb",           artist: "Pink Floyd",                 genre: "Prog Rock",    yt: "https://www.youtube.com/watch?v=_FrOQC-zEog" },
    { title: "Mad World",                  artist: "Tears for Fears",            genre: "New Wave",     yt: "https://www.youtube.com/watch?v=u1ZvPSpLxCg" },
    { title: "Bittersweet Symphony",       artist: "The Verve",                  genre: "Alternative",  yt: "https://www.youtube.com/watch?v=1lyu1KKwC74" },
  ],
  'tired-cloudy-nightfall': [
    { title: "Glycerine",                  artist: "Bush",                       genre: "Grunge",       yt: "https://www.youtube.com/watch?v=NkH65X0X0t0" },
    { title: "Boulevard of Broken Dreams", artist: "Green Day",                  genre: "Punk Rock",    yt: "https://www.youtube.com/watch?v=Soa3gO7tL-c" },
    { title: "1979",                       artist: "The Smashing Pumpkins",      genre: "Alt Rock",     yt: "https://www.youtube.com/watch?v=4aeETEoNfOg" },
  ],
  'tired-rainy-daylight': [
    { title: "Everybody Hurts",            artist: "R.E.M.",                     genre: "Alt Rock",     yt: "https://www.youtube.com/watch?v=ijZRCIrTgQc" },
    { title: "Let Her Go",                 artist: "Passenger",                  genre: "Folk Pop",     yt: "https://www.youtube.com/watch?v=RBumgq5yVrA" },
    { title: "Stay",                       artist: "Rihanna ft. Mikky Ekko",     genre: "R&B",          yt: "https://www.youtube.com/watch?v=JF8BRvqGCNs" },
  ],
  'tired-rainy-nightfall': [
    { title: "Mad World",                  artist: "Gary Jules",                 genre: "Indie",        yt: "https://www.youtube.com/watch?v=4N3N1MlvVc4" },
    { title: "Hide and Seek",              artist: "Imogen Heap",                genre: "Electronic",   yt: "https://www.youtube.com/watch?v=UYIAfiVGluk" },
    { title: "The Night Will Always Win",  artist: "Manchester Orchestra",       genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=BXb7GCHi_6Q" },
  ],
  'tired-snowy-daylight': [
    { title: "A Thousand Years",           artist: "Christina Perri",            genre: "Pop",          yt: "https://www.youtube.com/watch?v=rtOvBOTyX00" },
    { title: "Chasing Cars",               artist: "Snow Patrol",                genre: "Alt Rock",     yt: "https://www.youtube.com/watch?v=GemKqzILV4w" },
    { title: "The Blower's Daughter",      artist: "Damien Rice",                genre: "Folk",         yt: "https://www.youtube.com/watch?v=Hp73DwRkMgE" },
  ],
  'tired-snowy-nightfall': [
    { title: "Skinny Love",                artist: "Birdy",                      genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=cZlBIj4dMJE" },
    { title: "Saturn",                     artist: "Sleeping at Last",           genre: "Ambient Pop",  yt: "https://www.youtube.com/watch?v=dzNvk80XY9s" },
    { title: "Heavy",                      artist: "Birdtalker",                 genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=5Cg5O0mLCpA" },
  ],

  /* ── SAD ── */
  'sad-sunny-daylight': [
    { title: "The Scientist",              artist: "Coldplay",                   genre: "Alternative",  yt: "https://www.youtube.com/watch?v=RB-RcX5DS5A" },
    { title: "With or Without You",        artist: "U2",                         genre: "Rock",         yt: "https://www.youtube.com/watch?v=ujNeHIo7oTE" },
    { title: "I Will Follow You into the Dark", artist: "Death Cab for Cutie",   genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=NDHY1D0tKRA" },
    { title: "Mr. Brightside",             artist: "The Killers",                genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=gGdGFtwCNBE" },
  ],
  'sad-sunny-nightfall': [
    { title: "Bohemian Rhapsody",          artist: "Queen",                      genre: "Rock Opera",   yt: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ" },
    { title: "Hurt",                       artist: "Johnny Cash",                genre: "Alt Country",  yt: "https://www.youtube.com/watch?v=8AHCfZTRGiI" },
    { title: "Nothing Compares 2 U",       artist: "Sinéad O'Connor",            genre: "Pop",          yt: "https://www.youtube.com/watch?v=ucGTX-K5bHY" },
  ],
  'sad-cloudy-daylight': [
    { title: "The A Team",                 artist: "Ed Sheeran",                 genre: "Folk Pop",     yt: "https://www.youtube.com/watch?v=UAWcs5H-qgQ" },
    { title: "Skinny Love",                artist: "Bon Iver",                   genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=ssdgFoHLwnk" },
    { title: "Fast Car",                   artist: "Tracy Chapman",              genre: "Folk Rock",    yt: "https://www.youtube.com/watch?v=AIOAlaACuv4" },
  ],
  'sad-cloudy-nightfall': [
    { title: "Someone Like You",           artist: "Adele",                      genre: "Pop/Soul",     yt: "https://www.youtube.com/watch?v=hLQl3WQQoQ0" },
    { title: "All I Want",                 artist: "Kodaline",                   genre: "Indie Rock",   yt: "https://www.youtube.com/watch?v=1BHCS6cCVG8" },
    { title: "Skinny Love",                artist: "Birdy",                      genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=cZlBIj4dMJE" },
    { title: "Breathe Me",                 artist: "Sia",                        genre: "Indie Pop",    yt: "https://www.youtube.com/watch?v=ghPcYqn0p4Y" },
  ],
  'sad-rainy-daylight': [
    { title: "Tears in Heaven",            artist: "Eric Clapton",               genre: "Soft Rock",    yt: "https://www.youtube.com/watch?v=JOOoXCMd8bA" },
    { title: "Wish You Were Here",         artist: "Pink Floyd",                 genre: "Rock",         yt: "https://www.youtube.com/watch?v=hjpF8ukSrvk" },
    { title: "Black",                      artist: "Pearl Jam",                  genre: "Grunge",       yt: "https://www.youtube.com/watch?v=A7KP0O1hHBQ" },
  ],
  'sad-rainy-nightfall': [
    { title: "Eleanor Rigby",              artist: "The Beatles",                genre: "Rock",         yt: "https://www.youtube.com/watch?v=HuS5NuXRb5Y" },
    { title: "Nutshell",                   artist: "Alice in Chains",            genre: "Grunge",       yt: "https://www.youtube.com/watch?v=sHDPHNhGsqI" },
    { title: "In the Arms of an Angel",    artist: "Sarah McLachlan",            genre: "Pop",          yt: "https://www.youtube.com/watch?v=JBq-a9aLsbc" },
  ],
  'sad-snowy-daylight': [
    { title: "White Flag",                 artist: "Dido",                       genre: "Pop",          yt: "https://www.youtube.com/watch?v=j7tQGIEzxEE" },
    { title: "Chasing Cars",               artist: "Snow Patrol",                genre: "Alt Rock",     yt: "https://www.youtube.com/watch?v=GemKqzILV4w" },
    { title: "The Blower's Daughter",      artist: "Damien Rice",                genre: "Folk",         yt: "https://www.youtube.com/watch?v=Hp73DwRkMgE" },
  ],
  'sad-snowy-nightfall': [
    { title: "Hallelujah",                 artist: "Jeff Buckley",               genre: "Rock",         yt: "https://www.youtube.com/watch?v=y8AWFf7EAc4" },
    { title: "Mad World",                  artist: "Gary Jules",                 genre: "Indie",        yt: "https://www.youtube.com/watch?v=4N3N1MlvVc4" },
    { title: "Heavy",                      artist: "Birdtalker",                 genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=5Cg5O0mLCpA" },
    { title: "Skinny Love",                artist: "Bon Iver",                   genre: "Indie Folk",   yt: "https://www.youtube.com/watch?v=ssdgFoHLwnk" },
  ],
};

/* ─── Profile Emojis ─────────────────────────────────────────── */
const EMOJIS = ['🎵','🎶','🎸','🎹','🎺','🎻','🥁','🎤','🎧','🎼',
                '🌟','🌈','🌙','☀️','🌿','🍀','🦋','🐬','🦊','🐼',
                '🍕','🧁','🍦','🌸','💫','✨','🔥','💎','👑','🎭'];

/* ─── State ──────────────────────────────────────────────────── */
const state = {
  selections: { mood: null, weather: null, time: null },
  uploadSelections: { 'upload-mood': null, 'upload-weather': null, 'upload-time': null },
  selectedEmoji: EMOJIS[0],
  currentTab: 'browse',
};

/* ─── Helpers ────────────────────────────────────────────────── */
function $(id) { return document.getElementById(id); }

function bounce(el) {
  el.classList.remove('bouncy');
  void el.offsetWidth; // reflow to restart animation
  el.classList.add('bouncy');
  el.addEventListener('animationend', () => el.classList.remove('bouncy'), { once: true });
}

function getUsers() {
  return JSON.parse(localStorage.getItem('aura_users') || '{}');
}
function saveUsers(users) {
  localStorage.setItem('aura_users', JSON.stringify(users));
}
function getCommunitySubmissions() {
  return JSON.parse(localStorage.getItem('aura_submissions') || '[]');
}
function saveCommunitySubmissions(subs) {
  localStorage.setItem('aura_submissions', JSON.stringify(subs));
}
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('aura_current_user') || 'null');
}
function setCurrentUser(user) {
  localStorage.setItem('aura_current_user', JSON.stringify(user));
}
function clearCurrentUser() {
  localStorage.removeItem('aura_current_user');
}

/* ─── Tab Switching ──────────────────────────────────────────── */
function switchTab(tabName) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  const pane = $(`tab-${tabName}`);
  if (pane) pane.classList.add('active');

  const navBtn = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
  if (navBtn) navBtn.classList.add('active');

  state.currentTab = tabName;

  if (tabName === 'account') renderAccountTab();
  if (tabName === 'upload') renderUploadTab();
}

document.querySelectorAll('.nav-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    bounce(btn);
    setTimeout(() => switchTab(btn.dataset.tab), 60);
  });
});

/* ─── Pill Selection ─────────────────────────────────────────── */
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    const { group, value } = pill.dataset;
    bounce(pill);

    // Deselect others in same group
    document.querySelectorAll(`.pill[data-group="${group}"]`).forEach(p => p.classList.remove('selected'));
    pill.classList.add('selected');

    // Save to correct state bucket
    if (group === 'mood' || group === 'weather' || group === 'time') {
      state.selections[group] = value;
    } else {
      state.uploadSelections[group] = value;
    }
  });
});

/* ─── Generate Mix ───────────────────────────────────────────── */
$('generate-btn').addEventListener('click', () => {
  bounce($('generate-btn'));
  const { mood, weather, time } = state.selections;

  if (!mood || !weather || !time) {
    const missing = [];
    if (!mood) missing.push('a mood');
    if (!weather) missing.push('weather');
    if (!time) missing.push('time of day');
    alert(`Please select ${missing.join(', ')} to generate your mix.`);
    return;
  }

  const key = `${mood}-${weather}-${time}`;
  const builtIn = (MUSIC_DB[key] || []).map(s => ({ ...s, community: false }));

  // Merge community submissions matching this key
  const community = getCommunitySubmissions()
    .filter(s => s.mood === mood && s.weather === weather && s.time === time)
    .map(s => ({ title: s.title, artist: s.artist, genre: 'Community Pick', yt: s.youtube || null, community: true }));

  const songs = [...builtIn, ...community];

  renderResults(songs, mood, weather, time);
});

function renderResults(songs, mood, weather, time) {
  const resultsEl = $('results');
  const listEl = $('song-list');
  listEl.innerHTML = '';

  if (songs.length === 0) {
    listEl.innerHTML = '<div class="empty-state">No songs found for this combination yet.<br>Be the first to add one in the Upload tab!</div>';
  } else {
    songs.forEach(song => {
      const card = document.createElement('div');
      card.className = 'song-card';
      const ytTag = song.yt ? '<span class="tag tag-youtube">▶ YouTube</span>' : '';
      const commTag = song.community ? '<span class="tag tag-community">community pick 🎵</span>' : '';
      card.innerHTML = `
        <div class="song-card-inner">
          <div class="song-title">${esc(song.title)}</div>
          <div class="song-artist">${esc(song.artist)}</div>
          <div class="song-meta">
            <span class="tag tag-genre">${esc(song.genre)}</span>
            ${commTag}
            ${ytTag}
          </div>
        </div>`;
      if (song.yt) {
        card.addEventListener('click', () => {
          bounce(card);
          setTimeout(() => window.open(song.yt, '_blank', 'noopener'), 60);
        });
      } else {
        card.style.cursor = 'default';
      }
      listEl.appendChild(card);
    });
  }

  resultsEl.style.display = 'block';
  setTimeout(() => resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
}

function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ─── Upload Tab ─────────────────────────────────────────────── */
function renderUploadTab() {
  // Reset form if needed; selections persist within the session
}

$('upload-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const errorEl = $('upload-error');
  errorEl.textContent = '';

  const title   = $('upload-title').value.trim();
  const artist  = $('upload-artist').value.trim();
  const youtube = $('upload-youtube').value.trim();
  const mood    = state.uploadSelections['upload-mood'];
  const weather = state.uploadSelections['upload-weather'];
  const time    = state.uploadSelections['upload-time'];

  if (!title)   { errorEl.textContent = 'Please enter a song title.'; return; }
  if (!artist)  { errorEl.textContent = 'Please enter an artist name.'; return; }
  if (!mood)    { errorEl.textContent = 'Please select a mood.'; return; }
  if (!weather) { errorEl.textContent = 'Please select a weather condition.'; return; }
  if (!time)    { errorEl.textContent = 'Please select a time of day.'; return; }
  if (youtube && !isValidYouTubeUrl(youtube)) {
    errorEl.textContent = 'Please enter a valid YouTube link (or leave it blank).'; return;
  }

  bounce($('upload-form').querySelector('.submit-btn'));

  const sub = { title, artist, youtube: youtube || null, mood, weather, time, submittedBy: getCurrentUser()?.nickname || null, id: Date.now() };
  const subs = getCommunitySubmissions();
  subs.push(sub);
  saveCommunitySubmissions(subs);

  // Reset form
  $('upload-title').value = '';
  $('upload-artist').value = '';
  $('upload-youtube').value = '';
  document.querySelectorAll('.pill[data-group^="upload-"]').forEach(p => p.classList.remove('selected'));
  state.uploadSelections['upload-mood'] = null;
  state.uploadSelections['upload-weather'] = null;
  state.uploadSelections['upload-time'] = null;

  const msg = $('success-msg');
  msg.style.display = 'block';
  setTimeout(() => { msg.style.display = 'none'; }, 3500);
});

function isValidYouTubeUrl(url) {
  try {
    const u = new URL(url);
    return u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be');
  } catch { return false; }
}

/* ─── Account Tab ────────────────────────────────────────────── */
function renderAccountTab() {
  const user = getCurrentUser();
  if (user) {
    showProfile(user);
  } else {
    $('auth-section').classList.remove('hidden');
    $('profile-section').classList.add('hidden');
  }
}

function showProfile(user) {
  $('auth-section').classList.add('hidden');
  $('profile-section').classList.remove('hidden');
  $('profile-avatar').textContent = user.emoji || '🎵';
  $('profile-name').textContent = user.nickname;

  const listEl = $('my-songs-list');
  const mySubs = getCommunitySubmissions().filter(s => s.submittedBy === user.nickname);

  if (mySubs.length === 0) {
    listEl.innerHTML = '<div class="empty-state">You haven\'t submitted any songs yet.<br>Go to Upload to share your picks!</div>';
  } else {
    listEl.innerHTML = '';
    mySubs.forEach(s => {
      const card = document.createElement('div');
      card.className = 'song-card';
      card.style.cursor = 'default';
      card.innerHTML = `
        <div class="song-card-inner">
          <div class="song-title">${esc(s.title)}</div>
          <div class="song-artist">${esc(s.artist)}</div>
          <div class="song-meta">
            <span class="tag tag-genre">${esc(s.mood)} · ${esc(s.weather)} · ${esc(s.time)}</span>
          </div>
        </div>`;
      listEl.appendChild(card);
    });
  }
}

// Auth switcher tabs
$('btn-show-signup').addEventListener('click', () => {
  $('btn-show-signup').classList.add('active');
  $('btn-show-login').classList.remove('active');
  $('signup-form').classList.remove('hidden');
  $('login-form').classList.add('hidden');
  $('signup-error').textContent = '';
  $('login-error').textContent = '';
  bounce($('btn-show-signup'));
});

$('btn-show-login').addEventListener('click', () => {
  $('btn-show-login').classList.add('active');
  $('btn-show-signup').classList.remove('active');
  $('login-form').classList.remove('hidden');
  $('signup-form').classList.add('hidden');
  $('signup-error').textContent = '';
  $('login-error').textContent = '';
  bounce($('btn-show-login'));
});

// Sign Up
$('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const errorEl = $('signup-error');
  const nickname = $('signup-nickname').value.trim();
  const password = $('signup-password').value;

  if (!nickname)       { errorEl.textContent = 'Please choose a nickname.'; return; }
  if (nickname.length < 2) { errorEl.textContent = 'Nickname must be at least 2 characters.'; return; }
  if (!password)       { errorEl.textContent = 'Please create a password.'; return; }
  if (password.length < 4) { errorEl.textContent = 'Password must be at least 4 characters.'; return; }

  const users = getUsers();
  if (users[nickname.toLowerCase()]) {
    errorEl.textContent = 'That nickname is already taken.'; return;
  }

  users[nickname.toLowerCase()] = { nickname, password, emoji: state.selectedEmoji };
  saveUsers(users);
  setCurrentUser({ nickname, emoji: state.selectedEmoji });

  bounce($('signup-form').querySelector('.submit-btn'));
  setTimeout(() => showProfile(getCurrentUser()), 80);
});

// Log In
$('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const errorEl = $('login-error');
  const nickname = $('login-nickname').value.trim();
  const password = $('login-password').value;

  if (!nickname || !password) { errorEl.textContent = 'Please fill in all fields.'; return; }

  const users = getUsers();
  const user = users[nickname.toLowerCase()];
  if (!user || user.password !== password) {
    errorEl.textContent = 'Incorrect nickname or password.'; return;
  }

  setCurrentUser({ nickname: user.nickname, emoji: user.emoji });
  bounce($('login-form').querySelector('.submit-btn'));
  setTimeout(() => showProfile(getCurrentUser()), 80);
});

// Log Out
$('logout-btn').addEventListener('click', () => {
  bounce($('logout-btn'));
  setTimeout(() => {
    clearCurrentUser();
    $('profile-section').classList.add('hidden');
    $('auth-section').classList.remove('hidden');
    $('signup-nickname').value = '';
    $('signup-password').value = '';
    $('login-nickname').value = '';
    $('login-password').value = '';
    $('signup-error').textContent = '';
    $('login-error').textContent = '';
    // Reset to sign-up view
    $('btn-show-signup').classList.add('active');
    $('btn-show-login').classList.remove('active');
    $('signup-form').classList.remove('hidden');
    $('login-form').classList.add('hidden');
  }, 80);
});

/* ─── Emoji Picker ───────────────────────────────────────────── */
function buildEmojiPicker() {
  const picker = $('emoji-picker');
  EMOJIS.forEach((emoji, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'emoji-btn' + (i === 0 ? ' selected' : '');
    btn.textContent = emoji;
    btn.addEventListener('click', () => {
      bounce(btn);
      document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.selectedEmoji = emoji;
    });
    picker.appendChild(btn);
  });
}

/* ─── Init ───────────────────────────────────────────────────── */
buildEmojiPicker();
renderAccountTab();
