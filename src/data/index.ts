import { Project, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Forest Residence Sofia',
    description: 'A modern web application showcasing Forest Residence Sofia — a residential project where city and nature meet. Features include interactive building layout, property listings, floor plans, and contact functionality. Designed with a clean UI and responsive design to give users a seamless experience on desktop and mobile.',
    technologies: ['Three.js', 'Framer Motion', 'React', 'Sass', 'TypeScript'],
    imageUrl: '/projects/forest-residence.png',
    liveUrl: 'https://knyazhevo-building-app.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/knyazhevo-building-app',
    category: 'web'
  },
  {
    id: '2',
    title: 'AGB Finance',
    description: 'Developed a polished front-end prototype for a mortgage loan service, designed to make applying for a mortgage simple, transparent, and accessible. The interface emphasizes clarity in showing loan options, payment schedules, and interest rates, with intuitive controls and responsive layout that works well across devices. My aim was to reduce friction, build trust through clean design, and help users make informed financial decisions.',
    technologies: ['React', 'Sass'],
    imageUrl: '/projects/agb.png',
    liveUrl: 'https://agb-prototype-1-s7hr.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/agb-prototype-1',
    category: 'web'
  },
  {
    id: '3',
    title: 'Ambra Restaurant',
    description: 'A modern prototype for Ambra, a fine-dining restaurant concept. I designed and built the front-end with a focus on visual storytelling, immersive imagery, and intuitive navigation. Features include a dynamic menu, gallery showcase, reservation call-to-action, and responsive design across devices. Goal: evoke elegance & appetite while keeping UX seamless.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/projects/ambra.png',
    liveUrl: 'https://ambra-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/ambra-prototype',
    category: 'web'
  },
  {
    id: '4',
    title: 'AMTP Association',
    description: 'A comprehensive web application for the Public Transport Association, providing detailed information on transport policies, projects, events, and news. The app allows members and the public to easily explore resources, stay updated on initiatives, and engage with the association\'s activities. Designed with a clean, responsive interface, this project highlights my ability to create informative, user-friendly web solutions tailored to organizational needs.',
    technologies: ['React', 'React-router', 'Sass', 'TypeScript'],
    imageUrl: '/projects/association.png',
    liveUrl: 'https://association-app-nyop.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/association-app',
    category: 'web'
  },
  {
    id: '5',
    title: 'Custom Wallets',
    description: 'A digital presentation of a custom physical wallet line designed to merge craftsmanship with modern aesthetics. The site highlights each wallet\'s materials, structure, and concept through minimalist layout, smooth scrolling, and responsive visuals. Built to emphasize both the tactile quality of the products and the clarity of their design story.',
    technologies: ['React', 'Sass', 'TypeScript'],
    imageUrl: '/projects/wallets.png',
    liveUrl: 'https://wallets-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/wallets-prototype',
    category: 'web'
  },
  {
    id: '6',
    title: 'Astrology App',
    description: 'A modern web application that visualizes astrology data and zodiac insights through a clean, responsive interface. Users can explore personalized birth charts, learn about star alignments, and view dynamic horoscope visuals. Designed with an emphasis on clarity, interactivity, and smooth user experience across all devices.',
    technologies: ['React', 'Sass'],
    imageUrl: '/projects/astrology.png',
    liveUrl: 'https://astrology-app-chi.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/astrology-app',
    category: 'web'
  },
  {
    id: '7',
    title: 'Ash-services',
    description: 'A sleek prototype site exploring the identity and aesthetic of ASH through clean design, bold typography, and immersive imagery. The layout emphasizes visual hierarchy, minimalism, and high-contrast elements to communicate a strong brand personality. Built to look elegant, responsive, and intuitive, the prototype enhances user engagement with smooth transitions and refined visual details.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/projects/ash.png',
    liveUrl: 'https://ash-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/ash-prototype',
    category: 'web'
  },
  {
    id: '8',
    title: 'DefiLlama-Dashboard',
    description: 'A full-stack web app that visualizes real-time DeFi data using custom APIs and interactive charts. I built both the backend for data aggregation and the frontend dashboard for exploring protocol stats and market trends.',
    technologies: ['React Query', 'React Table', 'Axios', 'React', 'Recharts', 'Sass', 'TypeScript'],
    imageUrl: '/projects/defillama.png',
    liveUrl: 'https://defi-llama-dashboard-backend.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1',
    category: 'web'
  },
  {
    id: '9',
    title: 'My Portfolio Website',
    description: 'I\'m a front-end developer and UX designer crafting seamless, responsive interfaces that connect design and functionality. My portfolio features 8 selected projects showcasing modern web experiences, thoughtful user flows, and precise attention to detail.',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Sass', 'Zod', 'React Hook Form', 'TypeScript'],
    imageUrl: '/projects/portfolio.gif',
    liveUrl: '#',
    codeUrl: 'https://github.com/RuslanNikolov1/portfolio-website',
    category: 'web'
  }
];

export const skills: Skill[] = [
  // Frontend Skills
  { name: '⚛️ React (7 years)', level: 95, category: 'frontend' },
  { name: '📘 TypeScript (7 years)', level: 90, category: 'frontend' },
  { name: '▲ Next.js (2 years)', level: 88, category: 'frontend' },
  { name: '📜 JavaScript (8 years)', level: 92, category: 'frontend' },
  { name: '🎨 HTML/CSS (8 years)', level: 95, category: 'frontend' },
  { name: '🎨 SASS/SCSS (5 years)', level: 85, category: 'frontend' },
  { name: '🎨 Tailwind CSS (2 years)', level: 90, category: 'frontend' },
  { name: '✨ Framer Motion (1 year)', level: 80, category: 'frontend' },
  { name: '🔄 Redux (5 years)', level: 85, category: 'frontend' },
  { name: '🎨 Material UI (4 years)', level: 80, category: 'frontend' },
  { name: '🗺️ Mapbox (1 year)', level: 75, category: 'frontend' },
  { name: '🎵 Web Audio API (1 year)', level: 70, category: 'frontend' },
  { name: '🎮 Three.js (1 year)', level: 75, category: 'frontend' },
  { name: '🌐 REST API (7 years)', level: 88, category: 'frontend' },
  { name: '📊 GraphQL (1 year)', level: 75, category: 'frontend' },
  { name: '📝 Git (7 years)', level: 90, category: 'frontend' },
  { name: '⚙️ CI/CD (5 years)', level: 85, category: 'frontend' },
  { name: '📦 Webpack (5 years)', level: 80, category: 'frontend' },
  { name: '⚡ Vite (2 years)', level: 85, category: 'frontend' },
  { name: '🤖 AI-assisted Development (1 year)', level: 90, category: 'frontend' },
  
  // Design Skills
  { name: '🎯 Client-focused problem solving', level: 95, category: 'design' },
  { name: '👑 Leadership and mentoring', level: 92, category: 'design' },
  { name: '💬 Effective communication', level: 90, category: 'design' },
  { name: '📋 Strategic project planning', level: 88, category: 'design' },
  { name: '🧠 Problem-Solving & Critical Thinking', level: 95, category: 'design' },
  { name: '🔄 Adaptability & Continuous Learning', level: 92, category: 'design' },
  { name: '⏰ Time Management & Prioritization', level: 90, category: 'design' },
  { name: '🔍 Attention to Detail', level: 88, category: 'design' },
  { name: '❤️ Empathy & User-Centric Mindset', level: 90, category: 'design' },
  { name: '🤝 Collaboration in Agile Teams', level: 88, category: 'design' },
  { name: '🎓 Mentorship & Knowledge Sharing', level: 85, category: 'design' }
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
