'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PortfolioItem as PortfolioItemType } from '@/constants/portfolio';
import { motion } from 'framer-motion';

interface PortfolioModalProps {
  item: PortfolioItemType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-base-100 relative mx-4 w-full max-w-6xl overflow-hidden rounded-lg shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn btn-sm btn-primary absolute top-4 right-4 z-10 rounded-lg"
        >
          CLOSE
        </button>

        {/* Modal Body */}
        <div className="flex flex-col lg:flex-row">
          {/* Screenshot Section */}
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col p-6 lg:w-1/2 lg:p-8">
            <div className="flex flex-1 flex-col space-y-4">
              {/* Title */}
              <h2 className="text-base-content text-2xl font-bold lg:text-3xl">{item.title}</h2>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="badge badge-outline text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="max-h-32 overflow-y-auto lg:max-h-40">
                <p className="text-base-content/80 pr-2 leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Action Buttons - Always at bottom */}
            <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row">
              {item.websiteUrl && (
                <Link
                  href={item.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 rounded-lg"
                >
                  WEBSITE
                </Link>
              )}
              {item.sourceUrl && (
                <Link
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 rounded-lg"
                >
                  SOURCE
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
