import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp, FaChevronDown } from 'react-icons/fa';
import { useScrollNav } from '../../context/ScrollNavigationContext';
import styles from './UnifiedScroll.module.css';

const UnifiedScroll = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { nextRoute, triggerNavigate } = useScrollNav();

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

      setScrollProgress(scrolled);
      setShowScrollTop(winScroll > 320);
      setIsNearBottom(height > 0 && winScroll >= height - 75);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className={styles.scrollProgressBar} aria-hidden="true">
        <div
          className={styles.scrollProgressFill}
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Cue for Next Page at Bottom */}
      <AnimatePresence>
        {isNearBottom && nextRoute && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 15, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 15, x: '-50%' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={() => triggerNavigate('down')}
            className={styles.nextPageCue}
            aria-label={`Scroll to next section: ${nextRoute.label}`}
          >
            <span>Scroll for {nextRoute.label}</span>
            <FaChevronDown className={styles.nextCueIcon} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Smooth Back-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className={styles.scrollTopBtn}
            aria-label="Scroll to top of page"
            title="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default UnifiedScroll;