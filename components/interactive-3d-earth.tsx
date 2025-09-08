"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/hooks/use-theme"

import { X, RotateCcw, ZoomIn, ZoomOut, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EarthProps {
  isFullscreen?: boolean
  onClose?: () => void
}

export default function Interactive3DEarth({ isFullscreen = false, onClose }: EarthProps) {
  const { isDark } = useTheme()
  const earthRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [autoRotate, setAutoRotate] = useState(true)

  // Auto rotation effect
  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setRotation((prev) => ({ ...prev, y: prev.y + 0.5 }))
    }, 50)

    return () => clearInterval(interval)
  }, [autoRotate])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setAutoRotate(false)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStart.x
    const deltaY = e.clientY - dragStart.y

    setRotation((prev) => ({
      x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5,
    }))

    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.1 : 0.1
    setScale((prev) => Math.max(0.5, Math.min(3, prev + delta)))
  }

  const resetView = () => {
    setRotation({ x: 0, y: 0 })
    setScale(1)
    setAutoRotate(true)
  }

  const zoomIn = () => setScale((prev) => Math.min(3, prev + 0.2))
  const zoomOut = () => setScale((prev) => Math.max(0.5, prev - 0.2))

  const earthSize = isFullscreen ? "w-96 h-96" : "w-64 h-64"

  return (
    <motion.div
      className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-black/90 flex items-center justify-center" : ""}`}
      initial={isFullscreen ? { opacity: 0 } : {}}
      animate={isFullscreen ? { opacity: 1 } : {}}
      exit={isFullscreen ? { opacity: 0 } : {}}
    >
      {isFullscreen && (
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
          {/* Close button */}
          <Button
            onClick={onClose}
            variant="outline"
            size="icon"
            className="absolute -top-16 right-0 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Controls */}
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <Button
              onClick={resetView}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={zoomOut}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              onClick={zoomIn}
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setAutoRotate(!autoRotate)}
              variant="outline"
              size="sm"
              className={`border-white/20 text-white hover:bg-white/20 ${
                autoRotate ? "bg-blue-500/30" : "bg-white/10"
              }`}
            >
              <Globe className="h-4 w-4 mr-2" />
              Auto Rotate
            </Button>
          </div>
        </motion.div>
      )}

      {/* Earth Container */}
      <div
        ref={earthRef}
        className={`${earthSize} relative cursor-grab ${isDragging ? "cursor-grabbing" : ""} select-none`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          transform: `scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Earth Sphere */}
        <motion.div
          className={`w-full h-full rounded-full relative overflow-hidden shadow-2xl ${
            isDark
              ? "bg-gradient-to-br from-blue-600 via-green-600 to-blue-700"
              : "bg-gradient-to-br from-blue-500 via-green-500 to-blue-600"
          }`}
          animate={{
            boxShadow: [
              "0 0 50px rgba(59, 130, 246, 0.5)",
              "0 0 80px rgba(34, 197, 94, 0.7)",
              "0 0 50px rgba(59, 130, 246, 0.5)",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          {/* Continents */}
          <div className="absolute inset-0">
            {/* Africa */}
            <div className="absolute top-1/3 left-1/2 w-16 h-20 bg-green-700/80 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

            {/* Europe */}
            <div className="absolute top-1/4 left-1/2 w-12 h-8 bg-green-700/80 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

            {/* Asia */}
            <div className="absolute top-1/3 right-1/4 w-20 h-16 bg-green-700/80 rounded-full transform translate-x-1/2 -translate-y-1/2" />

            {/* North America */}
            <div className="absolute top-1/4 left-1/4 w-14 h-18 bg-green-700/80 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

            {/* South America */}
            <div className="absolute top-2/3 left-1/3 w-10 h-16 bg-green-700/80 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

            {/* Australia */}
            <div className="absolute bottom-1/3 right-1/3 w-8 h-6 bg-green-700/80 rounded-full transform translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Clouds */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/40 rounded-full"
                style={{
                  width: `${Math.random() * 30 + 10}px`,
                  height: `${Math.random() * 15 + 5}px`,
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  x: [0, Math.random() * 20 - 10],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Atmosphere Glow */}
          <div
            className={`absolute inset-0 rounded-full ${
              isDark ? "bg-blue-400/20" : "bg-blue-300/30"
            } blur-sm scale-110`}
          />

          {/* Outer Glow */}
          <div
            className={`absolute inset-0 rounded-full ${
              isDark ? "bg-blue-500/10" : "bg-blue-400/20"
            } blur-lg scale-125`}
          />
        </motion.div>

        {/* Orbital Ring */}
        <motion.div
          className="absolute inset-0 border-2 border-yellow-400/30 rounded-full scale-150"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Stars */}
        {isFullscreen && (
          <div className="absolute inset-0 scale-200">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Instructions */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center"
        >
          <p>Drag to rotate • Scroll to zoom • Click controls to interact</p>
        </motion.div>
      )}
    </motion.div>
  )
}
