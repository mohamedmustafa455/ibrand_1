"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"
import { useInView } from "react-intersection-observer"

type Milestone = {
  year: string
  title: string
  subtitle: string
}

const MILESTONES: Milestone[] = [
  { year: "2014", title: "SATURN", subtitle: "Saturn is the ringed one and a gas giant" },
  { year: "2016", title: "VENUS", subtitle: "It has a beautiful name, but it’s hot" },
  { year: "2018", title: "MERCURY", subtitle: "It’s the closest planet to the Sun" },
  { year: "NOW", title: "MARS", subtitle: "Despite being red, Mars is a cold place" },
]

export default function EvolutionTimeline() {
  const { isDark } = useTheme()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // يبدأ التحريك لما 10% من العنصر يظهر
  })

  const base = isDark
    ? {
        bg: "from-blue-50 via-blue-100 to-blue-50",
        text: "text-black-900",
        sub: "text-gray-600",
        ring: "stroke-blue-400/50",
        orbit: "stroke-blue-400/40",
        node: "fill-blue-500",
      }
    : {
        bg: "from-blue-200 via-blue-300 to-blue-200",
        text: "text-black-900",
        sub: "text-gray-600",
        ring: "stroke-blue-800/40",
        orbit: "stroke-yellow-500/40",
        node: "fill-pink-500",
      }

  return (
    <section
      className={`py-32 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-5xl md:text-7xl font-black text-center mb-16 ${base.text}`}
        >
          OUR EVOLUTION
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          <svg viewBox="0 0 1200 380" className="w-full h-auto">
            <defs>
              <g id="plane-shape">
                <polygon points="0,0 22,10 0,20 5,12 5,8" fill={isDark ? "#22d3ee" : "#06b6d4"} />
                <polygon points="0,0 10,10 0,20" fill={isDark ? "#0891b2" : "#0ea5e9"} opacity="0.7" />
              </g>
            </defs>

            <path
              id="timeline-path"
              d="M60,300 C200,120 360,120 500,300 S800,480 940,300 1080,120 1140,220"
              fill="none"
              className={`${base.ring}`}
              strokeWidth="24"
              strokeLinecap="round"
            />

            {[{ cx: 180, cy: 220 }, { cx: 500, cy: 300 }, { cx: 820, cy: 220 }, { cx: 1100, cy: 300 }].map((p, i) => (
              <g key={i}>
                <circle cx={p.cx} cy={p.cy} r="56" className={`${base.orbit}`} strokeWidth="10" fill="none" />
                <circle cx={p.cx} cy={p.cy} r="12" className={`${base.node}`}>
                  <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            ))}

            <g>
              <motion.g>
                <animateMotion dur="14s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#timeline-path" />
                </animateMotion>
                <use href="#plane-shape" />
              </motion.g>
            </g>
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
            {MILESTONES.map((m) => (
              <motion.div
                key={m.year + m.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-pink-500 text-3xl font-extrabold tracking-tight mb-1">{m.year}</div>
                <div className="text-indigo-600 dark:text-indigo-300 text-2xl font-extrabold mb-2">{m.title}</div>
                <div className={`max-w-xs mx-auto ${base.sub}`}>{m.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
