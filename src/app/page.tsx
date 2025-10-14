'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Feedbacks from '@/components/Feedbacks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
    <main>
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <div style={{ height: 3, background: '#ffffff', width: '100%' }} />
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Projects />
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>

      {/* Dragons image moved into About header */}
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Feedbacks />
      </motion.section>
      
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.section>
      
      <Footer />
    </main>
  );
}