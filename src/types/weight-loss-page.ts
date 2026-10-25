import React from 'react';

export interface WeightLossProductItem {
  id: string;
  name: string;
  badge?: string;
  imageSrc: string;
  rating: number;
  reviewCount: number;
  features: string[];
  startingPrice: number;
  originalPrice?: number;
  deliveryBadge?: string;
  href: string;
}

export interface WeightLossProductsConfig {
  headline: string;
  subheadline: string;
  viewAllLink?: {
    label: string;
    href: string;
  };
  products: WeightLossProductItem[];
}

export interface WeightLossEligibilityCard {
  id: string;
  title: string;
  type: 'checklist' | 'description';
  items?: string[];
  description?: string;
}

export interface WeightLossEligibilityConfig {
  cards: WeightLossEligibilityCard[];
}
