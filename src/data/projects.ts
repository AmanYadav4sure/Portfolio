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
