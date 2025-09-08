"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function FloatingWhatsApp() {
  const { isDark } = useTheme()

  const handleWhatsAppClick = () => {
    // WhatsApp business number - replace with actual number
    const phoneNumber = "+201113039402" // Replace with actual WhatsApp number
    const message = encodeURIComponent("Hello! I'm interested in your marketing services.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
        isDark 
          ? "bg-green-500 hover:bg-green-600 text-white" 
          : "bg-green-500 hover:bg-green-600 text-white"
      }`}
      style={{
        boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)"
      }}
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isDark ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
      </div>
    </motion.button>
  )
}
