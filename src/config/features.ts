import { IS_CHINA_BUILD } from './region';

function envBool(value: string | undefined, fallback: boolean): boolean {
  if (value == null) return fallback;
  const v = value.trim().toLowerCase();
  if (v === 'true' || v === '1' || v === 'yes' || v === 'on') return true;
  if (v === 'false' || v === '0' || v === 'no' || v === 'off') return false;
  return fallback;
}

export type FeatureFlags = Readonly<{
  googleAnalytics: boolean;
  googleMaps: boolean;
  videoEmbeds: boolean;
}>;

/**
 * Feature flags are resolved at build time via environment variables.
 * China builds force-disable blocked services to prevent stalled requests.
 */
export const FEATURES: FeatureFlags = Object.freeze({
  googleAnalytics: IS_CHINA_BUILD
    ? false
    : envBool(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS ?? process.env.ENABLE_GOOGLE_ANALYTICS, false),
  googleMaps: IS_CHINA_BUILD
    ? false
    : envBool(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_MAPS ?? process.env.ENABLE_GOOGLE_MAPS, true),
  videoEmbeds: IS_CHINA_BUILD
    ? false
    : envBool(process.env.NEXT_PUBLIC_ENABLE_VIDEO_EMBEDS ?? process.env.ENABLE_VIDEO_EMBEDS, false),
});

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? process.env.GA_MEASUREMENT_ID ?? '';
