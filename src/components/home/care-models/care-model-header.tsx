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
    <div className="flex flex-col space-y-2.5 sm:space-y-3">
      {/* Badge & Title Row */}
      <div className="flex items-center gap-3 sm:gap-3.5">
        <div className="shrink-0 w-[45.19px] h-[45.19px] flex items-center justify-center select-none">
          {badge.icon === 'refresh' ? (
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[45.19px] h-[45.19px]"
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
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[45.19px] h-[45.19px]"
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

        <h2
          className="tracking-normal leading-tight font-bold"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '27.11px',
            lineHeight: '36.15px',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: '#F8F9FF',
          }}
        >
          {title}
        </h2>
      </div>

      {/* Subtitle / Tagline */}
      <p
        className="w-full max-w-[591.22px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '18.08px',
          lineHeight: '27.11px',
          letterSpacing: '0px',
          verticalAlign: 'middle',
          color: '#F8F9FF',
        }}
      >
        {subtitle}
      </p>
    </div>
  );
};
