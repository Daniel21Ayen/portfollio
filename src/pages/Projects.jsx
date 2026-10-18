import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';
import styles from './Projects.module.css';

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [projects] = useState(projectsData);
  const [currentPage, setCurrentPage] = useState(1);
  const displaySectionRef = useRef(null);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    if (displaySectionRef.current) {
      displaySectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroContent}
          >
            <h1 className={styles.heroTitle}>
              Showcase of <span className="highlight">Innovation</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Explore my collection of full-stack, distributed systems, and real-time projects
              demonstrating clean code, robust architecture, and modern technical excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Display: Paginated Grid (6 per page) */}
      <section className={styles.display} ref={displaySectionRef}>
        <div className="container">
          <div className={styles.displayHeader}>
            <div>
              <h2 className={styles.displayTitle}>
                All Engineering Projects
              </h2>
              <p className={styles.displaySubtitle}>
                Showing {indexOfFirstProject + 1}–{Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
              </p>
            </div>
            {totalPages > 1 && (
              <div className={styles.pageBadge}>
                Page {currentPage} of {totalPages}
              </div>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`${styles.projectsContainer} ${styles.gridView}`}
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className={styles.pagination} aria-label="Projects pagination">
              <button
                type="button"
                className={styles.paginationBtn}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <FaChevronLeft className={styles.paginationIcon} />
                <span>Previous</span>
              </button>

              <div className={styles.paginationNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    className={`${styles.paginationNumber} ${currentPage === pageNumber ? styles.active : ''}`}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    aria-current={currentPage === pageNumber ? 'page' : undefined}
                  >
                    {pageNumber}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.paginationBtn}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <span>Next</span>
                <FaChevronRight className={styles.paginationIcon} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2 className={styles.ctaTitle}>Have a Project in Mind?</h2>
            <p className={styles.ctaDescription}>
              I'm always open to discussing new opportunities and interesting projects.
              Let's bring your ideas to life!
            </p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
              <Link to="/skills" className="btn btn-outline">
                View My Skills
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;