import { motion } from 'framer-motion';
import { ArrowDownRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

export function Hero() {
  const { t, locale } = useTranslation();
  const stats =
    locale === 'es'
      ? ['+10 años', '+120 entregables', 'AA accesibilidad', '95+ performance']
      : ['10+ years', '120+ deliveries', 'AA accessibility', '95+ performance'];

  const highlight =
    locale === 'es'
      ? {
          label: 'Caso destacado',
          subtitle: 'Rediseño, pricing y flujo de demo para un SaaS B2B.',
          deliverablesLabel: 'Entregables',
          deliverables: 'Flujos UX, UI kit, React',
          timelineLabel: 'Plazos',
          timeline: '4 semanas',
          availability: 'Disponible para proyectos selectos',
        }
      : {
          label: 'Spotlight',
          subtitle: 'Redesign, pricing, and demo flow for a B2B SaaS.',
          deliverablesLabel: 'Deliverables',
          deliverables: 'UX flows, UI kit, React build',
          timelineLabel: 'Timeline',
          timeline: '4 weeks',
          availability: 'Available for select projects',
        };

  return (
    <header id="hero" className="relative -mt-24 flex min-h-screen w-full items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white/40 to-transparent dark:from-stone/60 dark:via-ink/60" />
      <div className="section-shell w-full py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag md:whitespace-nowrap">{t.hero.kicker}</span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted dark:text-white/60 md:flex-nowrap md:whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]" />
              {t.hero.badge}
            </div>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted dark:text-white/70">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a whileHover={{ y: -2 }} href="#contact" className="btn-primary">
              {t.hero.ctaPrimary}
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#portfolio"
              className="btn-ghost"
            >
              <PlayIcon className="h-4 w-4" />
              {t.hero.ctaSecondary}
            </motion.a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-white/10 bg-white/60 p-4 text-sm font-semibold text-ink shadow-card dark:bg-white/5 dark:text-mist">
                {stat}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="card-surface relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted dark:text-white/50">{highlight.label}</p>
                <h3 className="mt-2 text-2xl font-semibold">SaaS Launchpad</h3>
                <p className="mt-2 text-sm text-muted dark:text-white/60">{highlight.subtitle}</p>
              </div>
              <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white dark:bg-mist dark:text-ink">
                +42% leads
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-muted dark:text-white/60">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted/70">{highlight.deliverablesLabel}</p>
                <p>{highlight.deliverables}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted/70">{highlight.timelineLabel}</p>
                <p>{highlight.timeline}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/70 p-4 text-sm font-semibold text-ink dark:bg-white/5 dark:text-mist">
              <span>{highlight.availability}</span>
              <ArrowDownRightIcon className="h-5 w-5" />
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </header>
  );
}