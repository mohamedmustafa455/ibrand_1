"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, TrendingUp } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio-data"
import Image from "next/image"

interface PortfolioProps {
  category?: string | null
  compact?: boolean
  randomCount?: number
  selectedIds?: string[]
}

export default function Portfolio({ category = null, compact = false, randomCount, selectedIds }: PortfolioProps) {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(category || "all")
  const containerRef = useRef<HTMLDivElement>(null)

  // Local bilingual service labels mapping to display Arabic names for services
  const SERVICE_LABELS: Record<string, { en: string; ar: string }> = {
    "Clothing": { en: "Clothing", ar: "ملابس" },
    "Graphic Design": { en: "Graphic Design", ar: "تصميم جرافيك" },
    "Marketing Materials": { en: "Marketing Materials", ar: "مواد تسويقية" },
    "Product Photography": { en: "Product Photography", ar: "تصوير منتجات" },
    "Catalog Design": { en: "Catalog Design", ar: "تصميم كتالوج" },
    "Digital Marketing": { en: "Digital Marketing", ar: "تسويق رقمي" },
    "Brand Identity": { en: "Brand Identity", ar: "الهوية البصرية" },
    "Packaging Design": { en: "Packaging Design", ar: "تصميم تغليف" },
    "Marketing Campaign": { en: "Marketing Campaign", ar: "حملة تسويقية" },
    "Educational Branding": { en: "Educational Branding", ar: "علامة تعليمية" },
    "Content Creation": { en: "Content Creation", ar: "صناعة محتوى" },
    "Export": { en: "Export", ar: "تصدير" },
    "Property Marketing": { en: "Property Marketing", ar: "تسويق عقاري" },
    "Digital Campaigns": { en: "Digital Campaigns", ar: "حملات رقمية" },
    "Fashion Branding": { en: "Fashion Branding", ar: "علامة أزياء" },
    "ready-to-wear": { en: "Ready-to-Wear", ar: "ملابس جاهزة" },
    "Fashion Marketing": { en: "Fashion Marketing", ar: "تسويق أزياء" },
    "Restaurant Branding": { en: "Restaurant Branding", ar: "علامة مطعم" },
    "Menu Design": { en: "Menu Design", ar: "تصميم قائمة" },
    "Food Delivery Branding": { en: "Food Delivery Branding", ar: "علامة توصيل طعام" },
    "App Design": { en: "App Design", ar: "تصميم تطبيق" },
    "Career Development Branding": { en: "Career Development Branding", ar: "علامة تطوير مهني" },
    "Educational Content": { en: "Educational Content", ar: "محتوى تعليمي" },
    "Tourism Branding": { en: "Tourism Branding", ar: "علامة سياحية" },
    "Destination Marketing": { en: "Destination Marketing", ar: "تسويق وجهة" },
    "Food Retail Branding": { en: "Food Retail Branding", ar: "علامة تجارة أغذية" },
    "Product Marketing": { en: "Product Marketing", ar: "تسويق منتجات" },
    "Traditional Marketing": { en: "Traditional Marketing", ar: "تسويق تقليدي" },
    "Educational Certification Branding": { en: "Educational Certification Branding", ar: "علامة شهادات تعليمية" },
    "Digital Platforms": { en: "Digital Platforms", ar: "منصات رقمية" },
    "Achievement Recognition": { en: "Achievement Recognition", ar: "اعتراف بالإنجاز" }
  }

  const getServiceLabel = (service: string) => {
    const mapped = SERVICE_LABELS[service]
    if (!mapped) return service
    return isRTL ? mapped.ar : mapped.en
  }

  // Simplified top-level category buckets (3-4 max)
  const CATEGORY_GROUPS: Array<{ id: string; name: string; nameAr: string; match: string[] }> = [
    {
      id: "fashion",
      name: "Fashion & Beauty",
      nameAr: "أزياء وجمال",
      match: [
        "Clothing",
        "Fashion",
        "Cosmetics",
        "ready-to-wear",
        "Luxury",
        "الأزياء",
        "الملابس",
        "مستحضرات",
        "الجمال"
      ]
    },
    {
      id: "business",
      name: "Business & Services",
      nameAr: "أعمال وخدمات",
      match: [
        "Furniture",
        "Interior",
        "Food",
        "Restaurant",
        "Kitchen",
        "Delivery",
        "Retail",
        "Traditional",
        "Export",
        "Import",
        "Transport",
        "Property",
        "الأثاث",
        "التصميم الداخلي",
        "تجهيز المطابخ",
        "المطاعم",
        "طعام",
        "تجارة",
        "المنتجات",
        "التصدير",
        "الاستيراد",
        "النقل",
        "عقاري"
      ]
    },
    {
      id: "education",
      name: "Education & Development",
      nameAr: "تعليم وتطوير",
      match: [
        "Education",
        "Qur'an",
        "Quran",
        "Certification",
        "Career",
        "Development",
        "التعليم",
        "تحفيظ",
        "الشهادات",
        "اعتمادات",
        "المهن",
        "تطوير"
      ]
    },
    {
      id: "tourism",
      name: "Tourism & Travel",
      nameAr: "سياحة وسفر",
      match: [
        "Tourism",
        "Travel",
        "Destination",
        "السياحة",
        "السفر",
        "وجهة"
      ]
    }
  ]

  const getProjectGroup = (catEn: string, catAr: string) => {
    const text = `${catEn || ""} ${catAr || ""}`.toLowerCase()
    for (const g of CATEGORY_GROUPS) {
      if (g.match.some((m) => text.includes(m.toLowerCase()))) return g
    }
    return CATEGORY_GROUPS[CATEGORY_GROUPS.length - 1]
  }

  const projectIdToGroupId = new Map<string, string>()
  portfolioData.forEach((p) => {
    const g = getProjectGroup(p.category, p.categoryAr)
    projectIdToGroupId.set(p.id, g.id)
  })

  const categories = (() => {
    // Build grouped categories present in data
    const present = new Set<string>()
    portfolioData.forEach((p) => {
      const gid = projectIdToGroupId.get(p.id)!
      present.add(gid)
    })
    const list = CATEGORY_GROUPS.filter((g) => present.has(g.id)).map((g) => ({ id: g.id, name: g.name, nameAr: g.nameAr }))
    return [{ id: "all", name: t("portfolio.allCategories"), nameAr: "جميع الفئات" }, ...list]
  })()

  const filteredProjects = selectedIds && selectedIds.length > 0
    ? selectedIds
        .map((id) => portfolioData.find((p) => p.id === id))
        .filter(Boolean) as typeof portfolioData
    : selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter((project) => projectIdToGroupId.get(project.id) === selectedCategory)

  const randomizedProjects = (() => {
    if (!randomCount || randomCount <= 0) return filteredProjects
    const copy = [...filteredProjects]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const tmp = copy[i]
      copy[i] = copy[j]
      copy[j] = tmp
    }
    return copy.slice(0, Math.min(randomCount, copy.length))
  })()

  const selectedProjectData = selectedProject 
    ? portfolioData.find(p => p.id === selectedProject) 
    : null

  const nextImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => 
        prev === selectedProjectData.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProjectData.images.length - 1 : prev - 1
      )
    }
  }

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0)
    }
  }, [selectedProject])

  // Autoplay selected project images in modal
  useEffect(() => {
    if (!selectedProjectData || !autoPlay || selectedProjectData.images.length <= 1) return
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => prev === selectedProjectData.images.length - 1 ? 0 : prev + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [selectedProjectData, autoPlay])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section
      id="portfolio"
      className={`relative py-20 overflow-hidden ${
        isDark ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 to-white"
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 w-32 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm animate-float-3d" />
        <div className="absolute -right-16 top-1/3 w-28 h-36 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/4 bottom-20 w-24 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-xl backdrop-blur-sm animate-float-3d" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
              {t("portfolio.title")}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {t("portfolio.description")}
          </p>
        </motion.div>

        {/* Category Filter */}
        {!category && !(selectedIds && selectedIds.length > 0) && (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `${isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"} shadow-lg`
                  : `${isDark ? "bg-slate-800 text-gray-300 hover:bg-slate-700" : "bg-white text-gray-700 hover:bg-blue-50"} border ${isDark ? "border-slate-700" : "border-gray-200"}`
              }`}
              aria-pressed={selectedCategory === category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isRTL ? category.nameAr : category.name}
            </motion.button>
          ))}
        </motion.div>
        )}

        {/* Portfolio Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {(randomCount ? randomizedProjects : filteredProjects)
              .slice(0, compact ? 6 : (randomCount ? randomizedProjects.length : filteredProjects.length))
              .map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl hover-sparkle ${
                  isDark ? "bg-slate-800" : "bg-white"
                } shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border ${
                  isDark ? "border-slate-700" : "border-gray-200"
                }`}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className={`relative h-72 overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}>
                  <Image
                    src={project.images[0]}
                    alt={isRTL ? project.titleAr : project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge (Exact from data) */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      isDark ? "bg-blue-600/90 text-white" : "bg-white/90 text-blue-800"
                    } backdrop-blur-sm`}>
                      {isRTL ? project.categoryAr : project.category}
                    </span>
                  </div>

                  {/* Results Badge */}
                  {project.results.length > 0 && (
                    <div className="absolute top-4 right-4">
                      <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        isDark ? "bg-green-600/90 text-white" : "bg-green-500/90 text-white"
                      } backdrop-blur-sm`}>
                        <TrendingUp size={12} />
                        {project.results[0].value}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {isRTL ? project.titleAr : project.title}
                  </h3>
                  <p className={`text-sm mb-4 leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {isRTL ? project.descriptionAr : project.description}
                  </p>
                  
                  {/* Compact Hashtags (max 2) */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {([project.category, project.services[0]]
                      .filter(Boolean) as string[])
                      .slice(0, 2)
                      .map((tag, idx) => {
                        const short = tag.split(/[,&]/)[0].trim()
                        const label = short.length > 14 ? short.slice(0, 12) + "…" : short
                        return (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                              isDark ? "bg-slate-700 text-gray-300" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {label}
                          </span>
                        )
                      })}
                  </div>

                  {/* Client & Duration */}
                  <div className={`flex justify-between items-center text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    <span>{project.client}</span>
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <Button
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-2xl font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project.id)
                      }}
                    >
                      {t("portfolio.viewProject")}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className={`text-6xl mb-4 ${isDark ? "text-gray-600" : "text-gray-300"}`}>
              📁
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {t("portfolio.noProjects")}
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {t("portfolio.tryDifferentCategory")}
            </p>
        </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl ${
                isDark ? "bg-slate-900" : "bg-white"
              } shadow-2xl`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label={t("common.close") || "Close"}
                className={`absolute top-4 right-4 z-20 p-3 rounded-full ${
                  isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-gray-800 hover:bg-gray-100"
                } shadow-lg transition-colors duration-200`}
              >
                <X size={24} />
              </button>

              {/* Image Gallery - honor current index and object-contain to show full image */}
              <div
                className={`relative h-96 md:h-[500px] overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                <Image
                  src={selectedProjectData.images[currentImageIndex]}
                  alt={isRTL ? selectedProjectData.titleAr : selectedProjectData.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority={true}
                />
                
                {/* Navigation Arrows */}
                {selectedProjectData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label={t("common.previous") || "Previous"}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                        isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                      } shadow-lg transition-colors duration-200`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label={t("common.next") || "Next"}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                        isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                      } shadow-lg transition-colors duration-200`}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {selectedProjectData.images.length > 1 && (
                  <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    isDark ? "bg-slate-800/80 text-white" : "bg-white/80 text-gray-800"
                  }`}>
                    {currentImageIndex + 1} / {selectedProjectData.images.length}
                  </div>
                )}
              </div>

              {/* Project Details - Scrollable Content */}
              <div className="max-h-[calc(90vh-500px)] overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h2 className={`text-3xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {isRTL ? selectedProjectData.titleAr : selectedProjectData.title}
                      </h2>
                      <p className={`text-lg mb-6 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {isRTL ? selectedProjectData.descriptionAr : selectedProjectData.description}
                      </p>

                      {/* Services */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {t("portfolio.services")}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProjectData.services.map((service, idx) => (
                            <span
                              key={idx}
                              title={getServiceLabel(service)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border shadow-sm transition-transform duration-200 ${
                                isDark ? "bg-slate-800 text-blue-300 border-slate-700 hover:scale-[1.02]" : "bg-white text-blue-800 border-gray-200 hover:scale-[1.02]"
                              }`}
                            >
                              {getServiceLabel(service)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      {/* Results */}
                      <div className="mb-6">
                        <h4 className={`text-lg font-semibold mb-3 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}>
                          {t("portfolio.ourResults")}
                        </h4>
                        <div className="space-y-3">
                          {selectedProjectData.results.map((result, idx) => (
                            <div
                              key={idx}
                              className={`p-4 rounded-2xl ${
                                isDark ? "bg-slate-800" : "bg-gray-50"
                              } border ${
                                isDark ? "border-slate-700" : "border-gray-200"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}>
                                  {result.metric}
                                </span>
                                <span className={`text-2xl font-bold ${
                                  isDark ? "text-green-400" : "text-green-600"
                                }`}>
                                  {result.value}
                                </span>
                              </div>
                              <p className={`text-sm ${
                                isDark ? "text-gray-400" : "text-gray-600"
                              }`}>
                                {result.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Info */}
                      <div className={`p-4 rounded-2xl ${
                        isDark ? "bg-slate-800" : "bg-gray-50"
                      } border ${
                        isDark ? "border-slate-700" : "border-gray-200"
                      }`}>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {t("portfolio.client")}
                            </span>
                            <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                              {selectedProjectData.client}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {t("portfolio.duration")}
                            </span>
                            <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                              {selectedProjectData.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {t("portfolio.category")}
                            </span>
                            <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                              {isRTL ? selectedProjectData.categoryAr : selectedProjectData.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Gallery */}
                  {selectedProjectData.images.length > 1 && (
                    <div className="mt-8">
                      <h4 className={`text-lg font-semibold mb-3 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {t("portfolio.imageGallery")}
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedProjectData.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                              currentImageIndex === idx
                                ? "border-blue-500 scale-105"
                                : isDark ? "border-slate-600 hover:border-slate-500" : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Image
                              src={image}
                              alt={`${isRTL ? selectedProjectData.titleAr : selectedProjectData.title} ${idx + 1}`}
                              width={96}
                              height={96}
                              className="object-contain bg-white"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}