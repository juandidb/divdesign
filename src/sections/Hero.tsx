import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../hooks/useTranslation';

const heroVideo = `${import.meta.env.BASE_URL}hero-dark.mp4`;
const heroPoster = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80';

export function Hero() {
  const { t, locale } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const stats =
    locale === 'es'
      ? [
          { value: '+10', label: 'años lanzando productos' },
          { value: '120+', label: 'entregables shippeados' },
          { value: 'AA', label: 'accesibilidad como mínimo' },
          { value: '95+', label: 'performance Lighthouse' },
        ]
      : [
          { value: '10+', label: 'years shipping products' },
          { value: '120+', label: 'deliverables launched' },
          { value: 'AA', label: 'accessibility baseline' },
          { value: '95+', label: 'Lighthouse performance' },
        ];

  const commitments =
    locale === 'es'
      ? ['Discovery express en 72h', 'Diseño + dev en el mismo sprint', 'Trabajo directo con founders']
      : ['Discovery sprint within 72h', 'Design + dev in the same sprint', 'Direct line with founders'];

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

  const videoMeta =
    locale === 'es'
      ? {
          label: 'Sesión en vivo',
          title: 'UI kit + demo nocturna',
          bullets: ['Loop de 12s', 'Render 4K', 'Grading frío con neón'],
          note: 'Grabado en mi setup real para transmitir foco premium.',
        }
      : {
          label: 'Live session',
          title: 'Nocturnal UI kit walkthrough',
          bullets: ['12s seamless loop', '4K render', 'Cool neon grading'],
          note: 'Captured in my real setup to keep the premium vibe.',
        };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const handleLoaded = () => {
      video.currentTime = 0.05;
      void video.play();
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.2) {
        video.currentTime = 0.05;
      }
    };

    video.addEventListener('loadeddata', handleLoaded);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <header id="hero" className="hero-section -mt-16 md:-mt-20 lg:-mt-24">
      <div className="hero-video-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-scrim" />
      </div>
      <div className="hero-gradient" aria-hidden="true" />
      <div className="section-shell w-full py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap items-center gap-3">
              <span className="tag md:whitespace-nowrap">{t.hero.kicker}</span>
              <div className="live-pill">
                <span className="live-dot" />
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
              <motion.a whileHover={{ y: -2 }} href="#portfolio" className="btn-ghost">
                <PlayIcon className="h-4 w-4" />
                {t.hero.ctaSecondary}
              </motion.a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="stat-card">
                  <p className="text-2xl font-semibold text-ink dark:text-mist">{stat.value}</p>
                  <p className="text-xs uppercase tracking-tight text-muted dark:text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {commitments.map((commitment) => (
                <span key={commitment} className="commitment-pill">
                  {commitment}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-panel hero-meta-card">
              <div className="flex items-center justify-between gap-3">
                <span className="pill text-[0.6rem] tracking-[0.35em] text-ink/70 dark:text-white/70">
                  {videoMeta.label}
                </span>
                <span className="text-xs font-semibold text-ink/70 dark:text-white/60">4K</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-ink dark:text-mist">{videoMeta.title}</h3>
              <ul className="hero-meta-list">
                {videoMeta.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="hero-meta-note">{videoMeta.note}</p>
            </div>
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