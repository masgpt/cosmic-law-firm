"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import { normalizeLanguage, type SupportedLanguage } from '@src/i18n';

type LanguageOption = { code: SupportedLanguage; label: string };

const OPTIONS: readonly LanguageOption[] = [
  { code: 'en', label: 'EN' },
  { code: 'ko', label: '한국어' },
  { code: 'zh-Hans', label: '中文' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const currentLanguage = normalizeLanguage(i18n.language);

  const handleLanguageChange = (lng: SupportedLanguage) => {
    if (!pathname) return;

    const segments = pathname.split('/');
    if (segments.length > 1) segments[1] = lng;
    const newPath = segments.join('/');

    i18n.changeLanguage(lng);
    router.push(newPath);
  };

  return (
    <div className="flex items-center p-1 rounded-full bg-white/10 border border-white/15 w-fit">
      {OPTIONS.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`
            px-4 h-10 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 min-w-[60px] sm:min-w-[70px]
            ${currentLanguage === lang.code 
              ? 'bg-secondary text-primary shadow-md shadow-black/10'
              : 'text-white/85 hover:text-white hover:bg-white/10'}
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

