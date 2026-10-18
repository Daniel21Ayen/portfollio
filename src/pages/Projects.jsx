import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/common/ProjectCard';
import { projectsData } from '../data/projects';
import {
  FaSearch,
  FaStar,
  FaCalendarAlt,
  FaLayerGroup,
  FaServer,
  FaMobileAlt,
  FaDatabase
} from 'react-icons/fa';
import { SiReact, SiNodedotjs } from 'react-icons/si';
import styles from './Projects.module.css';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects] = useState(projectsData);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);

  // Sync state if URL query params change
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlSearch = searchParams.get('search');
    if (urlCategory) setSelectedCategory(urlCategory);
    if (urlSearch !== null && urlSearch !== undefined) setSearchQuery(urlSearch);
  }, [searchParams]);

  const handleTagClick = (tag) => {
    setSearchQuery(tag);
    setSelectedCategory('all');
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setCurrentPage(1);
    setSearchParams({});
  };

  // ===== PAGINATION: 6 projects per page =====
  const projectsPerPage = 6;

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FaServer /> },
    { id: 'frontend', label: 'Frontend', icon: <SiReact /> },
    { id: 'backend', label: 'Backend', icon: <SiNodedotjs /> },
    { id: 'mobile', label: 'Mobile', icon: <FaMobileAlt /> },
    { id: 'database', label: 'Database', icon: <FaDatabase /> },
  ];

  // Filter + sort
  useEffect(() => {
    let filtered = [...projects];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.type === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date);
          bValue = new Date(b.date);
          break;
        case 'stars':
          aValue = a.stats.stars;
          bValue = b.stats.stars;
          break;
        case 'complexity': {
          const complexityOrder = { low: 1, medium: 2, high: 3, 'very-high': 4 };
          aValue = complexityOrder[a.complexity] || 0;
          bValue = complexityOrder[b.complexity] || 0;
          break;
        }
        case 'name':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') return aValue > bValue ? 1 : -1;
      return aValue < bValue ? 1 : -1;
    });

    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy, sortOrder, projects]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              Explore my collection of projects that demonstrate technical expertise,
              problem-solving skills, and passion for software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls Section: Search & Category Filters */}
      <section className={styles.controls}>
        <div className="container">
          <div className={styles.controlsGrid}>
            <div className={styles.searchContainer}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search projects by title, description, or technology (e.g. React, PostgreSQL, Docker)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.categories}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Display */}
      <section className={styles.display}>
        <div className="container">
          <div className={styles.displayHeader}>
            <h2 className={styles.displayTitle}>
              Showing {filteredProjects.length} of {projects.length} Projects
            </h2>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                className={styles.clearFiltersBtn}
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.noProjects}
              >
                <div className={styles.noProjectsIcon}>
                  <FaSearch />
                </div>
                <h3>No projects found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={isGridView ? 'grid' : 'list'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${styles.projectsContainer} ${isGridView ? styles.gridView : styles.listView}`}
              >
                {currentProjects.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isGridView ? (
                      <ProjectCard project={project} onTagClick={handleTagClick} />
                    ) : (
                      <div className={styles.projectListItem}>
                        <div className={styles.listItemHeader}>
                          <div className={styles.itemBadges}>
                            <span className={`${styles.badgeType} ${styles[project.type]}`}>
                              {project.type}
                            </span>
                            {project.featured && (
                              <span className={styles.badgeFeatured}>
                                <FaStar /> Featured
                              </span>
                            )}
                          </div>
                          <div className={styles.itemStats}>
                            <span className={styles.stat}>
                              <FaStar /> {project.stats.stars}
                            </span>
                          </div>
                        </div>

                        <div className={styles.listItemContent}>
                          <h3 className={styles.itemTitle}>{project.title}</h3>
                          <p className={styles.itemDescription}>{project.shortDescription}</p>

                          <div className={styles.itemTech}>
                            {project.technologies.slice(0, 5).map(tech => (
                              <button
                                key={tech}
                                type="button"
                                className={styles.techTag}
                                onClick={() => handleTagClick(tech)}
                                title={`Filter projects by ${tech}`}
                              >
                                {tech}
                              </button>
                            ))}
                            {project.technologies.length > 5 && (
                              <span className={styles.techMore}>
                                +{project.technologies.length - 5}
                              </span>
                            )}
                          </div>

                          <div className={styles.itemMeta}>
                            <span className={styles.metaItem}>
                              <FaCalendarAlt /> {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span className={styles.metaItem}>
                              Duration: {project.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {filteredProjects.length > projectsPerPage && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationBtn}
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <div className={styles.paginationNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page =>
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  )
                  .map((page, index, array) => {
                    if (index > 0 && page - array[index - 1] > 1) {
                      return (
                        <React.Fragment key={`ellipsis-${page}`}>
                          <span className={styles.paginationEllipsis}>...</span>
                          <button
                            className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
                            onClick={() => paginate(page)}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      );
                    }

                    return (
                      <button
                        key={page}
                        className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
                        onClick={() => paginate(page)}
                      >
                        {page}
                      </button>
                    );
                  })}
              </div>

              <button
                className={styles.paginationBtn}
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
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