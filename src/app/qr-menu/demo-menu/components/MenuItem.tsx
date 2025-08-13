'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    diet: string[];
    img: string;
  };
  onItemClick: (item: MenuItemProps['item']) => void;
}

export default function MenuItem({ item, onItemClick }: MenuItemProps) {
  const handleItemClick = () => {
    onItemClick(item);
  };

  const { name, price, img, tags } = item;

  return (
    <motion.article
      onClick={handleItemClick}
      whileHover={{
        y: -4,
        rotate: -0.25,
        boxShadow: '0 20px 40px rgba(0,0,0,.15)',
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 18,
      }}
      className="group relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-lg overflow-hidden cursor-pointer"
    >
      {/* Etiquetas animadas */}
      {tags.includes('nuevo') && (
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.2,
          }}
          className="absolute top-3 left-3 text-[10px] font-black tracking-wide bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full shadow-lg z-10"
        >
          NUEVO
        </motion.span>
      )}
      {tags.includes('recomendado') && (
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 1.6,
          }}
          className="absolute top-3 right-3 text-[10px] font-black tracking-wide bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full shadow-lg z-10"
        >
          RECOMENDADO
        </motion.span>
      )}

      {/* Imagen polaroid/circular - Clean design */}
      <div className="relative mb-3">
        <div className="relative rounded-xl p-2 rotate-[-1.5deg] group-hover:rotate-0 transition-transform duration-300">
          <Image
            src={img}
            alt={name}
            width={160}
            height={160}
            className="h-40 w-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-bold text-white leading-tight">
          {name}
        </h4>
        <div className="font-black text-lg bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          ${price.toLocaleString('es-AR')}
        </div>
      </div>
    </motion.article>
  );
}
