"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Globe, CheckCircle } from "lucide-react"

interface LanguageTransitionOverlayProps {
  isVisible: boolean
  fromLang: string
  toLang: string
}

export default function LanguageTransitionOverlay({ isVisible, fromLang, toLang }: LanguageTransitionOverlayProps) {
  const getLanguageName = (code: string) => {
    return code === "ar" ? "العربية" : "English"
  }

  const getLanguageFlag = (code: string) => {
    return code === "ar" ? "🇸🇦" : "🇺🇸"
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-slate-600 max-w-sm w-full mx-4"
          >
            <div className="text-center">
              {/* Language change icon */}
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>

              {/* Transition text */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-bold text-black-900 dark:text-white mb-4"
              >
                {toLang === "ar" ? "تغيير اللغة..." : "Changing Language..."}
              </motion.h3>

              {/* Language indicators */}
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">{getLanguageFlag(fromLang)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getLanguageName(fromLang)}</div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">{getLanguageFlag(toLang)}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{getLanguageName(toLang)}</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                />
              </div>

              {/* Success indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {toLang === "ar" ? "تم تغيير اللغة بنجاح" : "Language Changed Successfully"}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
