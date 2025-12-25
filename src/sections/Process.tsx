import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="section-shell py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader title={t.process.title} subtitle={t.process.subtitle} kicker={t.nav.process} />
        <div className="grid gap-4 md:grid-cols-2">
          {t.process.steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="card-surface"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-sm font-semibold text-white dark:bg-mist dark:text-ink">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted dark:text-white/60">{step.duration}</p>
                  </div>
                </div>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_8px_rgba(124,58,237,0.18)]" />
              </div>
              <p className="mt-4 text-sm text-muted dark:text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
