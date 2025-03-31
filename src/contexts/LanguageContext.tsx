
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { enUS, es, fr } from '@/i18n';

// Define supported languages
export type Language = 'en' | 'es' | 'fr';

// Define language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

// Define props for provider
interface LanguageProviderProps {
  children: ReactNode;
}

// Language dictionary type
type Dictionary = Record<string, string>;

// All translations
const translations: Record<Language, Dictionary> = {
  en: enUS,
  es: es,
  fr: fr,
};

// LanguageProvider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get browser language or use saved preference from localStorage
  const getBrowserLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Get browser language
    const browserLang = navigator.language.split('-')[0];
    return (Object.keys(translations).includes(browserLang) ? browserLang : 'en') as Language;
  };

  const [language, setLanguageState] = useState<Language>(getBrowserLanguage());

  // Set language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  // Translation function with parameter support
  const t = (key: string, params?: Record<string, any>): string => {
    // Get the translation string or use the key as fallback
    let text = translations[language][key] || translations['en'][key] || key;
    
    // Replace parameters in the translation string
    if (params) {
      Object.keys(params).forEach(param => {
        const regex = new RegExp(`\\{${param}\\}`, 'g');
        text = text.replace(regex, String(params[param]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
