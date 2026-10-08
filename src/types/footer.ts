
export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
}

export interface FooterNavSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLinkItem {
  name: string;
  href: string;
  iconName: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube';
}

export interface PreFooterCtaConfig {
  enabled?: boolean;
  title: string;
  description: string;
  backgroundImage?: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
}

export interface NewsletterConfig {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  disclaimer?: string;
}

export interface FooterConfig {
  preFooter: PreFooterCtaConfig;
  brand: {
    name: string;
    logoSrc: string;
    description?: string;
    socials: SocialLinkItem[];
  };
  navigationSections: FooterNavSection[];
  newsletter: NewsletterConfig;
  bottomBar: {
    copyrightOwner: string;
    startYear?: number;
    tagline?: string;
    legalLinks: FooterLink[];
  };
}
