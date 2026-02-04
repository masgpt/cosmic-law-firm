import Contact from '../../pages/Contact';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Contact initialIsMobile={initialIsMobile} />;
}
