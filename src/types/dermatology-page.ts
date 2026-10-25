import { ServicesHeroConfig } from './services-page';
import { TrustFeatureItem } from './trust-features';
import { HowItWorksSectionConfig } from './how-it-works';
import { WholePersonCareConfig } from './whole-person-care';
import { TestimonialsConfig } from './testimonials';
import { FaqInsightsConfig } from './faq-insights';

export interface DermatologyConditionItem {
  id: string;
  name: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export interface DermatologyExperienceBadge {
  id: string;
  title: string;
  iconName:
    | 'evaluation'
    | 'customized'
    | 'appointment'
    | 'support'
    | 'convenient'
    | 'heart'
    | 'flask'
    | 'chat'
    | 'lock';
}

export interface DermatologyExperienceConfig {
  leftCard: {
    headline: string;
    subheadline: string;
    imageSrc: string;
    imageAlt: string;
  };
  rightCard: {
    title: string;
    badges: DermatologyExperienceBadge[];
  };
}

export interface DermatologyPageConfig {
  hero: ServicesHeroConfig;
  trustFeatures: TrustFeatureItem[];
  conditions: DermatologyConditionItem[];
  experience: DermatologyExperienceConfig;
  howItWorks: HowItWorksSectionConfig;
  wholePerson: WholePersonCareConfig;
  testimonials: TestimonialsConfig;
  faqInsights: FaqInsightsConfig;
}
