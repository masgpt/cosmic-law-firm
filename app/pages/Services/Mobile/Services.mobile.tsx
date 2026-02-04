import React from 'react';
import { useTranslation } from 'react-i18next';
import ButtonLink from '@/components/ui/ButtonLink';
import Link from '@/components/ui/Link';
import { motion } from 'framer-motion';
import { practiceAreas } from '@/lib/practice-areas';
import { SITE } from '@/lib/site';

const fadeInUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.06 } },
  viewport: { once: true },
};

const MotionButtonLink = motion(ButtonLink);

const ServicesMobile: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language || 'en';
  const isKo = i18n.language?.startsWith('ko');
  const processSteps = ['step1', 'step2', 'step3'] as const;

  return (
    <>
      <section className="w-full bg-background-light dark:bg-background-dark flex justify-center overflow-hidden">
        <div className="w-full px-0 py-0">
          <div
            className="flex min-h-[400px] flex-col gap-6 items-center justify-center p-6 shadow-sm relative overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.8) 100%), url('/cropped-cropped-cropped-cropped-healing-hands-wellness-center-chiropractic-1024x395.jpg')",
            }}
            role="img"
            aria-label="Hands supporting a person's back (placeholder image)"
          >
            <div className="flex flex-col gap-3 text-center z-10">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[10px] font-black uppercase tracking-[0.3em] w-fit mx-auto">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                gavel
              </span>
              {t('servicesPage.hero.badge')}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white text-3xl font-black leading-tight tracking-tight drop-shadow-md uppercase"
            >
              {t('servicesPage.hero.title')}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="text-slate-100 text-sm font-medium leading-relaxed mt-1 drop-shadow-sm"
              >
                {t('servicesPage.hero.subtitle')}
              </motion.p>
            </div>
              <MotionButtonLink
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                href="#practice-areas"
                tone="light"
                className="z-10 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-secondary hover:bg-secondary/90 transition-colors text-slate-900 text-base font-bold shadow-lg uppercase tracking-widest focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="truncate">{t('servicesPage.hero.cta')}</span>
              </MotionButtonLink>
          </div>
        </div>
      </section>

      <section id="practice-areas" className="w-full flex justify-center py-10 overflow-hidden">
        <div className="w-full px-4">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <h2 className="text-[#0d141b] dark:text-white text-2xl font-black leading-tight uppercase">
              {t('servicesPage.specialties.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed font-medium mt-3">
              {t('servicesPage.specialties.description')}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 mt-8"
          >
            {practiceAreas.map((area) => (
              <motion.div
                key={area.slug}
                variants={fadeInUp}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col gap-4 rounded-[24px] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 shadow-lg shadow-primary/5 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl font-light" aria-hidden="true">
                      {area.icon}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[#0d141b] dark:text-white text-lg font-black leading-tight tracking-tight">
                      {isKo ? area.titleKo : area.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-medium mt-1">
                      {isKo ? area.focusKo : area.focus}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/${lng}/services/${area.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] active:underline"
                >
                  View services
                  <span className="material-symbols-outlined text-xs" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full flex justify-center py-12 bg-slate-50 dark:bg-background-dark">
        <div className="w-full px-4 flex flex-col">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-tight mb-10 text-center"
          >
            {t('servicesPage.process.title')}
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {processSteps.map((stepKey, idx) => (
              <motion.div
                key={stepKey}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#0d141b] dark:text-white">
                  {t(`servicesPage.process.${stepKey}.title`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs">
                  {t(`servicesPage.process.${stepKey}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center py-12 bg-background-light dark:bg-background-dark border-t border-secondary/40 dark:border-white/10">
        <div className="w-full px-4">
          <div className="bg-secondary/35 dark:bg-white/5 rounded-2xl p-6 flex flex-col items-center justify-between gap-8 border border-secondary/40 dark:border-white/10">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-xl font-bold text-[#0d141b] dark:text-white">{t('servicesPage.cta.title')}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {t('servicesPage.cta.description')}
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center w-full">
              <div className="flex items-center gap-2 text-base font-semibold text-[#0d141b] dark:text-white">
                <span className="material-symbols-outlined text-primary text-xl" aria-hidden="true">
                  call
                </span>
                {SITE.phoneDisplay}
              </div>
              <Link
                to={`/${lng}/contact`}
                className="flex w-full min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/80 transition-colors text-white text-base font-bold shadow-md focus:ring-2 focus:ring-secondary/40 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark"
              >
                {t('servicesPage.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesMobile;
