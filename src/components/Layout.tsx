import React from 'react';
import Script from 'next/script';
import { FEATURES, GA_MEASUREMENT_ID } from '@src/config/features';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {FEATURES.googleAnalytics && GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
      {children}
    </>
  );
}

