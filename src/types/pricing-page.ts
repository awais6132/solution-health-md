export type BillingCycle = 'monthly' | 'one-time';

/* ─── Section 3: Clinical Programs & Formulations ─── */

export interface ProgramFeature {
  text: string;
}

export interface ClinicalProgramCard {
  id: string;
  categoryBadge: string;       // e.g. "COMPOUNDED GLP-1"
  qualityBadge?: string;       // e.g. "Doctor Recommended"
  qualityBadgeColor?: 'blue' | 'green' | 'orange' | 'purple';
  title: string;               // e.g. "Semaglutide + B12"
  description: string;
  monthlyPrice: number;
  oneTimePrice?: number;
  priceLabel?: string;         // e.g. "/mo per dose"
  deliveryBadge?: string;      // e.g. "FREE PHARMACY DELIVERY"
  features: string[];
  href: string;
  serviceCategory: string;     // maps to tab id
  recommended?: boolean;
}

export interface ClinicalProgramTab {
  id: string;
  label: string;
}

export interface ClinicalProgramsGridConfig {
  eyebrow?: string;
  headline: string;
  tabs: ClinicalProgramTab[];
  cards: ClinicalProgramCard[];
}

/* ─── Section 4: Membership Plans ─── */

export interface MembershipFeature {
  text: string;
}

export interface MembershipPlanCard {
  id: string;
  title: string;               // e.g. "3 Months Membership"
  description: string;
  features: string[];
  monthlyPrice: number;
  oneTimePrice?: number;
  priceNote: string;           // e.g. "3 months membership"
  href: string;
  highlighted?: boolean;       // middle card accent
}

export interface MembershipPlansConfig {
  eyebrow?: string;
  headline: string;
  plans: MembershipPlanCard[];
}
