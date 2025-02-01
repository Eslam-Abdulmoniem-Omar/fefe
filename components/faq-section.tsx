"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQSectionProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    title: "الأسئلة الشائعة",
    footer: "سؤالك غير موجود هنا؟ أرسل لي رسالة على X",
    faqs: [
      {
        question: "كم عدد المواقع التي يمكنني نسخها؟",
        answer: "يمكنك نسخ عدد غير محدود من المواقع واستخدام الأداة بأي عدد من المرات دون أي قيود.",
      },
      {
        question: "هل هذه الأداة قانونية؟",
        answer: `الأداة قانونية بنسبة 100%، تمامًا كما أن تسجيل الشاشة قانوني بنسبة 100%. حقيقة أن الأداة قد تُستخدم لأغراض غير جيدة هي مسألة مختلفة تمامًا. ومع ذلك ، تقع المسؤولية كاملة على المستخدم في كيفية استخدامه للأداة، سواء كان ذلك لأغراض إيجابية أو سلبية. أشجع الجميع على استخدامها كأداة للتعلم والإلهام، وليس لسرقة أعمال الآخرين.`,
      },
      {
        question: "ما هي المواقع التي لا يمكن نسخها؟",
        answer: `بعض الصفحات تتطلب تسجيل دخول، مثل صفحة الرسائل على Twitter/X. ولأسباب تتعلق بالأمان، لا يمكننا طلب ملفات تعريف الارتباط أو الرموز المميزة لتسجيل دخولك، وبالتالي لا يمكننا نسخها.
نوع آخر من المواقع التي لا يمكن نسخها هو المواقع التي يتم تحميلها ديناميكيًا بالكامل من شبكات توزيع المحتوى (CDNs). مثال على ذلك هو المواقع المصممة باستخدام Bubble.io - عند فتح موقع تم إنشاؤه باستخدام Bubble، يتم تحميل كل شيء من قاعدة بياناتهم. وإذا لم يتطابق مصدر الطلب، فلن يتم تحميل الموقع وستظهر رسالة خطأ.`,
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    footer: "Question not answered? Send me a message on X",
    faqs: [
      {
        question: "How is it different from CTRL + S or File -> Save?",
        answer:
          "UI Snapshot gives better results, it is faster, the sources are hotlinked and saving the HTML directly almost never works. If you get the chance, you can try it on UI Snapshot and compare it with the showcase video in the 'How It Works' section.",
      },
      {
        question: "Is this tool legal?",
        answer:
          "Yes, UI Snapshot is completely legal. It only captures publicly available UI elements and follows all standard web scraping guidelines and robots.txt protocols.",
      },
      {
        question: "Does UI ClonePro clone all websites perfectly?",
        answer:
          "UI ClonePro can clone most websites effectively, but it does not guarantee 100% accuracy for all websites. Some assets or elements may be missing.",
      },
      {
        question: "Can it clone Webflow websites?",
        answer:
          "UI Snapshot is designed to capture and organize UI elements from any website, including those built with Webflow, while respecting the site's terms of service and robots.txt.",
      },
    ],
  },
}

export default function FAQSection({ language }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const t = content[language]

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1F1F1F] mb-8 md:mb-12 ${
              language === "ar" ? "font-noto-sans-arabic" : ""
            }`}
          >
            {t.title}
          </h2>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors ${
                    language === "ar" ? "font-noto-sans-arabic" : ""
                  }`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-[#1F1F1F] text-sm md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#499DEA] transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      id={`faq-answer-${index}`}
                      className="border-t border-gray-100"
                    >
                      <div
                        className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-600 ${
                          language === "ar" ? "font-noto-sans-arabic" : ""
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 text-gray-600 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>
            {t.footer}
          </div>
        </div>
      </div>
    </section>
  )
}

