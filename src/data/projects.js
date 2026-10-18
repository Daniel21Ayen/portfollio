export const projectsData = [
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
    images: ['university-allocation-system.webp'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/newselection',
      demo: 'https://udas-demo.herokuapp.com',
      docs: 'https://github.com/Daniel21Ayen/newselection#readme'
    },
    stats: {
      stars: 12, forks: 4, views: 320,
      linesOfCode: 25000, commits: 140, branches: 4
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
    images: ['globalBanking.webp'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/global-banking-system',
      demo: null,
      docs: 'https://github.com/Daniel21Ayen/global-banking-system#readme'
    },
    stats: {
      stars: 18, forks: 6, views: 410,
      linesOfCode: 15000, commits: 85, branches: 3
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
    fullDescription: 'A fully-functional Q&A platform built for Evangadi Networks, enabling programming students to ask questions and get answers from the community.',
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
    images: ['evangadiforum.webp'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/evangadi-forum',
      demo: 'https://evangadi-forum-tau-one.vercel.app/',
      docs: 'https://github.com/Daniel21Ayen/evangadi-forum#readme'
    },
    stats: {
      stars: 8, forks: 3, views: 240,
      linesOfCode: 8500, commits: 60, branches: 2
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
    fullDescription: "A complete business management system for Abe's Garage that demonstrates the full software development lifecycle from business analysis to deployment.",
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
    images: ['abeGarage.webp'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/AbeGarageProject',
      demo: 'https://abe-garage.herokuapp.com',
      docs: 'https://github.com/Daniel21Ayen/AbeGarageProject#readme'
    },
    stats: {
      stars: 14, forks: 5, views: 360,
      linesOfCode: 35000, commits: 190, branches: 5
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
    fullDescription: 'A full-stack AI-powered personal assistant SaaS application that revolutionizes personal productivity and communication management.',
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
      'AI Personal Agent Dashboard Showcase.png',
      'AI Personal Agent Analytics Dashboard.png'
    ],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/personal-ai-agent',
      demo: 'https://personal-ai-agent.vercel.app',
      docs: 'https://github.com/Daniel21Ayen/personal-ai-agent#readme'
    },
    stats: {
      stars: 26, forks: 9, views: 680,
      linesOfCode: 45000, commits: 210, branches: 6
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
    images: ['weather.webp'],
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
      'tms.webp',
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
      'mastaraAdmin.webp',
      'mastara.webp'
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
];
