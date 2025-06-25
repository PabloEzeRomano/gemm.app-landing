'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#103237] text-[#eee3d0] py-20 px-6">
      <div className="max-w-2xl mx-auto text-lg space-y-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="font-medium text-[#eee3d0]"
          >
            {`✺ ${t(`manifesto.line${index + 1}`)}`}
          </motion.p>
        ))}
      </div>
    </section>
  );
}