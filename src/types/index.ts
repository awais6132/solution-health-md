export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage?: string;
  links?: {
    twitter?: string;
    github?: string;
  };
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export * from './footer';
export * from './hero';
export * from './trust-features';
export * from './services';
export * from './testimonials';
export * from './faq-insights';


