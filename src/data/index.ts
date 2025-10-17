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
    title: 'DefiLlama-Dashboard',
    description: 'A full-stack web app that visualizes real-time DeFi data using custom APIs and interactive charts. I built both the backend for data aggregation and the frontend dashboard for exploring protocol stats and market trends.',
    technologies: ['React Query', 'React Table', 'Axios', 'React', 'Recharts', 'Sass', 'TypeScript'],
    imageUrl: '/projects/defillama.png',
    liveUrl: 'https://defi-llama-dashboard-backend.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1',
    category: 'web'
  },
  {
    id: '3',
    title: 'Astrology App',
    description: 'A modern web application that visualizes astrology data and zodiac insights through a clean, responsive interface. Users can explore personalized birth charts, learn about star alignments, and view dynamic horoscope visuals. Designed with an emphasis on clarity, interactivity, and smooth user experience across all devices.',
    technologies: ['React', 'Sass'],
    imageUrl: '/projects/astrology.png',
    liveUrl: 'https://astrology-app-chi.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/astrology-app',
    category: 'web'
  },
  {
    id: '4',
    title: 'AGB Finance',
    description: 'Developed a polished front-end prototype for a mortgage loan service, designed to make applying for a mortgage simple, transparent, and accessible. The interface emphasizes clarity in showing loan options, payment schedules, and interest rates, with intuitive controls and responsive layout that works well across devices. My aim was to reduce friction, build trust through clean design, and help users make informed financial decisions.',
    technologies: ['React', 'Sass'],
    imageUrl: '/projects/agb.png',
    liveUrl: 'https://agb-prototype-1-s7hr.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/agb-prototype-1',
    category: 'web'
  },
  {
    id: '5',
    title: 'Ambra Restaurant',
    description: 'A modern prototype for Ambra, a fine-dining restaurant concept. I designed and built the front-end with a focus on visual storytelling, immersive imagery, and intuitive navigation. Features include a dynamic menu, gallery showcase, reservation call-to-action, and responsive design across devices. Goal: evoke elegance & appetite while keeping UX seamless.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/projects/ambra.png',
    liveUrl: 'https://ambra-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/ambra-prototype',
    category: 'web'
  },
  {
    id: '6',
    title: 'AMTP Association',
    description: 'A comprehensive web application for the Public Transport Association, providing detailed information on transport policies, projects, events, and news. The app allows members and the public to easily explore resources, stay updated on initiatives, and engage with the association\'s activities. Designed with a clean, responsive interface, this project highlights my ability to create informative, user-friendly web solutions tailored to organizational needs.',
    technologies: ['React', 'React-router', 'Sass', 'TypeScript'],
    imageUrl: '/projects/association.png',
    liveUrl: 'https://association-app-nyop.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/association-app',
    category: 'web'
  },
  {
    id: '7',
    title: 'Custom Wallets',
    description: 'A digital presentation of a custom physical wallet line designed to merge craftsmanship with modern aesthetics. The site highlights each wallet\'s materials, structure, and concept through minimalist layout, smooth scrolling, and responsive visuals. Built to emphasize both the tactile quality of the products and the clarity of their design story.',
    technologies: ['React', 'Sass', 'TypeScript'],
    imageUrl: '/projects/wallets.png',
    liveUrl: 'https://wallets-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/wallets-prototype',
    category: 'web'
  },
  {
    id: '8',
    title: 'Ash-services',
    description: 'A sleek prototype site exploring the identity and aesthetic of ASH through clean design, bold typography, and immersive imagery. The layout emphasizes visual hierarchy, minimalism, and high-contrast elements to communicate a strong brand personality. Built to look elegant, responsive, and intuitive, the prototype enhances user engagement with smooth transitions and refined visual details.',
    technologies: ['HTML', 'CSS'],
    imageUrl: '/projects/ash.png',
    liveUrl: 'https://ash-prototype.vercel.app/',
    codeUrl: 'https://github.com/RuslanNikolov1/ash-prototype',
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
  { name: 'React', level: 95, years: 7, category: 'frontend', notes: 'Used in all my projects. I choose React because of its component-based architecture, excellent ecosystem, and the way it makes building interactive UIs intuitive and maintainable.' },
  { name: 'TypeScript', level: 90, years: 7, category: 'frontend', notes: 'Used in nearly all my projects. I use TypeScript because it catches errors at compile time, improves code readability, and makes refactoring much safer and more confident.' },
  { name: 'Next.js', level: 88, years: 3, category: 'frontend', notes: 'Used in Ambra restaurant and portfolio website. I choose Next.js for its built-in SSR/SSG capabilities, automatic code splitting, and excellent performance optimizations that make production-ready apps.' },
  { name: 'JavaScript', level: 92, years: 8, category: 'frontend', notes: 'Used in all my projects. JavaScript is the foundation of modern web development - I leverage ES6+ features, async/await patterns, and functional programming to write clean, efficient code.' },
  { name: 'HTML/CSS', level: 95, years: 8, category: 'frontend', notes: 'Used in all my projects. These are the building blocks of the web - I focus on semantic HTML for accessibility and SEO, while CSS enables responsive, visually appealing designs.' },
  { name: 'SASS/SCSS', level: 85, years: 4, category: 'frontend', notes: 'Used in nearly all my projects. I prefer SASS over Tailwind and CSS-in-JS because it keeps classes clean, provides better performance, and offers variables, nesting, and mixins for organized, DRY code.' },
  { name: 'Tailwind CSS', level: 90, years: 2, category: 'frontend', notes: 'Used in Ambra restaurant. I use Tailwind for rapid prototyping and utility-first styling when I need to build quickly without custom CSS, though I prefer SASS for complex projects.' },
  { name: 'Framer Motion', level: 80, years: 2, category: 'frontend', notes: 'Used for animations and micro-interactions. I choose Framer Motion because it brings interfaces to life with smooth animations that enhance user experience and provide meaningful feedback.' },
  { name: 'Redux', level: 85, years: 5, category: 'frontend', notes: 'Used for big state management. I use Redux when component state becomes unwieldy or when multiple components need to share data - it provides predictable state updates and excellent DevTools.' },
  { name: 'Material UI', level: 80, years: 5, category: 'frontend', notes: 'Used in a lot of projects. I choose Material UI when I need to build quickly while maintaining design consistency, as it provides pre-built, accessible components with a solid theming system.' },
  { name: 'Mapbox', level: 75, years: 1, category: 'frontend', notes: 'Used in the transport project. I use Mapbox for location-based applications because it provides excellent performance, customization options, and real-time data visualization capabilities.' },
  { name: 'Web Audio API', level: 70, years: 1, category: 'frontend', notes: 'Used in various sites. I use Web Audio API to create rich audio experiences in the browser, enabling interactive sound effects and music applications for immersive web experiences.' },
  { name: 'Three.js', level: 75, years: 1, category: 'frontend', notes: 'Used in the Forest Residence Sofia app. I choose Three.js for 3D web experiences because it makes WebGL accessible and allows me to build stunning 3D interfaces impossible with traditional web technologies.' },
  { name: 'REST API', level: 88, years: 8, category: 'frontend', notes: 'Used in most of the sites. I use REST APIs because they provide a clean, stateless way to exchange data with intuitive, well-documented services that follow HTTP standards.' },
  { name: 'GraphQL', level: 75, years: 1, category: 'frontend', notes: 'Used once. I use GraphQL when I need to fetch exactly the data I need in a single request, though REST is my go-to for most applications.' },
  { name: 'React Query', level: 85, years: 2, category: 'frontend', notes: 'Revolutionary data fetching and caching library. I use React Query to manage server state, handle loading states, and implement optimistic updates - it eliminates boilerplate code and provides excellent caching strategies.' },
  { name: 'React Table', level: 80, years: 1, category: 'frontend', notes: 'Powerful table library for complex data grids. I used it in the DefiLlama Dashboard to create sortable, filterable tables with custom cell renderers - it provides headless components with complete styling control.' },
  { name: 'Axios', level: 90, years: 5, category: 'frontend', notes: 'My preferred HTTP client for API communication. I use Axios for its clean API, error handling capabilities, interceptors, and ability to work seamlessly with both browser and Node.js environments.' },
  { name: 'Recharts', level: 75, years: 2, category: 'frontend', notes: 'Excellent React charting library built on D3. I used it in the DefiLlama Dashboard to create interactive financial charts and data visualizations - it combines D3 power with React component model.' },
  { name: 'React Router', level: 85, years: 4, category: 'frontend', notes: 'Essential for single-page application navigation. I use React Router for client-side routing, nested routes, and programmatic navigation - it provides declarative routing that integrates seamlessly with React.' },
  { name: 'Zod', level: 80, years: 2, category: 'frontend', notes: 'TypeScript-first schema validation library. I use Zod for runtime type checking, form validation, and API response validation - it provides excellent TypeScript integration and catches errors at compile and runtime.' },
  { name: 'React Hook Form', level: 85, years: 2, category: 'frontend', notes: 'Performant form library with minimal re-renders. I use it for complex forms with validation, especially in my portfolio contact form - it integrates perfectly with Zod for type-safe validation and provides excellent performance.' },
  
  // Development Tools
  { name: 'Git', level: 90, years: 8, category: 'tools', notes: 'Used everytime. Git is essential for version control and collaboration - I use it for tracking changes, branching strategies, and maintaining clean commit history in all my projects.' },
  { name: 'CI/CD', level: 85, years: 5, category: 'tools', notes: 'Used Jenkins, Github and Vercel. I use CI/CD to automate my deployment pipeline for faster, more reliable releases, ensuring code quality and reducing manual errors.' },
  { name: 'Webpack', level: 80, years: 5, category: 'tools', notes: 'Used a lot in the old projects. I use Webpack for complex applications because its module system and plugin ecosystem allow me to optimize builds and handle assets effectively.' },
  { name: 'Vite', level: 85, years: 2, category: 'tools', notes: 'Used very frequently. I choose Vite for its revolutionary development experience with lightning-fast hot reload, simplicity, and excellent TypeScript support that dramatically improves productivity.' },
  { name: 'Cursor', level: 90, years: 2, category: 'tools', notes: 'Used a lot recently. I use Cursor for AI-assisted development, code generation, debugging, documentation, and learning new technologies - it accelerates development while helping me write better, more efficient code.' },
  
  // Design Skills
  { name: 'Client-focused problem solving', level: 95, years: 6, category: 'design', notes: 'Redesigned Ambra\'s reservation flow to reduce friction. Solved 3D navigation challenges for Forest Residence Sofia to help buyers visualize properties.' },
  { name: 'Leadership and mentoring', level: 92, years: 4, category: 'design', notes: 'Established front-end standards across projects. Mentored juniors on AMTP Association app with code reviews and pair programming. Led DefiLlama dashboard architecture decisions.' },
  { name: 'Effective communication', level: 90, years: 6, category: 'design', notes: 'Facilitated stakeholder meetings for Forest Residence Sofia, translating technical requirements into clear specifications. Presented solutions to clients ensuring business-goal alignment.' },
  { name: 'Strategic project planning', level: 88, years: 5, category: 'design', notes: 'Orchestrated DefiLlama dashboard from concept to deployment. Created roadmaps and managed resources across concurrent projects. Delivered portfolio and 8+ prototypes within tight deadlines.' },
  { name: 'Problem-Solving & Critical Thinking', level: 95, years: 6, category: 'design', notes: 'Resolved DefiLlama dashboard state management issues. Debugged Three.js performance bottlenecks for Forest Residence Sofia. Optimized AGB Finance mortgage flow based on user behavior analysis.' },
  { name: 'Adaptability & Continuous Learning', level: 92, years: 6, category: 'design', notes: 'Mastered Three.js and Framer Motion for Forest Residence Sofia\'s 3D experiences. Adopted Web Audio API for interactive sound design. Integrated AI-assisted development tools for enhanced productivity.' },
  { name: 'Time Management & Prioritization', level: 90, years: 5, category: 'design', notes: 'Delivered 9 portfolio projects within aggressive timelines through effective scoping. Managed concurrent client projects while maintaining code quality. Reduced delivery time by 30% with optimized workflows.' },
  { name: 'Attention to Detail', level: 88, years: 6, category: 'design', notes: 'Crafted pixel-perfect responsive designs across all projects. Implemented accessibility features for AMTP Association app. Achieved 95+ Lighthouse scores through performance optimization.' },
  { name: 'Empathy & User-Centric Mindset', level: 90, years: 5, category: 'design', notes: 'Designed intuitive architecture for AMTP Association, making transport policies accessible. Created user-friendly mortgage flows for AGB Finance. Conducted user research for Ambra\'s improved reservation UX.' },
  { name: 'Collaboration in Agile Teams', level: 88, years: 4, category: 'design', notes: 'Worked with designers, PMs, and stakeholders in sprint cycles. Participated in standups and planning for DefiLlama dashboard. Collaborated with 3D artists for Forest Residence Sofia\'s technical feasibility.' },
  { name: 'Mentorship & Knowledge Sharing', level: 85, years: 3, category: 'design', notes: 'Created documentation and reusable component libraries. Conducted knowledge transfer on React patterns and TypeScript. Established coding standards that improved team productivity by 40%.' }
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
