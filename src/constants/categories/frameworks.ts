import type { TechDetail } from '@/constants';
import { calculateYearsExperience } from '@/util';

export const FRAMEWORKS: Record<string, TechDetail> = {
  react: {
    name: 'React',
    category: 'framework',
    proficiency: 'expert',
    description:
      'A powerful library for building user interfaces with component-based architecture.',
    useCases: [
      'Creating reusable UI components',
      'Building single-page applications',
      'Managing complex state with hooks',
      'Implementing responsive designs',
    ],
    projects: ['Portfolio Website'],
    yearsExperience: calculateYearsExperience(2022),
  },
  nextjs: {
    name: 'Next.js',
    category: 'framework',
    proficiency: 'expert',
    description:
      'Full-stack React framework with server-side rendering, static generation, and API routes.',
    useCases: [
      'Building SEO-optimized web applications',
      'Creating full-stack applications with API routes',
      'Implementing server-side rendering for better performance',
      'Deploying applications with Vercel',
    ],
    projects: ['Portfolio Website'],
    yearsExperience: calculateYearsExperience(2023),
  },
  nodejs: {
    name: 'Node.js',
    category: 'framework',
    proficiency: 'advanced',
    description: 'JavaScript runtime for building scalable server-side applications.',
    useCases: [
      'Creating RESTful APIs',
      'Building real-time applications with WebSockets',
      'Server-side rendering and middleware',
      'Database integration and management',
    ],
    projects: ['API Backend'],
    yearsExperience: calculateYearsExperience(2022),
  },
  angular: {
    name: 'Angular',
    category: 'framework',
    proficiency: 'beginner',
    description:
      'A comprehensive TypeScript-based framework for building large-scale web applications.',
    useCases: [
      'Building enterprise-level applications',
      'Creating complex single-page applications',
      'Implementing dependency injection patterns',
      'Developing applications with TypeScript',
    ],
    projects: [],
    yearsExperience: calculateYearsExperience(2025),
  },
  express: {
    name: 'Express.js',
    category: 'framework',
    proficiency: 'advanced',
    description: 'Fast, unopinionated, minimalist web framework for Node.js.',
    useCases: [
      'Building RESTful APIs and web servers',
      'Creating middleware for request processing',
      'Handling routing and HTTP methods',
      'Integrating with databases and authentication',
    ],
    projects: ['API Backend', 'RESTful Services'],
    yearsExperience: calculateYearsExperience(2022),
  },
};
