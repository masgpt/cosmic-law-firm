"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import OurPhilosophyDesktop from './OurPhilosophy/Desktop/OurPhilosophy.desktop';
import OurPhilosophyMobile from './OurPhilosophy/Mobile/OurPhilosophy.mobile';

const OurPhilosophy: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <OurPhilosophyMobile /> : <OurPhilosophyDesktop />;
};

export default OurPhilosophy;
