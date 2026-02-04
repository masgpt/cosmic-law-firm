import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';

const AccessibilityDesktop: React.FC = () => {
  const { t } = useTranslation();

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
        </div>
      </div>
    </div>
  );
};

export default AccessibilityDesktop;
