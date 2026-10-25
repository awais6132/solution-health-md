import React from 'react';
import type { Metadata } from 'next';
import { CheckoutFlow } from '@/components/checkout';

export const metadata: Metadata = {
  title: 'Payment Method & Order Summary | Solutions Health MD',
  description:
    'Secure payment checkout for your Solutions Health MD healthcare consultation and intake assessment.',
};

export default function CheckoutPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <CheckoutFlow />
    </div>
  );
}
