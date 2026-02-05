"use client";
import React, { useState } from "react";
import { ArrowRight, Upload, Package, Hash, Image, ChevronLeft, ChevronRight } from "lucide-react";

const translations = {
  productsTitle: "Trailer Parts & Packaging Line",
  productsSubtitle: "Explore our complete range of trailer parts and packaging solutions",
  categoryBearingKit: "Bearing Kit",
  categoryBearingKitDesc: "Precision wheel bearing kits designed to reduce friction and ensure smooth rotation.",
  categoryTrailerJack: "Trailer Jack",
  categoryTrailerJackDesc: "Heavy-duty trailer jacks for safe lifting, leveling, and secure parking.",
  categoryTrailerCoupler: "Trailer Coupler",
  categoryTrailerCouplerDesc: "Reliable couplers engineered for secure trailer-to-vehicle connection.",
  categoryLightingWiring: "Lighting / Wiring Kit",
  categoryLightingWiringDesc: "Complete lighting and wiring kits for safe, road-compliant visibility.",
  categoryLeafSpring: "Leaf Spring / Suspension Bushing",
  categoryLeafSpringDesc: "Durable suspension components for load stability and smoother rides.",
  categoryGreaseCap: "Grease Cap Kit",
  categoryGreaseCapDesc: "Protective grease caps and seals to keep contaminants out of your hubs.",
  categoryCotterWasher: "Cotter Pin & Washer Set",
  categoryCotterWasherDesc: "Essential hardware set for secure axle, hub, and suspension assemblies.",
  categoryLugNutSet: "Lug Nut Set",
  categoryLugNutSetDesc: "High-strength lug nut sets to firmly secure wheels to hubs.",
  featureNo1Quality: "NO.1 quality assurance",
  featureIncludesSet: "Complete kit with key components",
  featureDetailedSpecs: "Clear specifications on every pack",
  featureCorrosionResistant: "Corrosion-resistant materials",
  featureEasyInstall: "Easy installation",
  featureHeavyDuty: "Heavy-duty performance",
  featureSecureFit: "Secure fit & strong hold",
  featureRoadSafe: "Road safety compliant",
  exploreCategory: "Explore",
  howToWorkTitle: "How to Work With Us",
  howToWorkSubtitle: "Simple steps to get your auto parts and packaging manufactured",
  step1Title: "Upload Auto Part",
  step1Desc: "Upload images or technical drawings of the auto part you need.",
  step2Title: "Upload Packaging Specs",
  step2Desc: "Share your packaging requirements or use our standard SKU packaging guidelines.",
  step3Title: "Determine Quantity",
  step3Desc: "Specify the quantities per SKU and per shipment.",
  step4Title: "Brand & Logo",
  step4Desc: "Upload your brand logo and any mandatory label / warning copy.",
};

