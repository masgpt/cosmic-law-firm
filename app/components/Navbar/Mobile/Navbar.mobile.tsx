'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from '@/components/ui/Link';
import ButtonLink from '@/components/ui/ButtonLink';
import LanguageToggle from '@/components/LanguageToggle';
import { useNavbarLogic } from '../Shared/navbar.hooks';
import { useNavbarConstants } from '../Shared/navbar.constants';
import { SITE } from '@/lib/site';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NavbarMobile: React.FC = () => {
  const { t } = useTranslation();
  const { isActive } = useNavbarLogic();
  const { practiceAreaLinks, aboutLinks, lng } = useNavbarConstants();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigation = (path: string) => {
    closeMenu();
    router.push(path);
  };

  const getMobileNavButtonClass = (path: string, size: 'lg' | 'sm' = 'lg') => {
    const isActivePath = isActive(path);
    const baseStyles =
      'w-full text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary';
    const sizeStyles =
      size === 'lg'
        ? 'text-lg font-black px-4 py-3 rounded-2xl'
        : 'text-sm font-bold px-3 py-2 rounded-xl';
    const activeStyles =
      size === 'lg'
        ? 'text-secondary bg-white/20 border border-white/30'
        : 'text-secondary bg-white/15 border border-white/20';
    const inactiveStyles = 'text-white/90 bg-white/5 border border-white/10 hover:bg-white/15';

    return `${baseStyles} ${sizeStyles} ${isActivePath ? activeStyles : inactiveStyles}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur-md transition-colors duration-300 lg:hidden text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to={`/${lng}/`} className="flex items-center gap-2 group shrink-0 focus:ring-offset-4">
            <div className="w-10 h-10 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
              <Image
                src="/Cosmic_Logos-02.png"
                alt={`${SITE.name} logo`}
                width={40}
                height={40}
                sizes="40px"
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-tight text-white leading-none uppercase">
                <span className="text-secondary">{SITE.name.split(' ')[0]}</span>{' '}
                <span>{SITE.name.split(' ').slice(1).join(' ')}</span>
              </span>
              <span className="text-[8px] text-white/90 font-bold uppercase tracking-wider mt-0.5 leading-none">
                {SITE.nameSub}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              className="p-2 text-white/90 hover:text-white focus:ring-2 focus:ring-secondary/40 rounded-lg"
              onClick={toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-t border-white/10 bg-primary overflow-hidden"
          >
            <div className="p-6 overflow-y-auto max-h-[calc(100vh-64px)]">
              <nav className="flex flex-col space-y-6" aria-label="Mobile navigation">
                <button
                  type="button"
                  onClick={() => handleNavigation(`/${lng}/`)}
                  className={getMobileNavButtonClass(`/${lng}/`, 'lg')}
                >
                  {t('nav.home')}
                </button>

                <div className="flex flex-col space-y-3">
                  <p className="text-xs font-black text-secondary uppercase tracking-[0.2em]">{t('nav.practiceAreas')}</p>
                  <div className="flex flex-col space-y-3 pl-4 border-l-2 border-white/15">
                    <button
                      type="button"
                      onClick={() => handleNavigation(`/${lng}/services`)}
                      className={getMobileNavButtonClass(`/${lng}/services`, 'sm')}
                    >
                      View all services
                    </button>
                    {practiceAreaLinks.map((link) => (
                      <button
                        key={link.path}
                        type="button"
                        onClick={() => handleNavigation(link.path)}
                        className={getMobileNavButtonClass(link.path, 'sm')}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <p className="text-xs font-black text-secondary uppercase tracking-[0.2em]">{t('nav.about')}</p>
                  <div className="flex flex-col space-y-3 pl-4 border-l-2 border-white/15">
                    {aboutLinks.map((link) => (
                      <button
                        key={link.path}
                        type="button"
                        onClick={() => handleNavigation(link.path)}
                        className={getMobileNavButtonClass(link.path, 'sm')}
                      >
                        {link.name}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigation(`/${lng}/insights`)}
                  className={getMobileNavButtonClass(`/${lng}/insights`, 'lg')}
                >
                  {t('nav.insights')}
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigation(`/${lng}/reviews`)}
                  className={getMobileNavButtonClass(`/${lng}/reviews`, 'lg')}
                >
                  {t('nav.testimonials')}
                </button>

                  <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <Link
                        href={`mailto:${SITE.email}`}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 text-white font-bold text-sm"
                      >
                        <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                          mail
                        </span>
                        <span className="truncate">{SITE.email}</span>
                      </Link>
                      <Link
                        href={`tel:${SITE.phoneTel}`}
                        onClick={toggleMenu}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/10 text-white font-bold text-sm"
                      >
                        <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                          call
                        </span>
                        <span>{SITE.phoneDisplay}</span>
                      </Link>
                    </div>

                    <ButtonLink
                      href={`/${lng}/contact`}
                      tone="light"
                      size="lg"
                      className="w-full rounded-2xl h-14 text-base capitalize tracking-tight shadow-xl shadow-black/10 active:scale-[0.98] transition-transform focus:ring-offset-2 focus:ring-offset-primary"
                      onClick={closeMenu}
                    >
                      <span className="mr-2 material-symbols-outlined text-[20px]" aria-hidden="true">
                        mail
                      </span>
                      {t('nav.contact')}
                    </ButtonLink>
                  </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarMobile;
