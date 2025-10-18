'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Music } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { socialLinks } from '@/data';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'music':
        return <Music size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Image
                src="/Ruslan Looking Avatar.jpg"
                alt="Ruslan Nikolov"
                width={60}
                height={60}
                className={styles.profileAvatar}
              />
            </div>
            <h3 className={styles.brandName}>Ruslan Nikolov</h3>
            <p className={styles.brandDescription}>
              Senior Frontend Developer • Freelancer • Electronic Music Producer
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <div className={styles.linkList}>
                <Link href="#projects" className={styles.link}>Projects</Link>
                <Link href="#skills" className={styles.link}>Skills</Link>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#contact" className={styles.link}>Contact</Link>
              </div>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {getIcon(link.icon)}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.copyright}>
            <p>
              © {currentYear} Ruslan Nikolov
            </p>
          </div>
          
          <div className={styles.tech}>
            <p>Built with Next.js, TypeScript, and Framer Motion</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
