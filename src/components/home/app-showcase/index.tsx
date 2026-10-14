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
      className={`relative w-full bg-[#F4F8FA] overflow-hidden py-14 sm:py-18 lg:py-22 px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      <div className="w-full mx-auto box-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Heading, Description & Download Badges (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <AppIntro
              headline={activeConfig.headline}
              description={activeConfig.description}
              badges={activeConfig.badges}
            />
          </div>

          {/* Center Column: Phone Mockups with Circular Backdrop (4-5 cols) */}
          <div className="lg:col-span-4 xl:col-span-5 flex justify-center py-4 lg:py-0">
            <AppMockup data={activeConfig.mockup} imageSrc={activeConfig.imageSrc} />
          </div>

          {/* Right Column: 6 Features & Script Tagline (4 cols on lg, 3 cols on xl) */}
          <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-end">
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
