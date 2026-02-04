"use client";

import React from 'react';
import SEO from '@/components/SEO';
import { SITE } from '@/lib/site';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy policy for ${SITE.name}.`} />
      <div className="max-w-[960px] mx-auto px-6 sm:px-8 py-16 space-y-10">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
            This page is a placeholder. Add your firm’s privacy policy (analytics, contact form handling, and any third-party
            services) before publishing.
          </p>
        </div>

        <section className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Cosmic Law Firm</h2>
          <div className="mt-3 text-slate-600 dark:text-slate-300 space-y-1 text-sm">
            <p>
              Phone:{' '}
              <a href={`tel:${SITE.phoneTel}`} className="text-primary dark:text-primary-light hover:underline">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              Email:{' '}
              <a href={`mailto:${SITE.email}`} className="text-primary dark:text-primary-light hover:underline">
                {SITE.email}
              </a>
            </p>
            <p>Address: {SITE.addressShort}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;
