import React from 'react';
import { AppFeatureItem } from '@/types/app-showcase';

interface AppFeaturesProps {
  features: AppFeatureItem[];
  tagline: {
    line1: string;
    line2: string;
  };
  className?: string;
}

const FeatureCheckIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <rect width="22.5938" height="22.5938" rx="11.2969" fill="#9CBF3C" />
    <path
      d="M14.6914 6.41162C12.7812 9.13818 10.8184 11.6616 8.80273 13.9819C8.65039 14.1577 8.51758 14.2456 8.4043 14.2456C8.27539 14.2456 8.04297 13.9058 7.70703 13.2261C7.16406 12.1284 6.89258 11.4722 6.89258 11.2573C6.89258 11.1792 6.94531 11.0874 7.05078 10.9819C7.27734 10.7437 7.4375 10.6245 7.53125 10.6245C7.61719 10.6245 7.70898 10.7612 7.80664 11.0347C8.06445 11.73 8.33594 12.3491 8.62109 12.8921C10.5977 10.8921 12.5527 8.65186 14.4863 6.17139L14.6914 6.41162Z"
      fill="#F8F9FF"
    />
  </svg>
);

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
            <FeatureCheckIcon />
            <span
              className="text-[17px] font-medium text-[#1E293B] tracking-tight whitespace-nowrap"
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
          className="text-[28px] sm:text-[32px] font-semibold text-[#4B9B44] leading-[1.15] select-none tracking-normal flex flex-col gap-0.5"
          style={{ fontFamily: 'var(--font-caveat), cursive, sans-serif' }}
        >
          <span className="block">{tagline.line1}</span>
          <span className="block">
            <span className="relative inline-block">
              In One
              {/* Hand-drawn Green Underline Stroke directly under "In One" matching Figma/design */}
              <svg
                className="absolute -bottom-1 left-0 w-[84px] h-[9px] text-[#4B9B44] overflow-visible pointer-events-none"
                viewBox="0 0 84 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 2 5.5 C 26 7.5, 58 7, 82 2.5"
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {tagline.line2.startsWith('In One')
              ? tagline.line2.slice(6)
              : ` ${tagline.line2}`}
          </span>
        </div>
      </div>
    </div>
  );
};

