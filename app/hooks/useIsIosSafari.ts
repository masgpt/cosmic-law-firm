'use client';

import { useEffect, useState } from 'react';

export const useIsIosSafari = () => {
  const [isIosSafari, setIsIosSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') {
      return;
    }

    const ua = navigator.userAgent;
    const isiOS = /iP(hone|od|ad)/.test(ua);
    const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|OPiOS|EdgiOS|Chrome/.test(ua);

    setIsIosSafari(isiOS && isSafari);
  }, []);

  return isIosSafari;
};

