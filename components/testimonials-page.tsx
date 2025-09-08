"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, ArrowLeft } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      id: 1,
      name: isRTL ? "أحمد محمد" : "Ahmed Mohamed",
      company: isRTL ? "شركة التقنية المتقدمة" : "Advanced Tech Company",
      rating: 5,
      content: isRTL 
        ? "تعاملت مع iBrand لمدة عام كامل وكانت تجربة رائعة. زادت مبيعاتنا بنسبة 300% خلال 6 أشهر فقط. الفريق محترف ومبدع جداً."
        : "I've been working with iBrand for a full year and it's been an amazing experience. Our sales increased by 300% in just 6 months. The team is very professional and creative.",
      image: "https://images.unsplash.com/photo-1545966235-1f94f01a07ef?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+300% زيادة في المبيعات" : "+300% Sales Increase"
    },
    {
      id: 2,
      name: isRTL ? "سارة أحمد" : "Sarah Ahmed",
      company: isRTL ? "مطعم الشرق" : "Eastern Restaurant",
      rating: 5,
      content: isRTL 
        ? "iBrand حولت مطعمنا من مطعم محلي إلى علامة تجارية معروفة. الحملات الإعلانية كانت فعالة جداً والتصميم مذهل."
        : "iBrand transformed our restaurant from a local eatery to a well-known brand. The advertising campaigns were very effective and the design is stunning.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+250% زيادة في التعرف على العلامة" : "+250% Brand Recognition"
    },
    {
      id: 3,
      name: isRTL ? "محمد علي" : "Mohamed Ali",
      company: isRTL ? "متجر الأزياء" : "Fashion Store",
      rating: 5,
      content: isRTL 
        ? "أفضل قرار اتخذته في عملي هو التعامل مع iBrand. النتائج تجاوزت توقعاتي بكثير. أنصح الجميع بالتعامل معهم."
        : "The best decision I made in my business was working with iBrand. The results exceeded my expectations by far. I recommend everyone to work with them.",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+400% مبيعات أونلاين" : "+400% Online Sales"
    },
    {
      id: 4,
      name: isRTL ? "فاطمة حسن" : "Fatima Hassan",
      company: isRTL ? "صالون التجميل" : "Beauty Salon",
      rating: 5,
      content: isRTL 
        ? "iBrand ساعدتني في بناء هوية بصرية قوية لصالوني. الآن لدي عملاء أكثر وسمعة أفضل في المنطقة."
        : "iBrand helped me build a strong visual identity for my salon. Now I have more clients and a better reputation in the area.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+180% نمو العملاء" : "+180% Client Growth"
    },
    {
      id: 5,
      name: isRTL ? "علي محمود" : "Ali Mahmoud",
      company: isRTL ? "شركة العقارات" : "Real Estate Company",
      rating: 5,
      content: isRTL 
        ? "الحملات الإعلانية التي نفذتها iBrand لشركتنا حققت نتائج مذهلة. زادت المبيعات بنسبة 350% في 8 أشهر."
        : "The advertising campaigns that iBrand executed for our company achieved amazing results. Sales increased by 350% in 8 months.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+350% نمو المبيعات" : "+350% Sales Growth"
    },
    {
      id: 6,
      name: isRTL ? "نور الدين" : "Nour El Din",
      company: isRTL ? "مكتب المحاماة" : "Law Office",
      rating: 5,
      content: isRTL 
        ? "iBrand ساعدتني في بناء صورة احترافية لمكتبي. الآن لدي عملاء أكثر ثقة في خدماتي."
        : "iBrand helped me build a professional image for my office. Now I have more clients who trust my services.",
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop",
      result: isRTL ? "+200% ثقة العملاء" : "+200% Client Trust"
    }
  ]

  const goBack = () => {
    window.history.back()
  }

  return (
    <section
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-32 h-40 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl backdrop-blur-sm animate-float-3d" />
        <div className="absolute -right-16 top-1/3 w-28 h-36 bg-gradient-to-br from-yellow-400/10 to-yellow-500/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/4 bottom-20 w-24 h-32 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Button
            onClick={goBack}
            variant="outline"
            className={`mb-8 ${
              isDark 
                ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900" 
                : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
          >
            <ArrowLeft className={`w-4 h-4 mr-2 ${isRTL ? "ml-2 mr-0 rotate-180" : ""}`} />
            {isRTL ? "العودة" : "Go Back"}
          </Button>

          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {t("testimonials.title")}
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("testimonials.description")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border-2 ${
                isDark ? "border-slate-700" : "border-blue-200"
              } bg-gradient-to-br ${
                isDark ? "from-slate-800 to-slate-700" : "from-white to-blue-50"
              } shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer hover-lift`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className={`text-sm mb-6 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Result Badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                  isDark 
                    ? "bg-green-900/30 text-green-400 border border-green-700/50" 
                    : "bg-green-100 text-green-700 border border-green-200"
                }`}>
                  {testimonial.result}
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold mb-2">{testimonial.result}</p>
                    <p className="text-xs opacity-90">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl ${
            isDark ? "bg-slate-800" : "bg-white"
          } shadow-lg`}
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
              300%
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "متوسط زيادة المبيعات" : "Average Sales Increase"}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-3xl font-bold mb-2 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}>
              5.0
            </div>
            <div className={`text-sm ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL ? "تقييم متوسط" : "Average Rating"}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {isRTL ? "مستعد لتصبح قصة نجاحنا التالية؟" : "Ready to Become Our Next Success Story?"}
          </h3>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "انضم إلى مئات العملاء الراضين الذين حققوا نتائج مذهلة مع iBrand" 
              : "Join hundreds of satisfied clients who achieved amazing results with iBrand"
            }
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
            size="lg"
            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover-lift ${
              isDark
                ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            } text-white shadow-lg`}
          >
            {t("nav.getStarted")}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
