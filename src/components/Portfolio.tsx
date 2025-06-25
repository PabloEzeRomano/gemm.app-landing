'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';
import proyectoGarage from '@/assets/portfolio-images/proyecto-garage.png';
import conectArte from '@/assets/portfolio-images/conect-arte.png';
import neuroZine from '@/assets/portfolio-images/neuro-zine.png';
import barrioBazar from '@/assets/portfolio-images/barrio-bazar.png';
import algoRythm from '@/assets/portfolio-images/algo-rythm.png';
import myLearningDNA from '@/assets/portfolio-images/my-learning-dna.png';

const projects = [
  {
    titleKey: 'portfolio.project.garage.title',
    descriptionKey: 'portfolio.project.garage.description',
    technologies: 'Next.js · Tailwind · React Icons · IA',
    image: proyectoGarage,
  },
  {
    titleKey: 'portfolio.project.cultural.title',
    descriptionKey: 'portfolio.project.cultural.description',
    technologies: 'React Native · Firebase · Stripe',
    image: conectArte,
  },
  {
    titleKey: 'portfolio.project.zine.title',
    descriptionKey: 'portfolio.project.zine.description',
    technologies: 'Framer Motion · Three.js · GSAP',
    image: neuroZine,
  },
  {
    titleKey: 'portfolio.project.marketplace.title',
    descriptionKey: 'portfolio.project.marketplace.description',
    technologies: 'Next.js · Prisma · PostgreSQL',
    image: barrioBazar,
  },
  {
    titleKey: 'portfolio.project.music.title',
    descriptionKey: 'portfolio.project.music.description',
    technologies: 'React · Node.js · MongoDB',
    image: algoRythm,
  },
  {
    titleKey: 'portfolio.project.education.title',
    descriptionKey: 'portfolio.project.education.description',
    technologies: 'Vue.js · Python · Redis',
    image: myLearningDNA,
  },
];

export const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="bg-[#eee3d0] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-[#103237]"
        >
          {t('portfolio.title')}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gray-200 rounded-xl mb-4 h-48 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">
                    {t('portfolio.image.placeholder')}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-[#dc3925]">
                {t(project.titleKey)}
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                {t(project.descriptionKey)}
              </p>
              <p className="text-xs text-gray-600">{project.technologies}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
