import { motion } from 'framer-motion';
import styles from './Feedbacks.module.scss';
import { MessageCircle } from 'lucide-react';

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
      name: 'Gergana Borisova',
      role: 'Colleague',
      quote: 'I had the pleasure of working with Ruslan in the past, and I can confidently say he is one of the most creative and innovative thinkers I\'ve collaborated with. His open-minded approach allows him to find smart, effective solutions to any challenge. Ruslan is also exceptionally friendly and easy to communicate with, which makes working with him both pleasant and effortless. I\'m certain he would be an excellent choice for any client seeking creative and unique solutions.'
    },
    {
      name: 'Dimitar Petrov',
      role: 'Project Manager',
      quote: 'Working with Ruslan was an absolute pleasure. His frontend development skills are exceptional, and he consistently delivered clean, responsive interfaces that exceeded our expectations. His attention to detail and ability to translate complex requirements into beautiful user experiences is remarkable.'
    },
    {
      name: 'Elena Stoyanova',
      role: 'UI/UX Designer',
      quote: 'Ruslan\'s technical expertise in React and modern frontend technologies is outstanding. He has a unique ability to bring design concepts to life with pixel-perfect precision. His collaborative approach and clear communication made our design-to-development handoff seamless.'
    },
    {
      name: 'Nikolay Georgiev',
      role: 'Tech Lead',
      quote: 'Ruslan is a highly skilled frontend developer with excellent problem-solving abilities. His code is clean, well-structured, and maintainable. He consistently delivered high-quality solutions on time and was always willing to go the extra mile to ensure project success.'
    },
    {
      name: 'Maria Ivanova',
      role: 'Product Owner',
      quote: 'Ruslan\'s frontend development work has been instrumental in our project\'s success. His ability to create intuitive user interfaces and optimize performance is impressive. He\'s reliable, professional, and always delivers beyond expectations.'
    },
    {
      name: 'Petar Dimitrov',
      role: 'Developer',
      quote: 'I\'ve had the opportunity to collaborate with Ruslan on several frontend projects, and his expertise in modern web technologies is evident. His clean code practices and innovative solutions have significantly improved our development workflow and final product quality.'
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
            <div className={styles.emoji}>
              <MessageCircle size={64} />
            </div>
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
                <div style={{ marginBottom: 12 }}>
                  <h3 className={styles.projectTitle} style={{ margin: 0 }}>
                    {f.name}
                  </h3>
                  <p className={styles.description} style={{ margin: 0 }}><em>{f.role}</em></p>
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


