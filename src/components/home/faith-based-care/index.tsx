import React from 'react';
import Image from 'next/image';
import { defaultFaithBasedCareConfig } from '@/constants/faith-based-care';
import { FaithBasedCareSectionProps } from '@/types/faith-based-care';
import { FaithIntro } from './faith-intro';
import { FaithCard } from './faith-card';

export const FaithBasedCareSection: React.FC<FaithBasedCareSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultFaithBasedCareConfig,
    ...config,
  };

  return (
    <section
      aria-label="Faith-Based Healthcare"
      className={`relative w-full overflow-hidden py-12 sm:py-16 lg:py-20 min-h-[416px] flex items-center ${className}`}
      style={{
        backgroundColor: '#1E293B',
      }}
    >
      {/* 1. Backdrop Scenic Image with Overlay */}
      {activeConfig.backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={activeConfig.backgroundImage}
            alt="Faith-based healthcare background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Overlay matching Figma color #0000007A */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: '#0000007A' }}
          />
        </div>
      )}

      {/* 2. Main Content Container (width: 1440px) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Intro Copy & Main CTA */}
          <div className="w-full lg:col-span-5 max-w-xl">
            <FaithIntro
              eyebrow={activeConfig.eyebrow}
              headline={activeConfig.headline}
              description={activeConfig.description}
              cta={activeConfig.cta}
            />
          </div>

          {/* Right Column: 2 White Feature Cards */}
          <div className="w-full lg:col-span-7 flex justify-center lg:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full max-w-[720px]">
              {activeConfig.cards.map((card) => (
                <FaithCard key={card.id} item={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaithBasedCareSection;
export * from './faith-intro';
export * from './faith-card';
