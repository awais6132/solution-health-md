'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import {
  MembershipPlansConfig,
  MembershipPlanCard,
  BillingCycle,
} from '@/types/pricing-page';
import { defaultMembershipPlansConfig } from '@/constants/pricing-page';

/* ─── Billing Toggle (same design as ClinicalProgramsGrid) ─── */
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

/* ─── Individual Membership Card ─── */
function MembershipCard({
  plan,
  billing,
}: {
  plan: MembershipPlanCard;
  billing: BillingCycle;
}) {
  const price =
    billing === 'monthly' ? plan.monthlyPrice : (plan.oneTimePrice ?? plan.monthlyPrice);

  return (
    <div
      className={`relative group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
        ${plan.highlighted
          ? 'bg-white border-[#4B9B44]/50 shadow-[0_8px_32px_-8px_rgba(75,155,68,0.25)] hover:shadow-[0_20px_48px_-8px_rgba(75,155,68,0.35)]'
          : 'bg-white border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:border-[#0E6C9B]/30 hover:shadow-[0_12px_36px_-8px_rgba(14,108,155,0.13)]'
        }`}
    >
      {/* Top accent bar for highlighted plan */}
      {plan.highlighted && (
        <div className="h-1 w-full bg-gradient-to-r from-[#4B9B44] to-[#9CC03C]" />
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 gap-5">

        {/* Title + Description */}
        <div className="flex flex-col gap-2">
          <h3
            className="text-xl sm:text-[22px] font-extrabold text-slate-900 leading-tight group-hover:text-[#0E6C9B] transition-colors"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {plan.title}
          </h3>
          <p className="text-[13px] text-slate-500 leading-relaxed">
            {plan.description}
          </p>
        </div>

        {/* Features checklist */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-[#16A34A]" strokeWidth={3} />
              </span>
              <span className="text-[13px] text-slate-600 leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="border-t border-slate-100" />

        {/* Price block */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[13px] font-medium text-slate-400">$</span>
            <span className="text-4xl font-extrabold text-slate-900 leading-none">
              {price}
            </span>
            <span className="text-xs font-medium text-slate-400">USD</span>
          </div>
          <span className="text-[12px] text-slate-400 font-normal">
            {billing === 'monthly' ? `$${price}/mo · ` : ''}{plan.priceNote}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={plan.href}
          className={`w-full h-12 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 select-none cursor-pointer
            ${plan.highlighted
              ? 'btn-animated-gradient-success text-white'
              : 'bg-[#F0FDF4] hover:bg-[#4B9B44] text-[#15803D] hover:text-white border border-[#BBF7D0] hover:border-transparent'
            }`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export interface MembershipPlansProps {
  config?: Partial<MembershipPlansConfig>;
  className?: string;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: MembershipPlansConfig = {
    ...defaultMembershipPlansConfig,
    ...config,
    plans: config?.plans ?? defaultMembershipPlansConfig.plans,
  };

  const [billing, setBilling] = useState<BillingCycle>('monthly');

  return (
    <section
      id="membership-plans"
      aria-label="Membership Plans"
      className={`w-full bg-[#F8FAFC] site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">

        {/* ── Header row ── */}
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

        {/* ── 3-Column Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
          {activeConfig.plans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
