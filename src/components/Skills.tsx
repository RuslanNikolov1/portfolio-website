'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Code, Palette, Music,
  Atom,
  FileCode,
  Globe,
  FileText,
  Layers,
  Palette as PaletteIcon,
  Zap,
  Users,
  Target,
  Lightbulb,
  Headphones,
  Volume2,
  Music2,
  Mic,
  Sparkles,
  GitBranch,
  Settings,
  Package,
  Cpu,
  Crown,
  MessageCircle,
  ClipboardList,
  Clock,
  Search,
  Heart,
  Handshake,
  GraduationCap,
  Shield,
  Network,
  Database,
  Terminal,
  Workflow,
  Wrench,
  Bot
} from 'lucide-react';
import { skills } from '@/data';
import styles from './Skills.module.scss';

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const skillCategories = {
    frontend: { icon: Code, title: 'Technical Skills', color: '#10B981' },
    design: { icon: Palette, title: 'Soft Skills', color: '#2563EB' }
  };

  const skillIcons = {
    // Frontend Skills
    'React': Atom,
    'TypeScript': FileCode,
    'Next.js': Globe,
    'JavaScript': FileText,
    'HTML/CSS': Layers,
    'SASS/SCSS': PaletteIcon,
    'Tailwind CSS': Zap,
    'Framer Motion': Sparkles,
    'Redux': Code,
    'Material UI': PaletteIcon,
    'Mapbox': Globe,
    'Web Audio API': Volume2,
    'Three.js': Cpu,

    // Backend & API Skills
    'REST API': Network,
    'GraphQL': Database,

    // Development Tools
    'Git': GitBranch,
    'CI/CD': Workflow,
    'Webpack': Package,
    'Vite': Zap,
    'Cursor': Bot,
    'React Query': Code,
    'React Table': ClipboardList,
    'Axios': Globe,
    'Recharts': Target,
    'React Router': Globe,
    'Zod': Shield,
    'React Hook Form': FileText,

    // Soft Skills
    'Client-focused problem solving': Target,
    'Leadership and mentoring': Crown,
    'Effective communication': MessageCircle,
    'Strategic project planning': ClipboardList,
    'Problem-Solving & Critical Thinking': Lightbulb,
    'Adaptability & Continuous Learning': Target,
    'Time Management & Prioritization': Clock,
    'Attention to Detail': Search,
    'Empathy & User-Centric Mindset': Heart,
    'Collaboration in Agile Teams': Handshake,
    'Mentorship & Knowledge Sharing': GraduationCap,

    // Music Skills
    'Ableton Live': Headphones,
    'Electronic Music': Music2,
    'Sound Design': Volume2,
    'Music Composition': Music,
    'Audio Mixing': Mic,
    'Creative Process': Sparkles
  };

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.emojiTitle}>
            <div className={styles.emoji}>
              <Zap size={64} />
            </div>
            <h2 className={styles.title}>Skills & Expertise</h2>
          </div>
        </motion.div>

        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Frontend Skills */}
          <motion.div
            className={`${styles.techSkillsContainer} ${styles.categoryLight}`}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryIcon}
                style={{ backgroundColor: skillCategories.frontend.color }}
              >
                {React.createElement(skillCategories.frontend.icon, { size: 24 })}
              </div>
              <h3
                className={styles.categoryTitle}
                style={{ color: skillCategories.frontend.color }}
              >
                {skillCategories.frontend.title}
              </h3>
            </div>

            <div className={styles.skillsGrid}>
              {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.skillHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {skillIcons[skill.name as keyof typeof skillIcons] && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          color: skillCategories.frontend.color
                        }}>
                          {React.createElement(skillIcons[skill.name as keyof typeof skillIcons], { size: 16 })}
                        </div>
                      )}
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillYears}>{skill.years} years</span>
                  </div>
                  {skill.notes && (
                    <div className={styles.skillNotes}>
                      {skill.notes}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Middle Column - Backend & APIs, Avatars, Development Tools */}
          <div className={styles.middleColumn}>
            {/* Backend & APIs Container */}
            <motion.div
              className={`${styles.backendSkillsContainer} ${styles.categoryLight}`}
              variants={itemVariants}
            >
              <div className={styles.categoryHeader}>
                <div
                  className={styles.categoryIcon}
                  style={{ backgroundColor: '#8B5CF6' }}
                >
                  ⚙️
                </div>
                <h3
                  className={styles.categoryTitle}
                  style={{ color: '#8B5CF6' }}
                >
                  Backend & APIs
                </h3>
              </div>

              <div className={styles.skillsGrid}>
                {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.skillHeader}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {skillIcons[skill.name as keyof typeof skillIcons] && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20px',
                            height: '20px',
                            color: '#8B5CF6'
                          }}>
                            {React.createElement(skillIcons[skill.name as keyof typeof skillIcons], { size: 16 })}
                          </div>
                        )}
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillYears}>{skill.years} years</span>
                    </div>
                    {skill.notes && (
                      <div className={styles.skillNotes}>
                        {skill.notes}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Avatar Container */}
            <div className={styles.dividerAvatarContainer}>
              <div className={styles.dividerAvatar}>
              </div>
              <div className={styles.dividerAvatarFirst}>
                <Image
                  src="/FB_Avatar 1.png"
                  alt="Avatar 1"
                  width={450}
                  height={450}
                  quality={95}
                  priority={false}
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.dividerAvatar2}>
                <Image
                  src="/FB_Avatar 2.png"
                  alt="Avatar 2"
                  width={400}
                  height={400}
                  quality={95}
                  priority={false}
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.dividerAvatar3}>
                <Image
                  src="/FB_Avatar 3.png"
                  alt="Avatar 3"
                  width={380}
                  height={380}
                  quality={95}
                  priority={false}
                  className={styles.avatarImage}
                />
              </div>
              <div className={styles.dividerAvatar4}>
                <Image
                  src="/FB_Avatar 4.png"
                  alt="Avatar 4"
                  width={320}
                  height={320}
                  quality={95}
                  priority={false}
                  className={styles.avatarImage}
                />
              </div>
            </div>

            {/* Development Tools Container */}
            <motion.div
              className={`${styles.toolsSkillsContainer} ${styles.categoryLight}`}
              variants={itemVariants}
            >
              <div className={styles.categoryHeader}>
                <div
                  className={styles.categoryIcon}
                  style={{ backgroundColor: '#FACC15' }}
                >
                  🛠️
                </div>
                <h3
                  className={styles.categoryTitle}
                  style={{ color: '#FACC15' }}
                >
                  Development Tools
                </h3>
              </div>

              <div className={styles.skillsGrid}>
                {skills.filter(skill => skill.category === 'tools').map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.skillHeader}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {skillIcons[skill.name as keyof typeof skillIcons] && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '20px',
                            height: '20px',
                            color: '#FACC15'
                          }}>
                            {React.createElement(skillIcons[skill.name as keyof typeof skillIcons], { size: 16 })}
                          </div>
                        )}
                        <span className={styles.skillName}>{skill.name}</span>
                      </div>
                      <span className={styles.skillYears}>{skill.years} years</span>
                    </div>
                    {skill.notes && (
                      <div className={styles.skillNotes}>
                        {skill.notes}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Soft Skills */}
          <motion.div
            className={`${styles.softSkillsContainer} ${styles.categoryLight}`}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryIcon}
                style={{ backgroundColor: skillCategories.design.color }}
              >
                {React.createElement(skillCategories.design.icon, { size: 24 })}
              </div>
              <h3
                className={styles.categoryTitle}
                style={{ color: skillCategories.design.color }}
              >
                {skillCategories.design.title}
              </h3>
            </div>

            <div className={styles.skillsGrid}>
              {skills.filter(skill => skill.category === 'design').map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.skillHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {skillIcons[skill.name as keyof typeof skillIcons] && (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          color: skillCategories.design.color
                        }}>
                          {React.createElement(skillIcons[skill.name as keyof typeof skillIcons], { size: 16 })}
                        </div>
                      )}
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillYears}>{skill.years} years</span>
                  </div>
                  {skill.notes && (
                    <div className={styles.skillNotes}>
                      {skill.notes}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>



        {/* summary removed as requested */}
      </div>
    </section>
  );
};

export default Skills;
