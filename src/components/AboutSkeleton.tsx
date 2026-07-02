import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const AboutSkeleton = () => {
  return (
    <section className={styles.aboutSkeleton} aria-label="Loading about section">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <Skeleton className={styles.aboutTitle} animation="shimmer" delay={0.2} />
        </div>

        <div className={styles.aboutProfileRow}>
          <Skeleton className={styles.profileImage} animation="pulse" delay={0.35} />
          <Skeleton className={styles.aboutLead} animation="wave" delay={0.4} />
        </div>

        <div className={styles.timelineListSkeleton}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className={styles.timelineCardSkeleton} animation="wave" delay={0.6 + index * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSkeleton;
