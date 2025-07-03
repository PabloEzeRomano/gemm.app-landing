'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Socials } from './Socials';

export const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0f0f0f] text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#dc3925] mb-4">
              gemm-apps
            </h3>
            <p className="text-gray-300 mb-4">{t('footer.description')}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#b3dc75]">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('portfolio.title')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('services.title')}
                </a>
              </li>
              {/* <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('contact.title')}
                </a>
              </li> */}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <Socials />
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
        >
          <p>
            © {currentYear} gemm-apps. {t('footer.rights')}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
