import About from '../../pages/About';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <About initialIsMobile={initialIsMobile} />;
}
