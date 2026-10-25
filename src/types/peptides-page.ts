import React from 'react';

/**
 * Section 3: "What Are Peptides?" types
 */
export interface PeptideHighlightCardItem {
  id: string;
  title: string;
  subtitle: string;
  subtitleLine2?: string;
  iconName?: 'lightning' | 'grid' | 'lightbulb' | 'plus' | 'pulse' | string;
  renderIcon?: () => React.ReactNode;
}

export interface PeptidesWhatAreConfig {
  title: string;
  description: string;
  items: PeptideHighlightCardItem[];
}

/**
 * Section 4: "Our Peptides & Longevity Programs" types
 */
export interface PeptideProgramCardItem {
  id: string;
  title: string | React.ReactNode;
  subtitle?: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  imageSrc: string;
  imageAlt?: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface PeptidesProgramsGridConfig {
  headline: string;
  subheadline: string;
  bgColor?: string;
  defaultCtaText?: string;
  programs: PeptideProgramCardItem[];
}

/**
 * Section 5: "Why Choose Solutions Health MD?" types
 */
export interface PeptidesWhyChooseItem {
  id: string;
  title: string;
  subtitle: string;
  iconName?: 'doctor' | 'clipboard' | 'chart' | 'shield' | 'home' | 'heart' | string;
  renderIcon?: () => React.ReactNode;
}

export interface PeptidesWhyChooseConfig {
  headline: string;
  subheadline: string;
  items: PeptidesWhyChooseItem[];
}

/**
 * Section 7: "More Than Peptides. A Healthier You." types
 */
export interface PeptidesLifestylePillarItem {
  id: string;
  line1: string;
  line2: string;
  iconName?: 'lightning' | 'recovery' | 'lightbulb' | 'moon' | 'heart' | 'person' | 'sparkles' | string;
  renderIcon?: () => React.ReactNode;
}

export interface PeptidesLifestyleBannerConfig {
  headline: string;
  subheadline: string;
  imageSrc?: string;
  imageAlt?: string;
  floatingScript?: string;
  scriptColor?: string;
  pillars: PeptidesLifestylePillarItem[];
}



