"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { useRef } from "react"
// import { useInView } from "framer-motion"

const leaves = [
  { title: "Mercury", text: "It’s the closest planet to the Sun" },
  { title: "Neptune", text: "Neptune is the farthest planet from the Sun" },
  { title: "Jupiter", text: "Jupiter is the biggest planet" },
  { title: "Mars", text: "Despite being red, Mars is a cold place" },
]

export default function WorkDiagram() {
  const { isDark } = useTheme()
  const ref = useRef(null)

  
  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
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
          WORK DIAGRAM
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {/* Spine */}
          <div className="relative h-44 mb-10">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-current opacity-20" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-current opacity-20" />
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[2px] top-8 w-1 h-1 rounded-full bg-current" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {leaves.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                                 className={`rounded-2xl p-6 text-center shadow-xl border ${
                   isDark ? "bg-white/80 border-blue-200 text-black-900" : "bg-white/70 border-white/50 text-slate-800"
                 }`}
              >
                <div className="text-indigo-400 font-extrabold mb-1">{l.title}</div>
                <div className="text-sm opacity-90 leading-relaxed">{l.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



