"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin
} from 'lucide-react';

const translations = {
  companyName: 'Company',
  company: 'Company',
  aboutUs: 'About',
  careers: 'Careers',
  blog: 'Blog',
  services: 'Services',
  warehousing: 'Warehousing',
  distribution: 'Distribution',
  logistics: 'Logistics',
  support: 'Support',
  helpCenter: 'Help',
  contactUs: 'Contact',
  faq: 'FAQ',
  allRightsReserved: 'All rights reserved'
};

const footerLinks = {
  company: [
    { labelKey: 'aboutUs', href: '/about' },
    { labelKey: 'careers', href: '/careers' },
    { labelKey: 'blog', href: '/blog' }
  ],
  services: [
    { labelKey: 'warehousing', href: '/warehousing' },
    { labelKey: 'distribution', href: '/distribution' },
    { labelKey: 'logistics', href: '/logistics' }
  ],
  support: [
    { labelKey: 'helpCenter', href: '/help' },
    { labelKey: 'contactUs', href: '/contact' },
    { labelKey: 'faq', href: '/faq' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const { t } = useLanguage();

  const tr = (key) => {
    return t && t[key] ? t[key] : translations[key];
  };

  return (
    <footer className="w-full" style={{ background: 'var(--background)' }}>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Company Links */}
          <div>
              <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--muted-foreground)' }}>
                {tr('company')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm transition-colors font-light"
                    style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                  >
                    {tr(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
              <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--muted-foreground)' }}>
                {tr('services')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm transition-colors font-light"
                    style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                  >
                    {tr(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
              <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--muted-foreground)' }}>
                {tr('support')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  >
                    {tr(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--muted-foreground)' }}>
              {tr('companyName')}
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="transition-colors"
                    style={{ color: 'var(--muted-foreground)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted-foreground)'}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 py-6">
            <p className="text-xs text-center font-light" style={{ color: 'var(--muted-foreground)' }}>
              © {currentYear} {tr('companyName')}. {tr('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}