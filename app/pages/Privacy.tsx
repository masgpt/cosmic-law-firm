"use client";

import React from 'react';
import SEO from '@/components/SEO';
import { SITE } from '@/lib/site';

const Privacy: React.FC = () => {
  return (
    <>
      <SEO title="Privacy Policy" description={`Privacy policy for ${SITE.name}.`} />
      <div className="max-w-[960px] mx-auto px-6 sm:px-8 py-16">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          This page is a placeholder. Add your firm’s privacy policy (analytics, contact form handling, and any third-party
          services) before publishing.
        </p>
      </div>
    </>
  );
};

export default Privacy;

