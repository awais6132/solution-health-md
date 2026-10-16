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
      className={`relative w-full overflow-hidden site-section site-section-both min-h-[416px] flex items-center px-0 ${className}`}
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

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full box-border site-container">
        {/* Container ke andar 2 divs: Left 40% and Right 60% */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6">
          {/* Left Div: 40% Width */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <FaithIntro
              eyebrow={activeConfig.eyebrow}
              headline={activeConfig.headline}
              description={activeConfig.description}
              cta={activeConfig.cta}
            />
          </div>

          {/* Right Div: 60% Width */}
          <div className="w-full lg:w-[60%]">
            {/* Right Div ke andar 2 Divs: 50% / 50% equal divide */}
            <div className="flex flex-col sm:flex-row gap-5 w-full items-stretch">
              {activeConfig.cards.map((card) => (
                <FaithCard key={card.id} item={card} className="flex-1 w-full" />
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
