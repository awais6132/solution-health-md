'use client';

import React from 'react';
import Image from 'next/image';
import { AppMockupData } from '@/types/app-showcase';
import { PhoneScreen } from './phone-screen';

interface AppMockupProps {
  data: AppMockupData;
  imageSrc?: string;
  className?: string;
}

export const AppMockup: React.FC<AppMockupProps> = ({ data, imageSrc = '/assets/images/app-mockup.png', className = '' }) => {
  const [imageError, setImageError] = React.useState(false);

  // If the exported image exists in public/assets/images/, render it directly
  if (imageSrc && !imageError) {
    return (
      <div className={`relative flex items-center justify-center w-full max-w-[390px] sm:max-w-[440px] mx-auto select-none ${className}`}>
        <div className="relative w-full h-[440px] sm:h-[490px] lg:h-[510px]">
          <Image
            src={imageSrc}
            alt="Solutions Health MD Patient Portal App"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            className="object-contain"
            priority
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    );
  }

  // Fallback to high-fidelity live coded mockup
  return (
    <div className={`relative flex items-center justify-center min-h-[440px] sm:min-h-[480px] w-full max-w-[340px] sm:max-w-[380px] mx-auto py-2 select-none ${className}`}>
      {/* 1. Large Mint Green Soft Circular Backdrop */}
      <div className="absolute w-[260px] sm:w-[310px] lg:w-[340px] h-[260px] sm:h-[310px] lg:h-[340px] rounded-full bg-[#BFE0CB]/75 -z-0" />

      {/* 2. Secondary Overlapping Back Phone (Tilted to the right) */}
      <div className="absolute left-[54%] -translate-x-1/2 top-3 sm:top-5 z-10 opacity-85 scale-[0.88] rotate-[8deg] transition-transform duration-500 hover:rotate-[10deg] pointer-events-none">
        <PhoneScreen data={data} />
      </div>

      {/* 3. Primary Foreground Phone (Tilted slightly to the left) */}
      <div className="relative left-[42%] -translate-x-1/2 top-0 z-20 scale-[0.94] rotate-[-4deg] transition-transform duration-500 hover:rotate-[-2deg] hover:scale-[0.98]">
        <PhoneScreen data={data} />
      </div>
    </div>
  );
};
