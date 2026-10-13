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
      className={`relative w-full overflow-hidden py-[50px] min-h-[416px] flex items-center px-[25px] ${className}`}
      style={{
        backgroundColor: '#1E293B',
        padding: '50px 25px',
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
      <div className="relative z-10 w-full max-w-[1440px] mx-auto box-border">
        {/* Container ke andar 2 divs: Left 40% and Right 60% */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-10 w-full">
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
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
            {/* Right Div ke andar 2 Divs: 50% / 50% equal divide */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 w-full max-w-[720px] justify-items-center lg:justify-items-end">
              {activeConfig.cards.map((card) => (
                <div key={card.id} className="w-full max-w-[348.06px] flex justify-center">
                  <FaithCard item={card} className="w-full" />
                </div>
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
