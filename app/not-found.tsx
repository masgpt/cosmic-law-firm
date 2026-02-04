import NotFound from './pages/NotFound';
import { getInitialIsMobileFromHeaders } from './lib/get-initial-is-mobile';

export default async function Page() {
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <NotFound initialIsMobile={initialIsMobile} />;
}
