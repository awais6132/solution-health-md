import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  href: string;
  /** Image URL or local asset path (e.g. '/assets/images/services/weight-loss.png') */
  imageSrc?: string;
  imageAlt?: string;
  /** Lucide fallback icon name */
  iconName?: string;
  /** Custom inline SVG component */
  iconSvg?: React.ReactNode;
  /** Custom SVG file path */
  iconSrc?: string;
  /** Icon color (e.g. 'text-blue-600') */
  iconColor?: string;
  /** Badge container background (defaults to 'bg-white') */
  badgeBg?: string;
}

export interface ServicesSectionConfig {
  headline: string;
  subheadline: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  services: ServiceItem[];
}
