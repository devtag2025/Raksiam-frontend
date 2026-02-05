"use client";
import React from "react";
import { useLanguage } from '../../context/LanguageContext';

const translations = {
  trustedByLeaders: 'Trusted by industry leaders',
  partner1: 'Acme Corp',
  partner2: 'GlobalTech',
  partner3: 'Innovate Co',
  partner4: 'Prime Solutions',
  partner5: 'NextGen Systems',
  partner6: 'Enterprise Plus'
};

export default function Partners() {
  const { t } = useLanguage();

  const tr = (key) => {
    return t && t[key] ? t[key] : translations[key];
  };
  const partners = [
    { nameKey: 'partner1' },
    { nameKey: 'partner2' },
    { nameKey: 'partner3' },
    { nameKey: 'partner4' },
    { nameKey: 'partner5' },
    { nameKey: 'partner6' },
  ];

  return (
    <div className="w-full" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="mb-12">
          <h3 className="text-sm tracking-widest uppercase text-center" style={{ color: 'var(--muted-foreground)' }}>
            {translations.trustedByLeaders}
          </h3>
        </div>

        <div className="relative w-full overflow-hidden">
          <div 
            className="flex items-center gap-20"
            style={{
              animation: 'scroll 30s linear infinite'
            }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-colors duration-300"
                style={{ minWidth: "140px", color: 'var(--muted-foreground)' }}
              >
                <span className="text-xl font-light tracking-wide text-center block">
                  {tr(partner.nameKey)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-140px * 6 - 120px * 6));
          }
        }
      `}</style>
    </div>
  );
}