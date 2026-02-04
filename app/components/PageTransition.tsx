'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isFirstMount = useRef(true);

  useEffect(() => {
    setIsMounted(true);
    // After the first render completes, future mounts are not the "first"
    isFirstMount.current = false;
  }, []);

  if (!isMounted) {
    return <div className="flex flex-col flex-grow w-full">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstMount.current ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className="flex flex-col flex-grow w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
