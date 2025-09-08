"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2, Download, Share2, Heart, Info, X } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/hooks/use-theme"
import { useTranslationContext } from "@/hooks/translation-provider"

const featuredProjects = [
  {
    id: 1,
    title: "King Wood Furniture",
    titleAr: "أثاث كينج وود",
    category: "Furniture & Interior Design",
    categoryAr: "الأثاث والتصميم الداخلي",
    description: "Premium furniture company specializing in luxury home furnishings",
    descriptionAr: "شركة أثاث فاخرة متخصصة في أثاث المنازل الفاخر",
    images: [
      "/portfolio/كينج وود/1.jpg",
      "/portfolio/كينج وود/4.jpg",
      "/portfolio/كينج وود/5.jpg",
      "/portfolio/كينج وود/6.jpg",
      "/portfolio/كينج وود/8.jpg",
      "/portfolio/كينج وود/10.jpg",
      "/portfolio/كينج وود/11.jpg",
      "/portfolio/كينج وود/12.jpg"
    ],
    stats: {
      projects: 150,
      clients: 80,
      experience: "8+ Years",
      location: "Damietta, Egypt"
    }
  },
  {
    id: 2,
    title: "High Brand Fashion",
    titleAr: "هاي براند للأزياء",
    category: "Fashion & Beauty",
    categoryAr: "الأزياء والجمال",
    description: "Luxury fashion brand offering high-end clothing and accessories",
    descriptionAr: "علامة أزياء فاخرة تقدم ملابس وإكسسوارات عالية الجودة",
    images: [
      "/portfolio/هاي براند/1.jpg",
      "/portfolio/هاي براند/2.jpg",
      "/portfolio/هاي براند/3.jpg",
      "/portfolio/هاي براند/4.jpg",
      "/portfolio/هاي براند/5(1).jpg",
      "/portfolio/هاي براند/6(1).jpg",
      "/portfolio/هاي براند/7.jpg",
      "/portfolio/هاي براند/8.jpg"
    ],
    stats: {
      projects: 200,
      clients: 120,
      experience: "5+ Years",
      location: "Cairo, Egypt"
    }
  },
  {
    id: 3,
    title: "United Brothers Food",
    titleAr: "الاخوة المتحدون للطعام",
    category: "Food & Beverage",
    categoryAr: "الطعام والمشروبات",
    description: "Traditional food company providing authentic local cuisine",
    descriptionAr: "شركة طعام تقليدية تقدم المأكولات المحلية الأصيلة",
    images: [
      "/portfolio/الاخوة المتحدون/1.jpg",
      "/portfolio/الاخوة المتحدون/3.jpg",
      "/portfolio/الاخوة المتحدون/4.jpg",
      "/portfolio/الاخوة المتحدون/27.jpg",
      "/portfolio/الاخوة المتحدون/مطبخ اخضر.jpg",
      "/portfolio/الاخوة المتحدون/غلاف لطفي 1.jpg",
      "/portfolio/الاخوة المتحدون/pvc 2 الاساسي.jpg",
      "/portfolio/الاخوة المتحدون/POLY LAC.jpg"
    ],
    stats: {
      projects: 80,
      clients: 45,
      experience: "12+ Years",
      location: "Damietta, Egypt"
    }
  },
  {
    id: 4,
    title: "Al-Najah Al-Mu'tamad",
    titleAr: "الإنجاز المعتمد",
    category: "Construction & Development",
    categoryAr: "البناء والتطوير",
    description: "Trusted construction company delivering quality projects",
    descriptionAr: "شركة بناء موثوقة تقدم مشاريع عالية الجودة",
    images: [
      "/portfolio/الانجاز المعتمد/2.jpg",
      "/portfolio/الانجاز المعتمد/4.jpg",
      "/portfolio/الانجاز المعتمد/5.jpg",
      "/portfolio/الانجاز المعتمد/7.jpg",
      "/portfolio/الانجاز المعتمد/8.jpg",
      "/portfolio/الانجاز المعتمد/9.jpg",
      "/portfolio/الانجاز المعتمد/11.jpg"
    ],
    stats: {
      projects: 95,
      clients: 60,
      experience: "10+ Years",
      location: "Damietta, Egypt"
    }
  },
  {
    id: 5,
    title: "Kashkha Al-Zain",
    titleAr: "كشخة الزين",
    category: "Beauty & Cosmetics",
    categoryAr: "الجمال ومستحضرات التجميل",
    description: "Premium beauty and cosmetics brand for modern women",
    descriptionAr: "علامة تجميل ومستحضرات تجميل فاخرة للمرأة العصرية",
    images: [
      "/portfolio/كشخة الزين/1.jpg",
      "/portfolio/كشخة الزين/2تصميم كشخة الزين .png",
      "/portfolio/كشخة الزين/3تصميم كشخة الزين .png",
      "/portfolio/كشخة الزين/4تصميم كشخة الزين  (1).png",
      "/portfolio/كشخة الزين/5تصميم كشخة الزين .png",
      "/portfolio/كشخة الزين/عيد.jpg"
    ],
    stats: {
      projects: 120,
      clients: 85,
      experience: "6+ Years",
      location: "Cairo, Egypt"
    }
  },
  {
    id: 6,
    title: "Radwan Company",
    titleAr: "شركة رضوان",
    category: "General Trading",
    categoryAr: "التجارة العامة",
    description: "Diversified trading company with multiple business interests",
    descriptionAr: "شركة تجارية متنوعة مع اهتمامات تجارية متعددة",
    images: [
      "/portfolio/رضوان/1.jpg",
      "/portfolio/رضوان/2- .png",
      "/portfolio/رضوان/3مصنع راضوان 3-5.png",
      "/portfolio/رضوان/4.png",
      "/portfolio/رضوان/7منشور 7 شهر 5.png",
      "/portfolio/رضوان/8.png"
    ],
    stats: {
      projects: 180,
      clients: 110,
      experience: "15+ Years",
      location: "Damietta, Egypt"
    }
  }
]

