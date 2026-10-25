import React from 'react';
import Link from 'next/link';
import { BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaithCardItem } from '@/types/faith-based-care';

interface FaithCardProps {
  item: FaithCardItem;
  className?: string;
}

export const FaithCard: React.FC<FaithCardProps> = ({ item, className = '' }) => {
  const { icon, iconBg, iconColor, title, subtitle, subtitleColor, description, actions } = item;

  return (
    <div
      className={`group relative flex flex-col justify-between gap-5 bg-white rounded-[24px] border border-slate-100 p-6 w-full shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_44px_rgba(0,0,0,0.18)] hover:-translate-y-1 ${className}`}
    >
      <div className="flex flex-col gap-3">
        {/* 1. Icon Badge */}
        <div
          className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: iconBg }}
        >
          {icon === 'book' ? (
            <BookOpen className="w-5 h-5" style={{ color: iconColor }} strokeWidth={2.2} />
          ) : (
            <Heart className="w-5 h-5" style={{ color: iconColor }} strokeWidth={2.2} />
          )}
        </div>

        {/* 2. Title & Subtitle */}
        <div className="flex flex-col gap-0.5">
          <h3
            className="text-[19px] font-bold text-[#0A192F] leading-snug tracking-tight"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
          >
            {title}
          </h3>
          {subtitle && (
            <span
              className="text-xs font-semibold leading-tight"
              style={{
                color: subtitleColor || '#4B9B44',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* 3. Description Body */}
        <p
          className="text-[13px] text-slate-600 font-normal leading-[1.5]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>

      {/* 4. Action Buttons */}
      <div
        className={`flex w-full ${
          actions.length > 1
            ? 'flex-row items-center gap-2'
            : 'flex-wrap items-center gap-2.5'
        }`}
      >
        {actions.map((action, index) => {
          const isOutline = action.variant === 'outline';
          // Icon removed for the card with multiple buttons as requested
          const hasArrow = actions.length === 1 && !isOutline;
          const isMulti = actions.length > 1;

          return (
            <Link
              key={index}
              href={action.href}
              className={isMulti ? 'flex-1 min-w-0' : 'inline-block group/btn'}
            >
              <Button
                variant={action.variant}
                className={`rounded-full h-auto py-2 font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap inline-flex items-center justify-center gap-1.5 w-full ${
                  isMulti
                    ? 'px-2 text-[11px] sm:text-xs xl:px-2 xl:text-[11.5px]'
                    : 'px-4 text-xs sm:text-[13px]'
                } ${
                  isOutline
                    ? 'border border-[#4b9b44] text-[#4b9b44] bg-white hover:bg-[#4b9b44]/10 hover:border-[#3d8537]'
                    : 'border-none text-white shadow-xs hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                <span>{action.label}</span>
                {hasArrow && (
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 shrink-0"
                    strokeWidth={2.2}
                  />
                )}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
