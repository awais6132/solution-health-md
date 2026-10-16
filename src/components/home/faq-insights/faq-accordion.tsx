'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types/faq-insights';

interface FaqAccordionProps {
  headline: string;
  items: FAQItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ headline, items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8">
      {/* FAQ Headline */}
      <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1B2B4A] tracking-tight">
        {headline}
      </h2>

      {/* Accordion Item List (Pure Flex Gap, Zero Margins) */}
      <div className="w-full flex flex-col gap-3.5 sm:gap-4">
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="w-full bg-[#F0F7FA] hover:bg-[#E8F3F8] transition-colors duration-200 rounded-2xl overflow-hidden border border-[#E2EEF4]/60"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A4D6] gap-4"
              >
                <span className="text-[#1B2B4A] font-bold text-sm sm:text-base leading-snug">
                  {item.question}
                </span>

                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#1B2B4A] font-bold text-lg sm:text-xl transition-transform duration-200 ${
                    isOpen ? 'rotate-45 text-[#00A4D6]' : ''
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed border-t border-[#E2EEF4]/80 flex flex-col">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqAccordion;
