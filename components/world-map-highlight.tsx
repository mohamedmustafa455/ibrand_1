"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { useRef } from "react"
// import { useInView } from "react-intersection-observer"

export default function WorldMapHighlight() {
  const { isDark } = useTheme()
  const ref = useRef(null)

  
  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center text-5xl md:text-7xl font-black mb-10 ${isDark ? "text-white" : "text-black-900"}`}
        >
          WHERE ARE WE LOCATED?
        </motion.h2>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl p-6 border"
             style={{ background: isDark ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)", borderColor: isDark ? "#334155" : "#e5e7eb" }}>
          <div className="relative aspect-[3/2]">
            {/* Simple world map silhouettes (not detailed, but clean) */}
            <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full">
              <g fill={isDark ? "#1e3a8a" : "#312e81"} opacity="0.9">
                <path d="M80,360 C180,300 260,340 320,320 C380,300 420,240 520,240 C600,240 560,320 620,320 C680,320 740,280 820,280 C900,280 940,320 980,340 C1020,360 1100,340 1140,360 L1140,460 L80,460Z" />
              </g>
              {/* Highlights */}
              <motion.path
                d="M300,420 h120 v80 h-120z"
                fill="#06b6d4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.path
                d="M520,420 h120 v80 h-120z"
                fill="#10b981"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
              />
              <motion.path
                d="M740,420 h120 v80 h-120z"
                fill="#ef4371"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </svg>
            <div className="absolute left-6 bottom-6 text-sm opacity-80 max-w-xs">
              You can enter some relevant text here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


