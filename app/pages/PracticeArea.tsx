"use client";

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '@/components/ui/Link';
import SEO from '@/components/SEO';
import { getPracticeAreaBySlug } from '@/lib/practice-areas';
import { SITE } from '@/lib/site';

type PracticeAreaPageProps = {
  lng?: string;
  slug: string;
};

const PracticeAreaPage: React.FC<PracticeAreaPageProps> = ({ lng, slug }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return (
      <div className="max-w-[960px] mx-auto px-6 sm:px-8 py-16">
        <SEO title="Practice Area" description="Practice area not found." />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          Practice area not found
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-8">
          <Link
            to={lng ? `/${lng}/services` : '/services'}
            className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-colors focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
          >
            Back to Practice Areas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO title={area.title} description={area.summary} />

      {/* Hero */}
      <section className="w-full bg-background-light dark:bg-background-dark border-b border-secondary/40 dark:border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-slate-900 dark:text-primary text-xs font-black uppercase tracking-widest w-fit">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {area.icon}
              </span>
              Practice Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              {area.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {area.focus}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {area.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                to={lng ? `/${lng}/contact` : '/contact'}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-colors shadow-md focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              >
                Request a consultation
              </Link>
              <Link
                to={lng ? `/${lng}/services` : '/services'}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                View all practice areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-12">
          {area.overview?.length ? (
            <div className="max-w-3xl">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Overview
              </h2>
              <div className="mt-3 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                {area.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col gap-2 max-w-3xl mt-12">
            <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              What we handle
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Typical matters within {area.title.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {area.services.map((service) => (
              <div
                key={service}
                className="flex gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <span className="material-symbols-outlined text-slate-900 dark:text-primary shrink-0" aria-hidden="true">
                  check_circle
                </span>
                <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {service}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-secondary/40 dark:border-white/10 bg-secondary/25 dark:bg-white/5 p-6 sm:p-8">
            <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
              Next step
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
              Tell us what you’re building and where you are in the process. We’ll respond with a clear plan and next actions.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                to={lng ? `/${lng}/contact` : '/contact'}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-colors shadow-md focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              >
                Contact {SITE.name.split(' ')[0]}
              </Link>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(`${area.title} inquiry`)}`}
                className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreaPage;
