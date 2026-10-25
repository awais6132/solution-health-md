import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import { ClinicalProgramsGrid, MembershipPlans } from '@/components/pricing';
import { defaultPricingHeroConfig } from '@/constants/pricing-page';

export const metadata: Metadata = {
  title: 'Pricing & Membership | Solutions Health MD',
  description:
    'Explore our transparent pricing plans and membership options. Find the right clinical program or membership tier tailored to your health goals.',
};

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner — reusing ServicesHero with pricing config */}
      <ServicesHero config={defaultPricingHeroConfig} />

      {/* 2. Clinical Programs & Formulations — tabbed pricing cards */}
      <ClinicalProgramsGrid />

      {/* 3. Membership Plans — 3-tier membership cards */}
      <MembershipPlans />
    </div>
  );
}
