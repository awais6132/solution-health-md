import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryCarePricingConfig } from '@/types/primary-care-page';
import { defaultPrimaryCarePricingConfig } from '@/constants/primary-care-page';
import { ROUTES } from '@/constants/routes';

export interface PrimaryCarePricingGridProps {
  config?: Partial<PrimaryCarePricingConfig>;
  className?: string;
}

export function PrimaryCarePricingGrid({
  config,
  className = '',
}: PrimaryCarePricingGridProps) {
  const activeConfig: PrimaryCarePricingConfig = {
    ...defaultPrimaryCarePricingConfig,
    ...config,
  };

  return (
    <section
      id="plans"
      aria-label={activeConfig.headline}
      className={`w-full bg-white py-14 sm:py-16 lg:py-20 scroll-mt-20 ${className}`}
    >
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-12 max-w-[750px] gap-2">
          <h2
            className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#526E86] font-normal leading-relaxed">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 4-Column Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 xl:gap-6 items-stretch">
          {activeConfig.tiers.map((card) => {
            const isExecutive = Boolean(card.isPopular || card.id === 'executive-plan');

            return (
              <div
                key={card.id}
                className={`relative flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 transition-all duration-200 hover:shadow-lg ${
                  isExecutive
                    ? 'border-2 border-[#4B9B44] shadow-md ring-4 ring-[#4B9B44]/10'
                    : 'border border-slate-200/90 shadow-xs'
                }`}
              >
                {/* Upper Content: Image, Title, Price, Checklist */}
                <div className="flex flex-col flex-grow">
                  {/* Card Image */}
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100 select-none">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt || card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-[#0E4A72] tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#526E86] leading-relaxed mt-0.5">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-slate-100">
                    <span className="text-3xl font-extrabold text-[#0E4A72] tracking-tight">
                      ${card.price}
                    </span>
                    <span className="text-xs text-[#64748B] font-medium">
                      {card.period}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="flex flex-col gap-2.5 mb-6 flex-grow">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#4B9B44] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                          <svg
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-2.5 h-2.5"
                          >
                            <path d="M2.5 6 4.5 8 9.5 3" />
                          </svg>
                        </span>
                        <span className="text-xs text-[#334155] font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <Link
                    href={card.ctaHref || `${ROUTES.SIGNUP}?plan=${card.id}`}
                    className={`w-full py-2.5 px-4 rounded-full text-xs sm:text-[13px] font-semibold text-center transition-all duration-150 shadow-xs flex items-center justify-center select-none active:scale-[0.98] ${
                      isExecutive
                        ? 'bg-[#4B9B44] hover:bg-[#3E8337] text-white shadow-sm'
                        : 'bg-[#4B9B44] hover:bg-[#3E8337] text-white'
                    }`}
                  >
                    {card.ctaText || 'Get Started >'}
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

export default PrimaryCarePricingGrid;
