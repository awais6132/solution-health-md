import React from 'react';

export interface ServicesHeroConfig {
  badge?: string;
  title: React.ReactNode | string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageSrc: string;
  imageAlt?: string;
  floatingTagline?: React.ReactNode | string;
  imagePosition?: string;
  imageAlign?: 'full' | 'right';
  overlayGradient?: string;
  isDermatology?: boolean;
  checklistItems?: string[];
}

export interface ServiceDetailItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
}

export interface ServicesGridConfig {
  headline: string;
  subheadline: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  services: ServiceDetailItem[];
}

export interface ProcessStepItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  iconName: 'molecule' | 'form' | 'delivery' | 'laptop' | 'calendar' | 'shield-check';
}

export interface SimpleProcessConfig {
  badge?: string;
  headline: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  backgroundImage: string;
  steps: ProcessStepItem[];
}
