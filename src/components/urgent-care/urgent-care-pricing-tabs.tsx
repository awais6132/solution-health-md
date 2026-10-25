'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  UrgentCarePricingTabsProps,
  UrgentCarePricingTabsConfig,
} from '@/types/urgent-care-page';
import { defaultUrgentCarePricingTabsConfig } from '@/constants/urgent-care-page';

export const UrgentCarePricingTabs: React.FC<UrgentCarePricingTabsProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: UrgentCarePricingTabsConfig = {
    ...defaultUrgentCarePricingTabsConfig,
    ...config,
    tabs: config?.tabs || defaultUrgentCarePricingTabsConfig.tabs,
    conditions: config?.conditions || defaultUrgentCarePricingTabsConfig.conditions,
  };

  const [activeTab, setActiveTab] = useState<string>(activeConfig.tabs[0]?.id || 'common-illnesses');

  // Filter conditions based on selected tab
  const filteredConditions =
    activeTab === 'all'
      ? activeConfig.conditions
      : activeConfig.conditions.filter((item) => item.category === activeTab);

  return (
    <section
      id="urgent-care-pricing"
      aria-label="Urgent Care Treatment Options & Pricing"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Header: Eyebrow + Main Title */}
        <div className="flex flex-col gap-1.5">
          {activeConfig.eyebrow && (
            <span className="text-xs sm:text-[13px] font-bold text-[#0E6C9B] uppercase tracking-wider">
              {activeConfig.eyebrow}
            </span>
          )}
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
        </div>

        {/* Category Filter Tabs Bar */}
        <div className="w-full overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {activeConfig.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-[#0A2540] text-white shadow-xs'
                      : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-700 border border-slate-200/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column Responsive Condition Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
          {filteredConditions.map((item) => (
            <Link
              key={item.id}
              href={item.href || '#'}
              className="group bg-white rounded-xl p-4 sm:p-4.5 border border-slate-200/80 hover:border-[#0E6C9B]/40 hover:shadow-xs transition-all duration-200 flex items-center justify-between gap-3"
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span
                  className="text-sm sm:text-[15px] font-bold text-slate-900 group-hover:text-[#0E6C9B] transition-colors truncate"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                </span>
                <span className="text-xs sm:text-[13px] font-semibold text-[#16A34A]">
                  {item.priceRange}
                </span>
              </div>

              {/* Right Circular Green Action Icon */}
              <div className="w-7 h-7 rounded-full bg-[#ECFDF5] text-[#16A34A] flex items-center justify-center shrink-0 group-hover:bg-[#16A34A] group-hover:text-white transition-all duration-200">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrgentCarePricingTabs;
