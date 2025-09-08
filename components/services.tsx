"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight, TrendingUp, Sparkles, ExternalLink } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { servicesData } from "@/data/services"
import Image from "next/image"

export default function Services() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToContact = () => {
    window.location.href = "/contact"
  }

  const openGoogleForm = (serviceId: string) => {
    // Google Forms URLs for different services
    const formUrls: { [key: string]: string } = {
      voiceover: "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "sponsored-ads": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "content-writing": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "monthly-management": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "video-editing": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "visual-identity": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "motion-graphics": "https://forms.gle/t4Sj9HYhpQMYUVrq9",
      "graphic-design": "https://forms.gle/t4Sj9HYhpQMYUVrq9"
    }
    
    const formUrl = formUrls[serviceId] || "https://forms.gle/t4Sj9HYhpQMYUVrq9"
    window.open(formUrl, '_blank')
  }

  // Consistent color scheme with blue theme
  const getCardDesign = (index: number) => {
    const designs = [
      {
        bgGradient: "from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20",
        borderColor: "border-blue-200 dark:border-blue-700",
        iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
        accentColor: "text-blue-600 dark:text-blue-400",
        hoverGlow: "hover:shadow-blue-500/25",
        hoverBg: "group-hover:from-blue-100 group-hover:via-indigo-100 group-hover:to-purple-100 dark:group-hover:from-blue-800/30 dark:group-hover:via-indigo-800/30 dark:group-hover:to-purple-800/30"
      },
      {
        bgGradient: "from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-blue-900/20",
        borderColor: "border-indigo-200 dark:border-indigo-700",
        iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
        accentColor: "text-indigo-600 dark:text-indigo-400",
        hoverGlow: "hover:shadow-indigo-500/25",
        hoverBg: "group-hover:from-indigo-100 group-hover:via-purple-100 group-hover:to-blue-100 dark:group-hover:from-indigo-800/30 dark:group-hover:via-purple-800/30 dark:group-hover:to-blue-800/30"
      },
      {
        bgGradient: "from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20",
        borderColor: "border-purple-200 dark:border-purple-700",
        iconBg: "bg-gradient-to-br from-purple-500 to-blue-600",
        accentColor: "text-purple-600 dark:text-purple-400",
        hoverGlow: "hover:shadow-purple-500/25",
        hoverBg: "group-hover:from-purple-100 group-hover:via-blue-100 group-hover:to-indigo-100 dark:group-hover:from-purple-800/30 dark:group-hover:via-blue-800/30 dark:group-hover:to-indigo-800/30"
      },
      {
        bgGradient: "from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-indigo-900/20",
        borderColor: "border-blue-200 dark:border-blue-700",
        iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
        accentColor: "text-blue-600 dark:text-blue-400",
        hoverGlow: "hover:shadow-blue-500/25",
        hoverBg: "group-hover:from-blue-100 group-hover:via-cyan-100 group-hover:to-indigo-100 dark:group-hover:from-blue-800/30 dark:group-hover:via-cyan-800/30 dark:group-hover:to-indigo-800/30"
      },
      {
        bgGradient: "from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-900/20 dark:via-blue-900/20 dark:to-purple-900/20",
        borderColor: "border-indigo-200 dark:border-indigo-700",
        iconBg: "bg-gradient-to-br from-indigo-500 to-blue-600",
        accentColor: "text-indigo-600 dark:text-indigo-400",
        hoverGlow: "hover:shadow-indigo-500/25",
        hoverBg: "group-hover:from-indigo-100 group-hover:via-blue-100 group-hover:to-purple-100 dark:group-hover:from-indigo-800/30 dark:group-hover:via-blue-800/30 dark:group-hover:to-purple-800/30"
      },
      {
        bgGradient: "from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-900/20 dark:via-indigo-900/20 dark:to-blue-900/20",
        borderColor: "border-purple-200 dark:border-purple-700",
        iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
        accentColor: "text-purple-600 dark:text-purple-400",
        hoverGlow: "hover:shadow-purple-500/25",
        hoverBg: "group-hover:from-purple-100 group-hover:via-indigo-100 group-hover:to-blue-100 dark:group-hover:from-purple-800/30 dark:group-hover:via-indigo-800/30 dark:group-hover:to-blue-800/30"
      }
    ]
    return designs[index % designs.length]
  }

  // Desired order per request
  const desiredOrder = [
    "visual-identity",
    "graphic-design",
    "content-writing",
    "sponsored-ads",
    "monthly-management",
    "video-editing",
    "motion-graphics",
    "voiceover"
  ]

  const orderedServices = [...servicesData].sort(
    (a, b) => desiredOrder.indexOf(a.id) - desiredOrder.indexOf(b.id)
  )

  return (
    <section
      id="services"
      className={`relative py-16 overflow-hidden ${
        isDark ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30"
      }`}
      ref={ref}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-10 w-20 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-2xl backdrop-blur-sm animate-float-3d" />
        <div className="absolute -right-8 top-1/3 w-16 h-20 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/4 bottom-10 w-12 h-16 bg-gradient-to-br from-purple-400/10 to-blue-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
        <div className="absolute right-1/4 top-1/2 w-14 h-18 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 dark:border-blue-700/50 mb-4">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className={`text-sm font-medium ${isDark ? "text-blue-300" : "text-blue-700"}`}>
              {isRTL ? "خدماتنا المميزة" : "Our Premium Services"}
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent`}>
            {t("services.title")}
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("services.description")}
          </p>
        </motion.div>

        {/* Enhanced Services Grid with Better Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {orderedServices.map((service, index) => {
            const design = getCardDesign(index)
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border hover-sparkle ${
                  design.borderColor
                } bg-gradient-to-br ${
                  design.bgGradient
                } ${design.hoverBg} shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 ${design.hoverGlow}`}
                onClick={() => router.push(`/services/${service.slug}`)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    router.push(`/services/${service.slug}`)
                  }
                }}
              >
                {/* Enhanced Service Image with Hover Effects */}
                <div className={`relative h-40 overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}>
                  <Image
                    src={service.heroImage}
                    alt={service.id}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  
                  {/* Enhanced Service Icon with Hover Animation */}
                  <div className="absolute top-3 left-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${design.iconBg} shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <service.icon className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Category Badge with Hover Effect */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                      isDark ? "bg-slate-800/90 text-white" : "bg-white/95 text-slate-800"
                    } backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}>
                      {t(`services.${service.id}`)}
                    </span>
                  </div>
                </div>

                {/* Enhanced Service Content */}
                <div className="p-5">
                  <h3 className={`text-xl font-bold mb-3 ${design.accentColor} transition-colors duration-300 group-hover:scale-105 transform origin-left`}>
                    {t(`services.${service.id}`)}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {t(`services.${service.id}Desc`)}
                  </p>

                  {/* Compact Features with Hover Effects */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 group/feature">
                        <span className="text-sm transition-transform duration-300 group-hover/feature:scale-110">{feature.icon}</span>
                        <span className={`text-xs font-medium ${
                          isDark ? "text-gray-200" : "text-gray-700"
                        } transition-colors duration-300 group-hover/feature:text-blue-600 dark:group-hover/feature:text-blue-400`}>
                          {feature.title}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Results Preview */}
                  {service.testimonials.length > 0 && (
                    <div className={`p-3 rounded-xl mb-4 ${
                      isDark ? "bg-slate-700/50" : "bg-white/80"
                    } border ${
                      isDark ? "border-slate-600" : "border-gray-200"
                    } transition-all duration-300 group-hover:scale-105`}>
                      <div className="flex items-center gap-2">
                        <TrendingUp className={`w-4 h-4 ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        } transition-transform duration-300 group-hover:rotate-12`} />
                        <span className={`text-sm font-bold ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}>
                          {service.testimonials[0].resultStats?.value || "+200%"}
                        </span>
                        <span className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-500"
                        }`}>
                          {service.testimonials[0].resultStats?.metric || "Improvement"}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-3">
                    {/* Learn More Button - Fixed with Link */}
                    <Link href={`/services/${service.slug}`}>
                      <Button
                        className={`w-full py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                          design.iconBg
                        } text-white shadow-lg hover:shadow-xl hover:scale-105 group-hover:shadow-2xl`}
                      >
                        {t("services.learnMore")}
                        <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? "mr-2 ml-0 rotate-180" : ""}`} />
                      </Button>
                    </Link>

                    {/* Google Form Button */}
                    <Button
                      onClick={() => openGoogleForm(service.id)}
                      variant="outline"
                      className={`w-full py-2 text-xs font-medium rounded-lg transition-all duration-300 border-2 ${
                        isDark ? "border-slate-600 text-gray-300 hover:bg-slate-700" : "border-gray-300 text-gray-600 hover:bg-gray-50"
                      } hover:scale-105 group-hover:border-blue-500 group-hover:text-blue-600`}
                    >
                      <span className="mr-2">📝</span>
                      {isRTL ? "نموذج الطلب" : "Request Form"}
                      <ExternalLink className={`w-3 h-3 ml-2 ${isRTL ? "mr-2 ml-0" : ""}`} />
                    </Button>
                  </div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl ${
            isDark ? "bg-slate-800/50" : "bg-white/80"
          } border ${
            isDark ? "border-slate-700" : "border-gray-200"
          } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
            <div>
              <h3 className={`text-lg md:text-xl font-bold mb-1 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {isRTL ? "مستعد لبدء مشروعك؟" : "Ready to Start Your Project?"}
              </h3>
              <p className={`text-sm ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {isRTL 
                  ? "دعنا نناقش احتياجاتك ونبدع حلولاً تسويقية استثنائية" 
                  : "Let's discuss your needs and create exceptional solutions"
                }
              </p>
            </div>
            <Button
              onClick={scrollToContact}
              className="px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t("nav.getStarted")}
              <ArrowRight className={`w-4 h-4 ml-2 ${isRTL ? "mr-2 ml-0 rotate-180" : ""}`} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
