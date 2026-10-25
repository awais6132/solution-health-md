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
  MentalHealthTruthGrace,
  MentalHealthServicesGrid,
  MentalHealthHopeBanner,
} from '@/components/mental-health';
import {
  defaultMentalHealthHeroConfig,
  mentalHealthTrustFeatures,
  defaultMentalHealthHowItWorksConfig,
  defaultMentalHealthTestimonialsConfig,
  defaultMentalHealthFaqConfig,
} from '@/constants/mental-health-page';

export const metadata: Metadata = {
  title: 'Mental Health & Faith-Based Counseling | Solutions Health MD',
  description:
    "Experience compassionate, professional Christian counseling rooted in biblical wisdom and clinical excellence. Virtual therapy for individuals, couples, and adolescents.",
};

export default function MentalHealthServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: Faith-Based Support for a Stronger You (Reused Component) */}
      <ServicesHero config={defaultMentalHealthHeroConfig} />

      {/* 2. Trust Highlights Bar (Reused Component) */}
      <TrustFeatures items={mentalHealthTrustFeatures} />

      {/* 3. Counseling Rooted in Truth and Grace (New Dedicated Component with #F2F8FD background) */}
      <MentalHealthTruthGrace />

      {/* 4. Our Mental Health Counseling Services: 4 Clinical Cards (New Dedicated Component) */}
      <MentalHealthServicesGrid />

      {/* 5. How It Works: 4 Easy Steps (Reused Component) */}
      <HowItWorksSection
        config={defaultMentalHealthHowItWorksConfig}
        variant="minimal"
      />

      {/* 6. More Than Counseling. A Brighter Tomorrow (New Dedicated Component) */}
      <MentalHealthHopeBanner />

      {/* 7. Real people. Real results. (Reused Component) */}
      <TestimonialsSection config={defaultMentalHealthTestimonialsConfig} />

      {/* 8. Frequently Asked Questions & Health Insights (Reused Component) */}
      <FaqInsightsSection config={defaultMentalHealthFaqConfig} />
    </div>
  );
}
