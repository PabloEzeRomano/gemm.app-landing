'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const services = [
  {
    titleKey: 'services.concept.title',
    descriptionKey: 'services.concept.description',
    color: 'text-[#dc3925]',
  },
  {
    titleKey: 'services.prototype.title',
    descriptionKey: 'services.prototype.description',
    color: 'text-[#103237]',
  },
  {
    titleKey: 'services.direction.title',
    descriptionKey: 'services.direction.description',
    color: 'text-[#b3dc75]',
  },
];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#ffffff] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className={`text-xl font-semibold mb-2 ${service.color}`}>
              {t(service.titleKey)}
            </h3>
            <p className="text-gray-700">{t(service.descriptionKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
