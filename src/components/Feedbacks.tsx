'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import styles from './Feedbacks.module.scss';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

const Feedbacks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const feedbacks = [
    {
      name: 'Gergana Borisova',
      role: 'Colleague',
      quote: 'I had the pleasure of working with Ruslan in the past, and I can confidently say he is one of the most creative and innovative thinkers I\'ve collaborated with. His open-minded approach allows him to find smart, effective solutions to any challenge. Ruslan is also exceptionally friendly and easy to communicate with, which makes working with him both pleasant and effortless.'
    },
    {
      name: 'Dimitar Petrov',
      role: 'Project Manager',
      quote: 'Ruslan was reliable and straightforward to work with. He shipped responsive, accessible UI, kept communication clear, and handled details like translations, SEO, and theming without surprises. We always knew where things stood and what the next step was.'
    },
    {
      name: 'Elena Stoyanova',
      role: 'UI/UX Designer',
      quote: 'As a designer, I appreciated how accurately Ruslan implemented Figma designs and components. He kept spacing and responsiveness consistent, and the handoff stayed smooth from prototype to production. He also asked the right questions early, so we avoided rework later.'
    },
    {
      name: 'Nikolay Georgiev',
      role: 'Tech Lead',
      quote: 'Ruslan writes clean, maintainable React/TypeScript and thinks about edge cases. He delivered on time, kept quality high, and made sure performance and accessibility were not afterthoughts. Code reviews were quick because the implementation was consistent and easy to follow.'
    },
    {
      name: 'Maria Ivanova',
      role: 'Product Owner',
      quote: 'Ruslan took ownership from requirements to release. He delivered a polished UI, worked through feedback quickly, and helped us ship stable updates with good UX and performance. When priorities changed, he adapted fast while keeping quality intact.'
    },
    {
      name: 'Petar Dimitrov',
      role: 'Developer',
      quote: 'Working with Ruslan improved the codebase. He kept components organized, used sensible patterns, and integrated things like Supabase and deployments cleanly so the project stayed easy to maintain. It made day-to-day development faster and less error-prone.'
    }
  ];

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  }, [feedbacks.length]);

  const goToPreviousSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  }, [feedbacks.length]);

  return (
    <section id="feedbacks" className={styles.feedbacks}>
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
              <MessageCircle size={64} />
            </div>
            <h2 className={styles.title}>What People Say</h2>
          </div>
        </motion.div>

        <motion.div
          className={styles.carousel}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button
            type="button"
            className={styles.navButton}
            onClick={goToPreviousSlide}
            aria-label="Previous feedback"
          >
            <ChevronUp size={20} />
          </button>

          <div className={styles.viewport}>
            <div className={styles.cardSlot}>
              <AnimatePresence mode="sync" initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  className={styles.cardSlotItem}
                  variants={{
                    enter: (dir: 1 | -1) => ({
                      y: dir === 1 ? 140 : -140,
                    }),
                    center: {
                      y: 0,
                    },
                    exit: (dir: 1 | -1) => ({
                      y: dir === 1 ? -140 : 140,
                    }),
                  }}
                  custom={direction}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.65, ease: 'linear' }}
                >
                  <div className={styles.card}>
                    <div className={styles.content}>
                      <div style={{ marginBottom: 12 }}>
                        <h3 className={styles.projectTitle} style={{ margin: 0 }}>
                          {feedbacks[currentSlide].name}
                        </h3>
                        <p className={styles.description} style={{ margin: 0 }}>
                          <em>{feedbacks[currentSlide].role}</em>
                        </p>
                      </div>
                      <p className={styles.description}>{`"${feedbacks[currentSlide].quote}"`}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            className={styles.navButton}
            onClick={goToNextSlide}
            aria-label="Next feedback"
          >
            <ChevronDown size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Feedbacks;


