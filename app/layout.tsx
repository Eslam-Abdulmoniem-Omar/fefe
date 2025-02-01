import { notoSansArabic } from "@/fonts"
import "@/app/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" className={notoSansArabic.variable}>
      <body>{children}</body>
    </html>
  )
}

