export type Region = 'global' | 'china';

function normalizeRegion(value: string | undefined): Region {
  const v = (value || '').trim().toLowerCase();
  if (v === 'china' || v === 'cn') return 'china';
  return 'global';
}

/**
 * Single source of truth for build region.
 *
 * Notes:
 * - Prefer `NEXT_PUBLIC_REGION` so the value is available to client components.
 * - Fall back to `REGION` for server-only usage / backwards compatibility.
 */
export const REGION: Region = normalizeRegion(process.env.NEXT_PUBLIC_REGION ?? process.env.REGION);

export const IS_CHINA_BUILD = REGION === 'china';
