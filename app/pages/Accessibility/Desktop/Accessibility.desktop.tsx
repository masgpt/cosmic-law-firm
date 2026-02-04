import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';
import { SITE } from '../../../lib/site';
import { FEATURES } from '@src/config/features';

const AccessibilityDesktop: React.FC = () => {
  const { t } = useTranslation();
  const contactDetails = [
    {
      label: t('accessibilityPage.contact.phoneLabel'),
      value: SITE.phoneDisplay,
      href: `tel:${SITE.phoneTel}`,
    },
    {
      label: t('accessibilityPage.contact.emailLabel'),
      value: SITE.email,
      href: `mailto:${SITE.email}`,
    },
    {
      label: t('accessibilityPage.contact.addressLabel'),
      value: SITE.addressShort,
      href: FEATURES.googleMaps
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressQuery)}`
        : undefined,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#0f172a] py-24 px-10 min-h-screen">
      <SEO 
        title={t('footer.accessibility')}
        description={t('accessibilityPage.intro')}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-10">
          {t('accessibilityPage.title')}
        </h1>
        
        <div className="prose md:prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8">
          <p>{t('accessibilityPage.intro')}</p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{t('accessibilityPage.conformance.title')}</h2>
            <p>{t('accessibilityPage.conformance.body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{t('accessibilityPage.feedback.title')}</h2>
            <p className="mb-4">{t('accessibilityPage.feedback.body')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('accessibilityPage.feedback.phone')}</li>
              <li>{t('accessibilityPage.feedback.email')}</li>
              <li>{t('accessibilityPage.feedback.address')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{t('accessibilityPage.technical.title')}</h2>
            <p className="mb-4">{t('accessibilityPage.technical.body')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('accessibilityPage.technical.items.html')}</li>
              <li>{t('accessibilityPage.technical.items.aria')}</li>
              <li>{t('accessibilityPage.technical.items.css')}</li>
              <li>{t('accessibilityPage.technical.items.js')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{t('accessibilityPage.assessment.title')}</h2>
            <p className="mb-4">{t('accessibilityPage.assessment.body')}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t('accessibilityPage.assessment.items.self')}</li>
              <li>{t('accessibilityPage.assessment.items.automated')}</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t('accessibilityPage.approval.title')}</h2>
            <p>{t('accessibilityPage.approval.body')}</p>
            <p className="font-bold mt-2">{t('accessibilityPage.approval.date')}</p>
          </section>
          <section className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('accessibilityPage.contact.heading')}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{t('accessibilityPage.contact.description')}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t('accessibilityPage.contact.responseTime')}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {contactDetails.map((detail) =>
                detail.href ? (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3 flex flex-col gap-1 hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary dark:hover:border-primary transition-colors"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {detail.label}
                    </span>
                    <span className="text-base font-semibold text-slate-900 dark:text-white break-words">
                      {detail.value}
                    </span>
                  </a>
                ) : (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-slate-200 dark:border-slate-800 px-4 py-3 flex flex-col gap-1"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {detail.label}
                    </span>
                    <span className="text-base font-semibold text-slate-900 dark:text-white break-words">
                      {detail.value}
                    </span>
                  </div>
                ),
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityDesktop;
