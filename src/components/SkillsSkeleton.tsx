'use client';

import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const SkillsSkeleton = () => {
  return (
    <section className={styles.skillsSkeleton} aria-label="Loading skills section">
      <div className={styles.skillsContainer}>
        <div className={styles.skillsHeader}>
          <Skeleton 
            className={styles.skillsTitle}
            animation="shimmer"
            delay={0.2}
          />
          <Skeleton 
            className={styles.skillsSubtitle}
            animation="shimmer"
            delay={0.4}
          />
        </div>

        <div className={styles.skillsGrid}>
          {/* Tech Skills */}
          <div className={styles.skillCategory}>
            <Skeleton 
              className={styles.categoryTitle}
              animation="pulse"
              delay={0.6}
            />
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={`tech-${index}`} className={styles.skillItem}>
                <Skeleton 
                  className={styles.skillName}
                  animation="wave"
                  delay={0.8 + index * 0.1}
                />
                <Skeleton 
                  className={styles.skillYears}
                  animation="wave"
                  delay={0.9 + index * 0.1}
                />
                <Skeleton 
                  className={styles.skillNotes}
                  animation="wave"
                  delay={1.0 + index * 0.1}
                />
                <Skeleton 
                  className={styles.skillNotes}
                  animation="wave"
                  delay={1.1 + index * 0.1}
                />
              </div>
            ))}
          </div>

          {/* Avatar Divider */}
          <div className={styles.skillCategory}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton 
                key={`avatar-${index}`}
                width="200px"
                height="200px"
                borderRadius="50%"
                animation="pulse"
                delay={1.2 + index * 0.2}
              />
            ))}
          </div>

          {/* Soft Skills */}
          <div className={styles.skillCategory}>
            <Skeleton 
              className={styles.categoryTitle}
              animation="pulse"
              delay={0.6}
            />
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={`soft-${index}`} className={styles.skillItem}>
                <Skeleton 
                  className={styles.skillName}
                  animation="wave"
                  delay={0.8 + index * 0.1}
                />
                <Skeleton 
                  className={styles.skillYears}
                  animation="wave"
                  delay={0.9 + index * 0.1}
                />
                <Skeleton 
                  className={styles.skillNotes}
                  animation="wave"
                  delay={1.0 + index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSkeleton;

