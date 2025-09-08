"use client"

import { useEffect, useRef, useState } from "react"

interface UseAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useAnimation(options: UseAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = false,
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

// Predefined animation classes
export const animationClasses = {
  fadeInUp: "fade-in-up",
  fadeInLeft: "fade-in-left",
  fadeInRight: "fade-in-right",
  scaleIn: "scale-in",
  animateOnScroll: "animate-on-scroll",
}

// Helper function to get animation class with visibility
export const getAnimationClass = (baseClass: string, isVisible: boolean) => {
  return `${baseClass} ${isVisible ? "visible" : ""}`
}
