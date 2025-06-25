'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight text-[#dc3925]"
      >
        {t('hero.title')}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-2xl max-w-xl mb-6 text-[#103237] text-center"
      >
        {t('hero.subtitle')}
      </motion.p>

      <div className="max-w-3xl text-lg space-y-6 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#dc3925] mb-4"
          >
            {t('about.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('about.paragraph1')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t('about.paragraph2')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {t('about.paragraph3')}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="/Pablo-Romano-Resume.pdf"
            download
            className="inline-block bg-[#b3dc75]/70 text-[#0f0f0f] px-8 py-4 rounded-2xl text-lg font-bold  hover:bg-[#b3dc75] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {t('about.experience.download')}
          </motion.a>
        </div>
    </section>
  );
}