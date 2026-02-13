import type { Metadata, Viewport } from "next";
import "../index.css";
import React from 'react';
import ClientLayout from '../client-layout';
import I18nProvider from '../components/I18nProvider';
import { EmailProvider } from '../components/EmailClientProvider';
import { SITE } from '../lib/site';
import RegionLayout from '@src/components/Layout';
import { CookieConsentProvider } from '@src/context/cookieConsent';
import CookieConsentBanner from '../components/CookieConsentBanner';
import { geistSans, geistMono } from '../fonts';
import { getInitialIsMobileFromHeaders } from '../lib/get-initial-is-mobile';
import AppLayout from '../components/AppLayout';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }): Promise<Metadata> {
  const { lng } = await params;
  const baseUrl = SITE.url;

  const subNames: Record<string, string> = {
    en: 'International Business, Entertainment & Personal Injury Law',
    ko: '국제 비즈니스, 엔터테인먼트, 개인상해법',
  };
  const nameSub = subNames[lng] || subNames.en;

  return {
    title: {
      template: `%s | ${SITE.name}`,
      default: `${SITE.name} | ${nameSub}`,
    },
    description: "International business law, entertainment counsel, and personal injury advocacy for investors and companies operating across borders.",
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      url: `${baseUrl}/${lng}`,
      title: `${SITE.name} | ${nameSub}`,
      description: "International business law, entertainment counsel, and personal injury advocacy for investors and companies operating across borders.",
      images: ["/Cosmic_Logos-02.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE.name} | ${nameSub}`,
      description: "International business law, entertainment counsel, and personal injury advocacy for investors and companies operating across borders.",
      images: ["/Cosmic_Logos-02.png"],
    },
    icons: {
      icon: '/Cosmic_Logos-02.png',
    },
  };
}

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
  const initialIsMobile = await getInitialIsMobileFromHeaders();

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
        ? "국제 비즈니스, 엔터테인먼트, 개인상해 문제를 아우르는 글로벌 투자·거래 법률 서비스."
        : "International business law, entertainment counsel, and personal injury advocacy for investors and companies operating across borders.",
    "telephone": SITE.phoneTel ? `+1-${SITE.phoneTel}` : undefined,
    "email": SITE.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE.address.street,
      "addressLocality": SITE.address.city,
      "addressRegion": SITE.address.state,
      "postalCode": SITE.address.zip,
      "addressCountry": SITE.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.geo.latitude,
      "longitude": SITE.geo.longitude
    },
    "openingHours": SITE.openingHours,
    "priceRange": SITE.priceRange,
    "areaServed": ["Los Angeles", "California", "United States"]
  };

  return (
    <html 
      lang={lng} 
      className={`scroll-pt-[104px] ${geistSans.variable} ${geistMono.variable}`} 
      suppressHydrationWarning
    >
      <head>
        {/* Prevent iOS Safari from auto-linking phone numbers/emails and mutating the DOM pre-hydration. */}
        <meta name="format-detection" content="telephone=no,date=no,address=no,email=no" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
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
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased">
        <CookieConsentProvider>
          <RegionLayout>
            <I18nProvider lng={lng}>
              <EmailProvider>
                <div className="relative flex flex-col min-h-screen overflow-x-hidden">
                  <ClientLayout initialIsMobile={initialIsMobile}>
                    <AppLayout lng={lng} initialIsMobile={initialIsMobile}>
                      {children}
                    </AppLayout>
                  </ClientLayout>
                </div>
              </EmailProvider>
            </I18nProvider>
          </RegionLayout>
          <CookieConsentBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
