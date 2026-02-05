"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const translations = {
  featuredProducts: 'Featured Products',
  featuredProductsSubtitle: 'Retail-ready packaging and precision manufacturing',
  productLeafSprings: 'Leaf Spring Assembly',
  productLeafSpringsDesc: 'Heavy-duty galvanized steel with retail packaging',
  productTrailerJack: 'A-Frame Trailer Jack',
  productTrailerJackDesc: 'Drop-leg jack with blister packaging',
  productCoupler: '2" Ball Coupler Kit',
  productCouplerDesc: 'Complete assembly in retail box packaging',
  productBearings: 'Wheel Bearing Set',
  productBearingsDesc: 'Precision bearings with retail display packaging',
  productClamshell: 'Custom Clamshell Packaging',
  productClamshellDesc: 'Thermoformed packaging for U.S. retail standards',
  retailReady: 'Retail-Ready',
  usGrade: 'U.S. Grade',
  certified: 'Certified',
  premium: 'Premium',
  custom: 'Custom',
  addToCart: 'Add to Cart',
  freeShipping: 'Free Shipping'
};

const featuredProducts = [
  {
    id: 1,
    nameKey: 'productLeafSprings',
    descriptionKey: 'productLeafSpringsDesc',
    price: '$31.99',
    rating: 4.5,
    reviews: 10,
    image: '/demo/15. Spring Bushing.104.png',
    manufacturer: 'SET-AC17-6',
    deliveryDate: 'Thu, Oct 30'
  },
  {
    id: 2,
    nameKey: 'productTrailerJack',
    descriptionKey: 'productTrailerJackDesc',
    price: '$43.49',
    rating: 4.5,
    reviews: 12,
    image: '/demo/20. Sand Foot.136.png',
    manufacturer: 'SET-AP6-8',
    deliveryDate: 'Thu, Oct 30'
  },
  {
    id: 3,
    nameKey: 'productCoupler',
    descriptionKey: 'productCouplerDesc',
    price: '$24.49',
    rating: 4.5,
    reviews: 8,
    image: '/demo/Ramp Latch Kit.15.png',
    manufacturer: 'SET-AC17-4',
    deliveryDate: 'Thu, Oct 30'
  },
  {
    id: 4,
    nameKey: 'productBearings',
    descriptionKey: 'productBearingsDesc',
    price: '$32.99',
    rating: 5.0,
    reviews: 5,
    image: '/demo/2. Bearing Kit 1-16.62.png',
    manufacturer: 'SET-AC14-6',
    deliveryDate: 'Thu, Oct 30'
  },
  {
    id: 5,
    nameKey: 'productClamshell',
    descriptionKey: 'productClamshellDesc',
    price: '$74.49',
    rating: 5.0,
    reviews: 3,
    image: '/demo/Tie Down Kit Render.40.png',
    manufacturer: 'SET-AC41114-8',
    deliveryDate: 'Thu, Oct 30'
  },
  {
    id: 6,
    nameKey: 'productLeafSprings',
    descriptionKey: 'productLeafSpringsDesc',
    price: '$30.99',
    rating: 5.0,
    reviews: 4,
    image: '/demo/15. Spring Bushing.105.png',
    manufacturer: 'SET-AC20-4',
    deliveryDate: 'Thu, Oct 30'
  }
];

export default function FeaturedProductsCarousel() {
  const t = translations;
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardWidth = 280;

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - cardWidth));
  };

  const scrollRight = () => {
    const maxScroll = (featuredProducts.length - 4) * cardWidth;
    setScrollPosition(Math.min(maxScroll, scrollPosition + cardWidth));
  };

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            {t.featuredProducts}
          </h2>
          <p className="text-gray-600">
            {t.featuredProductsSubtitle}
          </p>
          <div className="w-16 h-1 bg-red-700 mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Button - Left */}
          <button
            onClick={scrollLeft}
            disabled={scrollPosition === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed -ml-6"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          {/* Products Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {featuredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="flex-shrink-0 bg-white border border-gray-200 rounded hover:shadow-lg transition-shadow duration-200"
                  style={{ width: `${cardWidth - 16}px` }}
                >
                  {/* Free Shipping Badge */}
                  <div className="p-2">
                    <span className="inline-block bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded">
                      {t.freeShipping}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="px-4 pb-3">
                    <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                      <img
                        src={product.image}
                        alt={t[product.nameKey]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-4 pb-4">
                    {/* Brand */}
                    <p className="text-sm text-gray-700 font-semibold mb-2">
                      AC DELCO®
                    </p>

                    {/* Product Name */}
                    <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
                      {t[product.nameKey]}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4"
                            fill={i < Math.floor(product.rating) ? "#b91c1c" : "none"}
                            stroke={i < Math.floor(product.rating) ? "#b91c1c" : "#d1d5db"}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>

                    {/* Manufacturer */}
                    <p className="text-xs text-gray-600 mb-3">
                      Manufacturer #: {product.manufacturer}
                    </p>

                    {/* Price */}
                    <p className="text-xl font-bold text-gray-900 mb-3">
                      {product.price}
                    </p>

                    {/* Delivery Date */}
                    <p className="text-xs text-gray-700 mb-1">
                      Get it by <strong>{product.deliveryDate}</strong>
                    </p>
                    <button className="text-xs text-blue-600 hover:underline mb-3">
                      See All Dates
                    </button>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2.5 px-4 rounded transition-colors duration-200">
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Button - Right */}
          <button
            onClick={scrollRight}
            disabled={scrollPosition >= (featuredProducts.length - 4) * cardWidth}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed -mr-6"
            aria-label="Next products"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
}