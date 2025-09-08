"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Zap, Target, Send } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

interface CareerProps {
  isVisible: boolean
}

export default function Career({ isVisible }: CareerProps) {
  const { isRTL, currentLang } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Heart,
      title: currentLang === "ar" ? "بيئة داعمة" : "Supportive Environment",
      description: currentLang === "ar" 
        ? "فريق ودود ومتعاون يساعدك على النمو والتطور"
        : "Friendly and collaborative team that helps you grow and develop"
    },
    {
      icon: Zap,
      title: currentLang === "ar" ? "فرص النمو" : "Growth Opportunities",
      description: currentLang === "ar"
        ? "فرص متعددة للتطوير المهني والتعلم المستمر"
        : "Multiple opportunities for professional development and continuous learning"
    },
    {
      icon: Target,
      title: currentLang === "ar" ? "مشاريع متنوعة" : "Diverse Projects",
      description: currentLang === "ar"
        ? "العمل على مشاريع متنوعة ومثيرة مع عملاء من مختلف الصناعات"
        : "Work on diverse and exciting projects with clients from various industries"
    }
  ]

 

  if (!isVisible) return null

  return (
    <section
      id="careers"
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {currentLang === "ar" ? "انضم إلى فريقنا" : "Join Our Team"}
          </h2>
          <p className={`text-lg md:text-xl max-w-4xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {currentLang === "ar"
              ? "نبحث عن مواهب استثنائية للانضمام إلى فريقنا الإبداعي. إذا كنت شغوفاً بالتسويق والتصميم، فأنت في المكان الصحيح."
              : "We're looking for exceptional talents to join our creative team. If you're passionate about marketing and design, you're in the right place."
            }
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`p-6 rounded-2xl ${
                isDark ? "bg-slate-800" : "bg-white"
              } shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift border ${
                isDark ? "border-slate-700" : "border-gray-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {benefit.title}
              </h3>
              <p className={`${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Open Positions */}
        
  

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className={`text-2xl font-bold mb-4 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {currentLang === "ar" ? "لا تجد الوظيفة المناسبة؟" : "Don't see the right position?"}
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {currentLang === "ar"
              ? "أرسل لنا سيرتك الذاتية وسنعود إليك عندما تتوفر الفرص المناسبة"
              : "Send us your CV and we'll get back to you when suitable opportunities arise"
            }
          </p>
          <Button
            size="lg"
            className={`px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover-lift ${
              isDark
                ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            } text-white shadow-xl`}
          >
            <Send className={`w-5 h-5 mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
            {currentLang === "ar" ? "أرسل سيرتك الذاتية" : "Send Your CV"}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
