import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/ui/Button';
import FormField from '../../../components/ui/FormField';
import Link from '../../../components/ui/Link';
import { useContactForm } from '../Shared/contact.hooks';
import { motion } from 'framer-motion';
import { SITE } from '../../../lib/site';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const ContactMobile: React.FC = () => {
  const { t } = useTranslation();
  const { isSubmitted, isLoading, handleSubmit, resetForm } = useContactForm();

  return (
    <div className="flex-grow w-full px-4 py-8 overflow-hidden">
      {/* Page Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-3 mb-8 text-center"
      >
        <h1 className="text-text-main dark:text-white text-3xl font-black leading-tight tracking-tight">{t('contactPage.hero.title')}</h1>
        <p className="text-text-secondary dark:text-slate-400 text-base font-normal leading-relaxed">
          {t('contactPage.hero.description')}
        </p>
      </motion.div>

      <div className="flex flex-col gap-8">
        {/* Contact Form First on Mobile */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex flex-col bg-white/70 dark:bg-white/5 rounded-xl shadow-sm border border-secondary/40 dark:border-white/10 overflow-hidden order-1 backdrop-blur"
          aria-labelledby="form-title"
        >
          <div className="px-5 py-5 border-b border-slate-100 dark:border-slate-800">
            <h2 id="form-title" className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">{t('contactPage.form.title')}</h2>
            <p className="text-text-secondary dark:text-slate-400 text-xs mt-1">{t('contactPage.form.description')}</p>
          </div>
          <div className="p-5">
            {isSubmitted ? (
              <div 
                className="flex flex-col items-center justify-center min-h-[250px] text-center gap-4 animate-in fade-in duration-500"
                role="status"
              >
                <div className="size-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">check</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('contactPage.form.success.title')}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs">
                  {t('contactPage.form.success.message')}
                </p>
                <Button 
                  variant="ghost"
                  onClick={resetForm}
                  className="mt-4"
                >
                  {t('contactPage.form.success.button')}
                </Button>
              </div>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <FormField 
                  label={t('contactPage.form.labels.name')} 
                  name="name" 
                  required
                >
                  <input 
                    className="w-full h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-sm text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder={t('contactPage.form.placeholders.name')} 
                    type="text" 
                  />
                </FormField>
                <FormField 
                  label={t('contactPage.form.labels.phone')} 
                  name="phone" 
                  required
                >
                  <input 
                    className="w-full h-11 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-sm text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder={t('contactPage.form.placeholders.phone')} 
                    type="tel" 
                  />
                </FormField>
                <FormField 
                  label={t('contactPage.form.labels.message')} 
                  name="message" 
                  required
                >
                  <textarea 
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-sm text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400" 
                    placeholder={t('contactPage.form.placeholders.message')} 
                    rows={4}
                  ></textarea>
                </FormField>
                <Button 
                  type="submit" 
                  isLoading={isLoading}
                  className="w-full shadow-md h-11"
                >
                  {t('contactPage.form.submit')}
                </Button>
              </form>
            )}
          </div>
        </motion.section>

        {/* Location & Details Second */}
        <div className="flex flex-col gap-6 order-2">
          {/* Info Card */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">{t('contactPage.details.title')}</h2>
            </div>
            <Link 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressQuery)}`}
              external
              className="flex gap-4 px-5 py-4 border-b border-slate-100 dark:border-slate-800 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">location_on</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal">{t('footer.address')}</p>
              </div>
            </Link>
            <Link 
              href={`tel:${SITE.phoneTel}`}
              className="flex gap-4 px-5 py-4 border-b border-slate-100 dark:border-slate-800 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">call</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal">{SITE.phoneDisplay}</p>
                <p className="text-text-secondary dark:text-slate-400 text-xs font-normal leading-normal">{t('contactPage.details.phone.label')}</p>
              </div>
            </Link>
            <Link 
              href={`mailto:${SITE.email}`}
              className="flex gap-4 px-5 py-4 transition-colors"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-10">
                <span className="material-symbols-outlined text-xl" aria-hidden="true">mail</span>
              </div>
              <div className="flex flex-1 flex-col justify-center overflow-hidden">
                <p className="text-text-main dark:text-white text-sm font-bold leading-normal truncate">{SITE.email}</p>
                <p className="text-text-secondary dark:text-slate-400 text-xs font-normal leading-normal">{t('contactPage.details.email.label')}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{t('contactPage.details.email.responseTime')}</p>
              </div>
            </Link>
          </motion.div>

          {/* Hours Card */}
          <motion.section 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-col bg-white/70 dark:bg-white/5 rounded-xl shadow-sm border border-secondary/40 dark:border-white/10 overflow-hidden backdrop-blur"
            aria-labelledby="hours-title"
          >
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 id="hours-title" className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-tight">{t('contactPage.hours.title')}</h2>
            </div>
            <div className="px-5 py-2">
              <div className="flex flex-col">
                {[
                  { label: t('contact.hours.weekdays'), value: '9:00 AM - 6:00 PM' },
                  { label: t('contact.hours.thursday'), value: '2:00 PM - 6:00 PM' },
                  { label: t('contact.hours.saturday'), value: '9:00 AM - 1:00 PM' },
                  { label: t('contact.hours.sunday'), value: t('contact.hours.closed'), highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-xs font-medium leading-normal">{item.label}</p>
                    <p className={`text-xs font-bold leading-normal ${item.highlight ? 'text-red-500' : 'text-text-main dark:text-white'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Map Last */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="w-full h-[250px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative"
          >
            <iframe 
              title={`Map showing ${SITE.addressQuery}`}
              className="w-full h-full border-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.addressQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
