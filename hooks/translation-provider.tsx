"use client"

import React, { createContext, useContext, ReactNode } from "react"
import { useTranslation } from "./use-translation"

interface TranslationContextType {
  currentLang: string
  changeLanguage: (lang: string) => void
  switchLanguage: () => void
  t: (key: string) => string
  isRTL: boolean
  isTransitioning: boolean
  transitionFrom: string
  transitionTo: string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function useTranslationContext() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslationContext must be used within a TranslationProvider")
  }
  return context
}

interface TranslationProviderProps {
  children: ReactNode
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const translation = useTranslation()

  // Add switchLanguage function
  const switchLanguage = () => {
    const newLang = translation.currentLang === "ar" ? "en" : "ar"
    translation.changeLanguage(newLang)
  }

  const contextValue = {
    ...translation,
    switchLanguage
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  )
}
