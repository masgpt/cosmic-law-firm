import Accessibility from '../../pages/Accessibility';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Accessibility initialIsMobile={initialIsMobile} />;
}
