'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#EEE3D0] flex flex-col justify-center items-center p-20">
      <div className="max-w-3xl text-lg space-y-6">
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
          href="/resume/Pablo-Romano-Resume.pdf"
          download
          className="inline-block bg-[#b3dc75]/70 text-[#0f0f0f] px-8 py-4 rounded-2xl text-lg font-bold  hover:bg-[#b3dc75] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {t('about.experience.download')}
        </motion.a>
      </div>
    </section>
  );
};
