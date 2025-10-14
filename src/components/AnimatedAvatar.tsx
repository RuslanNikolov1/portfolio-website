'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from './AnimatedAvatar.module.scss';

interface AnimatedAvatarProps {
  size?: 'large' | 'medium' | 'small';
  className?: string;
  showGlow?: boolean;
}

const AnimatedAvatar = ({ 
  size = 'medium', 
  className = '', 
  showGlow = true 
}: AnimatedAvatarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const glowVariants = {
    initial: {
      scale: 1,
      opacity: 0.3
    },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      scale: [1, 1.2, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const avatarVariants = {
    initial: {
      scale: 1,
      rotate: 0
    },
    animate: {
      scale: [1, 1.05, 1],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const dragonVariants = {
    initial: {
      scale: 1,
      rotate: 0
    },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    },
    hover: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <div
      className={`${styles.avatarContainer} ${styles[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      {showGlow && (
        <motion.div
          className={styles.glowEffect}
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "animate"}
        />
      )}

      {/* Main Avatar Container */}
      <motion.div
        className={`${styles.avatar} ${styles[size]}`}
        variants={avatarVariants}
        initial="initial"
        animate={isHovered ? "hover" : "animate"}
      >
        {/* Inner Avatar */}
        <div className={styles.avatarInner}>
          {/* Shimmer Effect */}
          <motion.div
            className={styles.shimmer}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94] as const
            }}
          />

          {/* Avatar Image */}
          <Image
            src="/RuslanAvatar.png"
            alt="Ruslan Nikolov - Frontend Developer, UI Designer & Music Producer"
            fill
            className={styles.avatarImage}
            priority={size === 'large'}
            sizes={size === 'large' ? '320px' : size === 'medium' ? '192px' : '128px'}
          />

          {/* Floating Music Notes */}
          <motion.div
            className={`${styles.musicNote} ${styles.note1}`}
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94] as const
            }}
          >
            🎵
          </motion.div>

          <motion.div
            className={`${styles.musicNote} ${styles.note2}`}
            animate={{
              y: [10, -10, 10],
              rotate: [5, -5, 5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
              delay: 1
            }}
          >
            🎶
          </motion.div>

          <motion.div
            className={`${styles.musicNote} ${styles.note3}`}
            animate={{
              y: [-5, 15, -5],
              rotate: [-3, 3, -3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
              delay: 2
            }}
          >
            🎵
          </motion.div>

          {/* Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`${styles.sparkle} ${styles[`sparkle${i + 1}`]}`}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedAvatar;