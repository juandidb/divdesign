import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from '../hooks/useTranslation';

export function Faq() {
  const { t, locale } = useTranslation();
  const items = t.faq.items;
  const [openIndex, setOpenIndex] = useState(0);
  const kicker = locale === 'es' ? 'Preguntas' : 'FAQ';

  return (
    <section className="section-shell py-20" aria-labelledby="faq-heading">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          kicker={kicker}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
          align="left"
        />
        <div className="flex flex-col divide-y divide-white/10 rounded-[2rem] border border-white/10 bg-white/60 shadow-card backdrop-blur-lg dark:divide-white/5 dark:border-white/5 dark:bg-white/5">
          {items.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-base font-semibold text-ink dark:text-mist">{item.question}</p>
                  </div>
                  <ChevronDownIcon
                    className={`h-5 w-5 transition ${isOpen ? 'rotate-180 text-accent' : 'text-muted dark:text-white/50'}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-sm text-muted dark:text-white/60"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
