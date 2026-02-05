"use client";
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 bg-black/30 backdrop-blur-md rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-red-700 text-white'
            : 'text-white/70 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
          language === 'th'
            ? 'bg-red-700 text-white'
            : 'text-white/70 hover:text-white'
        }`}
      >
        TH
      </button>
    </div>
  );
}