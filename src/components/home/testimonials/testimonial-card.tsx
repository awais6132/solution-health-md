import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialItem } from '@/types/testimonials';

interface TestimonialCardProps {
  item: TestimonialItem;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ item, className = '' }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 lg:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100/90 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 min-h-[260px] sm:min-h-[290px] w-full ${className}`}
    >
      <div>
        {/* 1. Header: 5 Stars + Verified Patient Pill Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-[#0E6C9B]">
            {Array.from({ length: item.rating }).map((_, index) => (
              <Star key={index} className="w-4 h-4 fill-current text-[#0E6C9B]" />
            ))}
          </div>

          {/* Verified Patient Badge */}
          {item.verified && (
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-[#86EFAC] bg-[#0F3B1A] tracking-tight select-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Verified Patient
            </span>
          )}
        </div>

        {/* 2. Review Quote (Italicized) */}
        <p
          className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#1E293B] italic font-normal leading-relaxed mb-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {item.quote}
        </p>
      </div>

      {/* 3. Bottom Meta: Patient Info (Left) & Highlight Metric (Right) */}
      <div className="pt-4 border-t border-slate-100 flex items-end justify-between gap-4">
        {/* Left: Patient Name & Treatment */}
        <div className="flex flex-col text-left">
          <h4
            className="text-[15px] sm:text-base font-bold text-[#0F172A] tracking-tight leading-snug"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
          >
            {item.patientName}
          </h4>
          <span className="text-xs text-slate-500 font-medium mt-0.5">
            {item.location} • {item.treatment}
          </span>
        </div>

        {/* Right: Outcome Metric */}
        <div className="flex flex-col text-right shrink-0">
          <span
            className="text-xl sm:text-2xl font-extrabold text-[#0E6C9B] leading-none tracking-tight"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
          >
            {item.metricValue}
          </span>
          <span className="text-[11px] text-slate-500 font-medium mt-1">
            {item.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
};
