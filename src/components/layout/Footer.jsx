import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRegEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaTwitter, FaTelegram
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return ( 
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaRegEnvelope />
            <a href="mailto:dayen0938@gmail.com">dayen0938@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <FaPhone />
            <a href="tel:+251938803929">+251 938 803 929</a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt />
            <span>Injibara University, Ethiopia</span>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/Daniel21Ayen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.socialIcon}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-ayen-3113643b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/DanielAyenm3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className={styles.socialIcon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/Dani_from_online"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className={styles.socialIcon}
          >
            <FaTelegram />
          </a>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={`${styles.floatingElement} ${styles.element1}`}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {`{ }`}
        </motion.div>
        <motion.div
          className={`${styles.floatingElement} ${styles.element2}`}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className={`${styles.floatingElement} ${styles.element3}`}
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {'console.log()'}
        </motion.div>
      </div> 
    </footer>
  );
};

export default Footer;