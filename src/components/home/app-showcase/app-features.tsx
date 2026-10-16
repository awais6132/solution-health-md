import React from 'react';
import { Check } from 'lucide-react';
import { AppFeatureItem } from '@/types/app-showcase';

interface AppFeaturesProps {
  features: AppFeatureItem[];
  tagline: {
    line1: string;
    line2: string;
  };
  className?: string;
}

export const AppFeatures: React.FC<AppFeaturesProps> = ({
  features,
  tagline,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start justify-center gap-6 ${className}`}>
      {/* 1. Feature Checklist */}
      <ul className="flex flex-col gap-3.5">
        {features.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            {/* Olive-Green Circular Check Badge */}
            <div className="w-[21px] h-[21px] rounded-full bg-[#8DB92E] flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3.5 h-3.5 text-white stroke-[3.2]" />
            </div>
            <span
              className="text-[15.5px] sm:text-[16px] font-semibold text-[#1E293B] tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* 2. Cursive Script Tagline with Custom Hand-drawn Brush Underline */}
      <div className="pt-2">
        <div
          className="text-[27px] sm:text-[30px] font-bold italic text-[#4B9B44] leading-[1.18] select-none tracking-normal flex flex-col gap-0.5"
          style={{ fontFamily: 'var(--font-caveat), cursive, sans-serif' }}
        >
          <span className="block">{tagline.line1}</span>
          <span className="block relative inline-block">
            {tagline.line2}
            {/* Hand-drawn Green Underline Stroke */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#4B9B44] overflow-visible"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 3 7 C 45 4, 115 5, 157 9"
                stroke="currentColor"
                strokeWidth="3.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

