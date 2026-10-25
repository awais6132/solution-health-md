'use client';

import React from 'react';
import { OrderSummaryConfig } from '@/types/checkout';

interface OrderSummaryCardProps {
  summary: OrderSummaryConfig;
  onConfirmPay: () => void;
  isProcessing?: boolean;
}

export function OrderSummaryCard({
  summary,
  onConfirmPay,
  isProcessing = false,
}: OrderSummaryCardProps) {
  const formatCurrency = (val: number) => `$${val.toFixed(2)}`;

  return (
    <div className="w-full bg-[#F3F8FC] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight">
          {summary.title}
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-500 mt-1 mb-6 font-normal">
          {summary.subtitle}
        </p>

        {/* Pricing Rows */}
        <div className="space-y-3.5 text-sm">
          {/* Total For Items */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-slate-700">Total For Items</span>
            <span className="font-semibold text-[#3E9447]">{formatCurrency(summary.totalForItems)}</span>
          </div>

          {/* Estimated Shipping */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-slate-700">Estimated Shipping</span>
            <span className="font-semibold text-[#3E9447]">{formatCurrency(summary.estimatedShipping)}</span>
          </div>

          {/* Estimated Tax */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-slate-700">Estimated Tax</span>
            <span className="font-semibold text-[#3E9447]">{formatCurrency(summary.estimatedTax)}</span>
          </div>

          {/* Sub Total */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-slate-700">Sub Total</span>
            <span className="font-semibold text-[#3E9447]">{formatCurrency(summary.subTotal)}</span>
          </div>

          {/* Discount */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-200">
            <span className="text-slate-700">Discount</span>
            <span className="font-semibold text-[#3E9447]">
              {summary.discount > 0 ? `-${formatCurrency(summary.discount)}` : '$0.00'}
            </span>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 pt-1">
            <span className="text-slate-900 font-bold text-base">Total</span>
            <span className="font-bold text-base text-[#3E9447]">{formatCurrency(summary.total)}</span>
          </div>
        </div>
      </div>

      {/* Confirm & Pay Button */}
      <div className="mt-8">
        <button
          type="button"
          onClick={onConfirmPay}
          disabled={isProcessing}
          className="w-full py-3.5 rounded-[8px] btn-animated-gradient-success disabled:opacity-50 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer"
        >
          {isProcessing ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Processing Payment...
            </span>
          ) : (
            'Confirm & Pay'
          )}
        </button>
      </div>
    </div>
  );
}
