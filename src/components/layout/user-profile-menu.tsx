'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { userProfileMenuItems } from '@/constants/site';
import { FileText, Calendar, CreditCard, LogOut, ChevronDown, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface UserProfileMenuProps {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  defaultOpen?: boolean;
  className?: string;
}

const itemIcons: Record<string, React.ReactNode> = {
  'My Profile': (
    <svg className="w-4.5 h-4.5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  'My Appointments': (
    <svg className="w-4.5 h-4.5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <polyline points="9 13 11 15 15 11" />
    </svg>
  ),
  'My Subscriptions': (
    <svg className="w-4.5 h-4.5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="6" x2="19" y2="6" />
      <polyline points="10 10 15 10 15 15" />
      <line x1="15" y1="10" x2="8" y2="17" />
    </svg>
  ),
  'My Invoices': (
    <svg className="w-4.5 h-4.5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="14" y2="13" />
    </svg>
  ),
  'Sign Out': (
    <svg className="w-4.5 h-4.5 text-slate-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
};

export function UserProfileMenu({
  userName = 'Hello Umair!',
  userEmail = 'User@gmail.com',
  userAvatar = '/assets/images/user-avatar.jpg',
  defaultOpen = false,
  className,
}: UserProfileMenuProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className={cn('relative inline-block text-left', className)}>
      {/* Profile Pill Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          borderRadius: '11295.75px',
          borderWidth: '0.3px',
        }}
        className="flex items-center gap-2.5 px-3 py-1.5 h-[43px] bg-[#F2F7FD] border border-[#DCE7F5] hover:bg-[#EAF2FC] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4b9b44]/20 cursor-pointer shadow-2xs select-none group shrink-0"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {/* Avatar */}
        <div className="w-7.5 h-7.5 rounded-full overflow-hidden shrink-0 border border-white shadow-2xs bg-slate-200">
          <Image
            src={userAvatar}
            alt={userName}
            width={30}
            height={30}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* User Details (Stacked Name + Email) */}
        <div className="flex flex-col items-start text-left">
          <span
            style={{
              fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
              fontWeight: 500,
              fontSize: '13.22px',
              lineHeight: '14.87px',
              letterSpacing: '0px',
              verticalAlign: 'middle',
            }}
            className="text-slate-900 tracking-tight"
          >
            {userName}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
              fontWeight: 400,
              fontSize: '9.92px',
              lineHeight: '11.57px',
              letterSpacing: '0px',
              verticalAlign: 'middle',
            }}
            className="text-slate-500 mt-0.5"
          >
            {userEmail}
          </span>
        </div>

        {/* Chevron Icon */}
        <ChevronDown
          className={cn(
            'w-3.5 h-3.5 text-slate-700 transition-transform duration-200 shrink-0 ml-0.5',
            isOpen ? 'rotate-180' : ''
          )}
        />
      </button>

      {/* Dropdown Popover matching exact mockup */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 rounded-2xl bg-[#F4F8FC] border border-[#E2EDF8] shadow-2xl shadow-slate-900/15 p-4.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150 select-none">
          {/* Top Profile Header */}
          <div className="flex items-center gap-2.5 pb-4 mb-3 border-b border-transparent">
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-white shadow-2xs bg-slate-200">
              <Image
                src={userAvatar}
                alt={userName}
                width={32}
                height={32}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[13.5px] font-bold text-slate-900 leading-tight">
                {userName}
              </span>
              <span className="text-[11px] font-normal text-slate-500 leading-tight mt-0.5">
                {userEmail}
              </span>
            </div>
          </div>

          {/* Menu Items List */}
          <div className="flex flex-col space-y-3.5">
            {userProfileMenuItems.map((item, index) => {
              const isSignOut = item.title === 'Sign Out';
              return (
                <React.Fragment key={item.title}>
                  {index === userProfileMenuItems.length - 1 && (
                    <div className="border-t border-slate-200/80 my-1 pt-1" />
                  )}
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '100%',
                      letterSpacing: '-0.01em',
                    }}
                    className="flex items-center gap-3 text-slate-800 hover:text-[#4b9b44] transition-colors py-0.5 group"
                  >
                    <span className="shrink-0 transition-transform group-hover:scale-110">
                      {itemIcons[item.title]}
                    </span>
                    <span>{item.title}</span>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

