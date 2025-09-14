// Type definitions
export interface TechDetail {
  name: string;
  category: 'language' | 'framework' | 'library';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
  useCases: string[];
  projects?: string[];
  yearsExperience?: number;
}

export const TECH_CATEGORIES = {
  language: 'Languages',
  framework: 'Frameworks',
  library: 'Libraries',
} as const;

export type TechCategory = keyof typeof TECH_CATEGORIES;

// Import technology objects from category files
import { LANGUAGES } from './categories/languages';
import { FRAMEWORKS } from './categories/frameworks';
import { LIBRARIES } from './categories/libraries';

// Combine all technologies into a single object (used in about page)
export const TECHNOLOGIES: Record<string, TechDetail> = {
  ...LANGUAGES,
  ...FRAMEWORKS,
  ...LIBRARIES,
};

// Export individual category objects for direct access
export { LANGUAGES, FRAMEWORKS, LIBRARIES };
