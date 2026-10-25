import React from 'react';
import Image from 'next/image';
import {
  PeptidesLifestyleBannerConfig,
  PeptidesLifestylePillarItem,
} from '@/types/peptides-page';
import { defaultPeptidesLifestyleBannerConfig } from '@/constants/peptides-page';

export interface PeptidesLifestyleBannerProps {
  config?: Partial<PeptidesLifestyleBannerConfig>;
  className?: string;
}

export function PeptidesLifestyleBanner({
  config,
  className = '',
}: PeptidesLifestyleBannerProps) {
  const activeConfig: PeptidesLifestyleBannerConfig = {
    ...defaultPeptidesLifestyleBannerConfig,
    ...config,
  };

  const renderIcon = (item: PeptidesLifestylePillarItem) => {
    if (item.renderIcon) {
      return item.renderIcon();
    }

    switch (item.iconName) {
      case 'lightning':
        return (
          // More Energy Lightning
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
          </svg>
        );
      case 'recovery':
      case 'person':
        return (
          // Better Recovery / Healthy Aging Person Avatar
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
          </svg>
        );
      case 'lightbulb':
        return (
          // Mental Clarity Lightbulb
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
            <line x1="12" y1="2" x2="12" y2="3.5" />
            <line x1="4.93" y1="4.93" x2="6" y2="6" />
            <line x1="19.07" y1="4.93" x2="18" y2="6" />
          </svg>
        );
      case 'moon':
        return (
          // Better Sleep Crescent Moon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        );
      case 'heart':
        return (
          // Healthy Metabolism Heart
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case 'dumbbell':
      case 'muscle':
        return (
          // Build & Maintain Muscle Dumbbell
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2.5" />
            <line x1="6" y1="9" x2="6" y2="15" strokeWidth="3" />
            <line x1="3" y1="10" x2="3" y2="14" strokeWidth="2.5" />
            <line x1="18" y1="9" x2="18" y2="15" strokeWidth="3" />
            <line x1="21" y1="10" x2="21" y2="14" strokeWidth="2.5" />
          </svg>
        );
      case 'shield':
        return (
          // Better Health Shield
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'leaf':
        return (
          // Healthy Aging Leaf
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        );
      case 'doctor':
        return (
          // Medical Guidance Doctor
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
            <path d="M12 11v3a2 2 0 0 0 4 0v-3" />
          </svg>
        );
      case 'sparkles':
      default:
        return (
          // Peak Performance Sparkle
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M19 3v4" />
            <path d="M21 5h-4" />
          </svg>
        );
    }
  };

  const scriptColor = activeConfig.scriptColor || 'text-white';
  const numPillars = activeConfig.pillars.length;

  return (
    <section
      aria-label={activeConfig.headline}
      className={`relative w-full overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-white ${className}`}
    >
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={activeConfig.imageSrc || '/assets/images/peptides-lifestyle-banner.png'}
          alt={activeConfig.imageAlt || activeConfig.headline}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right select-none"
        />

        {/* Gentle subtle fade on left so the exact image gradient shines through naturally */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/35 via-white/10 to-transparent w-full md:w-[60%] lg:w-[48%] pointer-events-none" />

        {/* Cursive Script on Right in Mountain Sky Area */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-16 right-4 xl:right-10 2xl:right-16 z-20 pointer-events-none select-none">
          <span
            style={{
              fontFamily: 'var(--font-caveat), "Caveat", cursive',
            }}
            className={`text-3xl sm:text-4xl lg:text-[44px] font-bold ${scriptColor} -rotate-6 block leading-[1.1] drop-shadow-md`}
          >
            {activeConfig.floatingScript ? (
              activeConfig.floatingScript.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            ) : (
              <>
                Hope
                <br />
                Healing
                <br />
                Purpose
              </>
            )}
          </span>
        </div>
      </div>

      {/* Layer 2: Main Content Container */}
      <div className="relative z-10 w-full site-container py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-start text-left w-full max-w-[680px] gap-3 sm:gap-4">
          {/* Main Headline */}
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#475569] leading-relaxed font-normal max-w-[500px]">
            {activeConfig.subheadline}
          </p>

          {/* Circular Wellness Pillars Row */}
          <div
            className={`grid grid-cols-3 sm:grid-cols-4 ${
              numPillars === 7 ? 'md:grid-cols-7' : 'md:grid-cols-6'
            } gap-2.5 sm:gap-3 pt-3 sm:pt-4 w-full`}
          >
            {activeConfig.pillars.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center text-center gap-2 group max-w-[88px]"
              >
                {/* White Solid Circle */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {renderIcon(p)}
                </div>

                {/* 2-Line Navy Text */}
                <div className="flex flex-col items-center justify-center text-center leading-[1.2]">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0E4A72] tracking-tight">
                    {p.line1}
                  </span>
                  {p.line2 && (
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#0E4A72] tracking-tight">
                      {p.line2}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeptidesLifestyleBanner;
