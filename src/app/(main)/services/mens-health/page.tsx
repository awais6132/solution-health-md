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
  ServicesProgramsGrid,
  ServicesLifestyleBanner,
} from '@/components/peptides';
import {
  defaultMensHealthHeroConfig,
  mensHealthTrustFeatures,
  defaultMensHealthServicesConfig,
  defaultMensHealthHowItWorksConfig,
  defaultMensHealthWhyChooseConfig,
  defaultMensHealthTestimonialsConfig,
  defaultMensHealthFaqConfig,
} from '@/constants/mens-health-page';

export const metadata: Metadata = {
  title: "Men's Health | Solutions Health MD",
  description:
    'Comprehensive care designed for men — hormone optimization (TRT), weight management, longevity protocols, and direct primary care to help you feel, look, and perform at your best.',
};

export default function MensHealthServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: More Energy. Better Health. A Stronger You. (Reused ServicesHero) */}
      <ServicesHero config={defaultMensHealthHeroConfig} />

      {/* 2. Trust Highlights Bar (Reused TrustFeatures) */}
      <TrustFeatures items={mensHealthTrustFeatures} />

      {/* 3. Our Men's Health Services (Reused ServicesProgramsGrid) */}
      <ServicesProgramsGrid config={defaultMensHealthServicesConfig} />

      {/* 4. How It Works: 4 Simple Steps (Reused HowItWorksSection) */}
      <HowItWorksSection
        config={defaultMensHealthHowItWorksConfig}
        variant="minimal"
      />

      {/* 5. Why Choose Solutions Health MD? (Reused ServicesLifestyleBanner) */}
      <ServicesLifestyleBanner config={defaultMensHealthWhyChooseConfig} />

      {/* 6. Real men. Real transformations. (Reused TestimonialsSection) */}
      <TestimonialsSection config={defaultMensHealthTestimonialsConfig} />

      {/* 7. Frequently Asked Questions & Health Insights (Reused FaqInsightsSection) */}
      <FaqInsightsSection config={defaultMensHealthFaqConfig} />
    </div>
  );
}
