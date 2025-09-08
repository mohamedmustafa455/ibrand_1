"use client"

import { useState } from "react"
import { useTranslationContext } from "@/hooks/translation-provider"
import ServiceResultsGallery from "@/components/service-results-gallery"

type Tab = { id: string; label: string }

const TABS: Tab[] = [
  { id: "visual-identity", label: "services.visualIdentity" },
  { id: "graphic-design", label: "services.graphicDesign" },
  { id: "content-writing", label: "services.contentWriting" },
  { id: "sponsored-ads", label: "services.sponsoredAds" },
  { id: "monthly-management", label: "services.monthlyManagement" },
  { id: "video-editing", label: "services.videoEditing" },
  { id: "motion-graphics", label: "services.motionGraphics" },
  { id: "voiceover", label: "services.voiceover" },
]

export default function PortfolioResults() {
  const [active, setActive] = useState<string>(TABS[0].id)
  const { t } = useTranslationContext()

  return (
    <section className="py-16 bg-gradient-to-br from-sky-50 via-white to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">
          {t("gallery.header")}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-3 py-2 rounded-xl text-sm font-semibold border transition-all ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow"
                    : "bg-white/70 border-gray-300 text-gray-700 dark:bg-slate-800/60 dark:border-slate-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700"
                }`}
              >
                {t(tab.label)}
              </button>
            )
          })}
        </div>

        {/* Active gallery */}
        <ServiceResultsGallery serviceId={active} variant="portfolio" heightClass="h-[48vh] md:h-[56vh]" hideThumbnails />
      </div>
    </section>
  )
}






