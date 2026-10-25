import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { SimpleProcessConfig, ProcessStepItem } from '@/types/services-page';
import { defaultSimpleProcessConfig } from '@/constants/services-page';

export interface SimpleProcessBannerProps {
  config?: Partial<SimpleProcessConfig>;
  className?: string;
}

export function SimpleProcessBanner({
  config,
  className = '',
}: SimpleProcessBannerProps) {
  const activeConfig: SimpleProcessConfig = {
    ...defaultSimpleProcessConfig,
    ...config,
    steps: config?.steps || defaultSimpleProcessConfig.steps,
  };

  // Render specific icons matching the Figma screenshot
  const renderFigmaStepIcon = (iconName: ProcessStepItem['iconName']) => {
    switch (iconName) {
      case 'molecule':
        return (
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center core */}
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
            {/* Satellite nodes */}
            <circle cx="12" cy="3.5" r="1.8" fill="currentColor" />
            <circle cx="12" cy="20.5" r="1.8" fill="currentColor" />
            <circle cx="3.5" cy="12" r="1.8" fill="currentColor" />
            <circle cx="20.5" cy="12" r="1.8" fill="currentColor" />
            <circle cx="6" cy="6" r="1.4" fill="currentColor" />
            <circle cx="18" cy="18" r="1.4" fill="currentColor" />
            <circle cx="6" cy="18" r="1.4" fill="currentColor" />
            <circle cx="18" cy="6" r="1.4" fill="currentColor" />
            {/* Inner detail dots */}
            <circle cx="10.5" cy="11.5" r="0.9" fill="currentColor" />
            <circle cx="13.5" cy="12.5" r="0.9" fill="currentColor" />
          </svg>
        );
      case 'form':
        return (
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Background card offset */}
            <path d="M7 3h10a2 2 0 0 1 2 2v12" strokeOpacity="0.5" />
            {/* Main form clipboard sheet */}
            <rect x="4" y="6" width="13" height="15" rx="2.5" fill="rgba(255,255,255,0.15)" />
            <line x1="8" y1="10" x2="13" y2="10" strokeWidth="2" />
            <circle cx="8" cy="14" r="0.8" fill="currentColor" />
            <line x1="10.5" y1="14" x2="14" y2="14" strokeWidth="1.8" />
            <circle cx="8" cy="17" r="0.8" fill="currentColor" />
            <line x1="10.5" y1="17" x2="14" y2="17" strokeWidth="1.8" />
          </svg>
        );
      case 'delivery':
        return (
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Hand truck vertical shaft and wheel */}
            <circle cx="7" cy="19" r="2.2" strokeWidth="2" fill="currentColor" />
            <line x1="5.5" y1="17" x2="17" y2="17" strokeWidth="2" />
            <line x1="5.5" y1="17" x2="3.5" y2="3.5" strokeWidth="2.2" />
            <line x1="2.5" y1="4.5" x2="5" y2="3.5" strokeWidth="2" />
            {/* Parcel boxes on trolley */}
            <rect x="7" y="7.5" width="8" height="7.5" rx="1" fill="rgba(255,255,255,0.25)" strokeWidth="1.8" />
            <path d="M10 7.5v7.5" strokeOpacity="0.7" />
          </svg>
        );
      default:
        return (
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        );
    }
  };

  return (
    <section
      id="how-it-works"
      aria-label="Using Solutions Health MD is Simple"
      className={`relative w-full overflow-hidden site-section site-section-both min-h-[380px] lg:min-h-[420px] flex items-center py-12 sm:py-16 ${className}`}
    >
      {/* 1. Exact Scenic Lake Sunset Background with Birds & Meditator */}
      {activeConfig.backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={activeConfig.backgroundImage}
            alt="Using Solutions Health MD is Simple scenic sunset lake"
            fill
            sizes="100vw"
            className="object-cover object-center select-none"
            priority={false}
          />
          {/* Subtle ocean-blue gradient wash on left matching Figma */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C5885]/88 via-[#0F6597]/55 to-transparent pointer-events-none" />
        </div>
      )}

      {/* 2. Main Content Container (2-Column Split Layout matching Figma) */}
      <div className="site-container relative z-10 w-full box-border">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN: Green Badge + Heading + Description + Explore Services Button */}
          <div className="w-full lg:w-[48%] xl:w-[46%] flex flex-col items-start gap-4 sm:gap-5">
            {/* Top Heading Row with Green Circle Back Icon */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4B9B44] flex items-center justify-center shrink-0 shadow-sm">
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8l-4 4 4 4" />
                  <path d="M16 12H8" />
                </svg>
              </div>

              <h2
                className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
              >
                {activeConfig.headline}
              </h2>
            </div>

            {/* Description Copy */}
            <p
              className="text-sm sm:text-[15px] lg:text-[15.5px] text-white/90 leading-relaxed font-normal max-w-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.description}
            </p>

            {/* Explore Services CTA Button */}
            {activeConfig.cta && (
              <div className="pt-1 sm:pt-2">
                <Link href={activeConfig.cta.href}>
                  <Button
                    variant="secondary"
                    className="font-semibold text-sm sm:text-base px-6 sm:px-7 py-2.5 sm:py-3 rounded-full cursor-pointer"
                  >
                    {activeConfig.cta.label}
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: 3 Vertical Steps with Frosted Glass Icons */}
          <div className="w-full lg:w-[50%] xl:w-[48%] flex flex-col gap-5 sm:gap-6">
            {activeConfig.steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4 sm:gap-5 group">
                {/* Circular Frosted Glass Badge with SVG Icon */}
                <div className="w-14 h-14 sm:w-[62px] sm:h-[62px] rounded-full bg-white/20 backdrop-blur-md border border-white/35 flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.14)] group-hover:scale-105 group-hover:bg-white/25 transition-all duration-300">
                  {renderFigmaStepIcon(step.iconName)}
                </div>

                {/* Step Details */}
                <div className="flex flex-col gap-0.5 sm:gap-1">
                  <h3
                    className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug"
                    style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm text-slate-100/90 leading-relaxed font-normal"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleProcessBanner;
