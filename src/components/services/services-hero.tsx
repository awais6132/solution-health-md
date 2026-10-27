import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ServicesHeroConfig } from '@/types/services-page';
import { defaultServicesHeroConfig } from '@/constants/services-page';

export interface ServicesHeroProps {
  config?: Partial<ServicesHeroConfig>;
  className?: string;
}

export function ServicesHero({ config, className = '' }: ServicesHeroProps) {
  const activeConfig: ServicesHeroConfig = {
    ...defaultServicesHeroConfig,
    ...config,
  };

  const isDermatology = Boolean(activeConfig.isDermatology || activeConfig.badge === 'DERMATOLOGY');

  return (
    <>
      {/* 1. DESKTOP & TABLET PANORAMIC VIEW (100% EXACT FIGMA MATCH) */}
      <section
        aria-label="Our Services Introduction"
        className={`relative w-full bg-white hidden md:flex items-center overflow-hidden ${
          isDermatology
            ? 'min-h-[460px] lg:min-h-[500px] xl:min-h-[520px]'
            : 'min-h-[440px] lg:min-h-[500px] xl:min-h-[540px]'
        } ${className}`}
      >
        {/* Layer 1: Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {activeConfig.imageAlign === 'right' ? (
            <div className="relative w-full h-full md:w-[58%] lg:w-[52%] xl:w-[48%] md:ml-auto">
              <Image
                src={activeConfig.imageSrc}
                alt={activeConfig.imageAlt || (typeof activeConfig.title === 'string' ? activeConfig.title : 'Healthcare banner')}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: activeConfig.imagePosition || 'right center',
                }}
                className="select-none"
              />
              {/* Soft fade on the left of the image to blend into white */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            </div>
          ) : (
            <>
              <Image
                src={activeConfig.imageSrc}
                alt={activeConfig.imageAlt || (typeof activeConfig.title === 'string' ? activeConfig.title : 'Healthcare banner')}
                fill
                priority
                sizes="(max-width: 2048px) 100vw, 2048px"
                style={{
                  objectFit: 'cover',
                  objectPosition: activeConfig.imagePosition || 'right center',
                }}
                className="select-none"
              />
              {/* Subtle soft white gradient overlay on left to guarantee 100% crisp text readability without obscuring right subject */}
              <div
                className={`absolute inset-0 z-10 pointer-events-none ${
                  activeConfig.overlayGradient ||
                  (isDermatology
                    ? 'bg-gradient-to-r from-white/80 via-white/40 via-35% to-transparent w-full md:w-[56%] lg:w-[48%]'
                    : 'bg-gradient-to-r from-white via-white/90 via-35% to-transparent w-full md:w-[60%] lg:w-[52%]')
                }`}
              />
            </>
          )}

          {/* Optional Stylish Floating Tagline (only render when not already in image) */}
          {activeConfig.floatingTagline && !isDermatology && (
            <div className="absolute top-8 lg:top-12 right-8 lg:right-20 xl:right-28 z-20 pointer-events-none select-none">
              <span
                style={{
                  fontFamily: 'var(--font-caveat), "Caveat", cursive',
                }}
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0E6C9B] -rotate-6 block drop-shadow-xs tracking-wide"
              >
                {activeConfig.floatingTagline}
              </span>
            </div>
          )}
        </div>

        {/* Layer 2: Text & Buttons positioned over the white fade in site-container */}
        <div className="relative z-20 w-full box-border site-container py-12 lg:py-16">
          <div className="flex flex-col items-start text-left w-full md:w-[64%] lg:w-[56%] xl:w-[52%] max-w-[680px] gap-4 sm:gap-5 lg:gap-6">
            {/* Eyebrow Badge */}
            {activeConfig.badge && (
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider select-none ${
                  activeConfig.badgeColor === 'blue' || activeConfig.badge === "WOMEN'S HEALTH"
                    ? 'bg-[#0E6C9B]/10 border border-[#0E6C9B]/20 text-[#0E6C9B]'
                    : 'bg-[#4B9B44]/10 border border-[#4B9B44]/20 text-[#4B9B44]'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeConfig.badgeColor === 'blue' || activeConfig.badge === "WOMEN'S HEALTH"
                      ? 'bg-[#0E6C9B]'
                      : 'bg-[#4B9B44]'
                  }`}
                />
                <span>{activeConfig.badge}</span>
              </div>
            )}

            {/* Main Headline */}
            <h1
              style={{ fontFamily: 'Inter, sans-serif' }}
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold text-[#0E6C9B] tracking-tight leading-[1.14]"
            >
              {activeConfig.title}
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {activeConfig.description}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {activeConfig.primaryCta && (
                <Link
                  href={activeConfig.primaryCta.href}
                  className="inline-flex items-center justify-center font-semibold text-sm sm:text-base px-7 py-3 rounded-full cursor-pointer whitespace-nowrap btn-animated-gradient-success focus-visible:ring-2 focus-visible:ring-[#4a9b44] shadow-xs select-none text-white active:scale-[0.98] transition-transform"
                >
                  {activeConfig.primaryCta.label}
                </Link>
              )}

              {activeConfig.secondaryCta && (
                <Link
                  href={activeConfig.secondaryCta.href}
                  className="inline-flex items-center justify-center font-semibold text-sm sm:text-base px-7 py-3 rounded-full cursor-pointer whitespace-nowrap btn-animated-gradient-outline text-[#111111] focus-visible:ring-2 focus-visible:ring-[#10669D] select-none active:scale-[0.98] transition-transform"
                >
                  {activeConfig.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Floating Checklist Card (Desktop) */}
        {activeConfig.checklistItems && activeConfig.checklistItems.length > 0 && (
          <div className="hidden md:block absolute bottom-6 lg:bottom-8 right-6 lg:right-12 xl:right-20 z-20 pointer-events-auto select-none">
            <div className="bg-white/85 backdrop-blur-md border border-white/80 rounded-2xl shadow-lg px-5 py-4 flex flex-col gap-2.5 min-w-[260px]">
              {activeConfig.checklistItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect width="16" height="16" rx="8" fill="#4B9B44" />
                    <path
                      d="M11.2495 4.83594C9.65771 7.10807 8.02197 9.21094 6.34229 11.1445C6.21533 11.291 6.10465 11.3643 6.01025 11.3643C5.90283 11.3643 5.70915 11.0811 5.4292 10.5146C4.97673 9.59994 4.75049 9.05306 4.75049 8.87402C4.75049 8.80892 4.79443 8.73242 4.88232 8.64453C5.07113 8.44596 5.20459 8.34668 5.28271 8.34668C5.35433 8.34668 5.43083 8.46061 5.51221 8.68848C5.72705 9.2679 5.95329 9.78385 6.19092 10.2363C7.83805 8.56966 9.46729 6.7028 11.0786 4.63574L11.2495 4.83594V4.83594"
                      fill="white"
                    />
                  </svg>
                  <span className="text-[13px] font-semibold text-[#334155] tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 2. MOBILE VIEW (HIGH-IMPACT, PURPOSE-BUILT FOR PHONES) */}
      <section
        aria-label="Our Services Introduction Mobile"
        className={`relative w-full bg-white block md:hidden overflow-hidden ${className}`}
      >
        {/* Mobile Header Image Banner */}
        <div
          className={`relative w-full ${
            isDermatology
              ? 'aspect-[1024/420] min-h-[190px]'
              : 'h-[220px] xs:h-[260px]'
          } bg-slate-100 overflow-hidden`}
        >
          <Image
            src={activeConfig.imageSrc}
            alt={activeConfig.imageAlt || (typeof activeConfig.title === 'string' ? activeConfig.title : 'Healthcare banner')}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: activeConfig.imagePosition || 'right center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
          {activeConfig.floatingTagline && !isDermatology && (
            <div className="absolute top-4 right-4 z-10 pointer-events-none select-none">
              <span
                style={{
                  fontFamily: 'var(--font-caveat), "Caveat", cursive',
                }}
                className="text-2xl font-bold text-[#0E6C9B] -rotate-6 block drop-shadow-xs"
              >
                {activeConfig.floatingTagline}
              </span>
            </div>
          )}
        </div>

        {/* Mobile Content Details */}
        <div className="relative z-10 w-full px-5 pb-10 pt-2 flex flex-col items-start gap-4">
          {/* Eyebrow Badge */}
          {activeConfig.badge && (
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider select-none ${
                activeConfig.badgeColor === 'blue' || activeConfig.badge === "WOMEN'S HEALTH"
                  ? 'bg-[#0E6C9B]/10 border border-[#0E6C9B]/20 text-[#0E6C9B]'
                  : 'bg-[#4B9B44]/10 border border-[#4B9B44]/20 text-[#4B9B44]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  activeConfig.badgeColor === 'blue' || activeConfig.badge === "WOMEN'S HEALTH"
                    ? 'bg-[#0E6C9B]'
                    : 'bg-[#4B9B44]'
                }`}
              />
              <span>{activeConfig.badge}</span>
            </div>
          )}

          {/* Headline */}
          <h1
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="text-2xl xs:text-3xl font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
          >
            {activeConfig.title}
          </h1>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {activeConfig.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full pt-1">
            {activeConfig.primaryCta && (
              <Link
                href={activeConfig.primaryCta.href}
                className="w-full h-11 inline-flex items-center justify-center font-semibold text-sm rounded-full cursor-pointer whitespace-nowrap btn-animated-gradient-success focus-visible:ring-2 focus-visible:ring-[#4a9b44] shadow-xs select-none text-white active:scale-[0.98] transition-transform"
              >
                {activeConfig.primaryCta.label}
              </Link>
            )}

            {activeConfig.secondaryCta && (
              <Link
                href={activeConfig.secondaryCta.href}
                className="w-full h-11 inline-flex items-center justify-center font-semibold text-sm rounded-full cursor-pointer whitespace-nowrap btn-animated-gradient-outline text-[#111111] focus-visible:ring-2 focus-visible:ring-[#10669D] select-none active:scale-[0.98] transition-transform"
              >
                {activeConfig.secondaryCta.label}
              </Link>
            )}
          </div>

          {/* Mobile Checklist Highlights (for Dermatology or custom checklist) */}
          {(activeConfig.checklistItems || isDermatology) && (
            <div className="w-full mt-2 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-2">
              {(
                activeConfig.checklistItems || [
                  'Licensed Dermatology Providers',
                  'Convenient Online Visits',
                  'Personalized Treatment Plans',
                  'Medications (If Appropriate)',
                ]
              ).map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <rect width="16" height="16" rx="8" fill="#4B9B44" />
                    <path
                      d="M11.2495 4.83594C9.65771 7.10807 8.02197 9.21094 6.34229 11.1445C6.21533 11.291 6.10465 11.3643 6.01025 11.3643C5.90283 11.3643 5.70915 11.0811 5.4292 10.5146C4.97673 9.59994 4.75049 9.05306 4.75049 8.87402C4.75049 8.80892 4.79443 8.73242 4.88232 8.64453C5.07113 8.44596 5.20459 8.34668 5.28271 8.34668C5.35433 8.34668 5.43083 8.46061 5.51221 8.68848C5.72705 9.2679 5.95329 9.78385 6.19092 10.2363C7.83805 8.56966 9.46729 6.7028 11.0786 4.63574L11.2495 4.83594V4.83594"
                      fill="white"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
