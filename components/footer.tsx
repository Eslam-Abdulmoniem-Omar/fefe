import { useState } from "react"
import { Zap } from "lucide-react"
import Link from "next/link"
import PolicyPopup from "./policy-popup"

interface FooterProps {
  language: "ar" | "en"
}

const content = {
  ar: {
    brand: "UI ClonePro",
    copyright: "© 2025 UI Snapshot. جميع الحقوق محفوظة.",
    sections: {
      support: {
        title: "الدعم",
        links: [
          { text: "نسيت الترخيص", href: "/forgot-license" },
          { text: "اتصل بنا", href: "https://mail.google.com/mail/?view=cm&fs=1&to=eaoeslam137@gmail.com" },
          { text: "الشركاء التابعون - 40%", href: "/affiliates" },
        ],
      },
      followUs: {
        title: "تابعنا",
        links: [
          { text: "تويتر / X", href: "https://x.com/UdgStartups" },
          { text: "يوتيوب", href: "https://www.youtube.com/channel/UCouCXlod2aLO0q_mDD4MAYA" },
        ],
      },
      legal: {
        title: "قانوني",
        links: [
          { text: "سياسة الخصوصية", href: "#" },
          { text: "الشروط والأحكام", href: "#" },
        ],
      },
    },
  },
  en: {
    brand: "UI ClonePro",
    copyright: "© 2025 UI Snapshot. All Rights Reserved.",
    sections: {
      support: {
        title: "SUPPORT",
        links: [{ text: "Contact us", href: "https://mail.google.com/mail/?view=cm&fs=1&to=eaoeslam137@gmail.com" }],
      },
      followUs: {
        title: "FOLLOW US",
        links: [
          { text: "Twitter / X", href: "https://x.com/UdgStartups" },
          { text: "YouTube", href: "https://www.youtube.com/channel/UCouCXlod2aLO0q_mDD4MAYA" },
        ],
      },
      legal: {
        title: "LEGAL",
        links: [
          { text: "Privacy Policy", href: "#" },
          { text: "Terms & Conditions", href: "#" },
        ],
      },
    },
  },
}

const privacyPolicy = `Privacy Policy for UI ClonePro
Last Updated: 1/30/2025

1. Information Collection and Use
We only collect email addresses when a user makes a purchase. This is solely for order processing and customer support.

2. Data Collection Methods
We do not track, store, or collect any browsing data, user activity, or other personal information.
The extension functions locally on your device and does not transmit data to external servers.

3. Data Sharing
We do not sell, share, or distribute any collected emails to third parties.

4. Children's Privacy
UI ClonePro is not intended for children under 13. If you believe a child has provided their email, please contact us for removal.

5. Updates to the Privacy Policy
Any changes to this Privacy Policy will be communicated via our website.

For any questions or concerns, please contact us at eaoeslam137@gmail.com.

Thank you for using UI ClonePro!`

const termsAndConditions = `Terms and Conditions for UI ClonePro
Last Updated: 1/30/2025

1. Acceptance of Terms
By using UI ClonePro, you agree to these Terms and Conditions.

2. Use of Service
UI ClonePro is designed for personal and commercial use, subject to these terms.

3. Intellectual Property
The UI ClonePro extension and its original content are the property of UI ClonePro and are protected by copyright and other intellectual property laws.

4. User Responsibilities
Users are responsible for any content cloned or modified using UI ClonePro and must ensure they have the right to use such content.

5. Limitation of Liability
UI ClonePro is not liable for any damages arising from the use of our service.

6. Changes to Terms
We reserve the right to modify these terms at any time. Continued use of UI ClonePro after changes constitutes acceptance of the new terms.

7. Governing Law
These terms are governed by and construed in accordance with the laws of [Your Jurisdiction].

Thank you for using UI ClonePro!`

export default function Footer({ language }: FooterProps) {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const t = content[language]

  return (
    <footer className={`bg-[#1F1F1F] text-white py-16 ${language === "ar" ? "font-noto-sans-arabic" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-[#499DEA]" />
              <span className="font-bold text-2xl bg-gradient-to-r from-[#499DEA] to-[#F6A055] text-transparent bg-clip-text">
                UI ClonePro
              </span>
            </Link>
            <p className="text-gray-400 text-sm">{t.copyright}</p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-semibold mb-4 text-gray-300">{t.sections.support.title}</h3>
            <ul className="space-y-3">
              {t.sections.support.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-gray-300">{t.sections.followUs.title}</h3>
            <ul className="space-y-3">
              {t.sections.followUs.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-gray-300">{t.sections.legal.title}</h3>
            <ul className="space-y-3">
              {t.sections.legal.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (link.text === "Privacy Policy" || link.text === "سياسة الخصوصية") {
                        setShowPrivacyPolicy(true)
                      } else if (link.text === "Terms & Conditions" || link.text === "الشروط والأحكام") {
                        setShowTerms(true)
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {showPrivacyPolicy && (
        <PolicyPopup
          title={language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
          content={privacyPolicy}
          onClose={() => setShowPrivacyPolicy(false)}
        />
      )}
      {showTerms && (
        <PolicyPopup
          title={language === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
          content={termsAndConditions}
          onClose={() => setShowTerms(false)}
        />
      )}
    </footer>
  )
}

