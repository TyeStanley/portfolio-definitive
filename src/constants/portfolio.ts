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
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal developer profile showcasing skills and experience',
    image: '/beach-bg.jpg',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    websiteUrl: '#',
    sourceUrl: '#',
  },
  {
    id: '2',
    title: 'Tesla Website Clone',
    description:
      'This website is a clone of the Tesla website and is currently under development. However, I have made it available for viewing. I am working to ensure that all features and functionality on the site mimic the behavior of the original Tesla website as closely as possible. Thank you for your interest in the site!',
    image: '/beach-bg.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    websiteUrl: '#',
    sourceUrl: '#',
  },
];
