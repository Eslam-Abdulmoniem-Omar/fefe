import { Zap, Edit, XCircle } from "lucide-react"

interface FeaturesSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "لن تحتاج إلى إعادة بناء الواجهة الأمامية يدويًا مرة أخرى",
    subtitle: "شاهد كيف يغير UI Snapshot طريقة التقاط وتنظيم عناصر واجهة المستخدم",
    features: [
      {
        icon: Zap,
        title: "نسخ الواجهة الأمامية بنقرة واحدة",
        description: "انسخ كود HTML وCSS للواجهة الأمامية لأي موقع إلكتروني بنقرة واحدة فقط",
      },
      {
        icon: Edit,
        title: "تحرير أي عنصر",
        description: "استبدل الصور وحدّث النصوص وعدّل التخطيطات بسهولة مباشرة في متصفحك.",
      },
      {
        icon: XCircle,
        title: "زر الحذف",
        description: "مرر المؤشر فوق العناصر لحذفها أو استبدالها بسلاسة - تخلص من الفوضى بسهولة.",
      },
    ],
  },
  en: {
    title: "Never Re-Build A Frontend Manually Again",
    subtitle: "Watch how UI Snapshot transforms the way you capture and organize UI elements",
    features: [
      {
        icon: Zap,
        title: "Clone Websites Instantly",
        description: "Download full HTML and CSS for most websites in seconds—no manual coding needed.",
      },
      {
        icon: Edit,
        title: "Edit Any Element",
        description: "Replace images, update text and Modify layouts effortlessly right in your browser.",
      },
      {
        icon: XCircle,
        title: "Toggle Deleter Button",
        description: "Hover over elements to delete or replace them seamlessly—clean up clutter with ease.",
      },
    ],
  },
}

export default function FeaturesSection({ language }: FeaturesSectionProps) {
  const t = content[language]

  return (
    <section id="features-section" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className={`text-2xl md:text-3xl font-bold text-[#1F1F1F] mb-6 ${
              language === "ar" ? "font-noto-sans-arabic" : ""
            }`}
          >
            {t.title}
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto mb-12 md:mb-24 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/pZE9OVbmrIQ"
            title="UI ClonePro Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {t.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 h-full"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#499DEA] to-[#F6A055] rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3
                className={`text-xl font-semibold text-[#1F1F1F] mb-2 ${
                  language === "ar" ? "font-noto-sans-arabic" : ""
                }`}
              >
                {feature.title}
              </h3>
              <p className={`text-gray-600 text-center ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

