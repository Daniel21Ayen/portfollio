import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
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
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(true);

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

  // Mock projects data
  const mockProjects = useMemo(() => [
    {
      id: 1,
      title: 'University Department Allocation System',
      type: 'fullstack',
      featured: true,
      date: '2024-02-15',
      duration: '3 months',
      teamSize: 1,
      status: 'completed',
      progress: 100,
      shortDescription: 'A comprehensive system for allocating freshman students to departments based on GPA, entrance scores, and affirmative action criteria.',
      fullDescription: `A full-stack web application that automates the university department allocation process with:

      • Complex scoring algorithm: 50% GPA + 20% Entrance Exam + 30% COC Exam
      • Affirmative action bonuses (+5 each for female, region, handicap)
      • 20% female quota enforcement
      • Multi-role workflow (Admin, Registrar, Dean, Dept Head, Teacher, Student)
      • Grade approval pipeline with audit trail
      • Real-time countdown timer synchronized with server
      • Preference ranking system with validation
      • Complete audit logging for all actions

      The system handles 70+ functional requirements and includes comprehensive database design with 15+ tables and complete audit trails.`,
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Redis'],
      features: [
        'Complex allocation algorithm with 50% GPA + 20% Entrance + 30% COC',
        'Multi-role workflow with 6 distinct user roles',
        'Grade approval pipeline with audit trail',
        'Real-time countdown timer synchronized with server',
        'Affirmative action bonuses (+5 each for female, region, handicap)',
        '20% female quota enforcement',
        'Preference ranking system with validation',
        'Complete audit logging for all actions',
        '70+ functional requirements implemented',
        '15+ database tables with complex relationships'
      ],
      images: ['university-allocation-system.png'],
      video: null,
      links: {
        github: 'https://github.com/Daniel21Ayen/newselection',
        demo: 'https://udas-demo.herokuapp.com',
        docs: 'https://github.com/Enat-Ena-Liji/newselection#readme'
      },
      stats: {
        stars: 0, forks: 0, views: 0,
        linesOfCode: 25000, commits: 0, branches: 0
      },
      challenges: [
        {
          title: 'Complex allocation algorithm with multiple criteria',
          solution: 'Implemented a scoring system that combines GPA (50%), Entrance Exam (20%), and COC Exam (30%) with affirmative action bonuses, using a preference chaining algorithm that tries each choice sequentially.'
        },
        {
          title: 'Multi-role workflow with strict permissions',
          solution: 'Implemented JWT-based authentication with role-based access control (RBAC) and impersonation capabilities for higher roles.'
        },
        {
          title: 'Real-time deadline enforcement',
          solution: 'Server-synchronized countdown timer with WebSocket connections to prevent local tampering.'
        }
      ],
      complexity: 'high'
    },
    {
      id: 2,
      title: 'Global Banking & Transaction Settlement System',
      type: 'distributed-systems',
      featured: true,
      date: '2024-06-15',
      duration: '5 weeks',
      teamSize: 1,
      status: 'in-progress',
      progress: 75,
      shortDescription: 'A distributed banking system with RMI remote objects, atomic RPC transactions, multi-currency support, clearing house settlement, and role-based security for 4 actors.',
      fullDescription: 'A comprehensive distributed banking platform implementing core financial infrastructure with RMI-based remote objects, atomic RPC transfers, hash-chained audit logs, and a 4-role RBAC system.',
      technologies: [
        'Java 17',
        'RMI (Remote Method Invocation)',
        'RPC (Remote Procedure Call)',
        'JavaFX 21',
        'PostgreSQL 16',
        'Maven Multi-Module',
        'HikariCP',
        'JWT',
        'TOTP (MFA)',
        'Docker',
        'Redis',
        'SLF4J/Logback'
      ],
      features: [
        'RMI remote Account objects with ReentrantReadWriteLock thread safety',
        'Atomic fund transfers with SELECT FOR UPDATE pessimistic locking',
        'Idempotency protection preventing double-spending',
        'Compound interest accrual',
        'Multi-currency conversion with real-time rates and 2% margin',
        'Fee engine: $1 domestic, 2% international, internal transfers free',
        'Clearing House multilateral netting',
        'Hash-chained immutable audit logs (SHA-256)',
        'Anomaly detection: threshold, velocity, geographic rules',
        '4-role RBAC with 25-permission matrix',
        'MFA authentication with TOTP 6-digit codes',
        'High-value transaction approval workflow (>$50K)',
        'Nightly three-way reconciliation',
        'Session-based RMI object binding with 15-minute timeout',
        'Suspicious Activity Report (SAR) generation'
      ],
      images: ['globalBanking.png'],
      video: null,
      links: {
        github: 'https://github.com/Daniel21Ayen/global-banking-system',
        demo: null,
        docs: 'https://github.com/Daniel21Ayen/global-banking-system#readme'
      },
      stats: {
        stars: 0, forks: 0, views: 0,
        linesOfCode: 15000, commits: 0, branches: 0
      },
      challenges: [
        {
          title: 'Atomic transaction integrity across distributed accounts',
          solution: 'Implemented SERIALIZABLE isolation with SELECT FOR UPDATE row-level locking in PostgreSQL, wrapped in Java transaction management with automatic rollback.'
        },
        {
          title: 'Preventing double-spending from network retries',
          solution: 'Designed idempotency management system using UUID-based keys cached for 24 hours.'
        },
        {
          title: 'Thread-safe RMI remote object management',
          solution: 'Used ReentrantReadWriteLock on all Account remote objects.'
        }
      ],
      complexity: 'high'
    },
    {
      id: 3,
      title: 'Evangadi Forum - Programming Q&A Platform',
      type: 'fullstack',
      featured: true,
      date: '2024-01-20',
      duration: '2 weeks',
      teamSize: 1,
      status: 'completed',
      progress: 100,
      shortDescription: 'A community-driven Q&A platform where programming students can ask questions, provide answers, and collaborate on solving coding problems.',
      fullDescription: `A fully-functional Q&A platform built for Evangadi Networks, enabling programming students to ask questions and get answers from the community.`,
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'Bcrypt'],
      features: [
        'Complete user authentication system',
        'Password validation (8+ characters)',
        'Unique email/username enforcement',
        'Questions listed by title with author info',
        'Newest questions appear first',
        'Detailed question view with all answers',
        'Answer posting with author tracking',
        'Ask question page with guided instructions',
        'Protected routes for authenticated users',
        'Responsive mobile-friendly design'
      ],
      images: ['evangadiforum.png'],
      video: null,
      links: {
        github: 'https://github.com/Daniel21Ayen/evangadi-forum',
        demo: 'https://evangadi-forum-tau-one.vercel.app/',
        docs: 'https://github.com/Daniel21Ayen/evangadi-forum#readme'
      },
      stats: {
        stars: 0, forks: 0, views: 0,
        linesOfCode: 8500, commits: 0, branches: 0
      },
      challenges: [
        {
          title: 'Implementing secure authentication with JWT',
          solution: 'Used HTTP-only cookies for JWT storage to prevent XSS attacks, with bcrypt for password hashing.'
        },
        {
          title: 'Maintaining user sessions across pages',
          solution: 'Implemented persistent login state using React Context API with token verification on each protected route.'
        }
      ],
      complexity: 'medium'
    },
    {
      id: 4,
      title: "Abe's Garage - Complete Garage Management System",
      type: 'fullstack',
      featured: true,
      date: '2024-03-01',
      duration: '3 months',
      teamSize: 1,
      status: 'completed',
      progress: 100,
      shortDescription: 'A comprehensive business management system that streamlines garage operations, customer management, order tracking, and service delivery with real business value ROI calculation.',
      fullDescription: `A complete business management system for Abe's Garage that demonstrates the full software development lifecycle from business analysis to deployment.`,
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'JWT', 'AWS', 'Bootstrap'],
      features: [
        'Complete business analysis with $445,750 value calculation',
        'Full system design with microservices architecture',
        'Customer management with vehicle history tracking',
        'Order management with task assignment',
        'Employee management with role-based access',
        'Public pages (Home, About, Services, Contact)',
        'Order tracking without login (unique hash)',
        'Service history and customer retention',
        'AWS deployment with CloudWatch monitoring',
        'Responsive Bootstrap template'
      ],
      images: ['abeGarage.png'],
      video: null,
      links: {
        github: 'https://github.com/Daniel21Ayen/AbeGarageProject',
        demo: 'https://abe-garage.herokuapp.com',
        docs: 'https://github.com/Daniel21Ayen/AbeGarageProject#readme'
      },
      stats: {
        stars: 0, forks: 0, views: 0,
        linesOfCode: 35000, commits: 0, branches: 0
      },
      challenges: [
        {
          title: 'Quantifying business value and ROI',
          solution: 'Conducted thorough workflow analysis and calculated time savings and revenue increases based on realistic assumptions.'
        },
        {
          title: 'Designing microservices architecture for small scale',
          solution: 'Created loosely coupled services that can run on a single server but are structured for easy separation.'
        },
        {
          title: 'Implementing secure order tracking without login',
          solution: 'Generated unique order hashes using UUID v4 with public route /order/:hash.'
        }
      ],
      complexity: 'high'
    },
    {
      id: 5,
      title: 'AI Personal Agent - Full Stack SaaS Application',
      type: 'fullstack',
      featured: true,
      date: '2024-01-15',
      duration: '6 months',
      teamSize: 1,
      status: 'completed',
      progress: 100,
      shortDescription: 'A comprehensive AI-powered personal assistant SaaS that connects Gmail, WhatsApp, Calendar, and Slack to provide intelligent briefings, alerts, AI email drafting, smart replies, and real-time notifications.',
      fullDescription: `A full-stack AI-powered personal assistant SaaS application that revolutionizes personal productivity and communication management.`,
      technologies: [
        'Next.js 16.2.9',
        'React 19.2.4',
        'TypeScript',
        'Tailwind CSS',
        'Clerk Authentication',
        'Convex (Backend)',
        'Google Gemini AI',
        'Gmail API',
        'WhatsApp (Baileys)',
        'Google Calendar API',
        'Socket.IO',
        'Slack API',
        'Date-fns',
        'Lucide Icons'
      ],
      features: [
        'AI-Powered Email Management with priority inbox and Gemini classification',
        'Multi-Platform Integration (Gmail, WhatsApp, Calendar, Slack)',
        'Real-Time Notifications with WebSocket live updates',
        'Advanced Analytics Dashboard with productivity scores and streaks',
        'AI-Generated Email Templates with variable support',
        'Meeting Intelligence (Auto-scheduling, agendas, follow-ups)',
        'Priority Inbox with AI classification',
        'Automated Daily Briefings with actionable items',
        'Real-Time Activity Feed with live updates',
        'Smart Email Drafting with multiple tones',
        'WhatsApp Integration with QR code scanning',
        'Complete Authentication with Clerk and JWT',
        'Advanced Security with encrypted tokens',
        'Dark/Light Mode Support'
      ],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop'
      ],
      video: null,
      links: {
        github: 'https://github.com/Daniel21Ayen/personal-ai-agent',
        demo: 'https://personal-ai-agent.vercel.app',
        docs: 'https://github.com/Daniel21Ayen/personal-ai-agent#readme'
      },
      stats: {
        stars: 0, forks: 0, views: 0,
        linesOfCode: 45000, commits: 0, branches: 0
      },
      challenges: [
        {
          title: 'Complex Multi-Platform Integration',
          solution: 'Implemented unified platform services with standardized interfaces for Gmail, WhatsApp, Calendar, and Slack.'
        },
        {
          title: 'Real-Time Communication',
          solution: 'Built WebSocket server using Socket.IO for real-time messaging with automatic reconnection.'
        },
        {
          title: 'AI-Powered Email Classification',
          solution: 'Integrated Google Gemini AI for priority and category classification.'
        }
      ],
      complexity: 'high'
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      type: 'mobile',
      featured: false,
      date: '2023-07-15',
      duration: '3 weeks',
      teamSize: 1,
      status: 'completed',
      progress: 100,
      shortDescription: 'Mobile weather application with location-based forecasts and alerts.',
      fullDescription: 'A mobile weather application built with React Native that provides location-based forecasts, severe weather alerts, and beautiful UI.',
      technologies: ['React Native', 'Expo', 'OpenWeather API'],
      features: [
        'Location-based forecasts',
        'Severe weather alerts',
        'Beautiful UI/UX',
        'Offline functionality',
        'Push notifications'
      ],
      images: ['https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop'],
      links: {
        github: 'https://github.com/Daniel21Ayen/weather-condition',
        demo: 'https://weather-condition-one.vercel.app',
        docs: null
      },
      stats: {
        stars: 15, forks: 4, views: 430,
        linesOfCode: 3500, commits: 45, branches: 2
      },
      challenges: [
        {
          title: 'Offline data synchronization',
          solution: 'Implemented local storage with periodic sync'
        }
      ],
      complexity: 'low'
    },
    {
      id: 8,
      title: 'Transport Management System (TMS)',
      type: 'fullstack',
      featured: true,
      date: '2026-10-04',
      duration: '16 weeks',
      teamSize: 6,
      status: 'in-progress',
      progress: 65,
      shortDescription: 'Enterprise-grade transport management platform connecting customers, drivers, vendors, and administrators with end-to-end booking, trip execution, payment, and support workflows.',
      fullDescription: 'A comprehensive Transport Management System (TMS) designed for the Ethiopian market (ETB-ready) that connects customers requesting passenger or item transportation with eligible drivers, vehicles, and vendors/suppliers.',
      technologies: [
        'React', 'React Native', 'Node.js', 'TypeScript',
        'PostgreSQL', 'Express', 'Redis', 'Docker',
        'Kubernetes', 'Nginx', 'JWT', 'Prisma',
        'Socket.io', 'Jest', 'Cypress'
      ],
      features: [
        'Multi-role authentication (Customer, Driver, Vendor, Admin, Public Visitor)',
        'Passenger transport request lifecycle management',
        'Item/load transport with pickup, transit, and delivery tracking',
        'Intelligent matching engine with eligibility filtering and ranking',
        'Booking creation, confirmation, and cancellation workflows',
        'Trip execution with milestone tracking',
        'Order management for vendor/supplier operations',
        'Inventory management with reservation and release rules',
        'Fleet and vehicle management with document verification',
        'Payment processing with provider callbacks and idempotency',
        'Wallet system with ledger-backed balances',
        'Real-time messaging between participants',
        'Push, email, and SMS notification delivery',
        'Support ticket system with SLA and escalation',
        'Review and rating system with moderation',
        'Reporting and KPI dashboards with export capabilities',
        'Admin operations dashboard with full platform control',
        'Role-based access control (RBAC) and ownership checks',
        'Comprehensive audit trail for material actions'
      ],
      images: [
        'weather.png',
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop'
      ],
      stats: {
        stars: 47, forks: 12, views: 1240,
        linesOfCode: 48500, commits: 342, branches: 8,
        contributors: 6, openIssues: 23, closedIssues: 187,
        pullRequests: 94, testCoverage: 78
      },
      challenges: [
        {
          title: 'Concurrent booking conflicts',
          solution: 'Implemented server-side availability revalidation with database-level locking.'
        },
        {
          title: 'Payment idempotency and duplicate callbacks',
          solution: 'Designed provider callback handler with signature verification and idempotency keys.'
        },
        {
          title: 'Multi-role authorization complexity',
          solution: 'Built centralized RBAC middleware with resource ownership checks.'
        },
        {
          title: 'Real-time location tracking at scale',
          solution: 'Implemented WebSocket-based location updates with Redis pub/sub.'
        },
        {
          title: 'Financial ledger consistency',
          solution: 'Adopted double-entry ledger pattern with atomic transactions.'
        }
      ],
      complexity: 'high',
      links: {
        github: 'https://github.com/Daniel21Ayen/TMS-platform',
        demo: 'https://text.vercel.app/',
        docs: null
      }
    },
    {
      id: 9,
      title: 'Mastara (mh) - Academic Learning Platform',
      type: 'fullstack',
      featured: true,
      date: '2026-10-06',
      duration: '36 weeks',
      teamSize: 8,
      status: 'in-progress',
      progress: 45,
      shortDescription: 'A paid, bilingual, offline-first academic platform for Ethiopian university freshmen with device binding, entitlement-based access, and admin-managed content.',
      fullDescription: 'Mastara (mh) is a comprehensive paid, bilingual (English + Amharic), offline-first academic platform designed specifically for Ethiopian university freshmen.',
      technologies: [
        'React Native', 'NestJS', 'PostgreSQL', 'Redis',
        'TypeScript', 'SQLite', 'Object Storage', 'KaTeX',
        'NotoSansEthiopic', 'Android Keystore', 'iOS Keychain',
        'UUIDv7', 'JWT', 'NetInfo', 'WebP', 'JPEG', 'LaTeX'
      ],
      features: [
        'Bilingual support (English + Amharic)',
        'Offline-first learning with zero answer loss',
        'One student account = one bound physical device',
        'Secure device ID from Android Keystore / iOS Keychain',
        'University → Program → Semester → Course hierarchy',
        'Material: Modules, Notes, Amharic Note',
        'Tests: Practice & Quiz 1, Quiz 2, Quiz 3',
        'Exams: Mid, Final, Mock Exam',
        'COC Exam available from Home',
        'Entitlement-based access with Admin-managed duration',
        'Automatic expiry and content locking',
        'Manual payment proof with screenshot upload',
        'Receipt compression below 300 KB',
        'Admin payment verification queue',
        'Admin image scanning and image-to-PDF conversion',
        'Offline answer persistence to encrypted SQLite',
        'Monotonic timer for exams', 
        'Bilingual STEM/LaTeX rendering offline',
        'Learning status and progress tracking',
        'App package size < 50 MB (hard release gate)'
      ],
      images: [
        'mastaraAdmin.png',
        'mastara.png'
      ],
      stats: {
        stars: 34, forks: 8, views: 890,
        linesOfCode: 62000, commits: 478, branches: 12,
        contributors: 8, openIssues: 31, closedIssues: 256,
        pullRequests: 142, testCoverage: 82
      },
      challenges: [
        {
          title: 'One-device binding enforcement',
          solution: 'Implemented secure device ID from Android Keystore/iOS Keychain with server-side binding validation.'
        },
        {
          title: 'Zero answer loss during offline learning',
          solution: 'Built encrypted SQLite persistence with immediate write and UUIDv7 outbox queue.'
        },
        {
          title: 'Monotonic exam timer integrity',
          solution: 'Used Android SystemClock.elapsedRealtime() for elapsed time tracking.'
        },
        {
          title: 'Bilingual STEM rendering offline',
          solution: 'Bundled local KaTeX math fonts and NotoSansEthiopic without CDN dependency.'
        },
        {
          title: 'App size under 50 MB hard limit',
          solution: 'Externalized all textbook chapters to object storage with on-demand download.'
        }
      ],
      complexity: 'very-high',
      links: {
        github: 'https://github.com/Daniel21Ayen/Mastara',
        demo: null,
        docs: null
      }
    }
  ], []);

  // Load projects
  useEffect(() => {
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
  }, [mockProjects]);

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

      {/* Projects Display */}
      <section className={styles.display}>
        <div className="container">
          <div className={styles.displayHeader}>
            <h2 className={styles.displayTitle}>
              Showing {filteredProjects.length} of {projects.length} Projects
            </h2>
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
                      <ProjectCard project={project} />
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
                              <span key={tech} className={styles.techTag}>
                                {tech}
                              </span>
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
              <a href="/contact" className="btn btn-primary">
                Start a Conversation
              </a>
              <a href="/skills" className="btn btn-outline">
                View My Skills
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;