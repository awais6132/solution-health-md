import React from 'react';

export interface WomensHealthServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface WomensHealthServicesGridConfig {
  headline?: string;
  subheadline?: string;
  services: WomensHealthServiceItem[];
}

export interface WomensHealthServicesGridProps {
  config?: Partial<WomensHealthServicesGridConfig>;
  className?: string;
}
