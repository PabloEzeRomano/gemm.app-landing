'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const manifestoStatements = [
  {
    key: 'manifesto.line1'
  },
  {
    key: 'manifesto.line2'
  },
  {
    key: 'manifesto.line3'
  },
  {
    key: 'manifesto.line4'
  }
];

export const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0f0f0f] text-[#eee3d0] py-20 px-6">
      <div className="max-w-2xl mx-auto text-lg space-y-3">
        {manifestoStatements.map((statement, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="font-medium text-[#eee3d0]"
          >
            {`✺ ${t(statement.key)}`}
          </motion.p>
        ))}
      </div>
    </section>
  );
}