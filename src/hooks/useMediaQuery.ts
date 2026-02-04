"use client";

import { useEffect, useState } from "react";

const isClient = typeof window !== "undefined";

export const useMediaQuery = (query: string, initialValue = false) => {
  // Important: don't read `window.matchMedia` during initial render, otherwise
  // SSR markup can differ from the first client render (hydration mismatch).
  const [matches, setMatches] = useState<boolean>(initialValue);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    const legacyMediaQuery = mediaQuery as MediaQueryList & {
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void;
    };

    const updateMatch = () => {
      setMatches(mediaQuery.matches);
    };

    updateMatch();

    if ("addEventListener" in mediaQuery) {
      mediaQuery.addEventListener("change", updateMatch);
      return () => {
        mediaQuery.removeEventListener("change", updateMatch);
      };
    }

    if (legacyMediaQuery.addListener) {
      legacyMediaQuery.addListener(updateMatch);
      return () => {
        legacyMediaQuery.removeListener?.(updateMatch);
      };
    }

    return undefined;
  }, [query]);

  return matches;
};

export const useMinWidth = (width: number, initialValue = false) =>
  useMediaQuery(`(min-width: ${width}px)`, initialValue);
