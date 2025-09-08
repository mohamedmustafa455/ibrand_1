"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useTheme } from "@/hooks/use-theme"

interface SceneContextType {
  isDark: boolean
}

const SceneContext = createContext<SceneContextType>({ isDark: false })

export const useScene = () => useContext(SceneContext)

interface SceneManagerProps {
  children?: ReactNode
}

export default function SceneManager({ children }: SceneManagerProps) {
  const { isDark } = useTheme()

  return (
    <SceneContext.Provider value={{ isDark }}>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* CSS-based background effects */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"
              : "bg-gradient-to-br from-blue-50 via-white to-yellow-50/50"
          }`}
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full animate-particle ${
                isDark ? "bg-blue-400/20" : "bg-yellow-400/30"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {children}
      </div>
    </SceneContext.Provider>
  )
}
