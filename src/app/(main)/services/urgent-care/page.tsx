import React from 'react';
import type { Metadata } from 'next';
import { ServicesHero } from '@/components/services';
import {
  HowItWorksSection,
  TestimonialsSection,
  FaqInsightsSection,
} from '@/components/home';
import {
  defaultUrgentCareHeroConfig,
  defaultUrgentCarePricingTabsConfig,
  defaultConditionsWeTreatConfig,
  defaultQualityCareScheduleConfig,
  defaultUrgentCareHowItWorksConfig,
  defaultCommonPrescriptionsConfig,
  defaultUrgentCareTriageConfig,
  defaultUrgentCareTestimonialsConfig,
  defaultUrgentCareFaqInsightsConfig,
} from '@/constants/urgent-care-page';
import {
  UrgentCarePricingTabs,
  ConditionsWeTreatGrid,
  QualityCareSchedule,
  CommonPrescriptionsSection,
  UrgentCareTriageGuidelines,
} from '@/components/urgent-care';

export const metadata: Metadata = {
  title: 'Urgent Care | Fast, Convenient Online Healthcare | Solutions Health MD',
  description:
    'Skip the waiting room. Consult online with a US-licensed provider for common illnesses, acute symptoms, and non-emergency medical conditions.',
};

export default function UrgentCarePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner (Already Built: Reuses ServicesHero Component) */}
      <ServicesHero config={defaultUrgentCareHeroConfig} />

      {/* 2. Urgent Care Tabbed / Filtered Conditions & Pricing Grid (New Component) */}
      <UrgentCarePricingTabs config={defaultUrgentCarePricingTabsConfig} />

      {/* 3. Conditions We Treat (12 Icon Badges Grid) */}
      <ConditionsWeTreatGrid config={defaultConditionsWeTreatConfig} />

      {/* 4. Quality Care, On your Schedule (Split Doctor Banner) */}
      <QualityCareSchedule config={defaultQualityCareScheduleConfig} />

      {/* 5. How It Works (Minimal Variant matching Figma design) */}
      <HowItWorksSection
        config={defaultUrgentCareHowItWorksConfig}
        variant="minimal"
      />

      {/* 6. Common Prescriptions If Appropriate (7 Pill Badges) */}
      <CommonPrescriptionsSection config={defaultCommonPrescriptionsConfig} />

      {/* 7. When to Use Urgent Care vs 911 ER (Comparison Cards) */}
      <UrgentCareTriageGuidelines config={defaultUrgentCareTriageConfig} />

      {/* 8. Real People. Real Results (Already Built: Reuses TestimonialsSection Component) */}
      <TestimonialsSection config={defaultUrgentCareTestimonialsConfig} />

      {/* 9. Frequently Asked Questions & Health Insights (Already Built: Reuses FaqInsightsSection Component) */}
      <FaqInsightsSection config={defaultUrgentCareFaqInsightsConfig} />
    </div>
  );
}
