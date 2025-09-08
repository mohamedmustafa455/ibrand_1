"use client"

import React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Rocket, 
  TrendingUp, 
  Target, 
  Award,
  ArrowRight,
  Play,
  Pause
} from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface JourneyStep {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  duration: string
  color: string
  bgColor: string
  image: string
  benefits: string[]
  benefitsAr: string[]
}

const journeySteps: JourneyStep[] = [
  {
    id: "discovery",
    icon: Search,
    title: "Discovery & Research",
    titleAr: "الاكتشاف والبحث",
    description: "We analyze your market, competitors, and target audience to understand your unique position and identify opportunities for growth",
    descriptionAr: "نحلل سوقك ومنافسيك والجمهور المستهدف لفهم موقعك الفريد وتحديد فرص النمو",
    duration: "1-2 weeks",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Market analysis and competitor research",
      "Target audience identification and profiling",
      "SWOT analysis and opportunity mapping",
      "Industry trends and market insights"
    ],
    benefitsAr: [
      "تحليل السوق وبحث المنافسين",
      "تحديد الجمهور المستهدف وملامحه",
      "تحليل نقاط القوة والضعف والفرص والتهديدات",
      "اتجاهات الصناعة ورؤى السوق"
    ]
  },
  {
    id: "strategy",
    icon: Lightbulb,
    title: "Strategy Development",
    titleAr: "تطوير الاستراتيجية",
    description: "Create a comprehensive marketing strategy tailored to your business goals, budget, and market position with clear action plans",
    descriptionAr: "إنشاء استراتيجية تسويقية شاملة مخصصة لأهداف عملك وميزانيتك وموقعك في السوق مع خطط عمل واضحة",
    duration: "1-2 weeks",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-100",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Customized marketing strategy development",
      "Budget allocation and resource planning",
      "Channel selection and integration planning",
      "Performance metrics and KPIs definition"
    ],
    benefitsAr: [
      "تطوير استراتيجية تسويقية مخصصة",
      "توزيع الميزانية وتخطيط الموارد",
      "اختيار القنوات وتخطيط التكامل",
      "تحديد مقاييس الأداء والمؤشرات الرئيسية"
    ]
  },
  {
    id: "design",
    icon: Palette,
    title: "Creative Design",
    titleAr: "التصميم الإبداعي",
    description: "Develop your visual identity, content, and creative assets that resonate with your audience and reflect your brand values",
    descriptionAr: "تطوير هويتك البصرية والمحتوى والأصول الإبداعية التي تتناغم مع جمهورك وتعكس قيم علامتك التجارية",
    duration: "2-3 weeks",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-100",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Visual identity and brand design",
      "Content creation and copywriting",
      "Creative asset development",
      "Brand guidelines and style guides"
    ],
    benefitsAr: [
      "تصميم الهوية البصرية والعلامة التجارية",
      "إنشاء المحتوى والكتابة الإبداعية",
      "تطوير الأصول الإبداعية",
      "دليل العلامة التجارية وأدلة النمط"
    ]
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Campaign Launch",
    titleAr: "إطلاق الحملة",
    description: "Execute your marketing campaigns across all channels with precision, optimization, and real-time monitoring for maximum impact",
    descriptionAr: "تنفيذ حملاتك التسويقية عبر جميع القنوات بدقة وتحسين مستمر ومراقبة فورية لأقصى تأثير",
    duration: "Ongoing",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-100",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Multi-channel campaign execution",
      "Real-time performance monitoring",
      "A/B testing and optimization",
      "Cross-platform integration"
    ],
    benefitsAr: [
      "تنفيذ الحملات متعددة القنوات",
      "مراقبة الأداء في الوقت الفعلي",
      "الاختبار والتحسين",
      "التكامل عبر المنصات"
    ]
  },
  {
    id: "optimize",
    icon: TrendingUp,
    title: "Optimize & Scale",
    titleAr: "التحسين والتوسع",
    description: "Continuously monitor performance, optimize campaigns, and scale successful strategies based on data-driven insights and results",
    descriptionAr: "مراقبة الأداء باستمرار، تحسين الحملات، وتوسيع الاستراتيجيات الناجحة بناءً على الرؤى والنتائج المدعومة بالبيانات",
    duration: "Continuous",
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Performance analysis and reporting",
      "Campaign optimization strategies",
      "Scaling successful tactics",
      "ROI improvement and cost reduction"
    ],
    benefitsAr: [
      "تحليل الأداء وإعداد التقارير",
      "استراتيجيات تحسين الحملات",
      "توسيع التكتيكات الناجحة",
      "تحسين عائد الاستثمار وتقليل التكاليف"
    ]
  },
  {
    id: "success",
    icon: Award,
    title: "Achieve Results",
    titleAr: "تحقيق النتائج",
    description: "Reach your marketing goals with measurable ROI, sustainable business growth, and long-term success through proven strategies",
    descriptionAr: "تحقيق أهدافك التسويقية مع عائد استثمار قابل للقياس ونمو مستدام للأعمال ونجاح طويل المدى من خلال استراتيجيات مثبتة",
    duration: "Ongoing",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-100",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&crop=center",
    benefits: [
      "Measurable ROI and business growth",
      "Long-term customer relationships",
      "Market leadership and brand authority",
      "Sustainable competitive advantage"
    ],
    benefitsAr: [
      "عائد استثمار قابل للقياس ونمو الأعمال",
      "علاقات عملاء طويلة المدى",
      "قيادة السوق وسلطة العلامة التجارية",
      "ميزة تنافسية مستدامة"
    ]
  }
]

