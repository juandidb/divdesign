import { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react';

export type Locale = 'es' | 'en';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  locale: 'es',
  setLocale: () => undefined,
  toggleLocale: () => undefined,
});

export function LanguageProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<Locale>('es');

  useEffect(() => {
    const stored = window.localStorage.getItem('didesign-locale') as Locale | null;
    if (stored) setLocale(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem('didesign-locale', locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === 'es' ? 'en' : 'es')),
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
