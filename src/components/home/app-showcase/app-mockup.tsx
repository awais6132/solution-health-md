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

export const AppMockup: React.FC<AppMockupProps> = ({
  data,
  imageSrc = '/assets/images/app-mockup.png',
  className = '',
}) => {
  const [imageError, setImageError] = React.useState(false);

  // If a valid imageSrc is explicitly provided and has not errored, render it
  if (imageSrc && !imageError) {
    return (
      <div className={`relative flex items-center justify-center w-full select-none ${className}`}>
        <div className="relative w-full aspect-[450/484] min-h-[440px] sm:min-h-[480px] lg:min-h-[510px]">
          <Image
            src={imageSrc}
            alt="Solutions Health MD Patient Portal App"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            priority
            quality={100}
            onError={() => setImageError(true)}
          />
        </div>
      </div>
    );
  }

  // Pixel-perfect live coded 3D phone showcase matching the design screenshot
  return (
    <div
      className={`relative flex items-center justify-center min-h-[510px] sm:min-h-[550px] lg:min-h-[580px] w-full select-none pt-4 sm:pt-6 ${className}`}
    >
      {/* 1. Large Mint Green Soft Circular Backdrop - prominently visible on Top, Left, and Right */}
      <div
        className="absolute left-[47%] -translate-x-1/2 top-[46%] -translate-y-1/2 w-[380px] sm:w-[440px] lg:w-[485px] h-[380px] sm:h-[440px] lg:h-[485px] rounded-full bg-[#A3D7A7] -z-0 pointer-events-none transition-transform duration-700 hover:scale-105"
        style={{
          boxShadow: 'inset 0 0 45px rgba(255, 255, 255, 0.28)',
        }}
      />

      {/* 2. Secondary Overlapping Back Phone (Higher up, tilted clockwise at ~13deg) */}
      <div className="absolute left-[44%] sm:left-[45%] lg:left-[46%] top-2 sm:top-3 lg:top-4 z-10 scale-[0.92] sm:scale-[0.94] rotate-[13deg] transition-all duration-500 hover:rotate-[14.5deg] pointer-events-none drop-shadow-xl">
        <PhoneScreen data={data} isBackPhone />
      </div>

      {/* 3. Primary Foreground Phone (Shifted further left and lower down, subtle -3.5deg tilt matching reference design) */}
      <div className="relative left-[-38px] sm:left-[-46px] lg:left-[-52px] top-8 sm:top-10 lg:top-12 z-20 scale-[0.96] sm:scale-[0.98] lg:scale-100 rotate-[-3.5deg] transition-all duration-500 hover:rotate-[-2deg] hover:scale-[1.02] drop-shadow-2xl">
        <PhoneScreen data={data} />
      </div>
    </div>
  );
};

