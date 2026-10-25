import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import {
  TrustFeatures,
  HowItWorksSection,
  WholePersonCareSection,
  TestimonialsSection,
} from '@/components/home';
import {
  WeightLossProductsGrid,
  WeightLossEligibility,
} from '@/components/weight-loss';
import {
  defaultWeightLossHeroConfig,
  weightLossTrustFeatures,
  defaultWeightLossProductsConfig,
  weightLossWholePersonConfig,
  defaultWeightLossEligibilityConfig,
} from '@/constants/weight-loss-page';

export const metadata: Metadata = {
  title: 'Weight Loss Program | Solutions Health MD',
  description:
    'Evidence-based medical weight loss protocols featuring Semaglutide, Tirzepatide, and physician-supervised personalized care built around you.',
};

export default function WeightLossServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner (Reusing ServicesHero Component) */}
      <ServicesHero config={defaultWeightLossHeroConfig} />

      {/* 2. Trust Highlights Bar (Reusing TrustFeatures Component with Weight Loss Highlights) */}
      <TrustFeatures items={weightLossTrustFeatures} />

      {/* 3. Choose the Weight Loss Option that Fits you (New Products Grid) */}
      <WeightLossProductsGrid config={defaultWeightLossProductsConfig} />

      {/* 4. How It Works (Reusing Exact HowItWorksSection Component) */}
      <HowItWorksSection />

      {/* 5. More Than Weight Loss: Whole-Person Care (Reusing WholePersonCareSection Component) */}
      <WholePersonCareSection config={weightLossWholePersonConfig} />

      {/* 6. Patient Testimonials & Results (Reusing TestimonialsSection Component) */}
      <TestimonialsSection />

      {/* 7. Eligibility Criteria & Clinical Safety Guidelines (New Eligibility Component) */}
      <WeightLossEligibility config={defaultWeightLossEligibilityConfig} />
    </div>
  );
}
