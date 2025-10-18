'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Github, Linkedin, Music, Send, MessageCircle, ArrowUp } from 'lucide-react';
import { socialLinks } from '@/data';
import styles from './Contact.module.scss';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const contactTop = document.getElementById('contact')?.offsetTop ?? 0;

      // Show arrow once at contact section or further down
      setShowUpArrow(scrollTop + 50 >= contactTop);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Here you would typically send the data to your backend or email service
    console.log('Form submitted:', data);
    // For now, we'll just show a success message
    alert('Thank you for your message! I&apos;ll get back to you soon.');
    reset();
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail size={20} />;
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'music':
        return <Music size={20} />;
      default:
        return <MessageCircle size={20} />;
    }
  };

  return (
    <section id="contact" className={styles.contact}>
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
              <Mail size={64} />
            </div>
            <h2 className={styles.title}>Ready to Start Your Project?</h2>
          </div>
          <p className={styles.subtitle}>
            Based in Burgas, Bulgaria • Available for remote work worldwide<br/>
            Whether you&apos;re a hiring manager looking for a senior developer or a business owner needing a custom solution, 
            I&apos;m here to help bring your vision to life with professional expertise and creative innovation.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Professional Services</h3>

              <div className={styles.socialLinks}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.socialIcon}>
                      {getIcon(link.icon)}
                    </div>
                    <span className={styles.socialName}>{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className={styles.emailSection}>
                <div className={styles.emailCard}>
                  <Mail size={24} />
                  <div>
                    <p className={styles.emailLabel}>Email me directly</p>
                    <a 
                      href="mailto:ruslannikolov1@gmail.com"
                      className={styles.emailLink}
                    >
                      ruslannikolov1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  className={styles.input}
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Your name"
                />
                {errors.name && (
                  <span className={styles.error}>{errors.name.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  className={styles.input}
                  {...register('subject', { required: 'Subject is required' })}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <span className={styles.error}>{errors.subject.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className={styles.textarea}
                  {...register('message', { required: 'Message is required' })}
                  placeholder="Tell me about your project or just say hello!"
                />
                {errors.message && (
                  <span className={styles.error}>{errors.message.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className={styles.floatingCta}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {showUpArrow && (
            <motion.button
              type="button"
              aria-label="Scroll to top"
              className={styles.scrollArrow}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
          <motion.button
            className={styles.workWithMeButton}
            whileHover={{ 
              scale: 1.06,
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)'
            }}
            whileTap={{ scale: 0.94 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Work with me</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* White divider after contact form */}
      <div className={styles.bottomDivider}></div>
    </section>
  );
};

export default Contact;
