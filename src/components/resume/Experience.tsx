'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Experience = () => {
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

  const experiences = [
    {
      company: t('resume.experience.numi.company'),
      role: t('resume.experience.numi.role'),
      period: t('resume.experience.numi.period'),
      achievements: [
        t('resume.experience.numi.achievement1'),
        t('resume.experience.numi.achievement2'),
        t('resume.experience.numi.achievement3'),
        t('resume.experience.numi.achievement4'),
      ],
    },
    {
      company: t('resume.experience.blockfi.company'),
      role: t('resume.experience.blockfi.role'),
      period: t('resume.experience.blockfi.period'),
      achievements: [
        t('resume.experience.blockfi.achievement1'),
        t('resume.experience.blockfi.achievement2'),
        t('resume.experience.blockfi.achievement3'),
        t('resume.experience.blockfi.achievement4'),
      ],
    },
    {
      company: t('resume.experience.phinx.company'),
      role: t('resume.experience.phinx.role'),
      period: t('resume.experience.phinx.period'),
      achievements: [
        t('resume.experience.phinx.achievement1'),
        t('resume.experience.phinx.achievement2'),
        t('resume.experience.phinx.achievement3'),
      ],
    },
    {
      company: t('resume.experience.mural.company'),
      role: t('resume.experience.mural.role'),
      period: t('resume.experience.mural.period'),
      achievements: [
        t('resume.experience.mural.achievement1'),
        t('resume.experience.mural.achievement2'),
        t('resume.experience.mural.achievement3'),
      ],
    },
    {
      company: t('resume.experience.quadminds.company'),
      role: t('resume.experience.quadminds.role'),
      period: t('resume.experience.quadminds.period'),
      achievements: [
        t('resume.experience.quadminds.achievement1'),
        t('resume.experience.quadminds.achievement2'),
      ],
    },
    {
      company: t('resume.experience.tekii.company'),
      role: t('resume.experience.tekii.role'),
      period: t('resume.experience.tekii.period'),
      achievements: [
        t('resume.experience.tekii.achievement1'),
        t('resume.experience.tekii.achievement2'),
      ],
    },
    {
      company: t('resume.experience.globant.company'),
      role: t('resume.experience.globant.role'),
      period: t('resume.experience.globant.period'),
      achievements: [
        t('resume.experience.globant.achievement1'),
        t('resume.experience.globant.achievement2'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6">
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
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#b48eff] mb-12 text-center"
        >
          {t('resume.experience.title')}
        </motion.h2>
        <motion.div
          className="space-y-8"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f0f1c] p-6 rounded-xl border border-[#64ffda]/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#64ffda]">
                    {exp.company} · {exp.role} ({exp.period})
                  </h3>
                </div>
              </div>
              <ul className="list-disc list-inside text-base ml-4 space-y-1">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-[#e0e0ff]">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
