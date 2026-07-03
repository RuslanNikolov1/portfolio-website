'use client';

import { useState, useEffect, useCallback, useMemo, useRef, memo } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './Projects.module.scss';

const SHOWCASE_ITEMS = projects
  .filter((project) => project.id !== '2')
  .map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    codeUrl: project.codeUrl,
    previewUrl: project.imageUrl,
    thumbUrl: project.imageUrl,
  }));

const SWIPE_THRESHOLD = 72;

const Projects = memo(() => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const railRef = useRef<HTMLElement>(null);

  const selected = useMemo(() => SHOWCASE_ITEMS[selectedIndex], [selectedIndex]);
  const totalProjects = SHOWCASE_ITEMS.length;

  useEffect(() => {
    const rail = railRef.current;
    const activeTab = rail?.querySelector('[aria-selected="true"]') as HTMLElement | null;
    if (!rail || !activeTab) return;

    const isHorizontal = window.matchMedia('(max-width: 768px)').matches;
    const behavior = reduceMotion ? 'auto' : 'smooth';

    if (isHorizontal) {
      const scrollLeft =
        activeTab.offsetLeft - (rail.clientWidth - activeTab.clientWidth) / 2;
      rail.scrollTo({ left: scrollLeft, behavior });
    } else {
      const scrollTop =
        activeTab.offsetTop - (rail.clientHeight - activeTab.clientHeight) / 2;
      rail.scrollTo({ top: scrollTop, behavior });
    }
  }, [selectedIndex, reduceMotion]);

  const goToPrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  }, [totalProjects]);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === totalProjects - 1 ? 0 : prev + 1));
  }, [totalProjects]);

  const handleRailSelect = useCallback(
    (idx: number) => {
      setSelectedIndex(idx);

      const target = document.getElementById('project-preview');
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      if (!isMobile || !target) return;

      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    },
    [reduceMotion],
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      if (info.offset.x > SWIPE_THRESHOLD) goToPrevious();
      else if (info.offset.x < -SWIPE_THRESHOLD) goToNext();
    },
    [goToPrevious, goToNext],
  );

  const dockVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 110,
        damping: 18,
        staggerChildren: reduceMotion ? 0 : 0.06,
      },
    },
    exit: reduceMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24, transition: { duration: 0.18 } },
  };

  const dockItemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const renderPreview = () => (
    <Image
      key={selected.id}
      src={selected.previewUrl}
      alt={selected.title}
      width={1200}
      height={750}
      sizes="(max-width: 768px) 100vw, 70vw"
      className={styles.previewMedia}
      priority={selectedIndex === 0}
    />
  );

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.header
          className={styles.masthead}
          initial={reduceMotion ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className={styles.title}>
            Featured{' '}
            <span className={styles.titleAccent}>Projects</span>
          </h2>
        </motion.header>

        <div className={styles.stage}>
          <nav
            ref={railRef}
            className={styles.rail}
            role="tablist"
            aria-label="Project selection"
          >
            {SHOWCASE_ITEMS.map((item, idx) => (
              <motion.button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={idx === selectedIndex}
                className={`${styles.railItem} ${idx === selectedIndex ? styles.railItemActive : ''}`}
                onClick={() => handleRailSelect(idx)}
                aria-label={`Select ${item.title}`}
                initial={reduceMotion ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : idx * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduceMotion ? undefined : { x: 4 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <span className={styles.railThumb}>
                  <Image
                    src={item.thumbUrl}
                    alt=""
                    width={96}
                    height={64}
                    className={styles.railImage}
                  />
                </span>
                <span className={styles.railLabel}>{item.title}</span>
              </motion.button>
            ))}
          </nav>

          <div className={styles.theater} id="project-preview" tabIndex={-1}>
            <button
              type="button"
              className={`${styles.theaterNav} ${styles.theaterNavPrev}`}
              onClick={goToPrevious}
              aria-label="Previous project"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <div className={styles.previewFrame}>
              <motion.div
                className={styles.previewStage}
                drag={reduceMotion ? false : 'x'}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.14}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected.id}
                    className={styles.previewInner}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scale: 0.97, transition: { duration: 0.2 } }
                    }
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {renderPreview()}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            <button
              type="button"
              className={`${styles.theaterNav} ${styles.theaterNavNext}`}
              onClick={goToNext}
              aria-label="Next project"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.article
                key={selected.id}
                className={styles.dock}
                variants={dockVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div className={styles.dockMain} variants={dockItemVariants}>
                  <h3 className={styles.projectTitle}>{selected.title}</h3>
                  <p className={styles.description}>{selected.description}</p>
                </motion.div>

                <motion.div className={styles.dockMeta} variants={dockItemVariants}>
                  <div className={styles.technologies}>
                    {selected.technologies.map((tech) => (
                      <span key={tech} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Link href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                      <motion.span
                        className={styles.liveButton}
                        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      >
                        <ExternalLink size={16} strokeWidth={2.5} />
                        Visit Project
                      </motion.span>
                    </Link>
                    <Link href={selected.codeUrl} target="_blank" rel="noopener noreferrer">
                      <motion.span
                        className={styles.codeButton}
                        whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
                        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                      >
                        <Github size={16} strokeWidth={2.5} />
                        View Code
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;
