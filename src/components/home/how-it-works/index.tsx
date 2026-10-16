import React from 'react';
import { defaultHowItWorksConfig } from '@/constants/how-it-works';
import { HowItWorksSectionProps } from '@/types/how-it-works';
import { HowItWorksHeader } from './how-it-works-header';
import { StepCard } from './step-card';

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig = {
    ...defaultHowItWorksConfig,
    ...config,
  };

  if (!activeConfig.steps || activeConfig.steps.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="How It Works"
      className={`w-full bg-white site-section site-section-both px-0 ${className}`}
    >
      <div className="w-full box-border site-container flex flex-col gap-[30px]">
        {/* Centered Section Header */}
        <HowItWorksHeader
          headline={activeConfig.headline}
          subheadline={activeConfig.subheadline}
        />

        {/* 4-Step Cards Container */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-stretch gap-[20px] w-full">
          {activeConfig.steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
export * from './step-card';
export * from './step-number-badge';
export * from './how-it-works-header';
