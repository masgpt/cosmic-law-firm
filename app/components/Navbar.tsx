'use client';

import React from 'react';
import NavbarDesktop from './Navbar/Desktop/Navbar.desktop';
import NavbarMobile from './Navbar/Mobile/Navbar.mobile';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
    </>
  );
};

export default Navbar;
