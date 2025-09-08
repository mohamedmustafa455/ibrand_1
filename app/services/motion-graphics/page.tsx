"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { servicesData } from "@/data/services"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
import Portfolio from "@/components/portfolio"
import { portfolioData } from "@/data/portfolio-data"
import ServiceResultsGallery from "@/components/service-results-gallery"
import InteractiveGallery from "@/components/interactive-gallery"
import CompanyGallery from "@/components/company-gallery"

// Static page for the Motion Graphics service
const service = servicesData.find(s => s.id === "motion-graphics")

export default function MotionGraphicsPage() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const safeT = (key: string, fallback: string) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const timelineRef = useRef(null)
  const faqRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })

  if (!service) return null

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const relatedServices = servicesData
    .filter(s => s.id !== service.id)
    .slice(0, 3)

  // Curated mapping from service id to relevant portfolio project IDs
  const serviceToPortfolioIds: Record<string, string[]> = {
    "visual-identity": ["high-brand", "elegant-beauty", "united-brothers"],
    "graphic-design": ["king-wood", "al-jazzar", "radwan"],
    "motion-graphics": ["testy", "al-ula", "journey-start"],
    "video-editing": ["testy", "radwan", "al-ula"],
    "content-writing": ["journey-start", "approved-achievement", "perfection-seeking"],
    "sponsored-ads": ["high-brand", "king-wood", "testy"],
    "voiceover": ["al-ula", "testy", "journey-start"],
    "monthly-management": ["high-brand", "king-wood", "al-ula"],
  }

  const curatedIds = (serviceToPortfolioIds[service.id] || [])
    .filter((id) => portfolioData.some((p) => p.id === id))
    .slice(0, 3)
  const fallbackIds = curatedIds.length < 3
    ? portfolioData
        .slice()
        .sort((a, b) => (b.results?.length || 0) - (a.results?.length || 0))
        .map((p) => p.id)
        .filter((id) => !curatedIds.includes(id))
        .slice(0, 3 - curatedIds.length)
    : []
  const selectedPortfolioIds = [...curatedIds, ...fallbackIds]

  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={isRTL ? "ar" : "en"} className={`min-h-screen overflow-x-hidden ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
      <Header />
      
      {/* Back to Services */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        <Link 
          href="/services"
          className={`inline-flex items-center text-sm hover:underline transition-colors ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <ArrowLeft className={`h-4 w-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
          {t("servicePage.backToServices")}
        </Link>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`py-20 relative overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
            : "bg-gradient-to-br from-blue-50 via-blue-100/50 to-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 100 : -100 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className={`flex items-center mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                    : "bg-gradient-to-br from-blue-600 to-blue-800"
                } shadow-lg ${isRTL ? "ml-4" : "mr-4"}`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-4xl md:text-5xl font-black ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {t(`services.${service.id}`)}
                  </h1>
                </div>
              </div>
              
              <p className={`text-xl md:text-2xl leading-relaxed mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {t(`services.${service.id}Desc`)}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-lift ${
                    isDark
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                  } text-white`}
                >
                  {t("servicePage.packages.getStarted")}
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className={`px-8 py-3 text-lg font-semibold rounded-xl border-2 transition-all duration-300 ${
                    isDark
                      ? "border-blue-600 text-blue-300 hover:border-blue-400 hover:text-blue-400"
                      : "border-blue-300 text-blue-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {t("servicePage.features.title")}
                </Button>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -100 : 100 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
              className="relative"
            >
              <div className={`relative h-96 rounded-2xl overflow-hidden shadow-2xl ${isDark ? "bg-slate-900" : "bg-white"}`}>
                <Image
                  src={service.heroImage}
                  alt={t(`services.${service.id}`)}
                  fill
                  className="object-contain"
                />
                <div className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-t from-blue-900/50 to-transparent"
                    : "bg-gradient-to-t from-blue-900/20 to-transparent"
                }`} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className={`py-20 ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("servicePage.features.title")}
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {t("servicePage.features.subtitle").replace("{service}", t(`services.${service.id}`))}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => {
              const featureLocalized = feature as unknown as { titleAr?: string; descriptionAr?: string }
              const featureTitleKey = `servicePage.features.items.${service.id}.${index}.title`
              const featureDescKey = `servicePage.features.items.${service.id}.${index}.description`
              const localizedFeatureTitle = isRTL
                ? (featureLocalized.titleAr || safeT(featureTitleKey, feature.title))
                : safeT(featureTitleKey, feature.title)
              const localizedFeatureDesc = isRTL
                ? (featureLocalized.descriptionAr || safeT(featureDescKey, feature.description))
                : safeT(featureDescKey, feature.description)
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl transition-all duration-300 hover-lift ${
                  isDark
                    ? "bg-slate-700/80 hover:bg-slate-600/80 border border-blue-500/20"
                    : "bg-blue-50/50 hover:bg-white hover:shadow-lg border border-blue-200/50"
                }`}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {localizedFeatureTitle}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {localizedFeatureDesc}
                </p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={`py-20 ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-gradient-to-br from-blue-50/30 to-white"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("servicePage.gallery.title")}
              </span>
            </h2>
          </div>
          {/* Single motion video: show big without cards */}
          <ServiceResultsGallery serviceId={service.id} display="carousel" showTags={false} showBadge={false} forceAutoPlay hideThumbnails heightClass="h-[60vh] md:h-[70vh]" />
        </div>
      </section>

      {/* Replaced: Our Previous Work (removed as per requirement) */}

      {/* Process Timeline */}
      <section
        ref={timelineRef}
        className={`py-20 ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {service.timeline.map((step, index) => {
              const stepLocalized = step as unknown as { titleAr?: string; descriptionAr?: string; durationAr?: string }
              const stepTitleKey = `servicePage.timeline.items.${service.id}.${index}.title`
              const stepDescKey = `servicePage.timeline.items.${service.id}.${index}.description`
              const stepDurationKey = `servicePage.timeline.items.${service.id}.${index}.duration`
              const localizedStepTitle = isRTL
                ? (stepLocalized.titleAr || safeT(stepTitleKey, step.title))
                : safeT(stepTitleKey, step.title)
              const localizedStepDesc = isRTL
                ? (stepLocalized.descriptionAr || safeT(stepDescKey, step.description))
                : safeT(stepDescKey, step.description)
              const localizedStepDuration = isRTL
                ? (stepLocalized.durationAr || safeT(stepDurationKey, step.duration))
                : safeT(stepDurationKey, step.duration)
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 100 : -100 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 100 : -100 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${isRTL ? "flex-row-reverse" : ""}`}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-white ${
                  isDark
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                    : "bg-gradient-to-r from-blue-600 to-blue-800"
                } shadow-lg ${isRTL ? "ml-8" : "mr-8"}`}>
                  {step.step}
                </div>
                
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {localizedStepTitle}
                  </h3>
                  <p className={`mb-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {localizedStepDesc}
                  </p>
                  <div className={`text-sm font-semibold ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    ⏱️ {localizedStepDuration}
                  </div>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Study (if available) */}
      {service.caseStudy && (
        <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t("servicePage.caseStudy.title")}
                </span>
              </h2>
            </div>

            <div className={`max-w-4xl mx-auto p-8 rounded-2xl ${
              isDark ? "bg-slate-800" : "bg-white"
            } shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                {service.caseStudy.client}
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {t("servicePage.caseStudy.challenge")}
                  </h4>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {service.caseStudy.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {t("servicePage.caseStudy.solution")}
                  </h4>
                  <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                    {service.caseStudy.solution}
                  </p>
                </div>
                
                <div>
                  <h4 className={`text-lg font-semibold mb-3 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}>
                    {t("servicePage.caseStudy.results")}
                  </h4>
                  <div className="space-y-4">
                    {service.caseStudy.results.map((result, index) => (
                      <div key={index} className={`p-3 rounded-lg ${
                        isDark ? "bg-slate-700" : "bg-gray-50"
                      }`}>
                        <div className={`text-xl font-bold ${
                          isDark ? "text-green-400" : "text-green-600"
                        }`}>
                          {result.value}
                        </div>
                        <div className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}>
                          {result.metric}
                        </div>
                        <div className={`text-xs ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section
        ref={faqRef}
        className={`py-20 ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("servicePage.faqs.title")}
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDark
                    ? "border-slate-600 bg-slate-700"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  className={`w-full p-6 ${isRTL ? "text-right" : "text-left"} flex justify-between items-center hover:bg-opacity-80 transition-colors ${
                    isDark ? "hover:bg-slate-600" : "hover:bg-gray-100"
                  }`}
                >
                  <span className={`text-lg font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {isRTL ? faq.questionAr || faq.question : faq.question}
                  </span>
                  {activeFAQ === index ? (
                    <ChevronUp className={`h-6 w-6 ${isDark ? "text-gray-300" : "text-gray-600"}`} />
                  ) : (
                    <ChevronDown className={`h-6 w-6 ${isDark ? "text-gray-300" : "text-gray-600"}`} />
                  )}
                </button>
                
                {activeFAQ === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-6 pb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {isRTL ? faq.answerAr || faq.answer : faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center p-12 rounded-3xl ${
              isDark
                ? "bg-gradient-to-r from-slate-800 to-slate-700"
                : "bg-gradient-to-r from-blue-50 to-purple-50"
            } shadow-2xl`}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              {t("servicePage.cta.title")}
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {t("servicePage.cta.subtitle")}
            </p>
            <Link href="/contact" className="inline-block">
              <Button className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                isDark
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
              } text-white`}>
                {t("servicePage.cta.button")}
                <ArrowRight className={`h-5 w-5 ${isRTL ? "mr-2 ml-0 rotate-180" : "ml-2"}`} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Related Services */}
      <section className={`py-20 ${isDark ? "bg-gradient-to-br from-slate-800 to-slate-900" : "bg-gradient-to-br from-white to-blue-50/30"}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("servicePage.relatedServices")}
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl transition-all duration-300 hover-lift ${
                  isDark
                    ? "bg-slate-700/80 hover:bg-slate-600/80 border border-blue-500/20"
                    : "bg-blue-50/50 hover:bg-white hover:shadow-lg border border-blue-200/50"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                    : "bg-gradient-to-br from-blue-600 to-blue-800"
                } shadow-lg`}>
                  {(() => {
                    const IconComponent = relatedService.icon;
                    return <IconComponent className="h-6 w-6 text-white" />;
                  })()}
                </div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {t(`services.${relatedService.id}`)}
                </h3>
                
                <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {t(`services.${relatedService.id}Desc`)}
                </p>
                
                <Link
                  href={`/services/${relatedService.slug}`}
                  className={`inline-flex items-center font-semibold transition-colors ${
                    isDark
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  {t("services.learnMore")}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
