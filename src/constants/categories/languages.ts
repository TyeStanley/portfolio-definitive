import type { TechDetail } from '@/constants';
import { calculateYearsExperience } from '@/util';

export const LANGUAGES: Record<string, TechDetail> = {
  typescript: {
    name: 'TypeScript',
    category: 'language',
    proficiency: 'expert',
    description:
      'Strongly typed JavaScript that helps catch errors at compile time and improves code maintainability.',
    useCases: [
      'Building type-safe React applications',
      'Developing scalable frontend architectures',
      'Creating reusable component libraries',
      'Implementing complex UI state management',
    ],
    projects: ['Portfolio Website', 'Real-time Social App'],
    yearsExperience: calculateYearsExperience(2022),
  },
  html: {
    name: 'HTML5',
    category: 'language',
    proficiency: 'expert',
    description: 'The standard markup language for creating web pages and applications.',
    useCases: [
      'Creating semantic and accessible web pages',
      'Building responsive layouts and structures',
      'Implementing modern HTML5 features',
      'Optimizing for SEO and performance',
    ],
    projects: ['All Web Projects'],
    yearsExperience: calculateYearsExperience(2019),
  },
  css: {
    name: 'CSS3',
    category: 'language',
    proficiency: 'expert',
    description: 'Advanced styling language for creating beautiful and responsive web designs.',
    useCases: [
      'Creating responsive and mobile-first designs',
      'Building modern layouts with Flexbox and Grid',
      'Implementing smooth animations and micro-interactions',
      'Developing custom design systems and themes',
    ],
    projects: ['All Web Projects'],
    yearsExperience: calculateYearsExperience(2019),
  },
  python: {
    name: 'Python',
    category: 'language',
    proficiency: 'beginner',
    description: 'A versatile programming language known for its simplicity and readability.',
    useCases: [
      'Solving algorithm challenges and coding problems',
      'Learning data structures and algorithms',
      'Practicing problem-solving techniques',
      'Exploring Python syntax and features',
    ],
    projects: ['Algorithm Challenges'],
    yearsExperience: calculateYearsExperience(2025),
  },
  csharp: {
    name: 'C#',
    category: 'language',
    proficiency: 'intermediate',
    description: 'A modern, object-oriented programming language developed by Microsoft.',
    useCases: [
      'Game development with Unity engine',
      'Building web applications with .NET',
      'Learning object-oriented programming concepts',
      'Exploring C# language features and syntax',
    ],
    projects: ['.NET Applications', 'Unity Games'],
    yearsExperience: calculateYearsExperience(2024),
  },
  cpp: {
    name: 'C++',
    category: 'language',
    proficiency: 'beginner',
    description:
      'A powerful general-purpose programming language with low-level memory manipulation capabilities.',
    useCases: [
      'Game modification and reverse engineering',
      'Low-level memory manipulation and analysis',
      'Learning system programming concepts',
      'Exploring C++ language features and syntax',
    ],
    projects: ['Game Modification'],
    yearsExperience: calculateYearsExperience(2024),
  },
};
