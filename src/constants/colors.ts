/**
 * Solutions Health Brand Color Palette
 * Defined globally for Tailwind CSS and TypeScript components
 */
export const BRAND_COLORS = {
  lime: '#9CBF3C',
  blue: '#0E6C9B',
  amber: '#F9AC2C',
  green: '#4A9B44',
  white: '#FFFFFF',
} as const;

export const THEME_CONFIG = {
  primary: BRAND_COLORS.blue,
  secondary: BRAND_COLORS.green,
  accent: BRAND_COLORS.amber,
  highlight: BRAND_COLORS.lime,
  background: BRAND_COLORS.white,
} as const;
