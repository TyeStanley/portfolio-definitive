'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useRef, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

// Define page order for animation direction
const pageOrder = ['/', '/about', '/portfolio', '/contact'];

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  // Animation variants
  const pageVariants = {
    initial: {
      x: '100%',
      opacity: 0,
    },
    in: {
      x: 0,
      opacity: 1,
    },
    out: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate' as const,
    duration: 0.5,
  };

  // Determine animation direction based on page order
  const getDirection = (currentPath: string, prevPath: string) => {
    const currentIndex = pageOrder.indexOf(currentPath);
    const prevIndex = pageOrder.indexOf(prevPath);

    if (currentIndex === -1 || prevIndex === -1) return 1;
    return currentIndex - prevIndex;
  };

  const direction = getDirection(pathname, previousPathnameRef.current);

  // Update the ref after direction calculation
  useEffect(() => {
    previousPathnameRef.current = pathname;
  }, [pathname]);

  // look at sync and other options
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={pageVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="out"
          transition={pageTransition}
          className="absolute inset-0 z-10 w-full opacity-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
