import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import {
  TrustFeatures,
  HowItWorksSection,
  TestimonialsSection,
  FaqInsightsSection,
} from '@/components/home';
import {
  DermatologyConditionsGrid,
  DermatologyExperienceSplit,
  DermatologySkinWellness,
} from '@/components/dermatology';
import {
  defaultDermatologyHeroConfig,
  dermatologyTrustFeatures,
  dermatologyConditions,
  dermatologyExperienceConfig,
  defaultDermatologyHowItWorksConfig,
  defaultDermatologyTestimonialsConfig,
  defaultDermatologyFaqConfig,
} from '@/constants/dermatology-page';

export const metadata: Metadata = {
  title: 'Dermatology Care | Healthy, Confident Skin From Anywhere | Solutions Health MD',
  description:
    'Expert online dermatology care for acne, eczema, rosacea, hair loss, and chronic skin conditions from US-licensed providers.',
};

export default function DermatologyServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner (Reusing ServicesHero) */}
      <ServicesHero config={defaultDermatologyHeroConfig} />

      {/* 2. Trust Highlights Bar (Reusing TrustFeatures) */}
      <TrustFeatures items={dermatologyTrustFeatures} />

      {/* 3. Conditions We Treat (New Component: 12 Clinical Photo Cards) */}
      <DermatologyConditionsGrid conditions={dermatologyConditions} />

      {/* 4. Personalized Care & Experience Split (New Component: 2-Card Experience) */}
      <DermatologyExperienceSplit config={dermatologyExperienceConfig} />

      {/* 5. How It Works (Reusing HowItWorksSection) */}
      <HowItWorksSection
        config={defaultDermatologyHowItWorksConfig}
        variant="minimal"
      />

      {/* 6. Whole-Person Skin Wellness: More Than Clearer Skin. A Healthier You. */}
      <DermatologySkinWellness />

      {/* 7. Real people. Real results. (Reusing TestimonialsSection) */}
      <TestimonialsSection config={defaultDermatologyTestimonialsConfig} />

      {/* 8. Frequently Asked Questions & Health Insights (Reusing FaqInsightsSection) */}
      <FaqInsightsSection config={defaultDermatologyFaqConfig} />
    </div>
  );
}
