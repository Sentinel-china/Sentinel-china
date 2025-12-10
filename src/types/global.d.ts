// Global type definitions

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'set' | 'event' | 'consent',
      targetId: string | ConsentParams,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
    cookieAcceptAll?: () => void;
    cookieAcceptNecessary?: () => void;
    i18next?: {
      isInitialized: boolean;
    };
  }
}

interface ConsentParams {
  analytics_storage?: 'granted' | 'denied';
  ad_storage?: 'granted' | 'denied';
  functionality_storage?: 'granted' | 'denied';
  personalization_storage?: 'granted' | 'denied';
  security_storage?: 'granted' | 'denied';
}

export {};
