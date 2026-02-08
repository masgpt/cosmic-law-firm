'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

export default function PageTransitionMotion({
  children,
  pathname,
  shouldAnimate,
}: {
  children: React.ReactNode;
  pathname: string;
  shouldAnimate: boolean;
}) {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <motion.div
      key={pathname}
      initial={shouldAnimate ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={
        shouldAnimate
          ? { duration: 0.3, ease: 'easeInOut' }
          : { duration: 0 }
      }
      className="flex flex-col flex-grow w-full"
    >
      {children}
    </motion.div>
  );
}
