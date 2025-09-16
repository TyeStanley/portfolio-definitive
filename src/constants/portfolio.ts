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
    description: '',
    image: '/portfolio/portfolio.png',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    websiteUrl: 'https://tyestanley.com/',
    sourceUrl: 'https://github.com/TyeStanley/portfolio-definitive',
  },
];
