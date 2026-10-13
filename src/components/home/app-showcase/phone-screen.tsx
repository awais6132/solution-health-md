import React from 'react';
import Image from 'next/image';
import { AppMockupData } from '@/types/app-showcase';

interface PhoneScreenProps {
  data: AppMockupData;
  isBackPhone?: boolean;
  className?: string;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({
  data,
  isBackPhone = false,
  className = '',
}) => {
  return (
    <div
      className={`relative w-[215px] sm:w-[240px] lg:w-[252px] h-[435px] sm:h-[475px] lg:h-[498px] bg-white rounded-[38px] p-2 sm:p-2.5 shadow-[0_22px_55px_-10px_rgba(15,23,42,0.32)] border-[8px] sm:border-[9px] border-[#0F172A] flex flex-col overflow-hidden select-none ${className}`}
    >
      {/* Screen Inner Container - Pure crisp white canvas */}
      <div className="relative w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col p-3.5 sm:p-4 pt-4 sm:pt-5 text-left">
        {/* 1. App Header Logo */}
        <div className="flex items-center pb-2.5 sm:pb-3">
          <Image
            src="/assets/images/logo.png"
            alt="Solutions Health MD"
            width={120}
            height={38}
            className="h-5 sm:h-5.5 w-auto object-contain"
            priority
          />
        </div>

        {/* 2. User Greeting */}
        <div className="pb-3 text-left">
          <p className="text-[10px] text-slate-400 font-medium leading-none mb-1">
            Welcome back,
          </p>
          <h4 className="text-[15px] sm:text-[16px] font-bold text-[#0F172A] leading-tight tracking-tight">
            {data.userName}
          </h4>
        </div>

        {/* 3. Next Refill Dispatch Card */}
        <div className="bg-white rounded-[16px] p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100/90 mb-2.5 sm:mb-3 text-left">
          <div className="flex items-center justify-between text-[10px] sm:text-[10.5px] mb-1.5 font-bold">
            <span className="text-[#0F172A]">{data.refillTitle}</span>
            <span className="text-[#0284C7]">{data.refillDays}</span>
          </div>

          {/* Progress Bar with baby-blue track and bright blue fill */}
          <div className="w-full h-1.5 bg-[#D6EEFC] rounded-full overflow-hidden mb-2">
            <div className="w-[68%] h-full bg-[#0284C7] rounded-full" />
          </div>

          <p className="text-[9px] sm:text-[9.5px] text-slate-500 font-medium leading-tight">
            {data.refillMedication}
          </p>
        </div>

        {/* 4. Doctor Note Card - Soft light sky-blue background */}
        <div className="bg-[#EEF6FA] rounded-[16px] p-3 border border-[#DEECF4] mb-auto text-left">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-[9px] shrink-0 border border-[#BAE6FD]/60">
              MD
            </div>
            <div className="flex flex-col">
              <h5 className="text-[10px] sm:text-[10.5px] font-bold text-[#0F172A] leading-tight">
                {isBackPhone ? (
                  <>
                    Dr. Jensen approved<br />lab results
                  </>
                ) : (
                  <>
                    Dr. Jensen approved<br />lab results
                  </>
                )}
              </h5>
              <p className="text-[8.5px] sm:text-[9px] text-slate-500 italic mt-1 leading-snug">
                {data.doctorQuote}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Bottom Action Button */}
        <div className="pt-2 sm:pt-3 pb-0.5">
          <button
            type="button"
            className="w-full bg-[#10669D] hover:bg-[#0d5380] text-white py-2 sm:py-2.5 px-3 rounded-[12px] font-bold text-[10.5px] sm:text-[11px] shadow-sm tracking-tight transition-colors text-center"
          >
            {data.actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

