import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const FeedbacksSkeleton = () => {
  return (
    <section className={styles.feedbacksSkeleton} aria-label="Loading feedbacks section">
      <div className={styles.feedbacksContainer}>
        <div className={styles.feedbacksHeader}>
          <Skeleton 
            className={styles.feedbacksTitle}
            animation="shimmer"
            delay={0.2}
          />
          <Skeleton 
            className={styles.feedbacksSubtitle}
            animation="shimmer"
            delay={0.4}
          />
        </div>

        <div className={styles.feedbacksGrid}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className={styles.feedbackCard}>
              <div className={styles.feedbackHeader}>
                <Skeleton 
                  className={styles.avatar}
                  animation="pulse"
                  delay={0.6 + index * 0.2}
                />
                <div className={styles.feedbackInfo}>
                  <Skeleton 
                    className={styles.feedbackName}
                    animation="wave"
                    delay={0.7 + index * 0.2}
                  />
                  <Skeleton 
                    className={styles.feedbackRole}
                    animation="wave"
                    delay={0.8 + index * 0.2}
                  />
                </div>
              </div>
              
              <Skeleton 
                className={styles.feedbackText}
                animation="wave"
                delay={0.9 + index * 0.2}
              />
              <Skeleton 
                className={styles.feedbackText}
                animation="wave"
                delay={1.0 + index * 0.2}
              />
              <Skeleton 
                className={styles.feedbackText}
                animation="wave"
                delay={1.1 + index * 0.2}
              />
              <Skeleton 
                className={styles.feedbackText}
                animation="wave"
                delay={1.2 + index * 0.2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSkeleton;

