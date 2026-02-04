'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const { t } = useTranslation();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Move focus to main content on route change for accessibility
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      
      // Announce route change
      const pageTitle = document.title;
      setAnnouncement(t('accessibility.navigatedTo', { title: pageTitle }));
    }
  }, [pathname, t]);

  return (
    <>
      {/* Route Announcement Region */}
      <div 
        className="sr-only" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      >
        {announcement}
      </div>
      {children}
    </>
  );
}
