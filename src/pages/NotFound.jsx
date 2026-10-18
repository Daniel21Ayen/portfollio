import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaFolderOpen, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.card}
        >
          <div className={styles.iconWrapper}>
            <FaExclamationTriangle className={styles.icon} />
          </div>

          <span className={styles.badge}>Error 404</span>

          <h1 className={styles.title}>
            Page <span className="highlight">Not Found</span>
          </h1>

          <p className={styles.description}>
            The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
            Explore one of the sections below to find what you need.
          </p>

          <div className={styles.actions}>
            <Link to="/" className={`btn btn-primary ${styles.btn}`}>
              <FaHome /> Back to Home
            </Link>
            <Link to="/projects" className={`btn btn-outline ${styles.btn}`}>
              <FaFolderOpen /> View Projects
            </Link>
            <Link to="/contact" className={`btn btn-outline ${styles.btn}`}>
              <FaEnvelope /> Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
