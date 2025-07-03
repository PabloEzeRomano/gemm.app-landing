'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

export const Projects = () => {
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

  const projects = [
    {
      name: t('resume.projects.algorhythm.name'),
      description: t('resume.projects.algorhythm.description'),
      tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
      image: '/portfolio/algo-rythm.png'
    },
    {
      name: t('resume.projects.barrio.name'),
      description: t('resume.projects.barrio.description'),
      tech: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
      image: '/portfolio/barrio-bazar.png'
    },
    {
      name: t('resume.projects.conectarte.name'),
      description: t('resume.projects.conectarte.description'),
      tech: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      image: '/portfolio/conect-arte.png'
    }
  ];

  return (
    <section className="py-16 px-6 bg-[#1a1a2e]">
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
          {t('resume.projects.title')}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0f0f1c] rounded-xl overflow-hidden border border-[#64ffda]/20"
            >
              <div className="h-48 bg-[#2e2e52] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#64ffda] mb-2">{project.name}</h3>
                <p className="text-[#e0e0ff] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#64ffda]/10 text-[#64ffda] px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};