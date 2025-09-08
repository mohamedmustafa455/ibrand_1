"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Award, Sparkles, MessageCircle, ExternalLink } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/mkgzynnp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      })
      
      if (!response.ok) throw new Error("Failed to submit")
      
      setIsSubmitted(true)
      
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      alert(isRTL ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." : "Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: isRTL ? "راسلنا" : "Email Us",
      value: "ibrandmarketingagency@gmail.com",
      description: isRTL ? "نرد خلال 24 ساعة" : "We respond within 24 hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: isRTL ? "اتصل بنا" : "Call Us",
      value: "+20 111 303 9402",
      description: isRTL ? "متاح من الأحد إلى الخميس" : "Available Sun-Thu",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: isRTL ? "فروع الشركة" : "Company Branches",
      value: isRTL ? "3 مواقع استراتيجية" : "3 Strategic Locations",
      description: isRTL ? "مصر - الإمارات العربية المتحدة" : "Egypt - United Arab Emirates",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: isRTL ? "الفرع الأول" : "Branch 1",
      value: isRTL ? "مصر - دمياط - دمياط الجديدة" : "Egypt - Damietta - New Damietta",
      description: isRTL ? "الفرع الرئيسي" : "Main Branch",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: MapPin,
      title: isRTL ? "الفرع الثاني" : "Branch 2",
      value: isRTL ? "مصر - الجيزة - 6 أكتوبر - الحصارة" : "Egypt - Giza - 6 of October - El Hosare",
      description: isRTL ? "فرع القاهرة الكبرى" : "Greater Cairo Branch",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: isRTL ? "الفرع الثالث" : "Branch 3",
      value: isRTL ? "الإمارات العربية المتحدة - دبي - شارع بورسعيد" : "United Arab Emirates - Dubai - Port Said Street",
      description: isRTL ? "الفرع الدولي" : "International Branch",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const whyChooseUs = [
    {
      icon: Users,
      title: isRTL ? "فريق محترف" : "Professional Team",
      description: isRTL ? "خبراء في التسويق الرقمي والعلامات التجارية" : "Experts in digital marketing and branding"
    },
    {
      icon: Award,
      title: isRTL ? "نتائج مضمونة" : "Guaranteed Results",
      description: isRTL ? "نضمن تحقيق أهدافك التسويقية" : "We guarantee achieving your marketing goals"
    },
    {
      icon: Clock,
      title: isRTL ? "دعم 24/7" : "24/7 Support",
      description: isRTL ? "دعم متواصل لجميع احتياجاتك" : "Continuous support for all your needs"
    }
  ]

  return (
    <section
      id="contact"
      className={`relative py-16 overflow-hidden ${
        isDark ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30"
      }`}
      ref={ref}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-10 w-20 h-24 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl backdrop-blur-sm animate-float-3d" />
        <div className="absolute -right-8 top-1/3 w-16 h-20 bg-gradient-to-br from-emerald-400/10 to-teal-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/4 bottom-10 w-12 h-16 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
        <div className="absolute right-1/4 top-1/2 w-14 h-18 bg-gradient-to-br from-rose-400/10 to-pink-500/10 rounded-2xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "1s" }} />
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
            <MessageCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className={`text-sm font-medium ${isDark ? "text-blue-300" : "text-blue-700"}`}>
              {isRTL ? "تواصل معنا" : "Get In Touch"}
            </span>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent`}>
            {t("contact.title")}
          </h2>
          <p className={`text-base md:text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-6 rounded-2xl ${
              isDark ? "bg-slate-800/80" : "bg-white/80"
            } shadow-xl backdrop-blur-sm border ${
              isDark ? "border-slate-700" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {t("contact.getInTouch")}
              </h3>
            </div>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {isRTL ? "تم إرسال الرسالة بنجاح!" : "Message Sent Successfully!"}
                </h4>
                <p className={`text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {isRTL 
                    ? "سنرد عليك في أقرب وقت ممكن" 
                    : "We'll get back to you as soon as possible"
                  }
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {t("contact.name")} *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      minLength={2}
                      pattern="^[\p{L}][\p{L}\s'.-]{1,}$"
                      title={isRTL ? "ادخل اسماً صالحاً" : "Enter a valid name"}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300`}
                      placeholder={isRTL ? "اسمك الكامل" : "Your full name"}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {t("contact.email")} *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      inputMode="email"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300`}
                      placeholder={isRTL ? "بريدك الإلكتروني" : "Your email address"}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {t("contact.phone")}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    inputMode="tel"
                    pattern="^[0-9+\-()\s]{6,}$"
                    title={isRTL ? "ادخل رقم هاتف صالح" : "Enter a valid phone number"}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"
                    } focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300`}
                    placeholder={isRTL ? "رقم هاتفك" : "Your phone number"}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {t("contact.message")} *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    minLength={10}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border resize-none ${
                      isDark ? "bg-slate-700 border-slate-600 text-white" : "bg-white border-gray-300"
                    } focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300`}
                    placeholder={isRTL ? "رسالتك..." : "Your message..."}
                  />
                </div>

                  {/* Compact CTA Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 text-sm font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {isRTL ? "جاري الإرسال..." : "Sending..."}
                      </div>
                    ) : (
                      <>
                        {t("contact.sendMessage")}
                        <Send className={`w-4 h-4 ml-2 ${isRTL ? "mr-2 ml-0 rotate-180" : ""}`} />
                      </>
                    )}
                  </Button>

                  {/* Google Form Links */}
                  <div className="text-center mt-4">
                    <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {isRTL ? "أو قدم عبر النموذج:" : "Or apply via form:"}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="https://forms.gle/t4Sj9HYhpQMYUVrq9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 ${
                          isDark 
                            ? "border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50" 
                            : "border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <span className="mr-2">📝</span>
                        {isRTL ? "نموذج الخدمات" : "Service Form"}
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                      
                     
                    </div>
                  </div>
                  
                  <p className={`text-xs text-center mt-3 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {t("contact.privacy")}
                  </p>
              </form>
            )}
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`p-4 rounded-xl ${
                    isDark ? "bg-slate-800/80" : "bg-white/80"
                  } shadow-lg backdrop-blur-sm border ${
                    isDark ? "border-slate-700" : "border-gray-200"
                  } hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {info.title}
                      </h4>
                      <p className={`text-sm font-medium mb-1 ${
                        isDark ? "text-violet-300" : "text-violet-600"
                      }`}>
                        {info.value}
                      </p>
                      <p className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className={`p-5 rounded-xl ${
                isDark ? "bg-slate-800/80" : "bg-white/80"
              } shadow-lg backdrop-blur-sm border ${
                isDark ? "border-slate-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h4 className={`font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}>
                  {isRTL ? "لماذا تختارنا؟" : "Why Choose Us?"}
                </h4>
              </div>
              <div className="space-y-3">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h5 className={`text-sm font-semibold mb-1 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {item.title}
                      </h5>
                      <p className={`text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
