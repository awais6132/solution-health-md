export interface AppStoreBadge {
  id: 'apple' | 'google';
  label: string;
  subLabel: string;
  href: string;
}

export interface AppFeatureItem {
  id: string;
  text: string;
}

export interface AppMockupData {
  userName: string;
  refillTitle: string;
  refillDays: string;
  refillMedication: string;
  doctorTitle: string;
  doctorQuote: string;
  actionLabel: string;
}

export interface AppShowcaseConfig {
  headline: string;
  description: string;
  badges: AppStoreBadge[];
  mockup: AppMockupData;
  imageSrc?: string;
  features: AppFeatureItem[];
  tagline: {
    line1: string;
    line2: string;
  };
}

export interface AppShowcaseSectionProps {
  config?: Partial<AppShowcaseConfig>;
  className?: string;
}
