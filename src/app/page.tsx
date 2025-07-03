import {
  Hero,
  AboutMe,
  WhatIDo,
  Services,
  Portfolio,
  Manifesto,
  Contact,
  Navbar,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#eee3d0] text-[#0f0f0f]">
        <Hero />
        <WhatIDo />
        <Portfolio />
        <Services />
        <Manifesto />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
