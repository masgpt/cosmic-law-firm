import React from 'react';
import ButtonLink from '@/components/ui/ButtonLink';
import Link from '@/components/ui/Link';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../team.constants';

const TeamMobile: React.FC = () => {
  const { t } = useTranslation();

      return (
    <>
      <SEO title={t('team.hero.title')} description={t('team.hero.description')} />
      <section className="px-6 py-12 bg-background-light dark:bg-background-dark">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-slate-900 dark:text-primary text-[10px] font-black uppercase tracking-[0.3em] w-fit">
          {t('team.hero.badge')}
        </span>
        <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 dark:text-white">{t('team.hero.title')}</h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">{t('team.hero.description')}</p>
        <ButtonLink
          href="/contact"
          tone="dark"
          className="mt-6 inline-flex items-center gap-2 rounded-xl uppercase tracking-widest text-xs px-5 py-3 shadow-lg focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
        >
          {t('team.hero.cta')}
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            mail
          </span>
        </ButtonLink>
      </section>

      <section className="px-6 py-12 space-y-6 bg-background-light dark:bg-background-dark">
        {teamMembers.map((member) => (
          <article
            key={member.id}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-slate-900 dark:text-primary font-black uppercase tracking-[0.3em]">
                {member.name
                  .split(' ')
                  .map((segment) => segment[0])
                  .join('')}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-300">
                {t(member.locationKey)}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white">{member.name}</h3>
              <p className="text-sm font-black text-slate-900 dark:text-primary uppercase tracking-[0.25em] mt-1">{t(member.titleKey)}</p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t(member.descriptionKey)}
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {t(member.specialtyKey)}
            </p>
          </article>
        ))}
      </section>

      <section className="px-6 py-12 bg-primary text-white text-center space-y-3">
        <h2 className="text-2xl font-black tracking-tight">{t('team.cta.title')}</h2>
        <p className="text-sm leading-relaxed text-white/90">{t('team.cta.description')}</p>
        <ButtonLink
          href="/contact"
          tone="light"
          className="inline-flex items-center justify-center gap-2 rounded-xl uppercase tracking-[0.3em] text-xs px-6 py-3 shadow-lg focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-primary"
        >
          {t('team.cta.button')}
        </ButtonLink>
      </section>
    </>
  );
};

export default TeamMobile;
