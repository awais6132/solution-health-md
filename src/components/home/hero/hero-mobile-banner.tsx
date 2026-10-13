'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { HeroSectionConfig, HeroSlide } from '@/types/hero';

interface HeroMobileBannerProps {
  config: HeroSectionConfig;
}

export function HeroMobileBanner({ config }: HeroMobileBannerProps) {
  const slides = config.slides && config.slides.length > 0 ? config.slides : null;
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play interval set to exact 5 seconds (5000ms), matching desktop
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

  const accentColor = currentSlide.accentColor || '#4B9B44';
  const secondaryColor = currentSlide.secondaryColor || '#8DB92E';

  return (
    <div
      suppressHydrationWarning
      style={{
        backgroundColor: `${accentColor}18`,
        transition: 'background-color 0.7s ease',
      }}
      className="relative w-full flex flex-col items-start gap-4 sm:gap-5 box-border px-4 sm:px-6 py-[30px] overflow-hidden"
    >
      {/* 1. Top Pill / Status Tagline Badge */}
      <div className="relative z-10 flex items-center">
        <div
          style={{
            backgroundColor: '#ffffff',
            borderColor: `${accentColor}40`,
          }}
          className="inline-flex items-center gap-2 select-none px-3.5 py-1 rounded-full border shadow-2xs transition-all duration-500"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              style={{ backgroundColor: accentColor }}
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            />
            <span
              style={{ backgroundColor: accentColor }}
              className="relative inline-flex rounded-full h-2 w-2"
            />
          </span>
          <span
            style={{
              color: accentColor,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              lineHeight: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.5s ease',
            }}
            className="shrink-0 font-bold"
          >
            {currentSlide.badge.text}
          </span>
        </div>
      </div>

      {/* 3. Dual-Colored Mobile Main Headline */}
      <h1
        className="relative z-10 w-full text-[28px] xs:text-[32px] sm:text-[36px] leading-[1.12] tracking-tight font-extrabold flex flex-col justify-start"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
        }}
      >
        <span
          className="block"
          style={{
            color: '#0E6C9B',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
          }}
        >
          {currentSlide.headline.primaryText}
        </span>
        <span
          className="block transition-colors duration-500 mt-0.5"
          style={{
            color: accentColor,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
          }}
        >
          {currentSlide.headline.highlightText}
        </span>
      </h1>

      {/* 4. Description Copy */}
      <p
        className="relative z-10 w-full text-[14px] xs:text-[15px] leading-relaxed text-slate-600 font-normal"
        style={{
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {currentSlide.description}
      </p>

      {/* 5. Mobile Action CTA Buttons */}
      <div className="relative z-10 flex flex-col gap-2.5 w-full pt-1">
        {currentSlide.primaryCta && (
          <Link href={currentSlide.primaryCta.href} className="w-full group">
            <button
              type="button"
              style={{
                borderRadius: '9999px',
                fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
              }}
              className="w-full h-[48px] inline-flex items-center justify-center text-white font-semibold text-[15px] btn-animated-gradient-success active:scale-[0.98] shadow-md cursor-pointer select-none gap-2"
            >
              <span>{currentSlide.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
            </button>
          </Link>
        )}

        {currentSlide.secondaryCta && (
          <Link href={currentSlide.secondaryCta.href} className="w-full">
            <button
              type="button"
              style={{
                borderRadius: '9999px',
                fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                borderColor: 'rgba(226, 232, 240, 0.95)',
              }}
              className="w-full h-[46px] inline-flex items-center justify-center font-semibold text-[14px] text-slate-800 bg-white border shadow-2xs hover:bg-slate-50 active:scale-[0.98] transition-all cursor-pointer select-none"
            >
              <span>{currentSlide.secondaryCta.label}</span>
            </button>
          </Link>
        )}
      </div>

      {/* 6. Dedicated High-Resolution Visual Showcase Card */}
      <div className="relative z-10 w-full aspect-[16/10] xs:aspect-[16/9.5] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_14px_34px_-8px_rgba(10,37,64,0.18)] border border-slate-200/80 bg-slate-100 mt-2 select-none">
        {/* Layered Slide Background Images */}
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
                  className="object-cover object-center select-none"
                  sizes="(max-width: 1024px) 100vw, 600px"
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
              className="object-cover object-center select-none"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        )}

        {/* Soft bottom vignette for contrast and depth */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

        {/* Glassmorphic Floating Trust Badge */}
        <div className="absolute bottom-2.5 left-2.5 xs:bottom-3 xs:left-3 z-20 flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white text-[11px] font-medium shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Board-Certified Clinicians • 50 States</span>
        </div>
      </div>

      {/* 7. Frosted Capsule Slide Switcher */}
      {slides && slides.length > 1 && (
        <div className="relative z-10 w-full flex justify-center items-center pt-1.5 pb-0">
          <div
            className="inline-flex items-center gap-2 bg-[#0A2540]/92 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 shadow-[0_12px_28px_-6px_rgba(10,37,64,0.35)] transition-all duration-500 select-none max-w-full"
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
                    className="flex items-center gap-2 transition-all duration-500"
                  >
                    {/* Glowing active pill indicator */}
                    <span
                      className="w-5 h-2.5 rounded-full transition-all duration-500 shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${slideAccent}, ${slideSecondary})`,
                        boxShadow: `0 0 12px ${slideAccent}, 0 0 20px ${slideAccent}70`,
                      }}
                    />
                    {/* Active Service Name */}
                    <span className="text-white font-bold text-xs tracking-tight whitespace-nowrap select-none drop-shadow-xs">
                      {slide.serviceName}
                    </span>
                  </div>
                );
              }

              return (
                <button
                  key={slide.id || idx}
                  type="button"
                  onClick={() => handleSelect(idx)}
                  aria-label={`Switch to ${slide.serviceName}`}
                  className="p-1 cursor-pointer border-none bg-transparent flex items-center justify-center group"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white/35 group-hover:bg-white group-hover:scale-125 transition-all duration-300" />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroMobileBanner;
