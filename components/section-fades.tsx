"use client"

import { useTheme } from "@/hooks/use-theme"

interface SectionFadesProps {
  showTop?: boolean
  showBottom?: boolean
  heightClass?: string
}

export default function SectionFades({ showTop = true, showBottom = true, heightClass = "h-24" }: SectionFadesProps) {
  const { isDark } = useTheme()
  const color = isDark ? "to-slate-900" : "to-white"
  return (
    <>
      {showTop && (
        <div
          className={`absolute inset-x-0 top-0 ${heightClass} bg-gradient-to-b from-transparent ${color} pointer-events-none z-[1]`}
        />
      )}
      {showBottom && (
        <div
          className={`absolute inset-x-0 bottom-0 ${heightClass} bg-gradient-to-b from-transparent ${color} pointer-events-none z-[1]`}
        />
      )}
    </>
  )
}


