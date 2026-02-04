"use client";

import React from 'react';
import SEO from '@/components/SEO';
import { SITE } from '@/lib/site';

const Terms: React.FC = () => {
  return (
    <>
      <SEO title="Terms of Service" description={`Terms of service for ${SITE.name}.`} />
      <div className="max-w-[960px] mx-auto px-6 sm:px-8 py-16">
        <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Terms of Service</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
          This page is a placeholder. Add website terms (no legal advice, acceptable use, IP notices, and disclaimers)
          before publishing.
        </p>
      </div>
    </>
  );
};

export default Terms;

