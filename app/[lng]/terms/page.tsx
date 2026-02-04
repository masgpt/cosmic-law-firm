import type { Metadata } from 'next';
import Terms from '../../pages/Terms';
import { SITE } from '../../lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  return {
    title: `Terms of Service | ${SITE.name}`,
    description: `Terms of service for ${SITE.name}.`,
    openGraph: { url: `${SITE.url}/${lng}/terms` },
  };
}

export default async function Page() {
  return <Terms />;
}

