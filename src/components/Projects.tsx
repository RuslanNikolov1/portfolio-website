'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.scss';

type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  details?: string[];
  technologies: string[];
  liveUrl: string;
  codeUrl: string;
  previewUrl: string; // gif
  thumbUrl: string; // thumbnail
};

const DUMMY_ITEMS: ShowcaseItem[] = Array.from({ length: 9 }).map((_, i) => ({
  id: String(i + 1),
  title: `Project ${i + 1}`,
  description: 'Short description for the project goes here as placeholder. This section summarises the purpose, audience, and technical choices behind the build.',
  details: [
    'Goal: showcase a clean UX with responsive layouts',
    'Highlights: animations, accessibility, and performance-minded code',
    'Stack: Next.js, TypeScript, SCSS modules',
  ],
  technologies: ['Next.js', 'TypeScript', 'SCSS'],
  liveUrl: '#',
  codeUrl: '#',
  previewUrl: `/projects/preview-${i + 1}.gif`,
  thumbUrl: `/projects/thumb-${i + 1}.png`
}));

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = DUMMY_ITEMS[selectedIndex];

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
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>Select one of our signature designs</p>
        </motion.div>

        <div className={styles.showcase}>
          <div className={styles.leftPanel}>
            <h3 className={styles.projectTitle}>{selected.title}</h3>
            <p className={styles.description}>{selected.description}</p>
            {selected.details && (
              <ul style={{ color: '#94A3B8', marginBottom: '1.25rem', paddingLeft: '1.25rem' }}>
                {selected.details.map((d, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem' }}>{d}</li>
                ))}
              </ul>
            )}
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
              <video
                key={selected.id}
                src={"/Knyazhevo app.mp4"}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className={styles.thumbnails}>
          {DUMMY_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className={`${styles.thumb} ${idx === selectedIndex ? styles.thumbActive : ''}`}
              onClick={() => setSelectedIndex(idx)}
              aria-label={`Select ${item.title}`}
            >
              <div className={styles.thumbPlaceholder}>{idx + 1}</div>
            </button>
          ))}
        </div>

        {/* preview grid removed */}
      </div>
    </section>
  );
};

export default Projects;
