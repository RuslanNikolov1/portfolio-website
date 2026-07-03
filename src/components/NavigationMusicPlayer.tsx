'use client';

import { motion } from 'framer-motion';
import { memo, useCallback, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';
import styles from './Navigation.module.scss';

const NavigationMusicPlayer = memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  const togglePlayPause = useCallback(() => {
    if (!audioRef) return;

    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  }, [audioRef, isPlaying]);

  return (
    <>
      <div
        className={styles.musicPlayer}
        role="region"
        aria-label="Music player"
      >
        <div className={styles.trackInfo}>
          <div className={styles.coverArt} aria-hidden="true">
            <Image
              src="/Hopeful emotions pic.webp"
              alt=""
              width={28}
              height={28}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className={styles.trackText}>
            <div className={styles.trackTitle}>My music</div>
          </div>
        </div>
        <div className={styles.controls}>
          <motion.button
            className={styles.playButton}
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            aria-pressed={isPlaying}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </motion.button>
        </div>
        <div className={styles.visualizer}>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.bar}
              animate={{
                height: isPlaying ? ['20%', '80%', '20%'] : '20%',
              }}
              transition={{
                duration: 0.5,
                repeat: isPlaying ? Infinity : 0,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <audio
        ref={setAudioRef}
        src="/Bar Elyzium.mp3"
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </>
  );
});

NavigationMusicPlayer.displayName = 'NavigationMusicPlayer';

export default NavigationMusicPlayer;
