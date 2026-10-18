import React from 'react';
import { motion } from 'framer-motion';
import { FaRegEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
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