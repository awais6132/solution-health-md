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
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay with exact design token #0F63968F */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: '#0F63968F' }}
          />
        </div>
      )}

      {/* 2. Unified Container with exact vertical padding 72.3px and standard horizontal padding */}
      <Container className="relative z-10 py-[72.3px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Left Side: Headline & Description */}
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <h2
              className="text-white drop-shadow-xs"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: '40.67px',
                lineHeight: '45.19px',
                letterSpacing: '-1.02px',
                verticalAlign: 'middle',
              }}
            >
              {ctaData.title}
            </h2>
            {ctaData.description && (
              <p className="text-sm sm:text-base text-white/95 font-normal drop-shadow-2xs">
                {ctaData.description}
              </p>
            )}
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 shrink-0">
            {ctaData.primaryButton && (
              <Link href={ctaData.primaryButton.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-none cursor-pointer group"
                >
                  <span>{ctaData.primaryButton.label}</span>
                  <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Button>
              </Link>
            )}

            {ctaData.secondaryButton && (
              <Link href={ctaData.secondaryButton.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 py-3 text-sm font-medium border border-white/40 bg-white/10 hover:bg-white/20 text-white hover:text-white backdrop-blur-xs transition-all duration-200 cursor-pointer"
                >
                  {ctaData.secondaryButton.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
