import React from 'react';
import Image from 'next/image';
import { defaultWholePersonCareConfig } from '@/constants/whole-person-care';
import { WholePersonCareSectionProps } from '@/types/whole-person-care';
import { CareIntro } from './care-intro';
import { CareTagline } from './care-tagline';
import { PillarCard } from './pillar-card';

export const WholePersonCareSection: React.FC<WholePersonCareSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultWholePersonCareConfig,
    ...config,
  };

  return (
    <section
      aria-label="Whole-Person Care and Wellness Pillars"
      className={`relative w-full max-w-full overflow-hidden overflow-x-hidden py-16 sm:py-20 lg:py-24 min-h-[480px] flex items-center bg-[#071F3D] ${className}`}
    >
      {/* 1. Panoramic Scenic Background Image */}
      {activeConfig.backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={activeConfig.backgroundImage}
            alt="Care designed around the whole you background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />

          {/* Deep Ocean Blue to Teal Gradient Layer for crisp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#072448]/90 via-[#0B3C68]/70 to-[#072448]/55" />
          <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />
        </div>
      )}

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Top Split Header: Left Intro & Right Cursive Tagline */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
          <CareIntro
            headline={activeConfig.headline}
            description={activeConfig.description}
          />
          <CareTagline tagline={activeConfig.tagline} />
        </div>

        {/* Bottom 6 Glassmorphism Pillar Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 lg:gap-5">
          {activeConfig.pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WholePersonCareSection;
export * from './care-intro';
export * from './care-tagline';
export * from './pillar-card';
