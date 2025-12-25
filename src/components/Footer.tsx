import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell flex flex-col gap-4 py-10 text-sm text-muted dark:text-white/60">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink dark:text-mist">DD</span>
          <span>Frontend · UX/UI</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="#portfolio" className="hover:text-ink dark:hover:text-white">
            {t.nav.work}
          </a>
          <a href="#contact" className="hover:text-ink dark:hover:text-white">
            {t.nav.contact}
          </a>
        </div>
      </div>
      <p>© {year} {'<DivDesign>'}. Buenos Aires.</p>
    </footer>
  );
}
