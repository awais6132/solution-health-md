'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const PageLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Smooth, realistic medical tech progress ramp (0% -> 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic easing ramp
        const step = prev < 50 ? 5 : prev < 85 ? 4 : 3;
        return Math.min(100, prev + step);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Graceful fade-out once 100% reached
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 300);

      const removeTimer = setTimeout(() => {
        setIsRemoved(true);
      }, 850);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (isRemoved) return null;

  return (
    <div
      aria-label="Loading Solutions Health MD"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-500 ease-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* 1. Ambient Background Multi-Layer Lighting */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#4B9B44]/15 via-[#0F6396]/15 to-[#8DB92E]/10 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full bg-[#0F6396]/8 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full bg-[#4B9B44]/8 blur-2xl pointer-events-none" />

      {/* 2. Central High-Tech Glassmorphic Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 sm:p-10 rounded-[32px] bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_24px_60px_-15px_rgba(15,99,150,0.14)] max-w-[90vw] sm:max-w-[420px] w-full text-center">
        
        {/* Animated Brand Emblem with Orbiting Halo */}
        <div className="relative mb-6 flex items-center justify-center">
          {/* Outer Rotating Conic Gradient Ring */}
          <div className="absolute -inset-3.5 rounded-full bg-gradient-to-r from-[#4B9B44] via-[#0F6396] to-[#8DB92E] opacity-75 blur-xs animate-[spin_4s_linear_infinite]" />
          
          {/* Inner Pulsing Glass Disc */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100/90 overflow-hidden">
            {/* Center Logo Icon */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-500">
              <Image
                src="/assets/images/logo.png"
                alt="Solutions Health MD"
                width={160}
                height={60}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Brand Name Title */}
        <div className="flex flex-col items-center gap-1 mb-5">
          <h2
            className="text-lg sm:text-xl font-extrabold text-[#0A192F] tracking-tight flex items-center gap-1.5"
            style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
          >
            <span>Solutions Health MD</span>
            <Sparkles className="w-4 h-4 text-[#4B9B44] animate-pulse" />
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Whole-Person Telehealth & Medicine
          </p>
        </div>

        {/* 3. Live Animated ECG Heartbeat Pulse Line */}
        <div className="w-full max-w-[240px] h-[26px] mb-4 relative overflow-hidden flex items-center justify-center">
          <svg
            className="w-full h-full stroke-[#4B9B44]"
            viewBox="0 0 240 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 15 L 70 15 L 80 15 L 86 5 L 94 25 L 102 2 L 110 28 L 118 10 L 126 15 L 240 15"
              stroke="url(#ecgGradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ecg-pulse-line"
            />
            <defs>
              <linearGradient id="ecgGradient" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#4B9B44" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#4B9B44" />
                <stop offset="80%" stopColor="#0F6396" />
                <stop offset="100%" stopColor="#0F6396" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 4. Active Progress Bar & Numerical Percentage */}
        <div className="w-full flex flex-col gap-2 mb-4">
          <div className="w-full h-[6px] bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#4B9B44] via-[#8DB92E] to-[#0F6396] transition-all duration-100 ease-out relative shadow-[0_0_12px_rgba(75,155,68,0.5)]"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing Head Point */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold px-0.5">
            <span className="tracking-wider uppercase text-[10px] text-slate-400">
              {progress < 40 ? 'Connecting Securely...' : progress < 80 ? 'Preparing Your Care...' : 'Ready!'}
            </span>
            <span className="text-slate-700 font-mono font-bold text-xs">
              {progress}%
            </span>
          </div>
        </div>

        {/* 5. Trust Footnote Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] border border-[#A7F3D0]/60 text-[#065F46] text-[10px] sm:text-[11px] font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-[#059669] shrink-0" />
          <span>HIPAA Compliant • 50 States Telehealth</span>
        </div>

      </div>
    </div>
  );
};

export default PageLoader;
