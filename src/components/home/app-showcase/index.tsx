import React from 'react';
import { defaultAppShowcaseConfig } from '@/constants/app-showcase';
import { AppShowcaseSectionProps } from '@/types/app-showcase';
import { AppIntro } from './app-intro';
import { AppMockup } from './app-mockup';
import { AppFeatures } from './app-features';

export const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultAppShowcaseConfig,
    ...config,
  };

  return (
    <section
      aria-label="Patient Portal and Mobile App"
      className={`relative w-full bg-[#F4F8FA] overflow-hidden site-section px-0 ${className}`}
    >
      <div className="w-full box-border site-container">
        {/* 3 Equal 33% Columns Flex Container */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 w-full">
          {/* Left Column: 33% Width */}
          <div className="w-full lg:w-[33.333%] flex flex-col items-start justify-center">
            <AppIntro
              headline={activeConfig.headline}
              description={activeConfig.description}
              badges={activeConfig.badges}
            />
          </div>

          {/* Center Column: 33% Width */}
          <div className="w-full lg:w-[33.333%] flex items-center justify-center">
            <AppMockup data={activeConfig.mockup} imageSrc={activeConfig.imageSrc} />
          </div>

          {/* Right Column: 33% Width */}
          <div className="w-full lg:w-[33.333%] flex flex-col items-start justify-center">
            <AppFeatures
              features={activeConfig.features}
              tagline={activeConfig.tagline}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
export * from './app-intro';
export * from './app-mockup';
export * from './phone-screen';
export * from './app-features';
