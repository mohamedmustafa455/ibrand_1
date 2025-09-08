"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"

export default function FloatingSocial() {
  const { isRTL, currentLang } = useTranslationContext()
  const { isDark } = useTheme()

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1GJ388LxXj/?mibextid=wwXIfr",
      label: currentLang === "ar" ? "فيسبوك" : "Facebook",
      color: "hover:bg-blue-600"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ibrandmarketingagency?igsh=MTh2b2VwN293amJydA%3D%3D&utm_source=qr",
      label: currentLang === "ar" ? "انستغرام" : "Instagram",
      color: "hover:bg-pink-600"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/201113039402",
      label: currentLang === "ar" ? "واتساب" : "WhatsApp",
      color: "hover:bg-green-600"
    },
    {
      icon: Phone,
      href: "tel:+201113039402",
      label: currentLang === "ar" ? "اتصل بنا" : "Call Us",
      color: "hover:bg-blue-500"
    }
  ]

  return (
    <div className={`fixed ${isRTL ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 z-40 hidden lg:block`}>
      <motion.div
        initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex flex-col space-y-4"
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`group relative p-3 rounded-full ${
              isDark ? "bg-slate-800" : "bg-white"
            } shadow-lg hover:shadow-xl transition-all duration-300 border ${
              isDark ? "border-slate-700" : "border-gray-200"
            } ${social.color} hover:text-white`}
            title={social.label}
          >
            <social.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className={`absolute ${isRTL ? 'right-full mr-3' : 'left-full ml-3'} top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
              <div className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${
                isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
              } shadow-lg border ${
                isDark ? "border-slate-700" : "border-gray-200"
              }`}>
                {social.label}
              </div>
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-2 h-2 ${
                isDark ? "bg-slate-900" : "bg-white"
              } rotate-45 border ${
                isDark ? "border-slate-700" : "border-gray-200"
              } ${isRTL ? '-right-1' : '-left-1'}`} />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

