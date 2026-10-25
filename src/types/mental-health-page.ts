export interface TruthGraceCardItem {
  id: string;
  title: string;
  description: string;
  iconName: 'bible' | 'guidance' | 'support' | 'growth';
}

export interface MentalHealthTruthGraceConfig {
  headline: string;
  description: string;
  cards: TruthGraceCardItem[];
}

export interface CounselingServiceCardItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface MentalHealthServicesGridConfig {
  headline: string;
  subheadline: string;
  services: CounselingServiceCardItem[];
}

export interface HopePillarItem {
  id: string;
  line1: string;
  line2?: string;
  iconName: 'spark' | 'heart' | 'relationships' | 'clarity' | 'resilience' | 'cross';
}

export interface MentalHealthHopeBannerConfig {
  headline: string;
  description: string;
  floatingScript: {
    line1: string;
    line2: string;
    line3: string;
  };
  backgroundImage: string;
  pillars: HopePillarItem[];
}
