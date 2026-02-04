import OurPhilosophy from '../../pages/OurPhilosophy';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <OurPhilosophy initialIsMobile={initialIsMobile} />;
}
