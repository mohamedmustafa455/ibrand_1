"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ShieldCheck, Trophy, Rocket, BarChart3, Sparkles, Globe2 } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

type Advantage = {
  icon: React.ElementType
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
}

const ADVANTAGES: Advantage[] = [
  {
    icon: Trophy,
    titleEn: "Outcome-first mindset",
    titleAr: "نركز على النتائج",
    descEn: "We plan around KPIs and measurable ROI, not just visuals.",
    descAr: "نخطط وفق مؤشرات أداء ROI قابلة للقياس، لا الشكل فقط.",
  },
  {
    icon: BarChart3,
    titleEn: "Data-informed decisions",
    titleAr: "قرارات مبنية على البيانات",
    descEn: "We test, learn, and scale what works with clarity.",
    descAr: "نختبر ونتعلم ونوسع ما يحقق نتائج بوضوح.",
  },
  {
    icon: Rocket,
    titleEn: "Enterprise craft, startup speed",
    titleAr: "جودة مؤسساتية بسرعة الشركات الناشئة",
    descEn: "High-quality delivery with rapid iteration and feedback loops.",
    descAr: "تسليم عالي الجودة بسرعة وتكرارات سريعة.",
  },
  {
    icon: ShieldCheck,
    titleEn: "Consistent design system",
    titleAr: "نظام تصميم متسق",
    descEn: "Reusable components ensure brand consistency and velocity.",
    descAr: "مكونات قابلة لإعادة الاستخدام تضمن ثبات الهوية والسرعة.",
  },
  {
    icon: Sparkles,
    titleEn: "Motion-first design",
    titleAr: "تصميم يعتمد الحركة",
    descEn: "Elegant micro-interactions that increase engagement and clarity.",
    descAr: "تفاصيل حركية أنيقة تعزز التفاعل والوضوح.",
  },
  {
    icon: Globe2,
    titleEn: "Bilingual excellence",
    titleAr: "تميّز ثنائي اللغة",
    descEn: "Native-quality English and Arabic with full RTL support.",
    descAr: "جودة لغوية ممتازة بالعربية والإنجليزية مع دعم RTL كامل.",
  },
]

export default function WhyChooseUsSection() {
  const { isDark } = useTheme()
  const { isRTL } = useTranslationContext()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="why-us"
      className={`relative py-16 ${
        isDark
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          : "bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/20"
      } overflow-hidden`}
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute right-0 bottom-0 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-700/50 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className={`text-sm font-medium ${isDark ? "text-blue-300" : "text-blue-700"}`}>
              {isRTL ? "لماذا تختارنا" : "Why choose us"}
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent`}>
            {isRTL ? "قيمة حقيقية ونتائج قابلة للقياس" : "Real value and measurable outcomes"}
          </h2>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
            {isRTL
              ? "نصمم الاستراتيجيات حول العائد على الاستثمار، ونبني تجارب متسقة وأداءً عاليًا."
              : "We architect for ROI, craft consistent experiences, and optimize for performance."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border ${
                isDark ? "border-slate-700 bg-slate-900/40" : "border-blue-100 bg-white/70"
              } backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                    {isRTL ? item.titleAr : item.titleEn}
                  </h3>
                </div>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm leading-6`}>
                  {isRTL ? item.descAr : item.descEn}
                </p>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


