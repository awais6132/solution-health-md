import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import {
  UrgentCareTriageGuidelinesProps,
  UrgentCareTriageConfig,
} from '@/types/urgent-care-page';
import { defaultUrgentCareTriageConfig } from '@/constants/urgent-care-page';

export const UrgentCareTriageGuidelines: React.FC<UrgentCareTriageGuidelinesProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: UrgentCareTriageConfig = {
    ...defaultUrgentCareTriageConfig,
    ...config,
    cards: config?.cards || defaultUrgentCareTriageConfig.cards,
  };

  return (
    <section
      id="triage-guidelines"
      aria-label="When to Use Urgent Care vs Emergency ER"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full">
        {/* 2-Column Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 w-full">
          {activeConfig.cards.map((card) => {
            const isEmergency = card.type === 'emergency';

            return (
              <div
                key={card.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col gap-4.5 border transition-all duration-200 ${
                  isEmergency
                    ? 'bg-[#FEF2F2] border-[#FECACA] shadow-2xs'
                    : 'bg-[#F0F7FA] border-[#D2E7F3] shadow-2xs'
                }`}
              >
                {/* Card Title */}
                <h3
                  className={`text-lg sm:text-[19px] font-bold leading-snug ${
                    isEmergency ? 'text-[#DC2626]' : 'text-[#0E6C9B]'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {card.title}
                </h3>

                {/* Criteria Checklist */}
                <ul className="flex flex-col gap-3">
                  {card.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs sm:text-[13.5px] leading-snug"
                    >
                      {/* Icon Pill */}
                      {isEmergency ? (
                        <span className="w-4.5 h-4.5 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0">
                          <AlertCircle className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="w-4.5 h-4.5 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                      )}

                      {/* Text */}
                      <span
                        className={`font-medium ${
                          isEmergency ? 'text-slate-800' : 'text-slate-700'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UrgentCareTriageGuidelines;
