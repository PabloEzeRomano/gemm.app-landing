'use client';

import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center my-10"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white filter drop-shadow-[0_0_20px_rgba(5,150,105,0.8)]">
        {title}
      </h1>
      <p className="text-lg mt-3 text-cyan-200 font-medium drop-shadow-lg underline">
        {subtitle}
      </p>
    </motion.div>
  );
}
