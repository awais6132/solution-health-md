import {
  HeroSection,
  TrustFeatures,
  CareServicesSection,
  CareModelsSection,
  WholePersonCareSection,
  HowItWorksSection,
  FaithBasedCareSection,
  AppShowcaseSection,
  TestimonialsSection,
  FaqInsightsSection,
} from '@/components/home';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust & Medical Highlights Bar */}
      <TrustFeatures />

      {/* 3. What Can We Help You With Today (Care Services Grid) */}
      <CareServicesSection />

      {/* 4. On-Demand vs Membership & Ongoing Care Models */}
      <CareModelsSection />

      {/* 5. How It Works 4-Step Process Section */}
      <HowItWorksSection />

      {/* 6. Faith-Based Care Section */}
      <FaithBasedCareSection />

      {/* 7. Patient Portal & Mobile App Showcase Section ("Your health, in your hands.") */}
      <AppShowcaseSection />

      {/* 8. Whole-Person Care & Wellness Pillars Section ("Care designed around the whole you.") */}
      <WholePersonCareSection />

      {/* 9. Patient Testimonials & Results Section ("Real people. Real results.") */}
      <TestimonialsSection />

      {/* 10. Frequently Asked Questions & Health Insights Section */}
      <FaqInsightsSection />
    </div>
  );
}
