'use client';

import Image from 'next/image';
import { PortfolioItem as PortfolioItemType } from '@/constants/portfolio';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick: (item: PortfolioItemType) => void;
}

export default function PortfolioItem({ item, onClick }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 hover:shadow-2xl">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={300}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
}
