"use client"

import { motion } from "framer-motion"
import { useMemo, useEffect } from "react"
import Link from "next/link"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Sparkles, Heart } from "lucide-react"
import { LucideIcon } from "lucide-react"

export default function Footer() {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()

  // Hidden obfuscated signature in footer scope
  const sigCodes = useMemo(() => [67,111,112,121,114,105,103,104,116,32,68,32,47,77,111,104,97,109,101,100,32,83,97,114,104,97,110], [])
  const sigPhrase = useMemo(() => String.fromCharCode(...sigCodes), [sigCodes])
  const sigRev = useMemo(() => sigPhrase.split('').reverse().join(''), [sigPhrase])

  useEffect(() => {
    try {
      const n = document.createElement('div')
      n.style.position = 'absolute'
      n.style.left = '-99999px'
      n.style.top = '-99999px'
      n.style.opacity = '0'
      n.setAttribute('data-sig-rev', sigRev)
      n.setAttribute('data-sig-len', String(sigPhrase.length))
      n.setAttribute('aria-hidden', 'true')
      document.body.appendChild(n)
      setTimeout(() => { try { n.remove() } catch {} }, 60000)
    } catch {}
  }, [sigRev, sigPhrase])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks: Array<{
    icon: LucideIcon | (() => React.JSX.Element);
    href: string;
    label: string;
    gradient: string;
  }> = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/share/1GJ388LxXj/?mibextid=wwXIfr", 
      label: "Facebook",
      gradient: "from-blue-500 to-blue-600"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/ibrandmarketingagency?igsh=MTh2b2VwN293amJydA%3D%3D&utm_source=qr", 
      label: "Instagram",
      gradient: "from-pink-500 to-purple-600"
    },
    { 
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ), 
      href: "https://www.tiktok.com/@ibrand123?_t=ZS-8yvjy6bbMql&_r=1", 
      label: "TikTok",
      gradient: "from-black to-gray-800"
    }
  ]

  const quickLinks = [
    { name: isRTL ? "الرئيسية" : "Home", href: "/" },
    { name: isRTL ? "من نحن" : "About", href: "/about" },
    { name: isRTL ? "خدماتنا" : "Services", href: "/services" },
    { name: isRTL ? "أعمالنا" : "Portfolio", href: "/portfolio" },
    { name: isRTL ? "الوظائف" : "Careers", href: "/careers" },
    { name: isRTL ? "آراء العملاء" : "Testimonials", href: "/testimonials" },
    { name: isRTL ? "اتصل بنا" : "Contact", href: "/contact" },
    { name: isRTL ? "خريطة الموقع" : "Sitemap", href: "/sitemap.xml" }
  ]

  const services = [
    { name: isRTL ? "الهوية البصرية" : "Visual Identity", href: "/services/visual-identity" },
    { name: isRTL ? "التصميم الجرافيكي" : "Graphic Design", href: "/services/graphic-design" },
    { name: isRTL ? "كتابة المحتوى" : "Content Writing", href: "/services/content-writing" },
    { name: isRTL ? "إعلانات ممولة" : "Sponsored Ads", href: "/services/sponsored-ads" },
    { name: isRTL ? "إدارة شهرية" : "Monthly Management", href: "/services/monthly-management" },
    { name: isRTL ? "مونتاج فيديو" : "Video Editing", href: "/services/video-editing" },
    { name: isRTL ? "موشن جرافيك" : "Motion Graphics", href: "/services/motion-graphics" },
    { name: isRTL ? "التعليق الصوتي" : "Voice-over", href: "/services/voiceover" }
  ]

  return (
    <footer className={`relative overflow-hidden ${
      isDark ? "bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900" : "bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-800"
    } text-white`}>
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-cyan-500/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    iBrand
                  </span>
                </h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t("footer.description")}
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                {isRTL ? "روابط سريعة" : "Quick Links"}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">
                {isRTL ? "خدماتنا" : "Our Services"}
              </h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <motion.li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-lg font-semibold mb-3 text-white">
                  {isRTL ? "معلومات التواصل" : "Contact Info"}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a href="mailto:ibrandmarketingagency@gmail.com" className="hover:text-blue-400 transition-colors">ibrandmarketingagency@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a href="tel:+201113039402" className="hover:text-blue-400 transition-colors">+20 111 303 9402</a>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>
                        {isRTL ? "مصر - دمياط - دمياط الجديدة" : "Egypt - Damietta - New Damietta"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>
                        {isRTL ? "مصر - الجيزة - 6 أكتوبر - الحصارة" : "Egypt - Giza - 6 of October - El Hosare"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      <span>
                        {isRTL ? "الإمارات العربية المتحدة - دبي - شارع بورسعيد" : "United Arab Emirates - Dubai - Port Said Street"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Newsletter */}
              <div>
                <p className="text-gray-300 text-sm mb-3">
                  {t("footer.newsletter")}
                </p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder={isRTL ? "البريد الإلكتروني" : "Email"}
                    className="flex-1 text-sm bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                  />
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Compact Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-slate-700/50"
        >
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">500+</div>
            <div className="text-xs text-gray-300">
              {isRTL ? "عميل راضٍ" : "Happy Clients"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1">1000+</div>
            <div className="text-xs text-gray-300">
              {isRTL ? "مشروع مكتمل" : "Projects Completed"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-1">98%</div>
            <div className="text-xs text-gray-300">
              {isRTL ? "رضا العملاء" : "Client Satisfaction"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">5+</div>
            <div className="text-xs text-gray-300">
              {isRTL ? "سنوات خبرة" : "Years Experience"}
            </div>
          </div>
        </motion.div> */}

        {/* Compact Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="py-4 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <span>{t("footer.copyright")}</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            
            {/* Copyright Section - Hidden */}
            <div className="flex items-center gap-4">
              
              <div className="flex gap-2">
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white text-xs"
                >
                  {isRTL ? "ابدأ مشروعك" : "Start Project"}
                </Button>
                
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:text-white text-xs"
                >
                  {isRTL ? "للأعلى" : "Top"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
