"use client"

import { useEffect, useMemo, useRef, useState, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"
import { ChevronLeft, ChevronRight, PlayCircle, TrendingUp } from "lucide-react"
import { portfolioData } from "@/data/portfolio-data"

type Section = { title: string; items: { src: string; filename: string }[] }

type GalleryVariant = "service" | "portfolio"

export default function ServiceResultsGallery({ serviceId, variant = "service", heightClass, display = "carousel", showTags = true, showBadge = true, showServiceTags = false, forceAutoPlay = false, hideThumbnails = false, pauseOnVideoPlay = false }: { serviceId: string; variant?: GalleryVariant; heightClass?: string; display?: "carousel" | "grid"; showTags?: boolean; showBadge?: boolean; showServiceTags?: boolean; forceAutoPlay?: boolean; hideThumbnails?: boolean; pauseOnVideoPlay?: boolean }) {
  const { isDark } = useTheme()
  const { isRTL, t } = useTranslationContext()
  const [sections, setSections] = useState<Section[]>([])
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState<{ src: string; title: string; sectionTitle?: string } | null>(null)
  const [activeTag, setActiveTag] = useState<string>("__ALL__")
  const [index, setIndex] = useState<number>(0)
  const [autoPlay, setAutoPlay] = useState(true)
  // Start collapsed by default (show a few items). URL ?all=1 will expand.
  const [visibleCount, setVisibleCount] = useState<number>(6)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [lockedByPlayback, setLockedByPlayback] = useState<boolean>(false)
  const [playbackRate, setPlaybackRate] = useState<number>(1)
  const [volume, setVolume] = useState<number>(0.8)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  // Enable tags for sponsored ads to show categories
  const tagsEnabled = showTags || serviceId === "sponsored-ads"

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
        setSections(data.sections || [])
      } catch (e) {
        if ((e as any).name !== "AbortError") {
          setSections([])
        }
      } finally {
        setLoading(false)
      }
    }
    fetchSections()
    // Read URL params for all and tag
    try {
      const sp = new URLSearchParams(window.location.search)
      const all = sp.get("all")
      const tag = sp.get("tag")
      if (tag) setActiveTag(tag)
      if (all === "1") setVisibleCount(9999)
    } catch {}
    return () => controller.abort()
  }, [serviceId])

  // Tags (hashtags) list
  const tags = useMemo(() => {
    const raw = ["__ALL__", ...sections.map((s) => s.title)]
    // Hide tags that would produce zero items
    const hasItemsForTag = (tag: string) => {
      if (tag === "__ALL__") return sections.some((s) => s.items && s.items.length > 0)
      const sec = sections.find((s) => s.title === tag)
      return !!(sec && sec.items && sec.items.length > 0)
    }
    return raw.filter(hasItemsForTag)
  }, [sections])

  // Category mapping for sponsored ads
  const categoryMapping = useMemo(() => {
    if (serviceId !== "sponsored-ads") return {}
    
    return {
      "1- اثاث": isRTL ? "أثاث" : "Furniture",
      "2- استيراد وتصدير": isRTL ? "استيراد وتصدير" : "Import & Export", 
      "3- أكاديميه تعليميه": isRTL ? "أكاديمية تعليمية" : "Educational Academy",
      "4- صيانه سيارات": isRTL ? "صيانة سيارات" : "Car Maintenance",
      "5- عقارات": isRTL ? "عقارات" : "Real Estate",
      "6- مجال طبي وتجميل": isRTL ? "مجال طبي وتجميل" : "Medical & Beauty",
      "7- ملابس": isRTL ? "ملابس" : "Fashion",
      "8- منحل عسل": isRTL ? "منحل عسل" : "Honey Farm",
      "9- مطاعم_": isRTL ? "مطاعم" : "Restaurants",
      "10- هاند ميد": isRTL ? "هاند ميد" : "Handmade",
      "11- اعلانات التيك توك": isRTL ? "إعلانات التيك توك" : "TikTok Ads",
      "12- مجالات مختلفه": isRTL ? "مجالات مختلفة" : "Various Fields",
      "0- أداء الصفحات": isRTL ? "أداء الصفحات" : "Page Performance"
    }
  }, [serviceId, isRTL])

  // Enhanced items logic for category-based filtering with better performance
  const items = useMemo(() => {
    if (!sections.length) return [] as { src: string; title: string; filename: string }[]
    
    // If activeTag is "__ALL__", show all items
    if (activeTag === "__ALL__") {
      return sections.flatMap((s) => s.items.map((it) => ({ ...it, title: s.title })))
    }
    
    // If activeTag is a specific section title, show that section
    const section = sections.find((s) => s.title === activeTag)
    if (section) {
      return section.items.map((it) => ({ ...it, title: section.title }))
    }
    
    // If activeTag is a category group, show all sections that match the category
    const categoryGroups = [
      { id: "fashion", keywords: ["clothing", "fashion", "cosmetics", "beauty", "luxury", "أزياء", "ملابس", "مستحضرات", "جمال"] },
      { id: "business", keywords: ["furniture", "food", "restaurant", "retail", "export", "import", "property", "أثاث", "طعام", "مطاعم", "تجارة", "تصدير", "استيراد", "عقاري"] },
      { id: "education", keywords: ["education", "quran", "certification", "career", "development", "تعليم", "قرآن", "شهادات", "مهن", "تطوير"] },
      { id: "tourism", keywords: ["tourism", "travel", "destination", "سياحة", "سفر", "وجهة"] }
    ]
    
    const matchingCategory = categoryGroups.find(group => group.id === activeTag)
    if (matchingCategory) {
      const matchingSections = sections.filter(section => 
        matchingCategory.keywords.some(keyword => 
          section.title.toLowerCase().includes(keyword.toLowerCase())
        )
      )
      return matchingSections.flatMap((s) => s.items.map((it) => ({ ...it, title: s.title })))
    }
    
    // Fallback to original logic - show all items
    return sections.flatMap((s) => s.items.map((it) => ({ ...it, title: s.title })))
  }, [sections, activeTag])

  // Map section title -> portfolio meta (to localize labels)
  const projectByTitle = useMemo(() => {
    const map: Record<string, typeof portfolioData[number] | undefined> = {}
    sections.forEach((s) => {
      const found = portfolioData.find((p) => {
        const tA = (p.titleAr || "").toLowerCase()
        const tE = (p.title || "").toLowerCase()
        const sL = s.title.toLowerCase()
        return sL.includes(tA) || sL.includes(tE) || tA.includes(sL) || tE.includes(sL)
      })
      map[s.title] = found
    })
    return map
  }, [sections])

  // Keep index in range and reset when tag changes
  useEffect(() => {
    setIndex(0)
  }, [activeTag])

  // Clamp index when items change
  useEffect(() => {
    if (items.length === 0) {
      setIndex(0)
      return
    }
    if (index >= items.length) {
      setIndex(0)
    }
  }, [items, index])

  const goPrev = useCallback(() => setIndex((prev) => (items.length ? (prev - 1 + items.length) % items.length : 0)), [items.length])
  const goNext = useCallback(() => setIndex((prev) => (items.length ? (prev + 1) % items.length : 0)), [items.length])

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [items.length, goNext, goPrev])

  // Auto play
  useEffect(() => {
    if (!(autoPlay || (forceAutoPlay && !lockedByPlayback)) || items.length <= 1) return
    const id = setInterval(() => {
      setIndex((prev) => (items.length ? (prev + 1) % items.length : 0))
    }, 4000)
    return () => clearInterval(id)
  }, [autoPlay, items.length, forceAutoPlay, lockedByPlayback])

  // Pause autoplay when tab hidden
  useEffect(() => {
    if (forceAutoPlay) return
    function onVisibility() {
      if (document.hidden) setAutoPlay(false)
      else setAutoPlay(true)
    }
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [forceAutoPlay])

  // Respect reduced motion
  const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Safe index for render to prevent transient out-of-bounds
  const safeIndex = items.length ? Math.min(index, items.length - 1) : 0
  const currentItem = items.length ? items[safeIndex] : null
  const isVideo = currentItem ? /\.(mp4)$/i.test(currentItem.filename) : false
  const isAudio = currentItem ? /\.(mp3|wav|m4a|aac)$/i.test(currentItem.filename) : false

  // Touch swipe support
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
    setAutoPlay(false)
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 40) {
      if (touchDeltaX.current > 0) {
        goPrev()
      } else {
        goNext()
      }
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setAutoPlay(true)
  }

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <div className={`animate-pulse text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {t("gallery.results.loading")}
        </div>
      </div>
    )
  }

  if (!sections.length) {
    return (
      <div className="w-full flex items-center justify-center py-10">
        <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          {t("gallery.results.empty")}
        </div>
      </div>
    )
  }

  // Grid Card Layout (portfolio-like)
  if (display === "grid") {
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }
    const prettyFromFilename = (name: string) => {
      try {
        const withoutQuery = name.split("?")[0]
        const base = withoutQuery.replace(/\.[^.]+$/, "")
        return decodeURIComponent(base).replace(/[._-]+/g, " ").trim()
      } catch {
        return name
      }
    }
    const buildDescription = (filename: string, title: string) => {
      const isVid = /\.(mp4)$/i.test(filename)
      const isAud = /\.(mp3|wav|m4a|aac)$/i.test(filename)
      const human = prettyFromFilename(filename)
      if (isVid) {
        return isRTL
          ? `فيديو قصير يعرض لمحة من مشروع ${title}. نُبرز الإطار العام والفكرة الإبداعية مع تركيز على التفاصيل المهمة. اكتشف المزيد داخل المعرض لترى اللقطات الكاملة وتأثير العمل.`
          : `A short video offering a glimpse of ${title}. It highlights the overarching concept with a focus on important details. Explore the gallery for full shots and impact.`
      }
      if (isAud) {
        return isRTL
          ? `مقطع صوتي قصير يقدّم عينة من تعليق صوتي ضمن مشروع ${title}. استمع للتون والأداء والمونتاج الصوتي.`
          : `A short audio sample of the voice-over for ${title}. Hear the tone, delivery, and audio editing.`
      }
      // image
      return isRTL
        ? `لقطة مصغّرة من مشروع ${title}. نعرض جانبًا بصريًا يعبّر عن روح الهوية والنتيجة النهائية. تصفّح بقية العناصر لرؤية مزيد من التفاصيل والأفكار.`
        : `A thumbnail snapshot from ${title}. It conveys the brand spirit and final outcome. Browse the rest of the items to see more details and ideas.`
    }
    const isImageName = (name: string) => /\.(png|jpg|jpeg|webp|gif)$/i.test(name)
    const getPosterForSection = (sectionTitle: string, baseName: string) => {
      const sec = sections.find((s) => s.title === sectionTitle)
      if (!sec) return ""
      const images = sec.items.filter((it) => isImageName(it.filename))
      const exact = images.find((img) => {
        const a = img.filename.replace(/\.[^.]+$/, "").toLowerCase()
        return a.startsWith(baseName.toLowerCase())
      })
      return (exact || images[0])?.src || ""
    }
    return (
      <div className="space-y-8 relative">
        {/* Small Header */}
        <div className="text-center">
          <h3 className={`text-2xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("gallery.header")}
          </h3>
        </div>
        {/* Topic selector as cards */}
        {tagsEnabled && (
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            {tags.map((tag) => {
              const selected = tag === activeTag
              const meta = projectByTitle[tag]
              let label = tag === "__ALL__" ? t("gallery.all") : (meta ? (isRTL ? (meta.titleAr || meta.title) : (meta.title || meta.titleAr)) : tag)
              
              // For sponsored ads, use category mapping
              if (serviceId === "sponsored-ads" && tag !== "__ALL__") {
                const mappedLabel = categoryMapping[tag as keyof typeof categoryMapping]
                if (mappedLabel) {
                  label = mappedLabel // Show based on language
                }
              }
              
              return (
                <motion.button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`px-4 py-2 rounded-2xl font-medium transition-all duration-300 ${
                    selected
                      ? "bg-blue-600 text-white shadow-lg"
                      : isDark
                        ? "bg-slate-800 text-gray-200 hover:bg-slate-700 border border-slate-700"
                        : "bg-white text-gray-700 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {label}
                </motion.button>
              )
            })}
          </div>
        )}

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {items.slice(0, Math.max(visibleCount, 0)).map((it, index) => {
            const cardIsVideo = /\.(mp4)$/i.test(it.filename)
            const cardIsAudio = /\.(mp3|wav|m4a|aac)$/i.test(it.filename)
            const baseName = it.filename.replace(/\.[^.]+$/, "")
            const poster = cardIsVideo ? getPosterForSection(it.title, baseName) : ""
            const meta = projectByTitle[it.title]
            return (
              <motion.div
                key={`${it.filename}-${index}`}
                variants={cardVariants}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  isDark ? "bg-slate-800" : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-500 border ${
                  isDark ? "border-slate-700" : "border-gray-200"
                }`}
                whileHover={{ y: -4 }}
              >
                <div className={`relative h-72 overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}>
                  {cardIsVideo ? (
                    <video
                      src={it.src}
                      className="absolute inset-0 w-full h-full object-contain bg-white border-2 border-blue-200 rounded-xl"
                      controls={false}
                      playsInline
                      loop
                      preload="metadata"
                      poster={poster || undefined}
                      onMouseEnter={(e) => { try { (e.currentTarget as HTMLVideoElement).play().catch(() => {}) } catch {} }}
                      onMouseLeave={(e) => { try { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0 } catch {} }}
                    />
                  ) : cardIsAudio ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      <div className={`mb-3 text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{t("gallery.mediaPreview")}</div>
                      <audio src={it.src} controls className="w-full max-w-sm" preload="metadata" />
                    </div>
                  ) : (
                    <Image
                      src={it.src}
                      alt={it.filename}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  {cardIsVideo && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div className="rounded-full bg-black/30 p-2">
                        <PlayCircle className="w-10 h-10 text-white drop-shadow" />
                      </div>
                    </div>
                  )}
                  {/* Results badge */}
                  {meta && meta.results && meta.results.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        isDark ? "bg-green-600/90 text-white" : "bg-green-500/90 text-white"
                      } backdrop-blur-sm`}>
                        <TrendingUp className="w-3 h-3" />
                        {meta.results[0].value}
                      </div>
                    </div>
                  )}
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      isDark ? "bg-blue-600/90 text-white" : "bg-white/90 text-blue-800"
                    } backdrop-blur-sm`}>
                      {(() => { const meta = projectByTitle[it.title]; const tagLabel = meta ? (isRTL ? (meta.titleAr || meta.title) : (meta.title || meta.titleAr)) : it.title; return tagLabel })()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${isDark ? "text-white" : "text-slate-900"} text-base font-semibold truncate`}>
                    {(() => {
                      const meta = projectByTitle[it.title]
                      // Prefer the section title when we don't have portfolio metadata,
                      // instead of falling back to the raw filename (which can be numeric).
                      if (meta) {
                        return isRTL ? (meta.titleAr || meta.title) : (meta.title || meta.titleAr)
                      }
                      return it.title || prettyFromFilename(it.filename)
                    })()}
                  </h3>
                  <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-xs mt-1 line-clamp-3`}> 
                    {meta ? (isRTL ? meta.descriptionAr : meta.description) : buildDescription(it.filename, it.title)}
                  </p>
                  {/* Meta footer */}
                  {meta && (
                    <div className={`mt-3 text-[11px] flex items-center justify-between ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                      <span className="truncate max-w-[60%]">{meta.client}</span>
                      <span>{meta.duration}</span>
                    </div>
                  )}
                  {showServiceTags && meta && meta.services && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {meta.services.slice(0, 2).map((s, i) => (
                        <span key={i} className={`${isDark ? "bg-slate-700 text-gray-300" : "bg-blue-100 text-blue-800"} text-[11px] px-2 py-0.5 rounded-full`}>{s.split(/[,&]/)[0].trim()}</span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <button
                      onClick={() => setLightbox({ src: it.src, title: it.filename, sectionTitle: it.title })}
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-2xl font-semibold"
                    >
                      {(cardIsVideo || cardIsAudio) ? t("gallery.play") : t("gallery.view")}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Show more / less */}
        {items.length > visibleCount && (
          <div className="flex justify-center">
            <button
              onClick={() => {
                setVisibleCount(items.length)
              }}
              className={`px-6 py-3 rounded-xl font-semibold shadow transition-all ${
                isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-blue-700 hover:bg-blue-50 border border-blue-200"
              }`}
            >
              {t("gallery.showAll")}
            </button>
          </div>
        )}

        {items.length > 6 && visibleCount >= items.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount(6)}
              className={`px-6 py-3 rounded-xl font-semibold shadow transition-all ${
                isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-blue-700 hover:bg-blue-50 border border-blue-200"
              }`}
            >
              {t("gallery.showLess")}
            </button>
          </div>
        )}

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-label="lightbox"
          >
            <div className="relative w-full max-w-6xl h-[82vh]">
              {/\.(mp4)$/i.test(lightbox.title) ? (
                <div className="relative h-[70vh]">
                  <video ref={videoRef} src={lightbox.src} className="w-full h-full object-contain bg-black border-2 border-blue-300 rounded-xl" playsInline onLoadedMetadata={(e) => { const v = e.currentTarget; setDuration(v.duration || 0); v.playbackRate = playbackRate; v.volume = volume; v.muted = isMuted }} onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)} />
                  <div className={`absolute bottom-2 left-2 right-2 ${isDark ? "bg-slate-900/70" : "bg-white/90"} backdrop-blur-md rounded-xl px-3 py-2 shadow border ${isDark ? "border-slate-700" : "border-gray-200"}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                      <button className={`px-3 py-1.5 rounded ${isDark ? "bg-slate-800 text-white" : "bg-blue-600 text-white"}`} onClick={() => { const v = videoRef.current; if (!v) return; if (v.paused) { v.play().catch(()=>{}); setIsPlaying(true) } else { v.pause(); setIsPlaying(false) } }}>{isPlaying ? (isRTL ? "إيقاف" : "Pause") : (isRTL ? "تشغيل" : "Play")}</button>
                      <input type="range" min={0} max={duration || 0} step={0.1} value={currentTime} onChange={(e) => { const v = videoRef.current; if (!v) return; const t = Number(e.target.value); v.currentTime = t; setCurrentTime(t) }} className="flex-1" />
                      <select value={playbackRate} onChange={(e) => { const r = Number(e.target.value); setPlaybackRate(r); const v = videoRef.current; if (v) v.playbackRate = r }} className={`text-xs px-2 py-1 rounded ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-900 border"}`}>
                        <option value={0.5}>0.5x</option>
                        <option value={1}>1x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={2}>2x</option>
                      </select>
                      <button className={`px-2 py-1 rounded ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-900 border"}`} onClick={() => { const v = videoRef.current; if (!v) return; const nv = !isMuted; v.muted = nv; setIsMuted(nv) }}>{isMuted ? (isRTL ? "بدون صوت" : "Muted") : (isRTL ? "بصوت" : "Sound")}</button>
                      <input type="range" min={0} max={1} step={0.05} value={volume} onChange={(e) => { const v = videoRef.current; const vol = Number(e.target.value); setVolume(vol); if (v) v.volume = vol }} />
                    </div>
                  </div>
                </div>
              ) : /\.(mp3|wav|m4a|aac)$/i.test(lightbox.title) ? (
                <div className="relative h-[30vh] max-h-[260px] w-full flex flex-col items-center justify-center">
                  <div className={`mb-3 text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{t("gallery.mediaPreview")}</div>
                  <audio src={lightbox.src} controls className="w-full max-w-2xl" preload="metadata" />
                </div>
              ) : (
                <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain" sizes="100vw" />
              )}
              {/* Meta panel */}
              <div className="absolute bottom-2 left-2 right-2">
                <div className={`rounded-xl px-4 py-3 ${isDark ? "bg-slate-900/80 text-white" : "bg-white/90 text-slate-900"} shadow border ${isDark ? "border-slate-700" : "border-gray-200"}`}>
                  <div className="text-sm font-semibold truncate">{lightbox.title.replace(/\.[^.]+$/, "")}</div>
                  {(() => {
                    const meta = lightbox.sectionTitle ? projectByTitle[lightbox.sectionTitle] : undefined
                    if (!meta) return <div className="text-xs mt-1">{t("gallery.mediaPreview")}</div>
                    return (
                      <div className="mt-1 space-y-2">
                        <div className="text-xs leading-relaxed">{isRTL ? meta.descriptionAr : meta.description}</div>
                        <div className="text-[11px] flex items-center justify-between opacity-80"><span>{meta.client}</span><span>{meta.duration}</span></div>
                        {meta.services && (
                          <div className="flex flex-wrap gap-2">
                            {meta.services.slice(0, 4).map((s, i) => (
                              <span key={i} className={`${isDark ? "bg-slate-800 text-gray-200" : "bg-blue-50 text-blue-800"} text-[11px] px-2 py-0.5 rounded-full`}>{s.split(/[,&]/)[0].trim()}</span>
                            ))}
                          </div>
                        )}
                        {meta.results && meta.results.length > 0 && (
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className={`${isDark ? "text-green-300" : "text-green-700"} font-semibold`}>{meta.results[0].value}</span>
                            <span className="opacity-80">{meta.results[0].metric}</span>
                          </div>
                        )}
                      </div>
                    )
                  })()}
                </div>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-2 right-2 px-3 py-1 rounded-lg text-sm font-semibold bg-white text-slate-900 shadow"
              >
                {t("common.close")}
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Carousel Layout (default)
  return (
    <div className="space-y-10">
      {/* Hashtag selector */}
      {tagsEnabled && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
          {tags.map((tag) => {
            const selected = tag === activeTag
            let label = tag === "__ALL__" ? t("gallery.all") : (() => { const meta = projectByTitle[tag]; return meta ? (isRTL ? (meta.titleAr || meta.title) : (meta.title || meta.titleAr)) : tag })()
            
            // For sponsored ads, use category mapping
            if (serviceId === "sponsored-ads" && tag !== "__ALL__") {
              const mappedLabel = categoryMapping[tag as keyof typeof categoryMapping]
              if (mappedLabel) {
                label = mappedLabel // Show based on language
              }
            }
            
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 rounded-xl border text-sm shadow-sm transition-all snap-start ${
                  selected
                    ? isDark
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-blue-600 border-blue-600 text-white"
                    : isDark
                      ? "border-slate-600 text-gray-200 hover:bg-slate-700"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      {/* Single-card carousel */}
      <div
        className={`group relative w-full rounded-3xl overflow-hidden backdrop-blur-xl ${
          variant === "portfolio"
            ? (isDark
                ? "bg-gradient-to-br from-indigo-700/20 via-sky-600/15 to-purple-700/20"
                : "bg-gradient-to-br from-white/80 via-sky-50/70 to-purple-50/60")
            : (isDark
                ? "bg-slate-900/40"
                : "bg-white/80")
        } shadow-[0_20px_70px_-20px_rgba(0,0,0,0.35)]`}
        style={{ minHeight: 300 }}
        onMouseEnter={() => { if (!forceAutoPlay) setAutoPlay(false) }}
        onMouseLeave={() => { if (!forceAutoPlay) setAutoPlay(true) }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Subtle backdrop gradient - brighter for portfolio */}
        <div className={`absolute inset-0 pointer-events-none ${
          variant === "portfolio"
            ? (isDark
                ? "bg-gradient-to-br from-indigo-400/10 via-sky-400/10 to-purple-400/10"
                : "bg-gradient-to-br from-sky-100/60 via-white/40 to-purple-100/50")
            : (isDark
                ? "bg-gradient-to-b from-transparent via-slate-900/25 to-transparent"
                : "bg-gradient-to-b from-white/40 via-white/20 to-transparent")
        }`} />
        <AnimatePresence mode="wait">
          {currentItem && (
            <motion.div
              key={`${activeTag}-${safeIndex}-${currentItem.filename}`}
              initial={{ opacity: 0, x: prefersReduced ? 0 : (isRTL ? 60 : -60), scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: prefersReduced ? 0 : (isRTL ? -60 : 60), scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className={`relative w-full ${heightClass || "h-[50vh] md:h-[60vh]"} max-h-[640px] min-h-[260px]`}
            >
              {/* Full-fit media inside card */}
              {isVideo ? (
                <video
                  src={currentItem.src}
                  ref={videoRef}
                  className={`absolute inset-0 w-full h-full ${variant === "portfolio" ? "bg-white/70" : (isDark ? "bg-slate-900/30" : "bg-white")} object-contain border-2 border-blue-200 rounded-xl`}
                  controls={false}
                  playsInline
                  onLoadedMetadata={(e) => { const v = e.currentTarget; setDuration(v.duration || 0); v.playbackRate = playbackRate; v.volume = volume; v.muted = isMuted }}
                  onPlay={() => { if (pauseOnVideoPlay) { setLockedByPlayback(true); setAutoPlay(false) } setIsPlaying(true) }}
                  onPause={() => { setIsPlaying(false) }}
                  onEnded={() => { setIsPlaying(false); setLockedByPlayback(false); if (forceAutoPlay) setAutoPlay(true) }}
                  onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                />
              ) : isAudio ? (
                <div className={`absolute inset-0 w-full h-full ${variant === "portfolio" ? "bg-white/70" : (isDark ? "bg-slate-900/30" : "bg-white")} flex items-center justify-center p-6`}>
                  <audio src={currentItem.src} controls className="w-full max-w-md" preload="metadata" />
                </div>
              ) : (
                <Image
                  src={currentItem.src}
                  alt={currentItem.filename}
                  fill
                  className={`object-contain ${variant === "portfolio" ? "bg-white/70" : (isDark ? "bg-slate-900/30" : "bg-white")}`}
                  sizes="100vw"
                  priority={false}
                />
              )}

              {/* Top-left tag badge (optional) */}
              {showBadge && (
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold ${
                    isDark ? "bg-slate-900/80 text-white" : "bg-white/95 text-slate-800"
                  } shadow border ${isDark ? "border-slate-700" : "border-gray-200"}`}>
                    {(() => { const meta = projectByTitle[currentItem.title]; return meta ? (isRTL ? (meta.titleAr || meta.title) : (meta.title || meta.titleAr)) : currentItem.title })()}
                  </span>
                </div>
              )}

              {/* Decorative bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

              {/* Nav arrows */}
              <button
                aria-label="previous"
                onClick={goPrev}
                className={`absolute top-1/2 -translate-y-1/2 left-3 p-2 rounded-full backdrop-blur-sm shadow-lg transition-all ${
                  isDark ? "bg-slate-900/60 text-white hover:bg-slate-900/80" : "bg-white/80 text-slate-900 hover:bg-white"
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                aria-label="next"
                onClick={goNext}
                className={`absolute top-1/2 -translate-y-1/2 right-3 p-2 rounded-full backdrop-blur-sm shadow-lg transition-all ${
                  isDark ? "bg-slate-900/60 text-white hover:bg-slate-900/80" : "bg-white/80 text-slate-900 hover:bg-white"
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className={`absolute bottom-3 right-3 px-2.5 py-1.5 rounded-lg text-xs font-semibold ${
                isDark ? "bg-slate-900/70 text-white" : "bg-white/90 text-slate-900"
              } shadow border ${isDark ? "border-slate-700" : "border-gray-200"}`}>
                {safeIndex + 1} / {items.length}
              </div>

              {/* Video Controls (carousel only when video) */}
              {isVideo && (
                <>
                  <div className={`absolute bottom-3 left-3 right-24 ${isDark ? "bg-slate-900/70" : "bg-white/90"} backdrop-blur-md rounded-xl px-3 py-2 shadow border ${isDark ? "border-slate-700" : "border-gray-200"}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                      <button className={`px-2 py-1 rounded ${isDark ? "bg-slate-800 text-white" : "bg-blue-600 text-white"}`} onClick={() => { const v = videoRef.current; if (!v) return; if (v.paused) { v.play().catch(()=>{}); setIsPlaying(true) } else { v.pause(); setIsPlaying(false) } }}>{isPlaying ? (isRTL ? "إيقاف" : "Pause") : (isRTL ? "تشغيل" : "Play")}</button>
                      <input type="range" min={0} max={duration || 0} step={0.1} value={currentTime} onChange={(e) => { const v = videoRef.current; if (!v) return; const t = Number(e.target.value); v.currentTime = t; setCurrentTime(t) }} className="flex-1" />
                      <select value={playbackRate} onChange={(e) => { const r = Number(e.target.value); setPlaybackRate(r); const v = videoRef.current; if (v) v.playbackRate = r }} className={`text-xs px-2 py-1 rounded ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-900 border"}`}>
                        <option value={0.5}>0.5x</option>
                        <option value={1}>1x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={2}>2x</option>
                      </select>
                      <button className={`px-2 py-1 rounded ${isDark ? "bg-slate-800 text-white" : "bg-white text-slate-900 border"}`} onClick={() => { const v = videoRef.current; if (!v) return; const nv = !isMuted; v.muted = nv; setIsMuted(nv) }}>{isMuted ? (isRTL ? "بدون صوت" : "Muted") : (isRTL ? "بصوت" : "Sound")}</button>
                      <input type="range" min={0} max={1} step={0.05} value={volume} onChange={(e) => { const v = videoRef.current; const vol = Number(e.target.value); setVolume(vol); if (v) v.volume = vol }} />
                    </div>
                  </div>
                  {/* Center Play/Pause button */}
                  <button
                    aria-label="toggle play"
                    onClick={() => { const v = videoRef.current; if (!v) return; if (v.paused) { v.play().catch(()=>{}); setIsPlaying(true) } else { v.pause(); setIsPlaying(false) } }}
                    className={`absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${isDark ? "bg-slate-900/60 text-white hover:bg-slate-900/80" : "bg-white/80 text-slate-900 hover:bg-white"}`}
                    style={{ width: 64, height: 64 }}
                  >
                    <PlayCircle className={`w-10 h-10 ${isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100"} transition`} />
                  </button>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!currentItem && (
          <div className="relative w-full h-[60vh] max-h-[640px] min-h-[360px] flex items-center justify-center">
            <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t("gallery.noItems")}
            </div>
          </div>
        )}

        {/* Thumbnail strip (md+) */}
        {items.length > 1 && !hideThumbnails && (
          <div className="hidden md:block absolute inset-x-0 bottom-0 pb-2 pt-8 px-3">
            <div className="flex gap-2 overflow-x-auto">
              {items.slice(0, 20).map((thumb, i) => {
                const selected = i === safeIndex
                return (
                  <button
                    key={`thumb-${thumb.filename}-${i}`}
                    onClick={() => setIndex(i)}
                    className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border transition-all ${
                      selected
                        ? isDark ? "border-blue-400 ring-2 ring-blue-400/40" : "border-blue-600 ring-2 ring-blue-600/30"
                        : isDark ? "border-slate-700" : "border-gray-300"
                    }`}
                    aria-label={`Go to ${i + 1}`}
                  >
                    <Image src={thumb.src} alt={thumb.filename} fill className="object-cover" sizes="10vw" />
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Pagination dots (mobile) */}
      {items.length > 1 && (
        <div className="flex md:hidden items-center justify-center gap-2 mt-3">
          {items.slice(0, 8).map((_, i) => {
            const active = i === safeIndex
            return (
              <button
                key={`dot-${i}`}
                aria-label={`Go to ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`${
                  active
                    ? "w-6 h-2 rounded-full bg-blue-600"
                    : isDark ? "w-2 h-2 rounded-full bg-slate-500" : "w-2 h-2 rounded-full bg-gray-300"
                } transition-all`}
              />
            )
          })}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="lightbox"
        >
          <div className="relative w-full max-w-5xl h-[70vh]">
            <Image src={lightbox.src} alt={lightbox.title} fill className="object-contain" sizes="100vw" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 px-3 py-1 rounded-lg text-sm font-semibold bg-white text-slate-900 shadow"
            >
              {t("common.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}