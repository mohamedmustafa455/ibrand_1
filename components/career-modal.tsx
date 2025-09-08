"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, ExternalLink } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface CareerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CareerModal({ isOpen, onClose }: CareerModalProps) {
  const { t, isRTL, currentLang } = useTranslationContext()
  const { isDark } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("career ")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      setMessage((prev) => (prev.startsWith("career ") ? prev : `career ${prev}`))
    }
  }, [isOpen])

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (!value.startsWith("career ")) {
      const stripped = value.replace(/^career\s*/i, "")
      setMessage(`career ${stripped}`)
    } else {
      setMessage(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch("https://formspree.io/f/mkgzynnp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      })
      if (!response.ok) throw new Error("Failed to submit")
      setName("")
      setEmail("")
      setPhone("")
      setMessage("career ")
      onClose()
    } catch (err) {
      console.error(err)
      alert(currentLang === "ar" ? "حدث خطأ أثناء الإرسال" : "Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            className={`relative w-full max-w-2xl rounded-2xl overflow-hidden border ${
              isDark ? "bg-slate-900/95 border-slate-700" : "bg-white/95 border-gray-200"
            } backdrop-blur-xl shadow-2xl ${isRTL ? "rtl" : ""}`}
            initial={{ y: 40, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                {currentLang === "ar" ? "توظيف" : "Career"}
              </h3>
              <button aria-label={t("common.close")} onClick={onClose} className="p-2 rounded-lg hover:bg-black/10">
                <X className={isDark ? "text-white" : "text-gray-800"} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">{t("contact.name")}</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder={t("contact.name")} />
                </div>
                <div>
                  <label className="block text-sm mb-1">{t("contact.emailAddress")}</label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">{t("contact.phone")}</label>
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+20 1X XXX XXXX" />
              </div>
              <div>
                <label className="block text-sm mb-1">{t("contact.message")}</label>
                <Textarea value={message} onChange={handleMessageChange} rows={5} required />
                <p className="text-xs opacity-70 mt-1">{currentLang === "ar" ? "سيتم إرسال الرسالة مع بادئة career" : "Message is prefixed with career"}</p>
              </div>

              <div className={`flex items-center ${isRTL ? "flex-row-reverse space-x-reverse" : ""} gap-3`}>
                <Button type="submit" disabled={isSubmitting} className="flex-1">
                  {isSubmitting ? (currentLang === "ar" ? "جاري الإرسال..." : "Sending...") : (
                    <span className="inline-flex items-center">
                      {currentLang === "ar" ? "إرسال" : "Send"}
                      <Send className={`ml-2 h-4 w-4 ${isRTL ? "rotate-180 ml-0 mr-2" : ""}`} />
                    </span>
                  )}
                </Button>
              </div>
              
              {/* Google Form Link */}
              <div className="text-center mt-4">
                <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {currentLang === "ar" ? "أو قدم عبر النموذج:" : "Or apply via form:"}
                </p>
                <a
                  href="https://forms.gle/DKq9TMuPiJ5VdHH7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-6 py-3 rounded-xl border transition-all duration-300 hover-lift ${
                    isDark ? "border-slate-700 bg-slate-700/50 text-white hover:bg-slate-600/50" : "border-gray-300 bg-gray-50 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">📝</span>
                  {currentLang === "ar" ? "نموذج التوظيف" : "Career Form"}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}


