import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/outline';
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
        <div className="flex flex-col gap-10">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
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
            <div className="mt-10 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value} className="stat-card">
                  <p className="text-2xl font-semibold text-ink dark:text-mist">{stat.value}</p>
                  <p className="text-xs uppercase tracking-tight text-muted dark:text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {commitments.map((commitment) => (
                <span key={commitment} className="commitment-pill">
                  {commitment}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}