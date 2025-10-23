import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap as ReactIcon, 
  Type as TypeScript, 
  Code as JavaScript, 
  Globe as Html5, 
  Paintbrush as Css3, 
  Code as Sass, 
  Server as Nodejs, 
  GitBranch as Git, 
  Github, 
  Gitlab, 
  Package as Npm, 
  Package as Yarn, 
  Settings as Webpack, 
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
  Zap 
} from 'lucide-react';
import { skills } from '@/data';
import styles from './Skills.module.scss';

const Skills = () => {
  const developmentToolsRef = useRef<HTMLDivElement>(null);


  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = {
    frontend: { title: 'Technical Skills', color: '#10B981' },
    design: { title: 'Soft Skills', color: '#2563EB' }
  };

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const designSkills = skills.filter(skill => skill.category === 'design');

  const skillIcons: { [key: string]: React.ComponentType<any> } = {
    'React': ReactIcon,
    'TypeScript': TypeScript,
    'JavaScript': JavaScript,
    'HTML5': Html5,
    'CSS3': Css3,
    'Sass': Sass,
    'Node.js': Nodejs,
    'Git': Git,
    'GitHub': Github,
    'GitLab': Gitlab,
    'npm': Npm,
    'Yarn': Yarn,
    'Webpack': Webpack,
    'Vite': Vite,
    'Next.js': Nextjs,
    'Vercel': Vercel,
    'Netlify': Netlify,
    'Figma': Figma,
    'Adobe': Adobe,
    'Photoshop': Photoshop,
    'Illustrator': Illustrator,
    'After Effects': AfterEffects,
    'Premiere': Premiere
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }} // Reduced from 0.8
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
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }} // Reduced duration and delay
                  viewport={{ once: true }}
                >
                    <div className={styles.skillHeader}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          color: skillCategories.frontend.color
                        }}>
                          {skillIcons[skill.name] && React.createElement(skillIcons[skill.name], {
                            size: 16,
                            color: skillCategories.frontend.color
                          })}
                        </div>
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

          {/* Middle Column - Development Tools */}
            {/* Development Tools Container */}
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
                {toolsSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.02 }} // Reduced duration and delay
                    viewport={{ once: true }}
                  >
                    <div className={styles.skillHeader}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          color: '#FACC15'
                        }}>
                          {skillIcons[skill.name] && React.createElement(skillIcons[skill.name], {
                            size: 16,
                            color: "#FACC15"
                          })}
                        </div>
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
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }} // Reduced duration and delay
                  viewport={{ once: true }}
                >
                  <div className={styles.skillHeader}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        color: skillCategories.design.color
                      }}>
                        {skillIcons[skill.name] && React.createElement(skillIcons[skill.name], {
                          size: 16,
                          color: skillCategories.design.color
                        })}
                      </div>
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
