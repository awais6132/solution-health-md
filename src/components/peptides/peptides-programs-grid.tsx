import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PeptidesProgramsGridConfig } from '@/types/peptides-page';
import { defaultPeptidesProgramsConfig } from '@/constants/peptides-page';
import { ROUTES } from '@/constants/routes';

export interface PeptidesProgramsGridProps {
  config?: Partial<PeptidesProgramsGridConfig>;
  className?: string;
}

export function PeptidesProgramsGrid({
  config,
  className = '',
}: PeptidesProgramsGridProps) {
  const activeConfig: PeptidesProgramsGridConfig = {
    ...defaultPeptidesProgramsConfig,
    ...config,
  };

  const bgColor = activeConfig.bgColor || 'bg-[#F4FBFE]';

  return (
    <section
      aria-label={activeConfig.headline}
      className={`w-full ${bgColor} py-12 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 max-w-[700px] gap-1.5">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#526E86] font-normal leading-relaxed">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 5-Column Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-4.5 items-stretch">
          {activeConfig.programs.map((card) => {
            const isPopular = Boolean(card.isPopular || card.badge);

            return (
              <div
                key={card.id}
                className={`relative flex flex-col justify-between bg-white rounded-2xl p-4 sm:p-4.5 transition-all duration-200 hover:shadow-md ${
                  isPopular
                    ? 'border-2 border-[#93C5FD] shadow-xs pt-5'
                    : 'border border-slate-200/90 shadow-2xs'
                }`}
              >
                {/* Popular Green Eyebrow Badge */}
                {card.badge && (
                  <div className="absolute -top-3 left-4 z-10 px-3 py-0.5 rounded-full bg-[#4B9B44] text-white text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider shadow-xs select-none">
                    {card.badge}
                  </div>
                )}

                {/* Upper Content: Image, Title, Description, Features */}
                <div className="flex flex-col flex-grow">
                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-3.5 bg-slate-100 select-none">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt || (typeof card.title === 'string' ? card.title : 'Program')}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="mb-1 min-h-[40px] flex flex-col justify-center">
                    <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#0E4A72] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    {card.subtitle && (
                      <span className="text-[12px] sm:text-[12.5px] font-bold text-[#1D70B8] tracking-tight leading-tight block">
                        {card.subtitle}
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-[11px] sm:text-[11.5px] text-[#526E86] leading-relaxed mb-3.5 min-h-[32px]">
                    {card.description}
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="flex flex-col gap-1.5 mb-5 flex-grow">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#4B9B44] flex items-center justify-center text-white shrink-0 mt-0.5">
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-2.5 h-2.5"
                          >
                            <path d="M2.5 6 4.5 8 9.5 3" />
                          </svg>
                        </span>
                        <span className="text-[11px] sm:text-[11.5px] text-[#334155] font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <Link
                    href={card.ctaHref || ROUTES.FIND_MY_CARE}
                    className="w-full py-2.5 px-4 rounded-full bg-[#4B9B44] text-white text-xs sm:text-[12.5px] font-semibold text-center hover:bg-[#3E8337] active:scale-[0.98] transition-all duration-150 shadow-xs flex items-center justify-center select-none"
                  >
                    {card.ctaText || activeConfig.defaultCtaText || 'See If I Qualify →'}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PeptidesProgramsGrid;
