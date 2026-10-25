import React from 'react';
import { defaultHowItWorksConfig } from '@/constants/how-it-works';
import { HowItWorksSectionProps } from '@/types/how-it-works';
import { HowItWorksHeader } from './how-it-works-header';
import { StepCard } from './step-card';
import { MinimalStepItem } from './minimal-step-item';

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  config,
  className = '',
  variant = 'cards',
}) => {
  const activeConfig = {
    ...defaultHowItWorksConfig,
    ...config,
  };

  if (!activeConfig.steps || activeConfig.steps.length === 0) {
    return null;
  }

  // 1. MINIMAL VARIANT (Used on Service pages matching Figma design)
  if (variant === 'minimal') {
    return (
      <section
        id="how-it-works"
        aria-label="How It Works"
        className={`w-full bg-white site-section site-section-both scroll-mt-20 ${className}`}
      >
        <div className="w-full box-border site-container flex flex-col gap-6 sm:gap-8">
          {/* Left-Aligned Header */}
          <div className="flex flex-col gap-1.5 text-left">
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.headline}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {activeConfig.subheadline}
            </p>
          </div>

          {/* 4-Column Clean Grid without Box Containers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 w-full">
            {activeConfig.steps.map((step) => (
              <MinimalStepItem key={step.id} step={step} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 2. CARDS VARIANT (Default Home Page Layout)
  return (
    <section
      id="how-it-works"
      aria-label="How It Works"
      className={`w-full bg-white site-section site-section-both px-0 scroll-mt-20 ${className}`}
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
export * from './minimal-step-item';

