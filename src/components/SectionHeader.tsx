import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  kicker?: string;
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ kicker, title, subtitle, align = 'left' }: Props) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignment} max-w-3xl`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {kicker && <span className="tag">{kicker}</span>}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="text-base text-muted dark:text-white/60 sm:text-lg">{subtitle}</p>
    </motion.div>
  );
}
