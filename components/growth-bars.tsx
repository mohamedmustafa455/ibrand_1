"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { useRef } from "react"
// import { useInView } from "framer-motion"

const items = [
  { label: "Saturn", color: "#0b0b6b", height: 38 },
  { label: "Jupiter", color: "#2a23c9", height: 72 },
  { label: "Mars", color: "#06b6d4", height: 112 },
  { label: "Mercury", color: "#ef4371", height: 160 },
]

export default function GrowthBars() {
  const { isDark } = useTheme()
  const ref = useRef(null)

  
  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-white via-blue-50 to-white"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-end gap-8 justify-center">
          {items.map((item, i) => (
            <div key={item.label} className="text-center">
              <motion.div
                initial={{ height: 0, opacity: 0.6 }}
                whileInView={{ height: item.height, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-24 rounded-sm shadow-xl"
                style={{ backgroundColor: item.color }}
              />
              <div className="mt-3 font-medium opacity-90">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



