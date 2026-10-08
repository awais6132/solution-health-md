import React from 'react';
import Image from 'next/image';
import { AppMockupData } from '@/types/app-showcase';

interface PhoneScreenProps {
  data: AppMockupData;
  className?: string;
}

export const PhoneScreen: React.FC<PhoneScreenProps> = ({ data, className = '' }) => {
  return (
    <div
      className={`relative w-[210px] sm:w-[235px] lg:w-[248px] h-[420px] sm:h-[460px] lg:h-[485px] bg-white rounded-[34px] p-2.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border-[6px] border-[#0F172A] flex flex-col overflow-hidden select-none ${className}`}
    >
      {/* Top Dynamic Island / Speaker Notch */}
      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#0F172A] rounded-full z-20" />

      {/* Screen Inner Container */}
      <div className="relative w-full h-full bg-[#FAFCFD] rounded-[26px] overflow-hidden flex flex-col p-4 pt-6 text-left">
        {/* 1. App Header (Logo) */}
        <div className="flex items-center gap-1.5 pb-3">
          <div className="w-5 h-5 relative shrink-0">
            <Image
              src="/logo.png"
              alt="Solutions Health MD"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <span className="text-[11px] font-bold text-[#10669D] tracking-tight">
            Solutions <span className="text-[#4B9B44]">Health MD</span>
          </span>
        </div>

        {/* 2. User Greeting */}
        <div className="pb-3.5">
          <p className="text-[10px] text-slate-400 font-medium leading-none mb-1">
            Welcome back,
          </p>
          <h4 className="text-[15px] font-bold text-[#0F172A] leading-tight tracking-tight">
            {data.userName}
          </h4>
        </div>

        {/* 3. Next Refill Dispatch Card */}
        <div className="bg-white rounded-[14px] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100/90 mb-3">
          <div className="flex items-center justify-between text-[10px] mb-1.5">
            <span className="font-bold text-[#0F172A]">{data.refillTitle}</span>
            <span className="font-bold text-[#10669D]">{data.refillDays}</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
            <div className="w-[65%] h-full bg-[#10669D] rounded-full" />
          </div>

          <p className="text-[9.5px] text-slate-500 font-medium leading-tight">
            {data.refillMedication}
          </p>
        </div>

        {/* 4. Doctor Note Card */}
        <div className="bg-white rounded-[14px] p-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100/90 mb-auto">
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-[9px] shrink-0">
              MD
            </div>
            <div className="flex flex-col">
              <h5 className="text-[10.5px] font-bold text-[#0F172A] leading-tight">
                {data.doctorTitle}
              </h5>
              <p className="text-[9px] text-slate-500 italic mt-1 leading-snug">
                {data.doctorQuote}
              </p>
            </div>
          </div>
        </div>

        {/* 5. Bottom Action Button */}
        <div className="pt-3 pb-1">
          <button className="w-full bg-[#10669D] hover:bg-[#0c4e78] text-white py-2.5 px-3 rounded-[12px] font-bold text-[11px] shadow-sm tracking-tight transition-colors">
            {data.actionLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
