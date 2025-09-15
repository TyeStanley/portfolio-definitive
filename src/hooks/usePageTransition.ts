import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Variants } from 'framer-motion';

interface UsePageTransitionReturn {
  isVisible: boolean;
  isExiting: boolean;
  pageVariants: Variants;
  handleNavigation: (href: string) => void;
}

// Animation directions
type AnimationDirection = 'left' | 'right' | 'up' | 'down' | 'none';

/**
 * Custom hook for managing page transition animations
 * Entrance direction based on previous page, exit direction based on target page
 * @returns Object containing transition state and control functions
 */
export function usePageTransition(): UsePageTransitionReturn {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [targetPage, setTargetPage] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Clear sessionStorage on page refresh/reload
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleBeforeUnload = () => {
        try {
          sessionStorage.removeItem('previousPage');
        } catch {
          console.warn('sessionStorage not available');
        }
      };

      // Listen for page refresh/reload
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, []);

  // Get previous page from sessionStorage (persists across page navigations)
  const getPreviousPage = (): string | null => {
    if (typeof window === 'undefined') return null;
    try {
      return sessionStorage.getItem('previousPage');
    } catch {
      // Handle cases where sessionStorage is not available
      return null;
    }
  };

  // Determine entrance direction based on previous page
  const getEntranceDirection = (): AnimationDirection => {
    const previousPage = getPreviousPage();

    // If no previous page (initial load or sessionStorage not available), no animation
    if (!previousPage) return 'none';

    // When coming from home page, new page slides up from bottom
    if (previousPage === '/') {
      return 'up';
    }

    // When coming to home page, home slides down from top
    if (pathname === '/') {
      return 'down';
    }

    // About page entrance logic
    if (pathname === '/about') {
      return 'left';
    }

    // Portfolio page entrance logic
    if (pathname === '/portfolio') {
      if (previousPage === '/about') {
        return 'right';
      }
      return 'left';
    }

    // Contact page entrance logic
    if (pathname === '/contact') {
      return 'right';
    }

    // For all other navigation, enters right
    return 'right';
  };

  // Determine exit direction based on target page
  const getExitDirection = (): AnimationDirection => {
    if (!targetPage) return 'up'; // Default fallback

    // When going to home page, slides down
    if (targetPage === '/') {
      return 'down';
    }

    // When going from home to other pages, slides up
    if (pathname === '/') {
      return 'up';
    }

    // About page exit logic, exits left
    if (pathname === '/about') {
      return 'left';
    }

    // Portfolio page exit logic, exits right going to about or exits left
    if (pathname === '/portfolio') {
      if (targetPage === '/about') {
        return 'right';
      }
      return 'left';
    }

    // Contact page exit logic
    if (pathname === '/contact') {
      return 'right';
    }

    // For all other navigation, exits left
    return 'left';
  };

  const entranceDirection = getEntranceDirection();
  const exitDirection = getExitDirection();

  // Create animation variants based on directions
  const getPageVariants = (
    entranceDir: AnimationDirection,
    exitDir: AnimationDirection,
  ): Variants => {
    // Handle no animation case
    if (entranceDir === 'none') {
      return {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        },
      };
    }

    const getHiddenPosition = (direction: AnimationDirection) => {
      switch (direction) {
        case 'left':
          return { opacity: 0, x: '-100%' };
        case 'right':
          return { opacity: 0, x: '100%' };
        case 'up':
          return { opacity: 0, y: '100%' };
        case 'down':
          return { opacity: 0, y: '-100%' };
        default:
          return { opacity: 0, x: '100%' };
      }
    };

    const getExitPosition = (direction: AnimationDirection) => {
      switch (direction) {
        case 'left':
          return { opacity: 0, x: '-100%', y: 0 };
        case 'right':
          return { opacity: 0, x: '100%', y: 0 };
        case 'up':
          return { opacity: 0, x: 0, y: '-100%' };
        case 'down':
          return { opacity: 0, x: 0, y: '100%' };
        default:
          return { opacity: 0, x: '-100%', y: 0 };
      }
    };

    return {
      hidden: getHiddenPosition(entranceDir),
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          staggerChildren: 0.1,
        },
      },
      exit: {
        ...getExitPosition(exitDir),
        transition: {
          duration: 0.3,
        },
      },
    };
  };

  const pageVariants = getPageVariants(entranceDirection, exitDirection);

  // Handle enter animation
  useEffect(() => {
    // For initial load with no animation, show immediately
    if (entranceDirection === 'none') {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [entranceDirection]);

  // Handle navigation with previous page tracking
  const handleNavigation = (href: string) => {
    // Store current page as previous page in sessionStorage
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('previousPage', pathname);
      } catch {
        console.warn('sessionStorage not available');
      }
    }

    // Set target page for exit direction calculation
    setTargetPage(href);

    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, 300);
  };

  return {
    isVisible,
    isExiting,
    pageVariants,
    handleNavigation,
  };
}
