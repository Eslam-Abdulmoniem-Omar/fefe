import { Check, X } from "lucide-react"

interface ComparisonSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "هل سئمت من الإنفاق الكثير على تطوير الواجهة الأمامية؟",
    traditional: {
      title: "التطوير التقليدي للويب",
      points: [
        "برمجة كل صفحة يدويًا من الصفر",
        "دفع رسوم باهظة للمطورين",
        "نتيجة التصميم لا تلبي توقعاتك",
        "لا يعجبك الشكل التقليدي للقوالب الجاهزة",
      ],
    },
    withSnapshot: {
      title: "مواقع مع UI Snapshot",
      points: [
        "احصل على الكود الكامل بنقرة واحدة",
        "دفع لمرة واحدة بدون أي رسوم متكررة",
        "وفر وقتك وجهدك مع كود جاهز للتعديل بسهولة",
        "انسَ القوالب التقليدية وصمم موقعًا يناسب احتياجاتك",
      ],
    },
  },
  en: {
    title: "Tired of spending too much on front-end development?",
    traditional: {
      title: "Traditional Web Development",
      points: [
        "Manually code websites from scratch",
        "Spend weeks waiting for development work",
        "Stuck with generic website templates",
      ],
    },
    withSnapshot: {
      title: "Websites with UI Snapshot",
      points: [
        "Clone any website's HTML & CSS instantly",
        "Get full code in one click—no need to start from scratch",
        "Customize the design easily",
      ],
    },
  },
}

export default function ComparisonSection({ language }: ComparisonSectionProps) {
  const t = content[language]

  return (
    <section id="comparison-section" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#1F1F1F] mb-8 md:mb-12">
            {t.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
            <div className="p-6 md:p-10 rounded-2xl bg-red-50/80 shadow-sm border border-red-100">
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-6 md:mb-8">{t.traditional.title}</h3>
              <div className="space-y-6">
                {t.traditional.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-red-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-10 rounded-2xl bg-green-50/80 shadow-sm border border-green-100">
              <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-6 md:mb-8">{t.withSnapshot.title}</h3>
              <div className="space-y-6">
                {t.withSnapshot.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-green-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

