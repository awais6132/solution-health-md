'use client';

import React, { useState } from 'react';
import { NewsletterConfig } from '@/types/footer';
import { BRAND_COLORS } from '@/constants/colors';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FooterNewsletterProps {
  config: NewsletterConfig;
}

export function FooterNewsletter({ config }: FooterNewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate newsletter subscription API delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="space-y-3">
      <h3
        className="font-bold"
        style={{
          color: BRAND_COLORS.blue,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '13.56px',
          lineHeight: '18.08px',
          letterSpacing: '0.68px',
          verticalAlign: 'middle',
        }}
      >
        {config.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
        {config.description}
      </p>

      {status === 'success' ? (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-800 border border-emerald-200 animate-in fade-in duration-300">
          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span>Thank you for subscribing! You are all set.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder={config.placeholder}
              aria-label="Email address for newsletter"
              className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all shadow-2xs"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm disabled:opacity-70 cursor-pointer btn-animated-gradient-success active:scale-[0.98]"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                  Subscribing...
                </>
              ) : (
                config.buttonText
              )}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-[11px] text-red-600 font-medium">{errorMessage}</p>
          )}

          {config.disclaimer && (
            <p className="text-[10px] text-slate-400 leading-normal">
              {config.disclaimer}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
