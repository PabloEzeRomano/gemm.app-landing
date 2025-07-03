'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguagesAndHighlights = () => {
  const { t } = useLanguage();

  const glowVariants = {
    animate: {
      opacity: 1,
      y: 0,
      textShadow: [
        '0 0 10px #b48eff, 0 0 20px #b48eff, 0 0 30px #b48eff',
        '0 0 20px #b48eff, 0 0 30px #b48eff, 0 0 40px #b48eff',
        '0 0 10px #b48eff, 0 0 20px #b48eff, 0 0 30px #b48eff',
      ],
    },
  };

  const languages = [
    { name: t('resume.languages.spanish'), level: t('resume.languages.native') },
    { name: t('resume.languages.english'), level: t('resume.languages.advanced') },
    { name: t('resume.languages.portuguese'), level: t('resume.languages.basic') },
    { name: t('resume.languages.italian'), level: t('resume.languages.basic') }
  ];

  const highlights = [
    t('resume.languages.highlight1'),
    t('resume.languages.highlight2'),
    t('resume.languages.highlight3'),
    t('resume.languages.highlight4'),
    t('resume.languages.highlight5')
  ];

  return (
    <section id="languages-and-highlights" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          variants={glowVariants}
          animate="animate"
          transition={{
            duration: 0.8,
            textShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="text-3xl md:text-4xl font-bold text-[#b48eff] mb-12 text-center"
        >
          {t('resume.languages.title')}
        </motion.h2>
        <motion.div
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">{t('resume.languages.languages')}</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-[#e0e0ff]">{lang.name}</span>
                  <span className="text-[#b48eff] font-semibold">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-[#64ffda] mb-4">{t('resume.languages.highlights')}</h3>
            <ul className="space-y-2">
              {highlights.map((highlight, index) => (
                <li key={index} className="text-[#e0e0ff] flex items-start">
                  <span className="text-[#64ffda] mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};