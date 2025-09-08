"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

interface GalleryItem {
  src: string
  filename: string
  title: string
  description?: string
}

interface InteractiveGalleryProps {
  serviceId: string
  itemsPerRow?: number
  showDescriptions?: boolean
}

export default function InteractiveGallery({ 
  serviceId, 
  itemsPerRow = 8, 
  showDescriptions = true 
}: InteractiveGalleryProps) {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const [sections, setSections] = useState<{ title: string; items: GalleryItem[] }[]>([])
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState<{ src: string; title: string; description?: string; index: number; filename: string } | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allItems, setAllItems] = useState<GalleryItem[]>([])
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.8)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchSections() {
      try {
        setLoading(true)
        const res = await fetch(`/api/service-results?service=${encodeURIComponent(serviceId)}`, {
          signal: controller.signal,
          cache: "no-store",
        })
        if (!res.ok) throw new Error("Failed to load service results")
        const data = await res.json()
        
        // Transform sections to include descriptions
        const transformedSections = data.sections.map((section: any) => ({
          title: section.title,
          items: section.items.map((item: any) => ({
            ...item,
            title: section.title,
            description: getDescriptionForItem(item.filename, section.title)
          }))
        }))
        
        setSections(transformedSections)
        
        // Flatten all items for lightbox navigation
        const flatItems = transformedSections.flatMap((section: { title: string; items: GalleryItem[] }) => section.items)
        setAllItems(flatItems)
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          console.error("Failed to load gallery:", e)
          setSections([])
        }
      } finally {
        setLoading(false)
      }
    }
    fetchSections()
    return () => controller.abort()
  }, [serviceId])

  // Generate description based on filename and section
  const getDescriptionForItem = (filename: string, sectionTitle: string): string => {
    const baseName = filename.replace(/\.[^.]+$/, "")
    const section = sectionTitle.toLowerCase()
    
    // Generate descriptions based on section and filename
    if (section.includes("كينج وود") || section.includes("king wood")) {
      return "تصميم هوية بصرية متكاملة لشركة أثاث فاخرة مع مواد تسويقية احترافية"
    } else if (section.includes("هاي براند") || section.includes("high brand")) {
      return "إعادة تصميم كاملة للهوية البصرية لعلامة أزياء فاخرة مع حملة تسويقية شاملة"
    } else if (section.includes("الاخوة المتحدون") || section.includes("united brothers")) {
      return "هوية بصرية وتصميم عبوات لشركة طعام تقليدية مع مواد تسويقية"
    } else if (section.includes("اتقان المريد") || section.includes("perfection seeking")) {
      return "تصميم هوية بصرية لمنصة تعليمية مع مواد تسويقية تعليمية"
    } else if (section.includes("مكة") || section.includes("makkah")) {
      return "تصميم هوية بصرية لخدمات سياحية وحج وعمرة"
    } else if (section.includes("ترحال") || section.includes("travel")) {
      return "تصميم هوية بصرية لشركة سياحة وسفر مع مواد تسويقية"
    } else if (section.includes("عسل") || section.includes("honey")) {
      return "تصميم هوية بصرية لمنتجات عسل طبيعي مع عبوات جذابة"
    } else if (section.includes("الجزار") || section.includes("butcher")) {
      return "تصميم هوية بصرية لشركة لحوم مع مواد تسويقية"
    } else if (section.includes("ابن الاسطى") || section.includes("craftsman")) {
      return "تصميم هوية بصرية لورشة حرفية مع مواد تسويقية"
    } else if (section.includes("الإنجاز المعتمد")) {
      return "تصميم هوية بصرية لخدمات معتمدة مع شهادات احترافية"
    } else if (section.includes("الوكيل") || section.includes("agent")) {
      return "تصميم هوية بصرية لوكالة خدمات مع مواد تسويقية"
    } else if (section.includes("بداية مشوارك") || section.includes("journey")) {
      return "تصميم هوية بصرية لخدمات تطوير مهني مع مواد تسويقية"
    } else if (section.includes("كشخة الزين") || section.includes("beauty")) {
      return "تصميم هوية بصرية لصالون تجميل مع مواد تسويقية"
    } else if (section.includes("ماستر") || section.includes("master")) {
      return "تصميم هوية بصرية لخدمات احترافية مع مواد تسويقية"
    } else if (section.includes("ووديكس") || section.includes("woodex")) {
      return "تصميم هوية بصرية لشركة أثاث مع مواد تسويقية"
    } else if (section.includes("i brand") || section.includes("ibrand")) {
      return "تصميم هوية بصرية لشركة تسويق مع مواد تسويقية احترافية"
    }
    
    return "تصميم هوية بصرية احترافية مع مواد تسويقية عالية الجودة"
  }

  const openLightbox = (item: GalleryItem, index: number) => {
    setLightbox({ ...item, index, filename: item.filename })
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setLightbox(null)
    setIsPlaying(false)
  }

  const goToPrevious = () => {
    if (allItems.length === 0) return
    const newIndex = currentIndex === 0 ? allItems.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setLightbox({ ...allItems[newIndex], index: newIndex })
  }

  const goToNext = () => {
    if (allItems.length === 0) return
    const newIndex = currentIndex === allItems.length - 1 ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setLightbox({ ...allItems[newIndex], index: newIndex })
  }

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      const newMuted = !isMuted
      videoRef.current.muted = newMuted
      setIsMuted(newMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const isVideo = (filename: string) => /\.(mp4|webm|ogg)$/i.test(filename)
  const isAudio = (filename: string) => /\.(mp3|wav|m4a|aac)$/i.test(filename)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (sections.length === 0) {
    return (
      <div className="text-center py-20">
        <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {isRTL ? "لا توجد صور متاحة حالياً" : "No images available at the moment"}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {sections.map((section, sectionIndex) => (
        <div key={section.title} className="space-y-6">
          <h3 className={`text-2xl font-bold text-center ${isDark ? "text-white" : "text-gray-900"}`}>
            {section.title}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {section.items.map((item, itemIndex) => {
              const globalIndex = sections
                .slice(0, sectionIndex)
                .reduce((acc, s) => acc + s.items.length, 0) + itemIndex
              
              return (
                <motion.div
                  key={`${section.title}-${item.filename}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                  className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer ${
                    isDark ? "bg-slate-800" : "bg-white"
                  } shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                  onClick={() => openLightbox(item, globalIndex)}
                >
                  {isVideo(item.filename) ? (
                    <div className="relative w-full h-full">
                      <video
                        src={item.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : isAudio(item.filename) ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                      <div className="text-center text-white">
                        <div className="text-2xl mb-2">🎵</div>
                        <div className="text-xs">Audio</div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.filename}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 16.66vw, 12.5vw"
                    />
                  )}
                  
                  {showDescriptions && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs truncate">
                        {item.description || item.title}
                      </p>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <div className="relative w-full max-w-6xl h-[90vh] flex flex-col">
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main content */}
              <div className="flex-1 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-full max-w-5xl">
                  {isVideo(lightbox.filename) ? (
                    <div className="relative w-full h-full">
                      <video
                        ref={videoRef}
                        src={lightbox.src}
                        className="w-full h-full object-contain"
                        controls={false}
                        onLoadedMetadata={() => {
                          if (videoRef.current) {
                            videoRef.current.volume = volume
                            videoRef.current.muted = isMuted
                          }
                        }}
                      />
                      
                      {/* Video controls */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={handleVideoPlay}
                            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          
                          <button
                            onClick={handleVolumeToggle}
                            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                          >
                            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                          </button>
                          
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  ) : isAudio(lightbox.filename) ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">🎵</div>
                        <audio src={lightbox.src} controls className="w-full max-w-md" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={lightbox.src}
                      alt={lightbox.filename}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  )}
                </div>
              </div>

              {/* Description */}
              {showDescriptions && lightbox.description && (
                <div className="mt-4 text-center text-white">
                  <h3 className="text-xl font-semibold mb-2">{lightbox.title}</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    {lightbox.description}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {currentIndex + 1} / {allItems.length}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}







