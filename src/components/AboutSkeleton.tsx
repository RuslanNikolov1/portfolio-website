import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const AboutSkeleton = () => {
  return (
    <section className={styles.aboutSkeleton} aria-label="Loading about section">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <Skeleton 
            className={styles.aboutTitle}
            animation="shimmer"
            delay={0.2}
          />
        </div>

        <div className={styles.aboutLayout}>
          <div className={styles.profileSkeleton}>
            <Skeleton 
              className={styles.profileImage}
              animation="pulse"
              delay={0.4}
            />
          </div>

          <div className={styles.timelineSkeleton}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.timelineItem}>
                <Skeleton 
                  className={styles.timelineMarker}
                  animation="pulse"
                  delay={0.6 + index * 0.1}
                />
                <div className={styles.timelineContent}>
                  <Skeleton 
                    className={styles.timelineYear}
                    animation="wave"
                    delay={0.6 + index * 0.1}
                  />
                  <Skeleton 
                    className={styles.timelineTitle}
                    animation="wave"
                    delay={0.7 + index * 0.1}
                  />
                  <Skeleton 
                    className={styles.timelineText}
                    animation="wave"
                    delay={0.8 + index * 0.1}
                  />
                  <Skeleton 
                    className={styles.timelineText}
                    animation="wave"
                    delay={0.9 + index * 0.1}
                  />
                  <Skeleton 
                    className={styles.timelineText}
                    animation="wave"
                    delay={1.0 + index * 0.1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;

