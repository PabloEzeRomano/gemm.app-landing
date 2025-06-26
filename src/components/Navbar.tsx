'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <header className="w-full py-2 px-6 sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold tracking-tight text-[#e63946]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          gemm-apps
        </motion.h1>

        <motion.button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-xl border-2 border-[#e63946] text-[#e63946] hover:bg-[#e63946] hover:text-black transition-colors duration-300 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {language === 'es' ? 'EN' : 'ES'}
        </motion.button>
      </div>
    </header>
  );
};