'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import dynamic from 'next/dynamic';

// Lazy-loaded sections with accessible fallbacks
const ProjectsLazy = dynamic(() => import('@/components/Projects'), {
  ssr: false,
  loading: () => (
    <div role="status" aria-busy="true" style={{ padding: '2rem', textAlign: 'center' }}>
      Loading Projects…
    </div>
  ),
});

const SkillsLazy = dynamic(() => import('@/components/Skills'), {
  ssr: false,
  loading: () => (
    <div role="status" aria-busy="true" style={{ padding: '2rem', textAlign: 'center' }}>
      Loading Skills…
    </div>
  ),
});

const AboutLazy = dynamic(() => import('@/components/About'), {
  ssr: false,
  loading: () => (
    <div role="status" aria-busy="true" style={{ padding: '2rem', textAlign: 'center' }}>
      Loading About…
    </div>
  ),
});

const FeedbacksLazy = dynamic(() => import('@/components/Feedbacks'), {
  ssr: false,
  loading: () => (
    <div role="status" aria-busy="true" style={{ padding: '2rem', textAlign: 'center' }}>
      Loading Testimonials…
    </div>
  ),
});

const ContactLazy = dynamic(() => import('@/components/Contact'), {
  ssr: false,
  loading: () => (
    <div role="status" aria-busy="true" style={{ padding: '2rem', textAlign: 'center' }}>
      Loading Contact…
    </div>
  ),
});

const FooterLazy = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => null,
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" role="main">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
      <div style={{ height: 3, background: '#ffffff', width: '100%' }} />
      
        <motion.section
          id="projects"
          aria-label="Projects section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
        <ProjectsLazy />
        </motion.section>
        
        <div style={{ height: 3, background: '#ffffff', width: '100%' }} />
        
        <motion.section
          id="skills"
          aria-label="Skills section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
        <SkillsLazy />
        </motion.section>

        {/* Dragons image moved into About header */}
        
        <motion.section
          id="about"
          aria-label="About section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
        <AboutLazy />
        </motion.section>
        
        <motion.section
          id="feedbacks"
          aria-label="Feedbacks section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
        <FeedbacksLazy />
        </motion.section>
        
        <motion.section
          id="contact"
          aria-label="Contact section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
        <ContactLazy />
        </motion.section>
      </main>
      
      <FooterLazy />
    </>
  );
}