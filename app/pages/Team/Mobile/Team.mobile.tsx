import React from 'react';
import ButtonLink from '@/components/ui/ButtonLink';
import Link from '@/components/ui/Link';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';
import { teamMembers } from '../team.constants';
import Image from 'next/image';

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

      <section className="px-4 py-10 space-y-5 bg-background-light dark:bg-background-dark">
        {teamMembers.map((member) => (
          <Link
            key={member.id}
            href={`/about/team/${member.slug}`}
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`${member.name} profile`}
          >
            <article className="flex flex-row flex-wrap items-start gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-lg">
              <div className="flex-1 min-w-0 space-y-2">
                <p className="text-[0.55rem] uppercase tracking-[0.45em] text-slate-400 dark:text-slate-300">
                  {t(member.locationKey)}
                </p>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-black text-primary uppercase tracking-[0.45em]">
                  {t(member.titleKey)}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(member.specialtyKey)}
                </p>
              </div>
              <div className="relative shrink-0 w-[120px] h-[200px] rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                <Image
                  src={member.imageSrc}
                  alt={t(member.imageAltKey)}
                  fill
                  sizes="(max-width: 480px) 120px, 140px"
                  className="object-cover"
                />
              </div>
            </article>
          </Link>
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
