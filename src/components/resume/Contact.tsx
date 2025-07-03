'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { handleWhatsAppClick } from '../../utils/whatsapp';

export const Contact = () => {
  const { t } = useLanguage();
  const email = process.env.NEXT_PUBLIC_EMAIL;

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

  return (
    <section id="contact" className="py-16 px-6 bg-[#1a1a2e]">
      <div className="max-w-4xl mx-auto text-center">
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
          className="text-3xl md:text-4xl font-bold text-[#b48eff] mb-4"
        >
          {t('resume.contact.title')}
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#64ffda] mb-6"
        >
          {t('resume.contact.subtitle')}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          {t('resume.contact.description')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.3,
            }}
            onClick={() =>
              handleWhatsAppClick(t('resume.contact.whatsappMessage'))
            }
            className="border-2 border-[#64ffda] text-[#64ffda] px-8 py-3 rounded-xl hover:bg-[#64ffda] hover:text-[#0f0f1c] transition cursor-pointer"
          >
            {t('resume.contact.cta')}
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.3,
            }}
            href={`mailto:${email}`}
            className="bg-[#64ffda] text-[#0f0f1c] px-8 py-3 rounded-xl font-semibold hover:bg-[#b48eff]"
          >
            {t('resume.contact.mailCTA')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
