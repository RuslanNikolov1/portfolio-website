'use client';

import dynamic from 'next/dynamic';
import styles from '@/app/page.module.scss';
import ProjectsSkeleton from '@/components/ProjectsSkeleton';
import SkillsSkeleton from '@/components/SkillsSkeleton';
import AboutSkeleton from '@/components/AboutSkeleton';
import ContactSkeleton from '@/components/ContactSkeleton';
import FeedbacksSkeleton from '@/components/FeedbacksSkeleton';

const ProjectsLazy = dynamic(() => import('@/components/Projects'), {
  loading: () => <ProjectsSkeleton />,
  ssr: false,
});

const SkillsLazy = dynamic(() => import('@/components/Skills'), {
  loading: () => <SkillsSkeleton />,
  ssr: false,
});

const AboutLazy = dynamic(() => import('@/components/About'), {
  loading: () => <AboutSkeleton />,
  ssr: false,
});

const FeedbacksLazy = dynamic(() => import('@/components/Feedbacks'), {
  loading: () => <FeedbacksSkeleton />,
  ssr: false,
});

const ContactLazy = dynamic(() => import('@/components/Contact'), {
  loading: () => <ContactSkeleton />,
  ssr: false,
});

export default function HomeSections() {
  return (
    <>
      <div
        className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavyWhite}`}
        aria-hidden="true"
      />

      <div className={styles.sectionShell}>
        <ProjectsLazy />
      </div>

      <div
        className={`${styles.sectionDivider} ${styles.sectionDivider_cutYellow}`}
        aria-hidden="true"
      />

      <div className={styles.sectionShell}>
        <SkillsLazy />
      </div>

      <div
        className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavyWhite}`}
        aria-hidden="true"
      />

      <div className={styles.sectionShell}>
        <AboutLazy />
      </div>

      <div
        className={`${styles.sectionDivider} ${styles.sectionDivider_cutYellowNavy}`}
        aria-hidden="true"
      />

      <div className={styles.sectionShell}>
        <FeedbacksLazy />
      </div>

      <div
        className={`${styles.sectionDivider} ${styles.sectionDivider_cutNavySky}`}
        aria-hidden="true"
      />

      <div className={styles.sectionShell}>
        <ContactLazy />
      </div>
    </>
  );
}
