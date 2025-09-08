"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, Users, Award, Clock, Target, Zap } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

const stats = [
  {
    icon: TrendingUp,
    value: "73+",
    label: "Projects Completed",
    labelAr: "مشروع مكتمل",
    suffix: "+"
  },
  {
    icon: Users,
    value: "200",
    label: "Happy Clients",
    labelAr: "عميل سعيد",
    suffix: "+"
  },
  {
    icon: Award,
    value: "50",
    label: "Awards Won",
    labelAr: "جائزة",
    suffix: "+"
  },
  {
    icon: Clock,
    value: "5",
    label: "Years Experience",
    labelAr: "سنوات خبرة",
    suffix: "+"
  }
]

export default function LiveStats() {
  const { isDark } = useTheme()
  const { isRTL } = useTranslationContext()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section 
      ref={ref}
      className={`py-20 ${isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isRTL ? "إحصائيات مباشرة" : "Live Statistics"}
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "أرقام حقيقية تعكس نجاحنا المستمر"
              : "Real numbers reflecting our continuous success"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl text-center ${
                isDark 
                  ? "bg-slate-800 border border-slate-700" 
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  isDark ? "bg-blue-600/20" : "bg-blue-100"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`} />
              </motion.div>

              <motion.div
                className={`text-4xl font-black mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
                <span className="text-blue-600">{stat.suffix}</span>
              </motion.div>

              <h4 className={`text-lg font-semibold ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}>
                {isRTL ? stat.labelAr : stat.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
