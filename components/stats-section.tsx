"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
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
    description: "Successfully delivered projects across various industries",
    descriptionAr: "مشاريع تم تسليمها بنجاح عبر مختلف الصناعات"
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    labelAr: "عميل سعيد",
    description: "Satisfied clients who trust our expertise",
    descriptionAr: "عملاء راضون يثقون بخبرتنا"
  },
  {
    icon: Award,
    value: "50+",
    label: "Awards Won",
    labelAr: "جائزة",
    description: "Recognition for excellence in marketing and design",
    descriptionAr: "اعتراف بالتميز في التسويق والتصميم"
  },
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    labelAr: "سنوات خبرة",
    description: "Years of combined experience in digital marketing",
    descriptionAr: "سنوات من الخبرة المشتركة في التسويق الرقمي"
  },
  {
    icon: Target,
    value: "95%",
    label: "Success Rate",
    labelAr: "معدل النجاح",
    description: "High success rate in achieving client objectives",
    descriptionAr: "معدل نجاح عالي في تحقيق أهداف العملاء"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    labelAr: "دعم متاح",
    description: "Round-the-clock support for all our clients",
    descriptionAr: "دعم على مدار الساعة لجميع عملائنا"
  }
]

export default function StatsSection() {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section 
      ref={ref}
      className={`py-20 ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-gradient-to-br from-blue-50 to-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isRTL ? "إحصائياتنا المذهلة" : "Our Amazing Statistics"}
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "أرقام تتحدث عن نجاحنا وثقة عملائنا في خدماتنا المتميزة"
              : "Numbers that speak about our success and our clients' trust in our exceptional services"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-2xl text-center transition-all duration-500 hover:scale-105 ${
                isDark 
                  ? "bg-slate-800 border border-slate-700 hover:border-blue-500" 
                  : "bg-white border border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl"
              }`}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  isDark ? "bg-blue-600/20" : "bg-blue-100"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className={`w-8 h-8 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`} />
              </motion.div>

              <motion.h3 
                className={`text-4xl font-black mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {stat.value}
              </motion.h3>

              <h4 className={`text-xl font-bold mb-3 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}>
                {isRTL ? stat.labelAr : stat.label}
              </h4>

              <p className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>
                {isRTL ? stat.descriptionAr : stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-6 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "انضم إلى قائمة عملائنا المميزين وابدأ رحلة النجاح معنا"
              : "Join our list of distinguished clients and start your journey to success with us"
            }
          </p>
          <motion.button
            className={`px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRTL ? "ابدأ مشروعك الآن" : "Start Your Project Now"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
