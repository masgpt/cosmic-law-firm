"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: 'en', label: 'ENGLISH' },
    { code: 'ko', label: '한국어' },
  ];

  const currentLanguage = i18n.language ? i18n.language.split('-')[0] : 'en';

  const handleLanguageChange = (lng: string) => {
    if (!pathname) return;
    
    const segments = pathname.split('/');
    segments[1] = lng;
    const newPath = segments.join('/');
    
    i18n.changeLanguage(lng);
    router.push(newPath);
  };

  return (
    <div className="flex items-center p-1 rounded-full bg-white/10 border border-white/15 w-fit">
      {languages.map((lang) => (
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
};

export default LanguageToggle;
