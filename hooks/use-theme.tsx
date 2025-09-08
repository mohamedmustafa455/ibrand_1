"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type ThemeContextValue = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function applyDocumentClass(isDarkMode: boolean) {
  if (typeof document === "undefined") return
  const root = document.documentElement
  if (isDarkMode) {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

function resolveInitialDark(): boolean {
  if (typeof window === "undefined") return false
  try {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    // Default to dark mode for better Arabic text readability
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark) || (!savedTheme && !prefersDark)
    return shouldBeDark
  } catch {
    return true // Default to dark mode
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark") || resolveInitialDark()
    }
    return true // Default to dark mode
  })

  useEffect(() => {
    applyDocumentClass(isDark)

    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") {
        const nextIsDark = e.newValue === "dark"
        setIsDark(nextIsDark)
        applyDocumentClass(nextIsDark)
      }
    }
    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      try {
        localStorage.setItem("theme", next ? "dark" : "light")
      } catch {}
      applyDocumentClass(next)
      return next
    })
  }

  const value = useMemo<ThemeContextValue>(() => ({ isDark, toggleTheme }), [isDark])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    return { isDark: true, toggleTheme: () => {} } // Default to dark mode
  }
  return ctx
}