interface CustomerJourneyProps {
  embedded?: boolean
  className?: string
}

export default function CustomerJourney({ embedded = false, className }: CustomerJourneyProps) {
  const { isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setIsAutoPlaying(!isPlaying)
  }

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % journeySteps.length)
    setIsAutoPlaying(false)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + journeySteps.length) % journeySteps.length)
    setIsAutoPlaying(false)
  }

  const goToStep = (index: number) => {
    setCurrentStep(index)
    setIsAutoPlaying(false)
  }

  return (
    <section
      ref={ref}
      className={`relative ${embedded ? "py-10 bg-transparent" : "py-20"} overflow-hidden ${
        embedded ? "" : (isDark ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-gray-50 via-white to-blue-50")
      } ${className ?? ""}`}
    >
      {/* Background Elements */}
      {!embedded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-20 w-32 h-40 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-3xl backdrop-blur-sm animate-float-3d" />
          <div className="absolute -right-16 bottom-20 w-28 h-36 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-3xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
          <div className="absolute left-1/3 top-1/2 w-20 h-24 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={`text-center ${embedded ? "mb-10" : "mb-16"}`}
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${embedded ? "bg-blue-500/5" : "bg-gradient-to-r from-blue-500/10 to-indigo-500/10"} border border-blue-200/50 dark:border-blue-700/50 ${embedded ? "mb-4" : "mb-6"}`}>
            <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className={`text-sm font-medium ${isDark ? "text-blue-300" : "text-blue-700"}`}>
              {isRTL ? "رحلة العميل" : "Customer Journey"}
            </span>
          </div>
          <h2 className={`${embedded ? "text-3xl md:text-4xl mb-3" : "text-4xl md:text-5xl mb-6"} font-black ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isRTL ? "رحلة النجاح معنا" : "Your Journey to Success"}
            </span>
          </h2>
          <p className={`${embedded ? "text-base" : "text-xl"} max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "اكتشف كيف نعمل معاً لتحويل رؤيتك إلى واقع ملموس من خلال عملية منهجية ومثبتة تؤدي إلى نتائج استثنائية"
              : "Discover how we work together to turn your vision into reality through a systematic and proven process that leads to exceptional results"
          }
          </p>
        </motion.div>

        {/* Journey Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative max-w-7xl mx-auto ${embedded ? "mb-10" : "mb-16"}`}
        >
          {/* Journey Path */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform -translate-y-1/2 rounded-full opacity-20" />
            
            {/* Steps */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-8 relative">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div
                    onClick={() => goToStep(index)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 mx-auto ${
                      index === currentStep
                        ? `bg-gradient-to-r ${step.color} shadow-lg shadow-blue-500/25 scale-110`
                        : isDark
                        ? "bg-slate-700 hover:bg-slate-600"
                        : "bg-white hover:bg-gray-50 shadow-md"
                    }`}
                  >
                    <step.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${
                      index === currentStep ? "text-white" : isDark ? "text-gray-300" : "text-gray-600"
                    }`} />
                  </div>

                  {/* Step Label */}
                  <div className="text-center mt-3">
                    <div className={`text-xs lg:text-sm font-medium ${
                      index === currentStep
                        ? "text-blue-600 dark:text-blue-400"
                        : isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {isRTL ? step.titleAr : step.title}
                    </div>
                    <div className={`text-xs ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {step.duration}
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {index === currentStep && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current Step Details */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className={`p-8 rounded-3xl ${embedded ? "shadow-lg" : "shadow-2xl"} ${
            isDark ? "bg-slate-800/90" : "bg-white/90"
          } backdrop-blur-sm border ${
            isDark ? "border-slate-700" : "border-gray-200"
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Step Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isDark ? "bg-slate-700" : "bg-gray-100"
                  }`}>
                    {(() => {
                      const IconComponent = journeySteps[currentStep].icon;
                      return <IconComponent className="h-8 w-8 text-blue-600" />;
                    })()}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                      {isRTL ? journeySteps[currentStep].titleAr : journeySteps[currentStep].title}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium inline-block ${
                      isDark ? "bg-blue-600/20 text-blue-300" : "bg-blue-100 text-blue-700"
                    }`}>
                      {journeySteps[currentStep].duration}
                    </div>
                  </div>
                </div>

                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {isRTL ? journeySteps[currentStep].descriptionAr : journeySteps[currentStep].description}
                </p>

                {/* Step Benefits */}
                <div className="space-y-3">
                  {journeySteps[currentStep].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {isRTL 
                          ? journeySteps[currentStep].benefitsAr[i]
                          : benefit
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Visual */}
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image 
                    src={journeySteps[currentStep].image} 
                    alt={isRTL ? journeySteps[currentStep].titleAr : journeySteps[currentStep].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold mb-2">
                    {isRTL ? "الخطوة" : "Step"} {currentStep + 1}
                  </h4>
                  <p className="text-sm opacity-90">
                    {isRTL 
                      ? "من رحلة النجاح"
                      : "of your success journey"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`flex justify-center items-center gap-6 ${embedded ? "mt-8" : "mt-12"}`}
        >
          <Button
            onClick={prevStep}
            variant="outline"
            className={`w-12 h-12 rounded-full p-0 ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
          </Button>

          <Button
            onClick={togglePlayPause}
            className={`w-16 h-16 rounded-full p-0 ${
              isDark
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
            } text-white shadow-lg`}
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </Button>

          <Button
            onClick={nextStep}
            variant="outline"
            className={`w-12 h-12 rounded-full p-0 ${
              isDark
                ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ArrowRight className={`w-5 h-5 ${isRTL ? "" : "rotate-180"}`} />
          </Button>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`flex justify-center ${embedded ? "mt-6" : "mt-8"} gap-2`}
        >
          {journeySteps.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-blue-600 scale-125"
                  : isDark
                  ? "bg-slate-600 hover:bg-slate-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        {!embedded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <p className={`text-lg mb-6 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL 
                ? "مستعد لبدء رحلة النجاح؟"
                : "Ready to start your success journey?"
              }
            </p>
            <Button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              } text-white shadow-xl hover:shadow-2xl hover:scale-105`}
            >
              {isRTL ? "ابدأ الآن" : "Get Started Now"}
              <Rocket className={`h-5 w-5 ${isRTL ? "mr-2 ml-0" : "ml-2"}`} />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
