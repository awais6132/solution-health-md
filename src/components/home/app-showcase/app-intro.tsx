import React from 'react';
import Link from 'next/link';
import { AppStoreBadge } from '@/types/app-showcase';

interface AppIntroProps {
  headline: string;
  description: string;
  badges: AppStoreBadge[];
  className?: string;
}

export const AppIntro: React.FC<AppIntroProps> = ({
  headline,
  description,
  badges,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start justify-center space-y-6 max-w-md ${className}`}>
      {/* 1. Main Headline */}
      <h2
        className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A192F] tracking-tight leading-[1.15]"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
      >
        {headline}
      </h2>

      {/* 2. Subtitle Description */}
      <p
        className="text-base sm:text-[17px] text-[#64748B] font-normal leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {description}
      </p>

      {/* 3. App Store & Google Play Badges */}
      <div className="pt-2 flex flex-wrap items-center gap-3.5">
        {badges.map((badge) => (
          <Link
            key={badge.id}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black hover:bg-slate-900 text-white px-4 py-2.5 rounded-[12px] shadow-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] border border-black"
          >
            {/* Apple Icon */}
            {badge.id === 'apple' && (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.68-.9 2.7 1 .08 2.04-.52 2.59-1.19z" />
              </svg>
            )}

            {/* Google Play Icon */}
            {badge.id === 'google' && (
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M4.07 3.06L14.28 12 4.07 20.94c-.45-.48-.68-1.22-.68-2.2V5.26c0-.98.23-1.72.68-2.2z"
                />
                <path
                  fill="#FBBC04"
                  d="M17.47 9.17l-3.19 2.83 3.19 2.83 3.6-2.07c1.03-.59 1.03-1.55 0-2.14l-3.6-1.45z"
                />
                <path
                  fill="#4285F4"
                  d="M4.07 3.06L14.28 12l3.19-2.83L6.15 2.1c-.81-.46-1.54-.12-2.08.96z"
                />
                <path
                  fill="#34A853"
                  d="M4.07 20.94L14.28 12l3.19 2.83-11.32 7.07c-.54 1.08-1.27 1.42-2.08.96-.03-.02-.05-.03-.07-.05v-1.87z"
                />
              </svg>
            )}

            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium mb-0.5">
                {badge.subLabel}
              </span>
              <span className="text-sm font-bold tracking-tight text-white font-sans">
                {badge.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
