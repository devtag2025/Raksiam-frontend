"use client";
import React from "react";
import { useLanguage } from '@/context/LanguageContext';

export default function Header({ bgOpacity = 0.9 }) {
  const { t } = useLanguage();

  return (
    <header 
      style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity})` }} 
      className="backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-light tracking-tight text-brand-dark font-heading">
          {t.companyName || 'Industrial'}
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.home || 'Home'}
          </a>
          <a 
            href="/products" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.products || 'Products'}
          </a>
        </nav>
      </div>
    </header>
  );
}