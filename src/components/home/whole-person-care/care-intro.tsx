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
    <div className={`flex flex-col items-start justify-center gap-3 ${className}`}>
      {/* 1. Main Heading (2 Lines) */}
      <h2
        className="text-3xl sm:text-4xl font-extrabold text-white leading-tight flex flex-col gap-1"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
      >
        <span>{headline.line1}</span>
        <span>{headline.line2}</span>
      </h2>

      {/* 2. Subtitle Description */}
      <p
        className="text-base text-white/90 font-normal leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>
    </div>
  );
};

