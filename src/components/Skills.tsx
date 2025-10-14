'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Music } from 'lucide-react';
import { skills } from '@/data';
import styles from './Skills.module.scss';

const Skills = () => {
  const skillCategories = {
    frontend: { icon: Code, title: 'Technical Skills', color: '#10B981' },
    design: { icon: Palette, title: 'Soft Skills', color: '#2563EB' }
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
          <h2 className={styles.title}>Skills & Expertise</h2>
          <p className={styles.subtitle}>
            {/* Subtitle removed as requested */}
          </p>
        </motion.div>

        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillCategories).map(([categoryKey, category], index) => {
            const categorySkills = skills.filter(skill => skill.category === categoryKey);
            const IconComponent = category.icon;

            return (
              <>
                <motion.div
                  key={categoryKey}
                  className={`${styles.category} ${styles.categoryLight}`}
                  variants={itemVariants}
                >
                  <div className={styles.categoryHeader}>
                    <div 
                      className={styles.categoryIcon}
                      style={{ backgroundColor: category.color }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 
                      className={styles.categoryTitle}
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className={styles.skillsGrid}>
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className={styles.skillItem}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className={styles.skillHeader}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        
                        <div className={styles.progressBar}>
                          <motion.div
                            className={styles.progressFill}
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {categoryKey === 'frontend' && (
                  <div className={styles.dividerAvatar}>
                    <img src="/FB_Avatar.png" alt="Avatar" />
                  </div>
                )}
              </>
            );
          })}
        </motion.div>

        {/* summary removed as requested */}
      </div>
    </section>
  );
};

export default Skills;
