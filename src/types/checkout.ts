export type PaymentMethodId = 'credit-card' | 'split-3' | 'split-4';

export interface PaymentMethodOption {
  id: PaymentMethodId;
  label: string;
}

export interface PaymentFormData {
  paymentMethod: PaymentMethodId;
  nameOnCard: string;
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvv: string;
  couponCode: string;
  acceptTerms: boolean;
}

export interface OrderSummaryConfig {
  title: string;
  subtitle: string;
  totalForItems: number;
  estimatedShipping: number;
  estimatedTax: number;
  subTotal: number;
  discount: number;
  total: number;
}
