'use client';

import React, { useRef, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import * as Collapsible from '@radix-ui/react-collapsible';
import {
  Zap as ReactIcon,
  Type as TypeScript,
  Code as JavaScript,
  Globe as Html5,
  Paintbrush as Css3,
  Code as Sass,
  GitBranch as Git,
  Github,
  Gitlab,
  Package as Npm,
  Package as Yarn,
  Settings as Webpack,
  Wrench,
  Zap as Vite,
  Zap as Nextjs,
  Zap as Vercel,
  Zap as Netlify,
  Figma,
  Layers as Adobe,
  Image as Photoshop,
  Palette as Illustrator,
  Video as AfterEffects,
  Play as Premiere,
  Zap,
  BarChart3,
  FileText,
  Users,
  MessageCircle,
  Calendar,
  Brain,
  BookOpen,
  Clock,
  Search,
  Heart,
  GraduationCap,
  ChevronDown
} from 'lucide-react';
import { skills } from '@/data/skills';
import type { Skill } from '@/types';
import styles from './Skills.module.scss';

interface SkillCollapsibleItemProps {
  skillKey: string;
  skill: Skill;
  iconColor: string;
  index: number;
  SkillIcon?: React.ComponentType<{ size?: number; color?: string }>;
}

function SkillCollapsibleItem({
  skillKey,
  skill,
  iconColor,
  index,
  SkillIcon,
}: SkillCollapsibleItemProps) {
  return (
    <motion.div
      className={styles.skillItem}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.02 }}
      viewport={{ once: true }}
    >
      <Collapsible.Root>
        <Collapsible.Trigger asChild>
          <button
            type="button"
            className={styles.skillToggle}
            aria-controls={`skill-notes-${skillKey}`}
          >
            <div className={styles.skillHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    color: iconColor,
                  }}
                >
                  {SkillIcon &&
                    React.createElement(SkillIcon, {
                      size: 16,
                      color: iconColor,
                    })}
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
              <div className={styles.skillMeta}>
                <span className={styles.skillYears}>{skill.years} years</span>
                <ChevronDown size={14} className={styles.skillChevron} aria-hidden="true" />
              </div>
            </div>
          </button>
        </Collapsible.Trigger>
        {skill.notes && (
          <Collapsible.Content
            id={`skill-notes-${skillKey}`}
            className={styles.skillNotes}
          >
            {skill.notes}
          </Collapsible.Content>
        )}
      </Collapsible.Root>
    </motion.div>
  );
}

const Skills = memo(() => {
  const developmentToolsRef = useRef<HTMLDivElement>(null);

  const containerVariants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          duration: 0.6,
        },
      },
    }),
    [],
  );

  const itemVariants = useMemo(
    () => ({
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
      },
    }),
    [],
  );

  const skillCategories = useMemo(
    () => ({
      frontend: { title: 'Technical Skills', color: '#10B981' },
      design: { title: 'Soft Skills', color: '#2563EB' },
    }),
    [],
  );

  const frontendSkills = useMemo(
    () => skills.filter((skill) => skill.category === 'frontend'),
    [],
  );
  const toolsSkills = useMemo(
    () => skills.filter((skill) => skill.category === 'tools'),
    [],
  );
  const designSkills = useMemo(
    () => skills.filter((skill) => skill.category === 'design'),
    [],
  );

  const skillIcons: {
    [key: string]: React.ComponentType<{ size?: number; color?: string }>;
  } = {
    React: ReactIcon,
    TypeScript: TypeScript,
    JavaScript: JavaScript,
    'HTML/CSS': Html5,
    HTML5: Html5,
    CSS3: Css3,
    'SASS/SCSS': Sass,
    Sass: Sass,
    'Tailwind CSS': Css3,
    'Framer Motion': Zap,
    Redux: Webpack,
    'Material UI': Illustrator,
    Mapbox: Html5,
    'Three.js': Zap,
    'React Query': Zap,
    'React Table': Webpack,
    Axios: Zap,
    Recharts: BarChart3,
    'React Router': Zap,
    Zod: TypeScript,
    'React Hook Form': FileText,
    'REST API': Html5,
    GraphQL: Zap,
    'Next.js': Nextjs,
    Supabase: Webpack,
    GSAP: Zap,
    Storybook: BookOpen,
    Git: Git,
    'CI/CD': Webpack,
    Webpack: Webpack,
    Vite: Vite,
    Cursor: Zap,
    GitHub: Github,
    GitLab: Gitlab,
    npm: Npm,
    Yarn: Yarn,
    Vercel: Vercel,
    Netlify: Netlify,
    'Client-focused problem solving': Zap,
    'Leadership and mentoring': Users,
    'Effective communication': MessageCircle,
    'Strategic project planning': Calendar,
    'Problem-Solving & Critical Thinking': Brain,
    'Adaptability & Continuous Learning': BookOpen,
    'Time Management & Prioritization': Clock,
    'Attention to Detail': Search,
    'Empathy & User-Centric Mindset': Heart,
    'Collaboration in Agile Teams': Users,
    'Mentorship & Knowledge Sharing': GraduationCap,
    Figma: Figma,
    Adobe: Adobe,
    Photoshop: Photoshop,
    Illustrator: Illustrator,
    'After Effects': AfterEffects,
    Premiere: Premiere,
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Skills & <span className={styles.titleAccent}>Expertise</span>
          </h2>
        </motion.div>

        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className={`${styles.techSkillsContainer} ${styles.categoryLight}`}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryIcon}
                style={{ backgroundColor: skillCategories.frontend.color }}
              >
                <ReactIcon size={24} color="#ffffff" />
              </div>
              <h3
                className={styles.categoryTitle}
                style={{ color: skillCategories.frontend.color }}
              >
                {skillCategories.frontend.title}
              </h3>
            </div>

            <div className={styles.skillsGrid}>
              {frontendSkills.map((skill, index) => (
                <SkillCollapsibleItem
                  key={skill.name}
                  skillKey={`frontend-${index}`}
                  skill={skill}
                  iconColor={skillCategories.frontend.color}
                  index={index}
                  SkillIcon={skillIcons[skill.name]}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={developmentToolsRef}
            className={`${styles.toolsSkillsContainer} ${styles.categoryLight}`}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryIcon}
                style={{ backgroundColor: '#FACC15' }}
              >
                <Wrench size={22} color="#0f2d4a" />
              </div>
              <h3
                className={styles.categoryTitle}
                style={{ color: 'var(--home-ink)' }}
              >
                Development Tools
              </h3>
            </div>

            <div className={styles.skillsGrid}>
              {toolsSkills.map((skill, index) => (
                <SkillCollapsibleItem
                  key={skill.name}
                  skillKey={`tools-${index}`}
                  skill={skill}
                  iconColor="#FACC15"
                  index={index}
                  SkillIcon={skillIcons[skill.name]}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`${styles.softSkillsContainer} ${styles.categoryLight}`}
            variants={itemVariants}
          >
            <div className={styles.categoryHeader}>
              <div
                className={styles.categoryIcon}
                style={{ backgroundColor: skillCategories.design.color }}
              >
                <Zap size={24} color="#ffffff" />
              </div>
              <h3
                className={styles.categoryTitle}
                style={{ color: skillCategories.design.color }}
              >
                {skillCategories.design.title}
              </h3>
            </div>

            <div className={styles.skillsGrid}>
              {designSkills.map((skill, index) => (
                <SkillCollapsibleItem
                  key={skill.name}
                  skillKey={`design-${index}`}
                  skill={skill}
                  iconColor={skillCategories.design.color}
                  index={index}
                  SkillIcon={skillIcons[skill.name]}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;
