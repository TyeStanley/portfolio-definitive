import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Variants } from 'framer-motion';

interface UsePageTransitionReturn {
  isVisible: boolean;
  isExiting: boolean;
  pageVariants: Variants;
  handleNavigation: (href: string) => void;
}

/**
 * Custom hook for managing page transition animations
 * Provides consistent enter right, exit left animations across all pages
 * @returns Object containing transition state and control functions
 */
export function usePageTransition(): UsePageTransitionReturn {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  // Simple animation variants - always enter right, exit left
  const pageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: '100%', // Always enter from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      x: '-100%', // Always exit left
      transition: {
        duration: 0.3,
      },
    },
  };

  // Handle enter animation - Page always comes in from right
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // Handle navigation with simple exit animation
  const handleNavigation = (href: string) => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(href);
    }, 300); // Wait for exit animation to complete
  };

  return {
    isVisible,
    isExiting,
    pageVariants,
    handleNavigation,
  };
}
