import type { Metadata } from 'next';
import Privacy from '../../pages/Privacy';
import { SITE } from '../../lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  return {
    title: `Privacy Policy | ${SITE.name}`,
    description: `Privacy policy for ${SITE.name}.`,
    openGraph: { url: `${SITE.url}/${lng}/privacy` },
  };
}

export default async function Page() {
  return <Privacy />;
}

