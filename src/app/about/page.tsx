'use client';

import Image from 'next/image';
import { Code, Server, Award, Cog } from 'lucide-react';
import TechSection from '@/components/TechSection';
import SpecializationModal from '@/components/SpecializationModal';
import TechModal from '@/components/TechModal';
import PageWrapper from '@/components/PageWrapper';
import { TechDetail } from '@/constants';
import { useModal } from '@/hooks/useModal';

export default function About() {
  const specializationModal = useModal<'frontend' | 'backend'>();
  const techModal = useModal<TechDetail>();

  return (
    <>
      <PageWrapper title="About">
        {/* Profile Picture and Info Section */}
        <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          {/* Profile Picture */}
          <div className="avatar group">
            <div className="ring-primary ring-offset-base-100 group-hover:ring-accent h-36 w-36 rounded-full ring ring-offset-4 transition-all duration-300 sm:h-40 sm:w-40">
              <Image
                src="/me.jpg"
                alt="Tye Stanley"
                width={160}
                height={160}
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="text-center sm:text-left">
            <h1 className="text-base-content group mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              <span className="from-primary to-accent group-hover:from-accent group-hover:to-primary bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300">
                Tye Stanley
              </span>
            </h1>
            <div className="text-base-content/70 mb-1 flex items-center justify-center gap-2 sm:justify-start">
              <Cog className="text-accent h-4 w-4" />
              <span className="text-sm font-medium">Software Developer</span>
            </div>
            <div className="text-base-content/70 flex items-center justify-center gap-2 sm:justify-start">
              <Award className="text-accent h-4 w-4" />
              <span className="text-sm font-medium">UT University Graduate</span>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div className="mx-auto mb-10 max-w-4xl">
          <div className="bg-base-200/50 group hover:bg-base-200/70 relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg sm:p-8">
            <p className="text-base-content/90 text-base leading-relaxed sm:text-lg">
              Established and driven software engineer applying Full Stack Developer background with
              a strong drive to improve/learn skill sets in relation to creating full-fledged
              websites with high performance and strong optimization. I have graduated from the
              Bootcamp program and obtained my certificate in full stack web development from UT
              University.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => specializationModal.open('frontend')}
            className="btn btn-primary btn-lg hover:btn-accent group rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Code className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            FRONT-END
          </button>
          <button
            onClick={() => specializationModal.open('backend')}
            className="btn btn-primary btn-lg hover:btn-accent group rounded-lg px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Server className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            BACK-END
          </button>
        </div>

        {/* Skills/Technologies */}
        <div className="mb-10">
          <h3 className="text-base-content mb-6 text-center text-xl font-semibold">
            Technologies & Skills
          </h3>
          <TechSection onTechClick={techModal.open} />
        </div>
      </PageWrapper>
      {/* Specialization Modal */}
      <SpecializationModal
        type={specializationModal.data}
        isOpen={specializationModal.isOpen}
        onClose={specializationModal.close}
      />

      {/* Tech Modal */}
      <TechModal tech={techModal.data} isOpen={techModal.isOpen} onClose={techModal.close} />
    </>
  );
}
