"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import Link from "next/link"

export default function NotFound() {
  const { isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  return (
    <div className={`min-h-screen flex flex-col ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-24 text-center">
        <div>
          <h1 className={`text-5xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>404</h1>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {isRTL ? "الصفحة غير موجودة" : "Page not found"}
          </p>
          <Link href="/" className={`inline-block mt-6 font-semibold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            {isRTL ? "العودة للرئيسية" : "Back to home"}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}










