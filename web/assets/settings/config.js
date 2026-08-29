// ============================================================
// MRX NEXUS — MAIN SETTINGS
// Edit only values inside quotes or numbers.
// Do not rename sections or delete commas.
// ============================================================
window.MRX_CONFIG = {
  server: {
    name: 'HAITIAN RP',
    eyebrow: 'WELCOME TO',
    tagline: 'NOUVO MOND, NOUVO FANMI',
    description: 'Yon eksperyans roleplay ayisyen modèn, inik, epi bati ak pasyon.',
    logo: 'assets/logo.png',
    discord: 'discord.gg/YOURINVITE',
    website: 'mrxgoat.dev',
    maxPlayers: 200
  },

  theme: {
    primary: '#147DFF',
    secondary: '#00C8FF',
    glow: '#2A8CFF',
    background: '#020817',
    panel: 'rgba(5, 19, 47, 0.72)',
    text: '#F5FAFF',
    muted: '#8FAFD1'
  },

  background: {
    // WebM/VP8 is used because FiveM CEF does not reliably decode H.264 MP4.
    video: 'assets/background.webm',
    // Leave empty so the server logo is never shown as the video fallback.
    poster: '',
    overlayOpacity: 0.76,
    blur: 1
  },

  // Maximum: 3 songs.
  // 1 song repeats. 2–3 songs continue in order, then restart.
  music: {
    autoplay: true,
    volume: 0.24,
    shuffle: false,
    tracks: [
      {
        title: 'Music One',
        artist: 'Artist Name',
        file: 'assets/music/music1.mp3',
        cover: 'assets/music/music1.png'
      },
      {
        title: 'Music Two',
        artist: 'Artist Name',
        file: 'assets/music/music2.mp3',
        cover: 'assets/music/music2.png'
      }
      // To add a third song, copy one block above and change its information.
    ]
  },

  navigation: ['home', 'rules', 'team', 'gallery', 'events'],

  tips: [
    'Respect every roleplay scene.',
    'Join Discord for announcements and support.',
    'Use reports responsibly and include clear details.',
    'Your story begins the moment you enter the city.'
  ]
};
