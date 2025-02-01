import { Card } from "@/components/ui/card"
import { Code, Zap, Users } from "lucide-react"

interface WhyChooseSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "لماذا تختار UI ClonePro؟",
    forDevelopers: {
      title: "للمطورين والمصممين",
      items: [
        "تسريع سير عملك من خلال استنساخ معظم كود الواجهة الأمامية للموقع.",
        "تخصيص التخطيطات والعناصر بسرعة للعملاء.",
        "التركيز على الوظائف بدلاً من مهام التصميم المتكررة.",
      ],
    },
    forUsers: {
      title: "للمستخدمين العاديين",
      items: [
        "لا تمتلك مهارات البرمجة؟ لا مشكلة! استنسخ وعدل المواقع بسهولة.",
        "وفر المال من خلال تخطي المطورين المكلفين أو رسوم المنصات.",
        "تجنب القوالب الشائعة وأنشئ مواقع فريدة لمشاركتها مع مطور للمسات النهائية.",
      ],
    },
  },
  en: {
    title: "Why Choose UI ClonePro?",
    forDevelopers: {
      title: "For Developers & Designers",
      items: [
        "Accelerate your workflow by cloning most of the website's frontend code.",
        "Quickly customize layouts and elements for clients.",
        "Focus on functionality instead of repetitive design tasks.",
      ],
    },
    forUsers: {
      title: "For Regular Users",
      items: [
        "No coding skills? No problem! Clone and tweak websites effortlessly.",
        "Save money by skipping expensive developers or platform fees.",
        "Avoid common templates and create unique websites to share with a developer for final touches.",
      ],
    },
  },
}

export default function WhyChooseSection({ language }: WhyChooseSectionProps) {
  const t = content[language]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#1F1F1F] mb-12 ${
            language === "ar" ? "font-noto-sans-arabic" : ""
          }`}
        >
          {t.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 bg-gradient-to-br from-[#499DEA]/10 to-white">
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                language === "ar" ? "font-noto-sans-arabic" : ""
              }`}
            >
              <Code className="w-6 h-6 text-[#499DEA]" />
              {t.forDevelopers.title}
            </h3>
            <ul className="space-y-4">
              {t.forDevelopers.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-[#499DEA] mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-[#F6A055]/10 to-white">
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-2 ${
                language === "ar" ? "font-noto-sans-arabic" : ""
              }`}
            >
              <Users className="w-6 h-6 text-[#F6A055]" />
              {t.forUsers.title}
            </h3>
            <ul className="space-y-4">
              {t.forUsers.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-[#F6A055] mt-1 flex-shrink-0" />
                  <span className={`text-gray-700 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

