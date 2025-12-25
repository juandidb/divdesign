import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="section-shell py-20">
      <div className="flex flex-col gap-10">
        <SectionHeader title={t.testimonials.title} subtitle={t.testimonials.subtitle} kicker={t.nav.testimonials} />
        <div className="grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              className="card-surface h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-sm text-muted dark:text-white/70">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="text-base font-semibold">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wide text-muted dark:text-white/60">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
