"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Zap, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  language: "ar" | "en"
  toggleLanguage: () => void
}

const content = {
  ar: {
    brand: "UI ClonePro",
    pricing: "التسعير",
    faq: "الأسئلة الشائعة",
    cta: "احصل على UI Snapshot",
    switchLang: "English",
  },
  en: {
    brand: "UI ClonePro",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Get UI Snapshot",
    switchLang: "Arabic",
  },
}

export default function Header({ language, toggleLanguage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = content[language]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-md ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Zap className="w-8 h-8 text-[#499DEA]" />
            <span className="font-bold text-2xl bg-gradient-to-r from-[#499DEA] to-[#F6A055] text-transparent bg-clip-text">
              {t.brand}
            </span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {t.pricing}
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {t.faq}
            </button>
            <Button
              variant="default"
              className="bg-[#F6A055] hover:bg-[#F6A055]/90 text-white"
              onClick={() => window.open("https://udgstartups.gumroad.com/l/nnjftz", "_blank")}
            >
              {t.cta}
            </Button>
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              className="flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <span className="text-lg">{language === "en" ? "🇺🇸" : "🇸🇦"}</span>
              <span className="font-medium">{language === "en" ? "English" : "عربي"}</span>
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("pricing-section")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {t.pricing}
            </button>
            <button
              onClick={() => scrollToSection("faq-section")}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              {t.faq}
            </button>
            <Button
              variant="default"
              className="w-full bg-[#F6A055] hover:bg-[#F6A055]/90 text-white"
              onClick={() => {
                window.open("https://udgstartups.gumroad.com/l/nnjftz", "_blank")
                setIsMenuOpen(false)
              }}
            >
              {t.cta}
            </Button>
            <Button
              onClick={() => {
                toggleLanguage()
                setIsMenuOpen(false)
              }}
              variant="ghost"
              className="w-full flex items-center justify-center gap-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full px-4 py-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <span className="text-lg">{language === "en" ? "🇺🇸" : "🇸🇦"}</span>
              <span className="font-medium">{language === "en" ? "English" : "عربي"}</span>
              <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:rotate-180" />
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

