import { Button } from "@/components/ui/button"
import { Zap, Check } from "lucide-react"

interface HeroSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "انسخ أي موقع",
    titleHighlight1: "بنقرات،",
    titleHighlight2: "لا بأسابيع",
    description:
      "توقف عن قضاء ساعات لا حصر لها في إنشاء الواجهة الأمامية يدويًا. يتيح لك UI Snapshot نسخ كود جاهز للتعديل عليه في ثوانٍ بنقرة واحدة فقط.",
    features: [
      "تنزيل الكود الكامل للواجهة الأمامية لأى موقع تريده فورًا",
      "وفر ما يصل إلى 70٪ من تكاليف التطوير",
      "معاينة HTML و CSS مباشرة في متصفحك",
    ],
    cta: "احصل على UI Snapshot",
    learnMore: "اعرف المزيد",
  },
  en: {
    title: "Clone any website",
    titleHighlight1: "in clicks,",
    titleHighlight2: "not weeks",
    description:
      "Effortlessly clone websites, edit elements, and customize your design—all with just a few clicks. Save time, save money, and build your dream projects.",
    features: [
      "Download complete frontend code instantly",
      "Save up to 70% on development costs",
      "Edit & Customize Websites Directly in Your Browser",
    ],
    cta: "Get UI Snapshot",
    learnMore: "Learn More",
  },
}

export default function HeroSection({ language }: HeroSectionProps) {
  const t = content[language]

  return (
    <section className="container mx-auto px-4 py-8 md:py-12 lg:py-16 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#1F1F1F] ${
              language === "ar" ? "font-noto-sans-arabic" : ""
            }`}
            style={{ lineHeight: "1.1" }}
          >
            {t.title}
            <br />
            <span className="text-[#499DEA]">{t.titleHighlight1}</span>{" "}
            <span className="text-[#F6A055]">{t.titleHighlight2}</span>
          </h1>
          <p
            className={`text-lg text-gray-600 my-10 max-w-2xl mx-auto leading-relaxed ${
              language === "ar" ? "font-noto-sans-arabic" : ""
            }`}
          >
            {t.description}
          </p>
          <div className="flex flex-col items-center gap-3 my-6 md:my-8">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 text-base ${language === "ar" ? "font-noto-sans-arabic" : ""}`}
              >
                <Check className="w-5 h-5 text-[#499DEA]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div
            className={`flex flex-col sm:flex-row justify-center ${
              language === "ar"
                ? "space-y-4 sm:space-y-0 sm:space-x-reverse sm:space-x-4"
                : "space-y-4 sm:space-y-0 sm:space-x-4"
            }`}
          >
            <Button
              size="lg"
              className={`w-full sm:w-auto bg-[#F6A055] hover:bg-[#F6A055]/80 text-white px-6 py-4 text-lg rounded-lg transition-colors duration-300 ${
                language === "ar" ? "font-noto-sans-arabic" : ""
              }`}
              onClick={() => window.open("https://udgstartups.gumroad.com/l/nnjftz", "_blank")}
            >
              {t.cta}
              <Zap className={`w-5 h-5 ${language === "ar" ? "mr-2" : "ml-2"}`} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className={`w-full sm:w-auto px-6 py-4 mr-5 text-lg rounded-lg hover:bg-[#499DEA] hover:text-white transition-colors duration-300 ${
                language === "ar" ? "font-noto-sans-arabic" : ""
              }`}
              onClick={(e) => {
                e.preventDefault()
                const featuresSection = document.getElementById("features-section")
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {t.learnMore}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

