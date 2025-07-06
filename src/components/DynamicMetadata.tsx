'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const metadata = {
  es: {
    main: {
      title: 'gemm-apps - Diseñador Creativo de Apps',
      description:
        'Prototipo experiencias digitales con identidad propia, narrativas únicas y estética pensada.',
    },
    resume: {
      title: 'Pablo Romano - CV | gemm-apps',
      description:
        'Arquitecto de Software con 9+ años de experiencia. Especializado en desarrollo de productos digitales escalables y con alma.',
    },
  },
  en: {
    main: {
      title: 'gemm-apps - Creative App Designer',
      description:
        'I prototype digital experiences with unique identity, authentic narratives, and thoughtfully considered aesthetics.',
    },
    resume: {
      title: 'Pablo Romano - Resume | gemm-apps',
      description:
        'Software Architect with 9+ years of experience. Specialized in scalable digital product development with soul.',
    },
  },
};

export const DynamicMetadata = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Detect current route
    const isResumePage = window.location.pathname === '/resume';
    const route = isResumePage ? 'resume' : 'main';
    const currentMetadata = metadata[language][route];

    // Update document title
    document.title = currentMetadata.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', currentMetadata.description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', currentMetadata.title);

    let ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', currentMetadata.description);

    // Update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', currentMetadata.title);

    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', currentMetadata.description);

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return null; // This component doesn't render anything
};
