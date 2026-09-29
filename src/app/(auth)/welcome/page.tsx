'use client';

import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
} from '@/components/auth';
import { SuccessCheckBadge } from '@/components/ui';

export default function WelcomePage() {
  return (
    <AuthCard
      size="lg"
      variant="white"
      className="w-full max-w-[490px] xl:max-w-[526px] flex flex-col justify-between text-center py-6"
    >
      {/* 1. Header with Brand Logo, Success Badge, Medical Blue Title & Subtitle */}
      <AuthHeader
        showLogo={true}
        icon={<SuccessCheckBadge className="w-18 h-18 sm:w-20 sm:h-20 mb-1" />}
        title="Welcome to Solutions Health MD"
        titleClassName="text-[#10669D] text-[23px] sm:text-[27px] font-bold tracking-tight"
        subtitle={
          <span>
            Your medical consultation is just one step away.Your account has
            been successfully created! You’re now ready to explore all our
            features.
          </span>
        }
        subtitleClassName="text-[#444444] text-[13.5px] sm:text-[14px] leading-[21px] max-w-md mx-auto pt-1 pb-3"
        align="center"
        className="mb-2"
      />

      {/* 2. Action Button to Navigate to Login */}
      <div className="pt-2 w-full">
        <Link href={ROUTES.LOGIN} className="w-full block">
          <AuthButton
            type="button"
            variant="success"
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px] shadow-sm"
          >
            Log in to your Account
          </AuthButton>
        </Link>
      </div>
    </AuthCard>
  );
}
