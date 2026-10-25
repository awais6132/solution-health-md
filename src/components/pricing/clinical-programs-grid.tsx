'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import {
  ClinicalProgramsGridConfig,
  ClinicalProgramCard,
  BillingCycle,
} from '@/types/pricing-page';
import { defaultClinicalProgramsConfig } from '@/constants/pricing-page';

/* ─── Quality Badge colour map ─── */
const QUALITY_BADGE_STYLES: Record<string, string> = {
  blue:   'bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]',
  green:  'bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]',
  orange: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]',
  purple: 'bg-[#FAF5FF] text-[#7C3AED] border-[#E9D5FF]',
};

/* ─── Individual Program Card ─── */
function ProgramCard({
  card,
  billing,
}: {
  card: ClinicalProgramCard;
  billing: BillingCycle;
}) {
  const price = billing === 'monthly' ? card.monthlyPrice : (card.oneTimePrice ?? card.monthlyPrice);
  const badgeStyle = QUALITY_BADGE_STYLES[card.qualityBadgeColor ?? 'blue'];

  return (
    <div
      className={`relative group flex flex-col bg-white rounded-2xl border transition-all duration-300 overflow-hidden
        ${card.recommended
          ? 'border-[#4B9B44]/50 shadow-[0_8px_32px_-8px_rgba(75,155,68,0.22)] hover:shadow-[0_16px_40px_-8px_rgba(75,155,68,0.32)]'
          : 'border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#0E6C9B]/30 hover:shadow-[0_12px_36px_-8px_rgba(14,108,155,0.14)]'
        }`}
    >
      {/* Recommended ribbon */}
      {card.recommended && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#4B9B44] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl select-none tracking-wider">
            POPULAR
          </div>
        </div>
      )}

      {/* Card Header */}
      <div className="px-5 pt-5 pb-4 flex flex-col gap-2.5 border-b border-slate-100">
        {/* Top row: category badge + quality badge */}
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <span className="text-[10px] font-bold text-[#0E6C9B] uppercase tracking-widest bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE] select-none">
            {card.categoryBadge}
          </span>
          {card.qualityBadge && (
            <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border select-none ${badgeStyle}`}>
              {card.qualityBadge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="text-[17px] sm:text-lg font-extrabold text-slate-900 leading-tight group-hover:text-[#0E6C9B] transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] text-slate-500 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Price block */}
      <div className="px-5 py-4 flex flex-col gap-1 border-b border-slate-100">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-slate-900 leading-none">
            ${price}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {billing === 'monthly' ? (card.priceLabel ?? '/mo') : '/one-time'}
          </span>
        </div>
        {card.deliveryBadge && (
          <span className="inline-flex w-fit items-center mt-1 px-2.5 py-0.5 rounded-sm bg-[#F0FDF4] text-[#15803D] text-[10px] font-bold border border-[#BBF7D0] tracking-wide select-none uppercase">
            ✓ {card.deliveryBadge}
          </span>
        )}
      </div>

      {/* Features list */}
      <div className="px-5 py-4 flex flex-col gap-2 flex-1">
        {card.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="mt-0.5 w-4 h-4 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
              <Check className="w-2.5 h-2.5 text-[#16A34A]" strokeWidth={3} />
            </span>
            <span className="text-[12.5px] text-slate-600 leading-snug">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <Link
          href={card.href}
          className={`w-full h-11 inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 select-none cursor-pointer
            ${card.recommended
              ? 'btn-animated-gradient-success text-white'
              : 'bg-[#F8FAFC] hover:bg-[#0E6C9B] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent'
            }`}
        >
          <span>Select Plan &amp; Start Intake</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

/* ─── Billing Toggle ─── */
function BillingToggle({
  billing,
  onChange,
}: {
  billing: BillingCycle;
  onChange: (v: BillingCycle) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-[#F8FAFC] p-1 gap-1 select-none">
      <button
        type="button"
        onClick={() => onChange('monthly')}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
          billing === 'monthly'
            ? 'bg-[#4B9B44] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        Monthly Subscription
      </button>
      <button
        type="button"
        onClick={() => onChange('one-time')}
        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
          billing === 'one-time'
            ? 'bg-[#4B9B44] text-white shadow-xs'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        One-Time Order
      </button>
    </div>
  );
}

/* ─── Main Component ─── */
export interface ClinicalProgramsGridProps {
  config?: Partial<ClinicalProgramsGridConfig>;
  className?: string;
}

export const ClinicalProgramsGrid: React.FC<ClinicalProgramsGridProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: ClinicalProgramsGridConfig = {
    ...defaultClinicalProgramsConfig,
    ...config,
    tabs: config?.tabs ?? defaultClinicalProgramsConfig.tabs,
    cards: config?.cards ?? defaultClinicalProgramsConfig.cards,
  };

  const [activeTab, setActiveTab] = useState<string>('all');
  const [billing, setBilling] = useState<BillingCycle>('monthly');

  const visibleCards =
    activeTab === 'all'
      ? activeConfig.cards
      : activeConfig.cards.filter((c) => c.serviceCategory === activeTab);

  return (
    <section
      id="clinical-programs"
      aria-label="Clinical Programs & Formulations"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">

        {/* ── Header row: eyebrow + title (left) | billing toggle (right) ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            {activeConfig.eyebrow && (
              <span className="text-xs font-bold text-[#0E6C9B] uppercase tracking-wider">
                {activeConfig.eyebrow}
              </span>
            )}
            <h2
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.headline}
            </h2>
          </div>
          <div className="shrink-0">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="w-full overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2 min-w-max">
            {activeConfig.tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
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

        {/* ── Cards Grid ── */}
        {visibleCards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {visibleCards.map((card) => (
              <ProgramCard key={card.id} card={card} billing={billing} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16 text-slate-400 text-sm">
            No programs found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default ClinicalProgramsGrid;
