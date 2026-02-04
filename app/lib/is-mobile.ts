const MOBILE_REGEX =
  /(android|iphone|ipad|ipod|iemobile|blackberry|bada|tizen|symbian|webos|opera mini|mobile)/i;

/**
 * Rough user-agent sniffing to align server render with client viewport.
 * Keeps mobile/desktop component choice consistent to prevent hydration flashes.
 */
export function isMobileUserAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  return MOBILE_REGEX.test(userAgent);
}
