'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLink from '@/components/ui/ButtonLink';
import Link from '@/components/ui/Link';
import { TeamMember } from './team.constants';

type TeamMemberDetailProps = {
  member: TeamMember;
};

const TeamMemberDetail: React.FC<TeamMemberDetailProps> = ({ member }) => {
  const { t } = useTranslation();
  const detailKey = member.detailKey;
  const biography = (t(`${detailKey}.biography`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[]) ?? [];
  const memberships = (t(`${detailKey}.memberships`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[]) ?? [];
  const practiceAreas = (t(`${detailKey}.practiceAreas`, {
    returnObjects: true,
    defaultValue: [],
  }) as string[]) ?? [];
  const creative = t(`${detailKey}.creative`, { defaultValue: '' });
  const education = (t(member.educationKey, {
    returnObjects: true,
    defaultValue: [],
  }) as string[]) ?? [];
  const tagline = t(`${detailKey}.tagline`, { defaultValue: '' });

  return (
    <section className="w-full bg-background-light dark:bg-background-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            {tagline && (
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-300">
                {tagline}
              </p>
            )}
            <h1 className="text-4xl font-black text-slate-900 dark:text-white">{member.name}</h1>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-primary">
              {t(member.titleKey)}
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t(member.descriptionKey)}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href="/contact"
                tone="dark"
                size="sm"
                className="uppercase tracking-[0.35em] text-[10px]"
              >
                {t('team.hero.cta')}
              </ButtonLink>
              <Link
                href="/about/team"
                className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-600 hover:text-primary dark:text-slate-200"
              >
                {t('team.links.backToTeam')}
              </Link>
            </div>
          </div>
          <div className="relative h-[360px] w-full shrink-0 overflow-hidden rounded-[28px] border border-slate-200 dark:border-slate-800 lg:max-w-[360px]">
            <Image
              src={member.imageSrc}
              alt={t(member.imageAltKey)}
              fill
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            {biography.map((paragraph, index) => (
              <p
                key={`${member.id}-bio-${index}`}
                className="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                {paragraph}
              </p>
            ))}
            {memberships.length > 0 && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                  Memberships &amp; affiliations
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {memberships.map((item, idx) => (
                    <li key={`${member.id}-membership-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {creative && (
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                  Creative focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{creative}</p>
              </div>
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
              <p className="text-[0.6rem] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                Education
              </p>
              <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {education.map((item, idx) => (
                  <li key={`${member.id}-detail-edu-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
            {practiceAreas.length > 0 && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                  Practice focus
                </p>
                <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  {practiceAreas.map((area, idx) => (
                    <li key={`${member.id}-practice-${idx}`}>{area}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberDetail;
