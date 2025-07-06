import { DynamicMetadata, FloatingWhatsApp } from '@/components';
import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
  weight: ['400'],
});

// Default metadata (fallback)
export const metadata: Metadata = {
  title: 'gemm-apps - Creative App Designer',
  description:
    'Prototipo experiencias digitales con identidad propia, narrativas únicas y estética pensada.',
  openGraph: {
    title: 'gemm-apps - Creative App Designer',
    description: 'Prototipo experiencias digitales con identidad propia, narrativas únicas y estética pensada.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gemm-apps - Creative App Designer',
    description: 'Prototipo experiencias digitales con identidad propia, narrativas únicas y estética pensada.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>
        <LanguageProvider>
          <DynamicMetadata />
          {children}
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
