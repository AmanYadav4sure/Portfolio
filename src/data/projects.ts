/*
 * -----------------------------------------
 * (Kya dekh rahe ho ladle DevAman naam hai mera)
 * -----------------------------------------
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  year: string;
  image: string;
  github?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'blocksmash3d',
    title: 'Smash Ground 3D',
    description:
      'A 3D helix-stack smashing arcade game with a downward rush mechanic, fever fireball mode, 500 progressive levels and collectible ball skins.',
    category: 'Game Development',
    technologies: ['3D', 'Web Game', 'JavaScript'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://www.blocksmash3d.site/',
  },

  {
    id: 'cinemavortex',
    title: 'CinemaVortex',
    description:
      'A free HD streaming platform for movies and TV series with 4K UHD playback, Dolby audio support and a fast, ad-free viewing experience.',
    category: 'Web Development',
    technologies: ['React', 'Streaming API'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://www.cinemavortex.site/',
  },

  {
    id: 'capgen',
    title: 'Capgen',
    description:
      'An AI-powered video caption generator that creates word-level synced, animated subtitles for Reels, Shorts and TikTok in 99+ languages, with studio-grade presets and watermark-free exports.',
    category: 'AI / SaaS',
    technologies: ['AI', 'React', 'TypeScript'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://capgen.app',
  },

  {
    id: 'yappdf',
    title: 'YapPDF',
    description:
      'A fully offline Android app that turns any PDF into an audiobook with natural US & UK voices, sentence tracking, background playback and earbud controls — private by design.',
    category: 'Mobile App',
    technologies: ['Kotlin', 'Android', 'TTS'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://yappdf.app',
  },

  {
    id: 'qrmaker',
    title: 'QR Maker',
    description:
      'A free online QR code generator offering 20+ QR types (URL, WiFi, UPI, eSewa, WhatsApp, crypto and more) with custom logos, frames, colors, dot patterns and permanent static codes.',
    category: 'Web Tool',
    technologies: ['JavaScript', 'QR Code API'],
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop',
    liveUrl: 'https://www.qrmaker.tech/',
  },

  {
    id: 'vanya-cafe',
    title: 'Vanya Cafe',
    description:
      'A modern gaming cafe website designed with an immersive interface, smooth interactions and a polished user experience.',
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    year: '2026',
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2998760/e4f4796aa2bcad5c6c79cf241884cd70026a925b/capsule_616x353.jpg?t=1779264320',
    liveUrl: 'https://vanyacafe.vercel.app/',
  },

  {
    id: 'arrowrush',
    title: 'Arrow Rush',
    description:
      'A fast-paced interactive game focused on responsive gameplay, quick reactions and smooth user interaction.',
    category: 'Game Development',
    technologies: ['Kotlin', 'Android'],
    year: '2026',
    image:
      'https://play-lh.googleusercontent.com/NtEo137AeSWFZF6y60WCCdJTvGzRzZOWBoB_bswx8go2Af3P2atBZZRNemAcKZ49slrxjlY1nlY_WKyHkKVs',
    liveUrl: 'https://arrowrusher.vercel.app/',
  },
];
