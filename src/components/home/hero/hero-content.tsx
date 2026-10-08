import React from 'react';
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
}

export function HeroContent({
  badge,
  headline,
  description,
  primaryCta,
  secondaryCta,
}: HeroContentProps) {
  return (
    <div
      className="flex flex-col items-start text-left w-full max-w-[650.7px] box-border justify-center"
      style={{
        gap: '27.11px',
        paddingTop: '2.26px',
        minHeight: '453.56px',
      }}
    >
      {/* 1. Pill / Top Tagline Badge */}
      <HeroBadge badge={badge} />

      {/* 2. Dual-Colored Main Headline with exact Figma layout & typography */}
      <h1
        className="w-full max-w-[650.7px] text-[38px] sm:text-[52px] lg:text-[67.78px] leading-[1.05] lg:leading-[67.78px] tracking-[-1.5px] lg:tracking-[-3px] font-extrabold"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          verticalAlign: 'middle',
        }}
      >
        <span
          className="block"
          style={{
            color: '#0E6C9B',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            letterSpacing: '-3px',
          }}
        >
          {headline.primaryText}
        </span>
        <span
          className="block"
          style={{
            color: '#4B9B44',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            letterSpacing: '-3px',
          }}
        >
          {headline.highlightText}
        </span>
      </h1>

      {/* 3. Description Copy with exact Figma typography & color (line break at 'with') */}
      <p
        className="w-full text-base sm:text-lg lg:text-[20.33px] leading-relaxed lg:leading-[33.04px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          letterSpacing: '0px',
          verticalAlign: 'middle',
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

      {/* 4. Action Buttons (Pill shaped) */}
      <div className="flex flex-wrap items-center gap-3.5 pt-2">
        {primaryCta && (
          <Link href={primaryCta.href} className="group">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full px-8 py-3 text-sm sm:text-[15px] font-semibold text-white shadow-md hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 border-none cursor-pointer flex items-center gap-2 select-none"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                strokeWidth={2.2}
              />
            </Button>
          </Link>
        )}

        {secondaryCta && (
          <Link href={secondaryCta.href}>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 text-sm sm:text-[15px] font-semibold text-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:border-[#4b9b44] hover:text-[#2e7d32] hover:shadow-[0_10px_24px_-4px_rgba(75,155,68,0.22)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer select-none"
            >
              {secondaryCta.label}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
