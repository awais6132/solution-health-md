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
      className={`w-full bg-white ${className}`}
      style={{
        paddingTop: '65px',
        paddingBottom: '65px',
        backgroundColor: '#FFFFFF',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        {/* Centered Section Header */}
        <HowItWorksHeader
          headline={activeConfig.headline}
          subheadline={activeConfig.subheadline}
        />

        {/* 4-Step Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-6.5 justify-items-center">
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
