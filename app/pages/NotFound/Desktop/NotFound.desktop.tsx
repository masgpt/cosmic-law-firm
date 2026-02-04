import React from 'react';
import Link from '@/components/ui/Link';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/SEO';

const NotFoundDesktop: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-10">
      <SEO 
        title={t('notFound.title')}
        description={t('notFound.description')}
      />
      <div className="bg-slate-100 dark:bg-slate-800 p-10 rounded-full mb-8">
        <span className="material-symbols-outlined text-8xl text-slate-400">wrong_location</span>
      </div>
      <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">{t('notFound.title')}</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
        {t('notFound.description')}
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-all shadow-lg text-lg focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
      >
        {t('notFound.cta')}
      </Link>
    </div>
  );
};

export default NotFoundDesktop;
