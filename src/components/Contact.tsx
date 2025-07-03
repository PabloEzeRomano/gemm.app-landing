'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <section id="contact" className="py-20 px-6 text-center bg-[#103237]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-[#dc3925]">
          {t('contact.title')}
        </h2>
        <motion.a
          href={`mailto:${email}`}
          className="inline-block bg-[#b3dc75]/70 text-[#0f0f0f] px-8 py-4 rounded-2xl text-lg font-bold  hover:bg-[#b3dc75] transition-colors duration-300"
          whileHover={{ scale: 1.15 }}
        >
          {t('contact.button')}
        </motion.a>
      </motion.div>
    </section>
  );
}
