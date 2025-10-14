'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.scss';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient} />
        <div className={styles.noise} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

          <div className={styles.titleRow}>
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ruslan Nikolov
            </motion.h1>

            <motion.p
              className={`${styles.subtitle} ${styles.inlineSubtitle}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              Senior Frontend Developer • UI/UX Designer
              <span className={styles.roleBreak}>Electronic Music Producer</span>
            </motion.p>
          </div>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            From EPAM Systems to freelance development, now seeking to return to a big company 
            to grow further in software development and contribute to larger projects.
          </motion.p>

          <motion.div
            className={styles.credentials}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.credential}>
              <span className={styles.credentialNumber}>7+</span>
              <span className={styles.credentialLabel}>Years Experience</span>
            </div>
            <div className={styles.credential}>
              <span className={styles.credentialNumber}>18</span>
              <span className={styles.credentialLabel}>Projects Delivered</span>
            </div>
          </motion.div>

          {/* Buttons removed as requested */}
        </motion.div>
        </div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
