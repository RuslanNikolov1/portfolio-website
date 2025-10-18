'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';
import { projects } from '@/data';
import styles from './Projects.module.scss';

// Use the first nine projects as the main showcase
const SHOWCASE_ITEMS = projects.slice(0, 9).map((project, index) => ({
  id: project.id,
  title: project.title,
  description: project.description,
  details: index === 0 ? [
    'Goal: showcase a clean UX with responsive layouts',
    'Highlights: interactive building layout, property listings, floor plans',
    'Stack: Three.js, Framer Motion, React, Sass, TypeScript',
  ] : index === 1 ? [
    'Goal: visualize real-time DeFi data with interactive charts',
    'Highlights: custom APIs, data aggregation, protocol stats, market trends',
    'Stack: React Query, React Table, Axios, Recharts, Sass, TypeScript',
  ] : index === 2 ? [
    'Goal: visualize astrology data and zodiac insights through clean interface',
    'Highlights: personalized birth charts, star alignments, dynamic horoscope visuals',
    'Stack: React, Sass',
  ] : index === 3 ? [
    'Goal: make mortgage applications simple, transparent, and accessible',
    'Highlights: loan options clarity, payment schedules, interest rates, intuitive controls',
    'Stack: React, Sass',
  ] : index === 4 ? [
    'Goal: evoke elegance & appetite while keeping UX seamless',
    'Highlights: visual storytelling, immersive imagery, dynamic menu, gallery showcase',
    'Stack: HTML, CSS',
  ] : index === 5 ? [
    'Goal: provide comprehensive information on transport policies and initiatives',
    'Highlights: transport policies, projects, events, news, member engagement',
    'Stack: React, React-router, Sass, TypeScript',
  ] : index === 6 ? [
    'Goal: merge craftsmanship with modern aesthetics through digital presentation',
    'Highlights: minimalist layout, smooth scrolling, responsive visuals, tactile quality emphasis',
    'Stack: React, Sass, TypeScript',
  ] : index === 7 ? [
    'Goal: explore ASH identity through clean design and bold typography',
    'Highlights: visual hierarchy, minimalism, high-contrast elements, smooth transitions',
    'Stack: HTML, CSS',
  ] : [
    'Goal: showcase modern web experiences with thoughtful user flows',
    'Highlights: seamless responsive interfaces, design and functionality connection, precise attention to detail',
    'Stack: Next.js, React, Framer Motion, Sass, Zod, React Hook Form, TypeScript',
  ],
  technologies: project.technologies,
  liveUrl: project.liveUrl,
  codeUrl: project.codeUrl,
  previewUrl: index === 0 ? "/Knyazhevo app.mp4" 
    : index === 1 ? "/Preview-Video 2.mp4" 
    : index === 2 ? "/Preview-4.mp4" 
    : index === 3 ? "/Preview-Video 7.mp4" 
    : index === 4 ? "/Preview-Video-3.mp4" 
    : index === 5 ? "/Preview-Video-8.mp4" 
    : index === 6 ? "/Preview-Video-5.mp4" 
    : index === 7 ? "/Preview-Video-6.mp4" 
    : "/Thumbnail-9.png", // Use Thumbnail-9 for portfolio website
  thumbUrl: project.imageUrl
}));

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const selected = SHOWCASE_ITEMS[selectedIndex];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? SHOWCASE_ITEMS.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === SHOWCASE_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.emojiTitle}>
            <div className={styles.emoji}>
              <Rocket size={64} />
            </div>
            <h2 className={styles.title}>Featured Projects</h2>
          </div>
          <p className={styles.subtitle}>Select one of my signature designs</p>
        </motion.div>

        <div className={styles.thumbnails}>
          {SHOWCASE_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.thumb} ${idx === selectedIndex ? styles.thumbActive : ''}`}
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Select ${item.title}`}
            >
              <div className={styles.thumbPlaceholder}>
                {idx === 0 ? (
                  <img src="/Thumbnail-1.png" alt="Thumbnail 1" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 1 ? (
                  <img src="/Thumbnail-2.png" alt="Thumbnail 2" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 2 ? (
                  <img src="/Thumbnail-4.png" alt="Thumbnail 4" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 3 ? (
                  <img src="/Thumbnail - 7.png" alt="Thumbnail 7" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 4 ? (
                  <img src="/Thumbnail-3.png" alt="Thumbnail 3" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 5 ? (
                  <img src="/Thumbnail-8.png" alt="Thumbnail 8" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 6 ? (
                  <img src="/Thumbnail-5.png" alt="Thumbnail 5" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 7 ? (
                  <img src="/Thumbnail-6.png" alt="Thumbnail 6" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : idx === 8 ? (
                  <img src="/Thumbnail-9.png" alt="Thumbnail 9" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  idx + 1
                )}
              </div>
            </button>
          ))}
        </div>

        <div className={styles.bridge}></div>

        <div className={styles.showcase}>
          <button 
            className={styles.navArrow} 
            onClick={goToPrevious}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.showcaseContent}>
            <div className={styles.leftPanel}>
              <h3 className={styles.projectTitle}>{selected.title}</h3>
              <p className={styles.description}>{selected.description}</p>
              {/* Details list removed as requested */}
              <div className={styles.technologies}>
                {selected.technologies.map((t, idx) => (
                  <span key={idx} className={`${styles.techBadge} dev`}>{t}</span>
                ))}
              </div>
              <div className={styles.leftButtons}>
                <motion.a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  Visit Project
                </motion.a>
                <motion.a
                  href={selected.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.codeButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  View Code
                </motion.a>
              </div>
            </div>

            <div className={styles.rightPanel}>
              <div className={styles.preview}>
                {isClient ? (
                  selected.previewUrl.endsWith('.mp4') ? (
                    <video
                      key={selected.id}
                      src={selected.previewUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      key={selected.id}
                      src={selected.previewUrl}
                      alt={selected.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )
                ) : (
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#000', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#fff'
                  }}>
                    Loading preview...
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <button 
            className={styles.navArrow} 
            onClick={goToNext}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* preview grid removed */}
      </div>
    </section>
  );
};

export default Projects;