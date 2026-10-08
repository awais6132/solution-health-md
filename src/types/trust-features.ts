import React from 'react';

export type TrustFeatureIconName =
  | 'shield'
  | 'security'
  | 'lock'
  | 'prescription'
  | 'pill'
  | 'video'
  | 'clock'
  | 'check';

export interface TrustFeatureItem {
  id: string;
  title: string;
  /** Lucide icon name fallback */
  iconName?: TrustFeatureIconName;
  /** Custom SVG file path (e.g. '/assets/icons/shield.svg') */
  iconSrc?: string;
  /** Custom inline React SVG element */
  iconSvg?: React.ReactNode;
  /** Circle badge background color class or hex (e.g. 'bg-blue-50' or 'bg-[#eff6ff]') */
  bgColor?: string;
  /** Icon color class (e.g. 'text-blue-600' or 'text-[#2563eb]') */
  iconColor?: string;
}

export interface TrustFeaturesConfig {
  items: TrustFeatureItem[];
  className?: string;
  containerClassName?: string;
}
