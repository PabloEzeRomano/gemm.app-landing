'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
  es: {
    'hero.title': 'Diseño apps con alma.',
    'hero.subtitle': 'Creo prototipos de experiencias digitales que combinan identidad única, narrativas auténticas y una estética intencional.',
    'hero.portfolio': 'Ver trabajos',
    'hero.contact': 'Hablemos',
    'whatido.line1': 'Soy creativo de aplicaciones.',
    'whatido.line2': 'Trabajo con personas, ideas y proyectos que quieren salir de lo genérico.',
    'whatido.line3': 'Combino diseño, código, narrativa y sensibilidad cultural para crear experiencias digitales únicas.',
    'services.prototype.title': 'Prototipos creativos',
    'services.prototype.description': 'Transformo ideas en prototipos reales usando React, IA y diseño visual fuerte.',
    'services.concept.title': 'Conceptualización de apps',
    'services.concept.description': 'Definimos la esencia de tu app antes de diseñarla o desarrollarla.',
    'services.direction.title': 'Dirección de producto cultural',
    'services.direction.description': 'Acompaño proyectos creativos que buscan lanzar productos digitales con sentido.',
    'about.title': 'Quién soy',
    'about.paragraph1': 'Mi nombre es Pablo Romano. Soy desarrollador y arquitecto de software con más de 9 años de experiencia construyendo productos digitales escalables. Durante años trabajé en fintechs, liderando equipos y optimizando sistemas complejos.',
    'about.paragraph2': 'Pero también soy alguien profundamente conectado con el arte, la cultura y la estética. gemm.apps nace como una forma de unir mis dos mundos: la tecnología y lo expresivo.',
    'about.paragraph3': 'Hoy diseño y prototipo apps con alma, para personas y proyectos que tienen algo para decir. Porque la forma también comunica, y una app bien hecha puede ser una pieza cultural.',
    'about.experience.title': 'Mi experiencia',
    'about.experience.role': 'Software Architect',
    'about.experience.description': 'con más de 9 años de experiencia en desarrollo de aplicaciones web escalables, liderazgo técnico y arquitectura de sistemas.',
    'about.experience.skills.title': 'Skills técnicas',
    'about.experience.skills.list': 'React, Next.js, Node.js, TypeScript, PostgreSQL, Redis, Prisma, Tailwind, CI/CD, observabilidad, seguridad y performance.',
    'about.experience.languages.title': 'Idiomas',
    'about.experience.languages.list': 'Español (nativo), Inglés (fluido), Italiano (conversacional), Portugués (básico)',
    'about.experience.project.title': 'Último proyecto destacado',
    'about.experience.project.description': 'Plataforma de reservas para eventos culturales "Garage Events" con Next.js + Supabase + PostHog.',
    'about.experience.download': 'Descargar CV completo',
    'portfolio.title': 'Portfolio',
    'portfolio.project.garage.title': 'Proyecto Garage',
    'portfolio.project.garage.description': 'Web urbana para eventos culturales con reserva integrada y estética trashera.',
    'portfolio.project.cultural.title': 'App Cultural',
    'portfolio.project.cultural.description': 'Plataforma para conectar artistas locales con espacios de exposición.',
    'portfolio.project.zine.title': 'Zine Digital',
    'portfolio.project.zine.description': 'Revista digital interactiva con narrativas multimedia y diseño editorial.',
    'portfolio.project.marketplace.title': 'Marketplace Urbano',
    'portfolio.project.marketplace.description': 'E-commerce para productos artesanales con enfoque en la comunidad local.',
    'portfolio.project.music.title': 'App de Música',
    'portfolio.project.music.description': 'Streaming de música independiente con recomendaciones basadas en IA.',
    'portfolio.project.education.title': 'Plataforma Educativa',
    'portfolio.project.education.description': 'Sistema de aprendizaje online con gamificación y contenido personalizado.',
    'portfolio.image.placeholder': 'Imagen del proyecto',
    'manifesto.line1': 'Diseño para quienes tienen algo para decir.',
    'manifesto.line2': 'Busco trabajar con ideas originales para generar apps mas allá del montón.',
    'manifesto.line3': 'Jugar, divertirme y explorar es donde me permito brillar.',
    'manifesto.line4': 'La estética también es una forma de verdad.',
    'contact.title': '¿Querés diseñar algo con alma?',
    'contact.button': 'Escribime',
  },
  en: {
    'hero.title': 'I design apps with soul.',
    'hero.subtitle': 'I create digital experience prototypes that combine unique identity, authentic narratives, and thoughtfully considered aesthetics.',
    'hero.portfolio': 'View work',
    'hero.contact': 'Let\'s talk',
    'whatido.line1': 'I am a creative app developer.',
    'whatido.line2': 'I work with people, ideas and projects that want to break away from the generic.',
    'whatido.line3': 'I combine design, code, narrative and cultural sensitivity to create unique digital experiences.',
    'services.prototype.title': 'Creative prototypes',
    'services.prototype.description': 'I transform ideas into real prototypes using React, AI and strong visual design.',
    'services.concept.title': 'App conceptualization',
    'services.concept.description': 'We define the essence of your app before designing or developing it.',
    'services.direction.title': 'Cultural product direction',
    'services.direction.description': 'I accompany creative projects that seek to launch digital products with meaning.',
    'about.title': 'Who I am',
    'about.paragraph1': 'My name is Pablo Romano. I am a developer and software architect with more than 9 years of experience building scalable digital products. For years I worked in fintechs, leading teams and optimizing complex systems.',
    'about.paragraph2': 'But I am also someone deeply connected to art, culture and aesthetics. gemm.apps was born as a way to unite my two worlds: technology and the expressive.',
    'about.paragraph3': 'Today I design and prototype apps with soul, for people and projects that have something to say. Because form also communicates, and a well-made app can be a cultural piece.',
    'about.experience.title': 'My experience',
    'about.experience.role': 'Software Architect',
    'about.experience.description': 'with more than 9 years of experience in scalable web application development, technical leadership and system architecture.',
    'about.experience.skills.title': 'Technical skills',
    'about.experience.skills.list': 'React, Next.js, Node.js, TypeScript, PostgreSQL, Redis, Prisma, Tailwind, CI/CD, observability, security and performance.',
    'about.experience.languages.title': 'Languages',
    'about.experience.languages.list': 'Spanish (native), English (fluent), Italian (conversational), Portuguese (basic)',
    'about.experience.project.title': 'Latest featured project',
    'about.experience.project.description': 'Booking platform for cultural events "Garage Events" with Next.js + Supabase + PostHog.',
    'about.experience.download': 'Download full CV',
    'portfolio.title': 'Portfolio',
    'portfolio.project.garage.title': 'Garage Project',
    'portfolio.project.garage.description': 'Urban web for cultural events with integrated booking and underground aesthetics.',
    'portfolio.project.cultural.title': 'Cultural App',
    'portfolio.project.cultural.description': 'Platform to connect local artists with exhibition spaces.',
    'portfolio.project.zine.title': 'Digital Zine',
    'portfolio.project.zine.description': 'Interactive digital magazine with multimedia narratives and editorial design.',
    'portfolio.project.marketplace.title': 'Urban Marketplace',
    'portfolio.project.marketplace.description': 'E-commerce for artisanal products with focus on local community.',
    'portfolio.project.music.title': 'Music App',
    'portfolio.project.music.description': 'Independent music streaming with AI-based recommendations.',
    'portfolio.project.education.title': 'Educational Platform',
    'portfolio.project.education.description': 'Online learning system with gamification and personalized content.',
    'portfolio.image.placeholder': 'Project image',
    'manifesto.line1': 'I design for those who have something to say.',
    'manifesto.line2': 'I seek to work with original ideas to generate apps beyond the crowd.',
    'manifesto.line3': 'Play, explore and have fun while I work is where I allow myself to shine.',
    'manifesto.line4': 'Aesthetics is also a form of truth.',
    'contact.title': 'Want to design something with a soul?',
    'contact.button': 'Write me',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};