'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.background} role="img" aria-label="Animated background video">
        {isClient ? (
          !videoError ? (
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => {
                setVideoError(true);
              }}
              onCanPlay={() => {
                setVideoError(false);
              }}
              aria-label="Background animation video"
            >
              <source src="/TensorPix - Hero Animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className={styles.heroVideo} style={{
              background: `
                linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%),
                radial-gradient(ellipse at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)
              `,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#94A3B8',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                opacity: 0.03
              }} />
              Video unavailable
            </div>
          )
        ) : (
          <div className={styles.heroVideo} style={{
            background: `
              linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%),
              radial-gradient(ellipse at 20% 30%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 60%)
            `,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94A3B8',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              opacity: 0.03
            }} />
            {videoError ? 'Video unavailable' : 'Loading video...'}
          </div>
        )}


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
              <div className={styles.titleContainer}>
                <motion.h1
                  className={styles.title}
                  data-text="ruslan nikolov"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  ruslan nikolov
                </motion.h1>

              </div>

              <motion.div
                className={styles.highlightedContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
              >
                <p className={`${styles.subtitle} ${styles.inlineSubtitle}`}>
                  Senior Frontend Developer • UI/UX Designer
                  <span className={styles.roleBreak}>Electronic Music Producer</span>
                </p>
              </motion.div>
              <motion.div
                className={`${styles.highlightedContainer} ${styles.descriptionContainer}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                 <p className={styles.description}>
                   From EPAM Systems to freelance development, seeking to expand opportunities
                   and contribute to diverse projects.
                 </p>
              </motion.div>

            </div>

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
