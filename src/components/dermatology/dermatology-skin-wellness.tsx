import React from 'react';
import Image from 'next/image';

export interface DermatologySkinWellnessProps {
  className?: string;
}

export function DermatologySkinWellness({ className = '' }: DermatologySkinWellnessProps) {
  const pillars = [
    {
      id: 'glowing-skin',
      line1: 'Glowing Healthier',
      line2: 'Skin',
      renderIcon: () => (
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
        </svg>
      ),
    },
    {
      id: 'boosted-confidence',
      line1: 'Boosted',
      line2: 'Confidence',
      renderIcon: () => (
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
      ),
    },
    {
      id: 'quality-of-life',
      line1: 'Improved Quality of',
      line2: 'Life',
      renderIcon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M11 20A7 7 0 0 1 4 13C4 6 11 3 20 3c0 9-3 16-9 17Z" />
          <path d="M4 21c3-3 6-5 9-7" />
        </svg>
      ),
    },
    {
      id: 'psychological-wellness',
      line1: 'Psychological',
      line2: 'Wellness',
      renderIcon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
    },
    {
      id: 'preventative-protection',
      line1: 'Preventative',
      line2: 'Protection',
      renderIcon: () => (
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
      ),
    },
    {
      id: 'overall-health',
      line1: 'Overall',
      line2: 'Health',
      renderIcon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="More Than Clearer Skin. A Healthier You."
      className={`relative w-full overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-white ${className}`}
    >
      {/* Layer 1: Background Image with smiling man outdoors */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src="/assets/images/dermatology-whole-person-care.png"
          alt="More Than Clearer Skin A Healthier You"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center select-none"
        />

        {/* Soft natural wash on left to ensure crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DCF2ED]/95 via-[#E6F5F2]/80 via-40% to-transparent w-full md:w-[70%] lg:w-[60%]" />

        {/* Blue Cursive Script on Right next to the man: "Clear Skin Brighter Days" */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-8 right-6 xl:right-16 z-20 pointer-events-none select-none">
          <span
            style={{
              fontFamily: 'var(--font-caveat), "Caveat", cursive',
            }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1D70B8] -rotate-6 block leading-tight drop-shadow-xs"
          >
            Clear Skin<br />Brighter Days
          </span>
        </div>
      </div>

      {/* Layer 2: Main Content Container */}
      <div className="relative z-10 w-full site-container py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-start text-left w-full max-w-[620px] gap-4 sm:gap-5">
          {/* Main Headline */}
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            More Than Clearer Skin. A Healthier You.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#334155] leading-relaxed font-normal max-w-[500px]">
            Healthy skin touches every part of your well-being — from your daily confidence to your mental health and peace of mind.
          </p>

          {/* 6 Circular Wellness Pillars Row */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-2.5 pt-3 sm:pt-4 w-full">
            {pillars.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center text-center gap-2 group max-w-[90px]"
              >
                {/* White Solid Circle */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {p.renderIcon()}
                </div>

                {/* 2-Line Blue Text */}
                <div className="flex flex-col items-center justify-center text-center leading-[1.2]">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#0E6C9B] tracking-tight">
                    {p.line1}
                  </span>
                  {p.line2 && (
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#0E6C9B] tracking-tight">
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

export default DermatologySkinWellness;
