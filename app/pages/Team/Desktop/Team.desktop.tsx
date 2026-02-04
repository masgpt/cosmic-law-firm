import React from 'react';
import ButtonLink from '@/components/ui/ButtonLink';
import Link from '@/components/ui/Link';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../team.constants';

const TeamDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('team.hero.title')} description={t('team.hero.description')} />

      <section className="w-full bg-background-light dark:bg-background-dark overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-10 py-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-slate-900 dark:text-primary text-[11px] font-black uppercase tracking-[0.3em] w-fit">
              {t('team.hero.badge')}
            </span>
            <h1 className="text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {t('team.hero.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('team.hero.description')}
            </p>
            <ButtonLink
              href="/contact"
              tone="dark"
              className="w-fit inline-flex items-center gap-2 rounded-xl uppercase tracking-widest text-xs px-6 py-3 shadow-lg focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
            >
              {t('team.hero.cta')}
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                mail
              </span>
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-light dark:bg-background-dark py-20">
        <div className="max-w-[1280px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="rounded-[28px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-8 shadow-sm flex flex-col gap-6"
              >
                <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-slate-900 dark:text-primary text-xl font-black uppercase tracking-[0.2em]">
                  {member.name
                    .split(' ')
                    .map((segment) => segment[0])
                    .join('')}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.5em] text-slate-400 dark:text-slate-300">
                    {t(member.locationKey)}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-2">{member.name}</h3>
                  <p className="text-sm font-black text-slate-900 dark:text-primary uppercase tracking-[0.2em] mt-2">
                    {t(member.titleKey)}
                  </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t(member.descriptionKey)}
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {t(member.specialtyKey)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-white py-16">
        <div className="max-w-[960px] mx-auto px-10 text-center">
          <h2 className="text-3xl font-black tracking-tight">{t('team.cta.title')}</h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed">{t('team.cta.description')}</p>
          <ButtonLink
            href="/contact"
            tone="light"
            className="mt-6 inline-flex items-center justify-center rounded-xl uppercase tracking-[0.3em] text-xs px-10 py-3 shadow-xl focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-primary"
          >
            {t('team.cta.button')}
          </ButtonLink>
        </div>
      </section>
    </>
  );
};

export default TeamDesktop;
