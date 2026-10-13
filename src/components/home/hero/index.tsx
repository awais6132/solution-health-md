import React from 'react';
import { heroConfig as defaultHeroConfig } from '@/constants/hero';
import { HeroSectionConfig } from '@/types/hero';
import { HeroBanner } from './hero-banner';
import { HeroMobileBanner } from './hero-mobile-banner';
import { HeroTrustBar } from './hero-trust-bar';

export interface HeroSectionProps {
  /**
   * Optional custom config override for the hero section
   */
  config?: Partial<HeroSectionConfig>;
  className?: string;
}

export function HeroSection({ config, className = '' }: HeroSectionProps) {
  // Merge default config with any custom overrides
  const activeConfig: HeroSectionConfig = {
    ...defaultHeroConfig,
    ...config,
    badge: { ...defaultHeroConfig.badge, ...config?.badge },
    headline: { ...defaultHeroConfig.headline, ...config?.headline },
    primaryCta: { ...defaultHeroConfig.primaryCta, ...config?.primaryCta },
    secondaryCta: { ...defaultHeroConfig.secondaryCta, ...config?.secondaryCta },
    bannerImage: { ...defaultHeroConfig.bannerImage, ...config?.bannerImage },
    slides: config?.slides || defaultHeroConfig.slides,
    trustBar: {
      ...defaultHeroConfig.trustBar,
      ...config?.trustBar,
      items: config?.trustBar?.items || defaultHeroConfig.trustBar.items,
    },
  };

  return (
    <>
      {/* 1. DESKTOP VIEW (100.0% EXACT ORIGINAL IMPLEMENTATION PRESERVED) */}
      <section
        aria-label="Hero Introduction"
        style={{ padding: '0 0 0 25px' }}
        className={`relative w-full bg-white pl-[25px] pr-0 hidden lg:block ${className}`}
      >
        {/* Panoramic Hero Banner (Doctors on right, white fade on left with Content) */}
        <HeroBanner config={activeConfig} />

        {/* Horizontal Trust Bar Feature Strip */}
        {activeConfig.trustBar.enabled && (
          <HeroTrustBar items={activeConfig.trustBar.items} />
        )}
      </section>

      {/* 2. MOBILE & TABLET VIEW (HIGH-IMPACT, EYE-CATCHING, PURPOSE-BUILT FOR MOBILE SCREENS) */}
      <section
        aria-label="Hero Introduction Mobile"
        className={`relative w-full bg-white px-4 sm:px-6 py-[30px] block lg:hidden ${className}`}
      >
        <HeroMobileBanner config={activeConfig} />

        {/* Horizontal Trust Bar Feature Strip */}
        {activeConfig.trustBar.enabled && (
          <HeroTrustBar items={activeConfig.trustBar.items} />
        )}
      </section>
    </>
  );
}

export default HeroSection;
export * from './hero-mobile-banner';
