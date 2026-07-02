'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { memo, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Feedbacks.module.scss';

interface FeedbackEntry {
  name: string;
  role: string;
  quote: string;
  accent: 'sky' | 'navy' | 'yellow' | 'orange' | 'deep' | 'warm';
}

const FEEDBACKS: FeedbackEntry[] = [
  {
    name: 'Gergana Borisova',
    role: 'Colleague',
    accent: 'sky',
    quote:
      "I had the pleasure of working with Ruslan in the past, and I can confidently say he is one of the most creative and innovative thinkers I've collaborated with. His open-minded approach allows him to find smart, effective solutions to any challenge. Ruslan is also exceptionally friendly and easy to communicate with, which makes working with him both pleasant and effortless.",
  },
  {
    name: 'Dimitar Petrov',
    role: 'Project Manager',
    accent: 'navy',
    quote:
      'Ruslan was reliable and straightforward to work with. He shipped responsive, accessible UI, kept communication clear, and handled details like translations, SEO, and theming without surprises. We always knew where things stood and what the next step was.',
  },
  {
    name: 'Elena Stoyanova',
    role: 'UI/UX Designer',
    accent: 'yellow',
    quote:
      'As a designer, I appreciated how accurately Ruslan implemented Figma designs and components. He kept spacing and responsiveness consistent, and the handoff stayed smooth from prototype to production. He also asked the right questions early, so we avoided rework later.',
  },
  {
    name: 'Nikolay Georgiev',
    role: 'Tech Lead',
    accent: 'deep',
    quote:
      'Ruslan writes clean, maintainable React/TypeScript and thinks about edge cases. He delivered on time, kept quality high, and made sure performance and accessibility were not afterthoughts. Code reviews were quick because the implementation was consistent and easy to follow.',
  },
  {
    name: 'Maria Ivanova',
    role: 'Product Owner',
    accent: 'orange',
    quote:
      'Ruslan took ownership from requirements to release. He delivered a polished UI, worked through feedback quickly, and helped us ship stable updates with good UX and performance. When priorities changed, he adapted fast while keeping quality intact.',
  },
  {
    name: 'Petar Dimitrov',
    role: 'Developer',
    accent: 'warm',
    quote:
      'Working with Ruslan improved the codebase. He kept components organized, used sensible patterns, and integrated things like Supabase and deployments cleanly so the project stayed easy to maintain. It made day-to-day development faster and less error-prone.',
  },
];

const Feedbacks = memo(() => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const activeFeedback = FEEDBACKS[activeIndex];

  const goToSlide = useCallback((index: number, nextDirection: 1 | -1) => {
    setDirection(nextDirection);
    setActiveIndex((index + FEEDBACKS.length) % FEEDBACKS.length);
  }, []);

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1, 1);
  }, [activeIndex, goToSlide]);

  const goToPrevious = useCallback(() => {
    goToSlide(activeIndex - 1, -1);
  }, [activeIndex, goToSlide]);

  const selectFeedback = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      goToSlide(index, index > activeIndex ? 1 : -1);
    },
    [activeIndex, goToSlide],
  );

  return (
    <section id="feedbacks" className={styles.feedbacks} aria-labelledby="feedbacks-heading">
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={reduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 id="feedbacks-heading" className={styles.title}>
            What People <span className={styles.titleAccent}>Say</span>
          </h2>
        </motion.header>

        <div className={styles.stage}>
          <div className={styles.quoteShell}>
            <div className={styles.counter} role="group" aria-label="Testimonial counter">
              {FEEDBACKS.map((feedback, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={feedback.name}
                    type="button"
                    className={`${styles.counterItem} ${isActive ? styles.counterItemActive : ''}`}
                    onClick={() => selectFeedback(index)}
                    aria-label={`Testimonial ${index + 1} of ${FEEDBACKS.length}`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className={styles.carousel}>
              <button
                type="button"
                className={styles.navButton}
                onClick={goToPrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              <div className={styles.quoteViewport}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                  <motion.article
                    key={activeFeedback.name}
                    aria-label={`Testimonial from ${activeFeedback.name}`}
                    className={`${styles.quoteCard} ${styles[`quoteCard_${activeFeedback.accent}`]}`}
                    custom={direction}
                    variants={{
                      enter: (dir: 1 | -1) => ({
                        opacity: 0,
                        x: dir === 1 ? 48 : -48,
                      }),
                      center: {
                        opacity: 1,
                        x: 0,
                      },
                      exit: (dir: 1 | -1) => ({
                        opacity: 0,
                        x: dir === 1 ? -48 : 48,
                      }),
                    }}
                    initial={reduceMotion ? 'center' : 'enter'}
                    animate="center"
                    exit={reduceMotion ? 'center' : 'exit'}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <blockquote className={styles.quoteBlock}>
                      <p className={styles.quoteText}>{activeFeedback.quote}</p>
                      <footer className={styles.quoteFooter}>
                        <cite className={styles.quoteCite}>{activeFeedback.name}</cite>
                        <span className={styles.quoteRole}>{activeFeedback.role}</span>
                      </footer>
                    </blockquote>
                  </motion.article>
                </AnimatePresence>
              </div>

              <button
                type="button"
                className={styles.navButton}
                onClick={goToNext}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Feedbacks.displayName = 'Feedbacks';

export default Feedbacks;
