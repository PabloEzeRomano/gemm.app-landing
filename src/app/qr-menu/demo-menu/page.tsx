'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import data from './data.json';
import Navbar from '../components/Navbar';
import {
  LoadingScreen,
  AnimatedBackground,
  Header,
  FilterBar,
  DailyMenu,
  MenuCategory,
} from './components';
import ItemModal from './components/ItemModal';

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

export default function DemoMenu() {
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Simula carga + animación Lottie
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === 'all') {
      return data.items;
    }

    // match por tag o dieta
    return data.items.filter(
      (i) => i.tags.includes(filter) || i.diet.includes(filter)
    );
  }, [filter]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen />
        ) : (
          <motion.main
            key="page"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="relative min-h-screen px-4 py-12 text-white overflow-hidden"
          >
            <AnimatedBackground />

            <Header
              title="🍽️ Don Julio Parrilla"
              subtitle="Menú digital · Actualizado al instante"
            />

            <FilterBar
              filters={data.filters}
              activeFilter={filter}
              onFilterChange={setFilter}
            />

            <DailyMenu
              title={data.dailyMenu.title}
              hours={data.dailyMenu.hours}
              price={data.dailyMenu.price}
              items={data.dailyMenu.items}
            />

            {/* Secciones por categoría */}
            <div className="max-w-6xl mx-auto space-y-12">
              {data.categories.map((category) => {
                const items = filteredItems.filter(
                  (i) => i.category === category.key
                );
                return (
                  <MenuCategory
                    key={category.key}
                    category={category}
                    items={items}
                    onItemClick={handleItemClick}
                  />
                );
              })}
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Item Modal */}
      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItem(null);
        }}
      />
    </>
  );
}
