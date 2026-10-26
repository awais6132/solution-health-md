import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export interface PrimaryCareHeroProps {
  className?: string;
}

export function PrimaryCareHero({ className = '' }: PrimaryCareHeroProps) {
  return (
    <section
      aria-label="Direct Primary Care Introduction"
      className={`relative w-full overflow-hidden bg-[#E7F3FB] min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] flex items-center ${className}`}
    >
      {/* 1. Panoramic Background Image (Figma 2117x743) */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <Image
          src="/assets/images/primary-care-hero-banner.png"
          alt="Personalized Primary Care for a Healthier You"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_center] select-none"
        />

        {/* Soft, seamless gradient blend on the far left for ultra-clean text readability on ultra-wide screens */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[55%] lg:w-[48%] bg-gradient-to-r from-[#E7F3FB] via-[#E7F3FB]/90 via-35% to-transparent pointer-events-none" />

        {/* Floating Cursive Tagline positioned over the sky above the mother */}
        <div className="hidden lg:block absolute top-10 xl:top-14 right-10 xl:right-24 2xl:right-32 z-20 pointer-events-none select-none">
          <span
            style={{
              fontFamily: 'var(--font-caveat), "Caveat", cursive',
            }}
            className="text-4xl xl:text-[46px] font-bold text-[#0E6C9B] -rotate-6 block leading-[1.05] drop-shadow-xs tracking-wide"
          >
            Care for
            <br />
            Every Stage
            <br />
            of life
          </span>
        </div>
      </div>

      {/* 2. Left Content Container */}
      <div className="relative z-10 w-full site-container py-12 sm:py-14 lg:py-18">
        <div className="flex flex-col items-start text-left w-full md:w-[62%] lg:w-[54%] xl:w-[48%] max-w-[640px] gap-4 sm:gap-5">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D7EBF8] text-[#1D70B8] text-xs font-bold uppercase tracking-wider select-none shadow-2xs">
            DIRECT PRIMARY CARE
          </div>

          {/* Main Headline */}
          <h1
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12]"
          >
            <span className="text-[#0E6C9B] block">Personalized Primary Care</span>
            <span className="text-[#3B8A3E] block">for a Healthier You.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-semibold text-[#1E293B] leading-snug">
            More time. Better care. A stronger, healthier future.
          </p>

          {/* Description */}
          <p className="text-sm sm:text-[15px] text-[#526E86] leading-relaxed font-normal">
            Direct Primary Care gives you unlimited access to a dedicated provider, proactive care, and a personalized plan — without insurance hassles.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            {/* Primary Green Button */}
            <Link
              href={ROUTES.FIND_MY_CARE}
              className="inline-flex items-center justify-center font-semibold text-sm sm:text-[15px] px-7 py-3 rounded-full cursor-pointer whitespace-nowrap bg-[#3B8A3E] hover:bg-[#327735] text-white shadow-xs select-none active:scale-[0.98] transition-all"
            >
              See If I Qualify →
            </Link>

            {/* Secondary Blue Outline Button */}
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center font-semibold text-sm sm:text-[15px] px-7 py-3 rounded-full cursor-pointer whitespace-nowrap bg-white/90 hover:bg-white text-[#0E6C9B] border border-[#B9DCF3] shadow-2xs select-none active:scale-[0.98] transition-all"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrimaryCareHero;
