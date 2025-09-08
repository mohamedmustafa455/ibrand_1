"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"

function Donut({ percent, color, label }: { percent: number; color: string; label: string }) {
  const radius = 60
  const circ = 2 * Math.PI * radius
  const dash = (percent / 100) * circ

  return (
    <div className="flex flex-col items-center">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r={radius} strokeWidth="18" className="stroke-gray-300/30" fill="none" />
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          strokeWidth="18"
          strokeLinecap="round"
          stroke={color}
          fill="none"
          strokeDasharray={`${dash} ${circ - dash}`}
          initial={{ strokeDasharray: `0 ${circ}` }}
          whileInView={{ strokeDasharray: `${dash} ${circ - dash}` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          transform="rotate(-90 80 80)"
        />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-bold text-2xl fill-current">
          {percent}%
        </text>
      </svg>
      <div className="mt-2 text-sm opacity-80">{label}</div>
    </div>
  )
}

export default function ClientsStats() {
  const { isDark } = useTheme()
  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-black text-center mb-16 ${isDark ? "text-white" : "text-black-900"}`}
        >
          OUR CLIENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <Donut percent={25} color={isDark ? "#f472b6" : "#ec4899"} label="Female" />
          <Donut percent={45} color={isDark ? "#22d3ee" : "#14b8a6"} label="Male" />
          <div className="space-y-6 self-center">
            {[{ label: "16 - 25", value: 50 }, { label: "26 - 35", value: 25 }, { label: "36 - 45", value: 15 }].map(
              (row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{row.value}%</span>
                    <span className="opacity-70">{row.label}</span>
                  </div>
                                     <div className={`h-4 rounded-full ${isDark ? "bg-blue-200" : "bg-slate-200"}`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className={`h-full rounded-full ${isDark ? "bg-yellow-400" : "bg-yellow-400"}`}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Media icons row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {["Articles", "Video", "Presentations", "Mobile"].map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
                             className={`rounded-2xl p-6 text-center shadow-xl border ${
                 isDark ? "bg-white/80 border-blue-200" : "bg-white/70 border-white/50"
               }`}
            >
              <div className="text-sm opacity-80">{item}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



