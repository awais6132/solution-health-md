import React from 'react';
import Image from 'next/image';

export interface MentalHealthHopeBannerProps {
  className?: string;
}

export function MentalHealthHopeBanner({ className = '' }: MentalHealthHopeBannerProps) {
  const pillars = [
    {
      id: 'faith-family',
      line1: 'Faith & Family',
      line2: 'Healing',
      renderIcon: () => (
        // Family Spark / Sparkle
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
      id: 'mental-peace',
      line1: 'Mental',
      line2: 'Peace',
      renderIcon: () => (
        // Heart Peace
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
      id: 'stronger-relationships',
      line1: 'Stronger',
      line2: 'Relationships',
      renderIcon: () => (
        // Community / Handshake / Relationship
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 'spiritual-growth',
      line1: 'Spiritual',
      line2: 'Growth',
      renderIcon: () => (
        // Compass / Sprout
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      id: 'emotional-resilience',
      line1: 'Emotional',
      line2: 'Resilience',
      renderIcon: () => (
        // Shield Protection
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
      id: 'renewed-hope',
      line1: 'Renewed',
      line2: 'Hope',
      renderIcon: () => (
        // Christian Cross Icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="5" y1="8" x2="19" y2="8" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="More Than Counseling. A Brighter Tomorrow."
      className={`relative w-full overflow-hidden min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center bg-white ${className}`}
    >
      {/* Layer 1: Background Image with Mountain Cross Sunrise */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src="/assets/images/mental-health-hope-banner.png"
          alt="More Than Counseling A Brighter Tomorrow"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center select-none"
        />

        {/* Gentle subtle fade on left so the exact image gradient shines through naturally */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/5 to-transparent w-full md:w-[60%] lg:w-[45%] pointer-events-none" />

        {/* Blue Cursive Script on Right next to the Mountain Cross: "Hope Healing Purpose" */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-16 right-4 xl:right-10 2xl:right-16 z-20 pointer-events-none select-none">
          <span
            style={{
              fontFamily: 'var(--font-caveat), "Caveat", cursive',
            }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1D70B8] -rotate-6 block leading-[1.1] drop-shadow-xs"
          >
            Hope<br />Healing<br />Purpose
          </span>
        </div>
      </div>

      {/* Layer 2: Main Content Container */}
      <div className="relative z-10 w-full site-container py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-start text-left w-full max-w-[620px] gap-3 sm:gap-4">
          {/* Main Headline */}
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            More Than Counseling. A Brighter Tomorrow.
          </h2>

          {/* Description Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#334155] leading-relaxed font-normal max-w-[500px]">
            Where personalized care meets lasting renewal for your mind and soul.
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

export default MentalHealthHopeBanner;
