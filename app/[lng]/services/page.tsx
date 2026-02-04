import type { Metadata } from 'next';
import Services from '../../pages/Services';
import { getInitialIsMobileFromHeaders } from '../../lib/get-initial-is-mobile';
import { SITE } from '../../lib/site';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  
  const titles: Record<string, string> = {
    en: `Practice Areas | ${SITE.name}`,
    ko: `업무 분야 | ${SITE.name}`
  };
  
  const descriptions: Record<string, string> = {
    en: "Explore our entertainment law practice areas, including film & TV, music, talent deals, IP, digital media, corporate, finance, and litigation.",
    ko: "영화·TV, 음악, 탤런트 딜, 지식재산권, 디지털 미디어, 기업/금융, 소송 등 엔터테인먼트 법률 업무 분야."
  };

  return {
    title: titles[lng] || titles.en,
    description: descriptions[lng] || descriptions.en,
  };
}

export default async function Page({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const initialIsMobile = await getInitialIsMobileFromHeaders();

  return <Services lng={lng} initialIsMobile={initialIsMobile} />;
}
