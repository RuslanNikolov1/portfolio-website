'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingCTA = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isAtBottom) return null;

  return (
    <motion.button
      onClick={scrollToContact}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Work with me"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 3000,
        padding: '1rem 2rem',
        background: '#8B5CF6',
        color: '#ffffff',
        border: '2px solid #ffffff',
        borderRadius: '50px',
        fontSize: '1rem',
        fontWeight: 700,
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.35)',
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)' }}
      whileTap={{ scale: 0.95 }}
    >
      Work with me
    </motion.button>
  );
};

export default FloatingCTA;


