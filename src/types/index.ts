export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  codeUrl: string;
  category: 'web' | 'design' | 'music';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'design' | 'music';
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
