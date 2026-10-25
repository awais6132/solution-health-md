import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsHeaderProps {
  headline: string;
  description: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  className?: string;
  onPrev?: () => void;
  onNext?: () => void;
}

export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  headline,
  description,
  viewAllLink,
  className = '',
  onPrev,
  onNext,
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 ${className}`}>
      {/* Left: Main Headline & Subtitle */}
      <div className="flex flex-col gap-2 text-left">
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A192F] tracking-tight leading-[1.12]"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
        >
          {headline}
        </h2>
        <p
          className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>

      {/* Right: View More Stories Link + Carousel Navigation Arrows */}
      <div className="flex items-center gap-4 sm:gap-6 shrink-0 justify-between sm:justify-end">
        {viewAllLink && (
          <Link
            href={viewAllLink.href}
            className="inline-flex items-center text-sm sm:text-[15px] font-bold text-[#4B9B44] hover:text-[#3d8537] transition-all hover:translate-x-0.5 select-none"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
          >
            <span>{viewAllLink.label}</span>
          </Link>
        )}

        {/* Carousel Arrow Controls */}
        {(onPrev || onNext) && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous testimonials"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-95 flex items-center justify-center transition-all text-slate-700 shadow-2xs cursor-pointer select-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonials"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-95 flex items-center justify-center transition-all text-slate-700 shadow-2xs cursor-pointer select-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
