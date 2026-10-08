export interface HeroBadgeConfig {
  text: string;
}

export interface HeroButtonConfig {
  label: string;
  href: string;
  variant?: 'primary' | 'outline' | 'secondary';
}

export interface HeroTrustItem {
  id: string;
  title: string;
  iconName: 'award' | 'shield' | 'pill' | 'video' | 'clock' | 'check-circle';
}

export interface HeroSectionConfig {
  badge: HeroBadgeConfig;
  headline: {
    primaryText: string;
    highlightText: string;
  };
  description: string;
  primaryCta: HeroButtonConfig;
  secondaryCta: HeroButtonConfig;
  bannerImage: {
    src: string;
    alt: string;
  };
  trustBar: {
    enabled: boolean;
    items: HeroTrustItem[];
  };
}
