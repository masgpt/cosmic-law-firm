"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from './ui/Link';
import ButtonLink from './ui/ButtonLink';
import ThemeToggle from './ui/ThemeToggle';
import { SITE } from '../lib/site';
import { practiceAreas } from '../lib/practice-areas';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.practiceAreas'), href: '/services' },
    { label: t('nav.insights'), href: '/insights' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.ourApproach'), href: '/message' },
    { label: t('nav.testimonials'), href: '/reviews' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.addressQuery,
  )}`;

  const contactActions = [
    {
      href: mapHref,
      label: SITE.addressShort,
      icon: 'location_on',
    },
    {
      href: `tel:${SITE.phoneTel}`,
      label: SITE.phoneDisplay,
      icon: 'call',
    },
    {
      href: `mailto:${SITE.email}`,
      label: SITE.email,
      icon: 'mail',
    },
  ];

  return (
    <footer
      className="bg-primary text-white border-t border-white/10 pt-12 pb-10 w-full transition-colors duration-300"
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center overflow-hidden">
                <Image
                  src="/Cosmic_Logos-02.png"
                  alt={`${SITE.name} logo`}
                  width={56}
                  height={56}
                  sizes="56px"
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-black tracking-tight text-white uppercase leading-none">
                  <span className="text-secondary">{SITE.name.split(' ')[0]}</span>{' '}
                  <span>{SITE.name.split(' ').slice(1).join(' ')}</span>
                </p>
                <p className="text-[10px] font-bold text-white/90 uppercase tracking-[0.18em] mt-1">
                  {SITE.nameSub}
                </p>
              </div>
            </div>

            <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-md">
              {t('footer.description')}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer quick links">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-5">
              {t('footer.quickLinks')}
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {quickLinks.map((quickLink) => (
                <ButtonLink
                  key={quickLink.label}
                  href={quickLink.href}
                  tone="light"
                  size="md"
                  className="w-full justify-start gap-3 px-4 py-3 text-sm font-semibold text-left text-slate-900 dark:text-white/90"
                >
                  {quickLink.label}
                </ButtonLink>
              ))}
            </div>
          </nav>

          <nav className="lg:col-span-3" aria-label="Footer practice areas">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-5">
              {t('nav.practiceAreas')}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/services/${area.slug}`} className="text-white/90 hover:text-secondary">
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-5">
              {t('footer.contactInfo')}
            </h4>
            <div className="grid gap-3">
              {contactActions.map((action) => (
                <ButtonLink
                  key={action.label}
                  href={action.href}
                  tone="light"
                  size="md"
                  className="w-full justify-start gap-3 px-4 py-3 text-sm font-semibold text-left text-slate-900 dark:text-white/90"
                >
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    aria-hidden="true"
                  >
                    {action.icon}
                  </span>
                  <span className="truncate">{action.label}</span>
                </ButtonLink>
              ))}
              <ButtonLink
                href="/contact"
                tone="dark"
                size="md"
                className="w-full justify-center gap-3 px-4 py-3 uppercase tracking-[0.2em]"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  chat
                </span>
                {t('nav.contact')}
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-white/80 tracking-wider uppercase">
          <p className="text-center md:text-left">
            © 2026 {t('common.companyName')}. {t('footer.rights')}
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal">
            <Link to="/accessibility" className="text-white/90 hover:text-secondary">{t('footer.accessibility')}</Link>
            <Link to="/privacy" className="text-white/90 hover:text-secondary">{t('footer.privacyPolicy')}</Link>
            <Link to="/terms" className="text-white/90 hover:text-secondary">{t('footer.termsOfService')}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
