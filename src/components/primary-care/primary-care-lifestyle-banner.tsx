import React from 'react';
import Image from 'next/image';

export interface PrimaryCareLifestyleBannerProps {
  className?: string;
  showScript?: boolean;
}

export function PrimaryCareLifestyleBanner({
  className = '',
  showScript = false,
}: PrimaryCareLifestyleBannerProps) {
  const pillars = [
    {
      id: 'pillar-energy',
      line1: 'Better Energy',
      icon: (
        // Solid green lightning bolt
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-immunity',
      line1: 'Stronger Immunity',
      icon: (
        // Green shield with checkmark
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path
            d="m9 12 2 2 4-4"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 'pillar-metabolic',
      line1: 'Improved Metabolic',
      line2: 'Health',
      icon: (
        // Solid green heart
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-sleep',
      line1: 'Better Sleep',
      icon: (
        // Solid green crescent moon
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4.5 h-4.5"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
    },
    {
      id: 'pillar-weight',
      line1: 'Healthy Weight',
      icon: (
        // Green sunburst with dots / rays
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1.5"
          className="w-5 h-5"
        >
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="12" cy="4" r="1.2" />
          <circle cx="12" cy="20" r="1.2" />
          <circle cx="4" cy="12" r="1.2" />
          <circle cx="20" cy="12" r="1.2" />
          <circle cx="6.34" cy="6.34" r="1.2" />
          <circle cx="17.66" cy="17.66" r="1.2" />
          <circle cx="6.34" cy="17.66" r="1.2" />
          <circle cx="17.66" cy="6.34" r="1.2" />
        </svg>
      ),
    },
    {
      id: 'pillar-confidence',
      line1: 'Greater Confidence',
      icon: (
        // Solid green 5-point star
        <svg
          viewBox="0 0 24 24"
          fill="#3B8A3E"
          stroke="#3B8A3E"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-label="More Than Primary Care. A Healthier You."
      className={`relative w-full overflow-hidden min-h-[250px] sm:min-h-[270px] lg:min-h-[290px] xl:min-h-[300px] flex items-center bg-[#E5F2FB] ${className}`}
    >
      {/* 1. Exact Panoramic Background Image (Figma 2172x724 cropped to top 40% mountains & hiker) */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <Image
          src="/assets/images/primary-care-lifestyle-banner.png"
          alt="More Than Primary Care. A Healthier You."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[right_top] md:object-[right_18%] select-none"
        />

        {/* Floating Cursive Tagline ("Healthier Today, Brighter Tomorrow") - Positioned cleanly in upper sky */}
        <div className="hidden lg:block absolute top-5 lg:top-7 xl:top-8 right-[15%] lg:right-[17%] xl:right-[19%] 2xl:right-[21%] z-20 pointer-events-none select-none">
          <span
            style={{
              fontFamily: 'var(--font-caveat), "Caveat", cursive',
            }}
            className="text-2xl lg:text-[28px] xl:text-[34px] font-bold text-[#0E6C9B] -rotate-12 block leading-[1.1] drop-shadow-xs tracking-wide whitespace-nowrap"
          >
            Healthier Today
            <br />
            Brighter Tomorrow
          </span>
        </div>
      </div>

      {/* 2. Content Container matching Figma 1440x250 */}
      <div className="relative z-10 w-full site-container py-7 sm:py-8 lg:py-10">
        <div className="flex flex-col items-start text-left w-full max-w-[840px] gap-2 sm:gap-2.5">
          {/* Main Headline */}
          <h2
            style={{ fontFamily: 'Inter, sans-serif' }}
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
          >
            More Than Primary Care. A Healthier You.
          </h2>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#475569] font-medium leading-relaxed">
            Proactive care today. A healthier tomorrow.
          </p>

          {/* 6 Circular White Badges with Green Icons */}
          <div className="flex flex-wrap sm:flex-nowrap items-start justify-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 pt-3 sm:pt-4 w-full">
            {pillars.map((p) => (
              <div
                key={p.id}
                className="flex flex-col items-center text-center gap-2 group w-[80px] sm:w-[90px] md:w-[96px] lg:w-[102px] shrink-0"
              >
                {/* White Floating Circle Badge */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                  {p.icon}
                </div>

                {/* Text Label - Exactly matching 2 lines for Improved Metabolic Health */}
                <div className="flex flex-col items-center justify-center text-center leading-[1.25]">
                  <span className="text-[11px] sm:text-[11.5px] font-bold text-[#1E293B] tracking-tight">
                    {p.line1}
                  </span>
                  {p.line2 && (
                    <span className="text-[11px] sm:text-[11.5px] font-bold text-[#1E293B] tracking-tight">
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

export default PrimaryCareLifestyleBanner;
