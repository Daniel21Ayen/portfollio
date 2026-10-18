import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  const [projects] = useState(projectsData);

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

      {/* Projects Display: Smoothly Scrollable Grid of All Projects */}
      <section className={styles.display}>
        <div className="container">
          <div className={styles.displayHeader}>
            <h2 className={styles.displayTitle}>
              All Engineering Projects ({projects.length})
            </h2>
          </div>

          <div className={`${styles.projectsContainer} ${styles.gridView}`}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
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