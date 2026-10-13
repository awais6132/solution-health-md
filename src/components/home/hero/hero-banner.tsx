'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HeroSectionConfig, HeroSlide } from '@/types/hero';
import { HeroContent } from './hero-content';

interface HeroBannerProps {
  config: HeroSectionConfig;
}

export function HeroBanner({ config }: HeroBannerProps) {
  const slides = config.slides && config.slides.length > 0 ? config.slides : null;
  const [activeIndex, setActiveIndex] = useState(0);
  // Continuous auto-play set to exact 5 seconds (5000ms)
  useEffect(() => {
    if (!slides || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides, activeIndex]);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Determine current active slide or fallback to base config
  const currentSlide: HeroSlide = slides
    ? slides[activeIndex]
    : {
        id: 'default',
        serviceName: 'Nationwide Telehealth',
        accentColor: '#4B9B44',
        badge: config.badge,
        headline: config.headline,
        description: config.description,
        primaryCta: config.primaryCta,
        secondaryCta: config.secondaryCta,
        bannerImage: config.bannerImage,
      };

  return (
    <div suppressHydrationWarning className="relative w-full bg-white flex justify-center overflow-hidden box-border">
      {/* 1440px Centered Canvas: Locks Text and Imagery in exact proportion on all screen sizes */}
      <div className="relative w-full max-w-[1440px] mx-auto min-h-[540px] lg:min-h-[600px] flex items-center box-border pt-6 sm:pt-10 pb-16">
        
        {/* 1. Layered Slide Background Images */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {slides ? (
            slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={slide.id || idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={slide.bannerImage.src}
                    alt={slide.bannerImage.alt}
                    fill
                    priority={idx === 0}
                    className="object-cover object-right-top lg:object-right select-none"
                    sizes="(max-width: 1440px) 100vw, 1440px"
                  />
                </div>
              );
            })
          ) : (
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
          )}

          {/* Soft white gradient overlay on left to guarantee text readability across all background images */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-white/85 to-transparent max-w-[720px] lg:max-w-[780px]" />
        </div>

        {/* 2. Text & CTA Content positioned inside 1440px canvas */}
        <div className="relative z-10 w-full box-border">
          <HeroContent
            badge={currentSlide.badge}
            headline={currentSlide.headline}
            description={currentSlide.description}
            primaryCta={currentSlide.primaryCta}
            secondaryCta={currentSlide.secondaryCta}
            accentColor={currentSlide.accentColor || '#4B9B44'}
          />
        </div>

        {/* Dynamic ambient brand glow */}
        <div
          className="absolute -top-12 right-1/4 w-[480px] h-[480px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-colors duration-1000 -z-0"
          style={{
            backgroundColor: currentSlide.accentColor || '#4B9B44',
          }}
        />

        {/* 3. Tabbna-Style Eye-Catching Frosted Capsule Indicator Bar */}
        {slides && slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center pointer-events-auto">
            <div
              className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-[#0A2540]/92 backdrop-blur-xl px-4 py-2 sm:px-6 sm:py-2.5 rounded-full border border-white/20 shadow-[0_16px_36px_-6px_rgba(10,37,64,0.4),0_0_24px_rgba(75,155,68,0.18)] transition-all duration-500 select-none"
              role="tablist"
              aria-label="Hero slide switcher"
            >
              {slides.map((slide, idx) => {
                const isActive = idx === activeIndex;
                const slideAccent = slide.accentColor || '#4B9B44';
                const slideSecondary = slide.secondaryColor || '#8DB92E';

                if (isActive) {
                  return (
                    <div
                      key={slide.id || idx}
                      className="flex items-center gap-2.5 sm:gap-3 transition-all duration-500"
                    >
                      {/* Vibrant glowing brand active indicator bar */}
                      <span
                        className="w-7 sm:w-8 h-2.5 sm:h-3 rounded-full transition-all duration-500 shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${slideAccent}, ${slideSecondary})`,
                          boxShadow: `0 0 16px ${slideAccent}, 0 0 32px ${slideAccent}70`,
                        }}
                      />
                      {/* Active Service Name in bold white */}
                      <span className="text-white font-bold text-sm sm:text-[15px] lg:text-[16px] tracking-tight whitespace-nowrap select-none drop-shadow-xs">
                        {slide.serviceName}
                      </span>
                    </div>
                  );
                }

                // Inactive slides rendered as sleek frosted dots with glowing hover
                return (
                  <button
                    key={slide.id || idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    aria-label={`Switch to ${slide.serviceName}`}
                    className="relative flex items-center justify-center p-1.5 cursor-pointer border-none bg-transparent group"
                  >
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/35 group-hover:bg-white group-hover:scale-130 transition-all duration-300 shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default HeroBanner;
