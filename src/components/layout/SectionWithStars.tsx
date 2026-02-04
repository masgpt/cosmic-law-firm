"use client";

import { useMemo, useRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { SectionStarsSettings } from "@src/config/parallaxStars.config";
import { DEFAULT_SECTION_STARS_SETTINGS } from "@src/config/parallaxStars.config";
import ParallaxStars from "@src/components/backgrounds/ParallaxStars";
import { useReducedMotion } from "@src/hooks/useReducedMotion";
import { useMinWidth } from "@src/hooks/useMediaQuery";

interface SectionWithStarsProps extends HTMLAttributes<HTMLElement> {
  settings?: SectionStarsSettings;
  className?: string;
  overflow?: "hidden" | "visible";
  children: ReactNode;
}

const SectionWithStars = ({ settings, className = "", overflow = "hidden", children, ...rest }: SectionWithStarsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isWideViewport = useMinWidth(768);

  const mergedSettings = useMemo<SectionStarsSettings>(() => {
    const enabledLayers =
      settings?.enabledLayers ??
      (isWideViewport ? DEFAULT_SECTION_STARS_SETTINGS.enabledLayers : ["far"]);
    const verticalOffset = {
      ...DEFAULT_SECTION_STARS_SETTINGS.verticalOffset,
      ...settings?.verticalOffset,
    };

    return {
      ...DEFAULT_SECTION_STARS_SETTINGS,
      ...settings,
      enabledLayers,
      // Keep mobile render cost low; callers can still override via `settings.density`.
      density:
        typeof settings?.density === "number"
          ? settings.density
          : isWideViewport
          ? DEFAULT_SECTION_STARS_SETTINGS.density
          : Math.min(0.35, DEFAULT_SECTION_STARS_SETTINGS.density ?? 0.35),
      verticalOffset,
    };
  }, [isWideViewport, settings]);

  const overflowClass = overflow === "visible" ? "overflow-visible" : "overflow-hidden";
  const isPositioned = /relative|absolute|fixed|sticky/.test(className);
  const positionClass = isPositioned ? "" : "relative";

  return (
    <section ref={sectionRef} className={`${positionClass} ${overflowClass} ${className}`} {...rest}>
      <ParallaxStars sectionRef={sectionRef} settings={mergedSettings} reducedMotion={prefersReducedMotion} />
      {children}
    </section>
  );
};

export default SectionWithStars;
