'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = memo(() => {
  const [isClient, setIsClient] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setIsClient(true);

    const loadVideoAfterPaint = () => {
      requestAnimationFrame(() => {
        setTimeout(() => setShouldLoadVideo(true), 100);
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadVideoAfterPaint);
    } else {
      setTimeout(loadVideoAfterPaint, 0);
    }
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video && video.readyState < 2) video.load();
          }
        });
      },
      { threshold: 0.1 },
    );

    const videoElement = document.querySelector('video');
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [shouldLoadVideo]);

  const handleVideoError = useCallback(() => setVideoError(true), []);
  const handleVideoCanPlay = useCallback(() => {
    setVideoError(false);
    setVideoLoaded(true);
  }, []);
  const handleVideoLoad = useCallback(() => setVideoLoaded(true), []);

  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.background} role="img" aria-label="Animated background video">
        {!videoLoaded && !videoError && (
          <Image
            src="/Hero Initial Picture.webp"
            alt="Ruslan Nikolov - Frontend Developer"
            fill
            priority
            className={styles.heroImage}
            style={{ objectFit: 'cover', zIndex: 1 }}
          />
        )}

        {!videoLoaded && !videoError && (
          <div className={styles.loaderWrap} aria-hidden="true">
            <div className={styles.loader} />
          </div>
        )}

        {isClient && shouldLoadVideo ? (
          !videoError ? (
            <video
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              onError={handleVideoError}
              onCanPlay={handleVideoCanPlay}
              onLoadedData={handleVideoLoad}
              style={{
                opacity: videoLoaded ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
              aria-label="Background animation video"
            >
              <source src="/TensorPix - Hero Animated.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className={styles.videoFallback}>Video unavailable</div>
          )
        ) : (
          !shouldLoadVideo && (
            <div
              className={styles.heroVideo}
              style={{
                backgroundImage: 'url("/Hero Initial Picture.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )
        )}
      </div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <motion.div
            className={styles.content}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.titleRow}>
              <div className={styles.titleContainer}>
                <motion.h1
                  className={styles.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  ruslan nikolov
                </motion.h1>
              </div>

              <motion.div
                className={`${styles.highlightedContainer} ${styles.descriptionContainer}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
              >
                <p className={styles.description}>
                  Web developer, seeking to expand opportunities and contribute to diverse
                  projects.
                </p>
              </motion.div>
            </div>

            <motion.div
              className={styles.credentials}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={styles.credential}>
                <span className={styles.credentialNumber}>7+</span>
                <span className={styles.credentialLabel}>Years Of Experience</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialNumber}>22</span>
                <span className={styles.credentialLabel}>Projects Delivered</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
