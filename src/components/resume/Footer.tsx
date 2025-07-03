'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Socials } from '@/components/Socials';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#0a0a14] border-t border-[#64ffda]/20 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resume Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.h3
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
              className="text-xl font-bold text-[#b48eff]"
            >
              {t('resume.footer.title')}
            </motion.h3>
            <p className="text-[#e0e0ff] text-sm leading-relaxed">
              {t('resume.footer.subtitle')}
            </p>
            <a
              href="/resume/Pablo-Romano-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#64ffda] text-[#0f0f1c] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#64ffda]/80 transition-colors duration-300"
            >
              {t('resume.footer.downloadPDF')}
            </a>
          </motion.div>

          {/* Resume Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h4
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
              className="text-lg font-semibold text-[#64ffda]"
            >
              {t('resume.footer.sections')}
            </motion.h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#experience"
                  className="text-[#e0e0ff] hover:text-[#64ffda] transition-colors duration-300 text-sm"
                >
                  {t('resume.footer.experience')}
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="text-[#e0e0ff] hover:text-[#64ffda] transition-colors duration-300 text-sm"
                >
                  {t('resume.footer.stack')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-[#e0e0ff] hover:text-[#64ffda] transition-colors duration-300 text-sm"
                >
                  {t('resume.footer.projects')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#e0e0ff] hover:text-[#64ffda] transition-colors duration-300 text-sm"
                >
                  {t('resume.footer.contact')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h4
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
              className="text-lg font-semibold text-[#64ffda]"
            >
              {t('resume.footer.contactNav')}
            </motion.h4>
            <div className="space-y-2 text-sm">
              <Socials />
              <Link
                href="/"
                className="text-[#e0e0ff] hover:text-[#64ffda] transition-colors duration-300 block"
              >
                {t('resume.footer.backToPortfolio')}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-[#64ffda]/20 mt-8 pt-8 text-center"
        >
          <p className="text-[#e0e0ff] text-sm">
            © {currentYear} gemm-apps. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};