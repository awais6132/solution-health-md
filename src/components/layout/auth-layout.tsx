import React from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto bg-[rgba(75,155,68,1)] flex items-center justify-center custom-scrollbar">
      {/* 1. Full-Bleed Doctor Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/assets/images/auth-bg.jpg"
          alt="Healthcare doctor background"
          fill
          priority
          quality={100}
          className="object-cover object-[65%_35%] lg:object-[68%_35%] xl:object-[70%_35%]"
        />

        {/* Seamless Rich Green Left Gradient Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(90deg, rgba(75, 155, 68, 1) 0%, rgba(75, 155, 68, 0.96) 22%, rgba(75, 155, 68, 0.72) 42%, rgba(75, 155, 68, 0.20) 62%, transparent 78%)',
          }}
        />
      </div>

      {/* 2. Content Container: Form stays positioned on the left side across all screens */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center lg:justify-start px-4 py-6 sm:py-8 lg:py-8 sm:px-8 lg:px-0 lg:pl-[4vw] xl:pl-[5vw] 2xl:pl-[6vw]">
        {children}
      </div>
    </div>
  );
}
