import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import './globals.css';
import { Navbar } from '@/components';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'gemm.apps - Creative App Designer',
  description:
    'Prototipo experiencias digitales con identidad propia, narrativas únicas y estética pensada.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
