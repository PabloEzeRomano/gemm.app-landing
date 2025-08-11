'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/qr-menu" className="flex items-center space-x-2">
            <span className="text-2xl">🍽️</span>
            <span className="font-bold text-zinc-900">QR Menu</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/qr-menu"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === '/qr-menu'
                  ? 'bg-yellow-100 text-yellow-800 font-medium'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/qr-menu/demo-menu"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === '/qr-menu/demo-menu'
                  ? 'bg-yellow-100 text-yellow-800 font-medium'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

