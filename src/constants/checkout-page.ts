import { PaymentMethodOption, OrderSummaryConfig } from '@/types/checkout';

export const defaultPaymentMethods: PaymentMethodOption[] = [
  { id: 'credit-card', label: 'Credit/Debit Card' },
  { id: 'split-3', label: 'Split into 3 payments' },
  { id: 'split-4', label: '4 interest free payment' },
];

export const defaultOrderSummary: OrderSummaryConfig = {
  title: 'Order Summary',
  subtitle: 'Mussum ipsum cacilds, vidis litro abertis.',
  totalForItems: 268.64,
  estimatedShipping: 7.61,
  estimatedTax: 10.98,
  subTotal: 268.64,
  discount: 100.64,
  total: 168.00,
};

export const COUPON_DISCOUNTS: Record<string, number> = {
  HEALTH10: 25.00,
  SOLUTIONS: 50.00,
  WELCOME: 100.64,
  CARE2026: 35.00,
};
