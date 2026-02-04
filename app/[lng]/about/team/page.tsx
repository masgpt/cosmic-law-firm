import Team from '../../../pages/Team';
import { getInitialIsMobileFromHeaders } from '../../../lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Team initialIsMobile={initialIsMobile} />;
}
