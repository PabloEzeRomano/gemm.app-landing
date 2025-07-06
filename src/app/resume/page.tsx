'use client';


import { FloatingLanguage } from '@/components/FloatingLanguage';
import {
  Contact,
  Experience,
  Footer,
  Hero,
  LanguagesAndHighlights,
  Stack,
  Summary,
} from '@/components/resume';

export default function ResumePage() {



  return (
    <div className="bg-[#0f0f1c] text-[#e0e0ff] font-jet-brains-mono min-h-screen relative">
      <Hero />
      <Summary />
      <Experience />
      <Stack />
      <LanguagesAndHighlights />
      <Contact />
      <Footer />

      {/* Floating Language Selector */}
      <FloatingLanguage />
    </div>
  );
}
