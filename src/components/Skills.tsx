import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react'; // Only import the main icon used in header
import IconLoader from './IconLoader';
import { skills } from '@/data';
// Removed unused import
import styles from './Skills.module.scss';

const Skills = () => {
  const developmentToolsRef = useRef<HTMLDivElement>(null);


  // Memoized animation variants for better performance
  const containerVariants = useMemo(() => ({
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger for faster loading
        duration: 0.3 // Shorter duration
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Reduced from 0.6
        ease: [0.25, 0.46, 0.45, 0.94] as const // Proper easing type
      }
    }
  }), []);

  // Memoized skill categories to prevent re-renders
  const skillCategories = useMemo(() => ({
    frontend: { title: 'Technical Skills', color: '#10B981' },
    design: { title: 'Soft Skills', color: '#2563EB' }
  }), []);

  // Memoized filtered skills to prevent unnecessary recalculations
  const frontendSkills = useMemo(() => 
    skills.filter(skill => skill.category === 'frontend'), 
    []
  );
  
  const toolsSkills = useMemo(() => 
    skills.filter(skill => skill.category === 'tools'), 
    []
  );
  
  const designSkills = useMemo(() => 
    skills.filter(skill => skill.category === 'design'), 
    []
  );

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
                <IconLoader name="React" size={24} color="#ffffff" />
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
                          <IconLoader name={skill.name} size={16} color={skillCategories.frontend.color} />
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
                          <IconLoader name={skill.name} size={16} color="#FACC15" />
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
                <IconLoader name="Client-focused problem solving" size={24} color="#ffffff" />
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
                        <IconLoader name={skill.name} size={16} color={skillCategories.design.color} />
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
