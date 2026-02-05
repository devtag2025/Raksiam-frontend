"use client";
import React, { useState, useEffect } from 'react';

const buttons = [
  { key: 'getStarted', primary: true },
  { key: 'learnMore', primary: false },
];

// Mock translation object for demo
const mockTranslations = {
  welcome: 'Welcome to Raksiam',
  description: 'Experience the future of digital innovation with cutting-edge solutions designed for your success.',
  getStarted: 'Get Started',
  learnMore: 'Learn More'
};

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' }
];

const carouselImages = [
  { src: '/images/packing 1.jpg', alt: 'Modern workspace' },
  { src: '/images/packing 2.jpg', alt: 'Team collaboration' },
  { src: '/images/packing 3.jpg', alt: 'Professional environment' },
  { src: '/images/packing 6.jpg', alt: 'Efficient workflow' },
  { src: '/images/packing 7.jpg', alt: 'Cutting-edge technology' },
  { src: '/images/packing 8.jpg', alt: 'Dynamic team' }
];

export default function HeroWithCarousel() {
  const t = mockTranslations;
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-100/40 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {t.welcome}
              </h1>
              <div className="w-16 h-1 bg-red-700"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              {t.description}
            </p>
            
            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`px-8 py-3.5 font-medium rounded transition-all duration-200 ${
                    button.primary
                      ? 'bg-red-700 text-white hover:bg-red-800 shadow-lg shadow-red-700/20'
                      : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-gray-400 hover:shadow-md'
                  }`}
                >
                  {t[button.key]}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative lg:h-[600px] h-[450px] rounded-lg overflow-hidden shadow-2xl">
              
              {/* Carousel Images */}
              <div className="relative w-full h-full">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>

              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20"></div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg z-30 cursor-pointer"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg z-30 cursor-pointer"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(index);
                    }}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      index === currentSlide ? 'bg-white w-8' : 'bg-white/60 hover:bg-white/80 w-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-gray-200 pointer-events-none z-20"></div>
            </div>

            {/* Subtle Shadow */}
            <div className="absolute -inset-1 bg-red-700/5 blur-xl -z-10"></div>
          </div>

        </div>
      </div>
    </div>
  );
}