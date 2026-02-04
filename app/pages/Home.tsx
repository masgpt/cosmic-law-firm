"use client";

import React, { useEffect } from 'react';
import { useViewport } from '../hooks/useViewport';
import { useTranslation } from 'react-i18next';
import HomeDesktop from './Home/Desktop/Home.desktop';
import HomeMobile from './Home/Mobile/Home.mobile';

const Home: React.FC<{ lng?: string; initialIsMobile?: boolean }> = ({ lng }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <>
      <div className="block lg:hidden">
        <HomeMobile />
      </div>
      <div className="hidden lg:block">
        <HomeDesktop />
      </div>
    </>
  );
};

export default Home;
