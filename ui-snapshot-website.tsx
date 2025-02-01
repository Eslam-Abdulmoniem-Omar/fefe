"use client"

import { useState } from "react"
import Header from "./components/header"
import HeroSection from "./components/sections/hero-section"
import ComparisonSection from "./components/sections/comparison-section"
import FeaturesSection from "./components/sections/features-section"
import PricingSection from "./components/sections/pricing-section"
import FAQSection from "./components/sections/faq-section"
import Footer from "./components/footer"
import WhyChooseSection from "./components/sections/why-choose-section"

export default function UISnapshotWebsite() {
  const [language, setLanguage] = useState<"ar" | "en">("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#499DEA]/5" dir={language === "ar" ? "rtl" : "ltr"}>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <HeroSection language={language} />
        <WhyChooseSection language={language} />
        <ComparisonSection language={language} />
        <FeaturesSection language={language} />
        <PricingSection language={language} />
        <FAQSection language={language} />
      </main>
      <Footer language={language} />
    </div>
  )
}

