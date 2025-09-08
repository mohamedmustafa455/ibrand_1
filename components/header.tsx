"use client"

import { useState, useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe, Moon, Sun, ArrowRight } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"

type HeaderProps = Record<string, never>

export default function Header({}: HeaderProps) {
  const { t, isRTL, currentLang, switchLanguage } = useTranslationContext()
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  // Hidden obfuscated signature
  const sigCodes = useMemo(() => [67,111,112,121,114,105,103,104,116,32,68,32,47,77,111,104,97,109,101,100,32,83,97,114,104,97,110], [])
  const sigPhrase = useMemo(() => String.fromCharCode(...sigCodes), [sigCodes])
  const sigB64 = useMemo(() => {
    try { return typeof window !== 'undefined' ? window.btoa(sigPhrase) : '' } catch { return '' }
  }, [sigPhrase])
  const sigHex = useMemo(() => sigPhrase.split('').map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(''), [sigPhrase])

  const navItems = [
    { label: t("nav.home"), href: "/", isExternal: false },
    { label: t("nav.about"), href: "/about", isExternal: false },
    { label: t("nav.services"), href: "/services", isExternal: false },
    { label: t("nav.portfolio"), href: "/portfolio", isExternal: false },
    { label: t("nav.testimonials"), href: "/testimonials", isExternal: false },
    { label: t("nav.career"), href: "/careers", isExternal: false },
    { label: t("nav.contact"), href: "/contact", isExternal: false },
  ]

  // Function to check if a nav item is active (current page)
  const isActivePage = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    // Inject hidden signature node
    try {
      const n = document.createElement('meta')
      n.httpEquiv = 'x-obf'
      n.content = sigB64
      n.setAttribute('data-h', sigHex)
      n.setAttribute('data-l', String(sigPhrase.length))
      n.setAttribute('aria-hidden', 'true')
      document.head.appendChild(n)
      setTimeout(() => { try { n.remove() } catch {} }, 45000)
    } catch {}
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  interface NavItem { label: string; href: string; isExternal: boolean }
  const handleNavClick = (item: NavItem) => {
    if (item.isExternal) {
      window.location.href = item.href
    } else if (item.href.startsWith('/')) {
      // Navigate to new page
      window.location.href = item.href
    } else {
      // Scroll to section on current page
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200"
          : isHome
          ? "bg-transparent"
          : isDark
          ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60"
          : "bg-gradient-to-b from-blue-50/95 to-white/0 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Keep header alignment consistent LTR even in RTL UI */}
        <div className="flex items-center justify-between h-16 lg:h-20" dir="ltr">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${
              isDark ? "from-blue-600 to-blue-700" : "from-blue-500 to-blue-600"
            } flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">i</span>
            </div>
            <span className={`text-xl font-bold ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Brand
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActivePage(item.href)
                      ? isDark
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-slate-900"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                onMouseMove={(e) => {
                  const target = e.currentTarget as HTMLButtonElement
                  const rect = target.getBoundingClientRect()
                  const sx = ((e.clientX - rect.left) / rect.width) * 100
                  const sy = ((e.clientY - rect.top) / rect.height) * 100
                  target.style.setProperty("--sx", sx + "%")
                  target.style.setProperty("--sy", sy + "%")
                }}
                >
                  <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:bg-current hover:after:w-full">
                    {item.label}
                  </span>
                  {isActivePage(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isDark ? "bg-blue-400" : "bg-blue-600"
                      }`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.button
              onClick={switchLanguage}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-slate-900"
              }`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark 
                  ? "bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-slate-900"
              }`}
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* CTA Button */}
            <motion.button
              onClick={() => handleNavClick({ label: "Contact", href: "/contact", isExternal: false })}
              className={`px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("nav.contact")}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isDark 
                ? "bg-slate-800 text-gray-300 hover:bg-slate-700" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`lg:hidden overflow-hidden ${
                isDark ? "bg-slate-900" : "bg-white"
              } border-t ${
                isDark ? "border-slate-800" : "border-gray-200"
              }`}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActivePage(item.href)
                        ? isDark
                          ? "bg-blue-600/20 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                        : isDark
                        ? "text-gray-300 hover:bg-slate-800 hover:text-white"
                        : "text-gray-700 hover:bg-gray-100 hover:text-slate-900"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Actions */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 dark:border-slate-800">
                  <motion.button
                    onClick={switchLanguage}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? "bg-slate-800 text-gray-300 hover:bg-slate-700" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDark 
                        ? "bg-slate-800 text-gray-300 hover:bg-slate-700" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.button>

                  <motion.button
                    onClick={() => handleNavClick({ label: "Contact", href: "/contact", isExternal: false })}
                    className={`px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("nav.contact")}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
