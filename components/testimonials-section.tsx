"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    company: "Tech Solutions Co.",
    companyAr: "شركة الحلول التقنية",
    position: "CEO",
    positionAr: "الرئيس التنفيذي",
    rating: 5,
    text: "iBrand transformed our digital presence completely. Their creative approach and attention to detail exceeded our expectations. Our brand now stands out in the market.",
    textAr: "قامت iBrand بتحويل وجودنا الرقمي بالكامل. نهجهم الإبداعي واهتمامهم بالتفاصيل تجاوز توقعاتنا. علامتنا التجارية الآن تبرز في السوق.",
    avatar: "/avatars/ahmed.jpg",
    result: "300% increase in online engagement"
  },
  {
    id: 2,
    name: "Sarah Mohamed",
    nameAr: "سارة محمد",
    company: "Fashion Boutique",
    companyAr: "متجر الأزياء",
    position: "Marketing Director",
    positionAr: "مدير التسويق",
    rating: 5,
    text: "The team at iBrand is incredibly professional and creative. They understood our vision perfectly and delivered exceptional results that boosted our sales significantly.",
    textAr: "فريق iBrand محترف ومبدع بشكل لا يصدق. فهموا رؤيتنا بشكل مثالي وقدموا نتائج استثنائية عززت مبيعاتنا بشكل كبير.",
    avatar: "/avatars/sarah.jpg",
    result: "250% increase in sales"
  },
  {
    id: 3,
    name: "Omar Ali",
    nameAr: "عمر علي",
    company: "Restaurant Chain",
    companyAr: "سلسلة مطاعم",
    position: "Owner",
    positionAr: "المالك",
    rating: 5,
    text: "Working with iBrand was a game-changer for our restaurant chain. Their marketing strategies brought us more customers than ever before.",
    textAr: "العمل مع iBrand كان نقطة تحول لسلسلة مطاعمنا. استراتيجياتهم التسويقية جلبت لنا عملاء أكثر من أي وقت مضى.",
    avatar: "/avatars/omar.jpg",
    result: "400% increase in customer base"
  },
  {
    id: 4,
    name: "Fatima Zahra",
    nameAr: "فاطمة الزهراء",
    company: "Beauty Salon",
    companyAr: "صالون تجميل",
    position: "Manager",
    positionAr: "المدير",
    rating: 5,
    text: "iBrand helped us create a stunning brand identity that perfectly represents our salon's elegance and professionalism.",
    textAr: "ساعدتنا iBrand في إنشاء هوية علامة تجارية مذهلة تمثل أناقة واحترافية صالوننا بشكل مثالي.",
    avatar: "/avatars/fatima.jpg",
    result: "180% increase in bookings"
  },
  {
    id: 5,
    name: "Karim Mostafa",
    nameAr: "كريم مصطفى",
    company: "Real Estate",
    companyAr: "العقارات",
    position: "Sales Manager",
    positionAr: "مدير المبيعات",
    rating: 5,
    text: "The digital marketing campaign by iBrand generated incredible leads for our real estate business. Highly recommended!",
    textAr: "الحملة التسويقية الرقمية من iBrand ولدت عملاء محتملين مذهلين لشركة العقارات لدينا. موصى به بشدة!",
    avatar: "/avatars/karim.jpg",
    result: "320% increase in leads"
  },
  {
    id: 6,
    name: "Nour El-Din",
    nameAr: "نور الدين",
    company: "E-commerce Store",
    companyAr: "متجر إلكتروني",
    position: "Founder",
    positionAr: "المؤسس",
    rating: 5,
    text: "iBrand's expertise in e-commerce marketing helped us scale our online store from zero to hero. Outstanding results!",
    textAr: "خبرة iBrand في تسويق التجارة الإلكترونية ساعدتنا في تطوير متجرنا الإلكتروني من الصفر إلى البطل. نتائج مذهلة!",
    avatar: "/avatars/nour.jpg",
    result: "500% increase in revenue"
  }
]

export default function TestimonialsSection() {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section 
      ref={ref}
      className={`py-20 ${isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"}`}
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
              {isRTL ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "استمع إلى قصص النجاح من عملائنا المميزين الذين اختاروا iBrand لتحقيق أهدافهم"
              : "Listen to success stories from our distinguished clients who chose iBrand to achieve their goals"
            }
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`p-8 rounded-2xl text-center ${
              isDark 
                ? "bg-slate-800 border border-slate-700" 
                : "bg-white border border-gray-200 shadow-xl"
            }`}
          >
            {/* Quote Icon */}
            <motion.div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                isDark ? "bg-blue-600/20" : "bg-blue-100"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Quote className={`w-8 h-8 ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`} />
            </motion.div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <motion.p 
              className={`text-lg leading-relaxed mb-8 max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "{isRTL ? testimonials[currentIndex].textAr : testimonials[currentIndex].text}"
            </motion.p>

            {/* Result */}
            <motion.div
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                isDark ? "bg-green-600/20 text-green-400" : "bg-green-100 text-green-700"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {testimonials[currentIndex].result}
            </motion.div>

            {/* Client Info */}
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="text-left">
                <h4 className={`font-bold text-lg ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {isRTL ? testimonials[currentIndex].nameAr : testimonials[currentIndex].name}
                </h4>
                <p className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {isRTL ? testimonials[currentIndex].positionAr : testimonials[currentIndex].position} - {isRTL ? testimonials[currentIndex].companyAr : testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className={`p-3 rounded-full ${
                isDark 
                  ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-600" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-lg"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? isDark ? "bg-blue-500" : "bg-blue-600"
                      : isDark ? "bg-slate-600" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className={`p-3 rounded-full ${
                isDark 
                  ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-600" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-lg"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
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
              ? "كن التالي في قائمة عملائنا السعداء"
              : "Be next in our list of happy clients"
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
