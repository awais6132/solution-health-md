'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HeroBadgeConfig, HeroButtonConfig } from '@/types/hero';
import { HeroBadge } from './hero-badge';
import { Button } from '@/components/ui/button';

interface HeroContentProps {
  badge: HeroBadgeConfig;
  headline: {
    primaryText: string;
    highlightText: string;
  };
  description: string;
  primaryCta: HeroButtonConfig;
  secondaryCta: HeroButtonConfig;
  accentColor?: string;
}

export function HeroContent({
  badge,
  headline,
  description,
  primaryCta,
  secondaryCta,
  accentColor = '#4B9B44',
}: HeroContentProps) {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <div suppressHydrationWarning className="flex flex-col items-start text-left w-full max-w-[650.7px] box-border justify-start gap-4 sm:gap-5 lg:gap-6 min-h-[380px] sm:min-h-[420px] lg:min-h-[440px]">
      {/* 1. Pill / Top Tagline Badge */}
      <div className="min-h-[32px] flex items-center">
        <HeroBadge badge={badge} accentColor={accentColor} />
      </div>

      {/* 2. Dual-Colored Main Headline with reserved 3-line min-height to prevent content jumping */}
      <h1
        className="w-full max-w-[650.7px] text-[26px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[54px] leading-[1.18] sm:leading-[1.15] lg:leading-[1.12] tracking-tight lg:tracking-[-1.5px] font-extrabold min-h-[96px] sm:min-h-[130px] md:min-h-[148px] lg:min-h-[162px] xl:min-h-[178px] flex flex-col justify-start"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
        }}
      >
        <span
          className="block"
          style={{
            color: '#0E6C9B',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
          }}
        >
          {headline.primaryText}
        </span>
        <span
          className="block transition-colors duration-500"
          style={{
            color: accentColor,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
          }}
        >
          {headline.highlightText}
        </span>
      </h1>

      {/* 3. Description Copy with balanced typography */}
      <p
        className="w-full text-[14px] sm:text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed min-h-[38px] sm:min-h-[48px] lg:min-h-[54px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          letterSpacing: '0px',
          color: '#475569',
        }}
      >
        {description && description.includes('with') ? (
          <>
            <span>{description.split('with')[0]?.trim()}</span>
            <br className="hidden sm:inline" />
            <span>with {description.split('with')[1]?.trim()}</span>
          </>
        ) : (
          <span>{description || 'Personalized healthcare from licensed providers, with convenient virtual access nationwide.'}</span>
        )}
      </p>

      {/* 4. Action Buttons with rich dynamic hover animations */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1 w-full sm:w-auto min-h-[52px]">
        {primaryCta && (
          <Link href={primaryCta.href} className="group w-full sm:w-auto">
            <button
              type="button"
              style={{
                borderRadius: '11295.75px',
                fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                fontWeight: 600,
                fontSize: '15px',
                lineHeight: '22.59px',
                letterSpacing: '0px',
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center text-white btn-animated-gradient-success active:scale-[0.98] shadow-xs cursor-pointer select-none group whitespace-nowrap px-7 py-3 gap-2"
            >
              <span>{primaryCta.label}</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        )}

        {secondaryCta && (
          <Link
            href={secondaryCta.href}
            className="w-full sm:w-auto"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
          >
            <Button
              variant="outline"
              size="lg"
              style={{
                backgroundColor: isSecondaryHovered ? `${accentColor}0f` : '#ffffff',
                borderColor: isSecondaryHovered ? accentColor : 'rgba(226, 232, 240, 0.9)',
                color: isSecondaryHovered ? accentColor : '#1e293b',
                boxShadow: isSecondaryHovered
                  ? `0 10px 24px -4px ${accentColor}25, 0 0 12px ${accentColor}15`
                  : '0 4px 14px rgba(0,0,0,0.04)',
                transform: isSecondaryHovered ? 'translateY(-2px) scale(1.02)' : 'none',
              }}
              className="w-full sm:w-auto justify-center rounded-full px-8 py-3.5 sm:py-3 text-[15px] font-semibold border transition-all duration-300 cursor-pointer select-none active:scale-[0.98]"
            >
              {secondaryCta.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default HeroContent;
