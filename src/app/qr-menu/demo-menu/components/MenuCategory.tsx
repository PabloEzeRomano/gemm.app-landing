'use client';

import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  diet: string[];
  img: string;
}

interface Category {
  key: string;
  label: string;
  icon: string;
}

interface MenuCategoryProps {
  category: Category;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

// Variants para cascada
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function MenuCategory({ category, items, onItemClick }: MenuCategoryProps) {
  if (!items.length) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl" aria-hidden>
          {category.icon}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 drop-shadow-lg">
          {category.label}
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              layout
            >
              <MenuItem
                item={item}
                onItemClick={onItemClick}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
