'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { memo } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';

interface TimelineEntry {
  year: string;
  title: string;
  text: string;
  cluster: 'foundation' | 'early' | 'growth' | 'recent';
}

interface HobbyEntry {
  id: string;
  title: string;
  text: React.ReactNode;
  images: { src: string; alt: string }[];
  accent: 'sky' | 'navy' | 'yellow' | 'orange';
}

const TIMELINE: TimelineEntry[] = [
  {
    year: 'School',
    title: 'Natural Sciences & Mathematics, Burgas',
    text: 'Graduated from the Natural Sciences and Mathematics school in Burgas.',
    cluster: 'foundation',
  },
  {
    year: 'UNWE',
    title: "Bachelor's in Marketing (English)",
    text: "Completed a Bachelor's degree in Marketing in English at UNWE (Sofia).",
    cluster: 'foundation',
  },
  {
    year: 'SoftUni',
    title: 'Front-End Development Diploma',
    text: 'Graduated from SoftUni with a Front-End Development diploma in parallel with university studies.',
    cluster: 'foundation',
  },
  {
    year: 'May 2018 – Sep 2018',
    title: 'Orbis Digital Services – Frontend Developer Intern',
    text: 'Developed app for chocolate provider with reusable components. Wrote SASS CSS and implemented responsive design. Performed cross-browser development and error handling. Created comprehensive unit tests. Technologies: TypeScript, Angular, SASS, Bootstrap.',
    cluster: 'early',
  },
  {
    year: 'Nov 2018 – Nov 2019',
    title: 'EPAM Systems – Junior Frontend Developer',
    text: 'Developed dynamic UI components and comprehensive unit tests. Set up projects and researched best practices. Created utility functions and UI designs in Adobe XD. Built responsive and accessible user interfaces. Technologies: TypeScript, React, Next.js, SASS, Styleguidist.',
    cluster: 'early',
  },
  {
    year: 'Nov 2019 – Jul 2021',
    title: 'EPAM Systems – Frontend Developer',
    text: 'Built complex UI components and authentication systems. Developed comprehensive unit and integration tests. Optimized rendering performance and refactored legacy code. Performed cross-browser development and error handling. Created comprehensive unit tests. Contributed to React PDF Library and implemented ANTLR-based formula parsing. Technologies: TypeScript, React, Redux, Material UI, SASS.',
    cluster: 'growth',
  },
  {
    year: 'Jul 2021 – Aug 2023',
    title: 'EPAM Systems – Frontend Developer',
    text: 'Acted as client-facing technical senior: proposing features and maintaining clear communication throughout project lifecycle. Contributed to system architecture decisions for modular, maintainable fin-tech applications. Developed scalable UI components and integrated complex REST APIs. Improved performance in fin-tech projects and in an e-commerce project: lowered the initial render time up to ~30% and memory usage up to ~25%. Assured that agile methodologies and best practices are followed in my team. Divided big development work into isolated tasks for developers to work on. Led a subteam of 3 developers and distributed work among them. Mentored through code reviews and pair programming. Managed CI/CD pipelines end-to-end with Jenkins and Github Actions to ensure smooth, reliable deployments. Technologies: TypeScript, React, Material UI, CI/CD.',
    cluster: 'growth',
  },
  {
    year: 'Sep 2023 – Mar 2025',
    title: 'Urban Planning Web Interface – Frontend Developer',
    text: 'Built geospatial interfaces for municipal planning, enabling visualization of zoning changes, street closures, and overlays. Delivered performant and intuitive front-end solutions for complex geospatial datasets. Technologies: React, TypeScript, Mapbox, SASS.',
    cluster: 'recent',
  },
  {
    year: 'March 2025 – Present',
    title: 'Freelance Frontend Developer & UI/UX Designer',
    text: 'Designed and delivered high-performance, secure, accessible, responsive web applications across multiple industries. Created wireframes and aesthetic intuitive UI designs with Figma. Worked with translations, animations, theming, SEO, CMS. Worked with Supabase for database integration. Managed end-to-end project lifecycle: requirement gathering, prototyping, implementation, deployment, and post-launch support. Collaborated with clients to translate vision into maintainable, modern web applications. Leveraged AI tools (Cursor, ChatGPT) to accelerate development and ensure high-quality, bug-free code. Technologies: React, TypeScript, Next.js, Tailwind, SASS, AI-assisted Development, Supabase, Jest, Vercel.',
    cluster: 'recent',
  },
].reverse() as TimelineEntry[];

