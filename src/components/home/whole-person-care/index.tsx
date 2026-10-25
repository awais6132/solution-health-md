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
      id="about"
      aria-label="Whole-Person Care and Wellness Pillars"
      className={`relative w-full overflow-hidden site-section site-section-both flex items-center bg-[#071F3D] scroll-mt-20 ${className}`}
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
      <div className="relative z-10 w-full site-container flex flex-col gap-[30px]">
        {/* Top Split Header: Left Intro & Right Cursive Tagline */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <CareIntro
            headline={activeConfig.headline}
            description={activeConfig.description}
          />
          <CareTagline tagline={activeConfig.tagline} />
        </div>

        {/* Bottom 6 Glassmorphism Pillar Cards Flex Row */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch justify-between gap-4">
          {activeConfig.pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
            />
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
