import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Placeholder: integrate with your backend or automation tool of choice.
    console.log('Lead payload', payload);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell py-20">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} kicker={t.nav.contact} />

        <motion.form
          onSubmit={handleSubmit}
          className="card-surface grid gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.form.name}
            <input name="name" type="text" required aria-label={t.contact.form.name} />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.form.email}
            <input name="email" type="email" required aria-label={t.contact.form.email} />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.form.project}
            <textarea name="project" rows={4} required aria-label={t.contact.form.project} />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            {t.contact.form.budget}
            <select
              name="budget"
              required
              className="w-full rounded-2xl border border-white/20 bg-white/70 px-4 py-3 text-sm text-ink shadow-inner transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 dark:border-white/10 dark:bg-white/5 dark:text-mist"
              defaultValue=""
              aria-label={t.contact.form.budget}
            >
              <option value="" disabled hidden>
                {t.contact.form.budget}
              </option>
              {t.contact.budgetOptions.map((option) => (
                <option key={option} value={option} className="bg-white text-ink">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              className="btn-primary"
            >
              {t.contact.form.submit}
            </motion.button>
            {submitted && (
              <span className="text-sm text-accent" role="status" aria-live="polite">
                {t.contact.form.success}
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
