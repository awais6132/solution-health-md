import React from 'react';
import Image from 'next/image';
import { HeroSectionConfig } from '@/types/hero';
import { HeroContent } from './hero-content';

interface HeroBannerProps {
  config: HeroSectionConfig;
}

export function HeroBanner({ config }: HeroBannerProps) {
  return (
    <div className="relative w-full bg-white flex justify-center overflow-hidden box-border">
      {/* 1440px Centered Canvas */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[480px] lg:min-h-[560px] flex flex-col lg:flex-row items-center justify-between box-border px-4 sm:px-6 lg:px-[50px] py-8 sm:py-12 lg:py-14">
        {/* Desktop: Panoramic Background Image Anchored on the right */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={config.bannerImage.src}
              alt={config.bannerImage.alt}
              fill
              priority
              className="object-cover object-right select-none"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>
          {/* Desktop Left-to-Right Soft Fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 via-35% to-transparent" />
        </div>

        {/* Text & CTA Content */}
        <div className="relative z-10 w-full lg:max-w-[650.7px] box-border">
          <HeroContent
            badge={config.badge}
            headline={config.headline}
            description={config.description}
            primaryCta={config.primaryCta}
            secondaryCta={config.secondaryCta}
          />
        </div>

        {/* Mobile & Tablet: High-Res Medical Team Banner Card underneath buttons */}
        <div className="lg:hidden relative w-full mt-8 sm:mt-10 z-10">
          <div className="relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md border border-slate-100/90 bg-slate-50">
            <Image
              src={config.bannerImage.src}
              alt={config.bannerImage.alt}
              fill
              priority
              className="object-cover object-[70%_top]"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
