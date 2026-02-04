"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import TeamDesktop from './Team/Desktop/Team.desktop';
import TeamMobile from './Team/Mobile/Team.mobile';

const Team: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return (
    <>
      {isMobile ? <TeamMobile /> : <TeamDesktop />}
    </>
  );
};

export default Team;