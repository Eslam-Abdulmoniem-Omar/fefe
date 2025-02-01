import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PricingSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "الأسعار",
    description: "اشترِ مرة واحدة فقط وابدأ فورًا بدون أي اشتراكات",
    pro: {
      title: "اشتراك مدى الحياة",
      price: "19",
      originalPrice: "40",
      subtitle: "دفعة واحدة. بدون اشتراك شهري",
      badge: "الأكثر شعبية",
      cta: "احصل عليه الآن",
    },
  },
  en: {
    title: "Pricing",
    description: "Buy once, start instantly, no subscriptions",
    pro: {
      title: "Lifetime Deal",
      price: "19",
      originalPrice: "40",
      subtitle: "One-time payment. No subscription",
      badge: "POPULAR",
      cta: "Deploy Now",
    },
  },
}

export default function PricingSection({ language }: PricingSectionProps) {
  const t = content[language]

  return (
    <section id="pricing-section" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F1F1F] mb-4 ${
              language === "ar" ? "font-noto-sans-arabic" : ""
            }`}
          >
            {t.title}
          </h2>
          <p className={`text-lg text-gray-400 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>{t.description}</p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="p-6 md:p-8 border-[#499DEA] border-2 relative">
            <div className="text-center mb-6">
              <h3 className={`text-2xl font-bold mb-8 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>
                {t.pro.title}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-xl">${t.pro.originalPrice}</span>
                <span className="text-5xl font-bold">${t.pro.price}</span>
                <span className="text-gray-400">USD</span>
              </div>
              <p className={` ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>{t.pro.subtitle}</p>
            </div>

            <Button
              className={`w-full bg-[#F6A055] hover:bg-[#F6A055]/90 text-white py-4 md:py-6 text-base md:text-lg rounded-lg ${
                language === "ar" ? "font-noto-sans-arabic" : ""
              }`}
              onClick={() => window.open("https://udgstartups.gumroad.com/l/nnjftz", "_blank")}
            >
              {t.pro.cta}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}

