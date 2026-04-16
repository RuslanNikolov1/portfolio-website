'use client';

import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Rocket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data';
import styles from './Projects.module.scss';

// Use the first nine projects as the main showcase
const SHOWCASE_ITEMS = projects
  // Ensure any removed projects (like historical DefiLlama) stay out of the UI
  .filter((project) => project.id !== '2')
  .map((project) => {
    let details: string[];
    let previewUrl: string;

    switch (project.id) {
      case '10': // Broker Bulgaria
        details = [
          'Goal: create a modern real estate experience for property buyers and owners',
          'Highlights: advanced filtering, property submissions, appraisal requests, favourites, and client feedback',
          'Stack: Next.js, Supabase, Cloudinary, Framer, React, Sass, TypeScript',
        ];
        previewUrl = "/Thumbnail - Real Estate New.png";
        break;
      case '1': // Forest Residence Sofia
        details = [
          'Goal: showcase a clean UX with responsive layouts',
          'Highlights: interactive building layout, property listings, floor plans',
          'Stack: Three.js, Framer Motion, React, Sass, TypeScript',
        ];
        previewUrl = "/Knyazhevo app.mp4";
        break;
      case '13': // Strong Sol Construction App (IN PROGRESS)
        details = [
          'Goal: deliver a pleasant construction-focused UI with modern interaction design',
          'Highlights: video play on scroll, rotating 3D elements, and an interactive rotatable 3D model',
          'Stack: Figma, Next.js, TypeScript, GSAP, React, Sass, Three.js, Web-ifc',
        ];
        previewUrl = "/Thumbnail Construction.png";
        break;
      case '11': // Energy Massage Therapy
        details = [
          'Goal: present a magical, calming massage therapy experience online',
          'Highlights: practice information, therapist bio, pricing, Destiny Matrix, and online shop',
          'Stack: Next.js, Framer Motion, React, Sass, TypeScript',
        ];
        previewUrl = "/Thumbnail Massage New.png";
        break;
      case '12': // Kutiev Law Firm
        details = [
          'Goal: create a focused online presence for a criminal law attorney',
          'Highlights: clear practice areas, professional credentials, concise firm overview, and direct contact options',
          'Stack: React, Next.js, TypeScript, Sass',
        ];
        previewUrl = "/Thumbnail-Lawyer.png";
        break;
      case '3': // Astrology App
        details = [
          'Goal: visualize astrology data and zodiac insights through a clean interface',
          'Highlights: personalized birth charts, star alignments, dynamic horoscope visuals',
          'Stack: React, Sass',
        ];
        previewUrl = "/Preview-4.mp4";
        break;
      case '5': // Ambra Restaurant
        details = [
          'Goal: evoke elegance & appetite while keeping UX seamless',
          'Highlights: visual storytelling, immersive imagery, dynamic menu, gallery showcase',
          'Stack: HTML, CSS',
        ];
        previewUrl = "/Preview-Video-3.mp4";
        break;
      case '6': // AMTP Association
        details = [
          'Goal: provide comprehensive information on transport policies and initiatives',
          'Highlights: transport policies, projects, events, news, member engagement',
          'Stack: React, React-router, Sass, TypeScript',
        ];
        previewUrl = "/Thumbnail-AMTP-new.png";
        break;
      case '7': // De-Fi Dashboard
        details = [
          'Goal: visualize real-time DeFi data with an interactive dashboard',
          'Highlights: custom data aggregation backend, interactive charts, protocol stats and market trends',
          'Stack: React Query, React Table, Axios, React, Recharts, Sass, TypeScript',
        ];
        previewUrl = "/Preview-Video%202.mp4";
        break;
      case '8': // Ash-services
        details = [
          'Goal: explore ASH identity through clean design and bold typography',
          'Highlights: visual hierarchy, minimalism, high-contrast elements, smooth transitions',
          'Stack: HTML, CSS',
        ];
        previewUrl = "/Preview-Video-6.mp4";
        break;
      default:
        details = [
          'Goal: showcase a modern web experience',
          'Highlights: responsive design, clean UI, and smooth interactions',
          'Stack: modern frontend technologies',
        ];
        previewUrl = project.imageUrl;
    }

    return {
      id: project.id,
      title: project.title,
      description: project.description,
      details,
      technologies: project.technologies,
      liveUrl: project.liveUrl,
      codeUrl: project.codeUrl,
      previewUrl,
      thumbUrl: project.imageUrl,
    };
  });


const Projects = memo(() => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const selected = useMemo(() => SHOWCASE_ITEMS[selectedIndex], [selectedIndex]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? SHOWCASE_ITEMS.length - 1 : prev - 1));
    // Scroll after state change for mobile (call reuse of handler)
    // (we purposely don't scroll here — thumbnails control scroll)
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === SHOWCASE_ITEMS.length - 1 ? 0 : prev + 1));
  }, []);


  const handleThumbnailClick = (idx: number) => {
    setSelectedIndex(idx);
  
    console.log('Thumbnail clicked ✅', idx);
  
    const target = document.getElementById('project-preview');
    console.log('Target found:', !!target, target);
  
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    console.log('isMobile:', isMobile);
  
    if (!isMobile) return;
    if (!target) return;
  
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        </motion.div>

        <div className={styles.thumbnails}>
          {SHOWCASE_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.thumb} ${idx === selectedIndex ? styles.thumbActive : ''}`}
              onClick={() => handleThumbnailClick(idx)}
              aria-label={`Select ${item.title}`}
            >
              <div className={styles.thumbPlaceholder}>
                <Image
                  src={item.thumbUrl || `/Thumbnail-${idx + 1}.png`}
                  alt={`${item.title} thumbnail`}
                  width={120}
                  height={80}
                  className={styles.thumbnailImage}
                />
              </div>
            </button>
          ))}
        </div>

        <div className={styles.bridge}></div>

        <div className={styles.showcase} id="project-preview" tabIndex={-1}>
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
              <div className={styles.technologies}>
                {selected.technologies.map((t, idx) => (
                  <span key={idx} className={`${styles.techBadge} dev`}>{t}</span>
                ))}
              </div>
              <div className={styles.leftButtons}>
                <Link href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    className={styles.liveButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Visit Project
                  </motion.div>
                </Link>
                <Link href={selected.codeUrl} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    className={styles.codeButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.div>
                </Link>
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
                      className={styles.previewVideo}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      key={selected.id}
                      src={selected.previewUrl}
                      alt={selected.title}
                      width={800}
                      height={600}
                      className={styles.previewImage}
                    />
                  )
                ) : (
                  <div className={styles.loadingPlaceholder}>
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
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;