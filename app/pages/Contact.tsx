"use client";

import React from 'react';
import { useViewport } from '../hooks/useViewport';
import ContactDesktop from './Contact/Desktop/Contact.desktop';
import ContactMobile from './Contact/Mobile/Contact.mobile';

const Contact: React.FC<{ initialIsMobile?: boolean }> = ({ initialIsMobile }) => {
  const { isMobile } = useViewport(initialIsMobile);

  return isMobile ? <ContactMobile /> : <ContactDesktop />;
};

export default Contact;
