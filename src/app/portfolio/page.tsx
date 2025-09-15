'use client';

import PageWrapper from '@/components/PageWrapper';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioModal from '@/components/PortfolioModal';
import { useModal } from '@/hooks/useModal';
import { PortfolioItem as PortfolioItemType, portfolioItems } from '@/constants/portfolio';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const portfolioModal = useModal<PortfolioItemType>();

  return (
    <>
      <PageWrapper title="Portfolio">
        {/* Mobile: Horizontal scrollable grid */}
        <div className="block sm:hidden">
          {/* Top divider */}
          <div className="via-accent mb-4 h-px bg-gradient-to-r from-transparent to-transparent" />

          {/* Scrollable container */}
          <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-48 flex-shrink-0"
              >
                <PortfolioItem item={item} onClick={portfolioModal.open} />
              </motion.div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="via-accent mb-4 h-px bg-gradient-to-r from-transparent to-transparent" />

          {/* Enhanced scroll indicator */}
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="bg-primary/30 h-1 w-1 rounded-full" />
            <div className="text-base-content/60 text-xs font-medium">
              Swipe to explore more projects
            </div>
            <div className="bg-primary/30 h-1 w-1 rounded-full" />
          </div>
        </div>

        {/* Desktop: Regular grid */}
        <div className="hidden sm:block">
          {/* Top divider */}
          <div className="via-accent mb-4 h-px bg-gradient-to-r from-transparent to-transparent" />

          {/* Grid */}
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioItem item={item} onClick={portfolioModal.open} />
              </motion.div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="via-accent mb-4 h-px bg-gradient-to-r from-transparent to-transparent" />
        </div>
      </PageWrapper>

      {/* Portfolio Modal */}
      <PortfolioModal
        item={portfolioModal.data}
        isOpen={portfolioModal.isOpen}
        onClose={portfolioModal.close}
      />
    </>
  );
}
