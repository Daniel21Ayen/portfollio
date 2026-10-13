import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/common/ProjectCard';
import {FaCode,FaSearch,FaStar,FaFire,FaCalendarAlt,FaLayerGroup,FaServer,FaMobileAlt,FaDatabase} from 'react-icons/fa';
import {SiReact,SiNodedotjs} from 'react-icons/si';
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
  const projectsPerPage = 9;

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
    images: ['https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/newselection',
      demo: 'https://udas-demo.herokuapp.com',
      docs: 'https://github.com/Enat-Ena-Liji/newselection#readme'
    },
    stats: {
      stars: 0,
      forks: 0,
      views: 0,
      linesOfCode: 25000,
      commits: 0,
      branches: 0
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
//   {
//       id: 1,
//       title: 'E-Commerce Platform',
//       type: 'fullstack',
//       featured: true,
//       date: '2024-01-15',
//       duration: '3 months',
//       teamSize: 3,
//       status: 'completed',
//       progress: 100,
//       shortDescription: 'A full-featured e-commerce platform with real-time inventory management and payment integration.',
//       fullDescription: 'This project involved building a complete e-commerce solution from scratch. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard.',
//       technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
//       features: [
//         'User authentication with JWT',
//         'Real-time inventory management',
//         'Payment processing with Stripe',
//         'Admin dashboard with analytics',
//         'Responsive design for all devices'
//       ],
//       images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop'],
//       video: null,
//       links: {
//         github: 'https://github.com',
//         demo: 'https://weather-condition-one.vercel.app',
//         docs: null
//       },
//       stats: {
//         stars: 45,
//         forks: 12,
//         views: 1200,
//         linesOfCode: 15000,
//         commits: 156,
//         branches: 8
//       },
//       challenges: [
//         {
//           title: 'Real-time inventory sync',
//           solution: 'Implemented WebSocket connections and database transactions'
//         }
//       ],
//       complexity: 'high'
//  },

{
  "id": 2,
  "title": "Global Banking & Transaction Settlement System",
  "type": "distributed-systems",
  "featured": true,
  "date": "2024-06-15",
  "duration": "5 weeks",
  "teamSize": 1,
  "status": "in-progress",
  "progress": 75,
  "shortDescription": "A distributed banking system with RMI remote objects, atomic RPC transactions, multi-currency support, clearing house settlement, and role-based security for 4 actors.",
  "fullDescription": "A comprehensive distributed banking platform implementing core financial infrastructure with:\n\n• RMI-based remote Account objects with thread-safe balance operations and daily compound interest accrual\n• Atomic RPC fund transfers with SERIALIZABLE database isolation, idempotency protection, and automatic rollback\n• Multi-currency support with real-time exchange rates, 2% margin, and 5-minute rate caching\n• Fee calculation engine: $1 domestic, 2% international (min $5, max $100), waived for internal transfers\n• Clearing House batch settlement with multilateral netting: NPᵢ = Σ(PaymentsIn) - Σ(PaymentsOut)\n• Hash-chained immutable audit logs with SHA-256 integrity verification\n• Anomaly detection: $10K threshold, velocity checks, geographic analysis, device fingerprinting\n• 4-role RBAC: Customer (transfers up to $10K), Teller (KYC, freeze, $50K approval), Admin (config, reconciliation), Auditor (logs, SAR reports)\n• Nightly three-way reconciliation verifying database = RMI objects = bank reserves\n• MFA authentication with TOTP codes, JWT tokens (15min expiry), and session-based RMI binding\n\nThe system implements 25 functional requirements across 9 database tables with complete audit trails and supports 60+ actor activities through JavaFX desktop interfaces.",
  "technologies": [
    "Java 17",
    "RMI (Remote Method Invocation)",
    "RPC (Remote Procedure Call)",
    "JavaFX 21",
    "PostgreSQL 16",
    "Maven Multi-Module",
    "HikariCP",
    "JWT",
    "TOTP (MFA)",
    "Docker",
    "Redis",
    "SLF4J/Logback"
  ],
  "features": [
    "RMI remote Account objects with ReentrantReadWriteLock thread safety",
    "Atomic fund transfers with SELECT FOR UPDATE pessimistic locking",
    "Idempotency protection preventing double-spending (24hr key cache)",
    "Compound interest accrual: A = P(1 + r/365)^(365t) daily at 00:00 UTC",
    "Multi-currency conversion with real-time rates and 2% margin",
    "Fee engine: $1 domestic, 2% international, internal transfers free",
    "Clearing House multilateral netting: NP = ΣIn - ΣOut",
    "Hash-chained immutable audit logs (SHA-256 blockchain-style)",
    "Anomaly detection: threshold, velocity, geographic, time-based rules",
    "4-role RBAC with 25-permission matrix",
    "MFA authentication with TOTP 6-digit codes (30-second refresh)",
    "High-value transaction approval workflow (>$50K)",
    "Account freeze/unfreeze with audit trail and reason codes",
    "Nightly three-way reconciliation (DB = RMI = Reserves)",
    "Dynamic configuration hot-reload without server restart",
    "Session-based RMI object binding with 15-minute timeout",
    "KYC verification workflow with 5 status states",
    "Suspicious Activity Report (SAR) generation",
    "Real-time system health monitoring dashboard",
    "25 functional requirements across 9 database tables",
    "60+ actor activities mapped to RPC/RMI protocols",
    "JavaFX desktop GUI with role-based sidebar navigation",
    "4 Maven modules: Contracts, Persistence, Engine, Client"
  ],
  "images": [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop"
  ],
  "video": null,
  "links": {
    "github": "https://github.com/Daniel21Ayen/global-banking-system",
    "demo": null,
    "docs": "https://github.com/Daniel21Ayen/global-banking-system#readme"
  },
  "stats": {
    "stars": 0,
    "forks": 0,
    "views": 0,
    "linesOfCode": 15000,
    "commits": 0,
    "branches": 0
  },
  "challenges": [
    {
      "title": "Atomic transaction integrity across distributed accounts",
      "solution": "Implemented SERIALIZABLE isolation with SELECT FOR UPDATE row-level locking in PostgreSQL, wrapped in Java transaction management with automatic rollback. Combined with Redis distributed locks for cross-node operations to guarantee zero money loss or duplication."
    },
    {
      "title": "Preventing double-spending from network retries",
      "solution": "Designed idempotency management system using UUID-based keys cached for 24 hours. Duplicate requests return the original cached response without re-executing the transfer. Implemented both in-memory ConcurrentHashMap and Redis-backed cache for production readiness."
    },
    {
      "title": "Thread-safe RMI remote object management",
      "solution": "Used ReentrantReadWriteLock on all Account remote objects, allowing concurrent reads (balance checks) while serializing writes (transfers). Combined with database-level pessimistic locking to prevent race conditions across multiple server nodes."
    },
    {
      "title": "Building hash-chained immutable audit logs",
      "solution": "Implemented SHA-256 hash chaining where each audit log entry contains hash(current_data + previous_hash). This creates a blockchain-style tamper-evident audit trail. PostgreSQL triggers automatically calculate and store the hash on every INSERT."
    },
    {
      "title": "Designing a clean 4-module Maven architecture",
      "solution": "Separated into bank-shared-contracts (interfaces, DTOs, exceptions), bank-persistence-postgres (repositories, connection pooling), bank-server-engine (RMI/RPC implementations, business logic, security), and bank-client-javafx (GUI). This enforces dependency inversion and allows independent testing of each layer."
    }
  ],
  "architecture": {
    "layers": [
      {
        "name": "Shared Contracts Layer",
        "description": "Interfaces (IAccountRemote), DTOs (TransactionRequest, AccountStatement), Exceptions (40 error codes), Enums (ActorRole, TransactionStatus) - No business logic, pure contracts",
        "technology": "Java Interfaces, Serializable DTOs"
      },
      {
        "name": "Persistence Layer",
        "description": "PostgreSQL with HikariCP connection pooling (20 connections), Flyway migrations, Repository pattern with SELECT FOR UPDATE locking, hash-chained audit triggers",
        "technology": "PostgreSQL 16, HikariCP 5.1, JDBC"
      },
      {
        "name": "Business Logic Layer",
        "description": "RMI Remote Objects (thread-safe accounts), RPC Services (atomic transfers, idempotency), Security (MFA, RBAC, JWT), Background Jobs (interest accrual, reconciliation, anomaly detection)",
        "technology": "Java RMI, Java RPC, JWT, TOTP"
      },
      {
        "name": "Presentation Layer",
        "description": "JavaFX desktop application with FXML layouts, role-based sidebar navigation, 5 distinct dashboards (Login, Customer, Teller, Admin, Auditor), CSS styling with dark/light themes",
        "technology": "JavaFX 21, FXML, CSS"
      }
    ],
    "database": {
      "tables": 9,
      "tablesList": [
        "users (authentication, profiles, KYC status)",
        "accounts (balances, interest rates, limits, freeze status)",
        "transactions (immutable ledger, idempotency, hash chain)",
        "audit_logs (append-only, hash-chained, JSONB details)",
        "sessions (JWT tokens, RMI bindings, activity tracking)",
        "system_config (hot-reload parameters, audit trail)",
        "reconciliation_logs (daily balance verification)",
        "notification_queue (async email/SMS/push queue)",
        "exchange_rates (cached currency rates, 5-min refresh)"
      ]
    }
  },
  "functionalRequirements": 25,
  "actorActivities": 40,
  "systemProcesses": 8,
  "roles": [
    {
      "name": "Customer",
      "activities": 12,
      "permissions": ["View Balance", "Transfer ≤$10K", "View Statement", "Preview Interest", "Verify Recipient", "Update Profile"]
    },
    {
      "name": "Bank Teller",
      "activities": 12,
      "permissions": ["Search Customer", "Verify KYC", "Process Cash", "Freeze/Unfreeze Account", "Approve ≤$50K", "Resolve Exceptions"]
    },
    {
      "name": "System Admin",
      "activities": 8,
      "permissions": ["Monitor Health", "Update Config", "Manage RMI", "Run Reconciliation", "View Logs", "Manage Backups"]
    },
    {
      "name": "Security Auditor",
      "activities": 8,
      "permissions": ["View Audit Logs", "Review Anomalies", "Verify Integrity", "Generate SAR", "Issue Reports", "Investigate Accounts"]
    }
  ],
  "complexity": "high",
  "goldenRule": "Σ(All Account Balances) + Σ(Pending Transactions) = Total Bank Reserves",
  "keyFormulas": [
    "Compound Interest: A = P(1 + r/365)^(365t)",
    "Netting Position: NPᵢ = Σ(PaymentsInᵢⱼ) - Σ(PaymentsOutⱼᵢ)",
    "Fee: International = max($5, min($100, amount × 2%))",
    "Audit Hash: Hₙ = SHA256(Hₙ₋₁ + dataₙ)",
    "Balance: B_available = B_current - Pending_debits"
  ]
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
    fullDescription: `A fully-functional Q&A platform built for Evangadi Networks, enabling programming students to ask questions and get answers from the community.

Key Features:
• Secure user authentication with signup/login
• Password validation (minimum 8 characters)
• Unique email and username enforcement
• Questions listing with newest first
• Question titles displayed with author usernames
• Detailed question view with full description
• Answer posting system with author tracking
• Ask question page with guided instructions
• Persistent user sessions across pages
• Responsive design for all devices

The platform follows Stack Overflow-style conventions and provides an intuitive interface for students to collaborate on programming problems. Users can only post questions and answers when logged in, ensuring accountability and quality content.`,
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
    images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop'],
    video: null,
    links: {
      github: 'https://github.com/yourusername/evangadi-forum',
      demo: 'https://evangadi-forum-tau-one.vercel.app/',
      docs: 'https://github.com/yourusername/evangadi-forum#readme'
    },
    stats: {
      stars: 0,
      forks: 0,
      views: 0,
      linesOfCode: 8500,
      commits: 0,
      branches: 0
    },
    challenges: [
      {
        title: 'Implementing secure authentication with JWT',
        solution: 'Used HTTP-only cookies for JWT storage to prevent XSS attacks, with bcrypt for password hashing and proper validation middleware.'
      },
      {
        title: 'Maintaining user sessions across pages',
        solution: 'Implemented persistent login state using React Context API with token verification on each protected route.'
      },
      {
        title: 'Real-time question ordering',
        solution: 'Questions are fetched from MySQL with ORDER BY created_at DESC to ensure newest questions appear first, with proper indexing for performance.'
      }
    ],
    complexity: 'medium'
  },
  
     {
    id: 4,
    title: 'Abe\'s Garage - Complete Garage Management System',
    type: 'fullstack',
    featured: true,
    date: '2024-03-01',
    duration: '3 months',
    teamSize: 1,
    status: 'completed',
    progress: 100,
    shortDescription: 'A comprehensive business management system that streamlines garage operations, customer management, order tracking, and service delivery with real business value ROI calculation.',
    fullDescription: `A complete business management system for Abe's Garage that demonstrates the full software development lifecycle from business analysis to deployment.

**Business Analysis & Value Proposition:**
• Identified 7 major business problems through workflow observation
• Calculated $445,750 total value added over 5 years
• $260,000 from customer retention (10% return rate)
• $120,000 from new customer acquisition (5 additional customers/month)
• $40,625 from customer time savings (15 mins per visit)
• $16,250 from manager time savings (30 mins/day)
• $7,800 from reduced phone calls (8 calls/day)
• $1,075 from automated receipt generation
• Fair project price: $18,000 (20% of net profit)

**System Architecture:**
• Microservices architecture with 6 core services
• RESTful API design with JWT authentication
• AWS EC2 hosting with CloudWatch monitoring
• MySQL database with 7+ tables and relationships
• Bootstrap 5 template with custom modifications

**Core Features:**
• Public-facing pages (Home, About, Services, Contact)
• Employee management with role-based access
• Customer management with vehicle history
• Order management with task assignment
• Service catalog with pricing and estimates
• Order tracking with unique hash (no login required)
• Responsive design for all devices

**Technical Implementation:**
• 50+ RESTful API endpoints
• 15+ database tables with foreign key constraints
• JWT authentication with HTTP-only cookies
• Bcrypt password hashing
• Comprehensive error handling and logging
• Git version control with feature branching
• AWS deployment with automated backups`,
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
    images: ['https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&auto=format&fit=crop'],
    video: null,
    links: {
      github: 'https://github.com/Daniel21Ayen/AbeGarageProject',
      demo: 'https://abe-garage.herokuapp.com',
      docs: 'https://github.com/Daniel21Ayen/AbeGarageProject#readme'
    },
    stats: {
      stars: 0,
      forks: 0,
      views: 0,
      linesOfCode: 35000,
      commits: 0,
      branches: 0
    },
    challenges: [
      {
        title: 'Quantifying business value and ROI',
        solution: 'Conducted thorough workflow analysis, interviewed stakeholders, calculated time savings and revenue increases based on realistic assumptions, resulting in a $445,750 value proposition.'
      },
      {
        title: 'Designing microservices architecture for small scale',
        solution: 'Created loosely coupled services (Auth, Employees, Customers, Orders, Services, Vehicles) that can run on a single server but are structured for easy separation as the business grows.'
      },
      {
        title: 'Implementing secure order tracking without login',
        solution: 'Generated unique order hashes using UUID v4, stored in database with expiration, and created public route /order/:hash for customers to check status without authentication.'
      },
      {
        title: 'Role-based access control with JWT',
        solution: 'Implemented JWT tokens with role claims, middleware to check permissions for each route, and different dashboard views based on user role (Admin, Manager, Staff).'
      }
    ],
    complexity: 'high'
  },
 
    // {
    //   id: 3,
    //   title: 'AI-Powered Analytics Dashboard',
    //   type: 'frontend',
    //   featured: false,
    //   date: '2024-02-01',
    //   duration: '1.5 months',
    //   teamSize: 1,
    //   status: 'in-progress',
    //   progress: 75,
    //   shortDescription: 'Dashboard for visualizing AI model predictions with interactive charts and real-time data.',
    //   fullDescription: 'An advanced analytics dashboard built with React and TypeScript for visualizing machine learning model predictions and real-time data streams.',
    //   technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Tailwind'],
    //   features: [
    //     'Interactive data visualizations',
    //     'Real-time data updates',
    //     'Custom chart configurations',
    //     'Export functionality',
    //     'Responsive design'
    //   ],
    //   images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop'],
    //   stats: {
    //     stars: 18,
    //     forks: 5,
    //     views: 560,
    //     linesOfCode: 6500,
    //     commits: 67,
    //     branches: 4
    //   },
    //   challenges: [
    //     {
    //       title: 'Real-time data synchronization',
    //       solution: 'Implemented WebSocket connections with automatic reconnection'
    //     }
    //   ],
    //   complexity: 'high'
    // },
    {
  "id": 5,
  "title": "AI Personal Agent - Full Stack SaaS Application",
  "type": "fullstack",
  "featured": true,
  "date": "2024-01-15",
  "duration": "6 months",
  "teamSize": 1,
  "status": "completed",
  "progress": 100,
  "shortDescription": "A comprehensive AI-powered personal assistant SaaS that connects Gmail, WhatsApp, Calendar, and Slack to provide intelligent briefings, alerts, AI email drafting, smart replies, and real-time notifications.",
  "fullDescription": `A full-stack AI-powered personal assistant SaaS application that revolutionizes personal productivity and communication management with:

    • AI-Powered Email Management: Intelligent priority inbox with Gemini AI classification, smart replies, and automated email drafting with multiple tones
    • Multi-Platform Integration: Seamless connection to Gmail, WhatsApp, Google Calendar, and Slack with real-time synchronization
    • Real-Time Notifications: WebSocket-based live notifications, typing indicators, and online/offline presence
    • Advanced Analytics Dashboard: Comprehensive metrics including productivity scores, communication patterns, streaks, and AI-generated recommendations
    • Email Templates System: AI-generated templates with variable support, categories, and usage tracking
    • Meeting Intelligence: Auto-scheduling, AI-generated meeting agendas, and automated follow-up emails
    • Priority Inbox: AI-powered email classification with priority and category detection (work/personal/social/promotional)
    • Automated Daily Briefings: AI-generated summaries of emails, messages, and calendar events with actionable items
    • Real-Time Activity Feed: Live updates of all user activities across platforms
    • Complete Authentication: Clerk-powered authentication with JWT and role-based access control

The system handles complex integrations with multiple external APIs and includes comprehensive analytics with visual dashboards and AI-powered insights.`,
  "technologies": [
    "Next.js 16.2.9",
    "React 19.2.4",
    "TypeScript",
    "Tailwind CSS",
    "Clerk Authentication",
    "Convex (Backend)",
    "Google Gemini AI",
    "Gmail API",
    "WhatsApp (Baileys)",
    "Google Calendar API",
    "Socket.IO",
    "Slack API",
    "Date-fns",
    "Lucide Icons"
  ],
  "features": [
    "AI-Powered Email Management with priority inbox and Gemini classification",
    "Multi-Platform Integration (Gmail, WhatsApp, Calendar, Slack)",
    "Real-Time Notifications with WebSocket live updates",
    "Advanced Analytics Dashboard with productivity scores and streaks",
    "AI-Generated Email Templates with variable support and categories",
    "Meeting Intelligence (Auto-scheduling, agendas, follow-ups)",
    "Priority Inbox with AI classification and category detection",
    "Automated Daily Briefings with actionable items",
    "Real-Time Activity Feed with live updates",
    "Smart Email Drafting with multiple tones and AI generation",
    "WhatsApp Integration with QR code scanning and real-time messaging",
    "Calendar Integration with event management and smart scheduling",
    "Email Templates System with usage tracking and favorites",
    "Analytics Dashboard with communication patterns and insights",
    "Complete Authentication with Clerk and JWT",
    "Real-Time Typing Indicators and Online/Offline Presence",
    "Advanced Security with encrypted tokens and secure OAuth",
    "Responsive Dashboard with modern UI/UX",
    "Dark/Light Mode Support"
  ],
  "images": [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop"
  ],
  "video": null,
  "links": {
    "github": "https://github.com/Daniel21Ayen/personal-ai-agent",
    "demo": "https://personal-ai-agent.vercel.app",
    "docs": "https://github.com/Daniel21Ayen/personal-ai-agent#readme"
  },
  "stats": {
    "stars": 0,
    "forks": 0,
    "views": 0,
    "linesOfCode": 45000,
    "commits": 0,
    "branches": 0
  },
  "challenges": [
    {
      "title": "Complex Multi-Platform Integration",
      "solution": "Implemented unified platform services with standardized interfaces for Gmail, WhatsApp, Calendar, and Slack. Used OAuth 2.0 for Google services and Baileys library for WhatsApp, with real-time synchronization and error handling."
    },
    {
      "title": "Real-Time Communication",
      "solution": "Built WebSocket server using Socket.IO for real-time messaging, typing indicators, and presence detection. Implemented automatic reconnection and offline message queuing."
    },
    {
      "title": "AI-Powered Email Classification",
      "solution": "Integrated Google Gemini AI for priority and category classification with custom prompts for accurate detection of work, personal, social, and promotional emails."
    },
    {
      "title": "Multi-Platform Authentication",
      "solution": "Used Clerk for unified authentication across all platforms with OAuth providers and JWT token management for secure API access."
    },
    {
      "title": "Real-Time Data Synchronization",
      "solution": "Leveraged Convex as backend with real-time subscriptions for instant updates across all connected clients, ensuring consistent data states."
    }
  ],
  "complexity": "high"
},
    // {
    //   id: 4,
    //   title: 'Task Management System',
    //   type: 'fullstack',
    //   featured: false,
    //   date: '2023-09-10',
    //   duration: '1 month',
    //   teamSize: 1,
    //   status: 'completed',
    //   progress: 100,
    //   shortDescription: 'Collaborative task management system with drag-and-drop interface.',
    //   fullDescription: 'A collaborative task management system with drag-and-drop functionality, team collaboration features, and real-time updates.',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    //   features: [
    //     'Drag-and-drop interface',
    //     'Team collaboration',
    //     'Real-time updates',
    //     'File attachments',
    //     'Progress tracking'
    //   ],
    //   images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop'],
    //   stats: {
    //     stars: 25,
    //     forks: 6,
    //     views: 720,
    //     linesOfCode: 5000,
    //     commits: 82,
    //     branches: 3
    //   },
    //   challenges: [
    //     {
    //       title: 'Drag-and-drop performance',
    //       solution: 'Optimized with React DnD and virtual scrolling'
    //     }
    //   ],
    //   complexity: 'medium'
    // },
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
        stars: 15,
        forks: 4,
        views: 430,
        linesOfCode: 3500,
        commits: 45,
        branches: 2
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
  fullDescription: 'A comprehensive Transport Management System (TMS) designed for the Ethiopian market (ETB-ready) that connects customers requesting passenger or item transportation with eligible drivers, vehicles, and vendors/suppliers. The platform provides request discovery, intelligent matching, booking, trip execution, item/load handling, real-time messaging, notifications, payments/wallets, reviews, support ticketing, reporting, and full administrative control across web, mobile, and admin applications.',
  technologies: [
    'React',
    'React Native',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Express',
    'Redis',
    'Docker',
    'Kubernetes',
    'Nginx',
    'JWT',
    'Prisma',
    'Socket.io',
    'Jest',
    'Cypress'
  ],
  features: [
    'Multi-role authentication (Customer, Driver, Vendor, Admin, Public Visitor)',
    'Passenger transport request lifecycle management',
    'Item/load transport with pickup, transit, and delivery tracking',
    'Intelligent matching engine with eligibility filtering and ranking',
    'Booking creation, confirmation, and cancellation workflows',
    'Trip execution with milestone tracking (Planned → Started → Arrived → Completed)',
    'Order management for vendor/supplier operations',
    'Inventory management with reservation and release rules',
    'Fleet and vehicle management with document verification',
    'Payment processing with provider callbacks and idempotency',
    'Wallet system with ledger-backed balances and transactions',
    'Refund and financial adjustment workflows',
    'Real-time messaging between participants',
    'Push, email, and SMS notification delivery',
    'Support ticket system with SLA and escalation',
    'Review and rating system with moderation',
    'Reporting and KPI dashboards with export capabilities',
    'Admin operations dashboard with full platform control',
    'Role-based access control (RBAC) and ownership checks',
    'Rate limiting and audit logging for sensitive operations',
    'Background jobs for reconciliation, exports, and cleanup',
    'Public landing pages and service discovery',
    'Responsive UI with reusable component library',
    'Accessibility compliance (keyboard navigation, focus management)',
    'Data integrity with database constraints and transactions',
    'Idempotent operations for financial and lifecycle transitions',
    'Comprehensive audit trail for material actions'
  ],
  images: [
    'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop'
  ],
  stats: {
    stars: 47,
    forks: 12,
    views: 1240,
    linesOfCode: 48500,
    commits: 342,
    branches: 8,
    contributors: 6,
    openIssues: 23,
    closedIssues: 187,
    pullRequests: 94,
    testCoverage: 78
  },
  challenges: [
    {
      title: 'Concurrent booking conflicts',
      solution: 'Implemented server-side availability revalidation with database-level locking and optimistic concurrency control to prevent double assignment'
    },
    {
      title: 'Payment idempotency and duplicate callbacks',
      solution: 'Designed provider callback handler with signature verification, idempotency keys, and transaction state machine to ensure exactly-once processing'
    },
    {
      title: 'Multi-role authorization complexity',
      solution: 'Built centralized RBAC middleware with resource ownership checks, operational scope validation, and role-specific permission matrices'
    },
    {
      title: 'Real-time location tracking at scale',
      solution: 'Implemented WebSocket-based location updates with Redis pub/sub, geospatial indexing, and configurable tracking frequency'
    },
    {
      title: 'Financial ledger consistency',
      solution: 'Adopted double-entry ledger pattern with atomic transactions, immutable audit records, and reconciliation jobs for discrepancy detection'
    },
    {
      title: 'Cross-platform mobile and web parity',
      solution: 'Created shared TypeScript contracts in packages/types and reusable UI components in packages/ui to maintain consistency across apps'
    },
    {
      title: 'Ethiopian market payment integration',
      solution: 'Built provider adapter pattern supporting multiple local payment methods (Telebirr, CBE Birr, etc.) with unified internal transaction model'
    },
    {
      title: 'Lifecycle state transition enforcement',
      solution: 'Implemented state machine pattern per domain entity (Request, Booking, Trip, Load, Order) with server-side validation and audit logging'
    }
  ],
  complexity: 'high',
  architecture: {
    pattern: 'Modular monolith with domain-driven design',
    repositories: [
      'apps/web - Customer, Driver, Vendor web experiences',
      'apps/mobile - React Native driver operations',
      'apps/admin - Desktop administration dashboard',
      'backend/src/modules - Authoritative domain business rules',
      'backend/src/middleware - Auth, validation, rate limiting',
      'backend/src/database - Models, migrations, seed data',
      'backend/src/jobs - Notifications, reconciliation, exports',
      'packages/ui - Reusable UI component library',
      'packages/types - Shared TypeScript contracts',
      'packages/utils - Shared formatting utilities',
      'packages/constants - Roles, permissions, statuses'
    ]
  },
  roles: [
    {
      name: 'Customer',
      capabilities: [
        'Create transport requests (passenger/item)',
        'Search and select matches/offers',
        'Book and pay for services',
        'Track trips and orders',
        'Manage wallet and payments',
        'Message participants',
        'Submit reviews',
        'Create support tickets'
      ]
    },
    {
      name: 'Driver',
      capabilities: [
        'Publish availability',
        'Manage vehicles and documents',
        'Discover available work',
        'Accept bookings/loads',
        'Execute trips with milestones',
        'Manage earnings and wallet',
        'Communicate with customers',
        'View reviews and support'
      ]
    },
    {
      name: 'Vendor/Supplier',
      capabilities: [
        'Create and respond to requests',
        'Submit and manage offers',
        'Manage orders and inventory',
        'View performance analytics',
        'Message participants',
        'Manage notifications'
      ]
    },
    {
      name: 'Admin/Operations',
      capabilities: [
        'View operational dashboard',
        'Manage users, drivers, vendors, customers',
        'Intervene in trips/bookings',
        'Manage fleet and vehicles',
        'Manage loads and orders',
        'Manage payments and wallets',
        'View reports and analytics',
        'Moderate reviews',
        'Manage support tickets',
        'Configure system settings'
      ]
    },
    {
      name: 'Public Visitor',
      capabilities: [
        'View public landing pages',
        'Access authentication entry points',
        'View public service information',
        'Search eligible services'
      ]
    }
  ],
  lifecycle: {
    passengerTransport: [
      'Request → Customer enters trip details',
      'Matching → System finds eligible drivers/vehicles',
      'Selection → Customer selects match/offer',
      'Booking → Booking created and locked',
      'Payment → Payment authorized and recorded',
      'Trip → Driver progresses through milestones',
      'Completion → Trip completes when conditions satisfied',
      'Review → Eligible participants submit review',
      'Support → Exceptions escalated through tickets'
    ],
    itemTransport: [
      'Request/Load → Customer/vendor records item details',
      'Matching/Offer → Eligible driver/vendor offers or matched',
      'Order/Booking → Accepted option becomes order/booking',
      'Pickup → Driver confirms pickup with proof',
      'Transit → Load remains in transit with updates',
      'Delivery → Driver confirms delivery with proof',
      'Completion → Order/load closes after conditions met',
      'Review/Support → Participants review or open ticket'
    ]
  },
  statusModels: {
    request: ['Draft', 'Published', 'Matching', 'Matched', 'Booked', 'In Progress', 'Completed', 'Cancelled', 'Expired'],
    booking: ['Pending', 'Confirmed', 'In Progress', 'Completed', 'Cancelled', 'Failed'],
    trip: ['Planned', 'Started', 'Arrived', 'Completed', 'Cancelled'],
    load: ['Created', 'Assigned', 'Picked Up', 'In Transit', 'Delivered', 'Completed', 'Cancelled'],
    order: ['Pending', 'Accepted', 'Processing', 'Fulfilled', 'Completed', 'Cancelled'],
    payment: ['Pending', 'Authorized', 'Paid', 'Failed', 'Refunded', 'Partially Refunded'],
    support: ['Open', 'Assigned', 'Waiting', 'Escalated', 'Resolved', 'Closed'],
    verification: ['Pending', 'Approved', 'Rejected', 'Expired']
  },
  nonFunctional: {
    performance: 'Interactive APIs responsive; long reports use background jobs',
    availability: 'Critical booking, trip, payment operations fail safely',
    security: 'Auth, RBAC, ownership checks, validation, rate limiting, audit logging',
    scalability: 'Feature modules and shared packages support growth',
    maintainability: 'Business logic in backend modules; UI focuses on presentation',
    reliability: 'Financial and lifecycle operations idempotent where retries occur',
    observability: 'Material errors, job failures, financial actions traceable',
    accessibility: 'Keyboard, focus, labeling, status communication',
    dataIntegrity: 'Database constraints and transactions protect invariants',
    privacy: 'Minimum necessary information exposure'
  },
  releasePriority: {
    P0: [
      'Authentication',
      'Customer requests',
      'Matching',
      'Booking',
      'Core trip/load lifecycle',
      'Driver acceptance/execution',
      'Core payments',
      'Admin controls',
      'Authorization',
      'Audit',
      'Critical notifications'
    ],
    P1: [
      'Wallet enhancements',
      'Vendor offers/orders/inventory',
      'Reviews',
      'Support workflow',
      'Reports',
      'Advanced notifications'
    ],
    P2: [
      'Advanced analytics',
      'Optimization',
      'Additional integrations',
      'Expanded automation',
      'Future enhancements'
    ]
  },
  testing: {
    unit: 'Validation, financial rules, permissions, lifecycle transitions, matching constraints',
    integration: 'Auth, authorization, database transactions, API contracts, provider callbacks, jobs',
    e2e: [
      'Customer: Login → request → match → booking → payment → tracking → completion → review/support',
      'Driver: Login/verification → vehicle → availability → opportunity → accept → execution → earnings',
      'Vendor: Login/verification → request → offer → order → inventory → fulfillment → analysis',
      'Admin: Login → users/verification → operations → finance → reports → support → settings'
    ],
    security: 'Unauthorized access, ownership bypass, rate limits, session handling, audit',
    financial: 'Idempotency, duplicate callback protection, refund limits, ledger reconciliation, wallet atomicity'
  },
  screens: {
    customer: [
      'Dashboard',
      'My Requests',
      'My Bookings',
      'Track Orders',
      'My Trips',
      'Payments & Wallets',
      'Messages / Notifications',
      'Support Center / FAQs',
      'Profile Settings'
    ],
    driver: [
      'Dashboard',
      'Driver Trips',
      'Available Loads',
      'Vehicles',
      'Bookings',
      'Earnings & Wallets',
      'Reviews & Ratings',
      'Messages / Notifications',
      'Profile Settings'
    ],
    vendor: [
      'Dashboard',
      'New Request',
      'My Offers',
      'My Orders',
      'Inventory',
      'Analysis',
      'Messages / Notifications',
      'Profile Settings'
    ],
    admin: [
      'Dashboard',
      'User Management',
      'Drivers / Vendors / Customers',
      'Trips & Bookings',
      'Fleet Management',
      'Load Management',
      'Payments & Wallets',
      'Reports & Analysis',
      'Reviews & Ratings',
      'Support Center',
      'System Settings'
    ]
  },
  openDecisions: [
    'Pricing and quotation rules for passenger and item transport',
    'Cancellation, refund, commission and dispute policies',
    'Initial Ethiopian cities, routes and service areas',
    'GPS tracking frequency, location privacy and retention',
    'Payment providers and supported payment methods',
    'Wallet eligibility, limits and withdrawal policy',
    'Driver, vehicle and vendor verification documents and approval rules',
    'Proof-of-pickup and proof-of-delivery requirements by service type',
    'Mandatory notification channels and escalation behavior',
    'Support SLA, priority levels and escalation tiers',
    'Data retention, anonymization and deletion rules',
    'Matching/ranking weights configuration'
  ],
  definitionOfDone: [
    'Requirement ID implemented and linked to backlog item',
    'UI states exist for loading, success, empty, validation, permission, failure',
    'Backend business rule in correct domain module',
    'Authorization and ownership checks enforced server-side',
    'Database constraints and transactions protect invariants',
    'Notifications, audit events, jobs implemented for side effects',
    'Shared types/constants updated for domain contract changes',
    'Unit and integration tests cover business rule',
    'At least one E2E scenario covers every P0 workflow',
    'API and setup documentation updated',
    'Security and accessibility checks pass',
    'Acceptance criteria demonstrated and signed off'
  ],
  repositoryTraceability: {
    'apps/web': ['FR-PUB', 'FR-CUS', 'FR-DRV', 'FR-VEN'],
    'apps/mobile': ['FR-DRV', 'FR-CUS', 'FR-TRP', 'FR-LOAD', 'FR-NOT'],
    'apps/admin': ['FR-ADM', 'FR-REP', 'FR-REV', 'FR-SUP', 'FR-SET'],
    'backend/src/modules/auth': ['FR-AUTH'],
    'backend/src/modules/requests': ['FR-CUS', 'request lifecycle'],
    'backend/src/modules/matching': ['FR-MAT'],
    'backend/src/modules/trips': ['FR-TRP'],
    'backend/src/modules/bookings': ['FR-BKG'],
    'backend/src/modules/loads': ['FR-LOAD'],
    'backend/src/modules/vehicles': ['FR-VEH'],
    'backend/src/modules/orders': ['FR-ORD', 'FR-VEN'],
    'backend/src/modules/inventory': ['FR-VEN', 'inventory'],
    'backend/src/modules/payments': ['FR-PAY', 'FR-FIN'],
    'backend/src/modules/wallets': ['FR-WAL'],
    'backend/src/modules/messages': ['FR-MSG'],
    'backend/src/modules/notifications': ['FR-NOT'],
    'backend/src/modules/reviews': ['FR-REV'],
    'backend/src/modules/support': ['FR-SUP'],
    'backend/src/modules/reports': ['FR-REP'],
    'backend/src/modules/settings': ['FR-SET'],
    'backend/src/modules/audit': ['FR-SEC', 'FR-ADM'],
    'backend/src/middleware': ['FR-SEC'],
    'backend/src/database': ['FR-DB'],
    'backend/src/jobs': ['FR-JOB'],
    'packages/*': ['Shared contracts'],
    'tests/*': ['Functional verification'],
    'infrastructure/*': ['Runtime/deployment'],
    'docs/*': ['Architecture/API/setup'],
    'scripts/*': ['Migrations/seed/CI']
  },
  documentInfo: {
    documentId: 'TMS-SRS-003',
    version: '3.0',
    status: 'Implementation-ready functional baseline',
    date: '2026-10-04',
    product: 'Transport Management System (TMS)',
    market: 'Ethiopia / ETB-ready',
    audience: ['Product', 'UX/UI', 'Engineering', 'QA', 'DevOps', 'Operations']
  },
   links: {
        github: 'https://github.com/Daniel21Ayen/TMS-platform',
        demo: 'https://text.vercel.app/',
        docs: null
      }
},
   


    // {
    //   id: 7,
    //   title: 'Portfolio Website',
    //   type: 'frontend',
    //   featured: false,
    //   date: '2023-03-01',
    //   duration: '2 weeks',
    //   teamSize: 1,
    //   status: 'completed',
    //   progress: 100,
    //   shortDescription: 'Personal portfolio website with interactive animations and responsive design.',
    //   fullDescription: 'A modern portfolio website with interactive animations, responsive design, and performance optimizations.',
    //   technologies: ['React', 'Framer Motion', 'CSS3', 'Vite'],
    //   features: [
    //     'Interactive animations',
    //     'Responsive design',
    //     'Performance optimized',
    //     'SEO friendly',
    //     'Accessibility compliant'
    //   ],
    //   images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop'],
    //   stats: {
    //     stars: 30,
    //     forks: 7,
    //     views: 950,
    //     linesOfCode: 4200,
    //     commits: 54,
    //     branches: 3
    //   },
    //   challenges: [
    //     {
    //       title: 'Animation performance',
    //       solution: 'Used Framer Motion with optimized rendering'
    //     }
    //   ],
    //   complexity: 'low'
    // },

    // {
    //   id: 8,
    //   title: 'E-Learning Platform',
    //   type: 'fullstack',
    //   featured: true,
    //   date: '2023-12-10',
    //   duration: '4 months',
    //   teamSize: 4,
    //   status: 'completed',
    //   progress: 100,
    //   shortDescription: 'Comprehensive e-learning platform with video courses and progress tracking.',
    //   fullDescription: 'A comprehensive e-learning platform with video courses, progress tracking, quizzes, certificates, and instructor dashboards.',
    //   technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    //   features: [
    //     'Video course hosting',
    //     'Progress tracking',
    //     'Interactive quizzes',
    //     'Certificate generation',
    //     'Instructor dashboards'
    //   ],
    //   images: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop'],
    //   stats: {
    //     stars: 55,
    //     forks: 15,
    //     views: 1800,
    //     linesOfCode: 22000,
    //     commits: 210,
    //     branches: 12
    //   },
    //   challenges: [
    //     {
    //       title: 'Video streaming at scale',
    //       solution: 'Implemented AWS CloudFront with adaptive bitrate streaming'
    //     }
    //   ],
    //   complexity: 'high'
    // },
  
  
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
  fullDescription: 'Mastara (mh) is a comprehensive paid, bilingual (English + Amharic), offline-first academic platform designed specifically for Ethiopian university freshmen. Students authenticate, bind one physical device, select their University → Program → Semester, and access learning content organized by Course → Material/Tests/Exams, with COC Exam preparation available from Home. Access is entitlement-based with automatic expiry managed by Admin. The platform features manual payment verification (CBE Mobile Banking, CBE Birr, Telebirr), offline-first learning with zero answer loss, bilingual STEM/LaTeX rendering, and a complete Admin scanning-to-PDF workflow. The production app targets < 50 MB package size.',
  technologies: [
    'React Native',
    'NestJS',
    'PostgreSQL',
    'Redis',
    'TypeScript',
    'SQLite',
    'Object Storage',
    'KaTeX',
    'NotoSansEthiopic',
    'Android Keystore',
    'iOS Keychain',
    'UUIDv7',
    'JWT',
    'NetInfo',
    'WebP',
    'JPEG',
    'LaTeX'
  ],
  features: [
    'Bilingual support (English + Amharic)',
    'Offline-first learning with zero answer loss',
    'One student account = one bound physical device',
    'Secure device ID from Android Keystore / iOS Keychain',
    'University → Program → Semester → Course hierarchy',
    'Course content: Material, Tests, Exams',
    'Material: Modules, Notes, Amharic Note',
    'Tests: Practice & Quiz 1, Quiz 2, Quiz 3',
    'Exams: Mid, Final, Mock Exam',
    'COC Exam available from Home',
    'Entitlement-based access with Admin-managed duration',
    'Automatic expiry and content locking',
    'Promotional unpaid courses for advertising',
    'Manual payment proof with screenshot upload',
    'Payment methods: CBE Mobile Banking, CBE Birr, Telebirr',
    'Receipt compression below 300 KB',
    'Unique transaction reference enforcement',
    'Admin payment verification queue',
    'Admin image scanning and image-to-PDF conversion',
    'PDF publishing with entitlement protection',
    'Offline answer persistence to encrypted SQLite',
    'UUIDv7 outbox for sync operations',
    'Monotonic timer for exams (immune to clock changes)',
    'Immediate feedback for practice/quiz',
    'Exam attempt lifecycle with recovery',
    'Idempotent submission',
    'Bilingual STEM/LaTeX rendering offline',
    'Chapter-by-chapter download for large assets',
    'Learning status and progress tracking',
    'Payment alerts and store status on Home',
    'Push notifications for payment/expiry/device events',
    'Support ticket system',
    'Audit logging for sensitive operations',
    'Admin dashboard with full platform control',
    'Student management with search/suspend',
    'Academic catalog management',
    'Content versioning and publishing workflow',
    'Assessment management with versioning',
    'Entitlement and duration management',
    'Device binding inspection and revocation',
    'Reports and operational analytics',
    'Role-based access control (STUDENT, ADMIN)',
    'Rate limiting for sensitive APIs',
    'TLS for all network traffic',
    'Encrypted local storage',
    'Server-side entitlement enforcement',
    'App package size < 50 MB (hard release gate)',
    'Runtime memory target < 120 MB on 2-3 GB RAM devices'
  ],
  images: [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop'
  ],
  stats: {
    stars: 34,
    forks: 8,
    views: 890,
    linesOfCode: 62000,
    commits: 478,
    branches: 12,
    contributors: 8,
    openIssues: 31,
    closedIssues: 256,
    pullRequests: 142,
    testCoverage: 82
  },
  challenges: [
    {
      title: 'One-device binding enforcement',
      solution: 'Implemented secure device ID from Android Keystore/iOS Keychain, server-side binding validation, and 403 DEVICE_MISMATCH_LOCKED response with localized recovery guidance'
    },
    {
      title: 'Zero answer loss during offline learning',
      solution: 'Built encrypted SQLite persistence with immediate write (< 10ms target), UUIDv7 outbox queue, NetInfo connectivity detection, and idempotent NestJS sync endpoint'
    },
    {
      title: 'Monotonic exam timer integrity',
      solution: 'Used Android SystemClock.elapsedRealtime() for elapsed time tracking, making exam duration immune to system wall-clock changes'
    },
    {
      title: 'Bilingual STEM rendering offline',
      solution: 'Bundled local KaTeX math fonts and NotoSansEthiopic, implemented inline/block LaTeX rendering without CDN dependency, and validated no clipping/baseline defects'
    },
    {
      title: 'App size under 50 MB hard limit',
      solution: 'Externalized all textbook chapters, scanned PDFs, and large content to object storage with on-demand download; CI artifact size report fails builds at or above 50 MB'
    },
    {
      title: 'Automatic entitlement expiry enforcement',
      solution: 'Server-authoritative expiry with client lock state refresh; client clocks and offline cache cannot extend access or bypass entitlement'
    },
    {
      title: 'Unique transaction reference validation',
      solution: 'Database UNIQUE constraint on transaction_reference with 409 TRANSACTION_REFERENCE_DUPLICATE error handling and Admin review queue'
    },
    {
      title: 'Receipt image compression',
      solution: 'Client-side compression to WebP/JPEG below 300 KB with 422 RECEIPT_TOO_LARGE rejection for oversized submissions'
    },
    {
      title: 'Admin image-to-PDF conversion workflow',
      solution: 'Built scanning/import pipeline with crop, rotate, reorder, PDF conversion, checksum generation, page count validation, and draft/review/publish states'
    },
    {
      title: 'Exam state recovery after app kill',
      solution: 'Implemented durable attempt lifecycle state machine (READY → STARTED → IN_PROGRESS → SUBMITTING → SUBMITTED → RESULT_AVAILABLE) with local recovery branch'
    },
    {
      title: 'Payment proof verification workflow',
      solution: 'Designed Admin queue with receipt inspection, student/product/reference verification, approve/reject with reason, entitlement activation, notification, and audit'
    },
    {
      title: 'Offline content caching policy',
      solution: 'Cached permitted content with entitlement validation, ensured offline cache cannot become permanent entitlement bypass, and sync status UI prevents false server sync claims'
    }
  ],
  complexity: 'very-high',
  architecture: {
    pattern: 'Modular monolith with offline-first mobile and admin dashboard',
    mobileModules: [
      'app - Boot/navigation/providers',
      'auth - Login/register/device',
      'academic - University/program/semester',
      'home - Continue/status/alerts/store',
      'courses - Catalog/course tabs',
      'material - Modules/notes/Amharic/reader',
      'tests - Practice/Quiz 1/2/3',
      'exams - Mid/Final/Mock/COC/timer',
      'payments - Store/receipt/status',
      'profile - Settings/device release/support',
      'local - SQLite/cache/outbox',
      'remote - API/auth/device headers',
      'shared - UI/i18n/design system'
    ],
    backendModules: [
      'AuthModule - Registration/login/session',
      'DeviceModule - Binding/release/mismatch',
      'AcademicModule - University/program/semester/course',
      'ContentModule - Modules/topics/notes/versions',
      'DocumentModule - Scan/images/PDF conversion',
      'AssessmentModule - Questions/tests/exams',
      'CocModule - COC catalog/exams',
      'PaymentModule - Products/proofs/references',
      'EntitlementModule - Access/duration/expiry',
      'SyncModule - Offline operations',
      'NotificationModule - Alerts',
      'AdminModule - Admin orchestration',
      'AuditModule - Audit trail'
    ],
    dataStores: {
      postgresql: 'Authoritative relational state',
      redis: 'Caching/queues',
      objectStorage: 'Receipt images, PDFs, large learning assets',
      encryptedSQLite: 'Mobile offline state'
    }
  },
  roles: [
    {
      name: 'Student',
      capabilities: [
        'Register/login with secure session',
        'Bind one physical device',
        'Select University → Program → Semester',
        'Access Home dashboard with learning status',
        'Browse course catalog (paid and promotional)',
        'Read Modules, Notes, Amharic Note',
        'Take Practice & Quiz 1/2/3 with immediate feedback',
        'Take Mid/Final/Mock exams with monotonic timer',
        'Access COC Exam from Home',
        'Pay via manual proof upload',
        'Monitor access/expiry status',
        'Manage own session/device release',
        'Receive notifications for payment/expiry',
        'Create support tickets',
        'Continue Learning from last position'
      ]
    },
    {
      name: 'Admin',
      capabilities: [
        'Control students (search/view/suspend)',
        'Manage academic catalog (universities/programs/semesters/courses)',
        'Manage content (modules/topics/notes/Amharic/PDF)',
        'Manage assessments (quizzes/exams/COC/questions)',
        'Review payment receipts and references',
        'Approve/reject payments with reason',
        'Manage product durations and entitlements',
        'Scan/import images and convert to PDF',
        'Publish/unpublish content and PDFs',
        'Inspect/revoke device bindings',
        'Send notifications and manage support',
        'View audit logs and operational reports',
        'Configure system settings',
        'Manage access expiry rules'
      ]
    }
  ],
  workflows: {
    entryFlow: [
      'Install (< 50 MB target)',
      'Splash (load config, secure device ID, local DB, session)',
      'Login/Register',
      'Device Registration (if unbound)',
      'Universities',
      'Program',
      'Semester',
      'Home'
    ],
    homeSections: [
      'Continue Learning - Resume last permitted topic/test',
      'Courses - Entitled and promotional catalog',
      'COC Exam - Direct COC destination',
      'Learning Status - Progress/completion/sync status',
      'Payment Alerts - Pending/rejected/expiring/expired notices',
      'Store Status - Purchased, pending, expired, promotional states'
    ],
    courseFlow: {
      material: [
        'Course → Material → Modules → Topic/Chapter → Check lock → Read',
        'Course → Material → Notes → Topic/Chapter → Check lock → Read',
        'Course → Material → Amharic Note → Topic/Chapter → Check lock → Read'
      ],
      tests: [
        'Course → Tests → Practice & Quiz 1 | Quiz 2 | Quiz 3',
        'Topic → Content lock → Practice → Question → Answer → Immediate feedback → Next → Completion summary'
      ],
      exams: [
        'Course → Exams → Mid | Final | Mock Exam',
        'Click → Check content lock → All Questions → Click answer → Save → Navigate → Submit → Result/status'
      ]
    },
    cocExam: [
      'Home → COC Exam → Check content lock → COC list → Select exam → All Questions → Answer → Submit → Result/status'
    ],
    paymentFlow: [
      'Store → Select product → Payment instructions/admin account',
      'Student pays → Import screenshot → Compress below 300 KB',
      'Enter transaction reference → Submit → Admin queue',
      'Admin approve/reject → Entitlement activation'
    ],
    durationWorkflow: [
      'Admin defines duration',
      'Approved payment creates entitlement with start/end',
      'Access remains active until end',
      'Expiry reached → server returns expired',
      'Client refreshes lock state → protected content locked',
      'Renewal available'
    ],
    adminScanToPdf: [
      'Admin Login → Content Management → Scan/Import',
      'Capture/select images → Preview/Crop/Rotate/Reorder',
      'Convert to PDF → Validate → Metadata',
      'Save Draft → Review → Publish'
    ],
    deviceSecurity: {
      firstDevice: 'Bind account',
      sameDevice: 'Allow',
      secondPhone: '403 DEVICE_MISMATCH_LOCKED',
      releaseOriginal: 'Binding revoked after explicit Release Device & Log Out',
      revokedDevice: '403 DEVICE_REVOKED'
    },
    offlineFlow: [
      'User action → local validation',
      'SQLite write → UI confirmation',
      'UUIDv7 outbox → NetInfo detects connectivity',
      'NestJS sync → acknowledgement → mark complete'
    ]
  },
  statusModels: {
    exam: ['READY', 'STARTED', 'IN_PROGRESS', 'SUBMITTING', 'SUBMITTED', 'RESULT_AVAILABLE'],
    course: ['Draft', 'Promotional/Unpaid', 'Published', 'Paid/Entitled', 'Expiring', 'Expired/Archived'],
    content: ['Draft', 'Review', 'Published Version', 'Updated Version', 'Archived'],
    payment: ['Uploaded', 'Pending Review', 'Approved', 'Rejected', 'Entitlement Active', 'No Access', 'Expiry/Renewal'],
    pdf: ['Images', 'Scan Session', 'Converted PDF', 'Draft', 'Review', 'Published', 'Archived'],
    student: ['Register', 'Active', 'Device Bound', 'Learning', 'Payment/Entitlement Changes', 'Support/Suspension', 'Audit']
  },
  accessMatrix: {
    unpaid: {
      courseCatalog: 'Browse/promotional',
      material: 'Locked/preview',
      tests: 'Locked/preview',
      midFinalMock: 'Locked',
      coc: 'Locked unless entitled',
      store: 'Purchase',
      learningStatus: 'Limited'
    },
    paidActive: {
      courseCatalog: 'Browse/open',
      material: 'Read',
      tests: 'Practice',
      midFinalMock: 'Start if entitled',
      coc: 'Open if entitled',
      store: 'Renew if needed',
      learningStatus: 'Full'
    },
    expired: {
      courseCatalog: 'Browse/renew',
      material: 'Locked',
      tests: 'Locked',
      midFinalMock: 'Locked',
      coc: 'Locked',
      store: 'Renew',
      learningStatus: 'Historical + expiry'
    },
    pending: {
      courseCatalog: 'Browse/status',
      material: 'Locked',
      tests: 'Locked',
      midFinalMock: 'Locked',
      coc: 'Locked',
      store: 'Await verification',
      learningStatus: 'Payment state'
    }
  },
  errorModel: {
    '403_DEVICE_MISMATCH_LOCKED': 'Account is bound to another device',
    '403_DEVICE_REVOKED': 'Device is revoked',
    '403_ENTITLEMENT_REQUIRED': 'No active access',
    '403_ENTITLEMENT_EXPIRED': 'Access duration ended',
    '409_TRANSACTION_REFERENCE_DUPLICATE': 'Reference already used',
    '409_SYNC_CONFLICT': 'Mutation conflict',
    '422_RECEIPT_TOO_LARGE': 'Receipt exceeds policy',
    '422_PDF_CONVERSION_FAILED': 'PDF conversion failed',
    '401_UNAUTHORIZED': 'Authentication required/invalid',
    '429_RATE_LIMITED': 'Too many requests',
    '500_503_SERVER_UNAVAILABLE': 'Retryable server/dependency failure'
  },
  nonFunctional: {
    'NFR-001': 'Application package < 50 MB; CI release gate fails at/above 50 MB',
    'NFR-002': 'Runtime memory target < 120 MB on supported budget phones',
    'NFR-003': 'Local write target < 10 ms for normal answer persistence',
    'NFR-004': 'Permitted cached learning and local answers survive temporary connectivity loss',
    'NFR-005': 'TLS, secure storage, RBAC, device lock and audit pass',
    'NFR-006': 'English + Amharic critical UI flows',
    'NFR-007': 'Offline bilingual LaTeX rendering',
    'NFR-008': 'Readable typography, tap targets, labels',
    'NFR-009': 'Large content remains external to app bundle',
    'NFR-010': 'Errors, sync, payments, locks and conversion failures measurable'
  },
  functionalRequirements: {
    identityDevice: [
      'FR-001: Registration [P0]',
      'FR-002: Login [P0]',
      'FR-003: Session persistence [P0]',
      'FR-004: Secure device ID [P0]',
      'FR-005: One-device binding [P0]',
      'FR-006: Release device [P0]',
      'FR-007: Mismatch UI [P0]',
      'FR-008: Admin device control [P0]',
      'FR-009: Security audit [P1]'
    ],
    academicCatalog: [
      'FR-010: University catalog [P0]',
      'FR-011: Program catalog [P0]',
      'FR-012: Semester catalog [P0]',
      'FR-013: Course catalog [P0]',
      'FR-014: Promotional unpaid state [P0]',
      'FR-015: Course access scope [P0]',
      'FR-016: Catalog ordering [P2]'
    ],
    contentDocuments: [
      'FR-020: Modules [P0]',
      'FR-021: Topics/chapters [P0]',
      'FR-022: Notes [P0]',
      'FR-023: Amharic Note [P0]',
      'FR-024: Content versioning [P0]',
      'FR-025: Scan/import images [P0]',
      'FR-026: Image-to-PDF [P0]',
      'FR-027: PDF publishing [P0]',
      'FR-028: Promotional preview [P1]',
      'FR-029: Content lock [P0]',
      'FR-034: Bilingual STEM math [P0]'
    ],
    testsExamsCoc: [
      'FR-030: Practice engine [P0]',
      'FR-031: Quiz 1 [P0]',
      'FR-032: Quiz 2 [P0]',
      'FR-033: Quiz 3 [P0]',
      'FR-035: Question engine [P0]',
      'FR-036: Immediate feedback [P0]',
      'FR-037: Mid [P0]',
      'FR-038: Final [P0]',
      'FR-039: Mock [P0]',
      'FR-040: Zero-loss answers [P0]',
      'FR-041: Attempt lifecycle [P0]',
      'FR-042: Submission [P0]',
      'FR-050: Monotonic timer [P0]',
      'FR-051: COC hub [P0]',
      'FR-052: COC content [P0]',
      'FR-053: Past COC exams [P0]',
      'FR-054: Results [P1]',
      'FR-055: Question navigation [P0]',
      'FR-056: Exam lock [P0]',
      'FR-057: Exam integrity [P0]'
    ],
    paymentEntitlement: [
      'FR-090: Store [P0]',
      'FR-091: Payment instructions [P0]',
      'FR-092: Receipt upload [P0]',
      'FR-093: Receipt compression [P0]',
      'FR-094: Transaction reference [P0]',
      'FR-095: Unique reference [P0]',
      'FR-096: Verification queue [P0]',
      'FR-097: Entitlement activation [P0]',
      'FR-098: Duration management [P0]',
      'FR-099: Automatic expiry lock [P0]',
      'FR-100: Renewal [P1]',
      'FR-101: Payment alerts [P1]',
      'FR-102: Entitlement audit [P0]'
    ],
    offlineSync: [
      'FR-060: Offline cache [P1]',
      'FR-061: Offline progress [P0]',
      'FR-062: Outbox [P0]',
      'FR-063: UUIDv7 [P0]',
      'FR-064: Connectivity worker [P0]',
      'FR-065: Sync API [P0]',
      'FR-066: Conflict handling [P1]',
      'FR-080: Zero answer loss [P0]',
      'FR-081: Learning status [P0]',
      'FR-082: Sync status [P1]'
    ],
    admin: [
      'FR-110: Admin dashboard [P0]',
      'FR-111: Student management [P0]',
      'FR-112: Academic management [P0]',
      'FR-113: Content management [P0]',
      'FR-114: Assessment management [P0]',
      'FR-115: Payment management [P0]',
      'FR-116: Entitlement/duration [P0]',
      'FR-117: Scan-to-PDF [P0]',
      'FR-118: Notifications/support [P1]',
      'FR-119: Audit/reporting [P0]'
    ]
  },
  dataModel: {
    Student: 'id; account status; bound_device_id',
    DeviceBinding: 'student_id unique; device_id; status; timestamps',
    University: 'Foreign-key academic hierarchy',
    Program: 'Foreign-key academic hierarchy',
    Semester: 'Foreign-key academic hierarchy',
    Course: 'scope; promotional state; publication state',
    Module: 'course/module parent; ordering',
    Topic: 'course/module parent; ordering',
    Content: 'type; version; publication state; bilingual representations',
    DocumentAsset: 'storage key; mime; checksum; size; page count',
    Question: 'question set, category, duration, version',
    Exam: 'question set, category, duration, version',
    PaymentProof: 'student, product, image, transaction_reference UNIQUE, status',
    Product: 'scope, price, duration_days, promotional state',
    Entitlement: 'student, product, starts_at, expires_at, status',
    OutboxEvent: 'operation_id UUIDv7 UNIQUE; payload; state',
    AuditLog: 'actor, action, target, timestamp, metadata'
  },
  notifications: {
    receiptSubmitted: 'Payment proof received; waiting for verification',
    approved: 'Access activated',
    rejected: 'Receipt rejected with reason',
    expiring: 'Access expires soon; renew',
    expired: 'Protected content locked; renew',
    deviceMismatch: 'Account is bound to another device',
    syncPending: 'Local changes retained; sync pending',
    newContent: 'New material available where applicable'
  },
  edgeCases: [
    {
      case: 'Unpaid course opened',
      behavior: 'Promotional information; protected content locked'
    },
    {
      case: 'Entitlement expires while app is open',
      behavior: 'Refresh access and lock protected content once authoritative expiry is known'
    },
    {
      case: 'Phone changed',
      behavior: 'Second device blocked until binding release/admin recovery'
    },
    {
      case: 'App killed during quiz',
      behavior: 'Restore local answers'
    },
    {
      case: 'Clock changed during exam',
      behavior: 'Monotonic timer prevents extension'
    },
    {
      case: 'Network lost after answer',
      behavior: 'SQLite + outbox preserve answer'
    },
    {
      case: 'Duplicate payment reference',
      behavior: 'Database unique constraint rejects it'
    },
    {
      case: 'PDF conversion failure',
      behavior: 'Admin receives retryable error'
    },
    {
      case: 'Very large PDF',
      behavior: 'Stored externally; on-demand download'
    },
    {
      case: 'Rejected receipt',
      behavior: 'Reason shown; corrected resubmission allowed'
    }
  ],
  implementationRoadmap: [
    'Phase 0: SRS + UX baseline - Approved v1.3 and traceability',
    'Phase 1: Foundation - RN shell, Admin Web, NestJS, PostgreSQL, CI',
    'Phase 2: Identity/device - Auth + one-device enforcement',
    'Phase 3: Academic - University → Program → Semester → Course',
    'Phase 4: Content - Material, notes, Amharic, PDFs, reader',
    'Phase 5: Assessment - Quiz 1/2/3, Mid/Final/Mock, COC',
    'Phase 6: Commerce - Store, receipts, verification, entitlements',
    'Phase 7: Offline - SQLite/outbox/sync',
    'Phase 8: Admin - Full control plane + scan-to-PDF',
    'Phase 9: Hardening - Security, memory, size, recovery, release gates'
  ],
  definitionOfDone: [
    'Requirement ID is implemented and testable',
    'UI happy/failure flow documented',
    'Server authorization exists for protected actions',
    'Financial/security database constraints exist',
    'Offline behavior defined',
    'Sensitive operations audited',
    'Automated/manual QA passes',
    'Production package is < 50 MB'
  ],
  acceptanceChecklist: [
    'The production app is < 50 MB',
    'Install → Splash → Login/Register → Device registration → Universities → Program → Semester → Home works',
    'Home contains Continue Learning, Courses, COC Exam, Learning Status, Payment Alerts and Store Status',
    'Course contains Material, Tests and Exams',
    'Material contains Modules, Notes and Amharic Note',
    'Tests contain Practice & Quiz 1, Quiz 2, Quiz 3',
    'Exams contain Mid, Final, Mock Exam',
    'Notes/Amharic Note follow Topic/Chapter → Lock → Read',
    'Quiz follows Topic → Lock → Practice → Question → Answer → Immediate Feedback → Next',
    'Mid/Final/Mock follow Click → Lock → All Questions → Answer → Submit',
    'COC Exam is available from Home and respects entitlement',
    'Unpaid courses advertise in the catalog while protected content remains locked',
    'Paid content automatically locks after Admin-managed duration expires',
    'Manual payment proof works and receipt images are below 300 KB',
    'Transaction references are unique',
    'Admin can approve/reject receipts and manage access duration',
    'Admin can scan/import images and convert them to valid PDF files',
    'One-device binding is enforced server-side',
    'Offline answers survive connectivity loss',
    'Exam timer uses monotonic elapsed time',
    'Mixed Amharic/English STEM math renders offline',
    'GPA is not implemented'
  ],
  glossary: {
    Entitlement: 'Server-authorized access to a defined course/content scope for a defined period',
    'Promotional/Unpaid Course': 'Visible for advertising/discovery while protected content is locked',
    'Bound Device': 'The one physical device associated with a Student account',
    'Transaction Reference': 'Identifier entered from a payment receipt',
    'Payment Proof': 'Receipt image plus transaction reference and product/method',
    Outbox: 'Local queue of unsynchronized mutations',
    UUIDv7: 'Time-sortable unique operation identifier',
    'Monotonic Clock': 'Elapsed-time source unaffected by wall-clock changes',
    'COC Exam': 'COC preparation/exam content provided by Mastara',
    'Content Version': 'Immutable published snapshot',
    'Scan-to-PDF': 'Admin conversion of scanned/imported images into PDF',
    'Content Lock': 'UI/server enforcement preventing unauthorized or expired access'
  },
  documentInfo: {
    documentId: 'MASTARA-SRS-001',
    version: '1.3 – Rebuild Baseline',
    status: 'Implementation / Product Baseline',
    date: '2026-10-06',
    product: 'Mastara (mh)',
    repository: 'Kewakibt-Enterprise-Platform/Mastara',
    primaryClient: 'React Native mobile app',
    adminPlatform: 'Desktop/Web dashboard',
    backend: 'NestJS + PostgreSQL + Redis + Object Storage',
    roles: ['STUDENT', 'ADMIN'],
    currency: 'ETB',
    languages: ['English', 'Amharic'],
    appPackageTarget: '< 50 MB'
  },
  securityPrivacy: [
    'TLS for all network traffic',
    'Secure token storage',
    'Server-side entitlement enforcement',
    'Server-side ADMIN authorization',
    'Audit payment approvals, duration changes, device actions, content publishing and PDF publishing',
    'Encrypt sensitive local storage',
    'Rate-limit authentication/payment/sensitive APIs',
    'Protect object-storage assets with authorized access controls',
    'Prevent second-device bypass via client manipulation'
  ],
  contentProtection: {
    mathRendering: 'Bundle local KaTeX math fonts and NotoSansEthiopic; inline and block LaTeX; no remote CDN dependency',
    largeAssets: 'Chapter-by-chapter download; never monolithic bundle',
    scannedPdfs: 'Object storage/on-demand download',
    images: 'Compress/resize; no oversized bundled catalogs',
    dependencies: 'Size-impact review; remove unused modules',
    ci: 'Artifact size report and fail if ≥ 50 MB'
  }
}

 

    // {
    //   id: 9,
    //   title: 'Fitness Tracker App',
    //   type: 'mobile',
    //   featured: false,
    //   date: '2024-01-05',
    //   duration: '2 months',
    //   teamSize: 2,
    //   status: 'completed',
    //   progress: 100,
    //   shortDescription: 'Mobile fitness application with workout tracking and progress analytics.',
    //   fullDescription: 'A mobile fitness application with workout tracking, progress analytics, social features, and health integration.',
    //   technologies: ['React Native', 'Firebase', 'Redux'],
    //   features: [
    //     'Workout tracking',
    //     'Progress analytics',
    //     'Social features',
    //     'Health integration',
    //     'Personalized plans'
    //   ],
    //   images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop'],
    //   stats: {
    //     stars: 28,
    //     forks: 9,
    //     views: 810,
    //     linesOfCode: 9200,
    //     commits: 112,
    //     branches: 6
    //   },
    //   challenges: [
    //     {
    //       title: 'Real-time synchronization',
    //       solution: 'Used Firebase Realtime Database with offline support'
    //     }
    //   ],
    //   complexity: 'medium'
    // },
    
 

  ], []);

  useEffect(() => {
    setProjects(mockProjects);
    setFilteredProjects(mockProjects);
    
    // Calculate category counts
    const categoryCounts = categories.reduce((acc, cat) => ({ ...acc, [cat.id]: 0 }), {});
    mockProjects.forEach(project => {
      if (categoryCounts[project.type] !== undefined) {
        categoryCounts[project.type]++;
      }
      categoryCounts.all++;
    });
  }, [mockProjects, categories]);

  useEffect(() => {
    let filtered = [...projects]; 

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => project.type === selectedCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    // Apply sorting
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
        case 'complexity':
          const complexityOrder = { low: 1, medium: 2, high: 3 };
          aValue = complexityOrder[a.complexity] || 0;
          bValue = complexityOrder[b.complexity] || 0;
          break;
        case 'name':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, sortBy, sortOrder, projects]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Pagination
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
            <div className="hero-badge">
              <FaCode />
              <span>Project Gallery</span>
            </div>
            
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
