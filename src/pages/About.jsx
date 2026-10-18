import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, FaUniversity, FaLaptopCode, FaRocket,
  FaLightbulb, FaFileDownload, FaEye, FaGraduationCap,
  FaBriefcase, FaCodeBranch, FaCalendarAlt, FaCheckCircle
} from 'react-icons/fa';
import { downloadResumePdf, viewResumePdf } from '../utils/resume';
import styles from './About.module.css';
import profilePic from '../assets/Images/8mg/about-pro.webp';

const About = () => {
  const timelineData = [
    {
      role: 'B.Sc. in Software Engineering (Candidate)',
      organization: 'Injibara University, Ethiopia',
      period: '2022 - 2026 (Expected)',
      icon: <FaGraduationCap />,
      description: 'Undergraduate study emphasizing software engineering methodology, data structures, algorithms, operating systems, and distributed system design.',
      highlights: [
        'Advanced coursework in Database Management, Computer Networks, and Object-Oriented Analysis & Design',
        'Academic project lead for multi-criteria University Department Selection System',
        'Collaborative peer coding mentor and active participant in university technology seminars'
      ],
      tags: ['Software Engineering', 'Algorithms', 'Databases', 'System Design', 'OOP']
    },
    {
      role: 'Full-Stack Software Engineer & Project Lead',
      organization: 'Independent / Production Projects',
      period: '2024 - Present',
      icon: <FaBriefcase />,
      description: 'Architecting and building production web applications, distributed systems, and real-time platforms with modern React, Node.js, Java, and PostgreSQL stacks.',
      highlights: [
        'Engineered University Department Allocation System handling 70+ functional specs and multi-role RBAC workflows',
        'Built Global Banking prototype with RMI remote objects, atomic fund transfers, and SHA-256 hash-chained audit trails',
        'Developed TMS logistics system and Evangadi Forum clone with robust API layers and secure authentication'
      ],
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Java', 'Docker', 'REST APIs']
    },
    {
      role: 'Open-Source & Developer Community Contributor',
      organization: 'Global Developer Community & GitHub',
      period: '2023 - Present',
      icon: <FaCodeBranch />,
      description: 'Creating open-source repositories, developer tools, and clean architectures with a focus on code maintainability and accessibility.',
      highlights: [
        'Actively publishing full-stack repositories on GitHub with comprehensive documentation',
        'Advocating for modern web standards, performance optimization, and clean architectural patterns',
        'Building community-driven solutions to empower underrepresented tech talents'
      ],
      tags: ['Git', 'GitHub', 'CI/CD', 'Open Source', 'UI/UX Design', 'Mentorship']
    }
  ];

  return ( 
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              className={styles.imageContainer}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={profilePic}
                  alt="Daniel - Software Engineering Student & Full-Stack Developer"
                  className={styles.image}
                />
              </div>
            </motion.div>

            {/* Right: Centered text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={styles.content}
            >
              <h1 className={styles.title}>
                Passionate <span className="highlight">Software Engineer</span> & Problem Solver
              </h1>
              
              <p className={styles.subtitle}>
                With a strong foundation in full-stack development, I specialize in building scalable, 
                user-centric web applications that blend creativity with technical excellence.
                My career goal is to become a senior software engineer at an innovative company,
                perhaps in the fintech or edtech space, while contributing to open-source projects
                that empower underrepresented communities in Africa.
                I'm always eager to connect, collaborate, or discuss ideas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className={styles.personalInfo}>
        <div className="container">
          <div className={styles.infoGrid}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>
                <FaUniversity />
              </div>
              <h3>Injibara University</h3>
              <p>Bachelor of Science in Software Engineering</p>
              <span className={styles.infoDetail}>2022 - 2026 (Expected)</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>
                <FaLaptopCode />
              </div>
              <h3>Full Stack Focus</h3>
              <p>React, Node.js, Python, Databases</p>
              <span className={styles.infoDetail}>3+ Years Experience</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.infoCard}
            >
              <div className={styles.infoIcon}>
                <FaRocket />
              </div>
              <h3>Career Goals</h3>
              <p>Senior Full Stack Developer</p>
              <span className={styles.infoDetail}>Tech Lead & Mentor</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Journey */}
      <section className={styles.timelineSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.timelineHeader}
          >
            <h2 className={styles.timelineTitle}>
              Education & <span className="highlight">Journey</span>
            </h2>
            <p className={styles.timelineSubtitle}>
              My academic progression, professional milestones, and engineering experience
            </p>
          </motion.div>

          <div className={styles.timeline}>
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={styles.timelineItem}
              >
                <div className={styles.timelineDot}>
                  {item.icon}
                </div>
                <div className={styles.timelineCard}>
                  <div className={styles.timelineCardHeader}>
                    <h3 className={styles.timelineRole}>{item.role}</h3>
                    <span className={styles.timelinePeriod}>
                      <FaCalendarAlt /> {item.period}
                    </span>
                  </div>
                  <div className={styles.timelineOrg}>{item.organization}</div>
                  <p className={styles.timelineDescription}>{item.description}</p>
                  
                  <ul className={styles.timelineHighlights}>
                    {item.highlights.map((h, i) => (
                      <li key={i} className={styles.timelineHighlight}>
                        <FaCheckCircle className={styles.timelineHighlightIcon} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.timelineTags}>
                    {item.tags.map((tag, i) => (
                      <span key={i} className={styles.timelineTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.philosophy}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.philosophyContent}
          >
            <div className={styles.philosophyIcon}>
              <FaLightbulb />
            </div>
            <h2 className={styles.philosophyTitle}>My Development Philosophy</h2>
            <p className={styles.philosophyText}>
              I believe in writing clean, maintainable code that not only solves problems 
              but also creates delightful user experiences. Every line of code should have 
              a purpose, and every feature should provide value. I'm passionate about 
              continuous learning and believe that the best developers are those who 
              never stop growing.
            </p>
            <div className={styles.principles}>
              <div className={styles.principle}>
                <span>01</span>
                <h4>User-Centric Design</h4>
                <p>Always prioritize the end-user experience</p>
              </div>
              <div className={styles.principle}>
                <span>02</span>
                <h4>Clean Code</h4>
                <p>Write code that others can read and maintain</p>
              </div>
              <div className={styles.principle}>
                <span>03</span>
                <h4>Continuous Learning</h4>
                <p>Stay updated with emerging technologies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section className={styles.resumeSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.resumeContent}
          >
            <div className={styles.resumeIcon}>
              <FaFileDownload />
            </div>
            <h2 className={styles.resumeTitle}>Download My Resume</h2>
            <p className={styles.resumeText}>
              Get a detailed overview of my experience, skills, and achievements.
              Available in PDF format for easy viewing and printing.
            </p>
            <div className={styles.resumeActions}>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResumePdf}
                className={styles.resumeDownloadBtn}
              >
                <FaFileDownload />
                <span>Download PDF</span>
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={viewResumePdf}
                className={styles.resumeViewBtn}
              >
                <FaEye />
                <span>View Online</span>
              </motion.button>
            </div> 
          </motion.div>
        </div>
      </section>
    </div>
  );
}; 
 
export default About;