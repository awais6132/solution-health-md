export type PillarIconType = 'scale' | 'zap' | 'dna' | 'lightbulb' | 'shield' | 'sparkles';

export interface WellnessPillarItem {
  id: string;
  title: string;
  icon: PillarIconType;
  iconColor: string;
  href?: string;
}

export interface WholePersonCareConfig {
  headline: {
    line1: string;
    line2: string;
  };
  description: string;
  tagline: {
    line1: string;
    line2: string;
  };
  backgroundImage: string;
  pillars: WellnessPillarItem[];
}

export interface WholePersonCareSectionProps {
  config?: Partial<WholePersonCareConfig>;
  className?: string;
}
