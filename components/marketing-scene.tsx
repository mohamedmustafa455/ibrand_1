"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Megaphone, Target, TrendingUp, Send } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
// Globe removed per request


export default function MarketingScene() {
  const { isDark } = useTheme()
  const [stepIndex, setStepIndex] = useState(0)

  const steps = ["Awareness", "Interest", "Consideration", "Conversion", "Retention", "Advocacy"]

  useEffect(() => {
    const timer = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [steps.length])

  return (
    <div className="pointer-events-none absolute inset-0">

      {/* Paper plane circular path with dashed guide (responsive) */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
        style={{ width: "clamp(260px, 45vw, 520px)", height: "clamp(260px, 45vw, 520px)" }}
      >
        {/* Dashed orbit */}
        <div
          className={`absolute inset-0 rounded-full border-2 border-dashed ${
            isDark ? "border-blue-400/40" : "border-yellow-500/40"
          }`}
        />

        {/* Rotating carrier */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "50% 50%" }}
        >
          {/* Plane at top of the orbit */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                isDark ? "bg-blue-600/90 text-white" : "bg-yellow-400/90 text-black-900"
              }`}
              animate={{ rotate: [0, -20, 0, 20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Send className="w-5 h-5" />
            </motion.div>

            {/* Step label follows the plane; offset radially and keep upright via inverse rotation */}
            <div className="absolute left-1/2 -translate-x-1/2 translate-y-8">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 16, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                style={{ transformOrigin: "center" }}
              >
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap ${
                    isDark ? "bg-slate-800/80 text-blue-300 border border-slate-700" : "bg-white/90 text-blue-800 border border-white/60"
                  }`}
                >
                  {steps[stepIndex]}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* No center label now; text is attached to plane */}
      </div>

      {/* Floating marketing icons */}
      <motion.div
        className="absolute left-8 bottom-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className={`w-14 h-14 rounded-2xl grid place-items-center shadow-2xl ${
            isDark ? "bg-slate-800/70 border border-slate-700" : "bg-white/70 border border-white/50"
          }`}
        >
          <Megaphone className={isDark ? "text-blue-400" : "text-blue-700"} />
        </div>
      </motion.div>

      <motion.div
        className="absolute right-1/4 bottom-20"
        animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className={`w-14 h-14 rounded-2xl grid place-items-center shadow-2xl ${
            isDark ? "bg-slate-800/70 border border-slate-700" : "bg-white/70 border border-white/50"
          }`}
        >
          <Target className={isDark ? "text-purple-400" : "text-purple-700"} />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-24"
        animate={{ y: [0, 10, 0], x: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className={`w-14 h-14 rounded-2xl grid place-items-center shadow-2xl ${
            isDark ? "bg-slate-800/70 border border-slate-700" : "bg-white/70 border border-white/50"
          }`}
        >
          <TrendingUp className={isDark ? "text-green-400" : "text-green-700"} />
        </div>
      </motion.div>
    </div>
  )
}


