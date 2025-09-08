"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Download, Puzzle, Eye, Target as TargetIcon, TrendingUp, Globe, CheckCircle, Star, Users2, Trophy } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import CustomerJourney from "@/components/customer-journey"


function About3DScene() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* CSS-based floating elements */}
      <div
        className="absolute -left-16 top-32 w-28 h-36 bg-gradient-to-br from-blue-400/15 to-blue-500/15 rounded-2xl backdrop-blur-sm animate-float-3d"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute -right-20 bottom-32 w-32 h-40 bg-gradient-to-br from-yellow-400/15 to-yellow-500/15 rounded-2xl backdrop-blur-sm animate-float-3d"
        style={{ animationDelay: "3s" }}
      />

      {/* Floating spheres */}
      <div
        className="absolute left-1/4 bottom-16 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full animate-pulse animate-float-3d"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute right-1/3 top-20 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full animate-pulse animate-float-3d"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}

export default function About() {
  const { t, isRTL, currentLang } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isDownloading, setIsDownloading] = useState(false)

  // تحديث milestones عند تغيير اللغة
  const [milestones, setMilestones] = useState([
    { 
      year: "2018", 
      title: "Founded", 
      description: "iBrand established as a creative marketing agency" 
    },
    { 
      year: "2020", 
      title: "Digital Expansion", 
      description: "Launched comprehensive digital marketing services" 
    },
    { 
      year: "2022", 
      title: "500+ Clients", 
      description: "Reached milestone of serving 500+ satisfied clients" 
    },
    { 
      year: "2024", 
      title: "Industry Leader", 
      description: "Recognized as leading marketing agency in the region" 
    },
  ])

  // تحديث values عند تغيير اللغة
  const [values, setValues] = useState([
    {
      icon: Puzzle,
      title: "Our Mission",
      description: "At iBrand, our mission is to help you achieve stronger sales, expand your reach to a new audience, and enhance your market position. We provide you with smart tools and strategies that ensure your superiority in competition across all social media platforms, enabling you to attract more customers and achieve the highest return on your investment.",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "We aim to be the leading company globally in achieving success for companies and projects, through smart marketing strategies that protect you from loss, and ensure your effective reach to target customers. With iBrand, you will not just be an option in the market, but you will always be the first choice in your customers' minds.",
      bgColor: "from-blue-700 to-blue-900"
    },
    {
      icon: TargetIcon,
      title: "Our Goal",
      description: "Empowering companies and projects to open new markets, achieve wider spread, and increase their sales in the easiest ways. We understand the challenges of the market and strong competition, and therefore we provide you with integrated solutions that help you excel, achieve maximum benefit from social media platforms, and reach your target audience with accuracy and efficiency.",
      bgColor: "from-blue-500 to-blue-700"
    },
  ])

  useEffect(() => {
    const updatedMilestones = [
      { 
        year: "2018", 
        title: currentLang === "ar" ? "تأسيس الشركة" : "Founded", 
        description: currentLang === "ar" ? "تأسست iBrand كوكالة تسويق إبداعية" : "iBrand established as a creative marketing agency" 
      },
      { 
        year: "2020", 
        title: currentLang === "ar" ? "التوسع الرقمي" : "Digital Expansion", 
        description: currentLang === "ar" ? "إطلاق خدمات التسويق الرقمي الشاملة" : "Launched comprehensive digital marketing services" 
      },
      { 
        year: "2022", 
        title: currentLang === "ar" ? "500+ عميل" : "500+ Clients", 
        description: currentLang === "ar" ? "الوصول إلى مرحلة خدمة أكثر من 500 عميل راضٍ" : "Reached milestone of serving 500+ satisfied clients" 
      },
      { 
        year: "2024", 
        title: currentLang === "ar" ? "قائد الصناعة" : "Industry Leader", 
        description: currentLang === "ar" ? "الاعتراف بها كوكالة تسويق رائدة في المنطقة" : "Recognized as leading marketing agency in the region" 
      },
    ]
    setMilestones(updatedMilestones)

    const updatedValues = [
      {
        icon: Puzzle,
        title: t("about.mission"),
        description: t("about.missionDesc"),
        bgColor: "from-blue-600 to-blue-800"
      },
      {
        icon: Eye,
        title: t("about.vision"),
        description: t("about.visionDesc"),
        bgColor: "from-blue-700 to-blue-900"
      },
      {
        icon: TargetIcon,
        title: t("about.goal"),
        description: t("about.goalDesc"),
        bgColor: "from-blue-500 to-blue-700"
      },
    ]
    setValues(updatedValues)
  }, [currentLang, t])

  const handleDownloadBrochure = async () => {
    setIsDownloading(true)
    try {
      // Localized brochure content (TXT)
      const contentEn = `iBrand Marketing Agency - Company Profile
================================

Professional marketing agency specializing in creative branding solutions.

Our Services:

Voice-over Services

Sponsored Ads

Content Writing

Monthly Management

Video Editing

Visual Identity

Motion Graphics

Graphic Design

Contact Information:
Email: ibrandmarketingagency@gmail.com

Phone: +20 111 303 9402
Location: Egypt, Damietta, New Damietta, Central

Key Achievements:

500+ Successful Campaigns

300% Average ROI Increase

98% Client Satisfaction Rate

5+ Years of Excellence

For more information, visit: https://ibrand.agency
`

      const contentAr = `iBrand وكالة التسويق - الملف التعريفي
================================

وكالة تسويق احترافية متخصصة في حلول الهوية البصرية الإبداعية.

خدماتنا:

خدمات التعليق الصوتي

الإعلانات الممولة

كتابة المحتوى

الإدارة الشهرية

مونتاج الفيديو

الهوية البصرية

موشن جرافيك

التصميم الجرافيكي

معلومات التواصل:
البريد الإلكتروني: ibrandmarketingagency@gmail.com

الهاتف: +20 111 303 9402
الموقع: مصر، دمياط، دمياط الجديدة، الحي المركزي

أهم الإنجازات:

أكثر من 500 حملة ناجحة

زيادة متوسطة في العائد على الاستثمار بنسبة 300%

معدل رضا العملاء 98%

أكثر من 5 سنوات من التميز

للمزيد من المعلومات، تفضل بزيارة: https://ibrand.agency
`

      const isArabic = currentLang === 'ar' || isRTL
      const content = isArabic ? contentAr : contentEn
      // Add UTF-8 BOM for proper rendering in Windows Notepad, especially for Arabic
      const BOM = '\uFEFF'
      const blob = new Blob([BOM, content], { type: 'text/plain;charset=utf-8' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = isArabic ? 'iBrand-Company-Profile-AR.txt' : 'iBrand-Company-Profile-EN.txt'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

    } catch (error) {
      console.error('Download error:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const scrollToContact = () => {
    window.location.href = "/contact"
  }

  return (
    <section
      id="about"
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
      ref={ref}
    >
      <About3DScene />

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
            {t("about.title")}
          </h2>
          <p className={`text-lg md:text-xl max-w-4xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("about.description")}
          </p>
        </motion.div>

        {/* Countries & Brands Reach */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`rounded-2xl p-8 md:p-10 mb-20 ${
            isDark ? "bg-slate-800/70" : "bg-white"
          } shadow-xl`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="text-center md:text-start">
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {isRTL ? "عملنا في أكثر من" : "We have worked in"} <span className="text-blue-600">9+</span> {isRTL ? "دولة" : "countries"}
              </h3>
              <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                {isRTL ? "وعلى أكثر من" : "and on more than"} <span className="font-semibold text-blue-600">73+</span> {isRTL ? "براند" : "brands"}
              </p>
            </div>

            {/* Countries grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-5 w-full md:w-auto">
              {[
                { ar: "مصر", en: "Egypt", flag: "🇪🇬" },
                { ar: "السعودية", en: "Saudi Arabia", flag: "🇸🇦" },
                { ar: "الأردن", en: "Jordan", flag: "🇯🇴" },
                { ar: "الإمارات", en: "UAE", flag: "🇦🇪" },
                { ar: "قطر", en: "Qatar", flag: "🇶🇦" },
                { ar: "العراق", en: "Iraq", flag: "🇮🇶" },
                { ar: "ليبيا", en: "Libya", flag: "🇱🇾" },
                { ar: "السودان", en: "Sudan", flag: "🇸🇩" },
                { ar: "المغرب", en: "Morocco", flag: "🇲🇦" },
              ].map((c) => (
                <div
                  key={c.en}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 border ${
                    isDark ? "border-slate-700 bg-slate-900/40" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="text-xl leading-none">{c.flag}</span>
                  <span className={`${isDark ? "text-white" : "text-slate-800"} text-sm font-medium`}>
                    {isRTL ? c.ar : c.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Values Grid - Made Bigger and Taller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-2xl p-10 pb-16 ${
                isDark ? "bg-slate-800" : "bg-white"
              } shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift min-h-[500px]`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} opacity-5`} />
              
              {/* Icon */}
              <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${value.bgColor} flex items-center justify-center mb-8 shadow-lg`}>
                <value.icon className="w-10 h-10 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className={`text-3xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {value.title}
                </h3>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {value.description}
                </p>

                {/* Additional Content for Each Card */}
                {value.title === "Our Mission" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "استراتيجيات ذكية" : "Smart Strategies"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar" 
                            ? "تطوير استراتيجيات تسويقية مبتكرة ومخصصة لتحقيق أهدافك"
                            : "Develop innovative and customized marketing strategies to achieve your goals"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "نتائج مضمونة" : "Guaranteed Results"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar"
                            ? "ضمان تحقيق نتائج ملموسة وقابلة للقياس لعملك"
                            : "Ensure tangible and measurable results for your business"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {value.title === "Our Vision" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Globe className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "الريادة العالمية" : "Global Leadership"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar"
                            ? "نسعى لأن نكون الشركة الرائدة عالمياً في تحقيق النجاح"
                            : "We strive to be the leading company globally in achieving success"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "الخيار الأول" : "First Choice"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar"
                            ? "أن تكون دائماً الخيار الأول في أذهان عملائك"
                            : "To always be the first choice in your customers' minds"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {value.title === "Our Goal" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Users2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "تمكين الشركات" : "Empower Companies"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar"
                            ? "تمكين الشركات والمشاريع لفتح أسواق جديدة"
                            : "Empowering companies and projects to open new markets"
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Trophy className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {currentLang === "ar" ? "الوصول للجمهور" : "Audience Reach"}
                        </h4>
                        <p className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {currentLang === "ar"
                            ? "الوصول لجمهورك المستهدف بدقة وكفاءة"
                            : "Reach your target audience with accuracy and efficiency"
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How We Work (animated) */}
        

        {/* Journey Timeline */}
        <CustomerJourney embedded />

        {/* Curated Portfolio Section */}
        




        {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
          >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadBrochure}
              disabled={isDownloading}
              className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-lift ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              } text-white shadow-xl`}
            >
              {isDownloading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                />
              ) : (
                <Download className="w-5 h-5 mr-2" />
              )}
              {isDownloading ? (isRTL ? "جاري التحميل..." : "Downloading...") : t("about.downloadBrochure")}
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              className={`px-8 py-4 text-lg font-semibold rounded-xl border-2 transition-all duration-300 hover-lift ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              <Globe className="w-5 h-5 mr-2" />
              {isRTL ? "ابدأ مشروعك" : "Start Your Project"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
