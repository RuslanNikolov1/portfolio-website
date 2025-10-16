'use client';

import { motion } from 'framer-motion';
import styles from './Feedbacks.module.scss';
import { Linkedin } from 'lucide-react';

const Feedbacks = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const feedbacks = [
    {
      name: 'Client A',
      role: 'Product Owner',
      quote: 'Ruslan delivered high-quality work on time. Great eye for UX details.',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      linkedinUrl: 'https://www.linkedin.com/in/client-a'
    },
    {
      name: 'Client B',
      role: 'Founder',
      quote: 'Very proactive and communicative. Turned vague ideas into polished features.',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      linkedinUrl: 'https://www.linkedin.com/in/client-b'
    },
    {
      name: 'Client C',
      role: 'CTO',
      quote: 'Clean code, thoughtful architecture, and reliable delivery across sprints.',
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      linkedinUrl: 'https://www.linkedin.com/in/client-c'
    },
    {
      name: 'Teammate D',
      role: 'Senior Engineer',
      quote: 'Collaborative and adaptive. Quickly picks up domain and contributes effectively.',
      avatarUrl: 'https://i.pravatar.cc/150?img=14',
      linkedinUrl: 'https://www.linkedin.com/in/teammate-d'
    },
    {
      name: 'Manager E',
      role: 'Engineering Manager',
      quote: 'Excellent ownership and communication with stakeholders. Strong frontend skills.',
      avatarUrl: 'https://i.pravatar.cc/150?img=15',
      linkedinUrl: 'https://www.linkedin.com/in/manager-e'
    },
    {
      name: 'Client F',
      role: 'Director',
      quote: 'Understands business needs and delivers user-centric solutions consistently.',
      avatarUrl: 'https://i.pravatar.cc/150?img=16',
      linkedinUrl: 'https://www.linkedin.com/in/client-f'
    }
  ];

  return (
    <section id="feedbacks" className={styles.feedbacks}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.emojiTitle}>
            <div className={styles.emoji}>💬</div>
            <h2 className={styles.title}>What People Say</h2>
          </div>
          <p className={styles.subtitle}>A few words from clients and teammates</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {feedbacks.map((f, idx) => (
            <motion.div key={idx} className={styles.card} variants={item}>
              <div className={styles.content}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <img
                    src={f.avatarUrl}
                    alt={`${f.name} avatar`}
                    width={48}
                    height={48}
                    style={{ borderRadius: '9999px', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 className={styles.projectTitle} style={{ margin: 0 }}>
                      <a href={f.linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.nameLink}>
                        {f.name}
                        <Linkedin size={16} className={styles.nameIcon} />
                      </a>
                    </h3>
                    <p className={styles.description} style={{ margin: 0 }}><em>{f.role}</em></p>
                  </div>
                </div>
                <p className={styles.description}>{`"${f.quote}"`}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Feedbacks;


