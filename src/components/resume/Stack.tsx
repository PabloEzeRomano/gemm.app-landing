'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Stack = () => {
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

  const categories = [
    {
      name: t('resume.stack.frontend'),
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      name: t('resume.stack.backend'),
      technologies: ['Node.js', 'Python', 'Laravel', 'PostgreSQL', 'Redis']
    },
    {
      name: t('resume.stack.devops'),
      technologies: ['Docker', 'AWS', 'GitHub Actions', 'CI/CD']
    },
    {
      name: t('resume.stack.tools'),
      technologies: ['Git', 'PostHog', 'Datadog', 'Figma', 'Jira', 'Slack']
    }
  ];

  return (
    <section id="stack" className="py-16 px-6 bg-[#1a1a2e]">
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
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#b48eff] mb-12 text-center"
        >
          {t('resume.stack.title')}
        </motion.h2>
        <motion.div
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a2e] p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold text-[#64ffda] mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};