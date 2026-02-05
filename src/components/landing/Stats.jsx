"use client"
import React from 'react'
import { Users , Award , Globe , TrendingUp , CheckCircle2 , Shield , Target } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
const translations = {
  // Hero
  aboutUsTitle: 'RakSiam Global Co., Ltd.',
  aboutUsSubtitle: 'Bridging Asia’s manufacturing strength with American retail standards — ensuring that every product leaving our facility is not only engineered to perform but also packaged to sell.',
  
  // Stats (Kept from original component as no data was provided)
  stat1Number: '5000+',
  stat1Label: 'Clients Served',
  stat2Number: '15+',
  stat2Label: 'Years Experience',
  stat3Number: '40+',
  stat3Label: 'Countries',
  stat4Number: '98%',
  stat4Label: 'Satisfaction Rate',
  
  // Story
  ourStoryTitle: 'About RakSiam Global',
  ourStoryPara1: 'RakSiam Global Co., Ltd. is a Thailand-based manufacturer specializing in retail-ready packaging and light assembly for trailer components and related hardware. From leaf springs, trailer jacks, couplers, bearings, and hardware kits to custom packaging programs, RakSiam Global supports OEMs and distributors seeking a cost-efficient and high-quality packaging partner in Southeast Asia.',
  ourStoryPara2: 'Our facility on Thailand’s Eastern Seaboard is built for scalability, compliance, and speed — equipped to handle clamshell, blister, box, and label packaging tailored to major U.S. retail requirements. We integrate sourcing, inspection, packaging, and export logistics under one roof, helping our clients reduce tariffs, freight cost, and complexity while maintaining consistent product presentation and quality.',
  
  // Values (Repurposed as "What We Do")
  ourValuesTitle: 'What We Do',
  ourValuesSubtitle: 'Our core services for OEMs and distributors.',
  service1Title: 'Retail-Ready Packaging',
  service1Desc: 'Clamshell, blister, box, and labeling solutions that meet North American retail standards.',
  service2Title: 'Sourcing & Quality Control',
  service2Desc: 'Leveraging Thailand’s supplier network for high-quality components with U.S.-grade inspection.',
  service3Title: 'Assembly & Kitting',
  service3Desc: 'Light assembly of trailer parts and kits to streamline customer supply chains.',
  service4Title: 'Export & Logistics Management',
  service4Desc: 'End-to-end handling of shipments for efficiency, accuracy, and speed.',

  // Timeline (Repurposed as "Mission & Strategy")
  ourStrategyTitle: 'Our Mission & Strategic Advantage',
  ourMissionTitle: 'Our Mission',
  ourMissionDesc: 'To deliver retail-ready trailer components that combine precision manufacturing with premium packaging — helping our customers compete globally through smarter sourcing and superior presentation.',
  whyThailandTitle: 'Why Thailand?',
  whyThailandDesc: 'Thailand offers a strategic manufacturing base outside China with competitive labor, favorable trade conditions, and reliable logistics to the U.S. market. RakSiam Global helps North American companies achieve tariff-efficient sourcing without compromising quality or brand integrity.'
};

const stats = [
  {
    icon: Users,
    numberKey: 'stat1Number',
    labelKey: 'stat1Label'
  },
  {
    icon: Award,
    numberKey: 'stat2Number',
    labelKey: 'stat2Label'
  },
  {
    icon: Globe,
    numberKey: 'stat3Number',
    labelKey: 'stat3Label'
  },
  {
    icon: TrendingUp,
    numberKey: 'stat4Number',
    labelKey: 'stat4Label'
  }
];

// Renamed 'values' to 'services' to match new content
const services = [
  {
    icon: CheckCircle2,
    titleKey: 'service1Title',
    descriptionKey: 'service1Desc',
  },
  {
    icon: Shield,
    titleKey: 'service2Title',
    descriptionKey: 'service2Desc',
  },
  {
    icon: Target,
    titleKey: 'service3Title',
    descriptionKey: 'service3Desc',
  },
  {
    icon: Globe,
    titleKey: 'service4Title',
    descriptionKey: 'service4Desc',
  }
];

export default function Stats() {
   const { t } = useLanguage();
   
     const tr = (key) => {
       return t && t[key] ? t[key] : translations[key];
     };

  return (
      <div className="border-t border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index}>
                  <Icon className="w-5 h-5 mb-4" style={{ color: 'var(--accent)' }} />
                  <div className="text-4xl font-light text-foreground mb-2">
                    {tr(stat.numberKey)}
                  </div>
                  <div className="text-sm tracking-wide" style={{ color: 'var(--muted-foreground)' }}>
                    {tr(stat.labelKey)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  )
}
