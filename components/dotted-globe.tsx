"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"

type DottedGlobeProps = {
  size?: number
  className?: string
}

export default function DottedGlobe({ size = 360, className = "" }: DottedGlobeProps) {
  const { isDark } = useTheme()

  const w = size
  const h = size
  const cx = w / 2
  const cy = h / 2
  const r = (size / 2) * 0.96

  const baseColors = isDark
    ? {
        bg: "#0b2441",
        sphere: "#123a63",
        dot: "#5fb0ff",
        glow: "rgba(96, 165, 250, 0.25)",
        arc: ["#60a5fa", "#34d399", "#a78bfa", "#f472b6"],
      }
    : {
        bg: "#ecf3ff",
        sphere: "#b9d8ff",
        dot: "#2563eb",
        glow: "rgba(37, 99, 235, 0.18)",
        arc: ["#2563eb", "#10b981", "#7c3aed", "#db2777"],
      }

  return (
    <motion.div className={className} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="rotating dotted globe">
        <defs>
          {/* radial shade for depth */}
          <radialGradient id="shade" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor={baseColors.sphere} stopOpacity="0.9" />
            <stop offset="70%" stopColor={baseColors.sphere} stopOpacity="0.6" />
            <stop offset="100%" stopColor={baseColors.sphere} stopOpacity="0.15" />
          </radialGradient>

          {/* repeating dots pattern */}
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill={baseColors.dot} opacity="0.85" />
          </pattern>

          {/* mask to confine dots inside the sphere */}
          <mask id="sphereMask">
            <rect width="100%" height="100%" fill="black" />
            <circle cx={cx} cy={cy} r={r} fill="white" />
          </mask>

          {/* glow filter */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* backdrop circle glow */}
        <circle cx={cx} cy={cy} r={r * 1.06} fill={baseColors.glow} />

        {/* sphere shading */}
        <circle cx={cx} cy={cy} r={r} fill="url(#shade)" />

        {/* dotted surface confined by mask */}
        <g mask="url(#sphereMask)">
          <rect width={w} height={h} fill="url(#dots)" />
          {/* subtle longitude/latitude lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={`lat-${i}`} cx={cx} cy={cy} r={r * (0.2 + 0.07 * i)} fill="none" stroke={baseColors.dot} strokeOpacity="0.08" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`lon-${i}`}
              x1={cx}
              y1={cy - r}
              x2={cx}
              y2={cy + r}
              stroke={baseColors.dot}
              strokeOpacity="0.06"
              transform={`rotate(${(i * 360) / 12} ${cx} ${cy})`}
            />
          ))}
        </g>

        {/* animated arcs */}
        <g filter="url(#softGlow)">
          {[
            { d: `M ${cx - r * 0.8},${cy + r * 0.2} C ${cx - r * 0.2},${cy - r * 0.9} ${cx + r * 0.2},${cy - r * 0.9} ${cx + r * 0.85},${cy - r * 0.1}` },
            { d: `M ${cx - r * 0.6},${cy + r * 0.4} C ${cx - r * 0.1},${cy + r * 0.1} ${cx + r * 0.4},${cy - r * 0.6} ${cx + r * 0.9},${cy - r * 0.2}` },
            { d: `M ${cx - r * 0.75},${cy - r * 0.1} C ${cx - r * 0.2},${cy + r * 0.6} ${cx + r * 0.4},${cy + r * 0.6} ${cx + r * 0.8},${cy}` },
            { d: `M ${cx - r * 0.9},${cy + r * 0.5} C ${cx - r * 0.4},${cy + r * 0.1} ${cx + r * 0.2},${cy - r * 0.7} ${cx + r * 0.7},${cy - r * 0.3}` },
          ].map((arc, i) => (
            <motion.path
              key={i}
              d={arc.d}
              fill="none"
              stroke={baseColors.arc[i % baseColors.arc.length]}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray="6 10"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ pathLength: 1, pathOffset: 1 }}
              transition={{ duration: 6 + i * 0.6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              opacity={0.85}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  )
}



