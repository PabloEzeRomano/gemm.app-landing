'use client';

import { motion } from 'framer-motion';

interface DailyMenuProps {
  title: string;
  hours: string;
  price: number;
  items: string[];
}

export default function DailyMenu({ title, hours, price, items }: DailyMenuProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto mb-12"
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-blue-500/30 blur-xl" />
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">✨</span>
          <div className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
            {title}
          </div>
        </div>
        <p className="text-gray-800 mb-5 font-medium">
          Disponible de {hours} · Entrada + Principal + Bebida
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-gray-900">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-50/50 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <div className="text-2xl font-extrabold text-gray-900 drop-shadow-lg">
            ${price.toLocaleString('es-AR')}
          </div>
          <span className="text-sm text-gray-700">IVA incluido</span>
        </div>
      </div>
    </motion.section>
  );
}
