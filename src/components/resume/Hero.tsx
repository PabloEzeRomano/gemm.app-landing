'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { glowVariantsViolet } from '@/utils/glowVariants';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="resume-main" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        variants={glowVariantsViolet}
        animate="animate"
        transition={{
          duration: 0.8,
          textShadow: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-[#b48eff] mb-4"
      >
        {t('resume.hero.name')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl text-[#64ffda] mb-2"
      >
        {t('resume.hero.title')}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-base md:text-lg max-w-xl"
      >
        {t('resume.hero.subtitle')}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-4 mt-6"
      >
        <Link
          href="/"
          className="bg-[#64ffda] text-[#0f0f1c] px-5 py-2 rounded-xl hover:bg-[#b48eff] transition"
        >
          {t('resume.hero.gemmAppsButton')}
        </Link>
        <a
          href="#contact"
          className="border-2 border-[#64ffda] text-[#64ffda] px-5 py-2 rounded-xl hover:bg-[#64ffda] hover:text-[#0f0f1c] transition"
        >
          {t('resume.hero.contactButton')}
        </a>
      </motion.div>
    </section>
  );
};
