"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"

type AdvancedGlobeProps = {
  size?: number
  className?: string
}

/**
 * Visually rich SVG globe built from procedural dots (no images), with:
 * - ocean and land dot layers
 * - subtle shading and rim highlight
 * - animated flight arcs with pulsing nodes
 */
export default function AdvancedGlobe({ size = 420, className = "" }: AdvancedGlobeProps) {
  const { isDark } = useTheme()

  const w = size
  const h = size
  const cx = w / 2
  const cy = h / 2
  const r = (size / 2) * 0.96

  const palette = isDark
    ? {
        oceanDot: "#1f75ff",
        landDot: "#9bd1ff",
        sphereDark: "#0f2a45",
        shade: "#143a60",
        rim: "rgba(96, 165, 250, 0.9)",
        glow: "rgba(59, 130, 246, 0.25)",
        arcs: ["#60a5fa", "#34d399", "#22d3ee", "#a78bfa"],
      }
    : {
        oceanDot: "#2563eb",
        landDot: "#1e40af",
        sphereDark: "#c7e2ff",
        shade: "#a3cffc",
        rim: "rgba(37, 99, 235, 0.9)",
        glow: "rgba(37, 99, 235, 0.18)",
        arcs: ["#2563eb", "#10b981", "#06b6d4", "#7c3aed"],
      }

  return (
    <motion.div className={className} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label="animated globe">
        <defs>
          {/* soft glow */}
          <filter id="ag-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* sphere shading */}
          <radialGradient id="ag-shade" cx="48%" cy="42%" r="68%">
            <stop offset="0%" stopColor={palette.shade} stopOpacity="0.95" />
            <stop offset="70%" stopColor={palette.shade} stopOpacity="0.65" />
            <stop offset="100%" stopColor={palette.sphereDark} stopOpacity="0.2" />
          </radialGradient>

          {/* dots pattern (ocean) */}
          <pattern id="ag-dots-ocean" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill={palette.oceanDot} opacity="0.9" />
          </pattern>

          {/* dots pattern (land) */}
          <pattern id="ag-dots-land" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill={palette.landDot} opacity="0.95" />
          </pattern>

          {/* clip for sphere */}
          <clipPath id="ag-clip-sphere">
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>

          {/* landmass mask composed of organic blobs to evoke continents */}
          <mask id="ag-land-mask">
            <rect width="100%" height="100%" fill="black" />
            {/* blobs */}
            <g fill="white" opacity="0.95">
              <ellipse cx={cx + r * 0.1} cy={cy - r * 0.05} rx={r * 0.55} ry={r * 0.28} />
              <ellipse cx={cx + r * 0.35} cy={cy - r * 0.1} rx={r * 0.25} ry={r * 0.18} />
              <ellipse cx={cx - r * 0.35} cy={cy + r * 0.05} rx={r * 0.35} ry={r * 0.22} />
              <ellipse cx={cx - r * 0.05} cy={cy + r * 0.25} rx={r * 0.22} ry={r * 0.12} />
              <ellipse cx={cx + r * 0.25} cy={cy + r * 0.18} rx={r * 0.2} ry={r * 0.1} />
            </g>
          </mask>
        </defs>

        {/* backdrop glow */}
        <circle cx={cx} cy={cy} r={r * 1.08} fill={palette.glow} />

        {/* sphere */}
        <circle cx={cx} cy={cy} r={r} fill="url(#ag-shade)" />

        {/* MOVING dot layers clipped to sphere - create rotation illusion via translateX */}
        <g clipPath="url(#ag-clip-sphere)">
          {/* ocean */}
          <motion.rect
            x={-w}
            y={0}
            width={w * 3}
            height={h}
            fill="url(#ag-dots-ocean)"
            animate={{ x: [-(w * 0.5), 0] }}
            transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            opacity={0.55}
          />

          {/* land overlay */}
          <motion.rect
            x={-w}
            y={0}
            width={w * 3}
            height={h}
            fill="url(#ag-dots-land)"
            mask="url(#ag-land-mask)"
            animate={{ x: [0, -(w * 0.5)] }}
            transition={{ duration: 20, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
            opacity={0.85}
          />
        </g>

        {/* rim highlight */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={palette.rim} strokeOpacity="0.2" strokeWidth={2} />

        {/* animated arcs with pulsing nodes */}
        <g filter="url(#ag-glow)">
          {[
            { d: `M ${cx - r * 0.75},${cy + r * 0.1} C ${cx - r * 0.2},${cy - r * 0.9} ${cx + r * 0.2},${cy - r * 0.9} ${cx + r * 0.8},${cy}`, c: palette.arcs[0] },
            { d: `M ${cx - r * 0.6},${cy + r * 0.45} C ${cx - r * 0.1},${cy + r * 0.1} ${cx + r * 0.4},${cy - r * 0.6} ${cx + r * 0.9},${cy - r * 0.2}`, c: palette.arcs[1] },
            { d: `M ${cx - r * 0.8},${cy - r * 0.2} C ${cx - r * 0.3},${cy + r * 0.6} ${cx + r * 0.4},${cy + r * 0.6} ${cx + r * 0.75},${cy}`, c: palette.arcs[2] },
          ].map((a, i) => (
            <g key={i}>
              <motion.path
                d={a.d}
                fill="none"
                stroke={a.c}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeDasharray="8 12"
                animate={{ pathLength: [0, 1], pathOffset: [0, 1] }}
                transition={{ duration: 6 + i, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                opacity={0.9}
              />
              {/* moving node */}
              <motion.circle r={4} fill={a.c}>
                <animateMotion dur={`${7 + i}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#ag-arc-${i}`} />
                </animateMotion>
              </motion.circle>
            </g>
          ))}
        </g>
      </svg>
    </motion.div>
  )
}



