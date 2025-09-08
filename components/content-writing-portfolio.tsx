"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, TrendingUp, PenTool } from "lucide-react"
import { useTranslationContext } from "@/hooks/translation-provider"
import { useTheme } from "@/hooks/use-theme"
import { Button } from "@/components/ui/button"
import { contentWritingPortfolio } from "@/data/content-writing-portfolio"
import Image from "next/image"

interface ContentWritingPortfolioProps {
  category?: string | null
  compact?: boolean
  randomCount?: number
  selectedIds?: string[]
}

export default function ContentWritingPortfolio({ 
  category = null, 
  compact = false, 
  randomCount, 
  selectedIds 
}: ContentWritingPortfolioProps) {
  const { t, isRTL } = useTranslationContext()
  const { isDark } = useTheme()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(category || "all")
  const containerRef = useRef<HTMLDivElement>(null)

  // Debug: Log the data to ensure it's loaded
  console.log("Content Writing Portfolio Data:", contentWritingPortfolio)
  console.log("Number of projects:", contentWritingPortfolio.length)

  // Local bilingual service labels mapping
  const SERVICE_LABELS: Record<string, { en: string; ar: string }> = {
    "Content Strategy": { en: "Content Strategy", ar: "استراتيجية المحتوى" },
    "Copywriting": { en: "Copywriting", ar: "كتابة الإعلانات" },
    "Social Media Content": { en: "Social Media Content", ar: "محتوى وسائل التواصل" },
    "Technical Writing": { en: "Technical Writing", ar: "الكتابة التقنية" },
    "Case Studies": { en: "Case Studies", ar: "دراسات الحالة" },
    "Industry Reports": { en: "Industry Reports", ar: "تقارير الصناعة" },
    "International Content": { en: "International Content", ar: "محتوى دولي" },
    "Logistics Writing": { en: "Logistics Writing", ar: "كتابة اللوجستيات" },
    "Trade Documentation": { en: "Trade Documentation", ar: "توثيق التجارة" },
    "Product Descriptions": { en: "Product Descriptions", ar: "وصف المنتجات" },
    "Craftsmanship Stories": { en: "Craftsmanship Stories", ar: "قصص الحرفية" },
    "Design Content": { en: "Design Content", ar: "محتوى التصميم" },
    "Product Marketing": { en: "Product Marketing", ar: "تسويق المنتجات" },
    "Installation Guides": { en: "Installation Guides", ar: "أدلة التركيب" },
    "Travel Guides": { en: "Travel Guides", ar: "أدلة السفر" },
    "Visa Information": { en: "Visa Information", ar: "معلومات التأشيرة" },
    "Destination Content": { en: "Destination Content", ar: "محتوى الوجهات" },
    "Property Descriptions": { en: "Property Descriptions", ar: "وصف العقارات" },
    "Real Estate Marketing": { en: "Real Estate Marketing", ar: "تسويق العقارات" },
    "Investment Content": { en: "Investment Content", ar: "محتوى الاستثمار" },
    "Menu Descriptions": { en: "Menu Descriptions", ar: "وصف القوائم" },
    "Food Photography": { en: "Food Photography", ar: "تصوير الطعام" },
    "Restaurant Marketing": { en: "Restaurant Marketing", ar: "تسويق المطاعم" },
    "Company Profile": { en: "Company Profile", ar: "ملف الشركة" },
    "Brand Storytelling": { en: "Brand Storytelling", ar: "رواية العلامة التجارية" },
    "Corporate Communication": { en: "Corporate Communication", ar: "التواصل المؤسسي" }
  }

  const getServiceLabel = (service: string) => {
    const mapped = SERVICE_LABELS[service]
    if (!mapped) return service
    return isRTL ? mapped.ar : mapped.en
  }

  // Category groups for content writing
  const CATEGORY_GROUPS: Array<{ id: string; name: string; nameAr: string; match: string[] }> = [
    {
      id: "fashion",
      name: "Fashion & Beauty",
      nameAr: "أزياء وجمال",
      match: ["Fashion", "Beauty", "Clothing", "الأزياء", "الجمال", "الملابس"]
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      nameAr: "تصنيع",
      match: ["Manufacturing", "Industrial", "Furniture", "Wood", "Kitchen", "التصنيع", "الصناعي", "الأثاث", "الخشب", "المطبخ"]
    },
    {
      id: "trade",
      name: "Trade & Logistics",
      nameAr: "تجارة ولوجستيات",
      match: ["Export", "Logistics", "Trade", "International", "التصدير", "النقل", "التجارة", "الدولي"]
    },
    {
      id: "services",
      name: "Services",
      nameAr: "خدمات",
      match: ["Travel", "Real Estate", "Restaurant", "Food", "السفر", "العقارات", "المطاعم", "الطعام"]
    },
    {
      id: "corporate",
      name: "Corporate",
      nameAr: "مؤسسي",
      match: ["Company", "Corporate", "Brand", "الشركة", "المؤسسي", "العلامة"]
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
  contentWritingPortfolio.forEach((p) => {
    const g = getProjectGroup(p.category, p.categoryAr)
    projectIdToGroupId.set(p.id, g.id)
  })

  const categories = (() => {
    const present = new Set<string>()
    contentWritingPortfolio.forEach((p) => {
      const gid = projectIdToGroupId.get(p.id)!
      present.add(gid)
    })
    const list = CATEGORY_GROUPS.filter((g) => present.has(g.id)).map((g) => ({ id: g.id, name: g.name, nameAr: g.nameAr }))
    return [{ id: "all", name: t("portfolio.allCategories"), nameAr: "جميع الفئات" }, ...list]
  })()

  const filteredProjects = selectedIds && selectedIds.length > 0
    ? selectedIds
        .map((id) => contentWritingPortfolio.find((p) => p.id === id))
        .filter(Boolean) as typeof contentWritingPortfolio
    : selectedCategory === "all"
      ? contentWritingPortfolio
      : contentWritingPortfolio.filter((project) => projectIdToGroupId.get(project.id) === selectedCategory)

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
    ? contentWritingPortfolio.find(p => p.id === selectedProject) 
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

  // Early return if no data
  if (!contentWritingPortfolio || contentWritingPortfolio.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📝</div>
        <h3 className="text-2xl font-bold mb-2">No Content Writing Projects Found</h3>
        <p>Please check the data file and ensure images are properly loaded.</p>
      </div>
    )
  }

  return (
    <section
      id="content-writing-portfolio"
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
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${
              isDark ? "bg-blue-600/20" : "bg-blue-100"
            }`}>
              <PenTool size={48} className={isDark ? "text-blue-400" : "text-blue-600"} />
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {isRTL ? "مشاريع كتابة المحتوى" : "Content Writing Projects"}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "اكتشف كيف ساعدت شركة أي براند عملائها في زيادة مبيعاتهم ووزنهم في السوق من خلال استراتيجيات كتابة المحتوى المبتكرة"
              : "Discover how iBrand helped clients increase sales and market weight through innovative content writing strategies"
            }
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
                  ? `${isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"} shadow-blue-500/30`
                  : `${isDark ? "bg-slate-800 text-gray-300 hover:bg-slate-700" : "bg-white text-gray-700 hover:bg-blue-50"} border ${isDark ? "border-slate-700" : "border-gray-200"}`
              }`}
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
              .slice(0, compact ? 3 : (randomCount ? randomizedProjects.length : filteredProjects.length))
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
                } shadow-blue-300/10 hover:shadow-blue-400/20 transition-all duration-500 cursor-pointer border ${
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
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

                  {/* Content Writing Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                      isDark ? "bg-blue-600/90 text-white" : "bg-blue-500/90 text-white"
                    } backdrop-blur-sm`}>
                      <PenTool size={12} />
                      {isRTL ? "كتابة محتوى" : "Content Writing"}
                    </div>
                  </div>
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
                  
                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.slice(0, 2).map((service, idx) => {
                      const short = service.split(/[,&]/)[0].trim()
                      const label = short.length > 14 ? short.slice(0, 12) + "…" : short
                      return (
                        <span
                          key={idx}
                          className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                            isDark ? "bg-slate-700 text-gray-300" : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {getServiceLabel(label)}
                        </span>
                      )
                    })}
                  </div>

                  {/* Client & Duration */}
                  <div className={`flex justify-between items-center text-sm ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    <span>{isRTL ? project.clientAr : project.client}</span>
                    <span>{isRTL ? project.durationAr : project.duration}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <Button
                      className="w-full bg-white text-purple-600 hover:bg-gray-100 py-3 rounded-2xl font-semibold"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProject(project.id)
                      }}
                    >
                      {isRTL ? "عرض المشروع" : "View Project"}
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
              📝
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              {isRTL ? "لا توجد مشاريع" : "No Projects Found"}
            </h3>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {isRTL ? "جرب فئة مختلفة أو تحقق من المشاريع المتاحة" : "Try a different category or check available projects"}
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
              } shadow-blue-500/20`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 z-20 p-3 rounded-full ${
                  isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-gray-800 hover:bg-gray-100"
                } shadow-blue-500/20 transition-colors duration-200`}
              >
                <X size={24} />
              </button>

              {/* Image Gallery */}
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
                      className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                        isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                      } shadow-blue-500/20 transition-colors duration-200`}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
                        isDark ? "bg-slate-800/80 text-white hover:bg-slate-700" : "bg-white/80 text-gray-800 hover:bg-white"
                      } shadow-blue-500/20 transition-colors duration-200`}
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

              {/* Project Details */}
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
                          {isRTL ? "الخدمات المقدمة" : "Services Provided"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProjectData.services.map((service, idx) => (
                            <span
                              key={idx}
                              title={getServiceLabel(service)}
                              className={`px-4 py-2 rounded-xl text-sm font-medium border shadow-blue-500/20 transition-transform duration-200 ${
                                isDark ? "bg-slate-800 text-purple-300 border-slate-700 hover:scale-[1.02]" : "bg-white text-purple-800 border-gray-200 hover:scale-[1.02]"
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
                          {isRTL ? "النتائج المحققة" : "Achieved Results"}
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
                                  {isRTL ? result.metricAr : result.metric}
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
                                {isRTL ? result.descriptionAr : result.description}
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
                              {isRTL ? "العميل" : "Client"}
                            </span>
                            <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                              {isRTL ? selectedProjectData.clientAr : selectedProjectData.client}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {isRTL ? "المدة" : "Duration"}
                            </span>
                            <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                              {isRTL ? selectedProjectData.durationAr : selectedProjectData.duration}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              {isRTL ? "الفئة" : "Category"}
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
                        {isRTL ? "معرض الصور" : "Image Gallery"}
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-2">
                        {selectedProjectData.images.map((image, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${
                              currentImageIndex === idx
                                ? "border-purple-500 scale-105"
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
