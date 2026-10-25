import React from 'react';
import { Check } from 'lucide-react';
import { WeightLossEligibilityConfig } from '@/types/weight-loss-page';
import { defaultWeightLossEligibilityConfig } from '@/constants/weight-loss-page';

export interface WeightLossEligibilityProps {
  config?: Partial<WeightLossEligibilityConfig>;
  className?: string;
}

export const WeightLossEligibility: React.FC<WeightLossEligibilityProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: WeightLossEligibilityConfig = {
    ...defaultWeightLossEligibilityConfig,
    ...config,
    cards: config?.cards || defaultWeightLossEligibilityConfig.cards,
  };

  return (
    <section
      aria-label="Weight Loss Medical Eligibility & Guidelines"
      className={`w-full bg-white site-section pb-16 sm:pb-20 ${className}`}
    >
      <div className="site-container w-full">
        {/* 3-Column Soft Blue Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full">
          {activeConfig.cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F0F7FA] rounded-2xl p-6 sm:p-7 border border-[#D9EAF3] flex flex-col gap-4 shadow-2xs hover:shadow-sm transition-shadow duration-200"
            >
              {/* Card Title */}
              <h3
                className="text-lg sm:text-[19px] font-bold text-[#0E6C9B] leading-snug"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {card.title}
              </h3>

              {/* Checklist Content */}
              {card.type === 'checklist' && card.items && (
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13.5px] text-slate-700 leading-snug">
                      <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Description Content */}
              {card.type === 'description' && card.description && (
                <p className="text-xs sm:text-[14px] text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightLossEligibility;
