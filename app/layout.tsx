import type { Metadata } from "next";
import "./index.css";
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipToContent from './components/SkipToContent';
import ClientLayout from './client-layout';
import PageTransition from './components/PageTransition';
import I18nProvider from './components/I18nProvider';
import { SITE } from './lib/site';

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.nameSub}`,
  description: "Entertainment law for creators, studios, and media companies—contracts, IP, talent deals, distribution, and disputes.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | ${SITE.nameSub}`,
    description: "Entertainment law for creators, studios, and media companies—contracts, IP, talent deals, distribution, and disputes.",
    images: ["/Cosmic_Logos-02.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.nameSub}`,
    description: "Entertainment law for creators, studios, and media companies—contracts, IP, talent deals, distribution, and disputes.",
    images: ["/Cosmic_Logos-02.png"],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚖️</text></svg>',
  },
};

export async function generateStaticParams() {
  return [{ lng: 'en' }, { lng: 'ko' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    "name": SITE.name,
    "url": SITE.url,
    "logo": `${SITE.url}/Cosmic_Logos-02.png`,
    "image": `${SITE.url}/Cosmic_Logos-02.png`,
    "description":
      lng === 'ko'
        ? "크리에이터와 미디어 기업을 위한 엔터테인먼트 로펌—계약, 지식재산권, 탤런트 딜, 배급, 분쟁."
        : "Entertainment law for creators, studios, and media companies—contracts, IP, talent deals, distribution, and disputes.",
    "telephone": SITE.phoneTel ? `+1-${SITE.phoneTel}` : undefined,
    "email": SITE.email,
  };

  return (
    <html lang={lng} className="scroll-pt-[104px]" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Noto+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            const saved = localStorage.getItem('theme') || 'system';
            const root = document.documentElement;
            if (saved === 'dark' || (saved === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              root.classList.add('dark');
            } else {
              root.classList.add('light');
            }
          })();
        ` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased selection:bg-primary/20">
        <I18nProvider lng={lng}>
          <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <ClientLayout>
              <SkipToContent />
              <Navbar />
              <main 
                id="main-content" 
                tabIndex={-1} 
                className="flex-grow w-full flex flex-col outline-none pt-[68px] sm:pt-[96px] lg:pt-[96px]"
              >
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </ClientLayout>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
