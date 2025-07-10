'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { trackButtonClick, trackSectionView } from '@/utils/posthog';

export const Hero = () => {
  const { t } = useLanguage();

  // Track hero section view
  React.useEffect(() => {
    trackSectionView('hero');
  }, []);

  return (
    <section id="main" className="bg-[#eee3d0] min-h-screen flex flex-col justify-center items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold uppercase tracking-tight mt-10 md:mt-0 text-[#dc3925] text-center"
      >
        {t('hero.title')}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight text-[#dc3925] text-center"
      >
        {t('hero.title2')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-2xl max-w-xl mb-6 text-[#103237] text-center"
      >
        {t('hero.subtitle2')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-x-4"
      >
        <a
          href="#portfolio"
          onClick={() => trackButtonClick('portfolio', 'hero')}
          className="bg-[#0f0f0f] text-[#eee3d0] px-6 py-3 rounded-2xl text-lg hover:bg-[#dc3925] transition-colors duration-300 inline-block"
        >
          {t('hero.portfolio')}
        </a>

        <a
          href="#contact"
          onClick={() => trackButtonClick('contact', 'hero')}
          className="border-2 border-[#0f0f0f] px-6 py-3 rounded-2xl text-lg hover:bg-[#0f0f0f] hover:text-[#eee3d0] transition-colors duration-300 inline-block"
        >
          {t('hero.contact')}
        </a>
      </motion.div>
    </section>
  );
};
