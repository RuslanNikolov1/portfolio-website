import { Project, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Knyazhevo Building App',
    description: 'Property listing prototype with clean UI and responsive layouts.',
    technologies: ['Next.js', 'TypeScript', 'SCSS'],
    imageUrl: '/projects/knyazhevo.png',
    liveUrl: 'https://knyazhevo-building-app.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '2',
    title: 'AGB Prototype',
    description: 'Business prototype demonstrating core flows and components.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    imageUrl: '/projects/agb.png',
    liveUrl: 'https://agb-prototype-1-s7hr.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '3',
    title: 'Ambra Prototype',
    description: 'Elegant product demo with modern UI patterns.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion'],
    imageUrl: '/projects/ambra.png',
    liveUrl: 'https://ambra-prototype.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '4',
    title: 'Association App',
    description: 'Association website prototype with content sections and CTAs.',
    technologies: ['Next.js', 'TypeScript', 'SCSS'],
    imageUrl: '/projects/association.png',
    liveUrl: 'https://association-app-nyop.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '5',
    title: 'Wallets Prototype',
    description: 'Wallet dashboard prototype focusing on UX clarity.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    imageUrl: '/projects/wallets.png',
    liveUrl: 'https://wallets-prototype.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '6',
    title: 'Astrology App',
    description: 'Playful app prototype with interactive elements.',
    technologies: ['Next.js', 'TypeScript', 'SCSS'],
    imageUrl: '/projects/astrology.png',
    liveUrl: 'https://astrology-app-chi.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '7',
    title: 'ASH Prototype',
    description: 'Minimalist prototype showcasing layout and component work.',
    technologies: ['Next.js', 'React', 'TypeScript'],
    imageUrl: '/projects/ash.png',
    liveUrl: 'https://ash-prototype.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '8',
    title: 'DeFi Llama Dashboard Backend',
    description: 'Dashboard backend prototype hosted on Vercel.',
    technologies: ['Next.js', 'TypeScript'],
    imageUrl: '/projects/defillama.png',
    liveUrl: 'https://defi-llama-dashboard-backend.vercel.app/',
    codeUrl: '#',
    category: 'web'
  },
  {
    id: '9',
    title: 'Portfolio Website',
    description: 'This portfolio site. Link is a placeholder for now.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'SCSS'],
    imageUrl: '/projects/portfolio.gif',
    liveUrl: '#',
    codeUrl: '#',
    category: 'web'
  }
];

export const skills: Skill[] = [
  // Frontend Skills
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 88, category: 'frontend' },
  { name: 'JavaScript', level: 92, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'SASS/SCSS', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Framer Motion', level: 80, category: 'frontend' },
  
  // Design Skills
  { name: 'Problem Solving', level: 95, category: 'design' },
  { name: 'Client Communication', level: 90, category: 'design' },
  { name: 'Adaptability', level: 92, category: 'design' },
  { name: 'User Experience', level: 88, category: 'design' },
  { name: 'Project Planning', level: 85, category: 'design' },
  { name: 'Team Collaboration', level: 90, category: 'design' },
  
  // Music Production Skills
  { name: 'Ableton Live', level: 95, category: 'music' },
  { name: 'Electronic Music', level: 90, category: 'music' },
  { name: 'Sound Design', level: 88, category: 'music' },
  { name: 'Music Composition', level: 85, category: 'music' },
  { name: 'Audio Mixing', level: 88, category: 'music' },
  { name: 'Creative Process', level: 92, category: 'music' }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/RuslanNikolov1',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ruslan-nikolov-721413355/',
    icon: 'linkedin'
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/ruslan-nikolov-323139497',
    icon: 'music'
  },
  {
    name: 'Email',
    url: 'mailto:ruslannikolov1@gmail.com',
    icon: 'mail'
  }
];
