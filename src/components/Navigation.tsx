'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Play, Pause, Volume2, Home, Briefcase, Zap, User, Mail } from 'lucide-react';
import Image from 'next/image';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Use Intersection Observer for more accurate section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections with a small delay to ensure DOM is ready
    const observeSections = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      });
    };

    // Use setTimeout to ensure sections are rendered
    const timeoutId = setTimeout(observeSections, 100);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Initialize audio and set starting time to 1:50 (110 seconds)
    if (audioRef) {
      audioRef.currentTime = 110; // 1:50 = 110 seconds
      audioRef.volume = volume;
    }
  }, [audioRef, volume]);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const togglePlayPause = () => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.pause();
      } else {
        audioRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef) {
      audioRef.volume = newVolume;
    }
  };

  return (
    <motion.nav
      id="navigation"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <motion.button
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('#hero')}
          aria-label="Go to home section"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('#hero');
            }
          }}
        >
          <Image 
            src="/Ruslan Looking Avatar.jpg" 
            alt="Ruslan Nikolov profile picture" 
            width={60} 
            height={60}
            priority={true}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </motion.button>

        <div 
          className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
          role="menubar"
          aria-label="Main menu"
        >
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const IconComponent = item.icon;
            
            return (
              <motion.button
                key={item.name}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Navigate to ${item.name} section`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }
                }}
              >
                <IconComponent size={16} />
                <span>{item.name}</span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className={styles.musicPlayer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          role="region"
          aria-label="Music player"
        >
          <div className={styles.trackInfo}>
            {true && (
              <div className={styles.coverArt} aria-hidden="true">
                <Image src="/Hopeful emotions pic.png" alt="" width={28} height={28} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <div className={styles.trackText}>
              <div className={styles.trackTitle}>Hopeful Emotions</div>
              <div className={styles.trackArtist}>Ruslan Nikolov</div>
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
            <div className={styles.volumeControl}>
              <Volume2 size={14} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className={styles.volumeSlider}
                aria-label="Volume control"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(volume * 100)}
              />
            </div>
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
        </motion.div>

        <div className={styles.rightSection}>
          <motion.button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Hidden audio element */}
      <audio
        ref={setAudioRef}
        src="/Hopeful emotions.mp4"
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error('Audio error:', e)}
      />
    </motion.nav>
  );
};

export default Navigation;