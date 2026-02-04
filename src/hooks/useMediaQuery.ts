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

    mediaQuery.addListener(updateMatch);
    return () => {
      mediaQuery.removeListener(updateMatch);
    };
  }, [query]);

  return matches;
};

export const useMinWidth = (width: number, initialValue = false) =>
  useMediaQuery(`(min-width: ${width}px)`, initialValue);
