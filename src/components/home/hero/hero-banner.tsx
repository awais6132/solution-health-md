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
      {/* 1440px Centered Canvas: Locks Text and Doctors in exact proportion on all screen sizes/zoom levels */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[480px] lg:min-h-[560px] flex items-center box-border px-4 sm:px-6 lg:px-[50px] py-10 sm:py-14">
        {/* 1. Panoramic Background Image (Anchored precisely inside 1440px canvas) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={config.bannerImage.src}
              alt={config.bannerImage.alt}
              fill
              priority
              className="object-cover object-right-top lg:object-right select-none"
              sizes="(max-width: 1440px) 100vw, 1440px"
            />
          </div>
        </div>

        {/* 2. Text & CTA Content positioned inside 1440px canvas */}
        <div className="relative z-10 w-full box-border">
          <HeroContent
            badge={config.badge}
            headline={config.headline}
            description={config.description}
            primaryCta={config.primaryCta}
            secondaryCta={config.secondaryCta}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
