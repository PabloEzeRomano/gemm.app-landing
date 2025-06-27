'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhatIDo = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#103237] text-[#eee3d0] pt-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-lg space-y-4"
      >
        <p className="text-3xl text-[#dc3925] font-bold">
          {t('whatido.line1')}
        </p>
        <p className="text-xl text-left">{t('whatido.line1.2')}</p>
        <p className="text-left">{t('whatido.line2')}</p>
        <p className="text-left">{t('whatido.line3')}</p>
      </motion.div>
    </section>
  );
};
