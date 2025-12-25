import { motion } from 'framer-motion';
import { BoltIcon, SparklesIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

const icons = [SparklesIcon, BoltIcon, CodeBracketIcon];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-shell py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader title={t.services.title} subtitle={t.services.subtitle} kicker={t.nav.services} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.services.items.map((service, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={service.title}
                className="card-surface h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white dark:bg-mist dark:text-ink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-muted dark:bg-white/10 dark:text-white/60">
                    {idx === 0 ? 'Discovery' : idx === 1 ? 'UI' : 'Frontend'}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-muted dark:text-white/60">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
