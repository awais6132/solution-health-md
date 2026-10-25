'use client';

import React from 'react';
import { PaymentMethodId, PaymentMethodOption } from '@/types/checkout';

interface PaymentMethodsSelectorProps {
  methods: PaymentMethodOption[];
  selectedMethod: PaymentMethodId;
  onSelect: (id: PaymentMethodId) => void;
}

export function PaymentMethodsSelector({
  methods,
  selectedMethod,
  onSelect,
}: PaymentMethodsSelectorProps) {
  return (
    <div className="space-y-3.5">
      {methods.map((method) => {
        const isSelected = selectedMethod === method.id;

        return (
          <div
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`w-full py-3.5 px-4 sm:px-5 bg-[#F3F8FC] rounded-[8px] flex items-center gap-3.5 cursor-pointer transition-all duration-150 border ${
              isSelected ? 'border-[#E05353]/30 shadow-xs' : 'border-transparent hover:border-slate-200'
            }`}
          >
            {/* Custom Radio Button */}
            <div className="w-4 h-4 rounded-full border-2 border-[#E05353] flex items-center justify-center shrink-0">
              {isSelected && <div className="w-2 h-2 rounded-full bg-[#E05353]" />}
            </div>

            <span className="text-sm font-medium text-slate-800">
              {method.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
