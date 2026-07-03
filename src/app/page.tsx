import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import HomeSections from '@/components/HomeSections';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      <main id="main-content" className={styles.mainContent}>
        <section id="hero" className={styles.heroSection}>
          <Hero />
        </section>

        <HomeSections />
      </main>
    </div>
  );
}
