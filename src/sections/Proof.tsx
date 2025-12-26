import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export function Proof() {
  const { t } = useTranslation();
  const { label, title, subtitle, brands, metrics } = t.proof;
  const marqueeItems = [...brands, ...brands];

  return (
    <section className="relative py-16" aria-labelledby="proof-heading">
      <div className="section-shell flex flex-col gap-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted dark:text-white/50">{label}</p>
            <h2 id="proof-heading" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base text-muted dark:text-white/60">{subtitle}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/60 shadow-card backdrop-blur-xl dark:border-white/5 dark:bg-white/5">
            <div className="brand-marquee" aria-hidden="true">
              <div className="brand-marquee-track">
                {marqueeItems.map((brand, idx) => (
                  <div key={`${brand.name}-${idx}`} className="brand-pill">
                    <span className="text-sm font-semibold text-ink dark:text-mist">{brand.name}</span>
                    <span className="text-xs text-muted dark:text-white/60">{brand.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              className="glass-panel"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-4xl font-semibold tracking-tight text-ink dark:text-mist">{metric.value}</p>
              <p className="mt-2 text-sm text-muted dark:text-white/60">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
