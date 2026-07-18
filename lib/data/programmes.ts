import { Programme } from './types';

export const programmes: Programme[] = [
  {
    slug: 'se-undergrad',
    title: 'B.Sc. Software Engineering & Systems',
    level: 'Undergraduate',
    durationYears: 4,
    department: 'School of Technology & Math',
    tags: ['STEM', 'Software', 'Computing'],
    summary: 'Build scalable modern software architectures, explore artificial intelligence models, cloud orchestration, and digital system security.',
    degree: 'B.Sc. (Honours) in Software Engineering',
    modules: [
      'Advanced Algorithmic Design',
      'Cloud Architecture & Microservices',
      'Database Concurrency & Warehousing',
      'Introduction to Machine Learning',
      'Cyber-Physical Security Systems'
    ],
    careerPathways: [
      'Principal Software Engineer',
      'Cloud Solution Architect',
      'Systems Site Reliability Specialist'
    ],
    annualTuitionUsd: 14500,
    minimumRequirements: 'High School Diploma with B+ GPA average, SAT score 1250 or equivalent (recommended).'
  },
  {
    slug: 'cs-undergrad',
    title: 'B.Sc. Data Science & Big Data Systems',
    level: 'Undergraduate',
    durationYears: 4,
    department: 'School of Technology & Math',
    tags: ['STEM', 'Statistics', 'AI'],
    summary: 'Master descriptive statistics, deep predictive neural architectures, machine learning frameworks, and complex data pipeline engineering.',
    degree: 'B.Sc. (Honours) in Data Science',
    modules: [
      'Stochastic Process Modeling',
      'Deep Neural Networks & PyTorch',
      'Large Scale Data Pipeline Eng.',
      'Vector Calculus & Linear Algebra',
      'Statistical Hypothesis Testing'
    ],
    careerPathways: [
      'Enterprise Data Scientist',
      'Quantitative Business Analyst',
      'ML Infrastructure Engineer'
    ],
    annualTuitionUsd: 14200,
    minimumRequirements: 'High School Diploma with Math major, SAT Math 680+ or ACT 28+.'
  },
  {
    slug: 'ba-undergrad',
    title: 'B.B.A. International Business Management',
    level: 'Undergraduate',
    durationYears: 4,
    department: 'School of Business',
    tags: ['Business', 'Leadership', 'Finance'],
    summary: 'Equip yourself for international corporate leadership, analyzing global market vectors, currency risks, trade regulations, and startups.',
    degree: 'Bachelor of Business Administration',
    modules: [
      'Global Currency & Asset Allocation',
      'Corporate Finance Strategy',
      'Venture Design & Capital Fundraising',
      'Multilateral Trade Regulation',
      'Operations Logistics & Scarcity'
    ],
    careerPathways: [
      'Global Strategy Director',
      'Venture Capital Associate',
      'International Logistics Manager'
    ],
    annualTuitionUsd: 12800,
    minimumRequirements: 'High School Diploma with competitive score transcript and leadership Statement of Purpose essay.'
  },
  {
    slug: 'ir-undergrad',
    title: 'B.A. International Relations & Diplomacy',
    level: 'Undergraduate',
    durationYears: 3,
    department: 'School of Law & Diplomacy',
    tags: ['Humanities', 'Diplomacy', 'Law'],
    summary: 'Analyze multilateral alliances, security policies, global conflict models, trade pacts, and international treaty implementations.',
    degree: 'B.A. in Diplomatic Affairs',
    modules: [
      'Multilateral Alliances History',
      'International Law Principles',
      'Geopolitical Conflict Structures',
      'Foreign Policy Analysis Models',
      'Diplomatic Protocol & Bilaterals'
    ],
    careerPathways: [
      'Foreign Service Officer',
      'International Policy Analyst',
      'NGO Regional Representative'
    ],
    annualTuitionUsd: 11900,
    minimumRequirements: 'High School Diploma with Humanities focus, IELTS 7.0 or TOEFL 95+ (for non-native speakers).'
  },
  {
    slug: 'mba-postgrad',
    title: 'Master of Business Administration (MBA)',
    level: 'Postgraduate',
    durationYears: 2,
    department: 'School of Business',
    tags: ['Executive', 'Business', 'Leadership'],
    summary: 'Case-study driven business modeling, financial engineering, strategic venture design, and enterprise scaling for business professionals.',
    degree: 'Master of Business Administration',
    modules: [
      'Harvard-Case Venture Modeling',
      'Executive Leadership Psychology',
      'Mergers, Acquisitions & Buyouts',
      'Algorithmic Portfolio Operations',
      'Advanced Brand Narrative Design'
    ],
    careerPathways: [
      'Chief Operating Officer (COO)',
      'Strategic Corporate Partner',
      'Founder / Chief Executive'
    ],
    annualTuitionUsd: 18500,
    minimumRequirements: 'Bachelor Degree from accredited college, minimum 3 years professional executive resume.'
  },
  {
    slug: 'cyber-postgrad',
    title: 'M.Sc. Cybersecurity & Cryptographic Systems',
    level: 'Postgraduate',
    durationYears: 2,
    department: 'School of Technology & Math',
    tags: ['STEM', 'Security', 'Networks'],
    summary: 'Advanced research in symmetric cryptography, cellular/network vulnerability assessment, penetration testing, and federal cyber policies.',
    degree: 'M.Sc. in Cryptographic Security',
    modules: [
      'Asymmetric Cryptographic Protocols',
      'Advanced Network Penetration',
      'Reverse Software Engineering',
      'Federal Cyber Defense Policies',
      'Blockchain Ledger Verification'
    ],
    careerPathways: [
      'Chief Information Security Officer',
      'Principal Security Researcher',
      'Defense Security Consultant'
    ],
    annualTuitionUsd: 16800,
    minimumRequirements: 'B.Sc. in Computer Science or Computer Engineering, knowledge of C/C++ or Rust.'
  },
  {
    slug: 'econ-postgrad',
    title: 'M.Sc. Econometrics & Quantitative Finance',
    level: 'Postgraduate',
    durationYears: 2,
    department: 'School of Business',
    tags: ['Finance', 'Economics', 'Math'],
    summary: 'Stochastic calculus models, algorithmic quantitative assets, macroeconomic statistics forecasting, and central banking policy impacts.',
    degree: 'M.Sc. in Quantitative Finance',
    modules: [
      'Stochastic Asset Pricing Calculus',
      'Macroeconomic Statistics Modeling',
      'Central Bank Policy Analysis',
      'Quantitative Asset Portfolios',
      'Algorithmic Trading Engines'
    ],
    careerPathways: [
      'Quantitative Asset Manager (Quant)',
      'Central Banking Advisor',
      'Risk Strategy Analyst'
    ],
    annualTuitionUsd: 16200,
    minimumRequirements: 'B.Sc. in Mathematics, Statistics, Physics, or Economics with high math GPA.'
  },
  {
    slug: 'fintech-diploma',
    title: 'Executive Diploma in Financial Technology',
    level: 'Diploma',
    durationYears: 1,
    department: 'School of Business',
    tags: ['Fintech', 'Syllabus', 'Short Course'],
    summary: 'Accelerated masterclass covering blockchain ledger protocols, digital transaction regulations, algorithmic trading, and neo-banking models.',
    degree: 'Professional Postgraduate Diploma in Fintech',
    modules: [
      'Distributed Ledger Cryptology',
      'Neo-Banking Asset Infrastructure',
      'Fintech Regulatory Sandbox laws',
      'Direct Digital Payment Integrals',
      'Consumer Credit Analytics'
    ],
    careerPathways: [
      'Fintech Product Consultant',
      'Payment Operations Lead',
      'Digital Banking Strategist'
    ],
    annualTuitionUsd: 9500,
    minimumRequirements: 'Higher National Diploma or Associate Degree, 1 year background in finance or computing.'
  },
  {
    slug: 'digital-diploma',
    title: 'Diploma in Digital Product Design & UX',
    level: 'Diploma',
    durationYears: 1,
    department: 'School of Technology & Math',
    tags: ['Design', 'Creative', 'Software'],
    summary: 'Learn visual wireframing heuristics, cognitive user flows, brand architecture systems, and dynamic Figma interactive software prototyping.',
    degree: 'Professional Diploma in Digital Design & UX',
    modules: [
      'Cognitive Interaction Heuristics',
      'Brand Identity System Schemas',
      'Dynamic Interaction Prototyping',
      'User Research & Heatmap Auditing',
      'Typography & UI Layout Hierarchy'
    ],
    careerPathways: [
      'Lead Product Designer (UX/UI)',
      'Digital Design System Lead',
      'User Research Coordinator'
    ],
    annualTuitionUsd: 9200,
    minimumRequirements: 'General certification of completion or portfolio submission demonstrating creative capability.'
  }
];
