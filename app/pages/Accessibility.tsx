"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import AccessibilityDesktop from './Accessibility/Desktop/Accessibility.desktop';
import AccessibilityMobile from './Accessibility/Mobile/Accessibility.mobile';

const Accessibility: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <AccessibilityMobile /> : <AccessibilityDesktop />;
};

export default Accessibility;
