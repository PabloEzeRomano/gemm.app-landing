"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackLanguageChange } from "@/utils/posthog";

export const FloatingLanguage = () => {
  const { language, setLanguage } = useLanguage();
  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    trackLanguageChange(language, newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-24 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleLanguage}
        className="bg-[#64ffda] text-[#0f0f1c] w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="Cambiar idioma"
        style={{
          boxShadow: "0 0 20px rgba(100, 255, 218, 0.5)",
        }}
      >
        {language === "es" ? "EN" : "ES"}
      </motion.button>
    </motion.div>
  );
};
