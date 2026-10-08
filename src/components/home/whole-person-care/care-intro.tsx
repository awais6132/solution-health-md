import React from 'react';
import { WholePersonCareConfig } from '@/types/whole-person-care';

interface CareIntroProps {
  headline: WholePersonCareConfig['headline'];
  description: string;
  className?: string;
}

export const CareIntro: React.FC<CareIntroProps> = ({
  headline,
  description,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start text-left justify-center space-y-3 max-w-xl ${className}`}>
      {/* 1. Main Heading (2 Lines) */}
      <h2
        className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-sm"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
      >
        <span className="block">{headline.line1}</span>
        <span className="block mt-0.5">{headline.line2}</span>
      </h2>

      {/* 2. Subtitle Description */}
      <p
        className="text-sm sm:text-base lg:text-[17px] text-white/90 font-normal leading-relaxed max-w-lg drop-shadow-2xs"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
};
