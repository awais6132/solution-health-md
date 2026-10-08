import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FaithBasedCareConfig } from '@/types/faith-based-care';

interface FaithIntroProps {
  eyebrow: string;
  headline: FaithBasedCareConfig['headline'];
  description: string;
  cta: FaithBasedCareConfig['cta'];
  className?: string;
}

export const FaithIntro: React.FC<FaithIntroProps> = ({
  eyebrow,
  headline,
  description,
  cta,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start text-left justify-center space-y-4 sm:space-y-5 max-w-[592px] ${className}`}>
      {/* 1. Eyebrow Tag with Cross */}
      <div
        className="flex items-center gap-2 uppercase"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '13.56px',
          lineHeight: '18.08px',
          letterSpacing: '1.36px',
          color: '#F9AC2C',
        }}
      >
        <span className="text-[14px] leading-none">✝</span>
        <span>{eyebrow}</span>
      </div>

      {/* 2. Main Heading (Strict 2 Lines) */}
      <h2
        className="text-left text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] xl:text-[34px] leading-[1.22] tracking-tight text-white font-extrabold"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          letterSpacing: '-0.8px',
          color: '#F8F9FF',
        }}
      >
        <span className="block whitespace-normal sm:whitespace-nowrap">{headline.part1}</span>
        <span className="block mt-1 whitespace-normal sm:whitespace-nowrap">{headline.part2}</span>
      </h2>

      {/* 3. Description Copy */}
      <p
        className="text-left text-[15px] sm:text-[16px] lg:text-[18.08px] leading-relaxed lg:leading-[27.11px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          letterSpacing: '0px',
          color: '#F8F9FF',
          maxWidth: '592px',
        }}
      >
        {description}
      </p>

      {/* 4. CTA Button */}
      {cta && (
        <div className="pt-2 sm:pt-3">
          <Link href={cta.href} className="inline-block group">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-7 sm:px-8 py-3 text-sm sm:text-[15px] font-semibold text-white shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border-none cursor-pointer flex items-center gap-2 select-none"
            >
              <span>{cta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" strokeWidth={2.2} />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
