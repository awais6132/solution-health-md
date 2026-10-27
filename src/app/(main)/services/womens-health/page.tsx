import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import {
  TrustFeatures,
  HowItWorksSection,
  TestimonialsSection,
  FaqInsightsSection,
} from '@/components/home';
import { ServicesLifestyleBanner } from '@/components/peptides';
import { WomensHealthServicesGrid } from '@/components/womens-health';
import {
  defaultWomensHealthHeroConfig,
  womensHealthTrustFeatures,
  defaultWomensHealthServicesConfig,
  defaultWomensHealthHowItWorksConfig,
  defaultWomensHealthLifestyleBannerConfig,
  defaultWomensHealthTestimonialsConfig,
  defaultWomensHealthFaqConfig,
} from '@/constants/womens-health-page';

export const metadata: Metadata = {
  title: "Women's Health | Solutions Health MD",
  description:
    'Personalized hormone & wellness support with licensed providers. Hormone Replacement Therapy (HRT) formulated for your body at every stage of life.',
};

export default function WomensHealthPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: Balance Today. A Brighter Tomorrow. (Already Built Component) */}
      <ServicesHero config={defaultWomensHealthHeroConfig} />

      {/* 2. Trust Highlights Bar (Already Built Component) */}
      <TrustFeatures items={womensHealthTrustFeatures} />

      {/* 3. Our Women's Health Services (New Dedicated 3-Card Component) */}
      <WomensHealthServicesGrid config={defaultWomensHealthServicesConfig} />

      {/* 4. How It Works: 4 Easy Steps (Already Built Component) */}
      <HowItWorksSection
        config={defaultWomensHealthHowItWorksConfig}
        variant="minimal"
      />

      {/* 4. More Than Treatment. A Healthier, Happier You. (Already Built Component) */}
      <ServicesLifestyleBanner
        config={defaultWomensHealthLifestyleBannerConfig}
      />

      {/* 5. Real people. Real results. (Already Built Component) */}
      <TestimonialsSection config={defaultWomensHealthTestimonialsConfig} />

      {/* 6. Frequently Asked Questions & Health Insights (Already Built Component) */}
      <FaqInsightsSection config={defaultWomensHealthFaqConfig} />
    </div>
  );
}
