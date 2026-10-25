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
  PeptidesWhatAre,
  PeptidesProgramsGrid,
  PeptidesWhyChoose,
  PeptidesLifestyleBanner,
} from '@/components/peptides';
import {
  defaultPeptidesHeroConfig,
  peptidesTrustFeatures,
  defaultPeptidesHowItWorksConfig,
  defaultPeptidesTestimonialsConfig,
  defaultPeptidesFaqConfig,
} from '@/constants/peptides-page';

export const metadata: Metadata = {
  title: 'Peptides & Longevity | Solutions Health MD',
  description:
    'Science-backed peptides to help you look, feel, and perform at your best — with a personalized plan designed by licensed providers to support energy, recovery, and long-term wellness.',
};

export default function PeptidesServicePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner: Optimize Today. A Healthier Tomorrow. (Reused Component) */}
      <ServicesHero config={defaultPeptidesHeroConfig} />

      {/* 2. Trust Highlights Bar (Reused Component) */}
      <TrustFeatures items={peptidesTrustFeatures} />

      {/* 3. What Are Peptides? (Reusable Dedicated Component) */}
      <PeptidesWhatAre />

      {/* 4. Our Peptides & Longevity Programs (Reusable Dedicated Component) */}
      <PeptidesProgramsGrid />

      {/* 5. Why Choose Solutions Health MD? (Reusable Dedicated Component) */}
      <PeptidesWhyChoose />

      {/* 6. How It Works: 4 Easy Steps (Reused Component) */}
      <HowItWorksSection
        config={defaultPeptidesHowItWorksConfig}
        variant="minimal"
      />

      {/* 7. More Than Peptides. A Healthier You. (Reusable Dedicated Component) */}
      <PeptidesLifestyleBanner />

      {/* 8. Real people. Real results. (Reused Component) */}
      <TestimonialsSection config={defaultPeptidesTestimonialsConfig} />

      {/* 9. Frequently Asked Questions & Health Insights (Reused Component) */}
      <FaqInsightsSection config={defaultPeptidesFaqConfig} />
    </div>
  );
}
