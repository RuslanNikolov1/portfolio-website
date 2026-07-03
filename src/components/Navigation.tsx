'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { Menu, X, Home, Briefcase, Zap, User, Mail } from 'lucide-react';
import Image from 'next/image';
import styles from './Navigation.module.scss';

const NavigationMusicPlayer = dynamic(() => import('./NavigationMusicPlayer'), {
  ssr: false,
});

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        if (sectionId) {
          setActiveSection(sectionId);
        }
      }
    });
  }, []);

  const observerOptions = useMemo(
    () => ({
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeSections = () => {
      const sections = ['hero', 'projects', 'skills', 'about', 'contact'];
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.observe(section);
        }
      });
    };

    const timeoutId = setTimeout(observeSections, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [handleScroll, observerCallback, observerOptions]);

  const navItems = useMemo(
    () => [
      { name: 'Home', href: '#hero', icon: Home },
      { name: 'Projects', href: '#projects', icon: Briefcase },
      { name: 'Skills', href: '#skills', icon: Zap },
      { name: 'About', href: '#about', icon: User },
      { name: 'Contact', href: '#contact', icon: Mail },
    ],
    [],
  );

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, []);

  return (
    <nav
      id="navigation"
      className={`${styles.nav} ${styles.navEnter} ${scrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <button
          className={`${styles.logo} ${styles.interactiveButton}`}
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
            src="/Ruslan Looking Avatar.webp"
            alt="Ruslan Nikolov profile picture"
            width={60}
            height={60}
            sizes="60px"
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </button>

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
              <button
                key={item.name}
                className={`${styles.navItem} ${styles.navItemEnter} ${isActive ? styles.navItemActive : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => scrollToSection(item.href)}
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
              </button>
            );
          })}
        </div>

        <NavigationMusicPlayer />

        <div className={styles.rightSection}>
          <button
            className={`${styles.mobileToggle} ${styles.interactiveButton}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
