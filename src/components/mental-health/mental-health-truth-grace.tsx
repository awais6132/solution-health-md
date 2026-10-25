import React from 'react';
import { MentalHealthTruthGraceConfig } from '@/types/mental-health-page';

interface MentalHealthTruthGraceProps {
  config?: Partial<MentalHealthTruthGraceConfig>;
  className?: string;
}

export const defaultTruthGraceConfig: MentalHealthTruthGraceConfig = {
  headline: 'Counseling Rooted\nin Truth and Grace',
  description:
    "Our mental health counseling is based only on Judeo-Christian principles, integrating biblical wisdom, prayer, and compassionate support to help you overcome life's challenges, experience peace, and live with purpose.",
  cards: [
    {
      id: 'biblical-perspective',
      title: 'Biblical Perspective',
      description: 'Grounded in Scripture and Christian worldview.',
      iconName: 'bible',
    },
    {
      id: 'practical-guidance',
      title: 'Practical Guidance',
      description: "Equipping you with tools to navigate life's challenges.",
      iconName: 'guidance',
    },
    {
      id: 'emotional-support',
      title: 'Emotional Support',
      description: 'Safe, compassionate space for healing and growth.',
      iconName: 'support',
    },
    {
      id: 'personal-growth',
      title: 'Personal Growth',
      description: 'Fostering spiritual maturity and emotional resilience.',
      iconName: 'growth',
    },
  ],
};

export function MentalHealthTruthGrace({
  config,
  className = '',
}: MentalHealthTruthGraceProps) {
  const activeConfig = {
    ...defaultTruthGraceConfig,
    ...config,
  };

  const renderIcon = (iconName: string) => {
    const stroke = '#8DB92E';
    const strokeWidth = 1.8;

    switch (iconName) {
      case 'bible':
        return (
          // Open Bible / Book Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M6 6h10" />
            <path d="M6 10h10" />
          </svg>
        );

      case 'guidance':
        return (
          // Compass / Direction / Pathway Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <circle cx="12" cy="12" r="10" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        );

      case 'support':
        return (
          // Heart / Emotional Support Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );

      case 'growth':
      default:
        return (
          // Growing Sprout / Plant Growth Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M7 20h10" />
            <path d="M12 20v-8" />
            <path d="M12 12c-3.3 0-6-2.7-6-6 3.3 0 6 2.7 6 6Z" />
            <path d="M12 10c3.3 0 6-2.7 6-6-3.3 0-6 2.7-6 6Z" />
          </svg>
        );
    }
  };

  return (
    <section
      id="truth-and-grace"
      aria-label="Counseling Rooted in Truth and Grace"
      className={`w-full bg-[#F2F8FD] site-section site-section-both ${className}`}
    >
      <div className="site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-4 flex flex-col text-left gap-3 sm:gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0E6C9B] tracking-tight leading-[1.18]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Counseling Rooted
              <br />
              in Truth and Grace
            </h2>
            <p className="text-xs sm:text-[13.5px] text-[#475569] leading-relaxed font-normal">
              {activeConfig.description}
            </p>
          </div>

          {/* Right Column: 4 Feature Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full">
            {activeConfig.cards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-start border border-blue-50/80 shadow-2xs hover:shadow-xs transition-shadow group min-h-[175px]"
              >
                {/* Green Outline Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                  {renderIcon(card.iconName)}
                </div>

                {/* Title */}
                <h3
                  className="text-xs sm:text-[13px] font-bold text-[#0E6C9B] leading-snug mb-1.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 leading-normal font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MentalHealthTruthGrace;
