export interface FaithCardAction {
  label: string;
  href: string;
  variant: 'secondary' | 'outline';
}

export interface FaithCardItem {
  id: string;
  icon: 'book' | 'heart' | string;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  subtitleColor?: string;
  description: string;
  actions: FaithCardAction[];
}

export interface FaithBasedCareConfig {
  eyebrow: string;
  headline: {
    part1: string;
    part2: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundImage: string;
  cards: FaithCardItem[];
}

export interface FaithBasedCareSectionProps {
  config?: Partial<FaithBasedCareConfig>;
  className?: string;
}
