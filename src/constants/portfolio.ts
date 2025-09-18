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
  {
    id: 'xphub',
    title: 'XPHUB - Liquid Bulk Transport',
    description:
      'A modern, responsive website showcasing professional web development skills through a fictional liquid bulk transport company. Features an interactive quote system, comprehensive service showcase, customer testimonials carousel, and professional UI/UX design. Built with React, Next.js, and TypeScript to demonstrate full-stack development capabilities, form validation, email integration, and SEO optimization.',
    image: '/portfolio/xphub.png',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    websiteUrl: 'https://xphub.us/',
    sourceUrl: 'https://github.com/TyeStanley/xphub',
  },
  {
    id: 'lunatune',
    title: 'Lunatune - Music Streaming Platform',
    description:
      'A sophisticated, full-stack music streaming application with advanced audio processing and real-time visualization. Features dual-audio system with seamless crossfading, interactive audio visualizer, playlist management, and comprehensive playback controls. Built with React, Next.js, Redux Toolkit, and Web Audio API, demonstrating advanced frontend development skills with 90%+ test coverage and production-ready architecture.',
    image: '/portfolio/lunatune-app.png',
    technologies: ['TypeScript', 'Next.js', 'Redux Toolkit', 'Web Audio API'],
    websiteUrl: 'https://lunatune-app.vercel.app/',
    sourceUrl: 'https://github.com/TyeStanley/lunatune-app',
  },
  {
    id: 'lunatune-api',
    title: 'Lunatune - Backend API',
    description:
      'A robust, scalable .NET Web API backend for a music streaming platform. Features enterprise-grade authentication, playlist management, and cloud storage integration. Powers a React/Next.js frontend with comprehensive API documentation and production-ready security.',
    image: '#',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core'],
    websiteUrl: 'https://lunatune-app.vercel.app/',
    sourceUrl: 'https://github.com/TyeStanley/lunatune-api',
  },
];
