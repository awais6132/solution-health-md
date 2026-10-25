'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PaymentMethodsSelector } from './payment-methods-selector';
import { PaymentInformationForm } from './payment-information-form';
import { OrderSummaryCard } from './order-summary-card';
import {
  PaymentFormData,
  PaymentMethodId,
  OrderSummaryConfig,
} from '@/types/checkout';
import {
  defaultPaymentMethods,
  defaultOrderSummary,
  COUPON_DISCOUNTS,
} from '@/constants/checkout-page';
import { ROUTES } from '@/constants/routes';

export function CheckoutFlow() {
  const router = useRouter();

  // Selected payment method
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethodId>('credit-card');

  // Payment form state
  const [formData, setFormData] = useState<PaymentFormData>({
    paymentMethod: 'credit-card',
    nameOnCard: 'Arslan Ahmed',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    couponCode: '',
    acceptTerms: true,
  });

  // Dynamic order summary state
  const [summary, setSummary] = useState<OrderSummaryConfig>(defaultOrderSummary);
  const [couponMessage, setCouponMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const [errors, setErrors] = useState<Partial<Record<keyof PaymentFormData, string>>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaidSuccess, setIsPaidSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'acceptTerms') {
      setFormData((prev) => ({ ...prev, acceptTerms: value === 'true' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name as keyof PaymentFormData]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof PaymentFormData];
        return next;
      });
    }
  };

  const handleApplyCoupon = () => {
    const code = formData.couponCode.trim().toUpperCase();
    if (!code) {
      setCouponMessage({ type: 'error', text: 'Please enter a coupon code' });
      return;
    }

    const discountAmount = COUPON_DISCOUNTS[code];
    if (discountAmount !== undefined) {
      const newDiscount = discountAmount;
      const newTotal = Math.max(0, summary.subTotal - newDiscount);
      setSummary((prev) => ({
        ...prev,
        discount: newDiscount,
        total: newTotal,
      }));
      setCouponMessage({
        type: 'success',
        text: `Coupon applied: saved $${newDiscount.toFixed(2)}!`,
      });
    } else {
      setCouponMessage({
        type: 'error',
        text: 'Invalid code. Try "WELCOME" or "SOLUTIONS"',
      });
    }
  };

  const validatePayment = (): boolean => {
    const newErrors: Partial<Record<keyof PaymentFormData, string>> = {};

    if (!formData.nameOnCard.trim()) {
      newErrors.nameOnCard = 'Name on card is required';
    }
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\D/g, '').length < 15) {
      newErrors.cardNumber = 'Please enter a valid card number';
    }
    if (!formData.expMonth.trim()) {
      newErrors.expMonth = 'Required';
    }
    if (!formData.expYear.trim()) {
      newErrors.expYear = 'Required';
    }
    if (!formData.cvv.trim() || formData.cvv.length < 3) {
      newErrors.cvv = 'Required';
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the cancellation policy and terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmPay = async () => {
    if (!validatePayment()) {
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsProcessing(false);
    setIsPaidSuccess(true);
  };

  return (
    <div className="w-full bg-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1140px] mx-auto">
        {/* Main 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Payment Method & Information */}
          <div className="lg:col-span-7">
            {/* Header with Back Arrow */}
            <div className="flex items-center gap-3.5 mb-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                aria-label="Go back"
              >
                <svg className="w-5 h-5 stroke-[2.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight leading-none">
                  Payment Method
                </h1>
                <p className="text-xs sm:text-[13px] text-slate-500 mt-1.5 font-normal">
                  Mussum ipsum cacilds, vidis litro abertis.
                </p>
              </div>
            </div>

            {/* Payment Method Radio Options */}
            <PaymentMethodsSelector
              methods={defaultPaymentMethods}
              selectedMethod={selectedMethod}
              onSelect={setSelectedMethod}
            />

            {/* Payment Information Form */}
            <PaymentInformationForm
              formData={formData}
              onChange={handleInputChange}
              onApplyCoupon={handleApplyCoupon}
              couponMessage={couponMessage}
              errors={errors}
            />
          </div>

          {/* Right Column: Order Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <OrderSummaryCard
              summary={summary}
              onConfirmPay={handleConfirmPay}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>

      {/* Payment Success Confirmation Modal */}
      {isPaidSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center animate-in zoom-in-95 duration-200">
            {/* Green Check Circle */}
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Payment Successful!
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Your consultation order has been confirmed. A receipt and consultation instructions have been sent to your email.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 text-xs sm:text-sm text-slate-700 space-y-1.5 mb-6 text-left border border-slate-100">
              <div className="flex justify-between">
                <span className="font-medium text-slate-600">Cardholder:</span>
                <span className="font-semibold text-slate-900">{formData.nameOnCard}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-600">Amount Paid:</span>
                <span className="font-semibold text-[#3E9447]">${summary.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-slate-600">Status:</span>
                <span className="font-semibold text-emerald-600">Confirmed</span>
              </div>
            </div>

            <Link
              href={ROUTES.HOME}
              className="w-full py-3 rounded-lg btn-animated-gradient-success text-white font-semibold text-sm flex items-center justify-center cursor-pointer active:scale-[0.98]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
