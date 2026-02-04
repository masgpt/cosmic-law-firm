"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import ServicesDesktop from './Services/Desktop/Services.desktop';
import ServicesMobile from './Services/Mobile/Services.mobile';
import { useTranslation } from 'react-i18next';

const Services: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <>
      <div className="block lg:hidden">
        <ServicesMobile />
      </div>
      <div className="hidden lg:block">
        <ServicesDesktop />
      </div>
    </>
  );
};

export default Services;
