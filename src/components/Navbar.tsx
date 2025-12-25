import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, LanguageIcon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';

const navItems = [
  { href: '#hero', key: 'hero' },
  { href: '#services', key: 'services' },
  { href: '#portfolio', key: 'work' },
  { href: '#process', key: 'process' },
  { href: '#testimonials', key: 'testimonials' },
  { href: '#contact', key: 'contact' },
];

export function Navbar() {
  const { t, toggleLocale, locale } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition backdrop-blur-xl',
        isScrolled ? 'border-b border-white/10 bg-white/60 dark:bg-ink/70' : 'bg-white/40 dark:bg-ink/50',
      )}
    >
      <div className="section-shell relative flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            className="transition hover:opacity-80 dark:hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <img
              src={logoSrc}
              alt="<DivDesign>"
              className="h-8 w-auto object-contain transition dark:brightness-200 dark:invert"
            />
          </a>
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/70 px-2 py-1 shadow-card backdrop-blur-lg dark:bg-white/5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-semibold text-muted transition hover:text-ink dark:text-white/60 dark:hover:text-white"
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Cambiar idioma"
            onClick={toggleLocale}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/80 text-sm font-semibold text-ink shadow-card transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-white/10 dark:text-mist"
          >
            <LanguageIcon className="h-5 w-5" />
            <span className="sr-only">{locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}</span>
          </button>

          <button
            type="button"
            aria-label="Alternar tema"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/80 text-sm font-semibold text-ink shadow-card transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-white/10 dark:text-mist"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </button>

          <motion.a
            whileHover={{ y: -2 }}
            href="#contact"
            className="btn-primary hidden md:inline-flex"
          >
            {t.nav.cta}
          </motion.a>

          <button
            type="button"
            aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/80 text-sm font-semibold text-ink shadow-card transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-white/10 dark:text-mist md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute left-0 right-0 top-[calc(100%+12px)] md:hidden"
            >
              <div className="card-surface flex flex-col gap-2 bg-white/90 dark:bg-ink/90">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-3 py-2 text-sm font-semibold text-ink transition hover:bg-white/70 dark:text-mist dark:hover:bg-white/10"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </a>
                ))}
                <motion.a
                  whileHover={{ y: -1 }}
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  {t.nav.cta}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
