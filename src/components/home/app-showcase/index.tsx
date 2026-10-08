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
      className={`relative w-full max-w-full bg-[#F4F8FA] overflow-hidden overflow-x-hidden py-16 sm:py-20 lg:py-24 ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Description & Download Badges (4 cols) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <AppIntro
              headline={activeConfig.headline}
              description={activeConfig.description}
              badges={activeConfig.badges}
            />
          </div>

          {/* Center Column: Phone Mockups with Circular Backdrop (5 cols) */}
          <div className="lg:col-span-5 flex justify-center py-4 lg:py-0">
            <AppMockup data={activeConfig.mockup} imageSrc={activeConfig.imageSrc} />
          </div>

          {/* Right Column: 6 Features & Script Tagline (3 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
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
