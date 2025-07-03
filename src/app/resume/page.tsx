'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Contact,
  Experience,
  Hero,
  LanguagesAndHighlights,
  Stack,
  Summary,
  Footer,
} from '@/components/resume';

export default function ResumePage() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="bg-[#0f0f1c] text-[#e0e0ff] font-sans min-h-screen relative">
      <Hero />
      <Summary />
      <Experience />
      <Stack />
      <LanguagesAndHighlights />
      <Contact />
      <Footer />

      {/* Floating Language Selector */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="fixed bottom-24 right-6 z-50 bg-[#64ffda] text-[#0f0f1c] w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        style={{
          boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)',
        }}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </motion.button>
    </div>
  );
}
