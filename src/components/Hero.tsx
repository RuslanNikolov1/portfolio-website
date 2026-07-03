'use client';

import { useState, useEffect, useCallback, memo, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = memo(() => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
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

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            if (video.readyState < 2) video.load();
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [shouldLoadVideo]);

  const handleVideoError = useCallback(() => setVideoError(true), []);
  const handleVideoCanPlay = useCallback(() => {
    setVideoError(false);
    setVideoLoaded(true);
  }, []);
  const handleVideoLoad = useCallback(() => setVideoLoaded(true), []);

  return (
    <div className={styles.hero}>
      <div className={styles.background} role="img" aria-label="Animated background video">
        {!videoLoaded && !videoError && (
          <>
            <Image
              src="/Hero Initial Picture.webp"
              alt="Ruslan Nikolov - Frontend Developer"
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
              style={{ objectFit: 'cover', zIndex: 1 }}
            />
            <div className={styles.loaderWrap} aria-hidden="true">
              <div className={styles.loader} />
            </div>
          </>
        )}

        {shouldLoadVideo ? (
          !videoError ? (
            <video
              ref={videoRef}
              className={styles.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              poster="/Hero Initial Picture.webp"
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
        ) : null}
      </div>

      <div className={styles.container}>
        <div className={styles.heroLayout}>
          <div className={`${styles.content} ${styles.contentReveal}`}>
            <div className={styles.titleRow}>
              <div className={styles.titleContainer}>
                <h1 className={`${styles.title} ${styles.titleReveal}`}>
                  Ruslan Nikolov
                </h1>
              </div>

              <p className={`${styles.tagline} ${styles.descriptionReveal}`}>
                FULL STACK | JS | AI
              </p>
            </div>

            {/* <div className={`${styles.credentials} ${styles.credentialsReveal}`}>
              <div className={styles.credential}>
                <span className={styles.credentialNumber}>7+</span>
                <span className={styles.credentialLabel}>Years Of Experience</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialNumber}>22</span>
                <span className={styles.credentialLabel}>Projects Delivered</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
