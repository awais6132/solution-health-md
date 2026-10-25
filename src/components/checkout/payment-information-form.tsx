'use client';

import React from 'react';
import Link from 'next/link';
import { PaymentFormData } from '@/types/checkout';
import { ROUTES } from '@/constants/routes';

interface PaymentInformationFormProps {
  formData: PaymentFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onApplyCoupon: () => void;
  couponMessage?: { type: 'success' | 'error'; text: string } | null;
  errors?: Partial<Record<keyof PaymentFormData, string>>;
}

export function PaymentInformationForm({
  formData,
  onChange,
  onApplyCoupon,
  couponMessage,
  errors = {},
}: PaymentInformationFormProps) {
  // Format card number with spaces as user types
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    value = value.replace(/(\d{4})/g, '$1-').replace(/-$/, '');
    onChange({
      ...e,
      target: {
        ...e.target,
        name: 'cardNumber',
        value,
      },
    });
  };

  return (
    <div className="mt-9 space-y-6">
      <div>
        <h2 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight">
          Payment Information
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 mt-1 font-normal">
          Mussum ipsum cacilds, vidis litro abertis.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Name on card */}
        <div>
          <label htmlFor="nameOnCard" className="block text-xs font-medium text-slate-700 mb-1.5">
            Name on card
          </label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={onChange}
            placeholder="Name on card"
            className="w-full h-11 px-4 bg-[#F3F8FC] rounded-[8px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12587A]/20 transition-all border border-transparent focus:border-slate-300"
          />
          {errors.nameOnCard && (
            <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.nameOnCard}</p>
          )}
        </div>

        {/* Card number + Brand Logos */}
        <div>
          <label htmlFor="cardNumber" className="block text-xs font-medium text-slate-700 mb-1.5">
            Card number
          </label>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleCardNumberChange}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxLength={19}
              className="w-full sm:max-w-[310px] h-11 px-4 bg-[#F3F8FC] rounded-[8px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12587A]/20 transition-all border border-transparent focus:border-slate-300 tracking-wider"
            />

            {/* Payment Network Logos (PayPal, Mastercard, Visa, Amex) */}
            <div className="flex items-center gap-2 shrink-0">
              {/* PayPal */}
              <div className="h-6 px-1.5 bg-[#003087] rounded flex items-center justify-center text-white text-[10px] font-bold tracking-tighter">
                <span className="italic">Pay<span className="text-[#0079C1]">Pal</span></span>
              </div>

              {/* Mastercard */}
              <div className="h-6 w-9 bg-slate-900 rounded flex items-center justify-center relative overflow-hidden">
                <div className="w-3.5 h-3.5 rounded-full bg-[#EB001B] -mr-1" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#F79E1B]/90" />
              </div>

              {/* Visa */}
              <div className="h-6 px-1.5 bg-[#1A1F71] rounded flex items-center justify-center text-white text-[11px] font-black italic tracking-wider">
                VISA
              </div>

              {/* American Express */}
              <div className="h-6 px-1.5 bg-[#006FCF] rounded flex items-center justify-center text-white text-[9px] font-bold tracking-tight">
                AMEX
              </div>
            </div>
          </div>
          {errors.cardNumber && (
            <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.cardNumber}</p>
          )}
        </div>

        {/* Expiration date & CVV */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5">
            Expiration date
          </label>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 max-w-[460px]">
            <div>
              <input
                type="text"
                id="expMonth"
                name="expMonth"
                value={formData.expMonth}
                onChange={onChange}
                placeholder="MM"
                maxLength={2}
                className="w-full h-11 px-4 bg-[#F3F8FC] rounded-[8px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12587A]/20 text-center transition-all border border-transparent focus:border-slate-300"
              />
            </div>
            <div>
              <input
                type="text"
                id="expYear"
                name="expYear"
                value={formData.expYear}
                onChange={onChange}
                placeholder="YYYY"
                maxLength={4}
                className="w-full h-11 px-4 bg-[#F3F8FC] rounded-[8px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12587A]/20 text-center transition-all border border-transparent focus:border-slate-300"
              />
            </div>
            <div>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={onChange}
                placeholder="CVV"
                maxLength={4}
                className="w-full h-11 px-4 bg-[#F3F8FC] rounded-[8px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#12587A]/20 text-center transition-all border border-transparent focus:border-slate-300"
              />
            </div>
          </div>
          {(errors.expMonth || errors.expYear || errors.cvv) && (
            <p className="text-[11.5px] text-rose-500 mt-1 font-medium">
              Please enter valid expiry date and CVV
            </p>
          )}
        </div>

        {/* Coupon Code */}
        <div>
          <label htmlFor="couponCode" className="block text-xs font-medium text-slate-700 mb-1.5">
            Coupon Code
          </label>
          <div className="w-full max-w-[460px] h-11 px-3.5 bg-[#F3F8FC] rounded-[8px] flex items-center justify-between border border-transparent focus-within:border-slate-300 focus-within:ring-2 focus-within:ring-[#12587A]/20">
            <div className="flex items-center gap-2.5 flex-1 mr-2">
              <span className="text-[#0E5B82] shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </span>
              <input
                type="text"
                id="couponCode"
                name="couponCode"
                value={formData.couponCode}
                onChange={onChange}
                placeholder="Add Coupon Code"
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none uppercase"
              />
            </div>
            <button
              type="button"
              onClick={onApplyCoupon}
              className="text-xs sm:text-sm font-semibold text-[#0E5B82] hover:text-[#093D57] cursor-pointer px-2 py-1 active:scale-95 transition-all"
            >
              Apply
            </button>
          </div>
          {couponMessage && (
            <p
              className={`text-[11.5px] mt-1 font-medium ${
                couponMessage.type === 'success' ? 'text-emerald-600' : 'text-rose-500'
              }`}
            >
              {couponMessage.text}
            </p>
          )}
        </div>
      </div>

      {/* Cancellation policy */}
      <div className="pt-2">
        <h3 className="text-base font-bold text-slate-900 mb-2">
          Cancellation policy
        </h3>
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            name="acceptTerms"
            checked={formData.acceptTerms}
            onChange={(e) =>
              onChange({
                ...e,
                target: {
                  ...e.target,
                  name: 'acceptTerms',
                  value: String(e.target.checked),
                },
              })
            }
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded mt-0.5 border-2 flex items-center justify-center shrink-0 transition-colors ${
              formData.acceptTerms
                ? 'bg-[#12587A] border-[#12587A] text-white'
                : 'border-[#12587A] bg-white'
            }`}
          >
            {formData.acceptTerms && (
              <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )}
          </div>
          <span className="text-xs sm:text-[13px] text-slate-700 leading-normal">
            I accept{' '}
            <Link href={ROUTES.TERMS} className="text-[#3E9447] font-medium hover:underline">
              terms and conditions &privacy policy
            </Link>
          </span>
        </label>
        {errors.acceptTerms && (
          <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.acceptTerms}</p>
        )}
      </div>
    </div>
  );
}
