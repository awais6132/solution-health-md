import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PreFooterCtaConfig } from '@/types/footer';
import { footerConfig } from '@/constants/footer';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui';

export interface PreFooterCtaProps {
  config?: Partial<PreFooterCtaConfig>;
  className?: string;
}

export function PreFooterCTA({ config, className = '' }: PreFooterCtaProps) {
  const ctaData = { ...footerConfig.preFooter, ...config };

  if (ctaData.enabled === false) {
    return null;
  }

  return (
    <section
      aria-label="Pre-footer Call to Action"
      className={`relative w-full overflow-hidden bg-emerald-950 text-white min-h-[227.64px] flex items-center ${className}`}
    >
      {/* 1. Panoramic Scenic Background Image with #0F63968F Overlay */}
      {ctaData.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={ctaData.backgroundImage}
            alt="A healthier tomorrow background"
            fill
            priority={false}
            className="object-cover object-bottom"
            style={{ objectPosition: 'center bottom' }}
            sizes="100vw"
          />
          {/* Overlay with exact design token #0F63968F */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: '#0F63968F' }}
          />
        </div>
      )}

      {/* 2. Unified Container with exact vertical padding and standard global horizontal padding */}
      <div className="relative z-10 w-full box-border site-container site-section site-section-last">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left Side: Headline & Description - Single Line Headline on Desktop */}
          <div className="flex-1 min-w-0 text-center lg:text-left flex flex-col gap-1.5 lg:gap-2">
            <h2
              className="text-white drop-shadow-md font-extrabold tracking-tight text-xl sm:text-2xl md:text-[26px] lg:text-[21px] xl:text-[26px] 2xl:text-[32px] leading-tight lg:whitespace-nowrap"
              style={{
                fontFamily: 'Inter, var(--font-plus-jakarta-sans), sans-serif',
                letterSpacing: '-0.025em',
              }}
            >
              {ctaData.title}
            </h2>
            {ctaData.description && (
              <p className="text-xs sm:text-sm md:text-[14.5px] xl:text-[15.5px] text-white/90 font-normal drop-shadow-xs max-w-[620px]">
                {ctaData.description}
              </p>
            )}
          </div>

          {/* Right Side: Action Buttons & Optional Floating Script */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 sm:gap-4 lg:gap-5 xl:gap-6 shrink-0">
            {ctaData.primaryButton && (
              <Link href={ctaData.primaryButton.href} className="shrink-0">
                <Button
                  size="lg"
                  className="rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-[14.5px] font-semibold text-white bg-[#4B9B44] hover:bg-[#3f8539] shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-none cursor-pointer group inline-flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>{ctaData.primaryButton.label}</span>
                  {!ctaData.primaryButton.label.includes('→') && (
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  )}
                </Button>
              </Link>
            )}

            {ctaData.secondaryButton && (
              <Link href={ctaData.secondaryButton.href} className="shrink-0">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm lg:text-[14.5px] font-medium border border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm whitespace-nowrap"
                >
                  {ctaData.secondaryButton.label}
                </Button>
              </Link>
            )}

            {/* Right Cursive Script (Matching Page Design) */}
            {ctaData.floatingScript && (
              <div className="hidden sm:block select-none pointer-events-none pl-0.5 shrink-0">
                <span
                  style={{
                    fontFamily: 'var(--font-caveat), "Caveat", cursive',
                  }}
                  className="text-xl sm:text-2xl lg:text-[25px] xl:text-[29px] 2xl:text-[32px] font-bold text-white -rotate-6 block leading-[1.05] drop-shadow-md text-left whitespace-nowrap"
                >
                  {ctaData.floatingScript.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
