import posthog from 'posthog-js';

// Initialize PostHog if not already initialized
if (typeof window !== 'undefined' && !posthog.isFeatureEnabled('initialized')) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24'
  });
}

// Tracking functions
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties);
  }
};

// Page view tracking
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page_name: pageName });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown'
  });
};

// Navigation tracking
export const trackNavigation = (from: string, to: string) => {
  trackEvent('navigation', { from, to });
};

// Contact tracking
export const trackContactAttempt = (method: 'email' | 'whatsapp' | 'social') => {
  trackEvent('contact_attempt', { method });
};

// Portfolio interaction tracking
export const trackPortfolioInteraction = (projectName: string, action: 'view' | 'click') => {
  trackEvent('portfolio_interaction', { project_name: projectName, action });
};

// Language change tracking
export const trackLanguageChange = (from: string, to: string) => {
  trackEvent('language_change', { from, to });
};

// Resume download tracking
export const trackResumeDownload = () => {
  trackEvent('resume_download');
};

// Section view tracking
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', { section_name: sectionName });
};