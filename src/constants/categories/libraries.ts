import type { TechDetail } from '@/constants';
import { calculateYearsExperience } from '@/util';

export const LIBRARIES: Record<string, TechDetail> = {
  tailwind: {
    name: 'Tailwind CSS',
    category: 'library',
    proficiency: 'expert',
    description:
      'Utility-first CSS framework for rapid UI development with consistent design systems.',
    useCases: [
      'Rapid prototyping and development',
      'Creating responsive designs',
      'Building component libraries',
      'Maintaining consistent design systems',
    ],
    projects: ['All Web Projects'],
    yearsExperience: calculateYearsExperience(2022),
  },
  redux: {
    name: 'Redux Toolkit',
    category: 'library',
    proficiency: 'advanced',
    description:
      'The official, opinionated, batteries-included toolset for efficient Redux development.',
    useCases: [
      'Managing complex application state',
      'Implementing predictable state updates',
      'Building scalable React applications',
      'Handling asynchronous operations with RTK Query',
    ],
    projects: ['State Management'],
    yearsExperience: calculateYearsExperience(2024),
  },
  framer: {
    name: 'Framer Motion',
    category: 'library',
    proficiency: 'beginner',
    description: 'A production-ready motion library for React with declarative animations.',
    useCases: [
      'Creating smooth page transitions',
      'Building interactive animations',
      'Implementing gesture-based interactions',
      'Adding micro-interactions to UI components',
    ],
    projects: ['Interactive UIs'],
    yearsExperience: calculateYearsExperience(2025),
  },
  zustand: {
    name: 'Zustand',
    category: 'library',
    proficiency: 'advanced',
    description: 'A small, fast and scalable bearbones state-management solution.',
    useCases: [
      'Managing simple application state',
      'Creating lightweight state stores',
      'Building React applications with minimal boilerplate',
      'Learning modern state management patterns',
    ],
    projects: ['State Management'],
    yearsExperience: calculateYearsExperience(2023),
  },
};
