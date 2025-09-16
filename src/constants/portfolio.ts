export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my professional journey as a Software Developer. Built with cutting-edge web technologies, this site features smooth animations, interactive components, and a clean, professional design. The portfolio demonstrates my expertise in React, TypeScript, and modern web development practices, while providing an engaging user experience across all devices.',
    image: '/portfolio/portfolio.png',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    websiteUrl: 'https://tyestanley.com/',
    sourceUrl: 'https://github.com/TyeStanley/portfolio-definitive',
  },
];
