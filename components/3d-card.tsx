"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  speed?: number
}

export default function Card3D({ children, className = "", intensity = 0.3, speed = 1 }: Card3DProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        z: 50,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative group ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* 3D Background Effect */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-blue-100/20 to-yellow-100/20 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300" />

      {/* Floating Animation Background */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotateX: [0, intensity * 10, 0],
          rotateY: [0, intensity * 5, 0],
        }}
        transition={{
          duration: 3 + speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0 -z-5 rounded-xl bg-gradient-to-br from-blue-200/10 to-yellow-200/10 blur-sm"
      />

      {/* Content */}
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 group-hover:bg-white/98 group-hover:shadow-2xl transition-all duration-300">
        {children}
      </div>

      {/* 3D Depth Effect */}
      <div className="absolute inset-0 -z-20 rounded-xl bg-gradient-to-br from-blue-800/5 to-yellow-400/5 transform translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
    </motion.div>
  )
}
