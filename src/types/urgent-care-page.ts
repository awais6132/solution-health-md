import React from 'react';

/**
 * Section 2: Tabbed Urgent Care Conditions & Pricing Types
 */
export interface UrgentCareConditionItem {
  id: string;
  name: string;
  priceRange: string;
  category: string;
  href?: string;
}

export interface UrgentCareCategoryTab {
  id: string;
  label: string;
}

export interface UrgentCarePricingTabsConfig {
  eyebrow?: string;
  headline: string;
  tabs: UrgentCareCategoryTab[];
  conditions: UrgentCareConditionItem[];
}

export interface UrgentCarePricingTabsProps {
  config?: Partial<UrgentCarePricingTabsConfig>;
  className?: string;
}

/**
 * Section 3: Conditions We Treat (12 Icon Badges in 6 Columns) Types
 */
export interface ConditionBadgeItem {
  id: string;
  title: string;
  iconName:
    | 'wind'
    | 'thermometer'
    | 'eye'
    | 'activity'
    | 'sparkles'
    | 'droplet'
    | 'zap'
    | 'shield-alert'
    | 'heart'
    | 'pill'
    | 'smile'
    | 'eye-off';
  colorTheme?: 'green' | 'blue' | 'amber' | 'teal' | 'purple' | 'rose';
  href?: string;
}

export interface ConditionsWeTreatConfig {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  conditions: ConditionBadgeItem[];
}

export interface ConditionsWeTreatGridProps {
  config?: Partial<ConditionsWeTreatConfig>;
  className?: string;
}

/**
 * Section 4: Quality Care, On your Schedule Types
 */
export interface QualityCareFeatureItem {
  id: string;
  title: string;
  iconName: 'clock' | 'calendar' | 'shield' | 'dollar';
  colorTheme?: 'blue' | 'purple' | 'teal' | 'green';
}

export interface QualityCareScheduleConfig {
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  features: QualityCareFeatureItem[];
}

export interface QualityCareScheduleProps {
  config?: Partial<QualityCareScheduleConfig>;
  className?: string;
}

/**
 * Section 6: Common Prescriptions (If Appropriate) Types
 */
export interface PrescriptionBadgeItem {
  id: string;
  title: string;
  iconName:
    | 'pill'
    | 'wind'
    | 'activity'
    | 'inhaler'
    | 'droplet'
    | 'sparkles'
    | 'thermometer';
  colorTheme?: 'green' | 'blue' | 'teal' | 'purple' | 'amber' | 'rose' | 'cyan';
  href?: string;
}

export interface CommonPrescriptionsConfig {
  headline: string;
  subheadline: string;
  prescriptions: PrescriptionBadgeItem[];
}

export interface CommonPrescriptionsSectionProps {
  config?: Partial<CommonPrescriptionsConfig>;
  className?: string;
}

/**
 * Section 7: When to Use Urgent Care vs 911 ER Types
 */
export interface TriageCardItem {
  id: string;
  title: string;
  type: 'urgent-care' | 'emergency';
  items: string[];
}

export interface UrgentCareTriageConfig {
  cards: TriageCardItem[];
}

export interface UrgentCareTriageGuidelinesProps {
  config?: Partial<UrgentCareTriageConfig>;
  className?: string;
}




