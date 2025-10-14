'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import styles from './About.module.scss';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <img src="/Ruslan Dragons.png" alt="Ruslan Dragons" style={{ width: 120, height: 'auto', borderRadius: 12 }} />
          </div>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Where creativity meets technology to build the future of digital experiences
          </p>
        </motion.div>

        <div className={styles.timelineLayout}>
          <motion.div
            className={styles.profile}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/Ruslan Profile Pic.jpg"
              alt="Ruslan Nikolov profile"
              className={styles.profileImg}
            />
            <div className={styles.cta}>
              <motion.button
                className={styles.contactButton}
                onClick={scrollToContact}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(37, 99, 235, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s work together
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { year: 'School', title: 'Natural Sciences & Mathematics, Burgas', text: 'Graduated from the Natural Sciences and Mathematics school in Burgas.' },
              { year: 'UNWE', title: "Bachelor's in Marketing (English)", text: 'Completed a Bachelor’s degree in Marketing in English at UNWE (Sofia).' },
              { year: 'SoftUni', title: 'Front‑End Development Diploma', text: 'Graduated from SoftUni with a Front‑End Development diploma in parallel with university studies.' },
              { year: '2017', title: 'Orbis Digital Systems – Front‑End Developer', text: 'Worked on a customizable chocolate web application; received a personal recommendation from the CEO when moving to Sofia.' },
              { year: '2018 – 2023', title: 'EPAM Systems – Front‑End Developer', text: 'Grew from Junior → Middle → Senior across several projects of varying duration, scope, and team sizes, strengthening client‑focused problem solving, adaptability, communication, and continuous learning.' },
              { year: '2022 – 2023', title: 'International Transport Project', text: 'Handled software and administrative work for ~1.5 years with focus on strategic planning, time management, and prioritization.' },
              { year: '2023 – Present', title: 'Freelance Front‑End Developer', text: 'Built websites for institutions, friends, and family; reinforced problem‑solving, critical thinking, empathy, and a user‑centric mindset.' }
            ].map((item, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineMarker} />
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                  </div>
                  <p className={styles.paragraph}>{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <p className={styles.paragraph}>
            Outside of work, I am passionate about <strong>music</strong>. I produce electronic music across different genres—techno, breakbeat, house, dub, drum and bass, psy‑trance, trip‑hop, ambient, but also jazz, funk, and bossa nova. I try to mix interesting melodies, beats and emotions, and try to keep it interesting at all times. <a href="https://soundcloud.com/ruslan-nikolov-323139497" target="_blank" rel="noopener noreferrer">SoundCloud</a>. I publish my own tracks independently, and the feedback that I receive is very positive. Favourite musicians: Thievery Corporation, Deadmau5, Flume, Calibre. Worth checking out.
          </p>

          <p className={styles.paragraph}>
            I also love doing <strong>sports</strong>. I am now mainly focused on basketball and crossfit and table‑tennis. The sportsmen I admire are Lionel Messi, Nikola Jokic (basketball), Stephen Curry, Raphael Nadal, Roger Federer, Simon Gauzy (table tennis).
          </p>

          <p className={styles.paragraph}>
            I also enjoy <strong>reading</strong>. I recently finished a great book by historian Yuval Noah Harari called <strong>Homo Deus</strong>. It&apos;s a story of mankind, its past, present and future in a very pleasant and engaging manner. It goes through all the important topics and it fills your knowledge gaps effortlessly. I started reading <strong>Homo Sapiens</strong>. It&apos;s by the same author, but it&apos;s more focused on the past of our species.
          </p>

          <p className={styles.paragraph}>
            My intellectual interests include <strong>psychology, philosophy and physics</strong>. I also love <strong>comedy</strong>, and some would say I have a decent sense of humour.
          </p>

          <p className={styles.paragraph}>
            Additionally I like good <strong>art</strong>. My favourite styles are impressionism, surrealism, fantasy and sci‑fi. I would describe myself as someone who combines <strong>technical expertise, adaptability, and creativity</strong>, and I’m motivated to bring that to any client.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
