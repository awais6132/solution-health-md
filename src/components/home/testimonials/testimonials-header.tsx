import React from 'react';
import Link from 'next/link';

interface TestimonialsHeaderProps {
  headline: string;
  description: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
  headline,
  description,
  viewAllLink,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-12 ${className}`}>
      {/* Left: Main Headline & Subtitle */}
      <div className="flex flex-col space-y-2 text-left">
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A192F] tracking-tight leading-[1.12]"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
        >
          {headline}
        </h2>
        <p
          className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed max-w-xl"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {description}
        </p>
      </div>

      {/* Right: View More Stories Link */}
      {viewAllLink && (
        <Link
          href={viewAllLink.href}
          className="inline-flex items-center text-sm sm:text-[15px] font-bold text-[#4B9B44] hover:text-[#3d8537] transition-all hover:translate-x-0.5 select-none shrink-0"
          style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
        >
          <span>{viewAllLink.label}</span>
        </Link>
      )}
    </div>
  );
};
