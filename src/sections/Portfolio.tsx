import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Portfolio() {
  const { t } = useTranslation();
  const projects = [...t.work.items, ...t.work.items];

  return (
    <section id="portfolio" className="section-shell py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader title={t.work.title} subtitle={t.work.subtitle} kicker={t.nav.work} />
        <div className="portfolio-slider">
          <div className="portfolio-track">
            {projects.map((item, idx) => (
              <motion.article
                key={`${item.title}-${idx}`}
                className="group relative min-h-[360px] w-full flex-shrink-0 basis-[85%] overflow-hidden rounded-3xl border border-white/10 shadow-card sm:basis-[55%] lg:basis-[33%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % t.work.items.length) * 0.05 }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <img
                  src={item.image}
                  alt={`${item.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/90 dark:from-ink/30 dark:via-ink/80" />
                <div className="relative flex h-full flex-col justify-between gap-6 p-6 text-white">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/70">{item.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight">{item.title}</h3>
                    </div>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {item.metric}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-white/85">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag border-white/20 bg-white/10 text-white/80 backdrop-blur">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.link}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent"
                    >
                      {item.linkLabel}
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