const categories = [
  {
    id: 1,
    images: ["/demo/2. Bearing Kit 1-16.62.png", "/demo/2. Bearing Kit 1-16.63.png", "/demo/2. Bearing Kit 1-16.64.png"],
    titleKey: "categoryBearingKit",
    descriptionKey: "categoryBearingKitDesc",
    features: ["featureNo1Quality", "featureIncludesSet", "featureDetailedSpecs"],
    link: "/products/bearing-kit",
  },
  {
    id: 2,
    images: ["/demo/20. Sand Foot.136.png", "/demo/20. Sand Foot.137.png", "/demo/20. Sand Foot.138.png"],
    titleKey: "categoryTrailerJack",
    descriptionKey: "categoryTrailerJackDesc",
    features: ["featureHeavyDuty", "featureCorrosionResistant", "featureEasyInstall"],
    link: "/products/trailer-jack",
  },
  {
    id: 3,
    images: ["/demo/Ramp Latch Kit.15.png", "/demo/Ramp Latch Kit.16.png", "/demo/Ramp Latch Kit.17.png"],
    titleKey: "categoryTrailerCoupler",
    descriptionKey: "categoryTrailerCouplerDesc",
    features: ["featureSecureFit", "featureNo1Quality", "featureRoadSafe"],
    link: "/products/trailer-coupler",
  },
  {
    id: 4,
    images: ["/demo/9. Breakaway Cable.83.png", "/demo/9. Breakaway Cable.84.png", "/demo/9. Breakaway Cable.85.png"],
    titleKey: "categoryLightingWiring",
    descriptionKey: "categoryLightingWiringDesc",
    features: ["featureRoadSafe", "featureEasyInstall", "featureDetailedSpecs"],
    link: "/products/lighting-wiring-kit",
  },
  {
    id: 5,
    images: ["/demo/15. Spring Bushing.104.png", "/demo/15. Spring Bushing.105.png", "/demo/15. Spring Bushing.106.png"],
    titleKey: "categoryLeafSpring",
    descriptionKey: "categoryLeafSpringDesc",
    features: ["featureHeavyDuty", "featureCorrosionResistant", "featureNo1Quality"],
    link: "/products/leaf-spring-bushing",
  },
  {
    id: 6,
    images: ["/demo/7. Grease Seal.73.png", "/demo/7. Grease Seal.74.png", "/demo/7. Grease Seal.75.png"],
    titleKey: "categoryGreaseCap",
    descriptionKey: "categoryGreaseCapDesc",
    features: ["featureIncludesSet", "featureNo1Quality", "featureDetailedSpecs"],
    link: "/products/grease-cap-kit",
  },
  {
    id: 7,
    images: ["/demo/21. Quick Release Pin.15.png", "/demo/21. Quick Release Pin.16.png", "/demo/21. Quick Release Pin.17.png"],
    titleKey: "categoryCotterWasher",
    descriptionKey: "categoryCotterWasherDesc",
    features: ["featureIncludesSet", "featureEasyInstall", "featureSecureFit"],
    link: "/products/cotter-pin-washer",
  },
  {
    id: 8,
    images: ["/demo/Lug Nut.100.png", "/demo/Lug Nut.101.png", "/demo/Lug Nut.102.png"],
    titleKey: "categoryLugNutSet",
    descriptionKey: "categoryLugNutSetDesc",
    features: ["featureSecureFit", "featureHeavyDuty", "featureNo1Quality"],
    link: "/products/lug-nut-set",
  },
];

const steps = [
  { id: 1, icon: Upload, titleKey: "step1Title", descKey: "step1Desc" },
  { id: 2, icon: Package, titleKey: "step2Title", descKey: "step2Desc" },
  { id: 3, icon: Hash, titleKey: "step3Title", descKey: "step3Desc" },
  { id: 4, icon: Image, titleKey: "step4Title", descKey: "step4Desc" },
];

const ProductCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64 overflow-hidden bg-gray-100 group">
      <div className="relative h-full w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={img} alt={`${alt} - ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ProductsAndWorkflow() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const t = translations;

  return (
    <div className="w-full bg-white">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
              {t.productsTitle}
            </h2>
            <p className="text-gray-600">{t.productsSubtitle}</p>
            <div className="w-16 h-1 bg-red-700 mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const isHovered = hoveredCard === category.id;
              return (
                <div
                  key={category.id}
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative h-full flex flex-col">
                    <ProductCarousel images={category.images} alt={t[category.titleKey]} />

                    <a href={category.link} className="flex-1 p-6 flex flex-col">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {t[category.titleKey]}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {t[category.descriptionKey]}
                      </p>

                      <ul className="space-y-2 mb-4 text-sm text-gray-500">
                        {category.features.map((featureKey, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-red-700" />
                            <span>{t[featureKey]}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-sm text-red-700 group-hover:gap-3 transition-all duration-300">
                        <span>{t.exploreCategory}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t.howToWorkTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.howToWorkSubtitle}
            </p>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                    {step.id}
                  </div>

                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                    <Icon className="w-8 h-8 text-red-700" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {t[step.titleKey]}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {t[step.descKey]}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-700 rounded-full" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}