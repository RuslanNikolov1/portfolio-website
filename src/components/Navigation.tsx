'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, useMemo, useRef, memo } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { MQ_BELOW_MD } from '@/styles/breakpoints';
import styles from './Navigation.module.scss';

const NavigationMusicPlayer = dynamic(() => import('./NavigationMusicPlayer'), {
  ssr: false,
});

const NAV_SCROLL_OFFSET = 80;

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.isContentEditable ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.tagName === 'SELECT'
  );
}

const Navigation = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

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
    const mediaQuery = window.matchMedia(MQ_BELOW_MD);
    const updateMenuMode = () => setIsMobileMenu(mediaQuery.matches);

    updateMenuMode();
    mediaQuery.addEventListener('change', updateMenuMode);

    return () => mediaQuery.removeEventListener('change', updateMenuMode);
  }, []);

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

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        mobileToggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isMobileMenu) return;

    const firstLink = menuRef.current?.querySelector('a');
    firstLink?.focus();
  }, [isOpen, isMobileMenu]);

  const navItems = useMemo(
    () => [
      { name: 'Home', href: '#hero' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    [],
  );

  const scrollToSection = useCallback((href: string) => {
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);

    const scroll = (attempt = 0) => {
      const element = document.querySelector(href);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        return;
      }

      if (attempt < 15) {
        window.setTimeout(() => scroll(attempt + 1), 100);
      }
    };

    scroll();
    setIsOpen(false);
  }, []);

  useEffect(() => {
    function handleNavShortcut(event: KeyboardEvent) {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;

      const href = navItems.find(
        (item) => item.name.charAt(0).toLowerCase() === event.key.toLowerCase(),
      )?.href;

      if (!href) return;

      event.preventDefault();
      scrollToSection(href);
    }

    document.addEventListener('keydown', handleNavShortcut);

    return () => document.removeEventListener('keydown', handleNavShortcut);
  }, [navItems, scrollToSection]);

  const handleNavClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      event.preventDefault();
      scrollToSection(href);
    },
    [scrollToSection],
  );

  return (
    <nav
      id="navigation"
      className={`${styles.nav} ${styles.navEnter} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      <div className={styles.container}>
        <a
          href="#hero"
          className={`${styles.logo} ${styles.interactiveButton}`}
          aria-label="Go to home section"
          onClick={(event) => handleNavClick(event, '#hero')}
        >
          <Image
            src="/Ruslan Looking Avatar.webp"
            alt="Ruslan Nikolov profile picture"
            width={60}
            height={60}
            sizes="60px"
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </a>

        <ul
          ref={menuRef}
          id="main-menu"
          className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
          aria-hidden={isMobileMenu && !isOpen ? true : undefined}
        >
          {navItems.map((item, index) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const letter = item.name.charAt(0).toLowerCase();

            return (
              <li key={item.name} className={styles.menuItem}>
                <a
                  href={item.href}
                  className={`${styles.navItem} ${styles.navItemEnter} ${isActive ? styles.navItemActive : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(event) => handleNavClick(event, item.href)}
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span className={styles.navLetter} aria-hidden="true">
                    [{letter}]
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <NavigationMusicPlayer />

        <div className={styles.rightSection}>
          <button
            ref={mobileToggleRef}
            type="button"
            className={`${styles.mobileToggle} ${styles.interactiveButton}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="main-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
