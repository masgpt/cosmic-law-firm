'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useViewport } from '../hooks/useViewport';

const PageTransitionMotion = dynamic(() => import('./PageTransition.motion'));

export default function PageTransition({
  children,
  initialIsMobile,
}: {
  children: React.ReactNode;
  initialIsMobile?: boolean;
}) {
  const { isMobile } = useViewport(initialIsMobile);
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const prevPathname = useRef<string | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (prevPathname.current && prevPathname.current !== pathname) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
    prevPathname.current = pathname;
  }, [pathname]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (isMobile) {
    return <div className="flex flex-col flex-grow w-full">{children}</div>;
  }

  if (!hasMounted) {
    return <div className="flex flex-col flex-grow w-full">{children}</div>;
  }

  return (
    <PageTransitionMotion pathname={pathname} shouldAnimate={shouldAnimate}>
      {children}
    </PageTransitionMotion>
  );
}
