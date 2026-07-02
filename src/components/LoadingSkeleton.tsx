import styles from './LoadingSkeleton.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  animation?: 'pulse' | 'wave' | 'shimmer';
  delay?: number;
}

function Skeleton({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
  animation = 'pulse',
  delay = 0,
}: SkeletonProps) {
  return (
    <div
      className={`${styles.skeleton} ${styles[animation]} ${className}`}
      style={{
        width,
        height,
        borderRadius,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export default Skeleton;
