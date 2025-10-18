import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const HeroSkeleton = () => {
  return (
    <section className={styles.heroSkeleton} aria-label="Loading hero section">
      <div className={styles.heroContent}>
        <Skeleton 
          className={styles.heroTitle}
          animation="shimmer"
          delay={0.2}
        />
        
        <Skeleton 
          className={styles.heroSubtitle}
          animation="shimmer"
          delay={0.4}
        />
        
        <Skeleton 
          className={styles.heroDescription}
          animation="shimmer"
          delay={0.6}
        />
        
        <div className={styles.heroCredentials}>
          <div className={styles.credentialSkeleton}>
            <Skeleton 
              className={styles.credentialNumber}
              animation="pulse"
              delay={0.8}
            />
            <Skeleton 
              className={styles.credentialLabel}
              animation="pulse"
              delay={1.0}
            />
          </div>
          
          <div className={styles.credentialSkeleton}>
            <Skeleton 
              className={styles.credentialNumber}
              animation="pulse"
              delay={1.2}
            />
            <Skeleton 
              className={styles.credentialLabel}
              animation="pulse"
              delay={1.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkeleton;

