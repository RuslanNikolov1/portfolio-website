import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const FeedbacksSkeleton = () => {
  return (
    <section className={styles.feedbacksSkeleton} aria-label="Loading feedbacks section">
      <div className={styles.feedbacksContainer}>
        <div className={styles.feedbacksHeader}>
          <Skeleton className={styles.feedbacksTitle} animation="shimmer" delay={0.2} />
        </div>

        <div className={styles.feedbacksStage}>
          <Skeleton className={styles.feedbackSpotlight} animation="pulse" delay={0.35} />
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSkeleton;
