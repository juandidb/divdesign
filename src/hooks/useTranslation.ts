import { useContext } from 'react';
import { LanguageContext, Locale } from '../context/LanguageContext';
import { copy } from '../data/copy';

export function useTranslation() {
  const { locale, setLocale, toggleLocale } = useContext(LanguageContext);
  const t = copy[locale];

  const switchTo = (next: Locale) => setLocale(next);

  return { t, locale, toggleLocale, switchTo };
}
