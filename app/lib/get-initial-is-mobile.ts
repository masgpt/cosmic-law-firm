import { headers } from 'next/headers';
import { isMobileUserAgent } from './is-mobile';

/**
 * Safe helper for server components to determine if the incoming UA looks mobile.
 * Turbopack returns a promise-like headers() so we always await it.
 */
export async function getInitialIsMobileFromHeaders(): Promise<boolean> {
  const headersList = await headers();
  const ua =
    typeof (headersList as any)?.get === 'function'
      ? (headersList as any).get('user-agent')
      : undefined;

  return isMobileUserAgent(ua);
}
