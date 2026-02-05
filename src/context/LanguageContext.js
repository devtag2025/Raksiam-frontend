"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize state with a default, which will be updated client-side.
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // This effect runs once on the client after initial render.
    // It checks localStorage for a saved language preference.
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []); // Empty dependency array ensures this runs only on mount.

  useEffect(() => {
    // This effect runs whenever the language state changes.
    // 1. It saves the new language choice to localStorage.
    localStorage.setItem('language', language);

    // 2. It updates the global font styles based on the selected language.
    if (language === 'th') {
      document.documentElement.style.setProperty('--font-heading', '"Prompt", serif');
      document.documentElement.style.setProperty('--font-body', '"Prompt", sans-serif');
    } else {
      document.documentElement.style.setProperty('--font-heading', '"Reddit Sans", serif');
      document.documentElement.style.setProperty('--font-body', '"Reddit Sans", sans-serif');
    }
  }, [language]); // Re-run this effect when the language changes.

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
