import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillIcon from '../components/common/SkillIcon';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaToolbox,
  FaProjectDiagram,
  FaUsers,
  FaJava,
  FaCalendarAlt,
  FaLayerGroup
} from 'react-icons/fa';
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiJira,
  SiFigma,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedux
} from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const detailRef = useRef(null);

  const allSkills = useMemo(() => [
    // Frontend
    { name: 'React', category: 'frontend', proficiency: 95, years: 3, projects: 10, icon: <SiReact />, color: '#61DAFB', description: 'Building dynamic user interfaces with React hooks, context API, and modern component patterns.', relatedProjects: ['University Allocation System', 'Evangadi Forum', "Abe's Garage", 'AI Personal Agent'] },
    { name: 'Next.js', category: 'frontend', proficiency: 85, years: 2, projects: 4, icon: <SiNextdotjs />, color: '#00d2ff', description: 'Server-side rendering, API routes, and static site generation for React applications.', relatedProjects: ['AI Personal Agent'] },
    { name: 'TypeScript', category: 'frontend', proficiency: 90, years: 2, projects: 5, icon: <SiTypescript />, color: '#3178C6', description: 'Type-safe JavaScript development for scalable and maintainable applications.', relatedProjects: ['TMS Platform', 'Mastara (mh)', 'AI Personal Agent'] },
    { name: 'JavaScript', category: 'frontend', proficiency: 95, years: 4, projects: 15, icon: <FaCode />, color: '#F7DF1E', description: 'Expert in ES6+ features, asynchronous programming, DOM, and modern JavaScript patterns.', relatedProjects: ['Evangadi Forum', "Abe's Garage", 'Weather Forecast App'] },
    { name: 'HTML/CSS', category: 'frontend', proficiency: 98, years: 5, projects: 15, icon: <FaLayerGroup />, color: '#E34F26', description: 'Semantic HTML5, CSS3, Flexbox, CSS Grid, animations, and responsive design systems.', relatedProjects: ['Portfolio Website', "Abe's Garage", 'Evangadi Forum'] },
    { name: 'Tailwind CSS', category: 'frontend', proficiency: 88, years: 2, projects: 8, icon: <SiTailwindcss />, color: '#38B2AC', description: 'Utility-first CSS framework for rapid, responsive UI development.', relatedProjects: ['AI Personal Agent'] },

    // Backend
    { name: 'Node.js', category: 'backend', proficiency: 92, years: 3, projects: 12, icon: <SiNodedotjs />, color: '#339933', description: 'Building high-performance server-side applications, REST APIs, and event-driven microservices.', relatedProjects: ['University Allocation System', 'Evangadi Forum', 'TMS Platform'] },
    { name: 'Express', category: 'backend', proficiency: 90, years: 3, projects: 12, icon: <SiExpress />, color: '#64ffda', description: 'Minimalist web framework for Node.js routing, middleware, and API architectures.', relatedProjects: ['University Allocation System', 'Evangadi Forum', "Abe's Garage"] },
    { name: 'Python', category: 'backend', proficiency: 80, years: 2, projects: 3, icon: <SiPython />, color: '#3776AB', description: 'Backend development, automated scripting, algorithms, and data processing.', relatedProjects: ['Algorithm Analysis', 'Data Processing Tools'] },
    { name: 'Java', category: 'backend', proficiency: 75, years: 3, projects: 5, icon: <FaJava />, color: '#007396', description: 'Object-oriented programming, RMI remote objects, RPC, and multithreading.', relatedProjects: ['Global Banking System'] },
    { name: 'C++', category: 'backend', proficiency: 70, years: 2, projects: 2, icon: <SiCplusplus />, color: '#00599C', description: 'System programming, performance-critical applications, and data structure implementations.', relatedProjects: ['Data Structures & Algorithms'] },

    // Database
    { name: 'PostgreSQL', category: 'database', proficiency: 88, years: 2, projects: 9, icon: <SiPostgresql />, color: '#336791', description: 'Advanced SQL, transaction isolation, SELECT FOR UPDATE locking, and relational schema design.', relatedProjects: ['Global Banking System', 'TMS Platform', 'Mastara (mh)'] },
    { name: 'MySQL', category: 'database', proficiency: 88, years: 3, projects: 12, icon: <SiMysql />, color: '#4479A1', description: 'Relational database modeling, query optimization, indexing, and foreign key cascades.', relatedProjects: ['Evangadi Forum', "Abe's Garage"] },
    { name: 'MongoDB', category: 'database', proficiency: 82, years: 2, projects: 7, icon: <SiMongodb />, color: '#47A248', description: 'NoSQL document storage, aggregation pipelines, and flexible data modeling.', relatedProjects: ['AI Personal Agent Backend'] },

    // DevOps & Tools
    { name: 'Docker', category: 'devops', proficiency: 78, years: 1, projects: 4, icon: <SiDocker />, color: '#2496ED', description: 'Containerization, multi-stage Dockerfiles, and environment isolation.', relatedProjects: ['Global Banking System', 'TMS Platform'] },
    { name: 'Git', category: 'tools', proficiency: 95, years: 3, projects: 20, icon: <SiGit />, color: '#F05032', description: 'Version control, Git flow branching strategies, rebasing, and GitHub collaboration.', relatedProjects: ['All Projects', 'Open Source'] },
    { name: 'Jira', category: 'tools', proficiency: 85, years: 2, projects: 15, icon: <SiJira />, color: '#0052CC', description: 'Agile development, scrum sprints, issue tracking, and backlog management.', relatedProjects: ['University Allocation System', 'TMS Platform'] },

    // Design
    { name: 'Figma', category: 'design', proficiency: 80, years: 2, projects: 8, icon: <SiFigma />, color: '#F24E1E', description: 'UI/UX design, interactive prototyping, design tokens, and wireframing.', relatedProjects: ['Mastara App Design', 'Garage System UI'] },
  ], []);

  const handleSelectSkill = (skill) => {
    if (activeSkill?.name === skill.name) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill);
      setTimeout(() => {
        if (detailRef.current) {
          detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
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
              My <span className="highlight">Technology</span> Toolkit
            </h1>

            <p className={styles.heroSubtitle}>
              A comprehensive overview of my technical skills, proficiency levels,
              and hands-on experience with modern technologies. Click any skill icon to view details in the dynamic space below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Skill Icons Grid */}
      <section className={styles.interactive}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Interactive Skill Visualization</h2>
            <p className={styles.sectionDescription}>
              Click on any skill icon to inspect technical details, proficiency, and related projects in the dynamic space below
            </p>
          </div>

          <div className={styles.interactiveGrid}>
            {allSkills.map((skill, index) => {
              const isActive = activeSkill?.name === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -8 }}
                  className={`${styles.interactiveItem} ${isActive ? styles.itemActive : ''}`}
                  style={{ '--skill-color': skill.color }}
                  onClick={() => handleSelectSkill(skill)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectSkill(skill);
                    }
                  }}
                >
                  <SkillIcon
                    skill={skill.name}
                    level={skill.proficiency}
                    category={skill.category}
                    size="medium"
                    interactive={false}
                  />
                  <span className={styles.interactiveName}>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Detail Space: Updates in-place, NOT in a fixed space! */}
          <AnimatePresence mode="wait">
            {activeSkill && (
              <motion.div
                ref={detailRef}
                key={activeSkill.name}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={styles.dynamicDetailPanel}
                style={{ '--skill-color': activeSkill.color }}
              >
                <div className={styles.dynamicDetailHeader}>
                  <div className={styles.dynamicTitleSection}>
                    <div className={styles.dynamicIconWrapper} style={{ color: activeSkill.color }}>
                      {activeSkill.icon}
                    </div>
                    <div>
                      <div className={styles.dynamicTitleRow}>
                        <h3 className={styles.dynamicTitle}>{activeSkill.name}</h3>
                        <span className={styles.dynamicCategory}>{activeSkill.category}</span>
                      </div>
                      <div className={styles.dynamicProgressBarTrack}>
                        <motion.div
                          className={styles.dynamicProgressBarFill}
                          initial={{ width: 0 }}
                          animate={{ width: `${activeSkill.proficiency}%` }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          style={{ backgroundColor: activeSkill.color }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.dynamicCloseBtn}
                    onClick={() => setActiveSkill(null)}
                    aria-label="Close detail"
                  >
                    ×
                  </button>
                </div>

                <div className={styles.dynamicDetailBody}>
                  <p className={styles.dynamicDescription}>{activeSkill.description}</p>

                  <div className={styles.dynamicStatsGrid}>
                    <div className={styles.dynamicStatItem}>
                      <span className={styles.dynamicStatValue} style={{ color: activeSkill.color }}>
                        {activeSkill.proficiency}%
                      </span>
                      <span className={styles.dynamicStatLabel}>Proficiency</span>
                    </div>
                    <div className={styles.dynamicStatItem}>
                      <span className={styles.dynamicStatValue}>{activeSkill.years} Years</span>
                      <span className={styles.dynamicStatLabel}>Experience</span>
                    </div>
                    <div className={styles.dynamicStatItem}>
                      <span className={styles.dynamicStatValue}>{activeSkill.projects} Projects</span>
                      <span className={styles.dynamicStatLabel}>Delivered</span>
                    </div>
                  </div>

                  <div className={styles.dynamicRelatedSection}>
                    <h4 className={styles.dynamicRelatedTitle}>Related Projects</h4>
                    <div className={styles.dynamicProjectsList}>
                      {(activeSkill.relatedProjects || ['Various Projects']).map((projectTitle, index) => (
                        <Link
                          to="/projects"
                          key={index}
                          className={styles.dynamicProjectChip}
                          title={`View ${projectTitle} in Projects`}
                        >
                          {projectTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            <h2 className={styles.ctaTitle}>Ready to Leverage These Skills?</h2>
            <p className={styles.ctaDescription}>
              I'm always excited to apply my technical expertise to new challenges
              and innovative projects.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 

export default Skills;