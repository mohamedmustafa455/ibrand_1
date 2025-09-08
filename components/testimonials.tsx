"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"

const testimonials = [
  {
    id: 1,
    name: "Sarah Al-Mahmoud",
    nameAr: "سارة المحمود",
    company: "TechStart Arabia",
    companyAr: "تيك ستارت العربية",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b882?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The voice-over quality exceeded our expectations. The Arabic narrator perfectly captured our brand's tone and our product demo video engagement increased by 280%.",
    textAr: "تجاوزت جودة التعليق الصوتي توقعاتنا. الناطق العربي أدرك تماماً نبرة علامتنا التجارية وزاد تفاعل فيديو عرض منتجنا بنسبة 280%.",
    result: "+280% Video Engagement",
    resultAr: "+280% تفاعل الفيديو"
  },
  {
    id: 2,
    name: "Omar Al-Rashid",
    nameAr: "عمر الرشيد",
    company: "Elite Fashion",
    companyAr: "إيليت فاشن",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Our sponsored ads campaign generated 5x ROI within the first month. The targeting was so precise that our cost per acquisition dropped by 60%.",
    textAr: "حملة إعلاناتنا الممولة حققت عائد استثمار 5 أضعاف في الشهر الأول. كان الاستهداف دقيقاً جداً لدرجة أن تكلفة اكتساب العميل انخفضت بنسبة 60%.",
    result: "500% ROI",
    resultAr: "500% عائد الاستثمار"
  },
  {
    id: 3,
    name: "Nadia Qureshi",
    nameAr: "نادية قريشي",
    company: "Health & Wellness Hub",
    companyAr: "مركز الصحة والعافية",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The content quality is outstanding! Our blog traffic increased by 400% in 6 months, and we're now ranking on the first page for our target keywords.",
    textAr: "جودة المحتوى متميزة! زادت حركة مرور مدونتنا بنسبة 400% في 6 أشهر، ونحن الآن في الصفحة الأولى لكلماتنا المفتاحية المستهدفة.",
    result: "+400% Blog Traffic",
    resultAr: "+400% حركة مرور المدونة"
  },
  {
    id: 4,
    name: "Yussef Al-Khairy",
    nameAr: "يوسف الخيري",
    company: "Luxury Real Estate",
    companyAr: "العقارات الفاخرة",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Having iBrand manage our marketing has been transformative. Our lead generation increased by 250% and we closed 40% more deals this year.",
    textAr: "إدارة آي براند للتسويق كانت تحويلية. زادت عملية توليد العملاء المحتملين بنسبة 250% وأغلقنا 40% صفقات أكثر هذا العام.",
    result: "+250% Lead Generation",
    resultAr: "+250% توليد العملاء المحتملين"
  },
  {
    id: 5,
    name: "Aisha Al-Mansouri",
    nameAr: "عائشة المنصوري",
    company: "Gourmet Delights",
    companyAr: "متع الطعام",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The brand identity they created perfectly captures our premium positioning. Our restaurant's bookings increased by 200% after the rebrand launch.",
    textAr: "الهوية البصرية التي أنشأوها تدرك تماماً موقعنا المميز. زادت حجوزات مطعمنا بنسبة 200% بعد إطلاق إعادة العلامة التجارية.",
    result: "+200% Bookings",
    resultAr: "+200% الحجوزات"
  },
  {
    id: 6,
    name: "Salim Al-Rashid",
    nameAr: "سالم الرشيد",
    company: "Adventure Tourism",
    companyAr: "السياحة المغامرة",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The promotional video they edited for our tours was stunning! It went viral on social media and bookings increased by 300% in the following month.",
    textAr: "الفيديو الترويجي الذي حرروه لرحلاتنا كان مذهلاً! انتشر بشكل واسع على وسائل التواصل الاجتماعي وزادت الحجوزات بنسبة 300% في الشهر التالي.",
    result: "+300% Bookings",
    resultAr: "+300% الحجوزات"
  }
]

export default function Testimonials() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-slate-800" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-32 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm animate-float-3d" />
        <div className="absolute -right-16 top-1/3 w-28 h-36 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/4 bottom-20 w-24 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
      </div>

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
            {t("testimonials.title")}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("testimonials.description")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${
                isDark ? "bg-slate-700" : "bg-white"
              } shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className={`w-8 h-8 ${
                  isDark ? "text-blue-400/30" : "text-blue-600/30"
                }`} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className={`text-sm mb-6 leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {isRTL ? testimonial.textAr : testimonial.text}
              </p>

              {/* Result Badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                isDark ? "bg-green-600/20 text-green-400" : "bg-green-100 text-green-700"
              }`}>
                <TrendingUp className="w-3 h-3" />
                {isRTL ? testimonial.resultAr : testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={isRTL ? testimonial.nameAr : testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className={`font-semibold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {isRTL ? testimonial.nameAr : testimonial.name}
                  </h4>
                  <p className={`text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {isRTL ? testimonial.companyAr : testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`relative overflow-hidden rounded-3xl p-8 md:p-12 ${
            isDark ? "bg-slate-700" : "bg-white"
          } shadow-2xl mb-16`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentTestimonial.avatar}
                  alt={isRTL ? currentTestimonial.nameAr : currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  loading="lazy"
                />
                <div>
                  <h3 className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {isRTL ? currentTestimonial.nameAr : currentTestimonial.name}
                  </h3>
                  <p className={`text-lg ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {isRTL ? currentTestimonial.companyAr : currentTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className={`p-2 rounded-full transition-colors ${
                    isDark 
                      ? "bg-slate-600 text-white hover:bg-slate-500" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className={`p-2 rounded-full transition-colors ${
                    isDark 
                      ? "bg-slate-600 text-white hover:bg-slate-500" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className={`text-xl md:text-2xl leading-relaxed mb-8 ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}>
              &ldquo;{isRTL ? currentTestimonial.textAr : currentTestimonial.text}&rdquo;
            </blockquote>

            {/* Result */}
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-lg font-semibold ${
              isDark ? "bg-green-600/20 text-green-400" : "bg-green-100 text-green-700"
            }`}>
              <TrendingUp className="w-5 h-5" />
              {isRTL ? currentTestimonial.resultAr : currentTestimonial.result}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl ${
            isDark ? "bg-slate-700" : "bg-white"
          } shadow-xl`}
        >
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}>
              98%
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "رضا العملاء" : "Client Satisfaction"}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? "text-green-400" : "text-green-600"
            }`}>
              500+
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "عميل راضٍ" : "Happy Clients"}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? "text-yellow-400" : "text-yellow-600"
            }`}>
              4.9/5
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "متوسط التقييم" : "Average Rating"}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? "text-purple-400" : "text-purple-600"
            }`}>
              100%
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "معدل النجاح" : "Success Rate"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
