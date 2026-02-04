import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/ui/Button';
import FormField from '../../../components/ui/FormField';
import Link from '../../../components/ui/Link';
import { useContactForm } from '../Shared/contact.hooks';
import { SITE } from '../../../lib/site';

const ContactDesktop: React.FC = () => {
  const { t } = useTranslation();
  const { isSubmitted, isLoading, handleSubmit, resetForm } = useContactForm();

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-8 py-12 overflow-hidden">
      {/* Page Heading */}
      <motion.div 
        initial="initial"
        animate="animate"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="flex flex-col gap-3 mb-10"
      >
        <motion.h1 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-text-main dark:text-white text-5xl font-black leading-tight tracking-tight"
        >
          {t('contactPage.hero.title')}
        </motion.h1>
        <motion.p 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-text-secondary dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl"
        >
          {t('contactPage.hero.description')}
        </motion.p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-12">
        {/* Left Column: Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="col-span-5 flex flex-col gap-8"
        >
          {/* Location & Contact Info */}
          <div className="flex flex-col bg-white/70 dark:bg-white/5 rounded-xl shadow-sm border border-secondary/40 dark:border-white/10 overflow-hidden backdrop-blur">
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.details.title')}</h2>
            </div>
            {/* Address Item */}
            <Link 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.addressQuery)}`}
              external
              className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">location_on</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">{t('footer.address')}</p>
              </div>
            </Link>
            {/* Phone Item */}
            <Link 
              href={`tel:${SITE.phoneTel}`}
              className="flex gap-4 px-6 py-5 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">call</span>
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">
                  {SITE.phoneDisplay}
                </p>
                <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">{t('contactPage.details.phone.label')}</p>
              </div>
            </Link>
            {/* Email Item */}
            <Link 
              href={`mailto:${SITE.email}`}
              className="flex gap-4 px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            >
              <div className="text-text-main dark:text-slate-300 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl" aria-hidden="true">mail</span>
              </div>
            <div className="flex flex-1 flex-col justify-center overflow-hidden">
              <p className="text-text-main dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors truncate">
                {SITE.email}
              </p>
              <p className="text-text-secondary dark:text-slate-400 text-sm font-normal leading-normal">{t('contactPage.details.email.label')}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">{t('contactPage.details.email.responseTime')}</p>
            </div>
          </Link>
          </div>

          {/* Hours */}
          <section 
            className="flex flex-col bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden"
            aria-labelledby="hours-title"
          >
            <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
              <h2 id="hours-title" className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.hours.title')}</h2>
            </div>
            <div className="px-6 py-2">
              <div className="flex flex-col">
                {[
                  { label: t('contact.hours.weekdays'), value: '9:00 AM - 6:00 PM' },
                  { label: t('contact.hours.thursday'), value: '2:00 PM - 6:00 PM' },
                  { label: t('contact.hours.saturday'), value: '9:00 AM - 1:00 PM' },
                  { label: t('contact.hours.sunday'), value: t('contact.hours.closed'), highlight: true },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between border-b border-slate-100 dark:border-slate-800 py-4 last:border-0">
                    <p className="text-text-secondary dark:text-slate-400 text-sm font-medium leading-normal">{item.label}</p>
                    <p className={`text-sm font-bold leading-normal ${item.highlight ? 'text-red-500' : 'text-text-main dark:text-white'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>

        {/* Right Column: Map & Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="col-span-7 flex flex-col gap-8 h-full"
        >
          {/* Map Embed */}
          <div className="w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm relative">
            <iframe 
              title={`Map showing ${SITE.addressQuery}`}
              className="w-full h-full border-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.addressQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <section 
            className="flex flex-col bg-white/70 dark:bg-white/5 rounded-xl shadow-sm border border-secondary/40 dark:border-white/10 overflow-hidden flex-1 backdrop-blur"
            aria-labelledby="form-title"
          >
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <h2 id="form-title" className="text-text-main dark:text-white text-[22px] font-bold leading-tight tracking-tight">{t('contactPage.form.title')}</h2>
              <p className="text-text-secondary dark:text-slate-400 text-sm mt-1">{t('contactPage.form.description')}</p>
            </div>
            <div className="p-8">
              {isSubmitted ? (
                <div 
                  className="flex flex-col items-center justify-center h-full min-h-[300px] text-center gap-4 animate-in fade-in duration-500"
                  role="status"
                >
                  <div className="size-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                    <span className="material-symbols-outlined text-4xl" aria-hidden="true">check</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t('contactPage.form.success.title')}</h3>
                  <p className="text-base text-slate-600 dark:text-slate-400 max-w-sm">
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
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <FormField 
                      label={t('contactPage.form.labels.name')} 
                      name="name" 
                      required
                    >
                      <input 
                        className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
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
                        className="w-full h-12 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 px-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                        placeholder={t('contactPage.form.placeholders.phone')} 
                        type="tel" 
                      />
                    </FormField>
                  </div>
                  <FormField 
                    label={t('contactPage.form.labels.message')} 
                    name="message" 
                    required
                  >
                    <textarea 
                      className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-4 text-base text-text-main dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-400" 
                      placeholder={t('contactPage.form.placeholders.message')} 
                      rows={4}
                    ></textarea>
                  </FormField>
                  <Button 
                    type="submit" 
                    isLoading={isLoading}
                    className="w-full shadow-md h-12"
                  >
                    {t('contactPage.form.submit')}
                  </Button>
                </form>
              )}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactDesktop;
