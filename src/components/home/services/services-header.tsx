import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ServicesHeaderProps {
  headline: string;
  subheadline?: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const ServicesHeader: React.FC<ServicesHeaderProps> = ({
  headline,
  subheadline,
  viewAllLink,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 ${className}`}>
      {/* Title & Subtitle */}
      <div className="flex flex-col max-w-2xl">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0A192F] tracking-tight leading-tight">
          {headline}
        </h2>
        {subheadline && (
          <p className="text-sm sm:text-base text-slate-500 font-normal mt-2 leading-relaxed">
            {subheadline}
          </p>
        )}
      </div>

      {/* View All Services Link */}
      {viewAllLink && (
        <Link
          href={viewAllLink.href}
          className="group inline-flex items-center gap-1 text-sm sm:text-[15px] font-semibold text-[#D97706] hover:text-[#B45309] transition-colors self-start sm:self-end shrink-0 pb-1"
        >
          <span>{viewAllLink.label}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </Link>
      )}
    </div>
  );
};
