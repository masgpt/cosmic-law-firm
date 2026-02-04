'use client';

import React from 'react';
import i18n from '../i18n';

export default function I18nProvider({ 
  children, 
  lng 
}: { 
  children: React.ReactNode;
  lng: string;
}) {
  // Set the language during the render phase to ensure it's available for children
  if (lng && i18n.language !== lng) {
    i18n.changeLanguage(lng);
  }

  return <>{children}</>;
}
