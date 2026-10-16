import React from 'react';
import { CareModelItem } from '@/types/care-models';

interface CareModelHeaderProps {
  badge: CareModelItem['badge'];
  title: string;
  subtitle: string;
}

export const CareModelHeader: React.FC<CareModelHeaderProps> = ({
  badge,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col gap-2.5 sm:gap-3">
      {/* Badge & Title Row */}
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div className="shrink-0 w-[45px] h-[45px] flex items-center justify-center select-none">
          {badge.icon === 'refresh' ? (
            <svg
              width="45"
              height="45"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[45px] h-[45px]"
            >
              <rect width="45.1875" height="45.1875" rx="22.5938" fill="#4B9B44" />
              <path
                d="M19.1211 21.6211L20.7878 23.2878L24.1211 19.9544M29.1211 21.6211C29.1211 25.7605 25.7605 29.1211 21.6211 29.1211C17.4817 29.1211 14.1211 25.7605 14.1211 21.6211C14.1211 17.4817 17.4817 14.1211 21.6211 14.1211C25.7605 14.1211 29.1211 17.4817 29.1211 21.6211H19.1211"
                stroke="#F8F9FF"
                strokeWidth="1.88281"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="45"
              height="45"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[45px] h-[45px]"
            >
              <rect width="45.1875" height="45.1875" rx="22.5938" fill="#2563EB" />
              <path
                d="M22.9922 19.4583V13.625L15.4922 22.7917H21.3255V28.625L28.8255 19.4583H22.9922V19.4583"
                stroke="#F8F9FF"
                strokeWidth="1.88281"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <h2 className="text-2xl sm:text-[27px] font-bold text-[#F8F9FF] leading-tight tracking-normal">
          {title}
        </h2>
      </div>

      {/* Subtitle / Tagline */}
      <p className="text-base sm:text-[18px] font-medium text-[#F8F9FF] leading-relaxed w-full">
        {subtitle}
      </p>
    </div>
  );
};
