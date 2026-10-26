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
  PrimaryCareHero,
  PrimaryCareApproach,
  PrimaryCarePricingGrid,
  PrimaryCareIncluded,
  PrimaryCareLifestyleBanner,
} from '@/components/primary-care';
import {
  defaultPrimaryCareHeroConfig,
  primaryCareTrustFeatures,
  defaultPrimaryCareApproachConfig,
  defaultPrimaryCarePricingConfig,
  defaultPrimaryCareIncludedConfig,
  defaultPrimaryCareHowItWorksConfig,
  defaultPrimaryCareLifestyleBannerConfig,
  defaultPrimaryCareTestimonialsConfig,
  defaultPrimaryCareFaqConfig,
} from '@/constants/primary-care-page';

export const metadata: Metadata = {
  title: 'Direct Primary Care Membership | Solutions Health MD',
  description:
    'Personalized Primary Care for a Healthier You. Direct Primary Care gives you unlimited access to a dedicated provider, personalized wellness plans, and proactive support — without insurance barriers.',
};

export default function PrimaryCarePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: Personalized Primary Care for a Healthier You. */}
      <PrimaryCareHero />

      {/* 2. Trust Highlights Bar (5 Badges) */}
      <TrustFeatures items={primaryCareTrustFeatures} />

      {/* 3. A Different Approach to Primary Care (Left text + 4 cards) */}
      <PrimaryCareApproach config={defaultPrimaryCareApproachConfig} />

      {/* 4. Choose the Plan That Fits Your Life (4 Pricing Tiers) */}
      <PrimaryCarePricingGrid config={defaultPrimaryCarePricingConfig} />

      {/* 5. What's Included in All Plans? (8 Items) */}
      <PrimaryCareIncluded config={defaultPrimaryCareIncludedConfig} />

      {/* 6. How It Works: 4 Easy Steps */}
      <HowItWorksSection
        config={defaultPrimaryCareHowItWorksConfig}
        variant="minimal"
      />

      {/* 7. More Than Primary Care. A Healthier You. (Lifestyle Mountain Banner) */}
      <PrimaryCareLifestyleBanner />

      {/* 8. Real people. Real results. (3 Testimonials) */}
      <TestimonialsSection config={defaultPrimaryCareTestimonialsConfig} />

      {/* 9. Frequently Asked Questions & Health Insights (2-Column Split) */}
      <FaqInsightsSection config={defaultPrimaryCareFaqConfig} />
    </div>
  );
}
