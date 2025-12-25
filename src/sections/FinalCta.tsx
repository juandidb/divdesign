import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

export function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="section-shell py-16">
      <motion.div
        className="card-surface flex flex-col items-start gap-6 bg-gradient-to-r from-ink via-stone to-accent/60 text-mist dark:from-mist dark:via-mist/80 dark:to-ink"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="text-2xl font-semibold sm:text-3xl">{t.cta.title}</h3>
        <p className="max-w-2xl text-base text-white/80">{t.cta.subtitle}</p>
        <motion.a
          whileHover={{ x: 4 }}
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-ink shadow-lg shadow-ink/25"
        >
          {t.cta.button}
          <ArrowRightIcon className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
