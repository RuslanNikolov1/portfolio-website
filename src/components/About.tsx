'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './About.module.scss';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  return (
    <section id="about" className={styles.about} ref={aboutRef}>
      <div className={styles.container}>
      <div className={styles.overlay}></div>
      
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
        </motion.div>

        <motion.div
          className={styles.profile}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/Ruslan Laptop Looking.jpg"
            alt="Ruslan Nikolov working on laptop"
            className={styles.profileImg}
          />
        </motion.div>

        <motion.div
          className={styles.timeline}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            {[
              { year: 'School', title: 'Natural Sciences & Mathematics, Burgas', text: 'Graduated from the Natural Sciences and Mathematics school in Burgas.' },
              { year: 'UNWE', title: "Bachelor's in Marketing (English)", text: 'Completed a Bachelor\'s degree in Marketing in English at UNWE (Sofia).' },
              { year: 'SoftUni', title: 'Front‑End Development Diploma', text: 'Graduated from SoftUni with a Front‑End Development diploma in parallel with university studies.' },
              { year: 'May 2018 – Sep 2018', title: 'Orbis Digital Services – Frontend Developer Intern', text: 'Developed app for chocolate provider with reusable components. Wrote SASS CSS and implemented responsive design. Performed cross-browser development and error handling. Created comprehensive unit tests. Technologies: TypeScript, Angular, SASS, Bootstrap.' },
              { year: 'Nov 2018 – Nov 2019', title: 'EPAM Systems – Junior Frontend Developer', text: 'Developed dynamic UI components and comprehensive unit tests. Set up projects and researched best practices. Created utility functions and UI designs in Adobe XD. Built responsive and accessible user interfaces. Technologies: TypeScript, React, Next.js, SASS, Styleguidist.' },
              { year: 'Nov 2019 – Jul 2021', title: 'EPAM Systems – Frontend Developer', text: 'Built complex UI components and authentication systems. Developed comprehensive unit and integration tests. Optimized rendering performance and refactored legacy code. Performed cross-browser development and error handling. Created comprehensive unit tests. Contributed to React PDF Library and implemented ANTLR-based formula parsing. Technologies: TypeScript, React, Redux, Material UI, SASS.' },
              { year: 'Jul 2021 – Aug 2023', title: 'EPAM Systems – Senior Frontend Developer', text: 'Acted as client-facing technical senior: proposing features and maintaining clear communication throughout project lifecycle. Contributed to system architecture decisions for modular, maintainable fin-tech applications. Developed scalable UI components and integrated complex REST APIs. Improved performance in fin-tech projects and in an e-commerce project: lowered the initial render time up to ~30% and memory usage up to ~25%. Assured that agile methodologies and best practices are followed in my team. Divided big development work into isolated tasks for developers to work on. Led a subteam of 3 developers and distributed work among them. Mentored through code reviews and pair programming. Managed CI/CD pipelines end-to-end with Jenkins and Github Actions to ensure smooth, reliable deployments. Technologies: TypeScript, React, Material UI, CI/CD.' },
              { year: 'Sep 2023 – Mar 2025', title: 'Urban Planning Web Interface – Frontend Developer', text: 'Built geospatial interfaces for municipal planning, enabling visualization of zoning changes, street closures, and overlays. Delivered performant and intuitive front-end solutions for complex geospatial datasets. Technologies: React, TypeScript, Mapbox, SASS.' },
              { year: 'March 2025 – Present', title: 'Freelance Frontend Developer & UI/UX Designer', text: 'Designed and delivered high-performance, responsive web applications across multiple industries. Built interactive audio-visual experiences with Web Audio API, enhancing user engagement. Developed authentication and news comments backend for a crypto dashboard app using Node.js and Express. Managed end-to-end project lifecycle: requirement gathering, prototyping, implementation, deployment, and post-launch support. Collaborated with clients to translate vision into maintainable, modern web applications. Optimized performance with lazy loading, code-splitting, and efficient state management. Leveraged AI tools (Cursor, ChatGPT) to accelerate development and ensure high-quality, bug-free code. Technologies: React, TypeScript, Next.js, Tailwind, SASS, Web Audio API, AI-assisted Development.' }
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

        <div style={{ marginTop: '2rem' }}>
          <div className={styles.musicContainer}>
            <div className={styles.emojiTitle}>
              <div className={styles.emoji}>🎧</div>
              <h3 className={styles.sectionTitle}>Music</h3>
            </div>
            <p className={styles.paragraph}>
              Outside of work, I am passionate about <strong>music</strong>. I produce electronic music across different genres—techno, breakbeat, house, dub, drum and bass, psy‑trance, trip‑hop, ambient, but also jazz, funk, and bossa nova. I try to mix interesting melodies, beats and emotions, and try to keep it interesting at all times. <a href="https://soundcloud.com/ruslan-nikolov-323139497" target="_blank" rel="noopener noreferrer">SoundCloud</a>. I publish my own tracks independently, and the feedback that I receive is very positive. Favourite musicians: Thievery Corporation, Deadmau5, Flume, Calibre. Worth checking out. <strong>How this helps my development:</strong> Music production has taught me rhythm, timing, and flow—essential for creating smooth animations and intuitive user interactions. My experience with audio software interfaces directly translates to designing better UX patterns and understanding user feedback systems.
            </p>
            <div className={styles.musicImagesRow}>
              <div className={styles.imagesContainer}>
                <img src="/Music-1.jpg" alt="Music 1" className={styles.musicImage} />
                <img src="/Music-2.jpg" alt="Music 2" className={styles.musicImage} />
                <img src="/Music-3.png" alt="Music 3" className={styles.musicImage} />
              </div>
            </div>
          </div>

          <div className={styles.sportsContainer}>
            <div className={styles.emojiTitle}>
              <div className={styles.emoji}>⚽</div>
              <h3 className={styles.sectionTitle}>Sports</h3>
            </div>
            <p className={styles.paragraph}>
              I also love doing <strong>sports</strong>. I have trained karate and volleyball when I was in school. At all times I have been parallely doing calisthenics and going to the gym, I am now mainly focused on basketball and crossfit and table‑tennis. The sportsmen I admire are Lionel Messi, Nikola Jokic (basketball), Stephen Curry, Raphael Nadal, Roger Federer, Simon Gauzy (table tennis). <strong>How this helps my development:</strong> Sports have taught me discipline, teamwork, and strategic thinking—crucial for project planning and collaboration. The competitive mindset drives me to continuously improve my code quality and stay updated with the latest frontend technologies.
            </p>
            <div className={styles.sportsImagesRow}>
              <div className={styles.imagesContainer}>
                <img src="/Sports-1.jpg" alt="Sports 1" className={styles.sportsImage} />
                <img src="/Sports-2.webp" alt="Sports 2" className={styles.sportsImage} />
                <img src="/Sports-3.jpg" alt="Sports 3" className={styles.sportsImage} />
              </div>
            </div>
          </div>

          <div className={styles.readingContainer}>
            <div className={styles.emojiTitle}>
              <div className={styles.emoji}>📚</div>
              <h3 className={styles.sectionTitle}>Reading</h3>
            </div>
            <p className={styles.paragraph}>
              I also enjoy <strong>reading</strong>. I recently finished a great book by historian Yuval Noah Harari called <strong>Homo Deus</strong>. It&apos;s a story of mankind, its past, present and future in a very pleasant and engaging manner. It goes through all the important topics and it fills your knowledge gaps effortlessly. I started reading <strong>Homo Sapiens</strong>. It&apos;s by the same author, but it&apos;s more focused on the past of our species.
              My intellectual interests include <strong>psychology, philosophy and physics</strong>. I also love <strong>comedy</strong>, and some would say I even have a decent sense of humour. <strong>How this helps my development:</strong> Reading about psychology helps me understand user behavior and create more intuitive interfaces. Philosophy teaches me to think critically about design decisions, while physics knowledge aids in creating realistic animations and understanding performance optimization principles.
            </p>
            <div className={styles.readingImagesRow}>
              <div className={styles.imagesContainer}>
                <img src="/Reading-1.jpg" alt="Reading 1" className={styles.readingImage} />
                <img src="/Reading-2.jpg" alt="Reading 2" className={styles.readingImage} />
                <img src="/Reading-3.jpg" alt="Reading 3" className={styles.readingImage} />
              </div>
            </div>
          </div>


          <div className={styles.artContainer}>
            <div className={styles.emojiTitle}>
              <div className={styles.emoji}>🎨</div>
              <h3 className={styles.sectionTitle}>Art</h3>
            </div>
            <p className={styles.paragraph}>
              Additionally I like good <strong>art</strong>. My favourite styles are impressionism, surrealism, fantasy and sci-fi. Favourite artists include: Impressionists: Claude Monet, Édouard Manet; surrealists: Salvador Dali, Zdzisław Beksiński, Alex Grey, Vladimir Kush; Sci-fi: Moebius. I have also drawn Greek and Roman capitals and explored color compositions. Furthermore I like going out with friends and socializing. I love walking in the centre and sea garden and visiting theatres. <strong>How this helps my development:</strong> My appreciation for art directly enhances my UI design skills—understanding color theory, composition, and visual hierarchy from studying great artists helps me create more aesthetically pleasing and effective user interfaces. The creative thinking from art appreciation translates to innovative problem-solving in frontend development.
            </p>
            <div className={styles.artImagesRow}>
              <div className={styles.imagesContainer}>
                <img src="/Art-1.jpeg" alt="Art 1" className={styles.artImage} />
                <img src="/Art-2.jpg" alt="Art 2" className={styles.artImage} />
                <img src="/Art-3.webp" alt="Art 3" className={styles.artImage} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomDivider} />
      </div>
    </section>
  );
};

export default About;


