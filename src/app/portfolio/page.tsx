'use client';

import PageWrapper from '@/components/PageWrapper';

export default function Portfolio() {
  return (
    <PageWrapper title="Portfolio">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-base-content group mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="from-primary to-accent group-hover:from-accent group-hover:to-primary bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300">
            Portfolio
          </span>
        </h1>
      </div>
    </PageWrapper>
  );
}
