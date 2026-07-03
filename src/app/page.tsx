import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import styles from './page.module.scss';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';
import SkillsSkeleton from '@/components/SkillsSkeleton';
import AboutSkeleton from '@/components/AboutSkeleton';
import ContactSkeleton from '@/components/ContactSkeleton';
import FeedbacksSkeleton from '@/components/FeedbacksSkeleton';

const ProjectsLazy = dynamic(() => import('@/components/Projects'), {
  loading: () => <ProjectsSkeleton />,
});

const SkillsLazy = dynamic(() => import('@/components/Skills'), {
  loading: () => <SkillsSkeleton />,
});

const AboutLazy = dynamic(() => import('@/components/About'), {
  loading: () => <AboutSkeleton />,
});

const FeedbacksLazy = dynamic(() => import('@/components/Feedbacks'), {
  loading: () => <FeedbacksSkeleton />,
});

const ContactLazy = dynamic(() => import('@/components/Contact'), {
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

        <div
          className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavyWhite}`}
          aria-hidden="true"
        />

        <div className={styles.sectionShell}>
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectsLazy />
          </Suspense>
        </div>

        <div
          className={`${styles.sectionDivider} ${styles.sectionDivider_cutYellow}`}
          aria-hidden="true"
        />

        <div className={styles.sectionShell}>
          <Suspense fallback={<SkillsSkeleton />}>
            <SkillsLazy />
          </Suspense>
        </div>

        <div
          className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavyWhite}`}
          aria-hidden="true"
        />

        <div className={styles.sectionShell}>
          <Suspense fallback={<AboutSkeleton />}>
            <AboutLazy />
          </Suspense>
        </div>

        <div
          className={`${styles.sectionDivider} ${styles.sectionDivider_cutYellowNavy}`}
          aria-hidden="true"
        />

        <div className={styles.sectionShell}>
          <Suspense fallback={<FeedbacksSkeleton />}>
            <FeedbacksLazy />
          </Suspense>
        </div>

        <div
          className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavySky}`}
          aria-hidden="true"
        />

        <div className={styles.sectionShell}>
          <Suspense fallback={<ContactSkeleton />}>
            <ContactLazy />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
