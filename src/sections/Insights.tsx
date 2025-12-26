import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Insights() {
  const { t, locale } = useTranslation();
  const insights = t.insights.items;
  const kicker = locale === 'es' ? 'Ideas' : 'Insights';

  return (
    <section id="insights" className="section-shell py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader
          title={t.insights.title}
          subtitle={t.insights.subtitle}
          align="center"
          kicker={kicker}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item, idx) => (
            <motion.article
              key={item.title}
              className="insight-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="pill">{item.pill}</span>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm text-muted dark:text-white/70">{item.description}</p>
              <motion.a
                whileHover={{ x: 4 }}
                href={item.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                {item.linkLabel}
                <ArrowUpRightIcon className="h-4 w-4" />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
