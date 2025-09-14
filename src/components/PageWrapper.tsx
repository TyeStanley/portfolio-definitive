'use client';

import Navbar from '@/components/Navbar';
import { usePageTransition } from '@/hooks/usePageTransition';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageWrapperProps {
  title: 'About' | 'Portfolio' | 'Contact';
  children: ReactNode;
}

export default function PageWrapper({ title, children }: PageWrapperProps) {
  const { isVisible, isExiting, pageVariants, handleNavigation } = usePageTransition();

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate={isExiting ? 'exit' : isVisible ? 'visible' : 'hidden'}
        className="absolute inset-0 w-full"
      >
        <Navbar title={title} handleNavigation={handleNavigation} />

        {/* Main content area */}
        <div className="mx-auto flex max-w-5xl flex-1 items-center justify-center px-6 pb-12">
          <div className="container mx-auto">
            {/* Main card container */}
            <div className="card bg-base-100/80 hover:shadow-3xl relative mx-auto max-w-5xl overflow-hidden shadow-2xl backdrop-blur-sm transition-all duration-300">
              {/* Diagonal gradient overlay */}
              <div className="from-primary/10 via-accent/5 to-base-200/30 pointer-events-none absolute inset-0 bg-gradient-to-br" />
              <div className="card-body relative z-10 p-6 text-center sm:p-8 md:p-12">
                {children}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
