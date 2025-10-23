import React, { lazy, Suspense } from 'react';

// Lazy load icons to reduce initial bundle size
const iconMap = {
  // Frontend Skills
  'React': lazy(() => import('lucide-react').then(module => ({ default: module.Atom }))),
  'TypeScript': lazy(() => import('lucide-react').then(module => ({ default: module.FileCode }))),
  'Next.js': lazy(() => import('lucide-react').then(module => ({ default: module.Globe }))),
  'JavaScript': lazy(() => import('lucide-react').then(module => ({ default: module.FileText }))),
  'HTML/CSS': lazy(() => import('lucide-react').then(module => ({ default: module.Layers }))),
  'SASS/SCSS': lazy(() => import('lucide-react').then(module => ({ default: module.Palette }))),
  'Tailwind CSS': lazy(() => import('lucide-react').then(module => ({ default: module.Zap }))),
  'Framer Motion': lazy(() => import('lucide-react').then(module => ({ default: module.Sparkles }))),
  'Redux': lazy(() => import('lucide-react').then(module => ({ default: module.Code }))),
  'Material UI': lazy(() => import('lucide-react').then(module => ({ default: module.Palette }))),
  'Mapbox': lazy(() => import('lucide-react').then(module => ({ default: module.Globe }))),
  'Web Audio API': lazy(() => import('lucide-react').then(module => ({ default: module.Volume2 }))),
  'Three.js': lazy(() => import('lucide-react').then(module => ({ default: module.Cpu }))),

  // Backend & API Skills
  'REST API': lazy(() => import('lucide-react').then(module => ({ default: module.Network }))),
  'GraphQL': lazy(() => import('lucide-react').then(module => ({ default: module.Database }))),

  // Development Tools
  'Git': lazy(() => import('lucide-react').then(module => ({ default: module.GitBranch }))),
  'CI/CD': lazy(() => import('lucide-react').then(module => ({ default: module.Workflow }))),
  'Webpack': lazy(() => import('lucide-react').then(module => ({ default: module.Package }))),
  'Vite': lazy(() => import('lucide-react').then(module => ({ default: module.Zap }))),
  'Cursor': lazy(() => import('lucide-react').then(module => ({ default: module.Bot }))),
  'React Query': lazy(() => import('lucide-react').then(module => ({ default: module.Code }))),
  'React Table': lazy(() => import('lucide-react').then(module => ({ default: module.ClipboardList }))),
  'Axios': lazy(() => import('lucide-react').then(module => ({ default: module.Globe }))),
  'Recharts': lazy(() => import('lucide-react').then(module => ({ default: module.Target }))),
  'React Router': lazy(() => import('lucide-react').then(module => ({ default: module.Globe }))),
  'Zod': lazy(() => import('lucide-react').then(module => ({ default: module.Shield }))),
  'React Hook Form': lazy(() => import('lucide-react').then(module => ({ default: module.FileText }))),

  // Soft Skills
  'Client-focused problem solving': lazy(() => import('lucide-react').then(module => ({ default: module.Target }))),
  'Leadership and mentoring': lazy(() => import('lucide-react').then(module => ({ default: module.Crown }))),
  'Effective communication': lazy(() => import('lucide-react').then(module => ({ default: module.MessageCircle }))),
  'Strategic project planning': lazy(() => import('lucide-react').then(module => ({ default: module.ClipboardList }))),
  'Problem-Solving & Critical Thinking': lazy(() => import('lucide-react').then(module => ({ default: module.Lightbulb }))),
  'Adaptability & Continuous Learning': lazy(() => import('lucide-react').then(module => ({ default: module.Target }))),
  'Time Management & Prioritization': lazy(() => import('lucide-react').then(module => ({ default: module.Clock }))),
  'Attention to Detail': lazy(() => import('lucide-react').then(module => ({ default: module.Search }))),
  'Empathy & User-Centric Mindset': lazy(() => import('lucide-react').then(module => ({ default: module.Heart }))),
  'Collaboration in Agile Teams': lazy(() => import('lucide-react').then(module => ({ default: module.Handshake }))),
  'Mentorship & Knowledge Sharing': lazy(() => import('lucide-react').then(module => ({ default: module.GraduationCap }))),

  // Music Skills
  'Ableton Live': lazy(() => import('lucide-react').then(module => ({ default: module.Headphones }))),
  'Electronic Music': lazy(() => import('lucide-react').then(module => ({ default: module.Music2 }))),
  'Sound Design': lazy(() => import('lucide-react').then(module => ({ default: module.Volume2 }))),
  'Music Composition': lazy(() => import('lucide-react').then(module => ({ default: module.Music }))),
  'Audio Mixing': lazy(() => import('lucide-react').then(module => ({ default: module.Mic }))),
  'Creative Process': lazy(() => import('lucide-react').then(module => ({ default: module.Sparkles }))),
};

interface IconLoaderProps {
  name: string;
  size?: number;
  color?: string;
}

const IconLoader: React.FC<IconLoaderProps> = ({ name, size = 16, color }) => {
  const LazyIcon = iconMap[name as keyof typeof iconMap];
  
  if (!LazyIcon) {
    return null;
  }

  return (
    <Suspense fallback={<div style={{ width: size, height: size }} />}>
      <LazyIcon size={size} color={color} />
    </Suspense>
  );
};

export default IconLoader;
