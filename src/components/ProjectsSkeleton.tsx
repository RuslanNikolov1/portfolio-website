import Skeleton from './LoadingSkeleton';
import styles from './LoadingSkeleton.module.scss';

const ProjectsSkeleton = () => {
  return (
    <section className={styles.projectsSkeleton} aria-label="Loading projects section">
      <div className={styles.projectsContainer}>
        <div className={styles.projectsHeader}>
          <Skeleton 
            className={styles.projectsTitle}
            animation="shimmer"
            delay={0.2}
          />
          <Skeleton 
            className={styles.projectsSubtitle}
            animation="shimmer"
            delay={0.4}
          />
        </div>

        <div className={styles.thumbnailsGrid}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Skeleton 
              key={index}
              className={styles.thumbnailSkeleton}
              animation="pulse"
              delay={0.6 + index * 0.1}
            />
          ))}
        </div>

        <div className={styles.showcaseSkeleton}>
          <div className={styles.leftPanel}>
            <Skeleton 
              className={styles.projectTitle}
              animation="shimmer"
              delay={1.0}
            />
            <Skeleton 
              className={styles.projectDescription}
              animation="wave"
              delay={1.2}
            />
            <Skeleton 
              className={styles.projectDescription}
              animation="wave"
              delay={1.3}
            />
            
            <div className={styles.technologies}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton 
                  key={index}
                  className={styles.techBadge}
                  animation="pulse"
                  delay={1.4 + index * 0.1}
                />
              ))}
            </div>
            
            <div className={styles.buttons}>
              <Skeleton 
                className={styles.button}
                animation="pulse"
                delay={1.8}
              />
              <Skeleton 
                className={styles.button}
                animation="pulse"
                delay={2.0}
              />
            </div>
          </div>

          <div className={styles.rightPanel}>
            <Skeleton 
              className={styles.previewSkeleton}
              animation="shimmer"
              delay={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSkeleton;

