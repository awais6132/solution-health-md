import { ServicesHeroConfig } from './services-page';
import { TrustFeatureItem } from './trust-features';
import { HowItWorksSectionConfig } from './how-it-works';
import { TestimonialsConfig } from './testimonials';
import { FaqInsightsConfig } from './faq-insights';

export interface PrimaryCareApproachItem {
  id: string;
  title: string;
  description: string;
  iconName?: 'clock' | 'user' | 'target' | 'heart' | 'sparkles' | 'stethoscope';
}

export interface PrimaryCareApproachConfig {
  headline: string;
  description: string;
  items: PrimaryCareApproachItem[];
}

export interface PrimaryCarePricingTier {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  period: string;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  isPopular?: boolean;
  badge?: string;
}

export interface PrimaryCarePricingConfig {
  headline: string;
  subheadline: string;
  tiers: PrimaryCarePricingTier[];
}

export interface PrimaryCareIncludedFeature {
  id: string;
  title: string;
  iconName?: 'calendar' | 'shield' | 'pill' | 'activity' | 'clipboard' | 'message' | 'video' | 'flask';
}

export interface PrimaryCareIncludedConfig {
  headline: string;
  subheadline: string;
  features: PrimaryCareIncludedFeature[];
}

export interface PrimaryCarePageData {
  hero: ServicesHeroConfig;
  trustFeatures: TrustFeatureItem[];
  approach: PrimaryCareApproachConfig;
  pricing: PrimaryCarePricingConfig;
  included: PrimaryCareIncludedConfig;
  howItWorks: HowItWorksSectionConfig;
  testimonials: TestimonialsConfig;
  faqInsights: FaqInsightsConfig;
}
