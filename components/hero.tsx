"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play, ArrowRight, Users, Award, Globe } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    window.location.href = "/contact"
  }

  const scrollToAbout = () => {
    window.location.href = "/about"
  }

  return (
    <section
      id="home"
      className={`relative py-20 lg:py-32 flex items-center justify-center overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
      ref={ref}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/ibrand.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              isDark ? "text-white" : "text-white"
            }`}>
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-yellow-400 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </h1>
            <p className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? "text-gray-200" : "text-gray-100"
            }`}>
              {t("hero.subtitle")}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-lift ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              } text-white shadow-xl hover:shadow-2xl`}
            >
              {t("hero.cta")}
              <ArrowRight className={`w-5 h-5 ml-2 ${isRTL ? "mr-2 ml-0 rotate-180" : ""}`} />
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className={`px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover-lift ${
                isDark
                  ? "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  : "border-white/50 text-white hover:bg-white/20 hover:border-white/70"
              }`}
            >
              <Play className={`w-5 h-5 mr-2 ${isRTL ? "ml-2 mr-0" : ""}`} />
              {t("hero.learnMore")}
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                icon: Globe,
                value: <span className="text-white">9</span>,
                label: isRTL ? "دولة عربية" : "Arab Countries",
                description: isRTL ? "نعمل في 9 دول عربية" : "Operating in 9 Arab countries",
                bgColor: "from-blue-500 to-blue-600",
                textColor: "text-blue-100"
              },              
              {
                icon: Award,
                value: "73+",
                label: isRTL ? "علامة تجارية" : "Brands",
                description: isRTL ? "أكثر من 73 علامة تجارية" : "More than 73 brands",
                bgColor: "from-green-500 to-green-600",
                textColor: "text-green-100"
              },
              {
                icon: Users,
                value: "500+",
                label: isRTL ? "عميل راضٍ" : "Happy Clients",
                description: isRTL ? "عملاء راضون عن خدماتنا" : "Satisfied clients with our services",
                bgColor: "from-purple-500 to-purple-600",
                textColor: "text-purple-100"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl p-6 ${
                  isDark ? "bg-slate-800/80" : "bg-white/80"
                } backdrop-blur-sm border ${
                  isDark ? "border-slate-700" : "border-gray-200"
                } shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bgColor} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`text-3xl font-bold mb-2 ${stat.textColor}`}>
                    {stat.value}
                  </div>
                  <div className={`text-lg font-semibold mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Earth Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => {
          const element = document.getElementById("about")
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }}
        className={`absolute top-8 right-8 p-4 rounded-full ${
          isDark ? "bg-slate-800/80" : "bg-white/90"
        } backdrop-blur-sm border ${
          isDark ? "border-slate-700" : "border-white/50"
        } shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20`}
      >
        <Globe className={`w-6 h-6 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
          isDark ? "text-blue-400" : "text-blue-600"
        }`} />
      </motion.button>
    </section>
  )
}
