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
      className={`group relative flex flex-col justify-between bg-white rounded-[24.3px] border-[1.01px] border-slate-100/90 p-[24.3px] w-full max-w-[348px] min-h-[317.25px] shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_20px_44px_rgba(0,0,0,0.18)] hover:-translate-y-1 ${className}`}
      style={{
        opacity: 1,
      }}
    >
      <div className="flex flex-col space-y-3">
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
        <div className="flex flex-col space-y-0.5">
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
      <div className="mt-auto pt-4 flex flex-wrap items-center gap-2.5">
        {actions.map((action, index) => {
          const isOutline = action.variant === 'outline';
          const hasArrow = !isOutline;

          return (
            <Link key={index} href={action.href} className="inline-block group/btn">
              <Button
                variant={action.variant}
                size="sm"
                className={`rounded-full px-4 py-2.5 text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap inline-flex items-center gap-1.5 ${
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
