"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';

const SkipToContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary/40"
    >
      {t('accessibility.skipToContent')}
    </a>
  );
};

export default SkipToContent;
