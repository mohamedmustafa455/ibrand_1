"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/use-theme"

interface LanguageSwitcherProps {
  currentLang: string
  onLanguageChange: (lang: string) => void
  isTransitioning?: boolean
}

export default function LanguageSwitcher({ currentLang, onLanguageChange, isTransitioning = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark } = useTheme()

  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦", nativeName: "العربية" },
    { code: "en", name: "English", flag: "🇺🇸", nativeName: "English" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  const handleLanguageChange = (lang: string) => {
    if (lang === currentLang || isTransitioning) return
    
    onLanguageChange(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTransitioning}
        className={`flex items-center space-x-2 transition-all duration-300 ${
          isDark 
            ? "bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700/50 hover:border-slate-500" 
            : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
        } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""} ${
          currentLang === "ar" ? "space-x-reverse" : ""
        }`}
      >
        <Globe className={`h-4 w-4 transition-transform ${isTransitioning ? "animate-spin" : ""}`} />
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline-block text-sm font-medium">
          {currentLanguage?.nativeName}
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full mt-2 rounded-xl shadow-2xl border overflow-hidden z-50 ${
              currentLang === "ar" ? "left-0" : "right-0"
            } ${
              isDark 
                ? "bg-slate-800/95 border-slate-600 backdrop-blur-xl" 
                : "bg-white/95 border-gray-200 backdrop-blur-xl"
            }`}
          >
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isTransitioning}
                className={`w-full px-4 py-3 flex items-center justify-between hover:bg-opacity-80 transition-all duration-200 ${
                  currentLang === "ar" ? "text-right" : "text-left"
                } ${
                  currentLang === lang.code 
                    ? isDark 
                      ? "bg-blue-900/50 text-blue-300 border-r-2 border-blue-500" 
                      : "bg-blue-50 text-blue-800 border-r-2 border-blue-500"
                    : isDark 
                      ? "text-gray-300 hover:bg-slate-700/50" 
                      : "text-gray-700 hover:bg-gray-100/50"
                } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
                initial={{ opacity: 0, x: currentLang === "ar" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`flex items-center space-x-3 ${currentLang === "ar" ? "space-x-reverse" : ""}`}>
                  <span className="text-xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="font-medium text-sm">{lang.name}</div>
                    <div className={`text-xs ${currentLang === lang.code ? "opacity-80" : "opacity-60"}`}>
                      {lang.nativeName}
                    </div>
                  </div>
                </div>
                
                {currentLang === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`text-blue-500 ${currentLang === "ar" ? "mr-2" : "ml-2"}`}
                  >
                    <Check className="h-4 w-4" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language change indicator */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse"
        />
      )}
    </div>
  )
}