export default function FeaturedProjects() {
  const { isDark } = useTheme()
  const { isRTL } = useTranslationContext()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section 
      ref={ref}
      className={`py-20 ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-800" : "bg-gradient-to-br from-blue-50 to-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {isRTL ? "مشاريع مميزة" : "Featured Projects"}
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            {isRTL 
              ? "تعرف على بعض من أفضل أعمالنا التي أحدثت فارقاً حقيقياً"
              : "Discover some of our best work that made a real difference"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
              }`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image/Video */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-slate-700">
                {/* Multiple Images Carousel */}
                <div className="relative w-full h-full p-4">
                  {project.images.slice(0, 3).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute inset-4 transition-opacity duration-1000 ${
                        imgIndex === 0 ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        animation: imgIndex === 0 ? 'fadeInOut 6s infinite' : 'none'
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${imgIndex + 1}`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        priority={index === 0 && imgIndex === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                    {project.images.length} صور
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    isDark ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"
                  }`}>
                    {isRTL ? project.categoryAr : project.category}
                  </span>
                </div>

                {/* Hover Effect - Show More Images Preview */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-1">
                      {project.images.slice(0, 4).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="w-8 h-8 rounded border-2 border-white overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt={`${project.title} - Preview ${imgIndex + 1}`}
                            width={32}
                            height={32}
                            className="object-contain w-full h-full bg-white/80"
                          />
                        </div>
                      ))}
                      {project.images.length > 4 && (
                        <div className="w-8 h-8 rounded border-2 border-white bg-black/50 flex items-center justify-center text-white text-xs font-bold">
                          +{project.images.length - 4}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}>
                  {isRTL ? project.titleAr : project.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-4 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}>
                  {isRTL ? project.descriptionAr : project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className={`flex items-center gap-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    <span>📊</span>
                    <span>{project.stats.projects} Projects</span>
                  </div>
                  <div className={`flex items-center gap-1 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    <span>👥</span>
                    <span>{project.stats.clients} Clients</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {project.stats.experience} • {project.stats.location}
                  </span>
                  
                  <motion.span 
                    className={`text-xs font-semibold ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {isRTL ? "انقر للعرض" : "Click to view"}
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
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
                  className={`absolute top-4 right-4 z-20 p-3 rounded-full ${
                    isDark ? "bg-slate-800 text-white hover:bg-slate-700" : "bg-white text-gray-800 hover:bg-gray-100"
                  } shadow-lg transition-colors duration-200`}
                >
                  <X size={24} />
                </button>

                {/* Image Gallery */}
                <div className={`relative h-96 md:h-[500px] overflow-hidden ${isDark ? "bg-slate-900" : "bg-white"}`}>
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain p-4"
                    priority={true}
                  />
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                  >
                    →
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-16 h-16 rounded border-2 overflow-hidden transition-all duration-200 bg-gray-100 dark:bg-slate-700 ${
                          index === currentImageIndex 
                            ? 'border-blue-500 scale-110' 
                            : 'border-white/50 hover:border-white'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - Thumbnail ${index + 1}`}
                          width={64}
                          height={64}
                          className="object-contain w-full h-full bg-gray-100 dark:bg-slate-700"
                        />
                      </button>
                    ))}
                  </div>
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
                          {isRTL ? selectedProject.titleAr : selectedProject.title}
                        </h2>
                        <p className={`text-lg mb-6 leading-relaxed ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}>
                          {isRTL ? selectedProject.descriptionAr : selectedProject.description}
                        </p>

                        {/* Category */}
                        <div className="mb-6">
                          <h4 className={`text-lg font-semibold mb-3 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}>
                            {isRTL ? "التصنيف" : "Category"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            <span
                              className={`px-4 py-2 rounded-xl text-sm font-medium border shadow-sm transition-transform duration-200 ${
                                isDark ? "bg-slate-800 text-blue-300 border-slate-700 hover:scale-[1.02]" : "bg-white text-blue-800 border-gray-200 hover:scale-[1.02]"
                              }`}
                            >
                              {isRTL ? selectedProject.categoryAr : selectedProject.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div>
                        {/* Project Stats */}
                        <div className="mb-6">
                          <h4 className={`text-lg font-semibold mb-3 ${
                            isDark ? "text-white" : "text-slate-900"
                          }`}>
                            {isRTL ? "إحصائيات المشروع" : "Project Statistics"}
                          </h4>
                          <div className="space-y-3">
                            <div className={`p-4 rounded-2xl ${
                              isDark ? "bg-slate-800" : "bg-gray-50"
                            } border ${
                              isDark ? "border-slate-700" : "border-gray-200"
                            }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}>
                                  {isRTL ? "المشاريع المكتملة" : "Completed Projects"}
                                </span>
                                <span className={`text-2xl font-bold ${
                                  isDark ? "text-blue-400" : "text-blue-600"
                                }`}>
                                  {selectedProject.stats.projects}+
                                </span>
                              </div>
                            </div>
                            <div className={`p-4 rounded-2xl ${
                              isDark ? "bg-slate-800" : "bg-gray-50"
                            } border ${
                              isDark ? "border-slate-700" : "border-gray-200"
                            }`}>
                              <div className="flex items-center justify-between mb-1">
                                <span className={`font-medium ${
                                  isDark ? "text-white" : "text-slate-900"
                                }`}>
                                  {isRTL ? "العملاء السعداء" : "Happy Clients"}
                                </span>
                                <span className={`text-2xl font-bold ${
                                  isDark ? "text-green-400" : "text-green-600"
                                }`}>
                                  {selectedProject.stats.clients}+
                                </span>
                              </div>
                            </div>
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
                                {isRTL ? "الخبرة" : "Experience"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedProject.stats.experience}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "الموقع" : "Location"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {selectedProject.stats.location}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {isRTL ? "التصنيف" : "Category"}
                              </span>
                              <span className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                                {isRTL ? selectedProject.categoryAr : selectedProject.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}
