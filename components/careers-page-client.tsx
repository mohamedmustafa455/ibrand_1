"use client"

import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { 
  ArrowLeft, 
  Briefcase, 
  Users, 
  Mail, 
  Send,
  CheckCircle,
  ExternalLink,
  Heart,
  Zap,
  Globe,
  Star,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"

import Footer from "@/components/footer"
import Link from "next/link"

export default function CareersPageClient() {
  const { isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const formRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: ""
  })

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
      const response = await fetch("https://formspree.io/f/xkgvykza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "career-application"
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
          position: "",
          experience: "",
          portfolio: "",
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

  const benefits = [
    {
      icon: Building2,
      title: isRTL ? "مقر عمل مجهَّز داخل الشركة" : "On-site Workspace",
      description: isRTL 
        ? "توفير مكان عمل مناسب وسط فريق عمل متطوّر داخل مقر الشركة – لسنا عملًا عن بُعد فقط، ومعظم الفريق يعمل من الشركة لضمان تعاون أسرع وجودة أعلى"
        : "Comfortable on-site workspace within a modern, collaborative team – we are not remote-only; most teammates work from our office for faster collaboration and higher quality"
    },
    {
      icon: Heart,
      title: isRTL ? "بيئة عمل داعمة" : "Supportive Environment",
      description: isRTL ? "فريق متعاون وبيئة عمل إيجابية تشجع على النمو والتطوير" : "Collaborative team and positive work environment that encourages growth and development"
    },
    {
      icon: Zap,
      title: isRTL ? "تعلم مستمر" : "Continuous Learning",
      description: isRTL ? "فرص للتعلم والتطوير المهني في مجال التسويق الرقمي" : "Opportunities for learning and professional development in digital marketing"
    },
    {
      icon: Globe,
      title: isRTL ? "مرونة العمل (عند الحاجة)" : "Flexible When Needed",
      description: isRTL ? "نوفر ترتيبات مرنة عند الحاجة، مع تركيز أساسي على العمل من مقر الشركة لضمان أفضل تعاون" : "Flexible arrangements when needed, with a primary focus on on-site collaboration for the best outcomes"
    },
    {
      icon: Star,
      title: isRTL ? "مشاريع متنوعة" : "Diverse Projects",
      description: isRTL ? "عمل مع عملاء من مختلف القطاعات على مشاريع متنوعة ومثيرة" : "Work with clients from various industries on diverse and exciting projects"
    }
  ]

  return (
    <div className={`min-h-screen ${isDark ? "bg-slate-900" : "bg-gray-50"}`}>
      <Header />
      
      {/* Back to Home */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        <Link 
          href="/"
          className={`inline-flex items-center text-sm hover:underline transition-colors ${
            isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <ArrowLeft className={`h-4 w-4 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
          {isRTL ? "العودة للرئيسية" : "Back to Home"}
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
                } shadow-lg mr-4`}>
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-4xl md:text-5xl font-black ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {isRTL ? "انضم إلى فريقنا" : "Join Our Team"}
                  </h1>
                </div>
              </div>
              
              <p className={`text-xl md:text-2xl leading-relaxed mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                {isRTL 
                  ? "نحن نبحث عن موهوبين متحمسين لمساعدتنا في تشكيل مستقبل التسويق الرقمي. انضم إلينا وكن جزءًا من رحلة النمو والابتكار."
                  : "We're looking for passionate talents to help us shape the future of digital marketing. Join us and be part of our growth and innovation journey."
                }
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                  className={`px-8 py-3 text-lg font-semibold rounded-xl border-2 transition-all duration-300 ${
                    isDark
                      ? "border-blue-600 text-blue-300 hover:border-blue-400 hover:text-blue-400"
                      : "border-blue-300 text-blue-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {isRTL ? "مزايا العمل معنا" : "Why Work With Us"}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                  alt={isRTL ? "فريق عمل" : "Team at work"}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-24 w-24 text-white mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">
                      {isRTL ? "فريق محترف" : "Professional Team"}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        ref={benefitsRef}
        className={`py-20 ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {isRTL ? "مزايا العمل معنا" : "Why Work With Us"}
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL 
                ? "نحن نؤمن بأن الموظفين السعداء هم أساس النجاح. اكتشف ما يجعل iBrand مكانًا رائعًا للنمو والتطوير."
                : "We believe happy employees are the foundation of success. Discover what makes iBrand a great place to grow and develop."
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl transition-all duration-300 hover-lift ${
                  isDark
                    ? "bg-slate-700/80 hover:bg-slate-600/80 border border-blue-500/20"
                    : "bg-blue-50/50 hover:bg-white hover:shadow-lg border border-blue-200/50"
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600 to-indigo-600"
                    : "bg-gradient-to-br from-blue-600 to-blue-800"
                } shadow-lg`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {benefit.title}
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section
        id="application-form"
        ref={formRef}
        className={`py-20 ${isDark ? "bg-slate-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {isRTL ? "قدم طلب التوظيف" : "Submit Your Application"}
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}>
              {isRTL 
                ? "أخبرنا عن نفسك وشاركنا خبراتك. نحن متحمسون لمعرفة المزيد عنك!"
                : "Tell us about yourself and share your experience. We're excited to learn more about you!"
              }
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`text-center p-12 rounded-3xl ${
                  isDark ? "bg-slate-700" : "bg-green-50"
                }`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {isRTL ? "تم إرسال طلبك بنجاح!" : "Application Submitted Successfully!"}
                </h3>
                <p className={`text-lg ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {isRTL 
                    ? "سنراجع طلبك وسنتواصل معك قريبًا. شكرًا لاهتمامك بالانضمام إلى فريقنا!"
                    : "We'll review your application and get back to you soon. Thank you for your interest in joining our team!"
                  }
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`p-8 rounded-3xl shadow-2xl ${
                  isDark ? "bg-slate-700" : "bg-white"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {isRTL ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={isRTL ? "اسمك الكامل" : "Your full name"}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {isRTL ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={isRTL ? "بريدك الإلكتروني" : "Your email address"}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {isRTL ? "رقم الهاتف" : "Phone Number"}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={isRTL ? "رقم هاتفك" : "Your phone number"}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {isRTL ? "المنصب المطلوب *" : "Position Applied For *"}
                      </label>
                      <Input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${
                          isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                        placeholder={isRTL ? "المنصب الذي تتقدم له" : "Position you're applying for"}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {isRTL ? "سنوات الخبرة" : "Years of Experience"}
                    </label>
                    <Input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder={isRTL ? "مثال: 3 سنوات" : "e.g., 3 years"}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {isRTL ? "رابط Portfolio (اختياري)" : "Portfolio Link (Optional)"}
                    </label>
                    <Input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder={isRTL ? "رابط أعمالك السابقة" : "Link to your previous work"}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      {isRTL ? "رسالة التقديم *" : "Cover Letter *"}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl border resize-none ${
                        isDark ? "bg-slate-600 border-slate-500 text-white" : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                      placeholder={isRTL 
                        ? "أخبرنا عن نفسك، خبراتك، ولماذا تريد الانضمام إلى فريقنا..." 
                        : "Tell us about yourself, your experience, and why you want to join our team..."
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        : "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
                    } text-white shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {isRTL ? "جاري الإرسال..." : "Submitting..."}
                      </div>
                    ) : (
                      <>
                        {isRTL ? "إرسال الطلب" : "Submit Application"}
                        <Send className={`w-5 h-5 ${isRTL ? "mr-2 ml-0 rotate-180" : "ml-2"}`} />
                      </>
                    )}
                  </Button>

                  {/* Alternative Application Methods */}
                  <div className="text-center mt-6">
                    <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {isRTL ? "أو قدم عبر:" : "Or apply via:"}
                    </p>
                    <div className="flex gap-4 justify-center">
                      <a
                        href="https://forms.gle/DKq9TMuPiJ5VdHH7A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                          isDark 
                            ? "border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50" 
                            : "border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <span>📝</span>
                        {isRTL ? "نموذج جوجل" : "Google Form"}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:ibrandmarketingagency@gmail.com?subject=Job Application"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                          isDark 
                            ? "border-slate-600 bg-slate-700/50 text-white hover:bg-slate-600/50" 
                            : "border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100"
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        {isRTL ? "بريد إلكتروني" : "Email"}
                      </a>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}




