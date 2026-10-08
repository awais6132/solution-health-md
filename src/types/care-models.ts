export interface CareModelItem {
  id: string;
  badge: {
    icon: 'zap' | 'refresh' | string;
    iconColor?: string;
    bgColor: string;
  };
  title: string;
  subtitle: string;
  features: string[];
  checkmarkColor?: string;
  cta: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary' | 'dark';
  };
  backgroundImage: string;
  bgPosition?: string;
  foregroundImage?: string;
  accentNote?: string;
}

export interface CareModelsSectionProps {
  items?: CareModelItem[];
  className?: string;
}