const HOBBIES: HobbyEntry[] = [
  {
    id: 'music',
    title: 'Music',
    accent: 'navy',
    text: (
      <>
        Outside of work, I am passionate about <strong>music</strong>. I produce electronic music across different genres: techno, breakbeat, house, dub, drum and bass, psy-trance, trip-hop, ambient, but also jazz, funk, and bossa nova. I try to mix interesting melodies, beats and emotions, and try to keep it interesting at all times.{' '}
        <Link href="https://soundcloud.com/ruslan-nikolov-323139497" target="_blank" rel="noopener noreferrer">
          SoundCloud
        </Link>
        . I publish my own tracks independently, and the feedback that I receive is very positive. Favourite musicians: Thievery Corporation, Deadmau5, Flume, Calibre. Worth checking out. <strong>How this helps my development:</strong> Music production has taught me rhythm, timing, and flow, essential for creating smooth animations and intuitive user interactions. My experience with audio software interfaces directly translates to designing better UX patterns and understanding user feedback systems.
      </>
    ),
    images: [
      { src: '/Music-1.webp', alt: 'Music production setup' },
      { src: '/Music-2.webp', alt: 'Music equipment' },
      { src: '/Music-3.webp', alt: 'Music workspace' },
    ],
  },
  {
    id: 'sports',
    title: 'Sports',
    accent: 'sky',
    text: (
      <>
        I also love doing <strong>sports</strong>. I have trained karate and volleyball when I was in school. At all times I have been parallely doing calisthenics and going to the gym, I am now mainly focused on basketball and crossfit and table-tennis. The sportsmen I admire are Lionel Messi, Nikola Jokic (basketball), Stephen Curry, Raphael Nadal, Roger Federer, Simon Gauzy (table tennis). <strong>How this helps my development:</strong> Sports have taught me discipline, teamwork, and strategic thinking, crucial for project planning and collaboration. The competitive mindset drives me to continuously improve my code quality and stay updated with the latest frontend technologies.
      </>
    ),
    images: [
      { src: '/Sports-1.webp', alt: 'Sports activity' },
      { src: '/Sports-2.webp', alt: 'Basketball' },
      { src: '/Sports-3.webp', alt: 'Fitness training' },
    ],
  },
  {
    id: 'reading',
    title: 'Reading',
    accent: 'orange',
    text: (
      <>
        I also enjoy <strong>reading</strong>. I recently finished a great book by historian Yuval Noah Harari called <strong>Homo Deus</strong>. It&apos;s a story of mankind, its past, present and future in a very pleasant and engaging manner. It goes through all the important topics and it fills your knowledge gaps effortlessly. I started reading <strong>Homo Sapiens</strong>. It&apos;s by the same author, but it&apos;s more focused on the past of our species. My intellectual interests include <strong>psychology, philosophy and physics</strong>. I also love <strong>comedy</strong>, and some would say I even have a decent sense of humour. <strong>How this helps my development:</strong> Reading about psychology helps me understand user behavior and create more intuitive interfaces. Philosophy teaches me to think critically about design decisions, while physics knowledge aids in creating realistic animations and understanding performance optimization principles.
      </>
    ),
    images: [
      { src: '/Reading-1.webp', alt: 'Reading at home' },
      { src: '/Reading-2.webp', alt: 'Bookshelf' },
      { src: '/Reading-3.webp', alt: 'Reading outdoors' },
    ],
  },
  {
    id: 'art',
    title: 'Art',
    accent: 'yellow',
    text: (
      <>
        Additionally I like good <strong>art</strong>. My favourite styles are impressionism, surrealism, fantasy and sci-fi. Favourite artists include: Impressionists: Claude Monet, Édouard Manet; surrealists: Salvador Dali, Zdzisław Beksiński, Alex Grey, Vladimir Kush; Sci-fi: Moebius. I have also drawn Greek and Roman capitals and explored color compositions. Furthermore I like going out with friends and socializing. I love walking in the centre and sea garden and visiting theatres. <strong>How this helps my development:</strong> My appreciation for art directly enhances my UI design skills. Understanding color theory, composition, and visual hierarchy from studying great artists helps me create more aesthetically pleasing and effective user interfaces. The creative thinking from art appreciation translates to innovative problem-solving in frontend development.
      </>
    ),
    images: [
      { src: '/Art-1.webp', alt: 'Art study' },
      { src: '/Art-2.webp', alt: 'Gallery visit' },
      { src: '/Art-3.webp', alt: 'Drawing practice' },
    ],
  },
];

const About = memo(() => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.container}>
        <motion.div
          className={styles.introRow}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className={styles.profileFrame}>
            <Image
              src="/Ruslan Profile.webp"
              alt="Ruslan Nikolov working on laptop"
              width={480}
              height={560}
              className={styles.profileImg}
              priority={false}
            />
          </div>

          <header className={styles.header}>
            <h2 id="about-heading" className={styles.sectionTitle}>
              About <span className={styles.titleAccent}>Me</span>
            </h2>
          </header>
        </motion.div>

        <div className={styles.timelineSection}>
          {/* <h3 className={styles.subsectionTitle}>Career timeline</h3> */}

          <ol className={styles.timeline}>
            {TIMELINE.map((item, index) => (
              <motion.li
                key={`${item.year}-${item.title}`}
                className={`${styles.timelineItem} ${styles[`cluster_${item.cluster}`]}`}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.32),
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className={styles.timelineMarker} aria-hidden="true" />
                <article className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h4 className={styles.timelineTitle}>{item.title}</h4>
                  </div>
                  <p className={styles.paragraph}>{item.text}</p>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className={styles.hobbiesSection}>
          <h3 className={styles.subsectionTitle}>Outside of work</h3>

          <Tabs.Root defaultValue={HOBBIES[0].id}>
            <Tabs.List className={styles.hobbyTabs} aria-label="Personal interests">
              {HOBBIES.map((hobby) => (
                <Tabs.Trigger
                  key={hobby.id}
                  value={hobby.id}
                  className={styles.hobbyTab}
                >
                  {hobby.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            {HOBBIES.map((hobby) => (
              <Tabs.Content key={hobby.id} value={hobby.id} asChild>
                <motion.div
                  className={`${styles.hobbyPanel} ${styles[`hobbyPanel_${hobby.accent}`]}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={styles.hobbyContent}>
                    <p className={styles.paragraph}>{hobby.text}</p>
                  </div>
                  <ul className={styles.hobbyGallery}>
                    {hobby.images.map((image) => (
                      <li key={image.src} className={styles.hobbyImageWrap}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={200}
                          height={200}
                          className={styles.hobbyImage}
                        />
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
