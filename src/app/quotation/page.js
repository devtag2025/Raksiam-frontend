"use client";

import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import { Upload, X } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RFQForm() {
  const ctx = useLanguage();
  const t = (key) => {
    const src = ctx && ctx.t;
    if (!src) return key;
    if (typeof src === "function") return src(key);
    return src[key] ?? key;
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    serviceType: "",
    productType: "",
    packagingFormat: "",
    quantity: "",
    targetRetailer: "",
    timeline: "",
    additionalDetails: "",
  });

  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData, files);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed bottom-10 right-6 z-20">
        <LanguageSwitcher />
      </div>
      <Header />

      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-2 tracking-tight">
            {t("requestForQuote")}
          </h1>
          <p className="text-xl text-gray-600 font-light mt-4">
            {t("rfqSubtitle")}
          </p>
          <div className="w-16 h-px bg-[#C41E3A] mt-6"></div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Form - 2 columns */}
          <div className="md:col-span-2 space-y-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 hover:text-[#C41E3A] transition-colors mb-8 tracking-tight">
                {t("contactInformation")}
              </h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("fullName")}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("country")}
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                    {t("company")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-light text-gray-900 hover:text-[#C41E3A] transition-colors mb-8 tracking-tight">
                {t("projectDetails")}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                    {t("serviceType")}
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light bg-white transition-colors"
                  >
                    <option value="">{t("selectService")}</option>
                    <option value="retail-packaging">{t("retailPackaging")}</option>
                    <option value="sourcing-qc">{t("sourcingQC")}</option>
                    <option value="assembly-kitting">{t("assemblyKitting")}</option>
                    <option value="export-logistics">{t("exportLogistics")}</option>
                    <option value="custom-program">{t("customProgram")}</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("productType")}
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light bg-white transition-colors"
                    >
                      <option value="">{t("selectProduct")}</option>
                      <option value="leaf-springs">{t("leafSprings")}</option>
                      <option value="trailer-jacks">{t("trailerJacks")}</option>
                      <option value="couplers">{t("couplers")}</option>
                      <option value="bearings">{t("bearings")}</option>
                      <option value="hardware-kits">{t("hardwareKits")}</option>
                      <option value="other">{t("otherComponents")}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("packagingFormat")}
                    </label>
                    <select
                      name="packagingFormat"
                      value={formData.packagingFormat}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light bg-white transition-colors"
                    >
                      <option value="">{t("selectFormat")}</option>
                      <option value="clamshell">{t("clamshell")}</option>
                      <option value="blister">{t("blister")}</option>
                      <option value="box">{t("boxPackaging")}</option>
                      <option value="labeling">{t("labelingOnly")}</option>
                      <option value="custom">{t("customFormat")}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("quantity")}
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      placeholder={t("quantityPlaceholder")}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light placeholder-gray-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                      {t("timeline")}
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light bg-white transition-colors"
                    >
                      <option value="">{t("selectTimeline")}</option>
                      <option value="immediate">{t("immediateTimeline")}</option>
                      <option value="standard">{t("standardTimeline")}</option>
                      <option value="flexible">{t("flexibleTimeline")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                    {t("targetRetailer")}
                  </label>
                  <input
                    type="text"
                    name="targetRetailer"
                    value={formData.targetRetailer}
                    onChange={handleInputChange}
                    placeholder={t("targetRetailerPlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-wide text-gray-600 mb-2 font-light">
                    {t("additionalDetails")}
                  </label>
                  <textarea
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder={t("additionalDetailsPlaceholder")}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#C41E3A] text-gray-900 font-light placeholder-gray-400 resize-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div className="pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                {t("attachments")}
              </h2>
              <p className="text-sm text-gray-600 font-light mb-6">
                {t("attachmentsDesc")}
              </p>

              <div className="border-2 border-dashed border-gray-300 hover:border-[#C41E3A] transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center py-12 px-4 cursor-pointer"
                >
                  <Upload className="w-10 h-10 text-gray-400 mb-4" />
                  <span className="text-sm text-gray-600 font-light">
                    {t("dragDrop")}
                  </span>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between px-4 py-3 border border-gray-300 bg-gray-50"
                    >
                      <span className="text-sm text-gray-900 font-light truncate">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="ml-4 text-gray-400 hover:text-[#C41E3A] transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-12 border-t border-gray-200">
              <button
                onClick={handleSubmit}
                className="group relative overflow-hidden w-full md:w-auto px-12 py-4 border border-gray-900 text-gray-900 font-light tracking-wide transition-all hover:text-white"
              >
                <span className="relative z-10">{t("submitRequest")}</span>
                <div className="absolute inset-0 bg-gray-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* About Section */}
              <div className="border border-gray-200 p-6">
                <h3 className="text-lg font-light text-gray-900 mb-4 tracking-tight">
                  {t("aboutRakSiam")}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-6">
                  {t("aboutRakSiamText")}
                </p>
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                    {t("ourCapabilities")}
                  </h4>
                  <ul className="space-y-3 text-sm text-gray-600 font-light">
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#C41E3A] rounded-full mt-2"></span>
                      <span>{t("capability1")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#C41E3A] rounded-full mt-2"></span>
                      <span>{t("capability2")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#C41E3A] rounded-full mt-2"></span>
                      <span>{t("capability3")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#C41E3A] rounded-full mt-2"></span>
                      <span>{t("capability4")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}