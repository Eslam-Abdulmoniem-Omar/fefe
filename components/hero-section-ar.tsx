import { Button } from "@/components/ui/button"
import { Zap, Check } from "lucide-react"

export default function HeroSectionArabic() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Main Hero Content */}
        <div className="text-center space-y-8">
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#1F1F1F] leading-tight tracking-normal mb-6"
            style={{ lineHeight: "0.95" }}
          >
            انسخ أي موقع
            <br />
            <span className="text-[#499DEA]">بنقرات،</span> <span className="text-[#F6A055]">لا بأسابيع</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            توقف عن قضاء ساعات لا حصر لها في إنشاء الواجهة الأمامية يدويًا. يقوم UI Snapshot بذلك في ثوانٍ بنقرة واحدة
            فقط.
          </p>

          {/* Feature List */}
          <div className="flex flex-col items-center gap-4 my-12">
            <div className="flex items-center gap-2 text-lg">
              <Check className="w-5 h-5 text-[#499DEA]" />
              <span>تنزيل الكود الكامل للواجهة الأمامية لأى موقع تريده فورًا</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Check className="w-5 h-5 text-[#499DEA]" />
              <span>وفر ما يصل إلى 70٪ من تكاليف التطوير</span>
            </div>

            <div className="flex items-center gap-2 text-lg">
              <Check className="w-5 h-5 text-[#499DEA]" />
              <span>معاينة HTML و CSS مباشرة في متصفحك</span>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <Button
              size="lg"
              className="bg-[#F6A055] hover:bg-[#F6A055]/90 text-white px-8 py-6 mr-5 text-lg rounded-lg"
            >
              احصل على UI Snapshot
              <Zap className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

