"use client";

import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Search, Grid, List, ShoppingCart, Star } from "lucide-react";
import React, { useState } from "react";

const translations = {
  trailerComponents: "Trailer Components",
  searchProducts: "Search products...",
  allProducts: "All Products",
  leafSprings: "Leaf Springs",
  trailerJacks: "Trailer Jacks",
  couplers: "Couplers",
  bearings: "Bearings",
  hardwareKits: "Hardware Kits",
  packaging: "Packaging",
  productsAvailable: "products",
  inStock: "In stock",
  requestQuote: "Request Quote",
  retailReady: "Retail-Ready",
  usGrade: "U.S. Grade",
};

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    name: "",
    category: "",
  });
  const { t } = useLanguage();

  const tr = (key) => (t && t[key] ? t[key] : translations[key]);

  const categories = [
    { value: "", label: tr("allProducts") },
    { value: "Leaf Springs", label: tr("leafSprings") },
    { value: "Trailer Jacks", label: tr("trailerJacks") },
    { value: "Couplers", label: tr("couplers") },
    { value: "Bearings", label: tr("bearings") },
    { value: "Hardware Kits", label: tr("hardwareKits") },
    { value: "Packaging", label: tr("packaging") },
  ];

  const products = [
    {
      id: 1,
      name: "Heavy Duty Leaf Spring Assembly",
      description: "Galvanized steel leaf spring with retail-ready clamshell packaging for major U.S. retailers",
      price: "Contact",
      category: "Leaf Springs",
      stock: 500,
      thumbnail: "/demo/15. Spring Bushing.104.png",
      specs: ["3500 lbs", "Galvanized", "Retail Package"],
      rating: 4.9,
      moq: "500 units"
    },
    {
      id: 2,
      name: "A-Frame Trailer Jack - 2000 lbs",
      description: "Drop-leg jack with protective blister packaging and retail labeling",
      price: "Contact",
      category: "Trailer Jacks",
      stock: 800,
      thumbnail: "/demo/20. Sand Foot.136.png",
      specs: ["2000 lbs", "Powder Coated", "Blister Pack"],
      rating: 4.8,
      moq: "200 units"
    },
    {
      id: 3,
      name: "2\" Ball Coupler Kit",
      description: "Complete coupler assembly with hardware in retail box packaging",
      price: "Contact",
      category: "Couplers",
      stock: 1200,
      thumbnail: "/demo/Ramp Latch Kit.15.png",
      specs: ["2 inch", "5000 lbs", "Box Pack"],
      rating: 4.7,
      moq: "300 units"
    },
    {
      id: 4,
      name: "Trailer Wheel Bearing Set",
      description: "Precision bearings with seals, packaged for retail display",
      price: "Contact",
      category: "Bearings",
      stock: 2000,
      thumbnail: "/demo/2. Bearing Kit 1-16.62.png",
      specs: ["High Grade", "Sealed", "Clamshell"],
      rating: 4.9,
      moq: "500 units"
    },
    {
      id: 5,
      name: "Universal Hardware Kit",
      description: "Assorted bolts, nuts, and washers in retail-ready compartmented packaging",
      price: "Contact",
      category: "Hardware Kits",
      stock: 1500,
      thumbnail: "/demo/Castle NUT Kit.94.png",
      specs: ["Zinc Plated", "100 Pieces", "Box Kit"],
      rating: 4.6,
      moq: "250 units"
    },
    {
      id: 6,
      name: "Side Mount Jack - 5000 lbs",
      description: "Heavy-duty side mount jack with retail labeling and protective packaging",
      price: "Contact",
      category: "Trailer Jacks",
      stock: 600,
      thumbnail: "/demo/20. Sand Foot.137.png",
      specs: ["5000 lbs", "Steel", "Retail Box"],
      rating: 4.8,
      moq: "150 units"
    },
    {
      id: 7,
      name: "Custom Clamshell Packaging",
      description: "Thermoformed clamshell packaging designed for U.S. retail standards",
      price: "Contact",
      category: "Packaging",
      stock: 5000,
      thumbnail: "/demo/Tie Down Kit Render.40.png",
      specs: ["Custom Size", "Clear PET", "Retail Grade"],
      rating: 5.0,
      moq: "1000 units"
    },
    {
      id: 8,
      name: "Safety Chain Kit",
      description: "Grade 70 safety chains with hooks, retail-packaged with UPC labeling",
      price: "Contact",
      category: "Hardware Kits",
      stock: 900,
      thumbnail: "/demo/S-Hooks.99.png",
      specs: ["Grade 70", "5000 lbs", "Blister Pack"],
      rating: 4.8,
      moq: "200 units"
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());
    const matchesCategory =
      !filters.category || product.category === filters.category;
    return matchesName && matchesCategory;
  });

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <div className="fixed bottom-10 right-6 z-20">
        <LanguageSwitcher />
      </div>
      <Header />

      {/* Hero Section */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h1
            className="text-5xl md:text-6xl font-light mb-4 tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            {tr("trailerComponents")}
          </h1>
          <p
            className="text-xl font-light mt-4"
            style={{ color: "var(--muted-foreground)" }}
          >
            Retail-ready packaging and precision manufacturing for trailer components
          </p>
          <div
            className="w-16 h-px mt-6"
            style={{ backgroundColor: "var(--accent)" }}
          ></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
                style={{ color: "var(--muted-foreground)" }}
              />
              <input
                type="text"
                placeholder={tr("searchProducts")}
                value={filters.name}
                onChange={(e) =>
                  setFilters({ ...filters, name: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 focus:outline-none font-light"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              />
            </div>
            <div className="flex justify-between w-[90px]">
              <button
                onClick={() => setViewMode("grid")}
                className="w-10 h-10 flex items-center justify-center border transition-all"
                style={
                  viewMode === "grid"
                    ? {
                        border: "1px solid var(--accent)",
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }
                    : {
                        border: "1px solid var(--border)",
                        background: "var(--card)",
                        color: "var(--muted-foreground)",
                      }
                }
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className="w-10 h-10 flex items-center justify-center border transition-all"
                style={
                  viewMode === "list"
                    ? {
                        border: "1px solid var(--accent)",
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }
                    : {
                        border: "1px solid var(--border)",
                        background: "var(--card)",
                        color: "var(--muted-foreground)",
                      }
                }
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilters({ ...filters, category: cat.value })}
                className="px-4 py-2 text-sm font-light tracking-wide transition-all"
                style={
                  filters.category === cat.value
                    ? {
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }
                    : {
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        color: "var(--foreground)",
                      }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div
            className="text-sm font-light"
            style={{ color: "var(--muted-foreground)" }}
          >
            {filteredProducts.length} {tr("productsAvailable")}
          </div>
        </div>

        {/* Products Grid */}
        {viewMode === "grid" ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 "
            style={{ background: "white" }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group border border-accent"
                style={{ background: "var(--card)" }}
              >
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ background: "var(--muted)" }}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-light"
                    style={{
                      background: "var(--accent)",
                      color: "var(--accent-foreground)",
                    }}
                  >
                    {tr("retailReady")}
                  </div>
                  <div
                    className="absolute top-4 right-4 text-xs font-light"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {product.stock}+ {tr("inStock")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div
                    className="text-xs tracking-widest uppercase mb-3"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {product.category}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-light mb-2 tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mb-4 font-light line-clamp-2"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        style={
                          i < Math.floor(product.rating)
                            ? {
                                fill: "var(--accent)",
                                color: "var(--accent)",
                              }
                            : { color: "var(--border)" }
                        }
                      />
                    ))}
                    <span
                      className="text-xs ml-2"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {product.rating}
                    </span>
                  </div>

                  {/* Specs */}
                  <div
                    className="flex flex-wrap gap-2 mb-4 text-xs"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {product.specs.map((spec, idx) => (
                      <span key={idx}>
                        {spec}
                        {idx < product.specs.length - 1 && " · "}
                      </span>
                    ))}
                  </div>

                  {/* MOQ */}
                  <div
                    className="text-xs mb-6"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    MOQ: {product.moq}
                  </div>

                  {/* Price and CTA */}
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div
                      className="text-2xl font-light"
                      style={{ color: "var(--foreground)" }}
                    >
                      {product.price}
                    </div>
                    <button
                      className="group/btn relative overflow-hidden px-6 py-2 text-sm font-light transition-all flex items-center gap-2"
                      style={{
                        border: "1px solid var(--accent)",
                        color: "var(--accent)",
                      }}
                    >
                      <span className="relative z-10">{tr("requestQuote")}</span>
                      <div
                        className="absolute inset-0 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"
                        style={{ background: "var(--accent)" }}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="space-y-px"
            style={{ background: "var(--border)" }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group"
                style={{ background: "var(--card)" }}
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* Image */}
                  <div
                    className="relative w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden"
                    style={{ background: "var(--muted)" }}
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute top-2 left-2 px-2 py-1 text-xs font-light"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }}
                    >
                      {tr("retailReady")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div
                        className="text-xs tracking-widest uppercase mb-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {product.category}
                      </div>
                      <h3
                        className="text-2xl font-light mb-2 tracking-tight"
                        style={{ color: "var(--foreground)" }}
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4"
                            style={
                              i < Math.floor(product.rating)
                                ? {
                                    fill: "var(--accent)",
                                    color: "var(--accent)",
                                  }
                                : { color: "var(--border)" }
                            }
                          />
                        ))}
                        <span
                          className="text-xs ml-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {product.rating}
                        </span>
                      </div>
                      <p
                        className="mb-4 font-light"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {product.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-2 text-xs mb-3"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {product.specs.map((spec, idx) => (
                          <span key={idx}>
                            {spec}
                            {idx < product.specs.length - 1 && " · "}
                          </span>
                        ))}
                      </div>
                      <div
                        className="text-sm font-light mb-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {product.stock}+ {tr("inStock")} · MOQ: {product.moq}
                      </div>
                    </div>

                    <div
                      className="flex items-center justify-between mt-6 pt-6"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <div
                        className="text-3xl font-light"
                        style={{ color: "var(--foreground)" }}
                      >
                        {product.price}
                      </div>
                      <button
                        className="group/btn relative overflow-hidden px-8 py-3 text-sm font-light transition-all flex items-center gap-2"
                        style={{
                          border: "1px solid var(--accent)",
                          color: "var(--accent)",
                        }}
                      >
                        <span className="relative z-10">{tr("requestQuote")}</span>
                        <div
                          className="absolute inset-0 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"
                          style={{ background: "var(--accent)" }}
                        ></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}