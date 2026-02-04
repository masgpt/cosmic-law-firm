"use client";

import React from 'react';
import SEO from '@/components/SEO';
import Link from '@/components/ui/Link';
import ButtonLink from '@/components/ui/ButtonLink';
import { SITE } from '@/lib/site';
import { useTranslation } from 'react-i18next';

const topics = [
  { slug: 'contract-red-flags', tag: 'Checklist', status: 'Live' },
  { slug: 'chain-of-title', tag: 'Due diligence', status: 'Live' },
  { slug: 'ai-in-entertainment', tag: 'Trends', status: 'Live' },
  { slug: 'ai-contracts', tag: 'Best practices', status: 'Live' },
  { slug: 'ai-law', tag: 'Policy', status: 'Live' },
  { slug: 'nil-basics', tag: 'Sports', status: 'Live' },
  { slug: 'publicity-basics', tag: 'Rights', status: 'Live' },
];

const Insights: React.FC<{ lng: string }> = ({ lng }) => {
  const { t } = useTranslation();
  const isKo = lng === 'ko';

  return (
    <div className="pt-16 lg:pt-20">
      <SEO title={isKo ? `인사이드 | ${SITE.name}` : `Insides | ${SITE.name}`} description={t('insights.hero.description')} />

      <section className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
          <div className="space-y-3 text-center">
            <span className="text-xs font-black tracking-[0.4em] uppercase text-primary">{t('insights.hero.badge')}</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white leading-tight">
              {t('insights.hero.title')}
            </h1>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {t('insights.hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#020712]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/insights/${topic.slug}`}
                className="group block rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 p-6 transition shadow-sm hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">
                  <span>{topic.tag}</span>
                  <span className="font-black text-slate-500 dark:text-slate-300">{topic.status}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                  {t(`insights.topics.${topic.slug}.title`)}
                </h2>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(`insights.topics.${topic.slug}.summary`)}
                </p>
                <span className="mt-5 inline-flex items-center text-xs font-black tracking-[0.3em] text-slate-900 dark:text-primary uppercase">
                  {t('insights.cta.linkText')}
                  <span className="material-symbols-outlined text-base ml-2">east</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-[#020712]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="rounded-3xl bg-primary text-white p-8 text-center space-y-3">
            <h2 className="text-3xl font-bold">{t('insights.cta.title')}</h2>
            <p className="text-sm text-white/90">{t('insights.cta.description')}</p>
              <ButtonLink
                href="/contact"
                tone="light"
                className="inline-flex items-center justify-center gap-2 rounded-xl uppercase tracking-[0.3em] text-xs px-5 py-3 shadow-lg focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-primary"
              >
                {t('insights.cta.button')}
              </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
