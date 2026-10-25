import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { WeightLossProductsConfig } from '@/types/weight-loss-page';
import { defaultWeightLossProductsConfig } from '@/constants/weight-loss-page';
import { WeightLossProductCard } from './weight-loss-product-card';

export interface WeightLossProductsGridProps {
  config?: Partial<WeightLossProductsConfig>;
  className?: string;
}

export const WeightLossProductsGrid: React.FC<WeightLossProductsGridProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: WeightLossProductsConfig = {
    ...defaultWeightLossProductsConfig,
    ...config,
    products: config?.products || defaultWeightLossProductsConfig.products,
  };

  return (
    <section
      id="medication-options"
      aria-label="Weight Loss Options"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-8 sm:gap-10">
        {/* Section Top Header: Headline + Subtext & Action Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-slate-100 pb-6 sm:pb-8">
          <div className="flex flex-col gap-2 flex-1 min-w-0">
            <h2
              className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {activeConfig.subheadline}
            </p>
          </div>

          {activeConfig.viewAllLink && (
            <Link href={activeConfig.viewAllLink.href} className="shrink-0 self-start sm:self-end">
              <Button
                variant="secondary"
                className="font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>{activeConfig.viewAllLink.label}</span>
              </Button>
            </Link>
          )}
        </div>

        {/* 4-Column Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 w-full">
          {activeConfig.products.map((product) => (
            <WeightLossProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightLossProductsGrid;
