import React from 'react';
import Image from 'next/image';

export interface PrimaryCareLifestyleBannerProps {
  className?: string;
}

export function PrimaryCareLifestyleBanner({
  className = '',
}: PrimaryCareLifestyleBannerProps) {
  const pillars = [
    {
      id: 'pillar-energy',
      title: 'Better Energy',
      icon: (
        // Lightning bolt
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-immunity',
      title: 'Stronger Immunity',
      icon: (
        // Shield check
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 'pillar-metabolic',
      title: 'Improved Metabolic Health',
      icon: (
        // Heart
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-sleep',
      title: 'Better Sleep',
      icon: (
        // Crescent moon
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-weight',
      title: 'Healthy Weight',
      icon: (
        // Sun / rays
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B8A3E"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ),
    },
    {
      id: 'pillar-confidence',
      title: 'Greater Confidence',
      icon: (
        // Star
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-4.5 sm:h-4.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="More Than Primary Care. A Healthier You."
      className={`relative w-full overflow-hidden min-h-[260px] sm:min-h-[290px] lg:min-h-[320px] flex items-center bg-[#E5F2FB] ${className}`}
    >
      {/* 1. Exact Panoramic Background Image (Figma 2172x724) */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <Image
          src="/assets/images/primary-care-lifestyle-banner.png"
          alt="More Than Primary Care. A Healthier You."
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-[right_center] select-none"
        />

        {/* Soft, gentle gradient on the left to ensure crisp contrast on all resolutions */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] bg-gradient-to-r from-white/70 via-white/40 via-40% to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full site-container py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col items-start text-left w-full max-w-[760px] gap-2.5 sm:gap-3">
          {/* Main Headline */}
          <h2
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
          >
            More Than Primary Care. A Healthier You.
          </h2>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-[#475569] font-normal leading-relaxed">
            Proactive care today. A healthier tomorrow.
          </p>

          {/* 6 Circular White Badges with Green Icons */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-3.5 pt-3 sm:pt-4 w-full max-w-[680px]">
            {pillars.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center text-center gap-1.5 sm:gap-2 group"
              >
                {/* White Solid Circle Badge */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-xs border border-white/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {p.icon}
                </div>

                {/* Text Label */}
                <span className="text-[10px] sm:text-[11px] font-bold text-[#1E293B] tracking-tight text-center leading-tight">
                  {p.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrimaryCareLifestyleBanner;
