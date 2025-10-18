'use client';

import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const ContactSkeleton = () => {
  return (
    <section className={styles.contactSkeleton} aria-label="Loading contact section">
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <Skeleton 
            className={styles.contactTitle}
            animation="shimmer"
            delay={0.2}
          />
          <Skeleton 
            className={styles.contactSubtitle}
            animation="shimmer"
            delay={0.4}
          />
        </div>

        <div className={styles.contactForm}>
          <div className={styles.formGroup}>
            <Skeleton 
              className={styles.formLabel}
              animation="pulse"
              delay={0.6}
            />
            <Skeleton 
              className={styles.formInput}
              animation="wave"
              delay={0.7}
            />
          </div>

          <div className={styles.formGroup}>
            <Skeleton 
              className={styles.formLabel}
              animation="pulse"
              delay={0.8}
            />
            <Skeleton 
              className={styles.formInput}
              animation="wave"
              delay={0.9}
            />
          </div>

          <div className={styles.formGroup}>
            <Skeleton 
              className={styles.formLabel}
              animation="pulse"
              delay={1.0}
            />
            <Skeleton 
              className={styles.formTextarea}
              animation="wave"
              delay={1.1}
            />
          </div>

          <Skeleton 
            className={styles.submitButton}
            animation="pulse"
            delay={1.2}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSkeleton;

