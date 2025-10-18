import { motion } from 'framer-motion';
import styles from './LoadingSkeleton.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  animation?: 'pulse' | 'wave' | 'shimmer';
  delay?: number;
}

const Skeleton = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '',
  animation = 'pulse',
  delay = 0
}: SkeletonProps) => {
  return (
    <motion.div
      className={`${styles.skeleton} ${styles[animation]} ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
    />
  );
};

export default Skeleton;

