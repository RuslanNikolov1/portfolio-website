'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, memo } from 'react';
import { Mail, Github, Linkedin, Music, MessageCircle, ArrowUp, Phone } from 'lucide-react';
import Link from 'next/link';
import { socialLinks } from '@/data';
import styles from './Contact.module.scss';

const Contact = memo(() => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const contactTop = document.getElementById('contact')?.offsetTop ?? 0;

      // Show arrow once at contact section or further down
      setShowUpArrow(scrollTop + 50 >= contactTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'phone':
        return <Phone size={28} />;
      case 'mail':
        return <Mail size={28} />;
      case 'github':
        return <Github size={28} />;
      case 'linkedin':
        return <Linkedin size={28} />;
      case 'music':
        return <Music size={28} />;
      case 'viber':
        return <MessageCircle size={28} />;
      default:
        return <MessageCircle size={28} />;
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.emojiTitle}>
            <div className={styles.emoji}>
              <Mail size={64} />
            </div>
            <h2 className={styles.title}>Ready to Start Your Project?</h2>
          </div>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className={styles.subtitle}>
              Based in Burgas, Bulgaria • Available for remote work worldwide • 8+ years of experience<br/>
              Whether you&apos;re a startup founder, hiring manager seeking a skilled frontend developer, or an established business owner needing a custom digital solution, 
              I&apos;m here to help transform your ideas into reality with cutting-edge technologies, professional expertise, and creative innovation. 
              Specializing in React, Next.js, TypeScript, SASS, Framer Motion, and modern web development practices to deliver exceptional, responsive user experiences.
              From concept to deployment, I focus on creating scalable, performant applications that drive real business results and user engagement.
            </p>
          </motion.div>

          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCard}>
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <motion.div
                      className={styles.socialIcon}
                      whileHover={{ 
                        scale: 1.1,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {getIcon(link.icon)}
                    </motion.div>
                  </Link>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.floatingCta}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {showUpArrow && (
            <motion.button
              type="button"
              aria-label="Scroll to top"
              className={styles.scrollArrow}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </motion.div>
      </div>
      
      {/* White divider after contact form */}
      <div className={styles.bottomDivider}></div>
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;
