import type { Metadata } from 'next';
import Reviews from '../../pages/Reviews';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';
import { SITE } from '../../lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: `Testimonials | ${SITE.name}`,
    ko: `추천사 | ${SITE.name}`
  };
  
  const descriptions: Record<string, string> = {
    en: "Client testimonials and feedback on our approach to entertainment and IP matters.",
    ko: "엔터테인먼트 및 지식재산권 업무에 대한 클라이언트 피드백."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
    openGraph: {
      title: titles[lng] || titles.en,
      description: descriptions[lng] || descriptions.en,
      url: `${SITE.url}/${lng}/reviews`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Reviews lng={lng} initialIsMobile={initialIsMobile} />;
}
