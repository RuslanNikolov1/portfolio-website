'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import styles from './page.module.scss';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';
import SkillsSkeleton from '@/components/SkillsSkeleton';
import AboutSkeleton from '@/components/AboutSkeleton';
import ContactSkeleton from '@/components/ContactSkeleton';
import FeedbacksSkeleton from '@/components/FeedbacksSkeleton';

const ProjectsLazy = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => <ProjectsSkeleton />,
});

const SkillsLazy = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => <SkillsSkeleton />,
});

const AboutLazy = dynamic(() => import('@/components/About'), {
  ssr: false,
  loading: () => <AboutSkeleton />,
});

const FeedbacksLazy = dynamic(() => import('@/components/Feedbacks'), {
  ssr: false,
  loading: () => <FeedbacksSkeleton />,
});

const ContactLazy = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => <ContactSkeleton />,
});

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main id="main-content" role="main">
        <section id="hero" aria-label="Hero section" className={styles.heroSection}>
          <Hero />
        </section>

        <div className={styles.sectionDivider} aria-hidden="true" />

        <div className={styles.sectionShell}>
          <ProjectsLazy />
        </div>

        <div className={styles.sectionDivider} aria-hidden="true" />

        <div className={styles.sectionShell}>
          <SkillsLazy />
        </div>

        <div className={styles.sectionShell}>
          <AboutLazy />
        </div>

        <div className={styles.sectionShell}>
          <FeedbacksLazy />
        </div>

        <div className={styles.sectionShell}>
          <ContactLazy />
        </div>
      </main>
    </div>
  );
}
