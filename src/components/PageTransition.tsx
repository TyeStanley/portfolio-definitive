'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Define page order for animation direction (vertical flow)
const pageOrder = ['/', '/about', '/portfolio', '/contact'];

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [previousPath, setPreviousPath] = useState(pathname);

  // Get animation direction based on page order
  const getDirection = (currentPath: string, prevPath: string) => {
    const currentIndex = pageOrder.indexOf(currentPath);
    const prevIndex = pageOrder.indexOf(prevPath);

    if (currentIndex === -1 || prevIndex === -1) return 1;
    return currentIndex - prevIndex;
  };

  const direction = getDirection(pathname, previousPath);

  // Vertical sliding animation variants
  const pageVariants = {
    hidden: {
      opacity: 0,
      y: direction > 0 ? '100%' : '-100%', // Slide up from bottom or down from top
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'anticipate',
        staggerChildren: 0.1,
      },
    },
  };

  // Reset animation on pathname change
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
      setPreviousPath(pathname);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-y-hidden">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="absolute inset-0 w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
